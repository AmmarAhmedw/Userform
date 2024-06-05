import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './index.css';
import human from '../images/human.webp'
const UserProfile = () => {
  const defaultImage =human; // Replace with your default image path

  const [profileImage, setProfileImage] = useState(defaultImage);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [teamRole, setTeamRole] = useState(' ');
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Basic image validation (optional)
    if (!file || !file.type.startsWith('image/')) {
      alert('Please select a valid image file (JPEG, PNG, etc.).');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleSave = () => {
    console.log({
      profileImage,
      firstName,
      lastName,
      email,
      phone,
      teamRole,
    });
  };
  return (
    <div className="user-profile">
      <h2 >User Profile</h2>
      <p>This is information about you, you can change your information here.</p>
      <hr />
      <div className="profile-container">
        <div className="profile-image">
        <img
            src={profileImage}
            alt="Profile"
            className={profileImage.startsWith('data:') ? '' : './man.png'} />
          <input type="file" accept="image/*" id="fileUpload" onChange={handleImageUpload} />
          <label htmlFor="fileUpload" className="upload-button">Upload</label>
          <p>Max Size 600x600px</p>
        </div>
        <div className="form-container">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <PhoneInput country={'us'} value={phone} onChange={setPhone} />
          </div>
          <div className="form-group full-width">
            <label>Team Role</label>
            <input
              type="text"
              value={teamRole}
              onChange={(e) => setTeamRole(e.target.value)}
            />
          </div>
          <div className="button-container">
            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
