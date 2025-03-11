import React, { useContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Setting.module.scss';
import PageTitle from '~/components/PageTitle';
import { ThemeContext } from '~/components/Context/ThemeContext';

const cx = classNames.bind(styles);

function Setting() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={cx('wrapper', { theme })}>
      <PageTitle title="Cài dặt" />
      <div className={cx('setting-item')}>
        <h3 className={cx('setting-title')}>Chế độ hiển thị</h3>
        <label className={cx('switch')}>
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          <span className={cx('slider')}></span>
        </label>
        <span className={cx('setting-message')}>
          {theme === 'dark' ? 'Chế độ tối' : 'Chế độ sáng'}
        </span>
      </div>

      {/* Add other settings items here */}
    </div>
  );
}

export default Setting;
