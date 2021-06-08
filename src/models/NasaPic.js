export class NasaPic {
  constructor(data) {
    this.date = data.date
    this.url = data.hdurl || data.url
    this.title = data.title
    this.description = data.explanation
  }
}
