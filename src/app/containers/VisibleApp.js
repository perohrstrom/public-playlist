import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'
import Main from '../components/Main'

function mapStateToProps(state){
  return {
    newSearchForm: state.newSearchForm
  }
}

function dispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const VisibleApp = connect(mapStateToProps, dispatchToProps)(Main)

export default VisibleApp
