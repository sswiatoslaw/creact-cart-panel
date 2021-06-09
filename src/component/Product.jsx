import Button from './Button';
import FavoriteIcon from '@material-ui/icons/Favorite'
import './Product.scss'
import { useDispatch } from 'react-redux';
import { setStateModal, addFavorites } from '../store/actions';

const Product = (props) => {
    const {name, price, image, article, fullProduct, text} = props;
    const dispatch = useDispatch();
    const toggleModal = () =>{
        dispatch(setStateModal(fullProduct))
      }
    const addFavorite = () => {
        dispatch(addFavorites(fullProduct))
    }

        return (
            <>
            <div id={article} className="product">
                <img src={image} alt={name} />
                <FavoriteIcon onClick={addFavorite} className="favorite-icon"/>
                <div className="product-text">
                    <h1>{name}</h1>
                    <p>{price}$</p>
                </div> 
                        <Button onclick={toggleModal} text={text}/>         
            </div>
            </>
        )
}

export default Product