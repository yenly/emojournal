import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app name', () => {
  render(<App />);
  const linkElement = screen.getByText(/emojournal/i);
  expect(linkElement).toBeInTheDocument();
});
