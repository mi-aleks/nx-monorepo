import { render } from '@testing-library/react';

import ExternalV2 from './external-v2';

describe('ExternalV2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExternalV2 />);
    expect(baseElement).toBeTruthy();
  });
});
