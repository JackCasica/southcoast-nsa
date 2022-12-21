import { Header } from "../components/Header";

import "../styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children /* page.jsx */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
