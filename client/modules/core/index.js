import routes from './routes';
import actions from './actions';

export default {
  load(context) {
    const {LocalState} = context;

    // TODO: is this where line's default state should be set?
    LocalState.set('number', 0);
  },
  actions,
  routes
};
