import lazyLoadingTimeout from '../../components/AsyncPageGenerator';
import {lazy} from 'react';

export const MainPageAsync = lazy(
  () => { return lazyLoadingTimeout(import('./MainPage'), 1000)},
);