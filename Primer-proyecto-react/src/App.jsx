import "./App.css";
import { Contador } from "./components/contador/Contador";
import { EfectoM } from "./components/EfectoMontar/efect";
import { Mostrador } from "./components/mostrador/Mostrador";
import { Cargador } from "./components/cargar/Cargar";
import { TodoJunto } from "./components/todoJunto/TodoJunto";

function App() {

  return (
    <>
    <Contador/>
    <br />
  <Mostrador />
  <br />
  <EfectoM/>
  <br />
  <Cargador/>
  <br />
  <TodoJunto/>
    </>
  );
}
export default App;
