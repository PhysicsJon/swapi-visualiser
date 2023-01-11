import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component correctly', () => {
  const component = renderer.create(<App />).toJSON();

  expect(component).toMatchSnapshot();
});

test('renders the link within the App component', () => {
  render(<App />);

  expect(screen.getByRole('link')).toHaveClass('App-link');
});
