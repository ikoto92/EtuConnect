// ProfilePhoto.js
import React, { useState } from "react";
import "./HomePage.css";

const ProfilePhoto = () => {
  const [photo, setPhoto] = useState("https://i.pravatar.cc/100");

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
  };

  return (
    <div className="profile-section">
      <img src={photo} alt="Profil" className="profile-avatar" />
      <label htmlFor="photo-upload" className="photo-upload-btn">
        📸 Changer
      </label>
      <input
        type="file"
        id="photo-upload"
        accept="image/*"
        onChange={handlePhotoChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ProfilePhoto;
