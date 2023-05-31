import { classNames } from 'shared/lib/className'
import cls from './Sidebar.module.scss'
import { type FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

export interface SidebarProps {
  className?: string
}

export const Sidebar: FC = ({ className }: SidebarProps) => {
  const [collapsed, setCollaped] = useState<boolean>(false)
  const onToggle = () => {
    setCollaped(!collapsed)
  }
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>TOGGLE</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={cls.lang} />
      </div>

    </div>
  )
}
