import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OutsideClickHandler from '../OutSideClickHandle';

const cx = classNames.bind(styles);

function Dropdown({ name, dropDownItems: _dropDownItems = [], placeholder }) {
  const [tags, setTags] = useState([]);
  const [isShowSearchList, setIsShowSearchList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log(_dropDownItems);
    // Bạn có thể làm gì đó với _dropDownItems nếu cần thiết
  }, [_dropDownItems]);

  const removeTag = (name) => {
    setTags(tags.filter((tag) => tag.name !== name));
  };

  const addTag = (id, name, role) => {
    if (!tags.some((tag) => tag.name === name)) {
      setTags([...tags, { id, name, role }]);
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
              <input type='hidden' name={name+"[]"} value={tag.id} readOnly />
              {tag.name +" - "+ tag.role}
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
          placeholder={placeholder}
        />
        <ul className={cx('drop-menu', { 'fade-in': isShowSearchList })}>
          {_dropDownItems
            .filter(
              (item) =>
                item.full_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                !tags.map((tag) => tag.name).includes(item.full_name),
            )
            .map((item) => (
              <li key={item.id}>
                <span onClick={() => addTag(item.id, item.full_name, item.role_name)}>{item.full_name} - {item.role_name}</span>
              </li>
            ))}
        </ul>
      </div>
    </OutsideClickHandler>
  );
}

export default Dropdown;
