import CartWidget from "../CartWidget/CartWidget";
const Navbar =() =>{
    return(
        <nav className="navBar1">
            <ul className="list">
            <li>Home </li>
            <li>Nostros </li>
            <li>Productos </li>
            <li>Ofertas </li>
            </ul>
            <CartWidget/>
        </nav>
    )
}
export default Navbar;