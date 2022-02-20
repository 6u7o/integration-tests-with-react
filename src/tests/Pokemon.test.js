import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import App from '../App';

describe('Testando o componente Pokemon', () => {
  test(
    'Verifica as info do pokemon',
    () => {
      render(<App />, { wrapper: MemoryRouter });
      const pokemonName = screen.getByTestId(/pokemon-name/i);
      expect(pokemonName.innerHTML).toEqual('Pikachu');
      const pokemonType = screen.getByTestId('pokemon-type');
      expect(pokemonType.innerHTML).toBe('Electric');
      const pokemonWeight = screen.getByTestId('pokemon-weight');
      expect(pokemonWeight.innerHTML).toBe('Average weight: 6.0 kg');
      const pokemonImg = screen.getByRole('img', {
        name: /pikachu sprite/i,
      });
      expect(pokemonImg.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
      expect(pokemonImg.alt).toBe('Pikachu sprite');
    },
  );
  test(
    'Verifica link de detalhes do pokemon',
    () => {
      render(<App />, { wrapper: MemoryRouter });
      const detailsLinkEl = screen.getByRole('link', {
        name: /more details/i,
      });
      expect(detailsLinkEl.href).toBe('http://localhost/pokemons/25');
    },
  );
  test(
    'Verifica se existe um ícone de estrela nos Pokémons favoritados',
    () => {
      render(<App />, { wrapper: MemoryRouter });
      const detailsLinkEl = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(detailsLinkEl);
      const checkboxEl = screen.getByRole('checkbox');
      userEvent.click(checkboxEl);
      // screen.logTestingPlaygroundURL();
      const favIconEl = screen.getByRole('img', {
        name: /pikachu is marked as favorite/i,
      });
      expect(favIconEl).toBeDefined();
      expect(favIconEl.src).toContain('/star-icon.svg');
      expect(favIconEl.alt).toBe('Pikachu is marked as favorite');
    },
  );
  // test(
  //   'Verifica se ao clicar no link é levado para a página de detalhes',
  //   () => {
  //     render(<App />, { wrapper: MemoryRouter });
  //     const detailsLinkEl = screen.getByRole('link', {
  //       name: /more details/i,
  //     });
  //     userEvent.click(detailsLinkEl);
  //     // const summaryH2 = screen.getByRole('heading', { name: 'Summary' });
  //     // expect(summaryH2).toBeInTheDocument();
  //   },
  // );
});
