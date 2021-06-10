import { AppState } from '../AppState'
import { EpicPic } from '../models/EpicPic'
import { NasaPic } from '../models/NasaPic'
import { nasaApi } from '../services/AxiosService'
class NasasApiService {
  async getDailyPic() {
    const res = await nasaApi.get('/planetary/apod?api_key=eX0POKV1RVay4BDh4fvfv7ucg29PZNL1c3zaJ5us')
    AppState.dailyPic = new NasaPic(res.data)
  }

  async searchDailyPic(query) {
    const res = await nasaApi.get('/planetary/apod?api_key=eX0POKV1RVay4BDh4fvfv7ucg29PZNL1c3zaJ5us&date=' + query)
    AppState.dailyPic = new NasaPic(res.data)
  }

  async epicApi(query) {
    const res = await nasaApi.get(`/EPIC/api/natural/date/${query}?api_key=eX0POKV1RVay4BDh4fvfv7ucg29PZNL1c3zaJ5us`)
    const date = query.split('-').join('/')
    const test = new EpicPic(res.data[0], date)
    console.log(test)
    AppState.epicPics = res.data.map(ep => new EpicPic(ep, date))
    console.log(AppState.epicPics)
  }
}

export const nasasApiService = new NasasApiService()
