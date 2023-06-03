import { classNames } from 'shared/lib/className'
import { AppButton } from 'shared/AppButton'
import { useTranslation } from 'react-i18next'
import { ThemeButton } from 'shared/AppButton/ui/AppButton'
import type { FC } from 'react'
export interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { t, i18n } = useTranslation()
  const changeLang = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <AppButton onClick={changeLang} theme={ThemeButton.CLEAR} className={classNames('', {}, [className])}>
      {t('Язык')}
    </AppButton>
  )
}
