import { useState } from 'react';
import Error from '~/components/Error';
import Input from '~/components/Input';
import OutsideClickHandler from '~/components/OutSideClickHandle';

function FormGroup({
  value,
  setValue,
  placeholder,
  isValidHandle = () => {},
  emptyErrorValue = '',
  wrongErrorValue = '',
}) {
  const [errorMessage, setErrorMessage] = useState('');

  const handleClickOutside = () => {
    if (!value) setErrorMessage(emptyErrorValue);
    else if (!isValidHandle(value)) {
      setErrorMessage(wrongErrorValue);
      console.log(value);
    }
    else setErrorMessage('');
  };

  return (
    <Error errorMessage={errorMessage}>
      <OutsideClickHandler onClickOutside={handleClickOutside}>
        <Input password showEye value={value} setValue={setValue} placeholder={placeholder} setErrorMessage={setErrorMessage} />
      </OutsideClickHandler>
    </Error>
  );
}

export default FormGroup;
