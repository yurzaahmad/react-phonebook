import { connect } from 'react-redux'
import { deleteUser, resendUser } from '../actions'
import User from '../components/User'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(deleteUser(ownProps.id)),
  resend: () => dispatch(resendUser(ownProps.id, ownProps.Name, ownProps.Phone))
})

export default connect(
  null,
  mapDispatchToProps
)(User)
