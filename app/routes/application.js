import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    console.log('entered host app model');
  },

  actions: {
    refresh() {
      console.log('refreshing host app route');
      this.refresh();
    }
  }
});
