import { useState } from "react";
import logo from '../../../assets/lapo-logo.png';
import './form.css';
import Contact from './contact';
import Resume from './resume';
import Experience from './experience';
import Education from './education';
import Additional from './additional';





function Form() {
    const [contactFilled, shouldFillContact] = useState(false);
    const [experienceFilled, shouldFillExperience] = useState(false);
    const [educationFilled, shouldFillEducation] = useState(false);
    return (
        <div className="container">

            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="home-box">
                <h3>Instructions:</h3>
                <p>Before you fill out the form below, this platform is for Graduates and IT students only. If you are neither, you can check out our other platforms.</p>
            </div>

            <div className="quiz-box">
                <Resume />
                <Contact fillContact={shouldFillContact} />
                <Experience fillExperience={shouldFillExperience} />
                <Education fillEducation={shouldFillEducation} />
                <Additional />
            </div>

            {
                (contactFilled && experienceFilled && educationFilled) && <button type="button" className="next-question-btn">Submit</button>
            }




        </div>

    );
}

export default Form;