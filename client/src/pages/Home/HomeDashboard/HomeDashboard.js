import classNames from 'classnames/bind';
import styles from './HomeDashboard.module.scss';
import globalStyles from '../../../components/GlobalStyles/GlobalStyles.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import avatar from './../../../assets/images/meomeo.jpg';
import { useContext, useEffect, useRef, useState } from 'react';
import { HomeContext } from '~/components/Context/HomeProvider';
import HomeForm from '~/components/HomeForm/HomeForm';
import HomeFormField from '~/components/HomeFormField/HomeFormField';

const cx = classNames.bind({ ...styles, ...globalStyles });

function HomeDashboard() {
  const { publicUser, setPublicUser, fetchGet, fetchPost, showToast } = useContext(HomeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [type, setType] = useState('password');
  const direct = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    const data = await fetchPost('user/logout');

    showToast(data);
    console.log(data);

    if (data.status === 'success') {
      setIsLoading(true);
      setPublicUser(data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btn-hide-form');
    const form = document.getElementById('form-data');
    const formData = new FormData(form);

    const data = await fetchPost('user/login', formData);

    showToast(data);
    if (data.user) {
      btn.click();
      setPublicUser(data.user);
    }
  };

  const handleShowPassword = () => {
    type === 'text' ? setType('password') : setType('text');
  };

  const handleFetch = async (id) => {
    const data = await fetchGet(`applicant/read?user=${id}`);
    console.log(data);
    return data
  };
  const handleFetchRef = useRef(handleFetch);

  const loginForm = (
    <HomeForm
      title={'Đăng nhập'}
      btnContent={'Đăng nhập'}
      isDisable={false}
      showBtn={true}
      setForm={setShowForm}
      handleSubmit={handleSubmit}
    >
      <HomeFormField
        title={'Số điện thoại'}
        name={'phone_number'}
        type={'number'}
        placeholder={'0321 456 789'}
        onChange={null}
      />
      <HomeFormField
        title={'Mật khẩu'}
        name={'password'}
        type={type}
        classArray={[]}
        placeholder={'••••••••'}
        onChange={null}
      />
      <label className={cx('label-input')}>
        <input type="checkbox" onChange={handleShowPassword} checked={type === 'text' ? true : false} />
        <span>Hiển thị mật khẩu</span>
      </label>
    </HomeForm>
  );

  useEffect(() => {
    if (publicUser && Object.keys(publicUser).length <= 0) return;

    if (typeof publicUser === 'object') {
      if (publicUser?.full_name) {
        setIsLoading(false);
        handleFetchRef.current(publicUser?.id);
      } else {
        setShowForm(true);
      }
    }
  }, [publicUser]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        {showForm ? loginForm : null}
        {isLoading ? (
          <p className={cx('login')} onClick={setShowForm}>
            Nhấn để đăng nhập ...
          </p>
        ) : (
          <p>Bảng điều khiển</p>
        )}
        <div className={cx('col-wrapper')}>
          <div className={cx('col-1')}>
            <div className={cx('scroll')}>
              <ul className={cx('nav-bar')}>
                <li className={cx('nav-item', 'info')}>
                  <NavLink className={cx('nav-item-link', { init: isLoading })}>
                    <img src={avatar} alt="avatar" />
                    <div className={cx('account')}>
                      <div className={cx('account-name')}>{publicUser?.full_name}</div>
                      <div className={cx('account-role')}>{publicUser?.role}</div>
                    </div>
                  </NavLink>
                </li>
                <li className={cx('nav-item')}>
                  <NavLink className={cx('nav-item-link', 'active', { init: isLoading })}>
                    <i className="fa-solid fa-bell"></i>
                    <span>Thông báo phỏng vấn</span>
                  </NavLink>
                </li>
                <li className={cx('nav-item')}>
                  <NavLink className={cx('nav-item-link', { init: isLoading })}>
                    <i className="fa-solid fa-envelope"></i>
                    <span>Trạng thái ứng tuyển</span>
                  </NavLink>
                </li>
                {/* <li className={cx('nav-item')}>
                  <NavLink className={cx('nav-item-link', { init: isLoading })}>
                    <i className="fa-solid fa-clock"></i>
                    <span>Thời gian</span>
                  </NavLink>
                </li>
                <li className={cx('nav-item')}>
                  <NavLink className={cx('nav-item-link', { init: isLoading })}>
                    <i className="fa-solid fa-user"></i>
                    <span>Tài khoản</span>
                  </NavLink>
                </li>
                <li className={cx('nav-item')}>
                  <NavLink className={cx('nav-item-link', { init: isLoading })}>
                    <i className="fa-solid fa-home"></i>
                    <span>Trang chủ</span>
                  </NavLink>
                </li>
                <li className={cx('nav-item')}>
                  <NavLink className={cx('nav-item-link', { init: isLoading })}>
                    <i className="fa-solid fa-cloud"></i>
                    <span>Đám mây</span>
                  </NavLink>
                </li>
                <li className={cx('nav-item')}>
                  <NavLink className={cx('nav-item-link', { init: isLoading })}>
                    <i className="fa-solid fa-headphones"></i>
                    <span>Tai nghe</span>
                  </NavLink>
                </li>
                <li className={cx('nav-item')}>
                  <NavLink className={cx('nav-item-link', { init: isLoading })}>
                    <i className="fa-solid fa-file"></i>
                    <span>Tệp tin</span>
                  </NavLink>
                </li>
                <li className={cx('nav-item')}>
                  <NavLink className={cx('nav-item-link', { init: isLoading })}>
                    <i className="fa-solid fa-camera"></i>
                    <span>Máy ảnh</span>
                  </NavLink>
                </li> */}
                <li className={cx('nav-item')}>
                  <NavLink
                    to={'/dang-xuat'}
                    className={cx('nav-item-link', { init: isLoading })}
                    onClick={handleLogout}
                  >
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span>Đăng xuất</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx('col-2')}>
            <div className={cx('col2-head', { init: isLoading })}>
              <p>Thông báo phỏng vấn</p>
            </div>
            <div className={cx('col2-body', { init: isLoading })}>
              <p>Chức năng đang tạm khoá</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDashboard;
