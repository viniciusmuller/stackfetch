import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import OptionsMenu from '../components/OptionsMenu';
import UserCard from '../components/UserCard';
import Footer from '../components/Footer';
import { ReactComponent as AppLogo } from '../assets/svg/appLogo.svg';

const user = {
  name: 'Vinícius Müller',
  age: 16,
  about: 'eu so mo top mano',
  gitHubUsername: 'arcticlimer',
  technologies: [
    {
      name: 'Python',
      color: '#3E7BAC'
    },
    {
      name: 'Elixir',
      color: '#6B5375'
    },
    {
      name: 'Typescript',
      color: '#2F74C0'
    }
  ]
}

function App() {
  return (
    <>
      <OptionsMenu />
      <div id="app">

        <div id="logo-wrapper">
          <Link to="/">
            <AppLogo className="main-app-logo" />
          </Link>
        </div>

        <div id="search">
          <TextField
            type="text"
            className="search-users-input"
            placeholder="Search for some cool people..."
          />
          <Button className="search-button">
            <FaSearch size="1.4rem" />
          </Button>
        </div>

        <div id="users">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => {
              return (
                <UserCard
                  key={i.toString()}
                  {...user}
                />
              );
            })
          }
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;