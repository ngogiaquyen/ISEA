import classNames from 'classnames/bind';
import styles from './Input.module.scss';
const cx = classNames.bind(styles);

function Select({value, options = [], name, error, onChange }) {
  console.log("select value:" + value)
  return (
    <div className={cx('wrapper')}>
      <select value={value} className={cx("select", { error })} onChange={onChange} name={name}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
