import Contacto from "./components/Contacto";
import Habilidades from "./components/Habilidades";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import SobreMi from "./components/SobreMi";
import Work from "./components/Work";

function App() {
  return (
    <div>
      <NavBar />
      <Inicio />
      <SobreMi />
      <Habilidades />
      <Work />
      <Contacto />
    </div>
  );
}

export default App;
