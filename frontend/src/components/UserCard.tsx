import { useState } from 'react';

import { User } from '@common/types';

function UserCard(props: User) {
  const [flipped, setFlipped] = useState(false);

  const { name, age, about, gitHubUsername, stack } = props;
  let { registeredAt } = props;

  registeredAt = new Date(registeredAt).toLocaleString('en', {
    timeZone: 'UTC',
    hour12: false,
  });

  const flip = () => setFlipped(!flipped);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={flip}
      onKeyDown={flip}
      className={`user-card ${flipped ? 'flipped' : ''}`}
    >
      <div className="card-wrapper">
        <div className="front face">
          <img
            src={`https://avatars.githubusercontent.com/${gitHubUsername}`}
            className="gh-profile-pic"
            alt={name}
          />
          <p className="user-name">{name}</p>
          <div className="user-stack">
            {stack.map((tech) => {
              return (
                <div
                  key={tech.id}
                  className="user-technology"
                  style={{
                    border: `0.15rem solid ${tech.color}`,
                    color: tech.color,
                  }}
                >
                  {tech.name}
                </div>
              );
            })}
          </div>
          <div className="gh-profile">
            <a
              href={`https://github.com/${gitHubUsername}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {gitHubUsername}
            </a>
          </div>
        </div>
        <div className="back face">
          <p className="user-name">{name}</p>
          <p className="user-age">{age} years</p>
          <p className="user-about">{about}</p>
          <br />
          <p className="user-join-date">Registered at {registeredAt}.</p>
        </div>{' '}
        {/* Card back */}
      </div>{' '}
      {/* Card wrapper */}
    </div>
  );
}

export default UserCard;
