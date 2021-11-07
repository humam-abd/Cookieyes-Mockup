import "./App.scss";
import SideBar from "./components/SideBar";
import { SubHeader } from "./components/SubHeader";
import { TableData } from "./components/TableData";
import { CookiesContextProvider } from "./domain/context/CookiesContext";

function App() {
  return (
    <CookiesContextProvider>
      <div className="App d-flex">
        <SideBar />
        <div>
          <SubHeader />
          <TableData />
        </div>
      </div>
    </CookiesContextProvider>
  );
}

export default App;
