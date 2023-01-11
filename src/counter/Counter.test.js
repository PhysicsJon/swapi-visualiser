import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Counter from './Counter';

describe('Counter rendering', () => {
  it('renders the counter correctly', () => {
    const component = renderer.create(<Counter />).toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('Counter actions', () => {
  it('clicking `+` adds to count', () => {
    const { container } = render(<Counter />);
    const button = container.querySelector('[data-test-id=add-counter]');
    expect(button).not.toBeNull();

    act(() => {
      userEvent.click(button);
    });

    const count = document.getElementById('count');
    expect(count.innerHTML).not.toBeUndefined();
    expect(count.innerHTML).toBe('1');
  });

  it('clicking `-` minuses from count', () => {
    const { container } = render(<Counter />);
    const button = container.querySelector('[data-test-id=minus-counter]');
    expect(button).not.toBeNull();

    act(() => {
      userEvent.click(button);
    });

    const count = document.getElementById('count');
    expect(count.innerHTML).not.toBeUndefined();
    expect(count.innerHTML).toBe('-1');
  });
});
