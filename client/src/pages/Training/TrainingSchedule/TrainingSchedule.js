import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TrainingSchedule.module.scss';

const cx = classNames.bind(styles);

const TrainingSchedule = () => {
  const [trainings, setTrainings] = useState([
    {
      id: 1,
      course: 'ReactJS Basics',
      startDate: '2025-03-10',
      endDate: '2025-03-15',
      instructor: 'Nguyễn Văn A',
      location: 'Online',
    },
    {
      id: 2,
      course: 'Advanced JS',
      startDate: '2025-04-01',
      endDate: '2025-04-05',
      instructor: 'Trần Thị B',
      location: 'Phòng họp 101',
    },
  ]);

  const [newTraining, setNewTraining] = useState({
    course: '',
    startDate: '',
    endDate: '',
    instructor: '',
    location: '',
  });

  const handleChange = (e) => {
    setNewTraining({ ...newTraining, [e.target.name]: e.target.value });
  };

  const addTraining = () => {
    if (newTraining.course && newTraining.startDate && newTraining.endDate) {
      setTrainings([...trainings, { id: trainings.length + 1, ...newTraining }]);
      setNewTraining({ course: '', startDate: '', endDate: '', instructor: '', location: '' });
    }
  };

  return (
    <div className={cx('container')}>
      <h2 className={cx('title')}>Lập kế hoạch đào tạo</h2>

      <div className={cx('form')}>
        <input
          className={cx('input')}
          type="text"
          name="course"
          value={newTraining.course}
          onChange={handleChange}
          placeholder="Tên khóa học"
        />
        <input
          className={cx('input')}
          type="date"
          name="startDate"
          value={newTraining.startDate}
          onChange={handleChange}
        />
        <input className={cx('input')} type="date" name="endDate" value={newTraining.endDate} onChange={handleChange} />
        <input
          className={cx('input')}
          type="text"
          name="instructor"
          value={newTraining.instructor}
          onChange={handleChange}
          placeholder="Giảng viên"
        />
        <input
          className={cx('input')}
          type="text"
          name="location"
          value={newTraining.location}
          onChange={handleChange}
          placeholder="Địa điểm"
        />
        <button className={cx('button')} onClick={addTraining}>
          Thêm lịch đào tạo
        </button>
      </div>

      <h3 className={cx('subtitle')}>Lịch trình đào tạo</h3>
      <ul className={cx('training-list')}>
        {trainings.map((training) => (
          <li key={training.id} className={cx('training-item')}>
            <strong>{training.course}</strong>
            <br /> 📅 {training.startDate} - {training.endDate}
            <br /> 👨‍🏫 Giảng viên: {training.instructor}
            <br /> 📍 Địa điểm: {training.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingSchedule;
