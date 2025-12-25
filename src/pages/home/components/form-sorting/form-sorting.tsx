//import React from 'react';

const OptionNames = [
  {id: 1, name:'Popular'},
  {id: 2, name:'Price: low to high'},
  {id: 3, name:'Price: high to low'},
  {id: 4, name:'Top rated first'},
];


const FormSorting = () => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by&nbsp;</span>
    <span className="places__sorting-type" tabIndex={0}>
      Popular
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      {
        OptionNames.map((item) => (
          <li
            key={item.id}
            tabIndex={0}
            // временное решение
            className={`places__option ${item.id === 1 ? 'places__option--active' : ''}`}
          >
            {item.name}
          </li>
        ))
      }
    </ul>
  </form>
);


export default FormSorting;
