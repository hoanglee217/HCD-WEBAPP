import ReactDOM from "react-dom";
import App from "./App";
import { SidebarContextProvider } from "./store/sidebarContext";
import { LangContextProvider } from "./store/langContext";
import { ThemeContextProvider } from "./store/themeContext";
import { AuthProvider } from "./store/AuthContext";

ReactDOM.render(
  <LangContextProvider>
    <AuthProvider>
      <ThemeContextProvider>
        <SidebarContextProvider>
          <App />
        </SidebarContextProvider>
      </ThemeContextProvider>
    </AuthProvider>
  </LangContextProvider>,
  document.getElementById("root")
);
