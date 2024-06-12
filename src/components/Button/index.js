import classNames from "classnames/bind";
import styles from './Button.module.scss'
import { Link } from "react-router-dom";
const cx = classNames.bind(styles)

function Button({
    to, 
    href,
    primary=false,
    outLine=false,
    text=false, 
    small=false,
    medium=false, 
    large=false, 
    disable=false,
    rounded=false,
    leftIcon=false,
    rightIcon=false,
    children, 
    className,
    onClick}, ...passProps){
    let Comp ='button';
    const props={
        onClick,
        
        ...passProps
    };
    // remove event listener when button is disable
    if(disable){
        Object.keys(props).forEach(key=>{
           if(key.startsWith('on')&& typeof props[key]==='function'){
            delete props[key];
           }
        })
    }

    if(to){
        props.to=to
        Comp = Link
    }else if(href){
        props.href=href
        Comp ='a'
    }
    const classes= cx('wrapper',{
        primary,
        outLine,
        small,
        medium,
        large,
        text,
        disable,
        rounded,
        [className]:className,//tao class de custom rieng
    })

    return (
        <Comp className={classes}{...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                  <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
export default Button;