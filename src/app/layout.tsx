 /* se crea globalmente esta y se importa desde los layouts que es para todos */

 /* los layouts nos sirven para complementar la estructura a nivel de maquetación  */
 import "./global.css"

export const metadata = {
  title: 'kemtch Practice',
  description: 'i found you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>cabecera de la app</header>
        <main>
          {children}
        </main>
        <footer>pie de página</footer>
      </body> {/* es el componente hijo que recibe lo que hay en el archivo page de cada ruta lo que se manda desde el export y acá se importa  */}
    </html>
  )
}
