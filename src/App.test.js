import { render, screen } from '@testing-library/react';
import App from './App';
import left from './left';
import right from './right';
import footer from './footer';
test('renders learn react link', () => {
  render(<App />);
  render(<left />);
  render(<right />);
  render(<footer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
