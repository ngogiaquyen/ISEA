import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HomePost from '~/components/HomePost/HomePost';
import React, { useContext, useEffect, useRef, useState } from 'react';
import HomePostShow from '~/components/HomePostShow/HomePostShow';
import HomeForm from '~/components/HomeForm/HomeForm';
import HomeFormField from '~/components/HomeFormField/HomeFormField';
import HomeFormFieldBirthday from '~/components/HomeFormFieldBirthday/HomeFormFieldBirthday';
import { HomeContext } from '~/components/Context/HomeProvider';

const cx = classNames.bind(styles);

function Home() {
  const [homePostItems, setHomePostItems] = useState([{ isInit: true }, { isInit: true }, { isInit: true }]);
  const [post, setPost] = useState({ isInit: true });
  const [selectPostId, setSelectPostId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { checkLogin, showToast, fetchGet, fetchPost } = useContext(HomeContext);

  const getPost = async () => {
    try {
      const data = await fetchGet('post/read');

      if (data.length > 0) {
        setHomePostItems(data);
        setPost(data[0]);
      }
    } catch (e) {
      console.error(e);
      showToast({
        status: 'error',
        title: 'Máy chủ không phản hồi',
      });
    }
  };
  const getPostRef = useRef(getPost);

  const handleChangeFile = (e) => {
    const fileName = e.target.files[0] ? e.target.files[0].name : 'Chưa chọn tệp tin nào';
    document.getElementById('file-name').innerText = fileName;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      showToast(data);
      if (data.status === 'success') {
        checkLogin();
        const btn = document.getElementById('btn-hide-form');
        if (btn) btn.click();
      }
    } catch (e) {
      console.error(e);
      showToast({
        status: 'error',
        title: 'Máy chủ không phản hồi',
      });
    }
  };

  const renderForm = (
    <HomeForm
      title={'Thông tin ứng tuyển'}
      btnContent={'Xác nhận'}
      isDisable={false}
      showBtn={true}
      setForm={setShowForm}
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
    </HomeForm>
  );

  useEffect(() => {
    getPostRef.current();
  }, []);

  return (
    <div className={cx('wrapper')}>
      {showForm ? renderForm : null}
      <div className={cx('left')}>
        <HomePost
          postArr={homePostItems}
          onPostSelect={setPost}
          selectPostId={selectPostId}
          setSelectPostId={setSelectPostId}
        />
      </div>
      <div className={cx('right')}>
        <HomePostShow
          onApply={() => {
            setShowForm(true);
          }}
          post={post}
        />
      </div>
    </div>
  );
}

export default Home;
