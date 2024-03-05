import Emitter from '~/script/class/Emitter';
import Location from '~/script/class/Location';

const emitter = new Emitter();
const location = new Location();

const global = {
  emitter,
  location,
};

export default global;
