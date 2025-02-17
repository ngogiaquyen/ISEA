import classNames from 'classnames/bind';
import styles from './Explore.module.scss';
import logo from '~/assets/images/logo.jpg';
import poster from '~/assets/images/poster.png';
import { NavLink } from 'react-router-dom';
import HomeNews from '~/components/HomeNews/HomeNews';
import fbIcon from '~/assets/images/facebook.webp';
import twIcon from '~/assets/images/twitter.webp';
import lkIcon from '~/assets/images/linked.webp';
import HeaderUser from '~/layouts/components/HeaderUser/HeaderUser';

const cx = classNames.bind(styles);
const header = {
  home: 0,
  about: 1,
};
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
];

function Explore() {
  return (
    <>
      <HeaderUser state={header} />
      <div className={cx('wrapper')}>
        <div className={cx('poster')}>
          <img className={cx('poster-img')} src={poster} alt="poster" />
          <div className={cx('com-info')}>
            <div className={cx('com-info-wrapper')}>
              <img className={cx('com-logo')} src={logo} alt="logo" />
              <div className={cx('com-info-group')}>
                <div className={cx('com-name')}>CÔNG TY ĐÀO TẠO VÀ PHÁT TRIỂN NHÂN LỰC ISEA</div>
                <div className={cx('com-info-detail')}>
                  <div className={cx('com-url')}>
                    <i className="fa-solid fa-globe"></i>
                    <NavLink to={'#'}>https://isea.com/</NavLink>
                  </div>
                  <div className={cx('com-recruitment-slots')}>
                    <i className="fa-solid fa-building-user"></i>
                    <span>5 giám đốc</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('main-info')}>
          <div className={cx('col1')}>
            <div className={cx('box-info', 'col1-wrapper')}>
              <div className={cx('info-title')}>Giới thiệu công ty</div>
              <div className={cx('main-info-content')}>
                Ngày 23/05/2019, Công ty Cổ phần ISEA Việt Name chính thức được thành lập, hoạt động trong lĩnh vực
                giảng dạy cao cấp trên toàn quốc.
                <br />
                <br />
                Trụ sở chính: Phòng 103, Tầng 1 - Toà C5, Trường Đại học Công nghệ Thông tin và Truyền thông Thái
                Nguyên, Tân Thịnh, Tp. Thái Nguyên
                <br />
                <br />
                Văn phòng Thái Nguyên: Z115, Tân Thịnh, Tp. Thái Nguyên
                <br />
                <br />
                Văn phòng Đại Từ: Văn Yên, Đại Từ, Thái Nguyên
                <br />
                <br />
                Trải qua nhiều biến động của thị trường, ISEA đang ngày một hoàn thiện và trưởng thành hơn từ những khó
                khăn, thách thức. Bằng nội lực vững vàng được xây đắp từ đội ngũ lãnh đạo bản lĩnh, sáng suốt, đội ngũ
                nhân viên tài năng, nhiệt huyết, ISEA đang dần khẳng định được uy tín và năng lực của mình trên thị
                trường, trở thành trung tâm giảng dạy tin cậy được nhiều đối tác, khách hàng lựa chọn.
                <br />
                <br />
                Hòa nhịp cùng sự phát triển của thị trường cũng như bài toán đa dạng hóa lĩnh vực kinh doanh của doanh
                nghiệp. ISEA không chỉ tiếp tục phát huy thế mạnh của mình mà còn mở rộng ra nhiều lĩnh vực từ đầu tư,
                phát triển dự án, marketing và truyền thông dự án đến đào tạo chuyên ngành giảng dạy cho các chuyên viên
                tư vấn trong và ngoài công ty.
              </div>
            </div>
            <HomeNews title={'Tin tức tuyển dụng'} newsArr={homeNewsItems} />
          </div>
          <div className={cx('col2')}>
            <div className={cx('box-info', 'col2-contact')}>
              <div className={cx('info-title')}>Thông tin liên hệ</div>
              <div className={cx('com-contact-info')}>
                <div className={cx('com-contact-address')}>
                  <span className={cx('contact-info-title')}>
                    <i className="fa-solid fa-map-marker-alt"></i>
                    <span>Địa chỉ công ty</span>
                  </span>
                  <span className={cx('address-content')}>
                    Phòng 103, Tầng 1 - Toà C5, Trường Đại học Công nghệ Thông tin và Truyền thông Thái Nguyên, Tân
                    Thịnh, Tp. Thái Nguyên, Việt Nam
                  </span>
                </div>
                <div className={cx('com-contact-map')}>
                  <span className={cx('contact-info-title')}>
                    <i className="fa-solid fa-map"></i>
                    <span>Xem bản đồ</span>
                  </span>
                  <iframe
                    title="map"
                    className={cx('map')}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14840.211403914107!2d105.79700410366057!3d21.5838600110685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31352738b1bf08a3%3A0x515f4860ede9e108!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiAmIFRydXnhu4FuIHRow7RuZyBUaMOhaSBOZ3V5w6pu!5e0!3m2!1svi!2s!4v1736147282621!5m2!1svi!2s"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className={cx('box-info', 'col2-sharer')}>
              <div className={cx('info-title')}>Chia sẻ công ty tới bạn bè</div>
              <div className={cx('col2-sharer-body')}>
                <span className={cx('content')}>Sao chép đường dẫn</span>
                <div className={cx('box-link-sharer')}>
                  <input value={'https://isea.com/'} readOnly />
                  <button className={cx('btn-copy')}>
                    <i className="fa-regular fa-copy"></i>
                  </button>
                </div>
                <span className={cx('content')}>Chia sẻ qua mạng xã hội</span>
                <div className={cx('box-option-sharer')}>
                  <NavLink className={cx('option-sharer')}>
                    <img src={fbIcon} alt="img" />
                  </NavLink>
                  <NavLink className={cx('option-sharer')}>
                    <img src={twIcon} alt="img" />
                  </NavLink>
                  <NavLink className={cx('option-sharer')}>
                    <img src={lkIcon} alt="img" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
