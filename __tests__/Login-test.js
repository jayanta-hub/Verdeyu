import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Login from '../src/presentation/components/LogIn/Login';

// it('renders correctly', () => {
//   renderer.create(<Login />);
// });
it('Login Screen', () => {
  const snap = renderer.create(<Login />).toJSON();
  expect(snap).toMatchSnapshot();
});
