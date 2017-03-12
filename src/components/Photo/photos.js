import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';

import Photo from './photo';
import Heading from './heading';

class Photos extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('>>>>>>>componentWillMount');
    const {
      onFetch
    } = this.props;
    onFetch();
  }

  render() {

    const {
      photos
    } = this.props;
    console.log('>>>>>photos render:', photos);
    const rows = photos.map((x, i) => {
      return (<Photo photo={x} key={i++} />);
    });

    return (
      <div>
        <table className="table is-striped">
          <Heading />
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

Photos.propTypes = {
  onFetch: React.PropTypes.func,
  photos: React.PropTypes.array
};

Photos.defaultProps = {
  photos: []
};

export default Photos;
