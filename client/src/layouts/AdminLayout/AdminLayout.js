import classNames from 'classnames/bind';

import styles from './AdminLayout.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import BoardSection from '../components/BoardSection';
import { useState } from 'react';

const cx = classNames.bind(styles);



function AdminLayout({ children }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const handleSelectCategory = (id) => {
    console.log("update: ", id)
    setSelectedCategoryId(id); 
  };
  return (
    <div className={cx('wrapper')}>
      <Sidebar onSelectCategory={handleSelectCategory} />
      <div className={cx('container')}>
        <Header />
        <div className={cx('inner')}>
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
