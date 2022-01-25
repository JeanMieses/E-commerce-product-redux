import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import iconCart from './../../assets/icon-cart.svg';
import iconMenu from './../../assets/icon-menu.svg';
import imageavatar from './../../assets/image-avatar.png';
import { cartActions } from '../../store/cart';

const Header = () => {
    const [showOptions, setShowOptions] = useState(false);
    const quantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const showCartHandler = () => {
        dispatch(cartActions.showCartToggle());
    }

    const showOptionsHandler = () => {
        setShowOptions(true);
    }

    const hideOptionsHandler = () => {
        setShowOptions(false)
    }

    return <header className={classes.header}> 
        <nav>
            <div className={classes.navigation}>
                <button className={classes.menu} onClick={showOptionsHandler}> <img src={iconMenu} /> </button>
                <h1>snealers</h1>

                <ul className={showOptions? '' : classes.hide}>
                    <button onClick={hideOptionsHandler}>X</button>
                    <li>collection</li>
                    <li>men</li>
                    <li>women</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>
            </div>

            <div className={classes.cart}>
                <div  onClick={showCartHandler} className={classes.cartItems}> <p>{quantity}</p> <img className={classes.cartimg} src={iconCart} /></div>
                <img onClick={showCartHandler} className={classes.avatar} src={imageavatar}/>
            </div>
        </nav>
    </header>
}


export default Header;