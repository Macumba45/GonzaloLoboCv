import type { Metadata, Viewport } from 'next'
import { Schibsted_Grotesk } from 'next/font/google'
import { notFound } from 'next/navigation'
import { dict, isLocale, locales } from '@/content'
import '../globals.css'

const grotesk = Schibsted_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  display: 'swap',
  variable: '--font-grotesk',
})

const SITE = 'https://gonzalolobocv.vercel.app'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const t = dict[lang].meta
  return {
    metadataBase: new URL(SITE),
    title: t.title,
    description: t.description,
    alternates: { canonical: `/${lang}`, languages: { es: '/es', en: '/en' } },
    icons: { icon: '/favicon.png' },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${lang}`,
      siteName: 'Gonzalo Lobo',
      locale: lang === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
      images: [{ url: '/gonzalo.webp', width: 900, height: 1047, alt: 'Gonzalo Lobo' }],
    },
  }
}

export const viewport: Viewport = { themeColor: '#13294B' }

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  return (
    <html lang={lang} className={grotesk.variable}>
      <body>{children}</body>
    </html>
  )
}
