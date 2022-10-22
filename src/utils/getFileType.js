import { CANNOT_FIND_CSS_ELEMENT } from "../constants/messages.js"

const CSS_SELECTOR_LANGUAGE = '[data-name="file-tab"]'

export function getFileType() {
  const $fileTab = document.querySelector(CSS_SELECTOR_LANGUAGE)
  const exists = !!$fileTab

  if (!exists) { 
    throw new Error(`${CANNOT_FIND_CSS_ELEMENT} with css selector ${CSS_SELECTOR_LANGUAGE}`)
  }
  return  $fileTab.innerText.replace(/\.(\w+)$/, '$1') 
}