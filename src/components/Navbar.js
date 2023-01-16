import { Link } from "react-router-dom";

const Navbar = () => {
    return (
    <div >
        <nav className="navbar bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to={'/'}> <span className="navbar-brand mb-0 h1 text-decoration-none"> Phone Book</span></Link>
            </div>
        </nav>
    </div>
    );
}

export default Navbar;