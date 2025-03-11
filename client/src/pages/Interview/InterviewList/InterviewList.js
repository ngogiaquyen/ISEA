import classNames from 'classnames/bind';
import styles from './InterviewList.module.scss';
import Controller from '~/components/Controller';
import config from '~/config';
import InterviewItem from './InterviewItem';
import PageTitle from '~/components/PageTitle';
import { useEffect, useState } from 'react';
import { getData } from '~/hooks/apiService';

const cx = classNames.bind(styles);

const interviews1 = [
  {
    interviewDateAndTime: '2025-02-20T10:00:00',
    interviewLocation: 'Văn phòng Công ty ABC, 123 Đường ABC, TP. HCM',
    interviewers: [
      { name: 'Trần Thị B', title: 'Trưởng phòng Nhân sự' },
      { name: 'Lê Văn C', title: 'Giám đốc Kỹ thuật' },
    ],
    interviewMethod: 'Trực tiếp',
    emailContact: 'contact@companyabc.com',
    phoneNumberContact: '+84 123 456 789',
    documentsToBring: ['Sơ yếu lý lịch', 'Chứng chỉ', 'Thư giới thiệu'],
    note: 'Trang phục công sở',
  },
  {
    interviewDateAndTime: '2025-02-22T14:00:00',
    interviewLocation: 'Văn phòng Công ty XYZ, 456 Đường XYZ, TP. HCM',
    interviewers: [
      { name: 'Nguyễn Văn A', title: 'Trưởng phòng Nhân sự' },
      { name: 'Phạm Thị D', title: 'Trưởng nhóm Tuyển dụng' },
    ],
    interviewMethod: 'Online (Zoom)',
    emailContact: 'contact@companyxyz.com',
    phoneNumberContact: '+84 987 654 321',
    documentsToBring: ['CV', 'Bằng cấp', 'Portfolio'],
    note: 'Chuẩn bị trước tài liệu',
  },
];


function InterviewList() {
  const [interviews, setInterviews] = useState([]);

  const loadData = async ()=>{
    try {
      const response = await getData("/interview/read");
      setInterviews(response);
    } catch (error) {
      console.error("Post error: ", error);
    }
  }

  useEffect(()=>{

    loadData();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <PageTitle title='Lịch phỏng vấn'/>
      <Controller addUrl={config.routes.admin.createInterview}/>
      <div className={cx('list')}>
        {interviews.map((interview, index) => (
          <InterviewItem key={index} interview={interview}/>
        ))}
      </div>
    </div>
  );
}

export default InterviewList;
