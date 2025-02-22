import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import ActiveLocalizedLink from '..';

describe('ActiveLocalizedLink', () => {
  it('renders as localized link', () => {
    render(
      <IntlProvider locale="en" onError={() => {}}>
        <ActiveLocalizedLink
          className="link"
          activeClassName="active"
          href="/link"
        >
          Link
        </ActiveLocalizedLink>
      </IntlProvider>
    );

    expect(screen.findByText('Link')).resolves.toHaveAttribute(
      'href',
      '/en/link'
    );
  });

  it('ignores active class when href not matches location.href', () => {
    render(
      <IntlProvider locale="en" onError={() => {}}>
        <ActiveLocalizedLink
          className="link"
          activeClassName="active"
          href="/not-link"
        >
          Link
        </ActiveLocalizedLink>
      </IntlProvider>
    );

    expect(screen.findByText('Link')).resolves.toHaveAttribute('class', 'link');
  });

  it('sets active class when href matches location.href', () => {
    render(
      <IntlProvider locale="en" onError={() => {}}>
        <ActiveLocalizedLink
          className="link"
          activeClassName="active"
          href="/link"
        >
          Link
        </ActiveLocalizedLink>
      </IntlProvider>
    );

    expect(screen.findByText('Link')).resolves.toHaveAttribute(
      'class',
      'link active'
    );
  });
});
