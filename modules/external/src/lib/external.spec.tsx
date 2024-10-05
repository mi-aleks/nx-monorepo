import { render } from '@testing-library/react';

import External from './external';

describe('External', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<External />);
    expect(baseElement).toBeTruthy();
  });
});
