import React from 'react';
import style from './index.module.css';

class Parameter extends React.Component {
  render() {
    return (
      <div className={style.parameter}>
        <span className={style.name}>Parameter</span>
        <span className={style.description}> {this.props.children}</span>
      </div>
    );
  }
}

export default Parameter;
