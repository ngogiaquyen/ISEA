import classNames from 'classnames/bind';
import styles from './HeaderNavLink.module.scss';
import config from '~/config';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function HeaderNavLink({ icon, state, tooltip, tooltipContent, tooltipPlace, link }) {
  return (
    <NavLink to={link} className={cx('header-nav-link', { active: state })}>
      {icon}
      {tooltip ? (
        <div className={cx('tooltip', `${tooltipPlace}`)}>
          <div className={cx('tooltip-wrapper')}>{tooltipContent}</div>
        </div>
      ) : (
        ''
      )}
    </NavLink>
  );
}

export default HeaderNavLink;
