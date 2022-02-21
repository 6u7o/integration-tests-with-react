import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import App from '../App';
import pokemons from '../data';

describe('Testando o componente Pokedex', () => {
  test(
    'Verifica o heading de Pokedex',
    () => {
      render(<App />, { wrapper: MemoryRouter });

      const headingEl = screen.getByRole('heading', {
        name: /encountered pokémons/i,
      });

      expect(headingEl).toBeInTheDocument();
      // screen.logTestingPlaygroundURL();
    },
  );
  test(
    'Verifica  se é exibido o próximo Pokémon da lista',
    () => {
      render(<App />, { wrapper: MemoryRouter });

      const btnEl = screen.getByRole('button', {
        name: /próximo pokémon/i,
      });

      userEvent.click(btnEl);
      const poke1 = screen.getByText(/Charmander/i);
      expect(poke1).toBeInTheDocument();

      userEvent.click(btnEl);
      const poke2 = screen.getByText(/Caterpie/i);
      expect(poke2).toBeInTheDocument();

      userEvent.click(btnEl);
      const poke3 = screen.getByText(/Ekans/i);
      expect(poke3).toBeInTheDocument();

      userEvent.click(btnEl);
      const poke4 = screen.getByText(/Alakazam/i);
      expect(poke4).toBeInTheDocument();

      userEvent.click(btnEl);
      const poke5 = screen.getByText(/Mew/i);
      expect(poke5).toBeInTheDocument();

      userEvent.click(btnEl);
      const poke6 = screen.getByText(/Rapidash/i);
      expect(poke6).toBeInTheDocument();

      userEvent.click(btnEl);
      const poke7 = screen.getByText(/Snorlax/i);
      expect(poke7).toBeInTheDocument();

      userEvent.click(btnEl);
      const poke8 = screen.getByText(/Dragonair/i);
      expect(poke8).toBeInTheDocument();

      userEvent.click(btnEl);
      const poke9 = screen.getByText(/Pikachu/i);
      expect(poke9).toBeInTheDocument();
      //  check all pokemon-type-buttons
      const filterBtnsEl = screen.getAllByTestId('pokemon-type-button');
      const numberBtns = 7;
      expect(filterBtnsEl.length).toEqual(numberBtns);
    },
  );
  test(
    'Verifica se é mostrado um pokemon por vez',
    () => {
      render(<App />, { wrapper: MemoryRouter });

      const detailsEl = screen.getAllByRole('link', {
        name: /more details/i,
      });

      expect(detailsEl.length).toBe(1);
    },
  );
  test(
    'Verifica se a Pokédex tem os botões de filtro',
    () => {
      render(<App />, { wrapper: MemoryRouter });

      function arrPokeByType(type, btn) {
        pokemons
          .filter((it3) => it3.type === type)
          .map((it) => it.name)
          .forEach((name) => {
            const nextPoke = screen.getByText(`${name}`);
            expect(nextPoke).toBeInTheDocument();
            userEvent.click(btn);
          });
      }

      const nextBtn = screen.getByRole('button', {
        name: /próximo pokémon/i,
      });

      const arrTypes = [
        'Electric',
        'Fire',
        'Bug',
        'Poison',
        'Psychic',
        'Normal',
        'Dragon',
      ];
      arrTypes.forEach((type) => {
        userEvent.click(screen.getByRole('button', { name: type }));
        arrPokeByType(type, nextBtn);
      });
    },
  );
  test(
    'Verifica o botão All',
    () => {
      render(<App />, { wrapper: MemoryRouter });

      const btn1 = screen.getByRole('button', {
        name: /all/i,
      });
      const nextBtn = screen.getByRole('button', {
        name: /próximo pokémon/i,
      });
      userEvent.click(btn1);
      pokemons
        .map((it) => it.name)
        .forEach((pokemon) => {
          const nextPoke = screen.getByText(`${pokemon}`);
          expect(nextPoke).toBeInTheDocument();
          userEvent.click(nextBtn);
          expect(btn1).toBeInTheDocument();
        });
    },
  );
});
