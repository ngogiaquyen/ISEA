import classNames from 'classnames/bind';

import styles from './AdminLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import BoardSection from '../components/BoardSection';
import { useContext, useState } from 'react';
import { ActiveBoardContext } from '~/components/Context/ActiveBoardProvider';
import Loading from '~/components/Loading';

const cx = classNames.bind(styles);



function AdminLayout({ children }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const { isCollapsedBoard, setIsCollapsedBoard } = useContext(ActiveBoardContext);

  const handleSelectCategory = (id) => {
    setSelectedCategoryId(id); 
    setIsCollapsedBoard(false);
  };
  return (
    <div className={cx('wrapper')}>
      <Loading/>
      <Sidebar onSelectCategory={handleSelectCategory} />
      <div className={cx('container')}>
        <Header />
        <div className={cx('inner',  {collapse: isCollapsedBoard})}>
          <BoardSection selectedCategoryId={selectedCategoryId}/>
          <div className={cx('child')}>
            {children}
          </div>
          </div>
      </div>
    </div>
  );
}

export default AdminLayout;
