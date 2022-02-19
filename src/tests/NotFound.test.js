import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando o componente App', () => {
  test(
    'Verifica os elementos de NotFound',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/teste');

      const notFoundH2El = screen.getByRole('heading', { name: /Page requested not/i });
      expect(notFoundH2El).toBeInTheDocument();
      // screen.logTestingPlaygroundURL();
      const pikachuImgEl = screen.getByRole('img', {
        name: /pikachu crying because the page requested was not found/i,
      });
      expect(pikachuImgEl.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    },
  );
});
