import classNames from 'classnames/bind';
import styles from './Input.module.scss';
const cx = classNames.bind(styles);

function Select({ options = [], onChange }) {
  return (
    <div className={cx('wrapper')}>
      <select onChange={onChange}>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
