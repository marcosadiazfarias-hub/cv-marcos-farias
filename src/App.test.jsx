import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import App from './App';

describe('App portfolio', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render main sections and contact links', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /Olá, sou o Marcos Farias/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Sobre o Desenvolvedor/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Arsenal Técnico/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Minha Trajetória/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Formação Acadêmica/i })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Meu GitHub/i })).toHaveAttribute('href', 'https://github.com/marcosadiazfarias-hub');
    expect(screen.getByRole('link', { name: /m\.diazfarias@gmail\.com/i })).toHaveAttribute('href', 'mailto:m.diazfarias@gmail.com');
    expect(screen.getByRole('link', { name: /\(48\) 98862-1897/i })).toHaveAttribute('href', 'tel:+5548988621897');
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('href', 'https://www.linkedin.com/in/marcosdiazfarias/');
    expect(screen.getAllByRole('link', { name: /github/i })[1]).toHaveAttribute('href', 'https://github.com/marcosadiazfarias-hub');
  });

  it('should toggle the mobile menu when clicking the menu button', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /abrir menu/i });
    await user.click(button);

    expect(screen.getAllByRole('link', { name: /Sobre Mim/i }).length).toBeGreaterThan(1);
    expect(screen.getAllByRole('link', { name: /Contato/i }).length).toBeGreaterThan(1);

    await user.click(button);
    expect(screen.queryAllByRole('link', { name: /Sobre Mim/i }).length).toBeLessThan(2);
  });

  it('should render quote cards and experience tags', () => {
    render(<App />);

    // Checks if the quote section renders cards, without being specific about the random content
    expect(screen.getAllByText(/—/i).length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText('Accenture Brasil')).toBeInTheDocument();
    expect(screen.getByText('K2 Partnering Solutions')).toBeInTheDocument();
    expect(screen.getByText('Stefanini')).toBeInTheDocument();
    expect(screen.getByText('Azure')).toBeInTheDocument();
  });

  it('should execute all mobile navigation link handlers without errors', async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    const labels = ['Sobre Mim', 'Skills', 'Trajetória', 'Formação', 'Contato'];

    for (const label of labels) {
      await user.click(screen.getByRole('button', { name: /abrir menu/i }));
      const mobileLink = screen.getAllByRole('link', { name: new RegExp(label, 'i') })[1];
      await user.click(mobileLink);
    }

    // A simple assertion to ensure the component is still rendered
    expect(container).toBeInTheDocument();
  });
});

describe('CookieBanner', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should show the cookie banner if consent is not given', async () => {
    render(<App />);
    expect(screen.queryByText(/Privacidade e Cookies/i)).not.toBeInTheDocument();

    vi.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText(/Privacidade e Cookies/i)).toBeInTheDocument();
    });
  });

  it('should not show the cookie banner if consent was already given', () => {
    localStorage.setItem('marcosdev_cookie_consent', 'accepted');
    render(<App />);
    vi.advanceTimersByTime(1000);
    expect(screen.queryByText(/Privacidade e Cookies/i)).not.toBeInTheDocument();
  });

  it('should hide banner and set localStorage when "Sim, eu aceito" is clicked', async () => {
    render(<App />);
    vi.advanceTimersByTime(1000);
    const acceptButton = await screen.findByRole('button', { name: /Sim, eu aceito/i });
    await userEvent.click(acceptButton);
    expect(localStorage.getItem('marcosdev_cookie_consent')).toBe('accepted');
    expect(screen.queryByText(/Privacidade e Cookies/i)).not.toBeInTheDocument();
  });

  it('should hide banner and set localStorage when "Recusar" is clicked', async () => {
    render(<App />);
    vi.advanceTimersByTime(1000);
    const declineButton = await screen.findByRole('button', { name: /Recusar/i });
    await userEvent.click(declineButton);
    expect(localStorage.getItem('marcosdev_cookie_consent')).toBe('declined');
    expect(screen.queryByText(/Privacidade e Cookies/i)).not.toBeInTheDocument();
  });
});
