import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { MainNav } from '@/components/main-nav'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cyberdogs - Professional Security Services',
  description: 'Comprehensive vulnerability assessments and security services for organizations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <MainNav />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

