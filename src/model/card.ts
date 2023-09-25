export class Card {
  id: number;
  name: string;
  image: string;
  sourceImage: string;
  description: string;
  source: string;

  constructor(
    id: number,
    name: string,
    image: string,
    sourceImage: string,
    description: string,
    source: string
  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.sourceImage = sourceImage;
    this.description = description;
    this.source = source;
  }
}
