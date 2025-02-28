import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OutsideClickHandler from '../OutSideClickHandle';

const cx = classNames.bind(styles);

function Dropdown({ name, tags: _tags = [], dropDownItems: _dropDownItems = [], placeholder }) {
  const [tags, setTags] = useState([]);
  const [isShowSearchList, setIsShowSearchList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTags(_tags)
  }, [_dropDownItems, _tags]);

  const removeTag = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };

  const addTag = (id, full_name, role_name) => {
    if (!tags.some((tag) => tag.id === id )) {
      setTags([...tags, { id, full_name, role_name }]);
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
              {tag.full_name +" - "+ tag.role_name}
              <button type="button" className={cx('close-btn')} onClick={() => removeTag(tag.id)}>
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
