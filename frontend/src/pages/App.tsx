import { useState } from 'react';

import TopAppLogo from '../components/TopAppLogo';
import OptionsMenu from '../components/OptionsMenu';
import Search from '../components/Search';
import UserCard from '../components/UserCard';
import Footer from '../components/Footer';

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
  const [userValue, setUserValue] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState(['']);

  // TODO finish backend filter API and consume it here

  function search() {
    console.log(userValue);
    console.log(selectedTechnologies);
  }

  function alo(e: React.ChangeEvent) {
    setUserValue((e.target as HTMLInputElement).value);
  }

  function epa(_: any, technologies: string[]) {
    setSelectedTechnologies(technologies);
  }

  return (
    <>
      <OptionsMenu onChange={epa}/>

      <div id="app">
        <TopAppLogo />
        <Search
          onClick={search}
          onChange={alo}
        />
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