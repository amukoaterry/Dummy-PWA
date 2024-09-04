import React, { useState, useEffect } from 'react';
// import React from 'react';
import './BhetaSolutions.css'; 

const BhetaSolutions = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);


  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the prompt');
        } else {
          console.log('User dismissed the prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };
  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <div className="bheta-container">
      <div className="header-section">
        <h1>We are Bheta Solutions</h1>
        <p>
          Bheta Solution by Taji team is dedicated to safeguarding consumers in Kenya from recalled medications.
          The app delivers real-time alerts and comprehensive details on drug recalls, including manufacturer
          information, recall dates, and reasons for recalls, empowering users to make informed health decisions
          and combating the threat of recalled drugs.
        </p>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="features">
          <div className="feature">
            <h3>Pharmacy Finder</h3>
            <p>We help consumers to make the right decision on which pharmacy is licensed for buying drugs.</p>
          </div>
          <div className="feature">
            <h3>Scan</h3>
            <p>We help consumers to identify if the drug is recalled or not. So as to ensure our consumers health is safe.</p>
          </div>
        </div>
      </div>
      {deferredPrompt && (
        <button className="install-button" onClick={handleInstallClick}>
          Install App
        </button>
      )}
    </div>
  );
};

export default BhetaSolutions;
