import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider, AppConfig, ModalGlobal } from '@hcd/ui';
import { Initializer } from "./app";
import { Router } from "./pages/Router";
import { defaultLocale } from "./locales";

const getRootElement = () => document.getElementById("root")!;
let reactRoot: ReactDOM.Root | null = null;

const renderApp = () => {
  const root = getRootElement();
  const app = 
  <AppConfig i18nResources={[defaultLocale]}>
  <ThemeProvider>
      <Initializer>
          <ModalGlobal />
          <Router />
      </Initializer>
  </ThemeProvider>
</AppConfig>;

  if (reactRoot == null) {
    reactRoot = ReactDOM.createRoot(root);
    reactRoot.render(app);
  } else {
    reactRoot.render(app);
  }
};

export const startApp = () => {
  renderApp();
};
