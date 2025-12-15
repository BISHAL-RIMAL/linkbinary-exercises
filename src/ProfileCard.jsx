import React from 'react';
function ProfileCard({name,title,address}){
    return (
        <div className="profile-card">
            <h1>{name}</h1>
            <h2>{title}</h2>
            <h2>{address}</h2>
        </div>
    );
}
export default ProfileCard;