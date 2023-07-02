import { NavLink } from "react-router-dom"

export const Navbar = () => {

    return (
        <div className="nav-bar">
            <div className="logo">
                 Cover
            </div>
            <ul>
                <li>
                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li>
                <NavLink to="/features" className="nav-link">
                        Features
                </NavLink>
                </li>
                <li>
                <NavLink to="/contacts" className="nav-link">
                        Contacts
                </NavLink>
                </li>
            </ul>
        </div>
    )
}