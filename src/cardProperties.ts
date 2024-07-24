export type CardProperties = {
    word: string,
    phonetic: string,
    definitions: DefinitionProperties[]
}

export type DefinitionProperties = {
    partOfSpeach: string,
    definition: string
}