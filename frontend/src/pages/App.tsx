import { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { Technology, User } from "@common/types";
import TopAppLogo from "@components/TopAppLogo";
import OptionsMenu from "@components/OptionsMenu";
import SearchBar from "@components/SearchBar";
import NoUsers from "@components/NoUsers";
import UserCard from "@components/UserCard";
import LoadUsersButton from "@components/LoadUsersButton";
import Footer from "@components/Footer";
import api from "@services/api";

function App() {
  // User search values
  const [userSearchValue, setUserSearchValue] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);

  const [users, setUsers] = useState<User[] | null>();

  // Load our first page of users on component mount
  useEffect(() => {
    api
      .get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <OptionsMenu
        onTechsChange={(_, techs) => setSelectedTechnologies(techs)}
      />
      <div id="app">
        <TopAppLogo />
        <SearchBar
          onClick={() => {
            // Triggering loading animation
            setUsers(null);
            // Fetching users from the API and setting them
            api
              .get("/users", {
                params: {
                  name: userSearchValue,
                  stack: selectedTechnologies.map((t) => t.id).join(),
                },
              })
              .then((res) => setUsers(res.data))
              .catch((err) => console.log(err));
          }}
          onChange={(e) => {
            setUserSearchValue((e.target as HTMLInputElement).value);
          }}
        />
        <div id="users">
          {/* Check if users is set (!== undefined). If it is not display
              a loading animation. If it is, check if the users object contains
              something. If not, render NoUsers component, otherwise render the
              users cards on the page. */}
          {(users &&
            (users.length > 0 ? (
              users.map((user) => <UserCard key={user.id} {...user} />)
            ) : (
              <NoUsers />
            ))) || <CircularProgress size={50} />}
          {/* Check if the total users is divisible per 10 (page size).
              If it is, we can try to load another page of users on the API */}
          <div className="load-users-break"></div>
          {users && users.length % 10 === 0 && users.length > 0 && (
            <LoadUsersButton
              onClick={() => {
                api
                  .get("/users", {
                    params: {
                      name: userSearchValue,
                      stack: selectedTechnologies.map((t) => t.id).join(),
                      page: users!.length / 10,
                    },
                  })
                  .then((res) => setUsers(users!.concat(res.data)))
                  .catch((err) => console.log(err));
              }}
            />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
