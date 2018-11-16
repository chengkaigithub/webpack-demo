import _ from 'lodash';

export default function printMe() {
  console.log('I get called from print.js!');
  cosnole.error('I get called from print.js!');
  _.join(['print', 'print', 'print!'], ' ')
}
