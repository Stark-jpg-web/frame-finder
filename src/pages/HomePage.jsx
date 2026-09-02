import { useTranslation } from 'react-i18next'
import LanguageBtns from "../components/testing/LanguageBtns"

function HomePage() {
  const { t } = useTranslation()

  return (
    <main className='bg-background text-white h-screen'>
<h1 class>{t('app.name')}</h1>
<p className=''>{t('app.tagline')}</p>

      <LanguageBtns />
    </main>
  )
}

export default HomePage
