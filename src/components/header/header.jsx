import React from 'react';

import styles from './header.css';

import Me from './header.jpg'

import Button from '../button/button'

export default () => {
  return (
      <div className={ styles.header }>
        <div className={ styles.headerInner } style={{ backgroundImage: `url('${ Me }')` }} >
          <h1 className={ styles.name }>Hi I'm Emil!</h1>
          <div>
            <p>
              Half of the time I build things, mostly with Javascript and React.
              The other half I'm helping software developing businesses with management.
            </p>
            <p>
              I've a keen interest in systems thinking, skiing, psychology and human behavior, internet of things, scuba diving, user experience, using digitalisation and automatisation to develop the world and way to many other things.
            </p>
            <p>
              I'm also running <a href="http://www.bitupnorth.com">Bit Up North AB</a>
            </p>
          </div>
        </div>
        <div className={ styles.contactsCard }>
          <div className={ styles.contactsCardRetainer }>
            <div className={ styles.contactsInner }>
              <ul className={ styles.personal }>
                <li>Tel: <a href="tel:+46739852585">+46 (0)739-85 25 85</a></li>
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
        </div>
      </div>
  )
};
