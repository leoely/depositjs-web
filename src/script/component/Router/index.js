import React from 'react';
import '~/style/index.css';
import style from './index.module.css';
import Container from '~/script/component/Container';
import Tab from '~/script/component/Tab';
import global from '~/script/obj/global';

const {
  emitter,
  location,
} = global;

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.route =  {};
    this.component = {};
    this.state = {
      loading: true,
      location: '/',
    };
  }

  async componentDidMount() {
    await this.bindEvent();
    emitter.send('page' + window.location.pathname);
  }

  bindEvent() {
    location.onChange((location) => {
      this.setState({
        location,
        loading: false,
      });
    });
    emitter.on('page/', async () => {
      const Home = await import('~/script/page/Home');
      this.addRoute('/', Home.default);
      location.to('/');
    });
  }

  addRoute(path, component) {
    const { route, } = this;
    if (route[path] === undefined) {
      route[path] = component;
    }
    return route[path];
  }

  getPage(path) {
    const { component, } = this;
    if (component[path] === undefined) {
      const Page = this.route[path];
      if (Page === undefined) {
        return <NotFound />;
      }
      if (Page) {
        component[path] = <Page />;
      } else {
        component[path] = null;
      }
    }
    return component[path];
  }

  render() {
    const { location, loading, } = this.state;
    let router;
    if (loading === true) {
      router = null;
    } else {
      router =
      <Container>
        <div id="page" className={style.page}>{this.getPage(location)}</div>
        <Tab />
      </Container>
    }
    return router;
  }
}

export default Router;
