
import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

const cx=classNames.bind(styles)
function AccountItem(){
    return(
        <div className={cx('wrapper')}>
            <img className={cx('avatar')}src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&nonce=57245&refresh_token=e37d3689eff5f95207e7c9f3bd17129f&x-expires=1717416000&x-signature=aUZTLPEs2E0kPY8Dww7EoccKKK0%3D&shp=a5d48078&shcp=81f88b70" alt="Hoaa"/>
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