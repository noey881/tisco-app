import { extend } from 'vee-validate'
import { required, email, integer ,min_value, numeric } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required.',
})

extend('email', {
  ...email,
  message: 'Email is invalid',
})

extend('phone', {
  validate: value => {

    const MOBILEREG = /^[0-9+\-*\/\(\)]*$/g;
    const mobile = new RegExp(
      MOBILEREG
    ); // regex to check our strong password 

    return mobile.test(value); //Test the regex. Test function returns a true or false value.
  },
   message: `Phone number is invalid`,
})

extend('integer', {
  ...integer,
  message: 'This field require number only',
})

extend('min_value', {
  ...min_value,
  message: 'Max member must more than 2',
})