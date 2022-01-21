import { useState } from 'react';
import classes from './Header.module.css';
import iconCart from './../../assets/icon-cart.svg';
import iconMenu from './../../assets/icon-menu.svg';
import imageavatar from './../../assets/image-avatar.png'

const Header = () => {
    const [showOptions, setShowOptions] = useState(false);

    const showOptionsHandler = () => {
        setShowOptions(true);
    }

    const hideOptionsHandler = () => {
        setShowOptions(false)
    }

    return <header className={classes.header}> 
        <nav>
            <div>
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

            <div>
                <img className={classes.cartimg} src={iconCart}/>
                <img  className={classes.avatar} src={imageavatar}/>

            </div>
        </nav>
    </header>
}


export default Header;