import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('message');
    },

    setupController(controller, model){
        Ember.set(controller, 'messages', model);
    }
});
