import { classNames } from 'shared/lib/className'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type FC } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red'
}

export interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, theme = AppLinkTheme.PRIMARY, children, to, ...other } = props

  return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...other}>
            {children}
        </Link>
  )
}
