import React from 'react';
import style from './index.module.css';

export default function javascriptTemplate(e) {
  const { type, elem, } = e;
  switch (type) {
    case 'identifer':
      return <span className={style.identifer}>{elem}</span>;
    case '(':
    case ')':
      return <span className={style.smallBracket}>{type}</span>;
    case ',':
      return <span className={style.comma}>,</span>;
  }
}
