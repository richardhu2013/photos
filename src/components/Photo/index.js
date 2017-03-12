import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Photos from './photos';

function mapStateToProps(state) {
  return {
    photos: state.photos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetch: bindActionCreators(actions.fetchPhotos, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
