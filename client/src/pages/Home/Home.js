import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}>
        <div className={cx('left-item')}>
          <div className={cx('heading')}>Thông tin</div>
          <ul className={cx('list-link')}>
            <li className={cx('list-link-item')}>
              <img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" />
              Hồ sơ của tôi
            </li>
            <li className={cx('list-link-item')}>
              <img src="https://cdn-icons-png.flaticon.com/128/10041/10041985.png" />
              Các khoá đào tạo
            </li>
            <li className={cx('list-link-item')}>
              <img src="https://cdn-icons-png.flaticon.com/128/1011/1011528.png" />
              Thống kê
            </li>
            <li className={cx('list-link-item')}>
              <img src="https://cdn-icons-png.flaticon.com/128/6463/6463127.png" />
              Mục tiêu
            </li>
            <li className={cx('list-link-item')}>
              <img src="https://cdn-icons-png.flaticon.com/128/3953/3953226.png" />
              Cài đặt
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('center')}>
        <ul className={cx('list-post')}>
          <li className={cx('post-item')}>
            <div className={cx('author')}>
              <div className={cx('author-avatar')}>
                <img src="https://cdn-icons-png.flaticon.com/128/16683/16683419.png" />
              </div>
              <div className={cx('info')}>
                <div className={cx('author-name')}>Chill guy</div>
                <div className={cx('time-published')}>
                  <span>100 years ago</span>
                  <i class="fa-regular fa-earth-asia"></i>
                </div>
              </div>
            </div>
            <div className={cx('post-title')}>Bí kíp trở thành Engineering Manager đỉnh của chóp</div>
            <div className={cx('post-tags')}>
              <div className={cx('list-tag')}>
                <div className={cx('tag')}>Tuyển dụng</div>
                <div className={cx('tag', 'light-purple')}>Giải trí</div>
              </div>
            </div>
            <div className={cx('post-thumbnail')}>
              <img src='https://firebasestorage.googleapis.com/v0/b/ngontumathuat-d946a.appspot.com/o/images%2F268c39b9-4e17-4dc1-a66f-4bf57a1b68c4?alt=media&token=52ef2379-8c5b-481d-b2d2-00f35b0adfa4'/>
            </div>
            <div className={cx('post-content')}>
              Đừng nói nhân viên bỏ việc vì công việc, họ bỏ vì quản lý dở hơi thôi. Đây là chân lý của leadership trong
              giới IT: Quản lý kỹ thuật không phải là thằng code trâu nhất team. Nó là việc tạo ra một môi trường mà ở
              đó mấy thằng code giỏi có thể bung hết skill và cho ra lò những sản phẩm đẳng cấp thế giới. Sau bao năm
              vừa code vừa làm quản lý, tôi đã thấy sự khác biệt giữa team "sống dở chết dở" và team "bung lụa".
            </div>
            <div className={cx('btn-area')}>
              <button className={cx('btn-view')}>Xem thêm</button>
            </div>
          </li>
          <li className={cx('post-item')}>
            <div className={cx('author')}>
              <div className={cx('author-avatar')}>
                <img src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png" />
              </div>
              <div className={cx('info')}>
                <div className={cx('author-name')}>isea</div>
                <div className={cx('time-published')}>
                  <span>100 years ago</span>
                  <i class="fa-regular fa-earth-asia"></i>
                </div>
              </div>
            </div>
            <div className={cx('post-title')}>Bí kíp trở thành Engineering Manager đỉnh của chóp</div>
            <div className={cx('post-tags')}>
              <div className={cx('list-tag')}>
                <div className={cx('tag')}>Tuyển dụng</div>
                <div className={cx('tag', 'green')}>IT</div>
              </div>
            </div>
            <div className={cx('post-thumbnail')}>
              <img src='https://firebasestorage.googleapis.com/v0/b/ngontumathuat-d946a.appspot.com/o/images%2F9b9aee3e-4778-44fa-af67-f5277376955b?alt=media&token=44ec564a-c14d-49ee-93df-ff345694d347'/>
            </div>
            <div className={cx('post-content')}>
              Đừng nói nhân viên bỏ việc vì công việc, họ bỏ vì quản lý dở hơi thôi. Đây là chân lý của leadership trong
              giới IT: Quản lý kỹ thuật không phải là thằng code trâu nhất team. Nó là việc tạo ra một môi trường mà ở
              đó mấy thằng code giỏi có thể bung hết skill và cho ra lò những sản phẩm đẳng cấp thế giới. Sau bao năm
              vừa code vừa làm quản lý, tôi đã thấy sự khác biệt giữa team "sống dở chết dở" và team "bung lụa".
            </div>
            <div className={cx('btn-area')}>
              <button className={cx('btn-view')}>Xem thêm</button>
            </div>
          </li>
        </ul>
      </div>
      <div className={cx('right')}>
        <div className={cx('right-news')}>
          <div className={cx('heading-news')}>Thông tin nổi bật</div>
          <ul className={cx('list-news')}>
            <li className={cx('list-news-item')}>
              <div className={cx('news-item-head')}>
                <img src="https://firebasestorage.googleapis.com/v0/b/ngontumathuat-d946a.appspot.com/o/images%2F268c39b9-4e17-4dc1-a66f-4bf57a1b68c4?alt=media&token=52ef2379-8c5b-481d-b2d2-00f35b0adfa4" />
              </div>
              <div className={cx('news-item-body')}>
                <div className={cx('news-item-title')}>Bí kíp trở thành Engineering Manager đỉnh của chóp IT</div>
                <div className={cx('list-tag')}>
                  <div className={cx('tag')}>Tuyển dụng</div>
                  <div className={cx('tag', 'green')}>IT</div>
                </div>
                <div className={cx('news-item-publish')}>19/12/2024</div>
              </div>
            </li>
            <li className={cx('list-news-item')}>
              <div className={cx('news-item-head')}>
                <img src="https://firebasestorage.googleapis.com/v0/b/ngontumathuat-d946a.appspot.com/o/images%2Fabc5b5b8-93f0-44cd-acf2-090736c318e6?alt=media&token=432d269b-70eb-4b78-af42-d9cf092dae6b" />
              </div>
              <div className={cx('news-item-body')}>
                <div className={cx('news-item-title')}>Bí kíp trở thành Engineering Manager đỉnh của chóp IT</div>
                <div className={cx('list-tag')}>
                  <div className={cx('tag')}>Tuyển dụng</div>
                  <div className={cx('tag', 'light-purple')}>Giải trí</div>
                </div>
                <div className={cx('news-item-publish')}>19/12/2024</div>
              </div>
            </li>
            <li className={cx('list-news-item')}>
              <div className={cx('news-item-head')}>
                <img src="https://firebasestorage.googleapis.com/v0/b/ngontumathuat-d946a.appspot.com/o/images%2F3cf306d4-9964-4089-947a-e11cdd35d82b?alt=media&token=73563923-1a79-4d86-9a9c-854e3ea3cfbe" />
              </div>
              <div className={cx('news-item-body')}>
                <div className={cx('news-item-title')}>Bí kíp trở thành Engineering Manager đỉnh của chóp IT</div>
                <div className={cx('list-tag')}>
                  <div className={cx('tag', 'green')}>IT</div>
                  <div className={cx('tag', 'light-purple')}>Giải trí</div>
                </div>
                <div className={cx('news-item-publish')}>19/12/2024</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
