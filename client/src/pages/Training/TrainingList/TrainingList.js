import classNames from 'classnames/bind';
import styles from './TrainingList.module.scss';
import PageTitle from '~/components/PageTitle';
import Controller from '~/components/Controller';
import config from '~/config';
import TrainingItems from './TrainingItems';
import { useEffect, useState } from 'react';
import { getData } from '~/hooks/apiService';

const cx = classNames.bind(styles);

const courses = [
  {
    course_name: 'Khóa học Lập trình Python',
    course_description:
      'Khóa học này sẽ giúp bạn nắm vững các kiến thức cơ bản về lập trình Python và ứng dụng thực tế.',
    start_date: '01/03/2025',
    end_date: '30/04/2025',
    duration: '2 tháng',
    instructor: 'Nguyễn Văn A',
    location: 'Trung tâm Tin học ABC',
    objectives: 'Hiểu và áp dụng các kiến thức cơ bản về lập trình Python, xây dựng các dự án thực tế.',
    contact_information: 'SĐT: 0123456789, Email: lienhe@abc.com',
  },
  {
    course_name: 'Khóa học Thiết kế Đồ họa',
    course_description: 'Khóa học này sẽ giúp bạn nắm vững các công cụ và kỹ năng thiết kế đồ họa.',
    start_date: '01/05/2025',
    end_date: '30/06/2025',
    duration: '2 tháng',
    instructor: 'Trần Thị B',
    location: 'Trung tâm Thiết kế DEF',
    objectives: 'Hiểu và áp dụng các kiến thức cơ bản về thiết kế đồ họa, tạo ra các sản phẩm thiết kế chất lượng.',
    contact_information: 'SĐT: 0987654321, Email: lienhe@def.com',
  },
  {
    course_name: 'Khóa học Quản lý Dự án',
    course_description: 'Khóa học này sẽ giúp bạn nắm vững các kiến thức và kỹ năng quản lý dự án.',
    start_date: '01/07/2025',
    end_date: '30/08/2025',
    duration: '2 tháng',
    instructor: 'Lê Văn C',
    location: 'Trung tâm Quản lý GHI',
    objectives: 'Hiểu và áp dụng các kiến thức cơ bản về quản lý dự án, thực hiện các dự án hiệu quả.',
    contact_information: 'SĐT: 0123894567, Email: lienhe@ghi.com',
  },
];

function TrainingList() {
  const [courses, setCourses] = useState([]);

  const loadCourses = async () => {
    const res = await getData('/course/read');
    console.log(res);
    setCourses(res);
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <PageTitle title="Khóa đào tạo" />
      <Controller addUrl={config.routes.admin.trainingCreate} />
      <div className={cx('list')}>
        {courses.map((course, index) => (
          <TrainingItems key={index} course={course} />
        ))}
      </div>
    </div>
  );
}

export default TrainingList;
// {
//   "id": 4,
//   "title": "Kỹ Sư Thiết Kế Điện (Đi Làm Ngay) - Nam- Thu Nhập 20M++ /Tháng",
//   "teacher": "ádf",
//   "address": "aádf",
//   "date_start": "2025-03-18",
//   "date_end": "2025-03-21",
//   "descriptions": "ádfasdf",
//   "edit_at": "2025-03-11 19:21:48"
// }