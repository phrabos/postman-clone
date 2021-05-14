import React from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import { FormControlLabel, RadioGroup } from '@material-ui/core';

function Controls({ url, body, method, onUrlQueryChange, onJsonChange, onSubmit, onRadioChange }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="api-calls"></label>
        <input 
          id="url-query"
          type="text"
          value={url}
          onChange={onUrlQueryChange}
          placeholder="URL"
          style={{
            width: '700px'
          }}
        />
        <button>Send Request</button>
        <br />
        <RadioGroup row value={method} onChange={onRadioChange}>
          <FormControlLabel value="GET" control={<Radio />} label="GET" />
          <FormControlLabel value="POST" control={<Radio />} label="POST" />
          <FormControlLabel value="PUT" control={<Radio />} label="PUT" />
          <FormControlLabel value="DELETE" control={<Radio />} label="DELETE" />
        </RadioGroup>
        <br />
      </form>
      <input 
        id="json-body"
        type="text"
        value={body}
        onChange={onJsonChange}
        placeholder="Request Body as JSON..."
        style={{
          height: '100px',
          width: '800px'
        }}
      />
    </>
  );
}

Controls.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  onUrlQueryChange: PropTypes.func.isRequired,
  onJsonChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onRadioChange: PropTypes.func.isRequired,
};

export default Controls;

