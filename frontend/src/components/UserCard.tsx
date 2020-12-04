import { User } from '../common/types';

function UserCard(props: User) {
  return (
    <div className="user-card">
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
          props.stack.map(tech => {
            return (
              <div
                key={tech.id}
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
