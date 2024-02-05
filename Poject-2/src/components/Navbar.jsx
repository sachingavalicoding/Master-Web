import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <header>
            <h2> Logo  </h2>
            <nav>
                <Link to={"/"}> Home  </Link>
                <Link to={"/contact"}> Contact  </Link>
                <Link to={"/auth"}> Auth  </Link>
                <Link to={"/blogs"}> Blogs </Link>
                <Link to={"/profile"}> Profile </Link>
            </nav>
        </header>
    )
}

export default Navbar