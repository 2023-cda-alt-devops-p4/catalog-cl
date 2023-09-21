export class Card {
  id: number;
  name: string;
  image: string;
  description: string;
  source: string;

  constructor(
    id: number,
    name: string,
    image: string,
    description: string,
    source: string
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.source = source;
  }
}
