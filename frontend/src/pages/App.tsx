import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Technology, User } from '../common/types';
import TopAppLogo from '../components/TopAppLogo';
import OptionsMenu from '../components/OptionsMenu';
import SearchBar from '../components/SearchBar';
import NoUsers from '../components/NoUsers';
import UserCard from '../components/UserCard';
import Footer from '../components/Footer';
import api from '../services/api';

function App() {
  // User search values
  const [userSearchValue, setUserSearchValue] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

  // Page content values
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    api.get('/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <OptionsMenu onTechsChange={(_, techs) => setSelectedTechnologies(techs)}/>
      <div id="app">
        <TopAppLogo />
        <SearchBar
          onClick={() => {
            // TODO fetch API here
            setTimeout(() => {
              let search = {
                username: userSearchValue,
                stack: selectedTechnologies.map(t => t.id)
              }
              console.log(search);
            }, 1000);
          }}
          onChange={e => {
            setUserSearchValue((e.target as HTMLInputElement).value)
          }}
        />
        <div id="users">
          {/* Check if users is set (!== undefined). If it is not display
              a loading animation. If it is, check if the users object contains
              something. If not, render NoUsers component, otherwise render the
              users cards on the page. */}
          {(users
            && (users.length > 0
            ? users.map(user => <UserCard key={user.id} {...user} />)
            : <NoUsers />)
          ) || <CircularProgress size={50} />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
