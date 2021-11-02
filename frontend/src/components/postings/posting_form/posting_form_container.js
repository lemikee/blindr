import { connect } from 'react-redux';
import PostingForm from './posting_form';

const mapStateToProps = (state, ownProps) => ({
  history: ownProps.history,
  currentEmployer: state.session.user
})

export default connect(mapStateToProps, null)(PostingForm);
