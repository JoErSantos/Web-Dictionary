import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import  { setElements } from './dictionaryLogix.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="main">
    <div id="container">
      <h1>English Dictionary</h1>
      <form id="form">
        <input type="text" id="search-input" placeholder="Enter a word">
        <input type="submit" value="Search" id="search-btn">
      </form>
      <div id="card-container">
        <div id="empty" class="empty-container">
          <svg class="w-6 h-6 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
          </svg>
          <h1>Enter a word to begin learning.</h1>
        </div>
      </div>
    </div>
  </div>
`
setElements(document.querySelector<HTMLFormElement>('#form')!,document.querySelector<HTMLElement>('#card-container')!)
