import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import HomeSamplePage from '../index';
import messages from '../messages';

describe('<HomeSamplePage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<HomeSamplePage />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toEqual(true);
  });
});
