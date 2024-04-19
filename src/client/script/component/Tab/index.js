import React from 'react';
import style from './index.module.css';
import global from '~/client/script/obj/global';

function getInitActive() {
  switch (location.pathname) {
    case '/':
      return 0;
    case '/introduce':
      return 1;
  }
}

const {
  emitter,
} = global;

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: getInitActive(),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(active) {
    this.setState({
      active,
    });
    switch (active) {
      case 0:
        emitter.send('page/');
        break;
      case 1:
        emitter.send('page/introduce');
        break;
    }
  }

  render() {
    const { active, } = this.state;
    return (
      <ul className={style.tab}>
        <li
          className={[style.item, active === 0 ? style.active : null].join(' ')}
          onClick={(e) => this.handleClick(0)}
        >
          Index
        </li>
        <li
          className={[style.item, active === 1 ? style.active : null].join(' ')}
          onClick={(e) => this.handleClick(1)}
        >
          Introduce
        </li>
      </ul>
    );
  }
}

export default Tab;
