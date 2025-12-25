
const MOCK_INSIDE_LIST = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge'
];

const OfferInside = (): JSX.Element => (
  <div className="offer__inside">
    <h2 className="offer__inside-title">What&apos;s inside</h2>
    <ul className="offer__inside-list">
      {
        MOCK_INSIDE_LIST.map((item) => (
          <li className="offer__inside-item" key={item}>
            {item}
          </li>
        ))
      }
    </ul>
  </div>
);


export default OfferInside;
