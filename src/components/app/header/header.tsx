import {JSX} from 'react';
import UserStatusBar from './user-status-bar';
import {Link} from 'react-router-dom';
import {AppRouter} from '../../../const';
import Container from '../container';

type HeaderProps = {
  isAuthorizedUser: boolean;
}

function Header({isAuthorizedUser}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <Container >
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRouter.Main} >
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          {isAuthorizedUser ? <UserStatusBar /> : ''}
        </div>
      </Container>
    </header>
  );
}

export default Header;

