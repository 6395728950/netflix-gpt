 
 import React from "react";
 import Body from "./components/Body";
 import { Provider } from "react-redux";
 import appStore from "./utls/appStore";


function App() {
  return (
    <Provider store = {appStore}>
      <Body></Body>
    </Provider>
 
  );
}

export default App;
