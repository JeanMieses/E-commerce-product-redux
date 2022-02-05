import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import classes from './Cart.module.css';
import deleteIcon from './../../assets/icon-delete.svg';
import Message from './../message/Message';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const quantity = useSelector(state => state.cart.totalQuantity);
    const checkout = useSelector(state => state.cart.checkout);

    const toggleCartHandler = () => {
        dispatch(cartActions.showCartToggle());
    }

    const removeHandler = () => {
        dispatch(cartActions.remove({ id: 'p1' }));
    }

    const checkoutHandler = () => {
        dispatch(cartActions.remove({ id: 'p1' }));
        dispatch(cartActions.checkoutToggle());
    }

    return (<>
        {checkout && <Message />}
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
                    <br />
                    <button onClick={checkoutHandler} className={classes.checkout}>Checkout</button>
                </div>))}
            </div>}
        </div>
    </>
    )
}


export default Cart;