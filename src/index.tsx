import ReactDOM from "react-dom";
import App from "./App";
import { SidebarContextProvider } from "./store/sidebarContext";
import { LangContextProvider } from "./store/langContext";
import { ThemeContextProvider } from "./store/themeContext";
import { AuthProvider } from "./store/AuthContext";
import { DrawerProvider } from "./store/DrawerContext";
import { ModalProvider } from "./store/ModalContext";

ReactDOM.render(
  <LangContextProvider>
    <AuthProvider>
      <ThemeContextProvider>
        <SidebarContextProvider>
          <ModalProvider>
            <DrawerProvider>
              <App />
            </DrawerProvider>
          </ModalProvider>
        </SidebarContextProvider>
      </ThemeContextProvider>
    </AuthProvider>
  </LangContextProvider>,
  document.getElementById("root")
);
