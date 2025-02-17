import { useState } from 'react';
import HomeFormField from '../HomeFormField/HomeFormField';

function HomeFormFieldBirthday() {
  const [birthday, setBirthday] = useState('1990-01-01');

  const handleChangeBirthday = (e) => {
    setBirthday(e.target.value);
  };

  return (
    <HomeFormField
      title={'Sinh nhật'}
      name={'birthday'}
      type={'date'}
      classArray={['half']}
      value={birthday}
      onChange={handleChangeBirthday}
    />
  );
}

export default HomeFormFieldBirthday;
