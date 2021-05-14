import React from 'react';
import PropTypes from 'prop-types';

function Controls({ url, body, onUrlQueryChange, onJsonChange, onSubmit }) {
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
  onUrlQueryChange: PropTypes.func.isRequired,
  onJsonChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Controls;

