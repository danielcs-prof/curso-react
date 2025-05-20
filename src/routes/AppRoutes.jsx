import { Routes, Route } from 'react-router-dom';

// Importações dos componentes principais
import { Usuario } from '../feautres/usuario';
import { Curso} from '../feautres/curso';
import { Trilhas} from '../feautres/trilhas'
import {Projetos} from '../feautres/projetos';
import {Ebooks} from '../feautres/ebooks';
import { Tutorial } from '../feautres/tutorial';

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/curso" element={<Curso />} />
        <Route path="/trilhas" element={<Trilhas />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/usuario" element={<Usuario />} />
      </Routes>
  );
}
