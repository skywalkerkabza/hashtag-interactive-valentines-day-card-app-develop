import { render } from '@testing-library/react';
import SeoTags from '../seoTags';

describe('<SeoTags />', () => {
  const renderComponent = () => render(<SeoTags />);

  it('should render without errors', () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });
});
