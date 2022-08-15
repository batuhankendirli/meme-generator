import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src="../../public/troll-face.png"
          alt="Troll face"
          className="header-logo-img"
        />
        <h2 className="header-logo-text">Meme Generator</h2>
      </div>
      <p className="header-text">Facebook edition xd</p>
    </header>
  );
}
