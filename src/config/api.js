import axios from "axios";

const instance = axios.create({
	baseURL: "http://3.95.218.141:3000/",
});

export default instance;
