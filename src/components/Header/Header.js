import { Link } from 'react-router-dom';

import userIcon from '../../assets/images/user-icon.svg';
import logoutIcon from '../../assets/images/logout-icon.svg';
import keyIcon from '../../assets/images/key.svg';
import arrowDown from '../../assets/images/arrow-down.svg';
import Lang from '../Lang/Lang';

import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo' to='/'>
        Sirius <span>Сервер</span>
      </Link>
      <div className='header__right'>
        <Lang />
        <div className='profile'>
          <img
            className='profile__icon'
            src={userIcon}
            width={29}
            height={29}
            alt='profile icon'
          />
          <div className='profile__email'>admin@gps-watch.kz</div>
          <img
            className='profile__arrow-down'
            src={arrowDown}
            width={8}
            height={13}
            alt='profile icon'
          />
          <Link to='/login'>
            <div className='profile__dropdown'>
              <img
                className='profile__dropdown-icon'
                src={keyIcon}
                width={15}
                height={14}
                alt='key icon'
              />
              <span className='profile__dropdown-title'>Выход</span>
            </div>
          </Link>
        </div>
        <Link to='/' className='logout' title='Выход'>
          <img
            className='logout__icon'
            src={logoutIcon}
            width={20}
            height={20}
            alt='logout icon'
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
