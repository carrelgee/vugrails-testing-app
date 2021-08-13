import { BASE_URL } from "../api/config";
import fetchAPI from "../api/fetchAPI";
import userModelStorage from "../api/userModelStorage";
import { authHeaderMethodPost } from "./auth-header";

const API_NAME = 'login';
const API_URL = `${BASE_URL}/api/${API_NAME}`;


class AuthService {
  async login(formData) {
    const response = await fetchAPI(API_URL, authHeaderMethodPost(formData));
    if (response.access_token) {
      localStorage.setItem("user", 
      JSON.stringify(userModelStorage(response)));
    }
    return response;
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
