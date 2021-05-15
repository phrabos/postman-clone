import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './postman.css';

function History({ history, onLiClick, onDeleteClick }) {
  return (
    <div className={styles.history}>
      <h3>History</h3>
      <ul>
        {!!history.length && history.map((item, i) => {
          return (
            <div key={`${item.url} + ${i}`} className={styles.historyWrapper}>
              <li
                onClick={onLiClick}
                value={i}
              >
                <span className={styles.methodName}>{item.method}</span>
                <span className={styles.methodClick}>{item.url}</span>
              </li>
              <span>
                <IconButton 
                  aria-label="delete"
                  onClick={onDeleteClick}
                  value={i}
                >
                  <DeleteIcon className={styles.deleteButton}/>
                </IconButton>
              </span>
            </div>
          );
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
  onDeleteClick: PropTypes.func.isRequired,
};

export default History;

