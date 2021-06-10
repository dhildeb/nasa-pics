export class EpicPic {
  constructor(data, date) {
    this.img = `https://epic.gsfc.nasa.gov/archive/natural/${date}/png/${data.image}.png`
    this.date = data.date
  }
}
