import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

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

document.querySelector<HTMLDivElement>('#form')!.addEventListener("submit",(e:Event)=>e.preventDefault());


// <div class="card">
// <h2>frog</h2>
// <div class="definition-block">
//   <div class="def-line">
//     <span class="bold">Part of Speech:</span>
//     <span> noun</span>
//   </div>
//   <div class="def-line">
//     <span class="bold">Definiton:</span>
//     <span> 
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel leo ullamcorper enim fermentum vestibulum. 
//     </span>
//   </div>
// </div>
// <button class="sound-button">
//   <svg width="35px" height="35px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//     <title>sound-loud-filled</title>
//     <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//       <g id="icon" fill="#000000" transform="translate(42.666667, 85.333333)">
//         <path d="M361.299413,341.610667 L328.014293,314.98176 C402.206933,233.906133 402.206933,109.96608 328.013013,28.8906667 L361.298133,2.26304 C447.910187,98.97536 447.908907,244.898347 361.299413,341.610667 Z M276.912853,69.77216 L243.588693,96.4309333 C283.38432,138.998613 283.38304,204.87488 243.589973,247.44256 L276.914133,274.101333 C329.118507,215.880107 329.118507,127.992107 276.912853,69.77216 Z M191.749973,1.42108547e-14 L80.8957867,87.2292267 L7.10542736e-15,87.2292267 L7.10542736e-15,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,1.42108547e-14 L191.749973,1.42108547e-14 Z" id="Shape">
//         </path>
//       </g>
//     </g>
//   </svg>
// </button>
// </div>