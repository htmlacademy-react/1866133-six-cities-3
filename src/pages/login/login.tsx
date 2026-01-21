import { Helmet } from 'react-helmet-async';
import LoginForm from './components/login-form/login-form';
import { Link } from 'react-router-dom';
import { getRandomIntInRange } from '../../utils/common';
import { citieNames } from '../../const';


const Login = () => (

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
          <Link className="locations__item-link" to="#">
            <span>{citieNames[getRandomIntInRange(0, citieNames.length - 1)]}</span>
          </Link>
        </div>
      </section>
    </div>
  </main>

);

export default Login;
