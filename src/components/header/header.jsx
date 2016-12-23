import React from 'react';

import styles from './header.css';

import Me from './header.jpg'


export default () => {
  return (
    <div className={ styles.header }>
      <div className={ styles.headerInner } style={{ backgroundImage: `url('${ Me }')` }} >
        <h1 className={ styles.name }>Hi I'm Emil!</h1>
        <div>
          <p>
            Half of me build things, mostly with Javascript and React.
            The other half is a full stack management consultant to software developing businesses
          </p>
          <p>
            I've a keen interest in systems thinking, skiing, psychology and human behavior, scuba diving, user experience and way to many other things.
          </p>
          <p>
            I'm also running <a href="http://www.bitupnorth.com">Bit Up North AB</a>
          </p>
          {/*<ul className={ styles.links }>*/}
            {/*<li><a href="https://se.linkedin.com/in/emiloberg">LinkedIn</a></li>*/}
            {/*<li><a href="https://stackoverflow.com/users/2533681/emil-oberg">Stack Overflow</a></li>*/}
            {/*<li><a href="https://twitter.com/emiloberg">Twitter</a></li>*/}
            {/*<li><a href="https://facebook.com/emiloberg">Facebook</a></li>*/}
            {/*<li><a href="https://www.instagram.com/emil_oberg/">Instagram</a></li>*/}
          {/*</ul>*/}
        </div>
      </div>
    </div>
  )
};
