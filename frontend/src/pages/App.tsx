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
  const [userSearchValue, setUserSearchValue] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>();

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
            console.log(selectedTechnologies, userSearchValue);
            // TODO fetch API here
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
