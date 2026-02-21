import { useState } from 'react';
import { login } from '../../../../store/user/auth.thunks';
import { useAppDispatch } from '../../../../hooks';


const LoginForm = () => {

  const dispath = useAppDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.currentTarget;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    dispath(login(formData));
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
};
export default LoginForm;
