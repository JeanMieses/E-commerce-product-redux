import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import classes from './Cart.module.css';
import deleteIcon from './../../assets/icon-delete.svg';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const quantity = useSelector(state => state.cart.totalQuantity);

    console.log(items.map(item => item.id));

    const toggleCartHandler = () => {
        dispatch(cartActions.showCartToggle());
    }

    const removeHandler = () => {
        dispatch(cartActions.remove({id: 'p1'}));
    }

    return (
        <div className={classes.cart}>
            <div className={classes.cartHeader}>
            <p>Cart</p>
            <button onClick={toggleCartHandler} >x</button>
            </div>
            {items.length === 0 ? <div className={classes.content} ><p className={classes.empty}>Cart is Empty</p></div> : <div className={classes.content}>
                {items.map(item => (<div key={item.id} >
                    <p> {item.title} </p>
                    <span> ${item.price} x {quantity}   <strong> ${item.price * quantity}  </strong> </span>
                    <button className={classes.deleteButton} onClick={removeHandler}> <img src={deleteIcon} alt='delete' /> </button>
                    <br/>
                    <button className={classes.checkout}>Checkout</button>
                </div>))}
            </div>

            }
        </div>
    )
}


export default Cart;