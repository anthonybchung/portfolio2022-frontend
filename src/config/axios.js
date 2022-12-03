import axios from "axios";

const baseURL = "https://alodiaindojaya.com/";
//const baseURL = "http://localhost:5000";
export default axios.create({ baseURL });
