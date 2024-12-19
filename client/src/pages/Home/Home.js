import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import HomePanel from '~/components/HomePanel/HomePanel';
import HomeNews from '~/components/HomeNews/HomeNews';
import HomePost from '~/components/HomePost/HomePost';

const cx = classNames.bind(styles);

const homePanelItems = [
  {
    src: 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png',
    content: 'Hồ sơ của tôi',
  },
  {
    src: 'https://cdn-icons-png.flaticon.com/128/10041/10041985.png',
    content: 'Khoá đào tạo',
  },
  {
    src: 'https://cdn-icons-png.flaticon.com/128/1011/1011528.png',
    content: 'Thống kê',
  },
  {
    src: 'https://cdn-icons-png.flaticon.com/128/6463/6463127.png',
    content: 'Mục tiêu',
  },
  {
    src: 'https://cdn-icons-png.flaticon.com/128/3953/3953226.png',
    content: 'Cài đặt',
  },
];
const homeNewsItems = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/ngontumathuat-d946a.appspot.com/o/images%2F268c39b9-4e17-4dc1-a66f-4bf57a1b68c4?alt=media&token=52ef2379-8c5b-481d-b2d2-00f35b0adfa4',
    title: 'Một con khỉ mới được sinh ra ở Phú Bình, Thái Nguyên',
    publish: '17/09/2004',
    tagArr: [1, 2, 3],
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/ngontumathuat-d946a.appspot.com/o/images%2F3cf306d4-9964-4089-947a-e11cdd35d82b?alt=media&token=73563923-1a79-4d86-9a9c-854e3ea3cfbe',
    title: 'Một con khỉ mới được sinh ra ở Phú Bình, Thái Nguyên',
    publish: '17/09/2004',
    tagArr: [1, 3, 2],
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/ngontumathuat-d946a.appspot.com/o/images%2Fabc5b5b8-93f0-44cd-acf2-090736c318e6?alt=media&token=432d269b-70eb-4b78-af42-d9cf092dae6b',
    title: 'Một con khỉ mới được sinh ra ở Phú Bình, Thái Nguyên',
    publish: '17/09/2004',
    tagArr: [2, 1, 3],
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/ngontumathuat-d946a.appspot.com/o/images%2F268c39b9-4e17-4dc1-a66f-4bf57a1b68c4?alt=media&token=52ef2379-8c5b-481d-b2d2-00f35b0adfa4',
    title: 'Một con khỉ mới được sinh ra ở Phú Bình, Thái Nguyên',
    publish: '17/09/2004',
    tagArr: [2, 1, 3],
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/ngontumathuat-d946a.appspot.com/o/images%2F3cf306d4-9964-4089-947a-e11cdd35d82b?alt=media&token=73563923-1a79-4d86-9a9c-854e3ea3cfbe',
    title: 'Một con khỉ mới được sinh ra ở Phú Bình, Thái Nguyên',
    publish: '17/09/2004',
    tagArr: [3, 2, 1],
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/ngontumathuat-d946a.appspot.com/o/images%2Fabc5b5b8-93f0-44cd-acf2-090736c318e6?alt=media&token=432d269b-70eb-4b78-af42-d9cf092dae6b',
    title: 'Một con khỉ mới được sinh ra ở Phú Bình, Thái Nguyên',
    publish: '17/09/2004',
    tagArr: [3, 1, 2],
  },
];
const homePostItems = [
  {
    avatar: 'https://cdn-icons-png.flaticon.com/128/16683/16683419.png',
    name: 'Chill guy',
    title: 'Bí kíp trở thành Engineering Manager đỉnh của chóp',
    content: `Đừng nói nhân viên bỏ việc vì công việc, họ bỏ vì quản lý dở hơi thôi. Đây là chân lý của leadership trong
            giới IT: Quản lý kỹ thuật không phải là thằng code trâu nhất team. Nó là việc tạo ra một môi trường mà ở đó
            mấy thằng code giỏi có thể bung hết skill và cho ra lò những sản phẩm đẳng cấp thế giới. Sau bao năm vừa
            code vừa làm quản lý, tôi đã thấy sự khác biệt giữa team "sống dở chết dở" và team "bung lụa".`,
    publish: '20/12/2024',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/ngontumathuat-d946a.appspot.com/o/images%2F268c39b9-4e17-4dc1-a66f-4bf57a1b68c4?alt=media&token=52ef2379-8c5b-481d-b2d2-00f35b0adfa4',
    tags: [1, 2, 3],
  },
  {
    avatar: 'https://cdn-icons-png.flaticon.com/128/3177/3177440.png',
    name: 'isea',
    title: 'Bí kíp trở thành Engineering Manager đỉnh của chóp',
    content: `Đừng nói nhân viên bỏ việc vì công việc, họ bỏ vì quản lý dở hơi thôi. Đây là chân lý của leadership trong
            giới IT: Quản lý kỹ thuật không phải là thằng code trâu nhất team. Nó là việc tạo ra một môi trường mà ở đó
            mấy thằng code giỏi có thể bung hết skill và cho ra lò những sản phẩm đẳng cấp thế giới. Sau bao năm vừa
            code vừa làm quản lý, tôi đã thấy sự khác biệt giữa team "sống dở chết dở" và team "bung lụa".`,
    publish: '20/12/2024',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/ngontumathuat-d946a.appspot.com/o/images%2F9b9aee3e-4778-44fa-af67-f5277376955b?alt=media&token=44ec564a-c14d-49ee-93df-ff345694d347',
    tags: [3, 2, 1],
  },
];

function Home() {
  return (
    <div className={cx('wrapper')}>
      {console.log('cc')}
      <HomePanel title={'Thông tin'} arrItem={homePanelItems} />
      <HomePost postArr={homePostItems} />
      <HomeNews title={'Thông tin nổi bật'} newsArr={homeNewsItems} />
    </div>
  );
}

export default Home;
