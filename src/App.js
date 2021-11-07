import "./App.css";
import { SubHeader } from "./components/SubHeader";
import { CookiesContextProvider } from "./domain/context/CookiesContext";

function App() {
  return (
    <CookiesContextProvider>
      <div className="App">
        <SubHeader />
      </div>
    </CookiesContextProvider>
  );
}

export default App;
