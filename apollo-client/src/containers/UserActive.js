import { connect } from 'react-redux'
import { deleteUser, resendUser, clickEditEdit } from '../actions'
import User from '../components/User'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(deleteUser(ownProps.id)),
  resend: () => dispatch(resendUser(ownProps.id, ownProps.Name, ownProps.Phone)),
  isEdit: () => dispatch(clickEditEdit(ownProps.id))
})

export default connect(
  null,
  mapDispatchToProps
)(User)
