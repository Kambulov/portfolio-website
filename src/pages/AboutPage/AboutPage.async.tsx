import lazyLoadingTimeout from '../../components/AsyncPageGenerator';
import {lazy} from 'react';

export const AboutPageAsync = lazy(
  () => { return lazyLoadingTimeout(import('./AboutPage'), 1000)},
);