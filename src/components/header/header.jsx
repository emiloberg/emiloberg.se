import React from 'react';

import classnames from 'classnames';

import styles from './header.css';

import me from 'responsive?placeholder=true&sizes[]=650&name=res/resp/[hash:8]-[width].&publicPath=res/resp/!./header.jpg';

import Contacts from '../contacts/contacts'

export default () => {
  return (
      <div className={ styles.headerWrapper }>
        <div className={ styles.header }>
          <div
            className={ classnames(styles.headerInner, 'lazy') }
            data-src={ me.src }
          >
            <h1 className={ styles.name }>Hi I'm Emil!</h1>
            <div>
              <p>
                Half the time I build things, mostly with Javascript and React.
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
          <div>
            <div className={ styles.contactsWrapper }>
              <Contacts />
            </div>
          </div>
        </div>
      </div>
  )
};
