import axios from "../config/axios";

const handleGetAllHotel = async () => {
  return axios.get("/v1/hotel/read");
};

const handleCreateNewHotel = (data) => {
  return axios.post("/v1/hotel/create", data);
};

export { handleGetAllHotel, handleCreateNewHotel };
