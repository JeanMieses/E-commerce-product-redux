import classes from './AddedToCart.module.css';

const AddedToCart = (props) => {
    return (<div className={classes.AddedToCart}>
        <div>
            <p>Adding</p>
            <strong><p>{props.product}</p></strong>
            <p>to your cart</p>
            {/* <p>Total Price: ${props.totalPrice}</p> */}
        </div>
    </div>)
}


export default AddedToCart;