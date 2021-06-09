import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../component/Product';
import { importCart, setStateModal, removeCart } from '../store/actions'
import Modal from '../component/Modal';

const CartPage = () => {
    const dispatch = useDispatch();
    const productsCart = useSelector(state => state.cart);
    const productKey = useSelector(state => state.isOpenModal.key);
    const toggleModal = () =>{
        dispatch(setStateModal());
    }
    const confirmAction = () => {
        dispatch(setStateModal())
        dispatch(removeCart(productKey))
    }
    useEffect(() => {
        const localCart = localStorage.getItem('cart');
        {localCart && (dispatch(importCart(JSON.parse(localCart))))}
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
                productsCart.map((item, id) => {
                    return (
                        <>
                            <Product
                                fullProduct={item}
                                key={id}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                article={item.article}
                                text="Удалить из корзины"
                            />
                        </>
                    )
                })
            }
        </>
    )
};

export default CartPage