import {Link, Outlet} from "react-router-dom";
import "../App.css";
function Header() {
return (
    <>
        <nav>
            <div>
                <ul className="flex-nav">
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/randomColors">Random Colors</Link>
                    </li>
                    <li>
                        <Link to="/lists">Lists</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
    </>
)
};
export default Header;

