import Ember from 'ember';
import moment from 'moment';

export function dateFormat(params) {
  return moment(params[0]).format('YYYY-MM-DD');
}

export default Ember.Helper.helper(dateFormat);
