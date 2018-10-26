/*
 * HomeSamplePage Messages
 *
 * This contains all the text for the HomeSamplePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  category: {
    id: `${scope}.category`,
    defaultMessage: 'Category',
  },
  product: {
    id: `${scope}.product`,
    defaultMessage: 'Product',
  },
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
});
