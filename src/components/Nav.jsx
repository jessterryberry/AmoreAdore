import { headerLogo } from '../assets/images';
import { hamburger, support } from '../assets/icons';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container bg-sea">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={230}
                        height={129}
                    />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <Link to={item.href}>
                                <span className="font-montserrat leading-normal text-lg text-slate-gray-200-200">
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img
                        src={hamburger}
                        alt="hamburger menu"
                        height={25}
                        width={25}
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav