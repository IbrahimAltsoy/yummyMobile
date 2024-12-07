import React from "react";
import Router from "./Router";
import Toast from "react-native-toast-message";

function Page() {
  // headeer
  return (
    <>
      <Router />
      <Toast />
    </>
  );
  //footer atılacaktır.
}

export default Page;
