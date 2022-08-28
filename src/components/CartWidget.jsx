const CartWidget = ({carritoLength}) => {
    return (
        <div className="cart" >   
                <h3>
                    <i class="fa-solid fa-cart-shopping"></i>
                    {carritoLength}
                </h3>

        </div>)
}
export default CartWidget;