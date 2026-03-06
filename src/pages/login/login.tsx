import { Helmet } from 'react-helmet-async';
import LoginForm from './components/login-form/login-form';
import { Link } from 'react-router-dom';
import { getRandomIntInRange } from '../../utils/common';
import { AppRoute, CITIE_NAMES } from '../../const';


const Login = () => {

  const randomCity = CITIE_NAMES[getRandomIntInRange(0, CITIE_NAMES.length - 1)];

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>Страница авторизации пользователя!</title>
      </Helmet>
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <LoginForm />
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link className="locations__item-link" to={`${AppRoute.Root}?city=${randomCity}`}>
              <span>{randomCity}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Login;
