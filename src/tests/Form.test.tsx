import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from '../components/Form';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

describe('Form', () => {
  it('should render form', () => {
    render(<Form />);
  });

  it('should contain correct html elements', async () => {
    render(<Form />);
    screen.getByRole('heading', { name: /reset password/i });
    screen.getByRole('button', { name: /reset/i });
    screen.getByLabelText(/confirm password/i);
    screen.getByLabelText('Password');
  });

  it('should type to password field', async () => {
    render(<Form />);
    const password = screen.getByLabelText('Password');
    userEvent.type(password, 'test');
    expect(password.getAttribute('value')).toBe('test');
  });

  it('should type to confirmPassword field', async () => {
    render(<Form />);
    const confirmPassword = screen.getByLabelText('Confirm password');
    userEvent.type(confirmPassword, 'test');
    expect(confirmPassword.getAttribute('value')).toBe('test');
  });

  it('should have disabled button', async () => {
    render(<Form />);
    const confirmPassword = screen.getByRole('button', { name: /reset/i });
    expect(confirmPassword).toBeDisabled();
  });

  it('should have enabled button if form is valid', async () => {
    render(<Form />);
    const resetButton = screen.getByRole('button', { name: /reset/i });
    const password = screen.getByLabelText('Password');
    const confirmPassword = screen.getByLabelText('Confirm password');

    userEvent.type(password, '123123##');
    userEvent.type(confirmPassword, '123123##');

    expect(resetButton).not.toBeDisabled();
  });
  it('should have enabled button when passwords are over 15 char', async () => {
    render(<Form />);
    const resetButton = screen.getByRole('button', { name: /reset/i });
    const password = screen.getByLabelText('Password');
    const confirmPassword = screen.getByLabelText('Confirm password');

    userEvent.type(password, '123123123123123123');
    userEvent.type(confirmPassword, '123123123123123123');

    expect(resetButton).not.toBeDisabled();
  });

  it('should have disabled button if passwords are invalid', async () => {
    render(<Form />);
    const resetButton = screen.getByRole('button', { name: /reset/i });
    const password = screen.getByLabelText('Password');
    const confirmPassword = screen.getByLabelText('Confirm password');

    userEvent.type(password, '123123');
    userEvent.type(confirmPassword, '123123');

    expect(resetButton).toBeDisabled();
  });

  it('should click on reset button when its valid', async () => {
    render(<Form />);
    const resetButton = screen.getByRole('button', { name: /reset/i });
    const password = screen.getByLabelText('Password');
    const confirmPassword = screen.getByLabelText('Confirm password');

    userEvent.type(password, '123123##');
    userEvent.type(confirmPassword, '123123##');

    userEvent.click(resetButton);

    expect(password).not.toBeInTheDocument();
    expect(confirmPassword).not.toBeInTheDocument();
    screen.getByRole('heading', { name: /password was reset successfully/i });
  });
});
