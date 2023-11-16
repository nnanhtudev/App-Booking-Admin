import axios from "axios"

const handleGetAllHotel = async () => {
  return axios.get('/v1/hotel/read')
}

export { handleGetAllHotel }