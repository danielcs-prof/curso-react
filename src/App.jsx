import { Button } from "./components/buttons/Button";
import Login from "./components/menu/Login";
import { MainNav } from "./components/menu/MainNav";
import { Autenticar } from "./feautres/autenticar/components/autenticar";
import { Menu } from "./components/menu/Menu";
import { Modal } from "./components/modal/modal";
import { UsuarioPages } from "./feautres/usuario/pages/usuarioPage";
import {AppRoutes} from './routes/AppRoutes.jsx';




export default function App() {

  return (
    <>
    <Menu></Menu>
    <AppRoutes />
  </>
  );
}
