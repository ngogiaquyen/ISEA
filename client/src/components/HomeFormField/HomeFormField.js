import classNames from 'classnames/bind';
import styles from '../HomeForm/HomeForm.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function HomeFormField({ title, name, type, selectObj, classArray, value, placeholder, onChange }) {
  const opts = Object.entries(selectObj || {});

  const genOptions = (obj) => (
    <select name={name} value={value}>
      {obj.map(([value, content]) => (
        <option key={value} value={value}>
          {content}
        </option>
      ))}
    </select>
  );

  const genFile = () => (
    <>
      <span id="file-name" className={cx('file')}>
        Chưa chọn tệp tin nào
      </span>
      <input type={type} name={name} accept="image/*, application/pdf" onChange={onChange} />
    </>
  );

  const genInput = () => (
    <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder || null} />
  );

  return (
    <label className={cx('label-input', ...(classArray || []))}>
      <span>{title}</span>
      {opts.length > 0 ? genOptions(opts) : type === 'file' ? genFile() : genInput()}
    </label>
  );
}

HomeFormField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  selectObj: PropTypes.object,
  classArray: PropTypes.array,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default HomeFormField;
