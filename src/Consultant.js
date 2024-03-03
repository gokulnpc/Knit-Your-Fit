// Consultant.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Consultant.css';

const Consultant = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        "What types of occasions do you typically dress up for?": '',
        "What types of stores do you typically shop at for clothing?": '',
        "How often do you purchase new clothes?": '',
        "What is your typical budget for clothing?": '',
        "What are your biggest frustrations when shopping for clothes?": '',
        "What would be most helpful to you when selecting clothing?": ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, such as sending data to an API
        console.log(formData);
        // Reset the form after submission
        setFormData({
            "What types of occasions do you typically dress up for?": '',
            "What types of stores do you typically shop at for clothing?": '',
            "How often do you purchase new clothes?": '',
            "What is your typical budget for clothing?": '',
            "What are your biggest frustrations when shopping for clothes?": '',
            "What would be most helpful to you when selecting clothing?": ''
        });
    };

    return (
        <div className="consultant-container">
            <h1>Image Consultant Form</h1>
            <form onSubmit={handleSubmit} className="consultant-form">
                {Object.keys(formData).map((key) => (
                    <div key={key} className="form-group">
                        <label htmlFor={key}>
                            {key.split(/(?=[A-Z])/).join(" ").toLowerCase()}
                        </label>
                        <input
                            id={key}
                            type="text"
                            name={key}
                            value={formData[key]}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                ))}
                <div className="form-actions">
                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                    <button type="button" className="back-button" onClick={() => navigate('/')}>
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Consultant;
