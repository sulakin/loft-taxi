import React from 'react';
import { render } from '@testing-library/react';
import PageNotFound from '../PageNotFound';

it('Компонент 404 страницы', () => {
  const { getByText } = render(<PageNotFound />);

  expect(getByText(/Страница не найдена/i)).toBeInTheDocument();
});
