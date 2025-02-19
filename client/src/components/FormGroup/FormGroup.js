import classNames from 'classnames/bind';
import styles from './FormGroup.module.scss';
import Input from '../Input';
import { useEffect, useState } from 'react';
import Select from '../Input/Select';
import OutsideClickHandler from '../OutSideClickHandle';
import Textarea from '../Input/Textarea';
import DateTimePicker from '../Input/DateTimePicker';

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
    setInputValue(value);
  }, [value]);

  let InputTag = Input;
  if (inputType === 'datetime') InputTag = DateTimePicker;
  else if (textarea) {
    InputTag = 'textarea';
  } else if (selectData.length > 0) {
    InputTag = Select;
  }

  const handleError = () => {
    for (let obj of handleValidate) {
      if (obj.funct(inputValue)) {
        setError('');
      } else {
        setError(obj.message);
        break;
      }
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value || '';
    setInputValue(newValue);
    onChange?.(e);

    for (let obj of handleValidate) {
      if (obj.funct(inputValue)) {
        setError('');
      }
      break;
    }
  };
  
  const handleDateTimePickerChange = (date) => {
    const newValue = date || '';
    setInputValue(newValue);
    // onChange?.(e);

    for (let obj of handleValidate) {
      if (obj.funct(inputValue)) {
        setError('');
      }
      break;
    }
  };

  return (
    <div className={cx('wrapper', layout)}>
      <OutsideClickHandler className={cx("group")} onClickOutside={() => handleError(inputValue)}>
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

        {InputTag === DateTimePicker && (
          <DateTimePicker name={name} onChange={handleDateTimePickerChange}/>
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

        {InputTag === Select && (
          <Select value={inputValue} options={selectData} name={name} error={error} onChange={handleInputChange} />
        )}

        {error && <p className={cx('error-message')}>{error}</p>}
      </OutsideClickHandler>
    </div>
  );
}

export default FormGroup;
