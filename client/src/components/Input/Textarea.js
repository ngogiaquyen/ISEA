import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from "./Input.module.scss";

const cx = classNames.bind(styles);

function Textarea({ value="", name, placeholder, error, onChange = () => {} }) {

  return (
    <textarea
      className={cx('textarea', {error})}
      value={value}
      name={name}
      placeholder={placeholder}
      error={error}
      onChange={onChange}
    />
  );
}

export default Textarea;
