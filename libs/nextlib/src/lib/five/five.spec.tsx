import { render } from '@testing-library/react';

import Five from './five';

describe('Five', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Five />);
    expect(baseElement).toBeTruthy();
  });
});
