
// LOCAL MODELS
export class CardView {
  imageURL: string;
  name: string;
  setName: string;
  text: string;
  type: string;
}

export class CardsView {
  cards: Array<CardView>;
}

// REMOTE MODELS
export class CardSet {
  id: string;
  name: string;
  self: string;
}

export class Card {
  name: string;
  rarity: string;
  type: string;
  cost: number;

  set: CardSet;

  collectible: boolean;
  text: string;
  attributes: Array<string>;
  unique: string;
  imageUrl: string;
  id: string;
}

export class PayloadSchema {
  pageSize: number;
  totalCount: number;
}

export class CardsPayload extends PayloadSchema {
  cards: Array<Card>;
}
