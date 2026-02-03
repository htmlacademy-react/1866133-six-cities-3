import { useState } from 'react';

const ARROW_SIZE = {
  WIDTH: '7',
  HEUGHT: '4'
};

const SORT_OPTIONS = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

const getIndex = (value:string, arr = SORT_OPTIONS) => arr.findIndex((item) => item === value);

type FormSortingPropsType = {
  selectedSort: number;
  setSelectedSort: (option:number) => void;
}


const FormSorting = ({selectedSort, setSelectedSort}: FormSortingPropsType) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleFormSort = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (evt: React.MouseEvent<HTMLElement>) => {
    setSelectedSort(getIndex(evt.currentTarget.textContent));
    toggleFormSort();
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => !isOpen && toggleFormSort()}
      >
        {SORT_OPTIONS[selectedSort]}
        <svg
          className="places__sorting-arrow"
          width={ARROW_SIZE.WIDTH}
          height={ARROW_SIZE.HEUGHT}
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options
        places__options--custom
        ${isOpen ? 'places__options--opened' : ''}`}
      >
        {
          SORT_OPTIONS.map((optionName) => (
            <li
              key={optionName}
              tabIndex={0}
              className={`places__option
                ${getIndex(optionName) === selectedSort ? 'places__option--active' : ''}`}
              onClick={handleOptionClick}
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
