import classNames from 'classnames/bind';
import styles from '../HomeForm/HomeForm.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

<<<<<<< HEAD
function HomeFormField({
  title,
  name,
  type,
  selectObj,
  classArray,
  value,
  placeholder,
  errorMessage = '',
  onChange,
  onBlur = () => {},
}) {
=======
function HomeFormField({ title, name, type, selectObj, classArray, value, placeholder, onChange }) {
>>>>>>> 491052f5e134c5d31969c9a3ba1da07c64fe36f6
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
<<<<<<< HEAD
      <label for="input-file" id="file-name" className={cx('file')}>
        Chưa chọn tệp tin nào
      </label>
      <input id="input-file" type={type} name={name} accept="image/*, application/pdf" onChange={onChange} />
=======
      <span id="file-name" className={cx('file')}>
        Chưa chọn tệp tin nào
      </span>
      <input type={type} name={name} accept="image/*, application/pdf" onChange={onChange} />
>>>>>>> 491052f5e134c5d31969c9a3ba1da07c64fe36f6
    </>
  );

  const genInput = () => (
<<<<<<< HEAD
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder || null}
    />
=======
    <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder || null} />
>>>>>>> 491052f5e134c5d31969c9a3ba1da07c64fe36f6
  );

  return (
    <label className={cx('label-input', ...(classArray || []))}>
      <span>{title}</span>
      {opts.length > 0 ? genOptions(opts) : type === 'file' ? genFile() : genInput()}
<<<<<<< HEAD
      {errorMessage && <span className={cx('error')}>{errorMessage}</span>}
=======
>>>>>>> 491052f5e134c5d31969c9a3ba1da07c64fe36f6
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
