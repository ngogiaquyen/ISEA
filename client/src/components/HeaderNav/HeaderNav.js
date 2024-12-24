import classNames from 'classnames/bind';
import styles from './HeaderNav.module.scss';
import HeaderNavLink from '../HeaderNavLink/HeaderNavLink';
const cx = classNames.bind(styles);

function HeaderNav({ objNav }) {
  return (
    <ul className={cx('header-nav')}>
      {objNav.map((nav, index) => {
        return (
          <HeaderNavLink
            key={index}
            icon={nav.icon}
            state={nav.state}
            tooltip={nav.tooltip}
            tooltipContent={nav.tooltipContent}
            tooltipPlace={nav.tooltipPlace}
            link={nav.link}
          />
        );
      })}
    </ul>
  );
}

export default HeaderNav;
