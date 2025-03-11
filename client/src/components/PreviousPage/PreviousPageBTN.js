import classNames from 'classnames/bind';
import styles from './PreviousPageBTN.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function PreviousPageBTN() {
  const navigate = useNavigate();
  return <FontAwesomeIcon className={cx('previous-icon')} icon={faAngleLeft} onClick={() => navigate(-1)} />;
}

export default PreviousPageBTN;
