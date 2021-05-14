import React from 'react';
import PropTypes from 'prop-types';
import styles from './postman.css';

function JsonDisplay({ display }) {
  return (
    <pre>
      <code>
        <p className={styles.resultDiv}>
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

