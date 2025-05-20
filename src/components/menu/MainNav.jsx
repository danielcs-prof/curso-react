import { Link } from 'react-router';
import Login from './Login'
import DevTechLogo from './Logo';
import LogoSite from '../../assets/foto.png';
import { Button } from '../buttons/Button';



export function MainNav(
    {
        // leftItems = [],
        rightItems = [],
        isLogado = false
    }
) {
    return (
        <>

            <nav className="py-2 bg-dark">
                <div className="container-fluid d-flex flex-wrap">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-decoration-none">
                        <img src={LogoSite} alt="" />
                        <DevTechLogo />
                    </a>
                    <ul className="nav me-auto">
                        <li className="nav-item"> <Link className='nav-link text-white fs-5 px-2' to="/curso">Curso</Link> </li>
                        <li className="nav-item"> <Link className='nav-link text-white fs-5 px-2' to="/trilhas">Trilhas</Link> </li>
                        <li className="nav-item"> <Link className='nav-link text-white fs-5 px-2' to="/tutorial">Tutorial</Link> </li>
                        <li className="nav-item"> <Link className='nav-link text-white fs-5 px-2' to="/projetos">Projetos</Link> </li>
                        <li className="nav-item"> <Link className='nav-link text-white fs-5 px-2' to="/ebooks">E-books</Link> </li>
                        <li className="nav-item"> <Link className='nav-link text-white fs-5 px-2' to="/usuario">Usuario</Link> </li>
                    </ul>
                    <ul className='nav me-auto'>
                        <li><a href="https://www.youtube.com/@devtech-edu-dcs" className='nav-link'><i className="bi bi-youtube"></i></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=61576751541937" className='nav-link'><i className="bi bi-facebook"></i></a></li>
                        <li><a href="#youtube" className='nav-link'><i className="bi bi-instagram"></i></a></li>
                        <li><a href="#youtube" className='nav-link'><i className="bi bi-linkedin"></i></a></li>
                        <li><a href="https://github.com/devtech-edu-code" className='nav-link'><i className="bi bi-github"></i></a></li>
                    </ul>

                    <div>
                        {isLogado ? <Login itensDropdown={rightItems} /> : <Button type="button" variant='outline-primary' text="Entrar" />}
                    </div>
                </div>
            </nav>

        </>
    );
}