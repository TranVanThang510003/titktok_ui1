
import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss'
import SideBar from "./SideBar";

const cx= classNames.bind(styles)
function DefaultLayout({children}){
    return (

      <div className={cx('wraper')}>
            <Header/>
            <div className={cx('container')}>
                <SideBar/>
                <div className={cx('content"')}>
                    {children}
                </div>
    
            </div>
      </div>
    )
}
export default DefaultLayout