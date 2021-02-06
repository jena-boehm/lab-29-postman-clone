import React from 'react';
import PropTypes from 'prop-types';
import ReactJSON from 'react-json-view';

const Results = ({ results }) => (
  <ReactJSON src={results} />
);

Results.propTypes = {
  results: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Results;
