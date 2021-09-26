import { Link } from 'react-router-dom';

import condition from '../../assets/images/sidebar-icons/condition.svg';
import location from '../../assets/images/sidebar-icons/location.svg';
import devices from '../../assets/images/sidebar-icons/devices.svg';
import speech from '../../assets/images/sidebar-icons/speech.svg';
import service from '../../assets/images/sidebar-icons/service.svg';
import subscriptions from '../../assets/images/sidebar-icons/subscriptions.svg';
import users from '../../assets/images/sidebar-icons/users.svg';
import statistic from '../../assets/images/sidebar-icons/statistic.svg';
import calendar from '../../assets/images/sidebar-icons/calendar.svg';
import book from '../../assets/images/sidebar-icons/book.svg';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <nav className='sidebar__menu'>
        <ul className='sidebar__menu-list'>
          <li className='sidebar__menu-item'>
            <Link className='sidebar__menu-link' to='/dashboard'>
              <img
                className='sidebar__menu-icon'
                src={condition}
                width={16}
                height={16}
                alt=''
              />
              <span className='sidebar__menu-name'>Состояние</span>
            </Link>
          </li>
          <li className='sidebar__menu-item'>
            <Link className='sidebar__menu-link' to='/objreg'>
              <img
                className='sidebar__menu-icon'
                src={location}
                width={16}
                height={16}
                alt=''
              />
              <span className='sidebar__menu-name'>Добавление устройства</span>
            </Link>
          </li>
          <li className='sidebar__menu-item'>
            <Link className='sidebar__menu-link' to='/objects'>
              <img
                className='sidebar__menu-icon'
                src={devices}
                width={16}
                height={16}
                alt=''
              />
              <span className='sidebar__menu-name'> Устройства</span>
            </Link>
          </li>
          <li className='sidebar__menu-item'>
            <Link className='sidebar__menu-link' to='/notifications'>
              <img
                className='sidebar__menu-icon'
                src={speech}
                width={16}
                height={16}
                alt=''
              />
              <span className='sidebar__menu-name'> Уведомления</span>
            </Link>
          </li>
          <li className='sidebar__menu-item'>
            <Link className='sidebar__menu-link' to='/service'>
              <img
                className='sidebar__menu-icon'
                src={service}
                width={16}
                height={16}
                alt=''
              />
              <span className='sidebar__menu-name'> Сервис</span>
            </Link>
          </li>
          <li className='sidebar__menu-item'>
            <Link className='sidebar__menu-link' to='/subs'>
              <img
                className='sidebar__menu-icon'
                src={subscriptions}
                width={16}
                height={16}
                alt=''
              />
              <span className='sidebar__menu-name'> Подписки</span>
            </Link>
          </li>
          <li className='sidebar__menu-item'>
            <Link className='sidebar__menu-link' to='/users'>
              <img
                className='sidebar__menu-icon'
                src={users}
                width={16}
                height={16}
                alt=''
              />
              <span className='sidebar__menu-name'> Пользователи</span>
            </Link>
          </li>
          <li className='sidebar__menu-item'>
            <Link className='sidebar__menu-link' to='/stats'>
              <img
                className='sidebar__menu-icon'
                src={statistic}
                width={16}
                height={16}
                alt=''
              />
              <span className='sidebar__menu-name'> Статистика</span>
            </Link>
          </li>
          <li className='sidebar__menu-title'>
            <span>Геймификация</span>
          </li>
          <li className='sidebar__menu-item'>
            <Link className='sidebar__menu-link' to='/dailytasks'>
              <img
                className='sidebar__menu-icon'
                src={calendar}
                width={16}
                height={16}
                alt=''
              />
              <span className='sidebar__menu-name'> Ежедневные задачи</span>
            </Link>
          </li>
          <li className='sidebar__menu-item'>
            <Link className='sidebar__menu-link' to='/uniqtasks'>
              <img
                className='sidebar__menu-icon'
                src={book}
                width={16}
                height={16}
                alt=''
              />
              <span className='sidebar__menu-name'> Уникальные задачи</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
