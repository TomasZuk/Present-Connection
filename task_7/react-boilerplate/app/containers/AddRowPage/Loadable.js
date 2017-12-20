/**
 *
 * Asynchronously loads the component for AddRowPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
