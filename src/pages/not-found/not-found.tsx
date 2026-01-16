import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

export const NotFound = () => (
  <div
    style={{
      textAlign: 'center',
      marginTop: '50vh'
    }}
  >
    <p>404 Not Found</p>
    <Link to={AppRoute.Root}>Перейти на главную</Link>
  </div>
);

