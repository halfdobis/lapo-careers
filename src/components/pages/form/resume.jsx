




function Resume() { 
    return (
        <div className="row form-box">
            <div className="col-md-5 form-text">
                <h4>Resume</h4>
                <p>You can have only one resume attached to your profile.
                            You can replace your resume by clicking on “Upload resume” and selecting a new file.</p>
            </div>

            <div className="col-md-7 job-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="resume">Upload your resume</label>
                        <input type="file" className="form-control-file" id="resume" />
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Resume;