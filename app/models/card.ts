export class Card {
    name: string;
    manaCost: string;
    cmc: number;
    colors: string[];
    colorIdentity: string[];
    type: string;
    subtypes: string[];
    rarity: string;
    set: string;
    setName: string;
    text: string;
    flavor: string;
    artist: string;
    power: string;
    toughness: string;
    layout: string;
    multiverseid: number;
    imageUrl: string;
    printings: string[];
    originalText: string;
    originalType: string;
    legalities: CardLegalities[];
    id: string;
}

class CardLegalities {
    format: string;
    legality: string;
}