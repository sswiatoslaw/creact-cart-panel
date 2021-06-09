import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../component/Product';
import { importCart, setStateModal, removeFavorites } from '../store/actions'
import Modal from '../component/Modal';

const FavoritePage = () => {
    const dispatch = useDispatch();
    const productsFavorites = useSelector(state => state.favorites);
    const productKey = useSelector(state => state.isOpenModal.key);
    const toggleModal = () =>{
        dispatch(setStateModal());
    }
    const confirmAction = () => {
        dispatch(setStateModal())
        dispatch(removeFavorites(productKey))
    }
    useEffect(() => {
        const localFavorites = localStorage.getItem('favorites');
        {localFavorites && (dispatch(importCart(JSON.parse(localFavorites))))}
    }, [])
    return (
        <>
            <Modal
                closeModal={toggleModal}
                header="Подтвердите действие"
                text="Вы действительно хотите выполнить это действие?"
                onClick={confirmAction}
            />

            {
                productsFavorites.map((item, id) => {
                    return (
                        <>
                            <Product
                                fullProduct={item}
                                key={id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                article={item.article}
                                text="Удалить из избранного"
                            />
                        </>
                    )
                })
            }
        </>
    )
};

export default FavoritePage