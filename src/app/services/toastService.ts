import Toast from "react-native-toast-message";

const toastService = {
  showError: (message: string): void => {
    Toast.show({
      type: "error",
      position: "top",
      text1: "Hata",
      text2: message,
      visibilityTime: 4000, // 4 saniye gösterilsin
      autoHide: true, // Otomatik kapanmasını sağla
    });
  },
  showSuccess: (message: string): void => {
    Toast.show({
      type: "success",
      position: "top",
      text1: "Başarılı",
      text2: message,
      visibilityTime: 4000, // 4 saniye gösterilsin
      autoHide: true, // Otomatik kapanmasını sağla
    });
  },
  showInfo: (message: string): void => {
    Toast.show({
      type: "info",
      position: "top",
      text1: "Bilgi",
      text2: message,
      visibilityTime: 4000, // 4 saniye gösterilsin
      autoHide: true, // Otomatik kapanmasını sağla
    });
  },
};

export default toastService;
