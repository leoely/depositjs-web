import React from 'react';
import style from './index.module.css';

class Tab extends React.Component {
  render() {
    return (
      <ul className={style.tab}>
        <li className={style.item}>Index</li>
        <li className={style.item}>Introduce</li>
      </ul>
    );
  }
}

export default Tab;
