import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { setStateModal } from '../store/actions';
import Button from './Button';
import './Modal.scss'
function Modal(props) {
    const isOpenModal = useSelector(state => state.isOpenModal.state);
    const {header, text, classStyle, onClick} = props;
    const dispatch = useDispatch();
    const toggleModal = () =>{
        dispatch(setStateModal());
    }
        return (
            <div style={classStyle} className={isOpenModal ? 'modal active' : 'modal'}>
                                <div className="modal-window">
                                <div className="modal-header">
                                <h1>
                                    {header}
                                </h1>
                                <CloseIcon onClick={toggleModal} className="modal-icon" style={{color: "#00000"}} fontSize="large"/>
                            </div>
                            <div className="modal-body">
                                <p>{text}</p>
                            </div>
                            <div className="modal-footer">
                                <Button onclick={toggleModal} text="Нет"/>
                                <Button onclick={onClick} text="Да"/>
                            </div>
                                </div>
                                </div>
        );
}

export default Modal