import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import { FormControlLabel, RadioGroup, TextField, Button, Switch } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: theme.palette.warning.light,
    background: theme.palette.info.main
  },
}));

function Controls({ url, body, method, auth, header, token, onUrlQueryChange, onJsonChange, onSubmit, onRadioChange, onSwitchChange, onHeaderChange, onTokenChange }) {
  const classes = useStyles();
  return (
    <>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <label htmlFor="api-calls"></label>
        <TextField required
          id="url-query"
          type="text"
          value={url}
          onChange={onUrlQueryChange}
          label="URL"
          variant="outlined"
          style={{
            width: '800px'
          }}
        />
        <Button
          type="submit"
          variant="contained"
          // color={theme.palette}
          className={classes.button}
          endIcon={<SendIcon />}
        >
        Send Request
        </Button>
        <br />
        <RadioGroup row value={method} onChange={onRadioChange}>
          <FormControlLabel value="GET" control={<Radio />} label="GET" />
          <FormControlLabel value="POST" control={<Radio />} label="POST" />
          <FormControlLabel value="PUT" control={<Radio />} label="PUT" />
          <FormControlLabel value="DELETE" control={<Radio />} label="DELETE" />
        </RadioGroup>
        <FormControlLabel
          control={<Switch />}
          checked={auth}
          label="Headers?"
          onChange={onSwitchChange}
          name="headers"
          inputprops={{ 'aria-label': 'secondary checkbox' }}
        />
        <br />
        {auth && (
          <div>

            <TextField
              id="headers" 
              type="text"
              value={header}
              onChange={onHeaderChange}
              label="Auth Headers"
              variant="outlined"
              style={{
                width: '400px'
              }}
            />
            <TextField
              id="token" 
              type="text"
              value={token}
              onChange={onTokenChange}
              label="Token"
              variant="outlined"
              style={{
                width: '400px'
              }}
            />
          </div>
        )}
        <br></br>
        <TextField multiline
          id="json-body" 
          type="text"
          value={body}
          onChange={onJsonChange}
          label="Request Body Formatted as JSON..."
          variant="outlined"
          style={{
            width: '800px'
          }}
        />
      </form>
    </>
  );
}

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  auth: PropTypes.bool.isRequired,
  header: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  onUrlQueryChange: PropTypes.func.isRequired,
  onJsonChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRadioChange: PropTypes.func.isRequired,
  onSwitchChange: PropTypes.func.isRequired,
  onHeaderChange: PropTypes.func.isRequired,
  onTokenChange: PropTypes.func.isRequired,
};

export default Controls;

