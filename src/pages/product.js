import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../component/Product';
import {addCart, addProducts, importCart, importFavorites, setStateModal } from '../store/actions'
import getProducts from '../api/getProducts'
import Modal from '../component/Modal';

const ProductPage = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products);
    const productKey = useSelector(state => state.isOpenModal.key);
    const toggleModal = () =>{
        dispatch(setStateModal());
    }
    const confirmAction = () => {
        dispatch(setStateModal())
        dispatch(addCart(productKey))
    }

    useEffect(() => {
        const localCart = localStorage.getItem('cart');
        const localFavorite = localStorage.getItem('favorites');
        getProducts().then(res => {dispatch(addProducts(res.data))})
        {localCart && (dispatch(importCart(JSON.parse(localCart))))}
        {localFavorite && (dispatch(importFavorites(JSON.parse(localFavorite))))}
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
                product.map((item, id) => {
                    return (
                        <>
                            <Product
                                fullProduct={item}
                                key={id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                article={item.article}
                                text="В корзину"
                            />
                        </>
                    )
                })
            }
        </>
    )
};

export default ProductPage