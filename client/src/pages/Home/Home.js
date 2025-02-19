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
  const [btnContent, setBtnContent] = useState('Xác nhận');
  const [btnDisable, setBtnDisable] = useState(null);
  const isFirst = useRef(true);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost/isea/server/post/read', {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) throw new Error('Mất kết noois');

      const data = await response.json();
      console.log(data);
      setHomePostItems(data);
      if (data[0]) setPost(data[0]);
    } catch (error) {
      console.error(error);
      showToast({
        status: 'error',
        title: 'Máy chủ không phản hồi',
      });
    }
  };
  const fetchDataRef = useRef(fetchData);

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
    setBtnContent(<img className={cx('icon')} src={icon} alt="loading" />);
    setBtnDisable(true);

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
      console.log(data);
      showToast(data);
    } catch (e) {
      console.error(e);
      showToast({
        status: 'error',
        title: 'Máy chủ không phản hồi',
      });
    } finally {
      setBtnContent('Xác Nhận');
      setBtnDisable(false);
    }
  };

  const showForm = () => {
    setForm(
      <HomeForm
        title={'Thông tin ứng tuyển'}
        btnContent={btnContent}
        isDisable={btnDisable}
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
  const showFormRef = useRef(showForm);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      fetchDataRef.current();
    }
  }, []);

  useEffect(() => {
    if (btnDisable !== null) {
      showFormRef.current();
    }
  }, [btnDisable]);

  return (
    <>
      {toast}
      <HeaderUser state={header} />
      {form}
      {!homePostItems.length > 0 ? null : (
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
      )}
    </>
  );
}

export default Home;
