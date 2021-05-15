import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import styles from './postman.css';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function History({ history, onLiClick, onDeleteClick }) {
  const classes = useStyles();
  return (
    <div className={styles.history}>
      <h3 style={{ margin: '0' }}>History</h3>
      <ul style={{ margin: '0' }}>
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

              <IconButton 
                aria-label="delete"
                onClick={onDeleteClick}
                value={i}
                className={classes.margin}
              >
                <DeleteIcon />
              </IconButton>

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

