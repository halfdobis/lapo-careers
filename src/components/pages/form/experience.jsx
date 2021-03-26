import { useState } from "react";




function Experience({ fillExperience }) {
    const [experience, setExperience] = useState({
        company_name: {
            value: "",
            isValidated: false
        },
        job_title: {
            value: "",
            isValidated: false 
        },
        first_month: {
            value: "Start Month",
            isValidated: false
        },
        first_year: {
            value: "",
            isValidated: false
        },
        end_month: {
            value: "End Month",
            isValidated: false
        },
        end_year: {
            value: "",
            isValidated: false
        },
        job_description: {
            value: "",
            isValidated: false
        }
    })
    return (
        <div className="row form-box">
            <div className="col-md-5 form-text">
                <h4>Experience</h4>
                <p>Please include work, volunteer and project experience. University students with limited
                professional experience should list summer work, internships or other school projects in
                this section.

                After you save your profile changes, experience will automatically be sorted by start date
                            with the most recent displayed first.</p>
            </div>
            <div className="col-md-7 job-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input value={experience.company_name.value} type="text" className="form-control col-md-6" id="companyName"
                            placeholder="Company name" onChange={(e) => validating(e.target.value, "company_name", experience, setExperience, fillExperience)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input value={experience.job_title.value} type="text" className="form-control col-md-6" id="jobTitle"
                            placeholder="Job title" onChange={(e) => validating(e.target.value, "job_title", experience, setExperience, fillExperience)} />
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                I currently work
                                    </label>
                        </div>
                    </div>
                    <div className="form-row align-items-center">
                        <div className="col-auto my-1">
                            <label htmlFor="startMonth">Start Month</label>
                            <select value={experience.first_month.value} className="custom-select mr-sm-2" id="startMonth" onChange={(e) => validating(e.target.value, "first_month", experience, setExperience, fillExperience)}>
                                <option value="Start Month">Start Month</option>
                                <option value="1">January</option>
                                <option value="2">Febuary</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="firstYear">Year</label>
                            <input value={experience.first_year.value} type="number" className="form-control" id="firstYear"
                                onChange={(e) => validating(e.target.value, "first_year", experience, setExperience, fillExperience)} />
                        </div>
                        <div className="col-auto my-1">
                            <label htmlFor="endMonth">End Month</label>
                            <select value={experience.end_month.value} className="custom-select mr-sm-2" id="endMonth" onChange={(e) => validating(e.target.value, "end_month", experience, setExperience, fillExperience)}>
                                <option value="End Month"> End Month</option>
                                <option value="1">January</option>
                                <option value="2">Febuary</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="secondYear">Year</label>
                            <input value={experience.end_year.value} type="number" className="form-control" id="secondYear"
                                onChange={(e) => validating(e.target.value, "end_year", experience, setExperience, fillExperience)} />
                        </div>
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="jobDescription">Job Description</label>
                        <textarea value={experience.job_description.value} className="form-control" id="jobDescription" rows="4" onChange={(e) => validating(e.target.value, "job_description", experience, setExperience, fillExperience)}></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}

function validating(value, input_name, allInput, setInput, fillExperience) {
    var input = {};
    var isValidated = false;

    if (input_name !== "first_month" && input_name !== "end_month" && input_name !== "first_year" && input_name !== "end_year") {
        //Validating inputs that are not password and email
        if (value && value.trim()) isValidated = true;

        else isValidated = false;
    }
    else if (input_name === "first_month") {
        if (value !== "Start Month") isValidated = true;

        else isValidated = false;
    }
    else if (input_name === "end_month") {
        if (value !== "End Month") isValidated = true;

        else isValidated = false;
    }
    else if (input_name === "first_year") {
        if (value && value.trim() && value.length >= 4) isValidated = true;

        else isValidated = false;
    }
    else if (input_name === "end_year") {
        if (value && value.trim() && value.length >= 4) isValidated = true;

        else isValidated = false;
    }
    input[input_name] = {
        value: value,
        isValidated: isValidated
    }
    let experienceForm = { ...allInput, ...input }
    setInput(experienceForm)
    var all_isvalid = true;
    for (var field in experienceForm) {
        if (experienceForm[field].isValidated !== true) all_isvalid = false;
    }
    fillExperience(all_isvalid);
}


export default Experience;