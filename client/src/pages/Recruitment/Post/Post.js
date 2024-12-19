import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import FormGroup from '~/components/FormGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Post() {
  // const =
  const [requires, setRequires] = useState([{title: "", content: ""}]);

  const handleAddRequire = () => {
    setRequires([...requires, { title:"", content: "" }]);
  };

  useEffect(()=>{
    
    console.log(requires)
    console.log("re render");
  }, [requires])

  const handleTrashRequire = (id) => {
    console.log(id)
    
    setRequires((prev)=>{
      const newPrev = prev.filter((_, index) => index !== id)
      return newPrev
    });
    
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>
        <div className={cx('left')}>
          <span className={cx('post-title')}>Đăng bài</span>
          <button>Quay lại</button>
        </div>
        <button>Lưu lại</button>
      </div>
      <div className={cx('content')}>
        <FormGroup lable="Tiêu đề" layout="haft" inputType="text" placeholder="Tiêu đề" />
        <FormGroup lable="Địa điểm" layout="haft" inputType="text" placeholder="Địa điểm" />
        <FormGroup lable="Số lượng" layout="haft" inputType="text" placeholder="Số lượng" />
        <FormGroup lable="Ngày hết hạn" layout="haft" inputType="date" placeholder="Ngày hết hạn" />
        <FormGroup lable="Email" layout="haft" inputType="email" placeholder="Email" />
        {/* <FormGroup lable="Yêu cầu 1" textarea inputType="text" placeholder="Yêu cầu" />
        <FormGroup lable="Yêu cầu 2" textarea inputType="text" placeholder="Yêu cầu" /> */}

        {requires.map((require, index) => (
          <div className={cx('group')} key={index}>
            <FormGroup lable={`Yêu cầu ${index + 1}`} requireId={index} requires={requires} setRequires={setRequires} textarea inputType="text" placeholder="Tên yêu cầu" />
            <FontAwesomeIcon
              className={cx('plus-icon')}
              icon={faTrashCan}
              onClick={() => handleTrashRequire(index)}
            />
          </div>
        ))}
      </div>
      <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} onClick={handleAddRequire} />
    </div>
  );
}

export default Post;
