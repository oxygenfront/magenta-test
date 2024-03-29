import { ChangeEvent, FC } from 'react';

import { SortedUnion } from '../../types/FetchingData';

interface SelectProps {
  currentSort: SortedUnion
  sortFunction: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Select: FC<SelectProps> = ({ currentSort, sortFunction }) => (
  <>
    <p>Сортировать по</p>
    <select id="" name="" onChange={sortFunction} value={currentSort}>
      <option value="">Сбросить сортировку</option>
      <option value="name">имени</option>
      <option value="height">росту</option>
      <option value="mass">весу</option>
      <option value="hair_color">цвету волос</option>
      <option value="skin_color">цвету кожи</option>
      <option value="eye_color">цвету глаз</option>
      <option value="birth_year">дате рождения</option>
      <option value="gender">полу</option>
      <option value="created">дате создания</option>
      <option value="edited">дате редактирования</option>
    </select>
  </>
);

export default Select;
