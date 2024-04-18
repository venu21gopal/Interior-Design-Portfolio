import React, { useState, useEffect } from 'react';
import Select from "react-dropdown-select";
import './contact.css';
import logo from '../images/21.jpg';

export const Contact = () => {
  const options = [
    { id: "Dining Room", name: 1 },
    { id: "Living Room", name: 2 },
    { id: "Bed Room", name: 3 },
    { id: "Rest Room", name: 4 },
    { id: "others", name: 5 },
  ];

  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [lastname, setlastname] = useState('');
  const [subject, setsubject] = useState('');
  const [selectedOption, setSelectedOption] = useState([]);
  const [otherInputValue, setOtherInputValue] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlename = (e) => {
    setname(e.target.value);
  };

  const handlelastname = (e) => {
    setlastname(e.target.value);
  };

  const handlephone = (e) => {
    setphone(e.target.value);
  };

  const handleemail = (e) => {
    setemail(e.target.value);
  };

  const handlesubject = (e) => {
    setsubject(e.target.value);
  };

  const handleSelectChange = (values) => {
    setSelectedOption(values);
    setShowOtherInput(values.some((option) => option.name === 5));
  };

  const handleOtherInputChange = (event) => {
    setOtherInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validation checks
    if (!name || !lastname || !phone || !email || !subject || selectedOption.length === 0) {
      alert("Please fill in all the required fields.");
      return;
    }
  
    // Additional validation for email and phone
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (phone.length < 10) {
      alert("Please enter a valid phone number ");
      return;
    }
  
    const data = {
      name: name,
      lastname: lastname,
      phone: phone,
      email: email,
      subject: subject,
      selectedOption: selectedOption,
      otherInputValue: otherInputValue,
    };
  
    sendMessage(data)
      .then(() => {
        setFormSubmitted(true);
        setname('');
        setlastname('');
        setphone('');
        setemail('');
        setsubject('');
        setSelectedOption([]);
        setOtherInputValue('');
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };
  

  const sendMessage = (data) => {
    const telegram_bot_id = "6842918561:AAFl7B0FGc3E8dNIAzKc_GqxXh-dEZjevO0";
    const chat_id = 735882285;
    const selectedRooms = data.selectedOption.map((option) => option.id);
    const message = `Name: ${data.name}\nLastname: ${data.lastname}\nPhone Number: ${data.phone}\nEmail: ${data.email}\nSelected rooms: ${selectedRooms.join(', ')}\nOthers: ${data.otherInputValue}`;

    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: message,
      }),
    };

    return new Promise((resolve, reject) => {
      fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, settings)
        .then((response) => {
          console.log(response);
          resolve();
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  };

  useEffect(() => {
    if (formSubmitted) {
      alert("Form submitted successfully!"); // You can replace this with your desired UI element or redirection logic
      setFormSubmitted(false); // Reset the form submission state
    }
  }, [formSubmitted]);

  return (
    <div>
      <div className='form-padding'>
        <form className="form-Contact">
          <div className="flex">
            <label>
              <input
                required=""
                onChange={handlename}
                placeholder="Firstname"
                type="text"
                className="input"
                value={name}
              />
            </label>

            <label>
              <input
                required=""
                onChange={handlelastname}
                placeholder="Lastname"
                type="text"
                className="input"
                value={lastname}
              />
            </label>
          </div>

          <label>
            <input
              required=""
              onChange={handlephone}
              placeholder="Phone Number"
              type="text"
              className="input"
              value={phone}
            />
          </label>

          <label>
            <input
              required=""
              onChange={handleemail}
              placeholder="Email"
              type="text"
              value={email}
              className="input"
            />
          </label>

          <label>
            <div className='d-flex justify-content-center mt-6'>
              <div className='w-100 '>
                <Select
                  className="input"
                  value={selectedOption}
                  options={options}
                  labelField="id"
                  valueField="name"
                  multi
                  onChange={handleSelectChange}
                />
              </div>
            </div>
          </label>

          {showOtherInput && (
            <label htmlFor="otherSpecify">
              <input
                type="text"
                id="otherSpecify"
                name="otherSpecify"
                value={otherInputValue}
                onChange={handleOtherInputChange}
                className="input"
                placeholder='Please Specify'
                required=""
              />
            </label>
          )}

          <label>
            <input
              required=""
              onChange={handlesubject}
              placeholder="Subject"
              type="password"
              className="input"
              value={subject}
            />
          </label>

          <button className="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </div>

      <footer className="footer">
  	 <div className="container">
  	 	<div className="row">
        
            <img src={logo} alt='logo' className='fotterlogo'/>
     
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				
  	 			</ul>
  	 		</div>


  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
  );
};
