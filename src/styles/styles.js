import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    color: "lime",
    textAlign: "center",
  },
  textinput: {
    height: 40,
    width: 250,
    borderWidth: 1,
    backgroundColor: "white",
    textAlign: "center",
  },
  button: {
    flex: 1,
    margin: 50,
  },
  table: {
    height: 325,
  },
  separator: {
    marginVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default styles;
