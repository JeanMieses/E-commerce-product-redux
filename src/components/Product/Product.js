import { useState } from "react";
import classes from './Product.module.css'

const Product = () => {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(previous => previous + 1)
    }

    const decrease = () => {
        setCounter(previous => previous - 1)
    }

    return (<div className={classes.product}>
        <h2>Fall Limited Edition Sneakers </h2>
        <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything the w
            eather can offer.
        </p>

        <div className={classes.price}>
            <div>
                <p>$125.00</p>
                <p>50%</p>
            </div>

            <p>$250.00</p>
        </div>


        <div>
            <button onClick={decrease}>-</button>
            <div> {counter} </div>
            <button onClick={increase} >+</button>
        </div>

        <button>add to cart</button>

    </div>)
}


export default Product;