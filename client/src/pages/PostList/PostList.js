import classNames from 'classnames/bind';
import styles from './PostList.module.scss';
import Controller from '~/components/Controller';
import PageTitle from '~/components/PageTitle';
import PostItem from './PostItem';
import { useContext, useEffect, useState } from 'react';
import { getData } from '~/hooks/apiService';
import config from '~/config';
import { LoadBarContext } from '~/components/Context/LoadBarPovider';

const cx = classNames.bind(styles);

function PostList() {
  const [postData, setPostDate] = useState([]);

  const { showLoadBar, hideLoadBar } = useContext(LoadBarContext);

  useEffect(() => {
    showLoadBar();
    async function fetchData() {
      try {
        const data = await getData('/post/read');
        console.log(data);
        setPostDate(data);
        hideLoadBar();
        console.log(hideLoadBar)
      } catch (error) {
        console.error('Error getting data: ', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={cx('wrapper')}>
      <PageTitle title="Danh sách bài đăng" />
      <Controller addUrl={config.routes.admin.recruitmentCreate} />
      <div className={cx('post-list')}>
        {postData.map((post, index) => (
          <PostItem
            key={index}
            title={post.title}
            date={post.expiration_date}
            createAt={post.create_at}
            descriptions={post.content}
          />
        ))}
      </div>
    </div>
  );
}

export default PostList;
