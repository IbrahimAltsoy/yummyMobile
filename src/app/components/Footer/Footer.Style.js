import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#282c34",
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  linksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  link: {
    color: "#61dafb",
    fontSize: 16,
    margin: 10,
  },
  copyright: {
    // color: "#61dafb",
    //  fontSize: 16,
    //  margin: 10
    color: "#aaa", // Daha açık bir gri tonu
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
    width: "100%",
  },
});
export default styles;
