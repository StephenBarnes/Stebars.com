import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DogBox link', () => {
  render(<App />);
  const linkElement = screen.getByText(/DogBox/i);
  expect(linkElement).toBeInTheDocument();
});
