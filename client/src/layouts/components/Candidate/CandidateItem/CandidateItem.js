import classNames from 'classnames/bind';
import styles from "./CandidateItem.module.scss";
import { useContext, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faEye } from '@fortawesome/free-regular-svg-icons';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';
import EmployeeInfo from '~/pages/EmployeeInfo';

const cx = classNames.bind(styles);
// Họ và tên
// Ngày sinh
// Giới tính
// Số điện thoại
// Email
// Xem CV
// Ngày ứng tuyển
// Trạng thái ứng tuyển (Đang xét duyệt, Đã duyệt, Từ chối)

function CandidateItem({ id, activeMenu, setActiveMenu }) {
  const wrapperRef = useRef(null);
  const menuRef = useRef(null);
  
  const [menu, setMenu] = useState({
    left: 0,
    top: 0,
  });

  const { setModalComponentContent} = useContext(ModalOverLayContext);

  
  const handleItemClick = (e, data) => {
    console.log('hello');
  };
  
  const handleContextMenu = (e) => {
    e.preventDefault();
    console.log(menu)
    const left = Math.min(e.nativeEvent.offsetX, e.currentTarget.offsetWidth - 200);
    const top = e.nativeEvent.offsetY
    setMenu({
      left,
      top,
    });
  
    setActiveMenu(id);
  };

  const handleSeeInfor = ()=>{
    setModalComponentContent(<EmployeeInfo/>)
  }

  useEffect(() => {
      function handleClickOutside(event) {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
              setActiveMenu(null);
          }
      }

      // Lắng nghe sự kiện click toàn bộ trang
      document.addEventListener("click", handleClickOutside);

      return () => {
          // Cleanup sự kiện khi component unmount
          document.removeEventListener("click", handleClickOutside);
      };
  }, []);

  return (
    <div className={cx('candidate-item')} ref={wrapperRef} onContextMenu={handleContextMenu} onDoubleClick={handleSeeInfor}>
      <div className={cx('candidate-content')}>
        <input type="checkbox" className={cx('checkbox')} />
        <div className={cx('info')}>
          <span className={cx('name')}>Họ và tên: Nguyễn Văn A</span>
          <span className={cx('phone')}>SDT: 0999888777</span>
          <span className={cx('email')}>Email: lst112233@gmail.com</span>
          <span className={cx('date')}>Ngày ứng tuyển: 12/02/2022</span>
        </div>
        <div className={cx('status-container')}>
          <span className={cx('status')}>Chờ duyệt</span>
        </div>
      </div>
      {activeMenu === id && (
        <div className={cx('menu-list')} ref={menuRef} style={{ left: menu.left, top: menu.top }}>
          <div className={cx('menu-item', "item-title")} onClick={handleItemClick}>
            Nguyễn Văn A
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
