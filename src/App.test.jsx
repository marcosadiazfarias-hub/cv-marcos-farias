import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/vitest';
import App from './App';

describe('App portfolio', () => {
  it('renders the main sections and contact links', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /Olá, sou o Marcos Farias/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Sobre o Desenvolvedor/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Arsenal Técnico/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Minha Trajetória/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Formação Acadêmica/i })).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Meu GitHub/i })).toHaveAttribute('href', 'https://github.com/TarjaBlack');
    expect(screen.getByRole('link', { name: /m\.diazfarias@gmail\.com/i })).toHaveAttribute('href', 'mailto:m.diazfarias@gmail.com');
    expect(screen.getByRole('link', { name: /\(48\) 98862-1897/i })).toHaveAttribute('href', 'tel:+5548988621897');
  });

  it('toggles the mobile menu when clicking the menu button', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button');
    await user.click(button);

    expect(screen.getAllByRole('link', { name: /Sobre Mim/i }).length).toBeGreaterThan(1);
    expect(screen.getAllByRole('link', { name: /Contato/i }).length).toBeGreaterThan(1);

    await user.click(button);
    expect(screen.queryAllByRole('link', { name: /Sobre Mim/i }).length).toBeLessThan(2);
  });

  it('renders the quote cards and experience tags', () => {
    render(<App />);

    expect(screen.getByText(/Qualquer tolo consegue/i)).toBeInTheDocument();
    expect(screen.getByText(/Falar é fácil/i)).toBeInTheDocument();
    expect(screen.getByText('Accenture Brasil')).toBeInTheDocument();
    expect(screen.getByText('K2 Partnering Solutions')).toBeInTheDocument();
    expect(screen.getByText('Stefanini')).toBeInTheDocument();
    expect(screen.getByText('Azure')).toBeInTheDocument();
  });

  it('executes all mobile navigation link handlers', async () => {
    const user = userEvent.setup();
    render(<App />);

    const labels = ['Sobre Mim', 'Skills', 'Trajetória', 'Formação', 'Contato'];

    for (const label of labels) {
      await user.click(screen.getByRole('button'));
      const mobileLink = screen.getAllByRole('link', { name: new RegExp(label, 'i') })[1];
      await user.click(mobileLink);
    }

    expect(screen.queryByRole('link', { name: /Sobre Mim/i })).toBeInTheDocument();
  });
});
