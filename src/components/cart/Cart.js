import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import classes from './Cart.module.css';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const quantity = useSelector(state => state.cart.totalQuantity);

    const toggleCartHandler = () => {
        dispatch(cartActions.showCartToggle());
    }

    return (
        <div className={classes.cart}>
            <div className={classes.cartHeader}>
            <p>Cart</p>
            <button onClick={toggleCartHandler} >x</button>
            </div>
            {items.length === 0 ? <p>Cart is Empty</p> : <div className={classes.content}>
                <hr />
                {items.map(item => (<div key={item.id} >
                    <p> {item.title} </p>
                    <span> ${item.price} x {quantity}   <strong> ${item.price * quantity}  </strong> </span>
                    <br/>
                    <button className={classes.checkout}>Checkout</button>
                </div>))}
            </div>

            }
        </div>
    )
}


export default Cart;