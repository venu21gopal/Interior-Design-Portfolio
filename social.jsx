import React, { useState } from 'react';
import './social.css';

const Social = () => {
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackButtonClick = () => {
    setFeedbackVisible(true);
  };

  const handleCloseFeedbackClick = () => {
    setFeedbackVisible(false);
  };

  const handleSendFeedbackClick = () => {
    setFeedbackText('');
  };

  const handleTextareaChange = (e) => {
    setFeedbackText(e.target.value);
  };

  const recipientPhoneNumber = "9704132323";
  const message = "Hello, this is my message!";
  const encodedMessage = encodeURIComponent(message);

  const handleWhatsappButtonClick = () => {
    const whatsappUrl = `https://wa.me/${recipientPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <div className="icon-bar" style={{ zIndex: 9999 }}>
      <a href="tel:555-555-5555" type='tel' className="Phone d-sm-block d-md-none" target="_blank"><i class="fa fa-phone" aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/profile.php?id=61553756799141" className="facebook" target="_blank"><i className="fa fa-facebook"></i></a>
        <a href="#" className="whatsapp" target="_blank" onClick={handleWhatsappButtonClick}><i className="fa fa-whatsapp"></i></a>
        <a href="https://www.youtube.com/channel/UCRPNmhH4jQXkwdoL6jlwUeQ" className="youtube" target="_blank"><i className="fa fa-youtube"></i></a>
        <a href="https://www.instagram.com/nuestyleinteriors/" className="instagram" target="_blank"><i className="fa fa-instagram"></i></a>
        <a href="https://in.pinterest.com/nuestyleinteriors/" className="pinterest" target="_blank"><i class="fa-brands fa-pinterest fa-beat" style={{color: "white"}}></i></a>
      </div>
    </div>
  );
};

export default Social;



