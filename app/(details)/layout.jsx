import '../globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        <div className="bg-[#f5f7f8] min-h-screen h-fit">
          {children}
          </div>
      </body>
    </html>
  );
}
