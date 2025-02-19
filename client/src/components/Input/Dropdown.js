import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OutsideClickHandler from '../OutSideClickHandle';
const cx = classNames.bind(styles);

function Dropdown({ dropDownItems: _dropDownItems = [] }) {
  const [tags, setTags] = useState([
    // { id: 1, name: 'Ngô Gia Quyến - KTPM K23A' },
    // { id: 2, name: 'Lưu Sỹ Trường - KTPM K23A' },
  ]);

  const [isShowSearchList, setIsShowSearchList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [dropDownItems, setDropDownItems] = useState([]);
  // [
  // 'Ngô Gia Quyến - KTPM K23A',
  // 'Nguyễn Văn Quyến2 - KTPM K23A',
  // 'Lê Văn Quyến3 - KTPM K23A',
  // 'Triệu Gia Quyến4 - KTPM K23A',
  // 'Lương Gia Quyến5 - KTPM K23A',
  // 'Ngô Gia Quyến6 - KTPM K23A',
  // ]

  useEffect(() => {
    setDropDownItems(_dropDownItems);
  }, [_dropDownItems]);

  const removeTag = (name) => {
    setTags(tags.filter((tag) => tag.name !== name));
  };
  const addTag = (name) => {
    if (!tags.some((tag) => tag.name === name)) {
      setTags([...tags, { id: tags.length + 1, name }]);
      setSearchTerm('');
    }
  };

  const handleBlur = () => {
    setIsShowSearchList(false);
  };
  const handleMouseDown = () => {
    setIsShowSearchList((prev) => !prev);
  };
  return (
    <OutsideClickHandler onClickOutside={handleBlur}>
      <div className={cx('dropdown', 'wrapper')}>
        <div className={cx('dropdown-toggle')}>
          {tags.map((tag) => (
            <span className={cx('selected-tag')} key={tag.id}>
              {tag.name}
              <button type="button" className={cx('close-btn')} onClick={() => removeTag(tag.name)}>
                <FontAwesomeIcon className={cx('x-icon')} icon={faXmark} />
              </button>
            </span>
          ))}
        </div>
        <input
          type="search"
          value={searchTerm}
          className={cx('input')}
          onChange={(e) => setSearchTerm(e.target.value)}
          onMouseDown={handleMouseDown}
        />
        {/* <button type="button" className={cx('clear-btn')}>
        <FontAwesomeIcon className={cx('x-icon')} icon={faXmark} />
      </button> */}
        {/* <div className={cx('spinner')}>Loading...</div> */}
        {/* {isShowSearchList && ( */}
        <ul className={cx('drop-menu', { 'fade-in': isShowSearchList })}>
          {dropDownItems
            .filter(
              (item) =>
                item.toLowerCase().includes(searchTerm.toLowerCase()) && !tags.map((tag) => tag.name).includes(item),
            )
            .map((item, index) => (
              <li key={index}>
                <span onClick={() => addTag(item)}>{item}</span>
              </li>
            ))}
        </ul>
        {/* )} */}
      </div>
    </OutsideClickHandler>
  );
}

export default Dropdown;
