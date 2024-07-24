import { searchWord } from "./api";
import { CardProperties } from "./cardProperties";

let dictionaryForm: HTMLFormElement
let cardContainer: HTMLElement;

export function setElements(form: HTMLFormElement, container: HTMLElement): void{
  dictionaryForm = form;
  cardContainer = container;
  dictionaryForm.addEventListener('submit', (e:Event)=>{handleSubmit(e)})
}

function handleSubmit(event: Event): void{
  event.preventDefault();
  const target = event.target as HTMLElement;
  const searchInput = target.querySelector<HTMLInputElement>('#search-input');


  if(searchInput){
    if(searchInput.value != ''){
      cardContainer.innerHTML=`
        <div id="empty" class="empty-container">
          <svg class="w-6 h-6 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
          </svg>
          <h1>Searching word ...</h1>
        </div>
        `;
          
      const info = searchWord(searchInput.value)
      info.then((value) => {
        createCard(value);
      }, (reason) => {
        cardContainer.innerHTML = `
          <div id="empty" class="empty-container">
            <img src="/cerca.png">
            <h1>${reason.message}</h1>
          </div>
        `;
      });
    }else{
      cardContainer.innerHTML = `
        <div id="empty" class="empty-container">
          <svg class="w-6 h-6 text-gray-200 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
          </svg>
          <h1>Enter a word to begin learning.</h1>
        </div>
      `;
    }
  }
}

function createCard(value: CardProperties): void{
  const card = document.createElement('div');
  card.classList.add('card');

  const wordLabel = document.createElement('h2');
  console.log(value.phonetic)
  wordLabel.innerHTML = `${value.word} <span> ${value.phonetic != undefined ? value.phonetic : ''}</span>`

  const definitonBlock = document.createElement('div');
  definitonBlock.classList.add('definition-block');

  value.definitions.forEach((definition)=>{
    const partOfSpeachLine = document.createElement('div');
    partOfSpeachLine.classList.add('def-line');
    partOfSpeachLine.innerHTML = `
     <span class="bold">Part of Speech:</span>
     <span> ${definition.partOfSpeach}</span> 
    `;

    const definitionLine = document.createElement('div');
    definitionLine.classList.add('def-line');
    definitionLine.innerHTML = `
     <span class="bold">Definition:</span>
     <span> ${definition.definition}</span> 
    `;

    definitonBlock.appendChild(partOfSpeachLine);
    definitonBlock.appendChild(definitionLine);
  })
  const audioBtn = document.createElement('button');
  audioBtn.classList.add('sound-button');
  audioBtn.innerHTML= `
    <svg width="35px" height="35px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>sound-loud-filled</title>
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="icon" fill="#000000" transform="translate(42.666667, 85.333333)">
          <path d="M361.299413,341.610667 L328.014293,314.98176 C402.206933,233.906133 402.206933,109.96608 328.013013,28.8906667 L361.298133,2.26304 C447.910187,98.97536 447.908907,244.898347 361.299413,341.610667 Z M276.912853,69.77216 L243.588693,96.4309333 C283.38432,138.998613 283.38304,204.87488 243.589973,247.44256 L276.914133,274.101333 C329.118507,215.880107 329.118507,127.992107 276.912853,69.77216 Z M191.749973,1.42108547e-14 L80.8957867,87.2292267 L7.10542736e-15,87.2292267 L7.10542736e-15,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,1.42108547e-14 L191.749973,1.42108547e-14 Z" id="Shape">
          </path>
        </g>
      </g>
    </svg>
  `;
  audioBtn.addEventListener('click',(e)=>speak(value.word));

  card.appendChild(wordLabel);
  card.appendChild(definitonBlock);
  card.appendChild(audioBtn);

  cardContainer.innerHTML = ``;
  cardContainer.appendChild(card);
}

function speak(word: string) :void{
  const speech = new SpeechSynthesisUtterance(word);
  speech.lang = 'en-US';
  speech.volume = 2;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech)
}