/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Topo from './Topo';

describe('Topo component', () => {
  test('should render the Logo with correct text', () => {
    const { getByText } = render(
      <Router>
        <Topo />
      </Router>
    );

    const logoText = getByText(/Code/i);
    expect(logoText).toBeInTheDocument();

    const spanText = getByText(/GPT/i);
    expect(spanText).toBeInTheDocument();
  });

  test('should have correct link to home page', () => {
    const { getByRole } = render(
      <Router>
        <Topo />
      </Router>
    );

    // Verifica se existe um link que leva para a página inicial "/"
    const homeLink = getByRole('link', { name: /CodeGPT/i });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  test('should have a ContainerTopo with the correct background color', () => {
    const { container } = render(
      <Router>
        <Topo />
      </Router>
    );

    // Verifica se o ContainerTopo possui a cor de fundo definida corretamente
    const containerTopo = container.firstChild;
    expect(containerTopo).toHaveStyle('background-color: #161515');
  });
});
