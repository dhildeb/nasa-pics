import { AppState } from '../AppState'
import { NasaPic } from '../models/NasaPic'
import { nasaApi } from '../services/AxiosService'
class NasasApiService {
  async getDailyPic() {
    const res = await nasaApi.get('/planetary/apod?api_key=eX0POKV1RVay4BDh4fvfv7ucg29PZNL1c3zaJ5us')
    AppState.dailyPic = new NasaPic(res.data)
  }

  async epicApi(query) {
    const res = await nasaApi.get(`/EPIC/api/natural/date/${query}?api_key=eX0POKV1RVay4BDh4fvfv7ucg29PZNL1c3zaJ5us`)
    console.log(res.data)

    query = Date
    // AppState.epicPic = new EpicPic(res.data)
  }
}

export const nasasApiService = new NasasApiService()
