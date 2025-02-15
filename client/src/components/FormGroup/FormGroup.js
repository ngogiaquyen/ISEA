import classNames from 'classnames/bind';
import styles from './FormGroup.module.scss';
import Input from '../Input';
import { useEffect, useState } from 'react';
import Select from '../Input/Select';
import OutsideClickHandler from '../OutSideClickHandle';
import Textarea from '../Input/Textarea';

const cx = classNames.bind(styles);

function FormGroup({
  value = '',
  label = '',
  name = '',
  placeholder = '',
  inputType,
  textarea,
  selectData = [],
  layout,
  onChange,
  handleValidate = [],
}) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    console.log(value)
    setInputValue(value);
  }, [value]);
  let InputTag = Input;
  if (textarea) {
    InputTag = 'textarea';
  } else if (selectData.length > 0) {
    InputTag = Select;
  }

  const handleError = (value = '') => {
    for (let obj of handleValidate) {
      if (obj.funct(inputValue)) {
        setError('');
      } else {
        setError(obj.message);
        console.log(obj.message);
        break;
      }
      console.log('ehllo');
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value || '';
    console.log(newValue)
    setInputValue(newValue);
    onChange?.(e);

    for (let obj of handleValidate) {
      if (obj.funct(inputValue)) {
        setError('');
      }
      break;
    }
  };

  return (
    <div className={cx('wrapper', layout)}>
      <OutsideClickHandler onClickOutside={() => handleError(inputValue)}>
        <label className={cx('title')}>{label}</label>

        {InputTag === Input && (
          <Input
            value={inputValue}
            name={name}
            date={inputType === 'date'}
            setValue={setInputValue}
            type={inputType}
            placeholder={placeholder}
            error={error}
            onChange={handleInputChange}
          />
        )}

        {InputTag === 'textarea' && (
          <Textarea
            className={cx('textarea')}
            value={inputValue}
            name={name}
            placeholder={placeholder}
            error={error}
            onChange={handleInputChange}
          />
        )}

        {InputTag === Select && <Select value={inputValue} options={selectData} name={name} error={error} onChange={handleInputChange} />}

        {error && <p className={cx('error-message')}>{error}</p>}
      </OutsideClickHandler>
    </div>
  );
}

export default FormGroup;
