import Button from '../components/button'
import {useDeps, composeWithTracker, composeAll} from 'mantra-core'

const composer = ({context}, onData) => {
  const {LocalState} = context
  onData(null, {
    number: LocalState.get('number')
  });
}

const depsMapper = function (context, actions) {
  return {
    grow: actions.line.grow,
    shrink: actions.line.shrink,
    context
  }
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Button)
