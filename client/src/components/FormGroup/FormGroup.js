import classNames from 'classnames/bind';
import styles from './FormGroup.module.scss';
import Input from '../Input';
import { useEffect, useState } from 'react';
import Select from '../Input/Select';

const cx = classNames.bind(styles);

function FormGroup({
  label,
  name,
  requireId,
  requires,
  placeholder,
  inputType,
  textarea,
  selectData = [],
  layout,
  error,
  onChange,
}) {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (requireId >= 0) {
      setInputValue(requires[requireId]?.title || '');
    }
  }, [requireId, requires]);

  let InputTag = Input; // Mặc định là Input
  if (textarea) {
    InputTag = 'textarea';
  } else if (selectData.length > 0) {
    InputTag = Select;
  }

  return (
    <div className={cx('wrapper', layout)}>
      <label className={cx('title')}>{label}</label>

      {InputTag === Input && (
        <Input
          value={inputValue}
          name={name}
          date={inputType === 'date'}
          index={requireId}
          setValue={setInputValue}
          type={inputType}
          placeholder={placeholder}
          error={error}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange?.(e);
          }}
        />
      )}

      {InputTag === 'textarea' && (
        <textarea
          className={cx('textarea')}
          value={inputValue}
          name={name}
          placeholder={placeholder}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange?.(e);
          }}
        />
      )}

      {InputTag === Select && (
        <Select options={selectData} name={name} onChange={onChange} />
      )}

      {error && <p className={cx('error-message')}>{error}</p>}
    </div>
  );
}

export default FormGroup;
