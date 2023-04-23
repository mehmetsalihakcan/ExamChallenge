import {atom} from 'recoil';
import data from '../Data';

export const questionList = atom({
  key: 'stationSelectedFilters',
  default: data,
});
