import Page from '../../components/page';
import {AppRoute} from '../../const';
import {FormEvent, useRef} from 'react';
import {useAppDispatch} from '../../store/hooks';
import {loginAction} from '../../store/api-actions';
import {useNavigate} from 'react-router-dom';


function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current && emailRef.current?.value && passwordRef.current && passwordRef.current?.value) {
      dispatch(loginAction({
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      }));
      navigate(AppRoute.Main);
    }
  };
  return (
    <Page className="page page--gray page--login" title="6 cities: authorization">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={emailRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  pattern="(?=.*\d)(?=.*[a-Z]).{2,}"
                  title="Must contain at least one number and one letter"
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </Page>
  );
}

export default Login;
