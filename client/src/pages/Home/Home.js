import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HomePost from '~/components/HomePost/HomePost';
import { useEffect, useRef, useState } from 'react';
import HeaderUser from '~/layouts/components/HeaderUser/HeaderUser';
import HomePostShow from '~/components/HomePostShow/HomePostShow';
import HomeForm from '~/components/HomeForm/HomeForm';
import HomeFormField from '~/components/HomeFormField/HomeFormField';
import HomeFormFieldBirthday from '~/components/HomeFormFieldBirthday/HomeFormFieldBirthday';
import HomeToast from '~/components/HomeToast/HomeToast';
import icon from '../../assets/images/load.webp';

const cx = classNames.bind(styles);
const header = {
  home: 1,
  about: 0,
};

function Home() {
  const [homePostItems, setHomePostItems] = useState([]);
  const [post, setPost] = useState({});
  const [selectPostId, setSelectPostId] = useState(null);
  const [form, setForm] = useState(null);
  const [toast, setToast] = useState(null);
  const [content, setContent] = useState('Xác nhận');
  const [disable, setDisable] = useState(null);
  const isFirst = useRef(0);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost/isea/server/post/read', {
        method: 'GET',
        credentials: 'include',
      });

      const data = await response.json();
      console.log(data);
      setHomePostItems(data);
      if (data[0]) setPost(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const checkOj = (obj) => {
    return Object.entries(obj).length > 0;
  };

  const showToast = (obj) => {
    if (obj && typeof obj === 'object') {
      setTimeout(() => {
        setToast(<HomeToast obj={obj} onClick={setToast} />);
      }, 4);
    }
  };

  const handleChangeFile = (e) => {
    const fileName = e.target.files[0] ? e.target.files[0].name : 'Chưa chọn tệp tin nào';
    document.getElementById('file-name').innerText = fileName;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setToast(null);
    setContent(<img className={cx('icon')} src={icon} alt="loading" />);
    setDisable(true);

    const form = document.getElementById('form-data');
    const formData = new FormData(form);
    formData.append('post_id', post.id);

    try {
      const response = await fetch('http://localhost/isea/server/applicant/register', {
        method: 'POST',
        credentials: 'include',
        body: formData,
      });

      const data = await response.json();
      setContent('Xác Nhận');
      setDisable(false);
      showToast(data);
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  const showForm = () => {
    setForm(
      <HomeForm
        title={'Thông tin ứng tuyển'}
        btnContent={content}
        isDisable={disable}
        setForm={setForm}
        handleSubmit={handleSubmit}
      >
        <HomeFormField
          title={'Họ và tên'}
          name={'full_name'}
          type={'text'}
          placeholder={'Nguyen Van A'}
          onChange={null}
        />
        <HomeFormField
          title={'Email'}
          name={'email'}
          type={'email'}
          placeholder={'nguyenvana@gmail.com'}
          onChange={null}
        />
        <HomeFormField
          title={'Số điện thoại'}
          name={'phone_number'}
          type={'number'}
          placeholder={'0321 456 789'}
          onChange={null}
        />
        <HomeFormField
          title={'Giới tính'}
          name={'gender'}
          selectObj={{ Male: 'Nam', Female: 'Nữ', Other: 'Khác' }}
          classArray={['half', 'indent']}
          onChange={null}
        />
        <HomeFormFieldBirthday />
        <HomeFormField
          title={'Hồ sơ CV'}
          name={'cv'}
          type={'file'}
          selectObj={{}}
          classArray={[]}
          onChange={handleChangeFile}
        />
      </HomeForm>,
    );
    // console.log(post);
  };

  useEffect(() => {
    if (isFirst.current < 1) {
      isFirst.current += 1;
      fetchData();
    }
  }, [homePostItems]);

  useEffect(() => {
    if (disable !== null) {
      showForm();
    }
  }, [disable]);

  return (
    <>
      {toast}
      <HeaderUser state={header} />
      {form}
      <div className={cx('wrapper')}>
        <div className={cx('left')}>
          <HomePost
            postArr={homePostItems}
            onPostSelect={setPost}
            selectPostId={selectPostId}
            setSelectPostId={setSelectPostId}
          />
        </div>
        <div className={cx('right')}>{checkOj(post) ? <HomePostShow onApply={showForm} post={post} /> : null}</div>
      </div>
    </>
  );
}

export default Home;
