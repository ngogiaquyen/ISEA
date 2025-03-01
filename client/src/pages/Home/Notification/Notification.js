import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { HomeContext } from '~/components/Context/HomeProvider';
import style from './Notification.module.scss';
import globalStyle from '../../../components/GlobalStyles/GlobalStyles.module.scss';

const cx = classNames.bind({ ...style, ...globalStyle });

function Notification() {
  const [has, setHas] = useState(false);
  const [loading, setLoading] = useState(true);
  const [candidates, setCandidates] = useState([]);
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
    <ul className={cx('notify-list', { init: loading })}>
      {!has ? <p>Bạn chưa ứng tuyển bài nào</p> : null}
      {candidates?.map((candidate, index) => (
        <li key={index} className={cx('notify-item')}>
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
  );
}

export default Notification;
