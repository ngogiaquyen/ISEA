import classNames from 'classnames/bind';
import styles from './HomePostShow.module.scss';
import { cleanString } from '~/components/HomePostItem/HomePostItem';

const cx = classNames.bind(styles);

function generateDescription(desc) {
  if (!desc) return;
  const lines = desc.trim().split('\n');
  let elems = [];
  let list = 0;

  lines.map((line, index) => {
    line = line.trim();

    if (line !== '') {
      if (line.includes('*')) {
        elems.push(
          <p className={cx('line-title')} key={`h3-${index}`}>
            {cleanString(line)}
          </p>,
        );
        let liElems = [];
        for (let i = index + 1; i < lines.length; i++) {
          const nextLine = lines[i].trim();

          if (!nextLine.includes('*') && nextLine !== '') {
            console.log(`DAY LA LINE: ${nextLine}`);
            liElems.push(
              <li className={cx('line-desc')} key={`li-${i}`}>
                {cleanString(nextLine)}
              </li>,
            );
          } else {
            break;
          }
        }
        if (liElems.length > 0) {
          elems.push(
            <ul className={cx('list')} key={`ul-${index}`}>
              {liElems}
            </ul>,
          );
        }
      }
    }
  });
  return elems;
}

window.addEventListener('scroll', function () {
  const scrollY = window.scrollY;
  const process = this.document.querySelector('.process');
  if (!process) return;
  if (scrollY > 80) return;
  process.style.height = `calc(100vh - 32px - 80px + ${scrollY}px)`;
});

function HomePostShow({ post }) {
  return (
    <div className={cx('post-show', 'process')}>
      <div className={cx('post-info-head')}>
        <div className={cx('post-title')}>
          <p>{post.title}</p>
        </div>
        <p className={cx('post-from-company')}>
          Công Ty Đào tạo và Phát triển Nhân lực ISEA Việt Nam
          <br />
          Thành phố Thái Nguyên
        </p>
        <div className={cx('btn-wrapper')}>
          <button className={cx('btn-apply')}>
            Nộp hồ sơ ứng tuyển
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
          <button className={cx('btn-save-post')}>
            <i className="fa-regular fa-bookmark"></i>
          </button>
        </div>
      </div>
      <div className={cx('post-info-body')}>
        <div className={cx('job-info')}>
          <p className={cx('line-title')}>Hạn nộp hồ sơ</p>
          <div className={cx('job-expiration-date', 'info')}>
            <i className="fa-solid fa-calendar-check"></i>
            <span>
              Ngày hết hạn
              <span>{post.expiration_date}</span>
            </span>
          </div>
          <p className={cx('line-title')}>Chi tiết công việc</p>
          <div className={cx('job-salary', 'info')}>
            <i className="fa-solid fa-money-bill-wave"></i>
            <span className={cx('salary', 'tag')}>
              Mức lương
              <span>{post.salary}</span>
            </span>
          </div>
          <div className={cx('job-need-exp', 'info')}>
            <i className="fa-solid fa-clock"></i>
            <span className={cx('exp', 'tag')}>
              Yêu cầu kinh nghiệm
              <span>{post.experience}</span>
            </span>
          </div>
          <div className={cx('job-location', 'info')}>
            <i className="fa-solid fa-location-dot"></i>
            <span className={cx('location', 'tag')}>
              Vị trí
              <span>{post.location}</span>
            </span>
          </div>
        </div>
        {generateDescription(post.content)}
      </div>
    </div>
  );
}

export default HomePostShow;
