import puppeteer from  'puppeteer';
import readlineSync from 'readline-sync';
import fs from  'fs';
import { config } from "dotenv"  
config()

const login = {
    email: process.env.CODESIGNAL_LOGIN,
    password: process.env.CODESIGNAL_PASSWORD,
    url: 'https://app.codesignal.com/login'
}

async function capture_codeSignal_data(url) {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {
            width: 1920,
            height: 2080
        }
    });
    
    const page = await browser.newPage();

    // Login to CodeSignal
    await page.goto(login.url);
    await page.waitForTimeout(2000);
    await page.type('#input-1', login.email);
    await page.type('#input-2', login.password);
    await page.click('.coder-login--button');
    console.log('successfully logged in');

    // Go to the challenge
    await page.waitForNavigation();
    await page.goto(url)
    await page.waitForSelector('.view-lines', {
        visible: true,
    })
    await page.waitForTimeout(2000);
    // Get the code and question

    const PageData = await page.evaluate(() => {
        const CSS_SELECTOR_LANGUAGE = '[data-name="file-tab"]'

    function getFileType() {
    const $fileTab = document.querySelector(CSS_SELECTOR_LANGUAGE)
    const exists = !!$fileTab

    if (!exists) { 
        throw new Error(`Não foi possível encontrar o elemento CSS  with css selector ${CSS_SELECTOR_LANGUAGE}`)
        }
        
    // tranform main.ts to ts
    return  $fileTab.innerText.match(/(?<=\.)(\w+)$/g)        
    }
        
        
        // Get the code
        const code = document.querySelectorAll('.view-lines div')
        let code_text = ``
        for (line of code) {
            let lineComplete = ""
            line.querySelectorAll('span span').forEach(span => {
                lineComplete += span.innerText
            })
            code_text += lineComplete + '\n';
        }

        // Get the question
        const question = document.querySelector('.markdown')
        const pre = question.querySelector('pre')
        pre.remove()
        const p = question.querySelectorAll('p')
        p[p.length - 1].remove()

        // Get the Title
        let title = document.querySelector('.task-title--header').innerText;
        title = title.replace(/[\<\>\:\"\/\\\|\?\*]/g, '')
        const fileType = getFileType()
        console.log(fileType)
        // make the object
        const a = {
            code: code_text,
            question: question.outerHTML,
            title,
            fileType: fileType
        }
        const aJSON = JSON.stringify(a)

        return aJSON
    })

    console.log('Captured code');
    const pageDataObj = JSON.parse(PageData);
    createDirectory(url, pageDataObj);

    await browser.close();

}

// ask the user the URL of the challenge
const challengeURL = readlineSync.question('Enter the challenge URL:  ');


// run code 
capture_codeSignal_data(challengeURL);

function createDirectory(url, {
    title,
    question,
    code,
    fileType
}) {

    const regExpDirectory = /(?<=\w\/).+?(?=\/\w)/gi

    let [directory1, directory2] = url.match(regExpDirectory)

    console.log(directory1)
    console.log(directory2)

    if (!fs.existsSync(directory1)) {
        fs.mkdirSync(directory1);
    }
    if (!fs.existsSync(`${directory1}/${directory2}`)) {
        fs.mkdirSync(`${directory1}/${directory2}`);
    }
    if (!fs.existsSync(`${directory1}/${directory2}`)) {
        fs.mkdirSync(`${directory1}/${directory2}`);
    }
    if (!fs.existsSync(`${directory1}/${directory2}/${title}`)) {
        fs.mkdirSync(`${directory1}/${directory2}/${title}`);
    }


    // Write the code to a file
    fs.writeFile(`${directory1}/${directory2}/${title}/question.md`, question, (err) => {
        if (err) throw err;
        console.log('O arquivo "question.md" foi criado');
    });
    fs.writeFile(`${directory1}/${directory2}/${title}/${title}.${fileType}`, code, (err) => {
        if (err) throw err;
        console.log(`O arquivo ${title}.${fileType} foi criado!`);
    });
}