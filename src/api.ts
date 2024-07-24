import { CardProperties, DefinitionProperties } from "./cardProperties";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";



export const searchWord = async (word: string) :Promise<CardProperties>=> {
    try{
        const newUrl = new URL(url + word);
        const response = await fetch(newUrl);

        if(!response.ok) throw new Error('Word not found');

        const definitions = await response.json();

        const cardInfo: CardProperties ={
            word: definitions[0].word,
            phonetic: definitions[0].phonetic,
            definitions: []
        };
        
        const meanings = definitions[0].meanings
        
        for(let i = 0; i < meanings.length; i++){
            const definitionInfo: DefinitionProperties ={
                partOfSpeach: meanings[i].partOfSpeech,
                definition: meanings[i].definitions[0].definition
            };

            cardInfo.definitions.push(definitionInfo);
        }

        return cardInfo
        
    }catch(error){
        throw error;
    }
}