import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";

import UsersContainer from "./User/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
