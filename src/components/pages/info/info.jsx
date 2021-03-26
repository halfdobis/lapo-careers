import logo from '../../../assets/lapo-logo.png';
import { Link } from 'react-router-dom';
import './info.css';





function Info() {
    return (
        <div className="container">

            <div className="row">
                <div className="col logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>

            <div className="job-header">
                <h3>Front-End JavaScript Engineer</h3>
                <h6>at LAPO <Link to="/">(View all jobs)</Link></h6>
                <p>Full time</p>
            </div>
            <div className="job-texts">
                <p><span>Where You’ll Work</span></p>
                <p>LAPO is a network of technology leaders dedicated to advancing human potential. We help companies build high-performing distributed engineering teams by investing in Africa’s most talented software engineers.</p>
                <p>Based globally and operating remotely, LAPO is catalyzing the growth of tech ecosystems across the African continent while solving the global technical talent shortage.</p>
                <p>LAPO is hiring for a top priority placement at one of the largest financial institutions in the world. Our partner is looking for stable, long-term talent, and as a <span>Front-End JavaScript Engineer</span> you would be playing a key role in building out their new team in Africa.</p>
                <p><span>What You’ll Do</span></p>
                <p>You will be a key player on a global team building out large-scale data privacy tooling, and improving linkage into existing systems and applications. A successful engineer in this role will be comfortable working in large-scale enterprises, while still being able to move quickly and help the team innovate.</p>
                <p>You will be working on a Data Privacy Platform that helps internal teams audit their requests for, storage and handling of, and expiration policies governing the personal information of the firm’s customers. You will help drive compliance with regulations such as GDPR and CCPA. As a front-end engineer, you will work on dashboard visualizations and delivering a user experience so good that it makes teams want to audit their personal information uses for compliance!</p>
                <p>A great candidate will also be committed to a team and consensus-building culture. You enjoy the fact that people are using your code every day and find value in the development work you’re doing. This is supporting a control function and so someone with that mindset is helpful -- you will not only be working on your own team, but will collaborate at many integration points across the organization.</p>
                <p><span>Job Requirements</span></p>
                <ul>
                    <li>Strong JavaScript ES6 software development experience</li>
                    <li>Strong React.js experience</li>
                </ul>
                <p><span>Nice to have:</span></p>
                <ul>
                    <li>Domain expertise or past experience working in privacy/PPI domain.</li>
                    <li>Experience working with GDPR, CCPA compliance data.</li>
                </ul>
                <p><span>What You’ll Get</span></p>
                <ul>
                    <li>Competitive compensation (plus signing bonus)</li>
                    <li>Opportunity to work with the brightest minds inside and outside of your field</li>
                    <li>A chance to change the world for the better.</li>
                </ul>
                <p>We are an equal opportunity employer and value diversity at our company. We do not discriminate on the basis of race, religion, colour, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.</p>
                <Link to='/login'><button type="button" className="button effect01">Apply Now</button></Link>
            </div>



        </div >

    );
}

export default Info;