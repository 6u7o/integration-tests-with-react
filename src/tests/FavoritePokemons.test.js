import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Testando o componente App', () => {
  test(
    'Verifica o parágrafo em FavoritePokemons',
    () => {
      render(<FavoritePokemons />);

      const pEl = screen.getByText(/no favorite pokemon found/i);
      expect(pEl).toBeInTheDocument();
      // screen.logTestingPlaygroundURL();
    },
  );
  test(
    'Verifica se os pokemons favoritados aparecem na página',
    () => {
      render(<App />, { wrapper: MemoryRouter });
      const moreDetailsEl = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(moreDetailsEl);

      const checkboxEl = screen.getByRole('checkbox');

      userEvent.click(checkboxEl);

      const favsEl = screen.getByRole('link', { name: 'Favorite Pokémons' });

      userEvent.click(favsEl);

      const pikachuEl = screen.getByText(/Pikachu/i);

      expect(pikachuEl).toBeInTheDocument();

      // screen.logTestingPlaygroundURL();
    },
  );
});
