import "./styles/App.scss";
import { Main } from "./components/Main";
import { SideBar } from "./components/SideBar";
import { CookiesContextProvider } from "./domain/context/CookiesContext";
import { GlobalContextProvider } from "./domain/context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <CookiesContextProvider>
        <div className="App d-flex">
          <SideBar />
          <Main />
        </div>
      </CookiesContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
