import classNames from 'classnames/bind';
import styles from './InterviewListChoice.module.scss';
import ConfirmModal from '../ConfirmModal';
import { ModalOverLayContext } from '~/components/Context/ModalOverlayProvider';
import { useContext } from 'react';
import InterviewListChoice from './InterviewListChoice';

const cx = classNames.bind(styles);

function Item() {

    const { setModalComponentContent } = useContext(ModalOverLayContext);
    const handleConfirmSelect= ()=>{

    }
    const handleSubmit = () => {
        // Perform the delete action
        setModalComponentContent(
          <ConfirmModal
            title="Xác nhận thêm ứng viên vào buổi phỏng vấn"
            message="Ngày 22/22/2004 14:22"
            onConfirm={handleConfirmSelect}
            onCancel={() => setModalComponentContent(<InterviewListChoice/>)}
          />,
        );
      };

  return (
    <div className={cx('item')} onClick={handleSubmit}>
      <p className={cx('interview-datetime')}>
        <strong className={cx("strong")}>Thời gian:</strong> 30/01/2025 13:00
      </p>
      <p className={cx('interview-location')}>
        <strong className={cx("strong")}>Địa điểm:</strong> P103, Toà C5, Trường ĐH Công nghệ Thông tin và Truyền thông Thái Nguyên
      </p>
      <p className={cx('created-at')}>
        <strong className={cx("strong")}>Thời gian tạo:</strong> 2025-02-20 12:49:21
      </p>
    </div>
  );
}

export default Item;
