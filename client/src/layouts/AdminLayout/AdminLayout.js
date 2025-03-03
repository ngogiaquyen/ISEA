import classNames from 'classnames/bind';

import styles from './AdminLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import BoardSection from '../components/BoardSection';
import { useContext, useState } from 'react';
import { ActiveBoardContext } from '~/components/Context/ActiveBoardProvider';
import Loading from '~/components/Loading';
import ToastList from '~/components/ToastList';
import ModalOverLay from '../components/ModalOverLay';
import { MenuSelectIdContext } from '~/components/Context/MenuSelectIdProvider';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
  // const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const { menuSelectId, handleChangeMenuSelectId } = useContext(MenuSelectIdContext)
  const { isCollapsedBoard, toggleBroard } = useContext(ActiveBoardContext);

  const handleSelectCategory = (id) => {
    handleChangeMenuSelectId({sidebar: id, board: 1});
    toggleBroard(false);
  };
  return (
    <div className={cx('wrapper')}>
      <Loading />
      <Sidebar onSelectCategory={handleSelectCategory} />
      <div className={cx('container')}>
        <Header />
        <div className={cx('inner', { collapse: isCollapsedBoard })}>
          <BoardSection/>
          <div className={cx('child')}>{children}</div>
        </div>
      </div>

      <ToastList />
      <ModalOverLay/>
    </div>
  );
}

export default AdminLayout;
