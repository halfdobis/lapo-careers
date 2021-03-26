



function Additional() {
    return (
        <div className="row form-box">
            <div className="col-md-5 form-text"> 
                <h4>Additional Information</h4>
                <p>Upload documents to your profile (e.g. certifications, work samples, authored articles, etc.)
                        </p>
            </div>
            <div className="col-md-7 job-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="additional">Upload Document</label>
                        <input type="file" className="form-control-file" id="additional" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Additional