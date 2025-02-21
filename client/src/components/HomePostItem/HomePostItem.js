import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HomePostItem.module.scss';

const cx = classNames.bind(styles);

export function cleanString(str) {
  return str.replace(/[*+-]/g, '');
}

function generateShortDesc(desc) {
  if (!desc) return;
  const lines = desc.trim().split('\n');
  let elems = [];
  let liElems = [];
  let count = 0;
  let foundAsterisk = false;

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index].trim();
    if (foundAsterisk) {
      if (count >= 3) break;
      if (line !== '' && !line.includes('*')) {
        liElems.push(
          <li key={`li-${count}`}>
            <span className={cx('desc')}>{cleanString(line)}</span>
          </li>,
        );
        count++;
      }
    } else if (line.includes('*')) {
      foundAsterisk = true;
    }
  }
  if (liElems.length > 0) {
    elems.push(
      <ul className={cx('short-desc')} key={`ul`}>
        {liElems}
      </ul>,
    );
  }
  return elems;
}

const handleMenu = (e) => {
  e.preventDefault();
};

function HomePostItem({ infoObj, onPostSelect, isInit, isSelected }) {
  return (
    <li
      className={cx('post-item', { init: isInit }, { selected: isSelected })}
      onClick={() => {
        onPostSelect(infoObj);
      }}
    >
      <div className={cx('post-title')}>
        <p>{infoObj.title}</p>
        <div className={cx('btn-wrapper')}>
          <button className={cx('btn-save-post')} onClick={handleMenu}>
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>
      </div>
      <p className={cx('post-from-company')}>
        Công Ty Đào tạo và Phát triển Nhân lực ISEA Việt Nam
        <br />
        Thành phố Thái Nguyên
      </p>
      <div className={cx('post-info')}>
        <div className={cx('job-info')}>
          <span className={cx('salary', 'tag')}>{infoObj.salary}</span>
          <span className={cx('location', 'tag')}>{infoObj.location}</span>
          {/* <span className={cx('exp', 'tag')}>{infoObj.experience}</span> */}
        </div>
        <div className={cx('job-expiration-date')}>
          <div>{/* <span>{infoObj.expiration_date}</span> */}</div>
        </div>
        {generateShortDesc(infoObj.content)}
      </div>
    </li>
  );
}
HomePostItem.propTypes = {
  infoObj: PropTypes.object.isRequired,
  onPostSelect: PropTypes.func.isRequired,
};
export default HomePostItem;
