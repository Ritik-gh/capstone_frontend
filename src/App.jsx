import { useState, createContext } from "react";
import Router from "@/router.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/app.css";

import { Provider } from "react-redux";
import store from "@/store/store";

export const Auth = createContext();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <main>
          <Router />
        </main>
      </Provider>
    </>
  );
};

export default App;
