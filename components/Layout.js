import Head from 'next/head';
import Navbar from './Navbar';
import Header from './Header';

export default function Layout({ children, title, header }) {
  return (
    <div>
      <Head>
        <title>
          {title ? `${title} | Algorithm Depot` : 'Algorithm Depot'}
        </title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/stackoverflow-dark.min.css'
          integrity='sha512-9F4w40pQJloG92QgszKGVFODKAkZ70xtcDe2IPcVELXMmkxkojfL6jcP6XSf1NTf4yVc3K0T9h/0gPp8bVIn6w=='
          crossOrigin='anonymous'
        />
      </Head>
      <Navbar />
      <div className='container'>
        <Header header={header ? header : null} />
        {children}
      </div>
    </div>
  );
}
