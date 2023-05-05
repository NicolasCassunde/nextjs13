export const metadata = {
  title: 'Início',
  description: 'Generated by create next app',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="DashboardContainer">{children}</body>
    </html>
  )
}
