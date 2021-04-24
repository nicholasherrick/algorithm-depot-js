export default function Header({ header }) {
  return <h1 className='header'>{header ? header : 'Algorithm Depot'}</h1>;
}
