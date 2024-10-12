import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import { AppProvider } from "./components/AppContext";
import QuestionPage from "@/pages/Question";
import RandomListPage from "@/pages/RandomList";
import CalcResultPage from "@/pages/CalcResult";
import ResultPage from "@/pages/Result";
import UNKNOWN from "@/pages/Unknown";

import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/random-list",
      element: <RandomListPage />,
    },
    {
      path: "/question",
      element: <QuestionPage />,
    },
    {
      path: "/calc-result",
      element: <CalcResultPage />,
    },
    {
      path: "/result/:id",
      element: <ResultPage />,
    },
    {
      path: "/*",
      element: <UNKNOWN />,
    },
  ],
  {
    basename: "/distro-clock", // 여기서 basename을 지정하여 기본 경로를 추가합니다.
  },
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
    <footer>
      Copyright &copy; 2024 Orbit Research Centre. All rights reserved.
    </footer>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
