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
      </Head>
      <Navbar />
      <div className='container'>
        <Header header={header ? header : null} />
        {children}
      </div>
    </div>
  );
}
