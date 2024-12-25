import classNames from 'classnames/bind';
import styles from './Post.module.scss';
import FormGroup from '~/components/FormGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import usePostApi from '~/hooks/usePostApi';

const cx = classNames.bind(styles);

function Post() {
  // const =
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [email, setEmail] = useState('');

  const [requires, setRequires] = useState([{ title: '', content: '' }]);
  const { post } = usePostApi("http://localhost:8000/");

  const handleAddRequire = () => {
    setRequires([...requires, { title: '', content: '' }]);
  };

  const handleTrashRequire = (id) => {
    setRequires((prev) => {
      const newPrev = prev.filter((_, index) => index !== id);
      return newPrev;
    });
  };

  const handleSave = async (e) => {
    const data = {
      title: title,
      location: location,
      quantity: quantity,
      expiration_date: expirationDate,
      email: email,
      requires: requires,
    };
    console.log(data)
    const result = await post(data);
    console.log("API response:", result);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('head')}>
        <div className={cx('left')}>
          <span className={cx('post-title')}>Đăng bài</span>
          <button>Quay lại</button>
        </div>
        <button onClick={handleSave}>Lưu lại</button>
      </div>
      <div className={cx('content')}>
        <FormGroup
          lable="Tiêu đề"
          layout="haft"
          inputType="text"
          placeholder="Tiêu đề"
          onChange={(e) => {setTitle(e.target.value); console.log("hello")}}
        />
        <FormGroup
          lable="Địa điểm"
          layout="haft"
          inputType="text"
          placeholder="Địa điểm"
          onChange={(e) => setLocation(e.target.value)}
        />
        <FormGroup
          lable="Số lượng"
          layout="haft"
          inputType="text"
          placeholder="Số lượng"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <FormGroup
          lable="Ngày hết hạn"
          layout="haft"
          inputType="date"
          placeholder="Ngày hết hạn"
          onChange={(e) => setExpirationDate(e.target.value)}
        />
        <FormGroup
          lable="Email"
          layout="haft"
          inputType="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {requires.map((require, index) => (
          <div className={cx('group')} key={index}>
            <FormGroup
              lable={`Yêu cầu ${index + 1}`}
              requireId={index}
              requires={requires}
              setRequires={setRequires}
              textarea
              inputType="text"
              placeholder="Tên yêu cầu"
            />
            <FontAwesomeIcon className={cx('plus-icon')} icon={faTrashCan} onClick={() => handleTrashRequire(index)} />
          </div>
        ))}
      </div>
      <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} onClick={handleAddRequire} />
    </div>
  );
}

export default Post;
