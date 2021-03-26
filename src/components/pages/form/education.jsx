import { useState } from "react";






function Education({ fillEducation }) { 
    const [education, setEducation] = useState({
        school_name: {
            value: "",
            isValidated: false
        },
        country: {
            value: "",
            isValidated: false
        },
        providence: {
            value: "",
            isValidated: false
        },
        start_year: {
            value: "Start Year",
            isValidated: false
        },
        end_year: {
            value: "End Year",
            isValidated: false
        },
        field_of_study: {
            value: "",
            isValidated: false
        },
        level_of_education: {
            value: "Choose level of education",
            isValidated: false
        }
    })
    return (
        <div className="row form-box">
            <div className="col-md-5 form-text">
                <h4>Education</h4>
                <p>Please include your education history. If you are currently studying, please include your
                expected graduation date.

                The school list you can select from includes over 8000 global institutions of higher
                learning. Please be sure to review the existing list for your school's official name and
                            only if you've checked all options, enter it manually.</p>
            </div>
            <div className="col-md-7 job-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">School Name</label>
                        <input value={education.school_name.value} type="text" className="form-control col-md-6" id="formGroupExampleInput"
                            placeholder="School name" onChange={(e) => validating(e.target.value, "school_name", education, setEducation, fillEducation)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Country/Region</label>
                        <input value={education.country.value} type="text" className="form-control col-md-6" id="formGroupExampleInput2"
                            placeholder="Country/Region" onChange={(e) => validating(e.target.value, "country", education, setEducation, fillEducation)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state-province">State/Providence</label>
                        <input value={education.providence.value} type="text" className="form-control col-md-6" id="state-province"
                            placeholder="State/Providence" onChange={(e) => validating(e.target.value, "providence", education, setEducation, fillEducation)} />
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="grid" />
                            <label className="form-check-label" htmlFor="grid">
                                I'm currently in school
                                    </label>
                        </div>
                    </div>
                    <div className="form-row align-items-center">
                        <div className="col-auto my-1">
                            <label htmlFor="startYear">Start year</label>
                            <select value={education.start_year.value} className="custom-select mr-sm-2" id="startYear" onChange={(e) => validating(e.target.value, "start_year", education, setEducation, fillEducation)}>
                                <option value="Start Year">Start Year</option>
                                <option value="1">2021</option>
                                <option value="2">2020</option>
                                <option value="3">2019</option>
                                <option value="4">2018</option>
                                <option value="5">2017</option>
                                <option value="6">2016</option>
                                <option value="7">2015</option>
                                <option value="8">2014</option>
                                <option value="9">2013</option>
                                <option value="10">2012</option>
                                <option value="11">2011</option>
                                <option value="12">2010</option>
                                <option value="13">2009</option>
                                <option value="14">2008</option>
                                <option value="15">2007</option>
                                <option value="16">2006</option>
                                <option value="17">2005</option>
                                <option value="18">2004</option>
                                <option value="19">2003</option>
                                <option value="20">2002</option>
                                <option value="21">2001</option>
                            </select>
                        </div>

                        <div className="col-auto my-1">
                            <label htmlFor="endYear">End year</label>
                            <select value={education.end_year.value} className="custom-select mr-sm-2" id="endYear" onChange={(e) => validating(e.target.value, "end_year", education, setEducation, fillEducation)}>
                                <option value="End Year">End Year</option>
                                <option value="1">2021</option>
                                <option value="2">2020</option>
                                <option value="3">2019</option>
                                <option value="4">2018</option>
                                <option value="5">2017</option>
                                <option value="6">2016</option>
                                <option value="7">2015</option>
                                <option value="8">2014</option>
                                <option value="9">2013</option>
                                <option value="10">2012</option>
                                <option value="11">2011</option>
                                <option value="12">2010</option>
                                <option value="13">2009</option>
                                <option value="14">2008</option>
                                <option value="15">2007</option>
                                <option value="16">2006</option>
                                <option value="17">2005</option>
                                <option value="18">2004</option>
                                <option value="19">2003</option>
                                <option value="20">2002</option>
                                <option value="21">2001</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fieldOfStudy">Field of Study</label>
                        <input value={education.field_of_study.value} type="text" className="form-control col-md-6" id="fieldOfStudy"
                            placeholder="Field of study" onChange={(e) => validating(e.target.value, "field_of_study", education, setEducation, fillEducation)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="educationLevel">Level of Education</label>
                        <select value={education.level_of_education.value} id="educationLevel" className="form-control col-md-6" onChange={(e) => validating(e.target.value, "level_of_education", education, setEducation, fillEducation)}>
                            <option value="Choose level of education">Choose level of education</option>
                            <option>Bachelor's degree</option>
                            <option>MBA</option>
                            <option>Masters</option>
                            <option>OND</option>
                            <option>HND</option>
                            <option>Diploma</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}

function validating(value, input_name, allInput, setInput, fillEducation) {
    var input = {};
    var isValidated = false;

    if (input_name !== "Start_year" && input_name !== "end_year" && input_name !== "level_of_education") {
        if (value && value.trim()) isValidated = true;

        else isValidated = false;
    }
    else if (input_name === "Start_year") {
        if (value !== "Start Year") isValidated = true;

        else isValidated = false;
    }
    else if (input_name === "end_year") {
        if (value !== "End Year") isValidated = true;

        else isValidated = false;
    }
    else if (input_name === "level_of_education") {
        if (value !== "Choose level of education") isValidated = true;

        else isValidated = false;
    }
    input[input_name] = {
        value: value,
        isValidated: isValidated
    }
    let educationForm = { ...allInput, ...input }
    setInput(educationForm)
    var all_isvalid = true;
    for (var field in educationForm) {
        if (educationForm[field].isValidated !== true) all_isvalid = false;
    }
    fillEducation(all_isvalid);
}



export default Education;