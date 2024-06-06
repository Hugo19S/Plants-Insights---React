import Header from "./components/Cabecalho/Cabecalho";
import Footer from "./components/Rodape/RodaPe";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
