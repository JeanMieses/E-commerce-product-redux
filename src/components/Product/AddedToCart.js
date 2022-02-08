import Lottie from 'react-lottie';
import classes from './AddedToCart.module.css';
import success from './../../assets/success.json';

const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: success,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const AddedToCart = (props) => {
    return (<div className={classes.AddedToCart}>
        <div>
            <Lottie options={defaultOptions}  height={50} width={50}/>
            <p><strong>{props.product}</strong> </p>
           <p>added to the cart</p>
    
        </div>
    </div>)
}


export default AddedToCart;