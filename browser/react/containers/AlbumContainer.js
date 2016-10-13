'use strict';

import { connect } from 'react-redux';
import Album from '../components/Album';
import { fetchAndGoToAlbumID } from '../action-creators/albums';

const mapStateToProps = ({ selectedAlbum }) => ({
  selectedAlbum
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTheAlbum: (albumId) => dispatch(fetchAndGoToAlbumID(albumId))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);
