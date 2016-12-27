import React from 'react';

import styles from './contacts.css';

import Button from '../button/button'

export default () => {
  return (
    <div className={ styles.contactsCardRetainer }>
      <div className={ styles.contactsInner }>
        <ul className={ styles.personal }>
          <li>Tel: <a className={ styles.tel } href="tel:+46739852585">+46 (0)739-85 25 85</a></li>
          <li>Mail: <a href="mailto:emil@bitupnorth.com">emil@bitupnorth.com</a></li>
        </ul>
        <ul className={ styles.links }>
          <li><Button type="personal" url="https://se.linkedin.com/in/emiloberg">LinkedIn</Button></li>
          <li><Button type="personal" url="https://twitter.com/emiloberg">Twitter</Button></li>
          <li><Button type="personal" url="https://facebook.com/emiloberg">Facebook</Button></li>
          <li><Button type="personal" url="https://www.instagram.com/emil_oberg/">Instagram</Button></li>
          <li><Button type="personal" url="https://github.com/emiloberg">Github</Button></li>
          <li><Button type="personal" url="https://stackoverflow.com/users/2533681/emil-oberg">Stack&nbsp;O.</Button></li>
        </ul>
      </div>
    </div>
  )
};
