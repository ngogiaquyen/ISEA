import classNames from 'classnames/bind';
import styles from './CandidateItem.module.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faEye } from '@fortawesome/free-regular-svg-icons';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';
import EmployeeInfo from '~/pages/EmployeeInfo';
import { CreateCandidateInforContext } from '~/components/Context/CreateCandidateInforProvider';

const cx = classNames.bind(styles);

function CandidateItem({ id, data, activeMenu, setActiveMenu, type }) {
  console.log(type)
  const wrapperRef = useRef(null);
  const menuRef = useRef(null);
  const { setApplicantID } = useContext(CreateCandidateInforContext);

  const [menu, setMenu] = useState({
    left: 0,
    top: 0,
  });

  const { setModalComponentContent } = useContext(ModalOverLayContext);

  const handleItemClick = (e, data) => {};

  const handleContextMenu = (e) => {
    e.preventDefault();
    const left = Math.min(e.nativeEvent.offsetX, e.currentTarget.offsetWidth - 200);
    const top = e.nativeEvent.offsetY;
    setMenu({
      left,
      top,
    });

    setActiveMenu(id);
  };

  const handleSeeInfor = () => {
    setModalComponentContent(<EmployeeInfo employee={data} type={type} />);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    }

    // Lắng nghe sự kiện click toàn bộ trang
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Cleanup sự kiện khi component unmount
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const handleCheck = (e) => {
    const isChecked = e.target.checked;
    setApplicantID((prev) => (isChecked ? [...prev, id] : prev.filter((item) => item !== id)));
  };

  return (
    <div
      className={cx('candidate-item')}
      ref={wrapperRef}
      // onContextMenu={handleContextMenu}
      onDoubleClick={handleSeeInfor}
    >
      <label className={cx('candidate-content')}>
        {type === 'post' && <input type="checkbox" className={cx('checkbox')} onChange={handleCheck} />}
        <div className={cx('info')}>
          <span className={cx('name')}>Họ và tên: {data.full_name}</span>
          <span className={cx('phone')}>SDT: {data.phone_number}</span>
          <span className={cx('email')}>Email: {data.email}</span>
          <span className={cx('date')}>Ngày ứng tuyển: {data.create_at}</span>
        </div>
      </label>
      {activeMenu === id && (
        <div className={cx('menu-list')} ref={menuRef} style={{ left: menu.left, top: menu.top }}>
          <div className={cx('menu-item', 'item-title')} onClick={handleItemClick}>
            {data.full_name}
          </div>
          <div className={cx('menu-item')} onClick={handleSeeInfor}>
            <FontAwesomeIcon className={cx('icon')} icon={faEye} />
            <p>Xem thông tin</p>
          </div>
          <div className={cx('menu-item')} onClick={handleItemClick}>
            <FontAwesomeIcon className={cx('icon')} icon={faPenToSquare} />
            <p>Sửa thông tin</p>
          </div>
          <div className={cx('menu-item')} onClick={handleItemClick}>
            <FontAwesomeIcon className={cx('icon')} icon={faCalendar} />
            <p>Lên lịch phỏng vấn</p>
          </div>
          <div className={cx('menu-item')} onClick={handleItemClick}>
            <FontAwesomeIcon className={cx('icon')} icon={faTrash} />
            <p>Xóa ứng viên</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CandidateItem;
