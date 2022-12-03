import axios from "axios";

const baseURL = "https://alodiaindojaya.com/api/v1/weather/";

export default axios.create({ baseURL });
