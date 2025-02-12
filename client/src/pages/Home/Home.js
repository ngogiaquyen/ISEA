import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HomePost from '~/components/HomePost/HomePost';
import { useEffect, useState } from 'react';
import HeaderUser from '~/layouts/components/HeaderUser/HeaderUser';
import HomePostShow from '~/components/HomePostShow/HomePostShow';

const cx = classNames.bind(styles);
const header = {
  home: 1,
  about: 0,
};

export function showPost(obj) {
  document.querySelector('.right').remove();
  const right = document.createElement('div');
  right.className = cx('post-show');
  right.innerHTML = HomePostShow(obj);
  document.querySelector('.wrapper').appendChild(right);
}

function Home() {
  const [homePostItems, setHomePostItems] = useState([]);
  const [post, setPost] = useState({});

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost/isea/server/post/read');
      const data = await response.json();
      setHomePostItems(data);
      setPost(data[1]);
      console.log(data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <HeaderUser header={header} />
      <div className={cx('wrapper')}>
        <div className={cx('left')}>
          <HomePost postArr={homePostItems} onPostSelect={setPost} />
        </div>
        <div className={cx('right')}>{post && <HomePostShow post={post} />}</div>
      </div>
    </>
  );
}

export default Home;
