import classNames from 'classnames/bind';
import React, { useContext, useEffect, useState } from 'react';
import { HomeContext } from '~/components/Context/HomeProvider';
import globalStyles from '~/components/GlobalStyles/GlobalStyles.module.scss';
import HomeForm from '~/components/HomeForm/HomeForm';
import styles from '~/layouts/components/Dashboard/Dashboard.module.scss';
import style from './Notification.module.scss';

const cx = classNames.bind({ ...style, ...styles, ...globalStyles });

function Notification() {
  const [has, setHas] = useState(false);
  const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useState([]);
  const [view, setView] = useState(null);
  const { publicUser, fetchGet } = useContext(HomeContext);
  const state = [
    { text: 'Có lỗi xảy ra', class: 'deny' },
    { text: 'Chờ duyệt', class: 'wait' },
    { text: 'Đã duyệt', class: 'done' },
    { text: 'Từ chối', class: 'deny' },
  ];
  const type = [0, 'Trực tiếp', 'Trực tuyến'];

  const formatDate = (str) => {
    const [date, time] = str.split(' ');
    const [year, month, day] = date.split('-');
    return `${time} ngày ${day}/${month}/${year}`;
  };

  const render = (obj) => {
    const documents = obj?.required_documents.split('\n');

    const renderHrs = obj?.hrs.map((hr, index) => (
      <div key={index} className={cx('field')}>
        <i class="fa-solid fa-user"></i>
        <p className={cx('field-info')}>
          {index === 0 ? 'Leader:' : 'Assistant:'}
          <span>{hr}</span>
        </p>
      </div>
    ));

    const renderDocuments = documents.map((document, index) => (
      <div key={index} className={cx('field')}>
        <i class="fa-solid fa-file"></i>
        <p className={cx('field-info')}>
          {`Tài liệu ${index + 1}:`}
          <span>{document}</span>
        </p>
      </div>
    ));
    return (
      <HomeForm
        formId={'view-notify'}
        title={`Buổi phỏng vấn số #${obj?.id}`}
        showBtn={true}
        setForm={setView}
        showSubmit={false}
      >
        <span className={cx('title-info')}>Thông tin</span>
        <div className={cx('field')}>
          <i class="fa-solid fa-location-dot"></i>
          <p className={cx('field-info')}>
            Vị trí: <span>{obj?.interview_location}</span>
          </p>
        </div>
        <div className={cx('field')}>
          <i class="fa-solid fa-clock"></i>
          <p className={cx('field-info')}>
            Thời gian: <span>{formatDate(obj?.interview_datetime)}</span>
          </p>
        </div>
        <div className={cx('field')}>
          <i class="fa-solid fa-microphone"></i>
          <p className={cx('field-info')}>
            Hình thức: <span>{type[obj?.interview_type]}</span>
          </p>
        </div>
        <div className={cx('field')}>
          <i class="fa-solid fa-phone"></i>
          <p className={cx('field-info')}>
            Liên hệ: <span>{obj?.phone_number}</span>
          </p>
        </div>
        <span className={cx('title-info')}>Người phỏng vấn</span>
        {renderHrs}
        <span className={cx('title-info')}>Tài liệu cần mang</span>
        {renderDocuments}
        {obj?.note ? (
          <React.Fragment>
            <span className={cx('title-info')}>Ghi chú</span>
            <div className={cx('field')}>
              <p className={cx('field-note')}>{obj?.note}</p>
            </div>
          </React.Fragment>
        ) : (
          'Không có'
        )}
      </HomeForm>
    );
  };

  const handleShow = (candidate) => {
    setView(render(candidate));
  };

  useEffect(() => {
    if (!publicUser?.id) return;

    const fetchApplicant = async () => {
      setLoading(true);
      const data = await fetchGet(`candidate/detail?user=${publicUser.id}`);
      setCandidates(data);

      if (data.length > 0) {
        setHas(true);
      }

      setTimeout(() => {
        setLoading(false);
      }, 100);
    };

    fetchApplicant();
  }, [publicUser, fetchGet]);

  return (
    <React.Fragment>
      {view}
      <div className={cx('dashboard-box-title', { init: loading })}>
        <span>Lịch phỏng vấn</span>
      </div>
      <ul className={cx('notify-list', { init: loading })}>
        {!has ? <p>Bạn không có lịch phỏng vấn</p> : null}
        {candidates?.map((candidate, index) => (
          <li key={index} className={cx('notify-item')} onClick={() => handleShow(candidate)}>
            <div className={cx('interview-location')}>{candidate?.interview_location}</div>
            <div className={cx('interview-detail')}>
              <div className={cx('interview-datetime')}>
                <span>Thời gian: {formatDate(candidate?.interview_datetime)}</span>
              </div>
              <div className={cx('interview-type')}>
                <span>Hình thức: {type[candidate?.interview_type]}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Notification;
