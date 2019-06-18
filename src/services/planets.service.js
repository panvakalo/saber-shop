import axios from 'axios'
const baseUrl = 'https://swapi.co/api/planets'
export default {
  async fetchPlanetData (planetId) {
    const url = `${baseUrl}/` + planetId
    try {
      return await axios.get(url).then(response => response.data)
    } catch (error) {
      throw error
    }
  }
}
