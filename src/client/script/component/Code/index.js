import React from 'react';
import style from './index.module.css';
import { HighLight, JavascriptLexer, } from 'glow.js';
import javascriptTemplate from '~/client/script/lib/template/javascriptTemplate';

const lexers = {
  javascript: JavascriptLexer,
};

const templates = {
  javascript: javascriptTemplate,
};

class Code extends React.Component {
  render() {
    const highLight = new HighLight();
    const { hl, } = this.props;
    hl.forEach((l) => {
      highLight.addLexer(lexers[l]);
    });
    const result = highLight.parse(this.props.children).map((e) => {
      for (let i = 0; i < hl.length; i += 1) {
        if (e.type === ' ') {
          return (<span> </span>);
        } else {
          const l = hl[i];
          const result = templates[l](e);
          if (typeof result === 'object') {
            return result;
          }
        }
      }
    });
    return(
      <span className={style.code}>{result}</span>
    );
  }
}

export default Code;
