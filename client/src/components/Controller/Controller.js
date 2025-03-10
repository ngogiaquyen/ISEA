import classNames from 'classnames/bind';
import styles from './Controller.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Controller({ addUrl }) {
    
  return (
    <div className={cx('wrapper')}>
      <Button title="Thêm" icon={<FontAwesomeIcon icon={faAdd}/>}  to={addUrl} />
      {/* <Button title="Sửa" icon={<FontAwesomeIcon icon={faAdd}/>}/>
        <Button title="Xóa" icon={<FontAwesomeIcon icon={faAdd}/>}/> */}
    </div>
  );
}

export default Controller;
