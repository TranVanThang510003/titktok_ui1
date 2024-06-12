
import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

const cx=classNames.bind(styles)
function AccountItem(){
    return(
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}src="https://symbols.vn/wp-content/uploads/2021/12/Xem-them-hinh-dai-dien-avt-chibi-cho-con-trai.png" alt="Hoaa"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tran Van Thang</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}/>
                 </h4>
                <span className={cx('username')}>tranvanthang</span>
            </div>
        </div>
    )
}
export default AccountItem