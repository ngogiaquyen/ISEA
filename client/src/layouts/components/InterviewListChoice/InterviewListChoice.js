import classNames from 'classnames/bind';
import styles from './InterviewListChoice.module.scss';
import Item from './Item';
import { getData } from '~/hooks/apiService';
import { useEffect } from 'react';
import { useState } from 'react';

const cx = classNames.bind(styles);

function InterviewListChoice() {

  const [ interviews, setInterviews] = useState([]);

  const fetchData = async () => {
    try {
      const response = await getData("/interview/read");
      setInterviews(response)
    } catch (error) {
      console.error('Error getting data: ', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={cx('wrapper')}>
      {interviews.map((interview, index)=>(
        <Item interview={interview} key={index}/>
      ))}
    </div>
  );
}

export default InterviewListChoice;
