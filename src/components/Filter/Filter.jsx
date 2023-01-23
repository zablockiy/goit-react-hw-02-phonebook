import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({value, onFilter}) =>{
  return (
    <>
      <p>Find Contacts by name</p>
      <input type="text" name="filter" value={value} onChange={onFilter} />
    </>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
