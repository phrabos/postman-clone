import React from 'react';
import PropTypes from 'prop-types';
import styles from './postman.css';

function History({ history, onLiClick }) {
  return (
    <div className={styles.history}>
      <h3>History</h3>
      <ul>
        {!!history.length && history.map((item, i) => {
          return <li
            key={`${item.url} + ${i}`}
            onClick={onLiClick}
            value={i}
          >
            <span className={styles.methodName}>{item.method}</span>
            <span className={styles.methodClick}

            >{item.url}</span>
          </li>;
        })}
      </ul>
    </div>
  );
}

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
    })
  ),
  onLiClick: PropTypes.func.isRequired,
};

export default History;

