import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import { useState, useEffect } from "react";
import AddedToCart from './AddedToCart';
import classes from './Product.module.css';

const Product = () => {
    const [counter, setCounter] = useState(0);
    const dispatch = useDispatch();
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const product = {
        id: 'p1',
        title: 'Fall Limited Edition Sneakers ',
        description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.',
        price: 125,
        originalPrice: 250,
        discount: 50
    }

    const addToCartHandler = () => {
        dispatch(cartActions.add({ product: product, quantity: counter }));
        setIsAddedToCart(true);

        if (counter <= 0) {
            dispatch(cartActions.remove({ id: 'p1' }));
        }
    }

    const increase = () => {
        setCounter(previous => previous + 1)
    }

    const decrease = () => {
        setCounter(previous => previous > 0 ? previous - 1 : 0)
    }

    useEffect(() => {
        if (isAddedToCart) {
            setTimeout(() => {
                setIsAddedToCart(false);
            }, 2000);
        }
    }, [isAddedToCart]);

    return (
        <>
            {isAddedToCart && <AddedToCart product={product.title} totalPrice={counter * product.price}/>}
            <div className={classes.product}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>

                <div className={classes.prices}>
                    <div>
                        <p className={classes.price}>${product.price}.00</p>
                        <p className={classes.discount} >50%</p>
                    </div>
                    <p className={classes.originalPrice}>${product.originalPrice}.00</p>
                </div>

                <div className={classes.controls}>
                    <div className={classes.control}>
                        <button onClick={decrease}>-</button>
                        <div> {counter} </div>
                        <button onClick={increase} >+</button>
                    </div>
                    <button onClick={addToCartHandler} className={classes.addToCart}>add to cart</button>
                </div>
            </div>
        </>)
}

export default Product;