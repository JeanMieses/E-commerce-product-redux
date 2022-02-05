import ReactDom from 'react-dom'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import classes from './Message.module.css';

const BackDrop = () => {
    const dispatch = useDispatch();

    const backdropHandler = () => {
        dispatch(cartActions.checkoutToggle());
        dispatch(cartActions.showCartToggle());
    }

    return (<div className={classes.backdrop}>
        <div>
            <p>Thanks for buying!</p>
            <button onClick={backdropHandler}>Close</button>
        </div>
    </div>)
}

const Message = () => {
    return (<>
        {ReactDom.createPortal(
            <BackDrop />,
            document.getElementById('backdrop')
        )}
    </>
    )
}



export default Message;