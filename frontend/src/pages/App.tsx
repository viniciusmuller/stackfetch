import { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Technology, User } from '../common/types';
import TopAppLogo from '../components/TopAppLogo';
import OptionsMenu from '../components/OptionsMenu';
import SearchBar from '../components/SearchBar';
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
      // TODO paginate users backwards here
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
          {users ? users.map(user => <UserCard key={user.id} {...user} />)
                 : <CircularProgress size={50} /> }
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
