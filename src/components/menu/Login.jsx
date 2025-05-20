import LogoSite from '../../assets/perfil.png';
import { Link } from 'react-router';

export default function Login() {
    return (
        <div className="flex-shrink-0 dropdown">
            <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <img src={LogoSite} alt="User" width="32" height="32" className="rounded-circle" />
            </a>

            <ul className="dropdown-menu dropdown-menu-dark text-small shadow dropdown-menu-end">
                {/* {Array.isArray(itensDropdown) &&
                    itensDropdown.map((item, index) =>
                        item.divider ? (
                            <li key={index}><hr className="dropdown-divider" /></li>
                        ) : (
                            <li key={index}>
                                <a href={item.href} className="dropdown-item">
                                    {item.label}
                                </a>
                            </li>
                        )
                    )} */}
                    <li>
                        <Link className='dropdown-item' to="/usuario">Perfil</Link>
                    </li>
                    <li> <a href="" className="dropdown-item">Logout</a> </li>
            </ul>

        </div>
    );
}
