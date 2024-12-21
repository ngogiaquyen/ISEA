import classNames from 'classnames/bind';
import styles from './HomePanelItem.module.scss';

const cx = classNames.bind(styles);

function HomePanelItem({ src, content }) {
  return (
    <li className={cx('list-link-item')}>
      <img src={src} alt="" />
      {content}
    </li>
  );
}

export default HomePanelItem;
