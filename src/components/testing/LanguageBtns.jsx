import { useTranslation } from 'react-i18next'

function LanguageBtns() {
  const { i18n } = useTranslation()
  const currentLang = i18n.resolvedLanguage || i18n.language || 'en'

  const languages = [
    { code: 'en', label: 'English', tag: 'EN' },
    { code: 'ar', label: 'العربية', tag: 'AR' },
  ]

  return (
    <div
      className="inline-flex items-center gap-1 p-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 shadow-xl shadow-black/40 backdrop-blur-md transition-all"
      role="group"
      aria-label="Language selector"
    >
      {/* Globe Icon */}
      <div className="flex items-center justify-center pl-2 pr-1 text-neutral-400" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-neutral-400 transition-colors"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      </div>

      {/* Language Buttons */}
      <div className="flex items-center gap-1">
        {languages.map(({ code, label, tag }) => {
          const isActive = currentLang.startsWith(code)

          return (
            <button
              key={code}
              type="button"
              onClick={() => i18n.changeLanguage(code)}
              aria-pressed={isActive}
              className={`
                relative px-3.5 py-1.5 text-xs font-medium rounded-full cursor-pointer
                transition-all duration-200 ease-out select-none
                focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950
                ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-md shadow-violet-500/25 scale-[1.02]'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/70 active:scale-95'
                }
              `}
            >
              <span className="flex items-center gap-1.5">
                <span>{label}</span>
                <span
                  className={`text-[10px] tracking-wider uppercase px-1.5 py-0.5 rounded-full font-mono transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white font-bold'
                      : 'bg-neutral-800/80 text-neutral-400'
                  }`}
                >
                  {tag}
                </span>
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default LanguageBtns