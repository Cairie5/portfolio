import React from 'react';

const Header = () => {
  return (
    <header>
        <img src="/profile.jpeg" alt="Profile" className="profile-img" />
      <h1>Patience Wangari Muraguri</h1>
      <p>Proactive BSc Computer Science Student</p>
      <nav>
        <a href="#profile">Profile</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
