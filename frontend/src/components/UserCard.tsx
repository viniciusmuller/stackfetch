interface Technology {
  name: string;
  color: string;
}

interface User {
  name: string;
  age: number;
  about: string;
  gitHubUsername: string;
  technologies: Technology[];
}

function UserCard(props: User) {
  return (
    <div className="user">
      <img
        src={`https://avatars.githubusercontent.com/${props.gitHubUsername}`}
        className="gh-profile-pic"
        alt={props.name}
      />
      <p className="user-name">
        {props.name}
      </p>
      <div className="user-stack">
        {
          props.technologies.map((tech, i) => {
            return (
              <div
                key={i.toString()}
                className="user-technology"
                style={{
                  border: `0.15rem solid ${tech.color}`,
                  color: tech.color
                }}
              >
                {tech.name}
              </div>
            );
          })
        }
      </div>
      <div className="gh-profile">
        <a
          href={`https://github.com/${props.gitHubUsername}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          {props.gitHubUsername}
        </a>
      </div>
    </div>
  );
}

export default UserCard;
