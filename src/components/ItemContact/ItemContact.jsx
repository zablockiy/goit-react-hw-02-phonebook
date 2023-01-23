import React from 'react';
import PropTypes from 'prop-types';
import style from './itemContact.module.css';

export const ItemContact = ({ id, name, phone, del }) => {
  return (<>
    <li className={style.item}>
      <p className={style.title}>{name} : {phone}</p>
      <button className={style.btn} onClick={() => del(id)}> Delete</button>
    </li>
  </>);
};

ItemContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  del: PropTypes.func.isRequired,
};
