import { useTranslation } from 'react-i18next'

function LanguageBtns() {
  const { i18n } = useTranslation()
  const currentLang = i18n.resolvedLanguage || i18n.language || 'en'

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'العربية' },
  ]

  return (
    <div className="flex justify-center gap-2" role="group" aria-label="Language selector">
      {languages.map(({ code, label }) => {
        const isActive = currentLang.startsWith(code)

        return (
          <button
            key={code}
            type="button"
            onClick={() => i18n.changeLanguage(code)}
            aria-pressed={isActive}
            className={`min-h-10 px-3 py-2 border rounded-lg cursor-pointer transition-colors duration-200 ease-in-out focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-[3px] ${
              isActive
                ? 'border-primary text-primary-foreground bg-primary'
                : 'border-border text-foreground bg-surface hover:bg-surface-elevated'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageBtns