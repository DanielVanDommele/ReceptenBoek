import { EditModeContextProvider, SelectedRecipeContextProvider } from './provider.tsx'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SelectedRecipeContextProvider>
            <EditModeContextProvider>
               {children}
            </EditModeContextProvider>
        </SelectedRecipeContextProvider>
      </body>
    </html>
  )
}