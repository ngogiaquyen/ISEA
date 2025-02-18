import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HomePost from '~/components/HomePost/HomePost';
import { useEffect, useState } from 'react';
import HeaderUser from '~/layouts/components/HeaderUser/HeaderUser';
import HomePostShow from '~/components/HomePostShow/HomePostShow';
import HomeForm from '~/components/HomeForm/HomeForm';
import HomeFormField from '~/components/HomeFormField/HomeFormField';
import HomeFormFieldBirthday from '~/components/HomeFormFieldBirthday/HomeFormFieldBirthday';
import HomeToast from '~/components/HomeToast/HomeToast';

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

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost/isea/server/post/read', {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      setHomePostItems(data);
      if (data[0]) setPost(data[0]);
      console.log(data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const handleChangeFile = (e) => {
    const fileName = e.target.files[0] ? e.target.files[0].name : 'Chưa chọn tệp tin nào';
    document.getElementById('file-name').innerText = fileName;
  };

  const showForm = () => {
    setForm(
      <HomeForm title={'Thông tin ứng tuyển'} btnText={'Xác nhận'} setForm={setForm} handleSubmit={handleSubmit}>
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
    console.log(post);
  };

  const showToast = (obj) => {
    if (obj && typeof obj === 'object') {
      setToast(null);
      setTimeout(() => {
        setToast(<HomeToast obj={obj} onClick={setToast} />);
      }, 4);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.getElementById('form-data');
    const formData = new FormData(form);
    formData.append('post_id', post.id);

    // for(let [key, value] of formData.entries()){
    //   console.log(key, value);
    // }

    const response = await fetch('http://localhost/isea/server/applicant/register', {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    showToast(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const checkOj = (obj) => {
    return Object.entries(obj).length > 0;
  };

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
