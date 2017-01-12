import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'
import Main from '../components/Main'

const mapStateToProps = (state) => {
  return {
    newSearchForm: state.newSearchForm,
    searchResults: state.searchResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

function dispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const VisibleApp = connect(mapStateToProps, mapDispatchToProps)(Main)

export default VisibleApp
