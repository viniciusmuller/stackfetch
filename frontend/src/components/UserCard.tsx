import { useState } from "react";

import { User } from "../common/types";

function UserCard(props: User) {
  const [flipped, setFlipped] = useState(false);

  const registeredAt = new Date(props.registeredAt).toLocaleString("en", {
    timeZone: "UTC",
    hour12: false,
  });

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className={`user-card ${flipped ? "flipped" : ""}`}
    >
      <div className="card-wrapper">
        <div className="front face">
          <img
            src={`https://avatars.githubusercontent.com/${props.gitHubUsername}`}
            className="gh-profile-pic"
            alt={props.name}
          />
          <p className="user-name">{props.name}</p>
          <div className="user-stack">
            {props.stack.map((tech) => {
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
              href={`https://github.com/${props.gitHubUsername}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.gitHubUsername}
            </a>
          </div>
        </div>
        <div className="back face">
          <p className="user-name">{props.name}</p>
          <p className="user-age">{props.age} years</p>
          <p className="user-about">{props.about}</p>
          <br />
          <p className="user-join-date">Registered at {registeredAt}.</p>
        </div>{" "}
        {/* Card back */}
      </div>{" "}
      {/* Card wrapper */}
    </div>
  );
}

export default UserCard;
