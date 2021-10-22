function incorrectPasscodeAttempts(passcode, attempts) {
        
    let consecutive = 0;
    let answer = false;
    
    console.error(passcode)
    
    attempts.forEach((code) => {
        
        if (code == passcode) consecutive = 0
        else consecutive++
                    
        if (consecutive == 10) answer = true
                
    }) 
    
    return answer
}