import React from 'react';
import style from './index.module.css';

export default function javascriptTemplate(e) {
  const { type, elem, } = e;
  switch (type) {
    case 'delete':
    case 'identifer':
      return <span className={style.identifer}>{elem}</span>;
    case 'parenthese':
      return <span className={style.parenthese}>{elem}</span>;
    case 'iteral':
      return <span className={style.iteral}>{elem}</span>;
    case 'squareParenthese':
      return <span className={style.squareParenthese}>{elem}</span>;
  }
}
