import classNames from "classnames/bind"
import styles from './SideBar.module.scss'

const cx=classNames.bind(styles)

function SideBar(){
    return (
    <aside className={cx('wraper')}>
        <h2>Sidebar</h2>
    </aside>
    )
}
export default SideBar