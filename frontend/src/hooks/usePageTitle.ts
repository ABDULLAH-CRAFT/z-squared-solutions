import { useEffect } from 'react'
import { site } from '@/config/site'

/** Sets the document title for the current route. Pass nothing for the default home title. */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${site.name}`
      : `${site.name} | Lead Generation, Recruitment and Sales Development`
  }, [title])
}
