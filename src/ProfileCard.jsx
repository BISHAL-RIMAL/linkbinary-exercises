import React from 'react';
function ProfileCard({name,title}){
    return (
        <div className="profile-card">
            <h1>{name}</h1>
            <h2>{title}</h2>
        </div>
    );
}
export default ProfileCard;