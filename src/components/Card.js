import React from 'react'

const Card = ({list}) => {
    return (
      <div className="card">
        <div className="card-inner">
          <div className="card-profile-photo">
            <img
              src={`${process.env.PUBLIC_URL}/thumbnails/001.png`}
              alt="profile"
            />
          </div>
          <div className="card-profile-info">
            <div className="card-profile-name">{`Name: ${list.name.english}`}</div>
            <div className="card-profile-type">{`Type: ${list.type}` }</div>
          </div>
        </div>
      </div>
    );
}

export default Card
