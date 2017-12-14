import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { Login } from './Login';

if (Meteor.isClient) {
  describe('Login', () => {
    it('should show error messages', () => {
      const error = 'This is not working';
      const wrapper = mount(<Login loginWithPassword={() => {}} />);

      wrapper.setState({ error });
      expect(wrapper.find('p').text()).toBe(error);

      wrapper.setState({ error: '' });
      expect(wrapper.find('p').length).toBe(0);
    });

    it('should call loginWithPassword with the form data', () => {

    });

    it('should callset loginWithPassword callback errors', () => {

    });
  });
}
