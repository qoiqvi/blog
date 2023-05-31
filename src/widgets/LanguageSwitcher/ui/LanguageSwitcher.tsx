import { classNames } from 'shared/lib/className'
import cls from './LanguageSwitcher.module.scss'
import { AppButton } from 'shared/AppButton'
import { useTranslation } from 'react-i18next'
import { ThemeButton } from 'shared/AppButton/ui/AppButton'
export interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation()
    const changeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <AppButton onClick={changeLang} theme={ThemeButton.CLEAR} className={classNames(cls.LanguageSwitcher, {}, [className])}>
            {t('Язык')}
        </AppButton>
    )
}