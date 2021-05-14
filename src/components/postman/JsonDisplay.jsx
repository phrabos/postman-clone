import React from 'react';
import PropTypes from 'prop-types';

function JsonDisplay({ display }) {
  return (
    <pre
      style={{
        width: '800px',
        height: '800px',
        border: '1px solid grey',
        whiteSpace: 'pre-wrap',
        overflowY: 'scroll',
      }}
    >

      <code>
        <p>
          {display}
        </p>
      </code>


    </pre>
  );
}

JsonDisplay.propTypes = {
  display: PropTypes.string.isRequired,
};

export default JsonDisplay;

