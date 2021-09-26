import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar';
import './Condition.scss';

const Condition = () => {
  return (
    <>
      <Header />
      <div class='condition'>
        <Sidebar />
        <div class='condition__content'>
          <h3 class='page-title'>
            Состояние <small>сводка актуальных данных</small>
          </h3>
          <div class='condition__items'>
            <div class='condition__item'>
              <div class='condition__item-header'>
                <div class='condition__item-numbers'>
                  8799 <small> из 13096</small>
                </div>
                <div class='condition__item-descr'>Активировано устройств</div>
              </div>
              <div class='condition__item-footer'>
                <Link class='condition__item-details' to='/objects'>
                  <span>Подробнее</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='#fff'
                    class='bi bi-arrow-right-circle-fill'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Condition;
