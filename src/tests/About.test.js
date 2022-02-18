import React from 'react';
import { screen, render } from '@testing-library/react';
import About from '../components/About';

describe('Testando o componente App', () => {
  test(
    'Verifica os elementos de About',
    () => {
      render(<About />);

      const h1El = screen.getByRole('heading', { name: /About Pokédex/i });

      expect(h1El).toBeInTheDocument();

      const articlesEl = screen.getAllByText(/Pokédex/i);

      expect(articlesEl.length).toBe(2);

      const imgEl = screen.getByRole('img', {
        name: /pokédex/i,
      });

      expect(imgEl.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    },
  );
});
