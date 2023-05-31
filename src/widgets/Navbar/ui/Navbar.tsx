import { classNames } from 'shared/lib/className'
import cls from './Navbar.module.scss'
import { useTheme } from 'App/provider/ThemeProvider'
import { AppLink, AppLinkTheme } from 'shared/AppLink/ui/AppLink'


export interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={cls.mainLink}>about</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/main'}>Main</AppLink>
            </div>
        </div>
    )
}