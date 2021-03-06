import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Footer from '../Footer';

test('<Footer />', () => {
  const footer = shallow(
    <Footer />
  );
  expect(footer.find('div').length).toBe(1);
});
