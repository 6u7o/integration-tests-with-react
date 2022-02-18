import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando o componente App', () => {
  test(
    'Verifica se nos links de navegação aparece: Home, About e Favorite Pokémons',
    () => {
      render(<App />, { wrapper: MemoryRouter });
      const homeEl = screen.getByRole('link', { name: 'Home' });
      const aboutEl = screen.getByRole('link', { name: 'About' });
      const favsEl = screen.getByRole('link', { name: 'Favorite Pokémons' });

      expect(homeEl).toBeInTheDocument();
      expect(aboutEl).toBeInTheDocument();
      expect(favsEl).toBeInTheDocument();

      // screen.logTestingPlaygroundURL();
    },
  );
  test(
    'Verifica se a aplicação é redirecionada à pagina inicial (/) ao clicar em Home',
    () => {
      render(<App />, { wrapper: MemoryRouter });
      const homeEl = screen.getByRole('link', { name: 'Home' });

      userEvent.click(homeEl);
      const h1El = screen.getByRole('heading', { name: /encountered pokémons/i });
      expect(h1El).toBeInTheDocument();
    },
  );
  test(
    'Verifica se a aplicação é redirecionada à pagina inicial (/) ao clicar em Home',
    () => {
      render(<App />, { wrapper: MemoryRouter });
      const aboutEl = screen.getByRole('link', { name: 'About' });

      userEvent.click(aboutEl);
      const h1El = screen.getByRole('heading', { name: /About Pokédex/i });
      expect(h1El).toBeInTheDocument();
    },
  );
  test(
    'Verifica se vai para página inicial (/favorites) ao clicar em Favorite Pokémons',
    () => {
      render(<App />, { wrapper: MemoryRouter });
      const favsEl = screen.getByRole('link', { name: 'Favorite Pokémons' });

      userEvent.click(favsEl);
      const h1El = screen.getByRole('heading', { name: /Favorite pokémons/i });
      expect(h1El).toBeInTheDocument();
    },
  );
});
