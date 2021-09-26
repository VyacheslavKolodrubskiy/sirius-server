import './Button.scss';

const Button = ({ children, blue, hover }) => {
  let clazz = 'btn';
  if (blue) {
    clazz += ' blue';
  }
  if (hover) {
    clazz += ' hover';
  }
  return <button className={clazz}>{children}</button>;
};

export default Button;
