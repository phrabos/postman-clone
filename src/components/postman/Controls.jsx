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

function Controls({ url, body, method, auth, headerKey, headerValue, authType, onUrlQueryChange, onJsonChange, onSubmit, onRadioChange, onSwitchChange, onHeaderValueChange, onHeaderKeyChange, onAuthRadioChange }) {
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
          inputprops={{ 'aria-label': 'primary checkbox' }}
        />
        <br />
        {auth && (
          <div>
            <RadioGroup row value={authType} onChange={onAuthRadioChange}>
              <FormControlLabel value="API KEY" control={<Radio />} label="API KEY" />
              <FormControlLabel value="BASIC AUTH" control={<Radio />} label="BASIC AUTH" />
              <FormControlLabel value="BEARER TOKEN" control={<Radio />} label="BEARER TOKEN" />
            </RadioGroup>
            <TextField
              id="headers" 
              type="text"
              value={headerKey}
              onChange={onHeaderKeyChange}
              label="KEY"
              variant="outlined"
              style={{
                width: '400px'
              }}
            />
            <TextField
              id="token" 
              type="text"
              value={headerValue}
              onChange={onHeaderValueChange}
              label="VALUE"
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
  authType: PropTypes.string.isRequired,
  headerKey: PropTypes.string.isRequired,
  headerValue: PropTypes.string.isRequired,
  onUrlQueryChange: PropTypes.func.isRequired,
  onJsonChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRadioChange: PropTypes.func.isRequired,
  onAuthRadioChange: PropTypes.func.isRequired,
  onSwitchChange: PropTypes.func.isRequired,
  onHeaderValueChange: PropTypes.func.isRequired,
  onHeaderKeyChange: PropTypes.func.isRequired,
};

export default Controls;

