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
    expect(screen.getByRole('link', { name: /Meu Currículo/i })).toHaveAttribute(
      'href',
      'https://drive.google.com/file/d/1lvsVdEru8_o8HtmzMhnvfw5-8ZVH3Lbz/view?usp=sharing'
    );
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

  it('should display cached quotes for the current period', () => {
    const now = new Date();
    const period = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours() < 12 ? 'AM' : 'PM'}`;
    localStorage.setItem('marcosdev_quotes_period', period);
    localStorage.setItem('marcosdev_quotes_data', JSON.stringify([
      { text: 'Frase guardada para este período.', author: 'Teste A' },
      { text: 'Outra frase guardada.', author: 'Teste B' },
    ]));

    render(<App />);

    expect(screen.getByText(/Frase guardada para este período\./)).toBeInTheDocument();
    expect(screen.getByText(/Outra frase guardada\./)).toBeInTheDocument();
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
  });

  it('should show the cookie banner if consent is not given', async () => {
    render(<App />);
    expect(screen.queryByText(/Privacidade e Cookies/i)).not.toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Privacidade e Cookies/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('should not show the cookie banner if consent was already given', async () => {
    localStorage.setItem('marcosdev_cookie_consent', 'accepted');
    render(<App />);

    await waitFor(() => {
      expect(screen.queryByText(/Privacidade e Cookies/i)).not.toBeInTheDocument();
    });
  });

  it('should hide banner and set localStorage when "Sim, eu aceito" is clicked', async () => {
    render(<App />);
    const acceptButton = await screen.findByRole('button', { name: /Sim, eu aceito/i }, { timeout: 3000 });
    await userEvent.click(acceptButton);
    expect(localStorage.getItem('marcosdev_cookie_consent')).toBe('accepted');
    expect(screen.queryByText(/Privacidade e Cookies/i)).not.toBeInTheDocument();
  });

  it('should hide banner and set localStorage when "Recusar" is clicked', async () => {
    render(<App />);
    const declineButton = await screen.findByRole('button', { name: /Recusar/i }, { timeout: 3000 });
    await userEvent.click(declineButton);
    expect(localStorage.getItem('marcosdev_cookie_consent')).toBe('declined');
    expect(screen.queryByText(/Privacidade e Cookies/i)).not.toBeInTheDocument();
  });
});
