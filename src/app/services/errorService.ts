import { AxiosError } from "axios";
import toastService from "./toastService";

// Hata tipi için bir enum (isteğe bağlı, kullanabilirsiniz)
export enum ErrorType {
  NETWORK_ERROR = "NetworkError",
  SERVER_ERROR = "ServerError",
  UNKNOWN_ERROR = "UnknownError",
}

const errorService = {
  handleError: (error: AxiosError): void => {
    let message: any = "";

    if (error.response) {
      // Sunucudan gelen hata
      message = error.response.data || "Sunucuda bir hata oluştu.";
    } else if (error.request) {
      // Ağ hatası
      message =
        "Sunucuya ulaşılamadı. Lütfen internet bağlantınızı kontrol edin.";
    } else {
      // Bilinmeyen hata
      message = "Bir şeyler ters gitti. Lütfen tekrar deneyin.";
    }

    // Hata mesajını Toastr ile göster
    toastService.showError(message);
  },
};

export default errorService;
