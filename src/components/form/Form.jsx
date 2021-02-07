import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ url, method, body, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>

    <div className={styles.urlInput}>
      <label htmlFor="url" />
      <input
        id="url"
        type="text"
        name="url"
        placeholder="URL"
        value={url}
        onChange={onChange} />
    </div>
    <div className={styles.methods}>
      <label htmlFor="get">GET</label>
      <input
        id="get"
        type="radio"
        name="method"
        value="GET"
        checked={method === 'GET'}
        onChange={onChange} />

      <label htmlFor="post">POST</label>
      <input
        id="post"
        type="radio"
        name="method"
        value="POST"
        checked={method === 'POST'}
        onChange={onChange} />

      <label htmlFor="put">PUT</label>
      <input
        id="put"
        type="radio"
        name="method"
        value="PUT"
        checked={method === 'PUT'}
        onChange={onChange} />

      <label htmlFor="patch">PATCH</label>
      <input
        id="patch"
        type="radio"
        name="method"
        value="PATCH"
        checked={method === 'PATCH'}
        onChange={onChange} />

      <label htmlFor="delete">DELETE</label>
      <input
        id="delete"
        type="radio"
        name="method"
        value="DELETE"
        checked={method === 'DELETE'}
        onChange={onChange} />
    </div>
    <button>Send</button>
    <div className={styles.jsonInput}>
      <textarea 
        id="body"
        name="body"
        placeholder="JSON body"
        value={body}
        onChange={onChange} />
    </div>
  </form>
);

Form.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
