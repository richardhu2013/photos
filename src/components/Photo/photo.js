import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var photo = this.props.photo;

    return (
      <tr>
        {Object.keys(photo).map((x, i) => {
           return (
             <td key={i}>
               { x === 'thumbnailUrl' || x === 'url' ? (
                  <img src={photo[x]} alt={photo[x]}></img>
                ) : (<div>{photo[x]}</div>)}
             </td>
             );
         })}
      </tr>);
  }
}

Photo.propTypes = {
  photo: (props, propName) => {
    if (typeof props[propName] !== 'object' || Array.isArray(props[propName])) {
      return new Error(`Invalid prop ${propName}, must be an object`);
    }
  }
};

Photo.defaultProps = {
  photo: {}
};

export default Photo;
