import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import App from '../App';

describe('Testando o componente PokemonDetails', () => {
  test(
    'Verifica os elementos que aprecem em PokemonDetails',
    () => {
      render(<App />, { wrapper: MemoryRouter });
      const detailsLinkEl = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(detailsLinkEl);
      const headingDetailsEl = screen.getByRole('heading', {
        name: /pikachu details/i,
      });
      expect(headingDetailsEl).toBeDefined();
      // const currentDetEl = screen.queryByText('link', {
      //   name: /more details/i,
      // });                         funcionou mas n aumentou no stryker
      // expect(currentDetEl).toBeNull();
      // screen.logTestingPlaygroundURL();
      const summEl = screen.getByRole('heading', {
        name: /summary/i,
      });
      expect(summEl).toBeInTheDocument();
      const summTextEl = screen.getByText(
        /this intelligent pokémon /i,
      );
      expect(summTextEl).toBeInTheDocument();
    },
  );
  test(
    'Verifica se existe uma seção com os mapas',
    () => {
      render(<App />, { wrapper: MemoryRouter });
      const detailsLinkEl = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(detailsLinkEl);
      const locationsHeadingEl = screen.getByRole('heading', {
        name: /game locations of pikachu/i,
      });
      expect(locationsHeadingEl).toBeInTheDocument();
      //       o de baixo n aumentou no stryker
      // const loc1El = screen.getByText(/kanto viridian forest/i);
      // const loc2El = screen.getByText(/kanto power plant/i);
      // expect(loc1El && loc2El).toBeInTheDocument();

      const locImgsEl = screen.getAllByRole('img', { name: /pikachu location/i });
      // const loc1El = screen.getByText(/kanto viridian forest/i);
      // expect(loc1El && locImg1El).toBeInTheDocument();
      expect(locImgsEl.length).toBe(2);
      expect(locImgsEl[0].alt).toBe('Pikachu location');
      expect(locImgsEl[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    },
  );
  test(
    'Verifica se o usuário pode favoritar um pokémon através da página de detalhes.',
    () => {
      render(<App />, { wrapper: MemoryRouter });
      const detailsLinkEl = screen.getByRole('link', {
        name: /more details/i,
      });
      userEvent.click(detailsLinkEl);
      const checkboxEl = screen.getByRole('checkbox');
      expect(checkboxEl).toBeInTheDocument();

      //       o de baixo n aumentou no stryker  :(
      // userEvent.click(checkboxEl);
      // const favEl = screen.getByRole('img', {
      //   name: /pikachu is marked as favorite/i,
      // });
      // expect(favEl).toBeInTheDocument();
      // userEvent.click(checkboxEl);
      // const notFavEl = screen.queryByRole('img', {
      //   name: /pikachu is marked as favorite/i,
      // });
      // expect(notFavEl).toBeNull();
      // userEvent.click(checkboxEl);
      // const fav1El = screen.getByRole('img', {
      //   name: /pikachu is marked as favorite/i,
      // });
      // expect(fav1El).toBeInTheDocument();

      const checkLabelEl = screen.getByLabelText(/Pokémon favoritado/i);
      expect(checkLabelEl).toBeInTheDocument();
    },
  );
});
