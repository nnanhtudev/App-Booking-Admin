import axios from "axios"

const handleGetAllRoom = async () => {
  return axios.get(`/v1/room/read`)
}

const handleGetAllRoomPaginate = async (page, limit) => {
  return axios.get(`/v1/room/read?page=${page}&limit=${limit}`)
}



export { handleGetAllRoomPaginate, handleGetAllRoom }