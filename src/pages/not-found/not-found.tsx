import {Link} from 'react-router-dom';

export const NotFound = () => (
  <div
    style={{
      textAlign: 'center',
      marginTop: '50vh'
    }}
  >
    <p>404 Not Found</p>
    <Link to='/'>Перейти на главную</Link>
  </div>
);

