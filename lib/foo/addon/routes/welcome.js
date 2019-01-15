import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    console.log('entered welcome model');
  },

  actions: {
    refresh() {
      console.log('refreshing welcome route');
      this.refresh();
    }
  }
});
