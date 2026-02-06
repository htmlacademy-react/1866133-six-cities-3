import { useState } from 'react';
import { SortOption } from '../../../../const';

const ARROW_SIZE = {
  WIDTH: '7',
  HEIGHT: '4'
};

const SORT_OPTIONS = Object.values(SortOption);

type FormSortingPropsType = {
  selectedSort: SortOption;
  setSelectedSort: (option:SortOption) => void;
}


const FormSorting = ({selectedSort, setSelectedSort}: FormSortingPropsType) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (index: number) => {
    setSelectedSort(SORT_OPTIONS[index]);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => !isOpen && setIsOpen(true)}
      >
        {selectedSort}
        <svg
          className="places__sorting-arrow"
          width={ARROW_SIZE.WIDTH}
          height={ARROW_SIZE.HEIGHT}
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options
        places__options--custom
        ${isOpen ? 'places__options--opened' : ''}`}
      >
        {
          SORT_OPTIONS.map((optionName, index) => (
            <li
              key={optionName}
              tabIndex={0}
              className={`places__option
                ${optionName === selectedSort ? 'places__option--active' : ''}`}
              onClick={() => handleOptionClick(index)}
            >
              {optionName}
            </li>
          ))
        }
      </ul>
    </form>
  );
};


export default FormSorting;
