import React from 'react';
import '../pages/style/cardImage.css';
import ProfilePhoto from '../assets/dumImages/Alvin.jpg';

function ProfilePic() {
  return (
    <div className="profile-flip-container">
      <div className="profile-flip-inner">
        {/* Depan */}
        <div className="profile-flip-front">
          <img
            src={ProfilePhoto}
            alt="Profile"
            className="profile-photo img-fluid"
          />
        </div>

        {/* Belakang */}
        <div className="profile-flip-back d-flex flex-column justify-content-between text-white text-center">
          <div className="flex-grow-1 d-flex align-items-center justify-content-center">
            <h4 className="mb-0">Alvin Rikardo</h4>
          </div>

          <div className="social-icons py-3">
            <a href="https://github.com/Richardo33" target="_blank" rel="noopener noreferrer" className="text-white mx-2 fs-4">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/alvin-rikardo/" target="_blank" rel="noopener noreferrer" className="text-white mx-2 fs-4">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:alvinrikardo6@gmail.com" className="text-white mx-2 fs-4">
              <i className="bi bi-envelope"></i>
            </a>
            <a href="https://wa.me/6281993218599" target="_blank" rel="noopener noreferrer" className="text-white mx-2 fs-4">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="https://www.instagram.com/richardo_alvin?igsh=bnZ1YXFmZTAybG9j" target="_blank" rel="noopener noreferrer" className="text-white mx-2 fs-4">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePic;
