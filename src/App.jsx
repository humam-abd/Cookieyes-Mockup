import "./styles/App.scss";
import { CookiesContextProvider } from "./domain/context/CookiesContext";
import { GlobalContextProvider } from "./domain/context/GlobalContext";
import { HomeComponent } from "./components/HomeComponent";

function App() {
  return (
    <GlobalContextProvider>
      <CookiesContextProvider>
        <HomeComponent />
      </CookiesContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
