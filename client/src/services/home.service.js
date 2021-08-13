import { BASE_URL } from "../api/config";
import fetchAPI from "../api/fetchAPI";
import { authHeaderMethodGet } from "./auth-header";

const API_NAME = "welcome";
const API_URL = `${BASE_URL}/api/${API_NAME}`;

class HomeService {
  async load() {
    const response = await fetchAPI(API_URL, authHeaderMethodGet());
    return response;
  }
}

export default new HomeService();
