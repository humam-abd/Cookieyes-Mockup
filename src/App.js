import "./App.scss";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { SubHeader } from "./components/SubHeader";
import { TableData } from "./components/TableData";
import { CookiesContextProvider } from "./domain/context/CookiesContext";
import { GlobalContextProvider } from "./domain/context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <CookiesContextProvider>
        <div className="App d-flex">
          <SideBar />
          <div className="w-100 p-3">
            <Header />
            <SubHeader />
            <TableData />
          </div>
        </div>
      </CookiesContextProvider>
    </GlobalContextProvider>
  );
}

export default App;
