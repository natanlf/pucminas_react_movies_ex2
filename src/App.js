import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet/>
    </>
  )
}
