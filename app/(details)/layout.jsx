
import '../globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <div className="bg-[#f5f7f8] h-full">
          {children}
          </div>
      </body>
    </html>
  );
}
