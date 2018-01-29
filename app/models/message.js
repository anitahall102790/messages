import Model from 'ember-data/model';
import DS from 'ember-data';

const { attr } = DS;

export default DS.Model.extend({
    useragent: attr('string'),
    date: attr('string'),
    message: attr('string'),
    username: attr('string'),
    pic: attr('string')
});
