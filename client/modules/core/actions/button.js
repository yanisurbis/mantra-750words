export default {
  inc({LocalState}) {
    LocalState.set('number', LocalState.get('number') + 1)
  }
}
