import React from 'react';
import PropTypes from 'prop-types';

export const ItemContact = ({id,name,phone,del})=>{
  return (<>
    <li>
      <p>Name: {name} : {phone}</p>
      <button onClick={() => del(id)}> Delete </button>
    </li>
  </>)
}

ItemContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  del: PropTypes.func.isRequired,
};
