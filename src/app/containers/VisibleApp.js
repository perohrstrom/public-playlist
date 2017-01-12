import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'
import Songsearch from '../components/Songsearch'

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

export default connect(mapStateToProps, dispatchToProps)(Songsearch)
