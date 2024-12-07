import axios, { AxiosResponse, AxiosError } from "axios";
import baseUrl from "../constants/apiUrl";
import errorService from "./errorService";

interface LoginResponse {
  token: string;
  user: { id: string; email: string };
}

const authService = {
  login: async (email: string, password: string): Promise<LoginResponse> => {
    try {
      const response: AxiosResponse<LoginResponse> = await axios.post(
        `${baseUrl.API_BASE_URL}/Auth/authenticate`,
        {
          email,
          password,
        }
      );
      return response.data;
    } catch (error) {
      // Hata yönetimini errorService ile sağlıyoruz
      if (error instanceof AxiosError) {
        errorService.handleError(error);
      } else {
        // Diğer hatalar için genel bir hata mesajı
        errorService.handleError({ message: "Bilinmeyen hata" } as AxiosError);
      }
      // throw error; // Hata hala üst seviyeye iletiliyor
    }
  },
};

export default authService;
