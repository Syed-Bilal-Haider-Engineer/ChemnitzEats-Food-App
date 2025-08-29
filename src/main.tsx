import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "react-redux";
import { store,persistore } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistore}>
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
