import classNames from 'classnames/bind';
import styles from './FormGroup.module.scss';

const cx = classNames.bind(styles);

function FormGroup({ lable, placeholder, inputType, textarea }) {
  let Input = 'input';

  return (
    <div className={cx('wrapper')}>
      <label>{lable}</label>
      <Input placeholder={placeholder} type={inputType}></Input>
      {textarea && <textarea/>}
    </div>
  );
}

export default FormGroup;
