import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import ModalTrigger from './modal_trigger';

const mapStateToProps = (state) => {
    return {
        showModal: state.ui.modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modalType) => dispatch(openModal(modalType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalTrigger);