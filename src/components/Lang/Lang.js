import langEn from '../../assets/images/lang-en.svg';
import langRu from '../../assets/images/lang-ru.svg';

import './Lang.scss';

const Lang = () => {
  return (
    <div className='lang'>
      <img
        className='lang__en'
        src={langEn}
        alt='language'
        width={29}
        height={29}
      />
      <img
        className='lang__ru'
        src={langRu}
        alt='language'
        width={29}
        height={29}
      />
    </div>
  );
};

export default Lang;
