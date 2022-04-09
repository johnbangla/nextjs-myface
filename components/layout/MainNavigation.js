import Link from 'next/link';

import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Face</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Faces</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Face</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
