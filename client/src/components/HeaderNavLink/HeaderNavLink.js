import classNames from 'classnames/bind';
import styles from './HeaderNavLink.module.scss';
const cx = classNames.bind(styles);

function HeaderNavLink({ icon, state, tooltip, tooltipContent, tooltipPlace }) {
  return (
    <li className={cx('header-nav-link', { active: state })}>
      {icon}
      {tooltip ? (
        <div className={cx('tooltip', `${tooltipPlace}`)}>
          <div className={cx('tooltip-wrapper')}>{tooltipContent}</div>
        </div>
      ) : (
        ''
      )}
    </li>
  );
}

export default HeaderNavLink;
