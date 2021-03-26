import { useState } from "react";




function Contact({ fillContact }) {
    const [formElement, setFormElement] = useState({

        first_name: {
            value: "",
            isValidated: false
        },
        last_name: {
            value: "",
            isValidated: false
        },
        email: {
            value: "",
            isValidated: false
        },
        password: {
            value: "",
            isValidated: false
        },
        address_1: {
            value: "",
            isValidated: false
        },
        address_2: {
            value: "",
            isValidated: false
        },
        city: {
            value: "",
            isValidated: false
        },
        state: {
            value: "Choose State",
            isValidated: false
        },
        zip: {
            value: "",
            isValidated: false
        }
    })
    return ( 
        <div className="row form-box">
            <div className="col-md-5 form-text">
                <h4>Contact</h4>
                <p>Review your contact information.</p>
            </div>

            <div className="col-md-7 job-form">
                <form>
                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="inputFirstName">First Name</label>
                            <input value={formElement.first_name.value} type="text" className="form-control mb-3" id="inputFirstName" autoComplete="off"
                                placeholder="First name" onChange={(e) => validating(e.target.value, "first_name", formElement, setFormElement, fillContact)} />
                        </div>
                        <div className="col">
                            <label htmlFor="inputLastName">Last Name</label>
                            <input value={formElement.last_name.value} type="text" className="form-control mb-3" id="inputLastName" autoComplete="off"
                                placeholder="Last name" onChange={(e) => validating(e.target.value, "last_name", formElement, setFormElement, fillContact)} />
                        </div>
                    </div>


                    <div className="form-group">
                        <label htmlFor="inputEmail4">Email</label>
                        <input value={formElement.email.value} type="email" className="form-control" id="inputEmail4" autoComplete="off"
                            placeholder="exampl@gmail.com" onChange={(e) => validating(e.target.value, "email", formElement, setFormElement, fillContact)} />
                    </div>


                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input value={formElement.address_1.value} type="text" className="form-control" id="inputAddress" autoComplete="off" placeholder="Address"
                            onChange={(e) => validating(e.target.value, "address_1", formElement, setFormElement, fillContact)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input value={formElement.address_2.value} type="text" className="form-control" id="inputAddress2" autoComplete="off" placeholder="Address2"
                            onChange={(e) => validating(e.target.value, "address_2", formElement, setFormElement, fillContact)} />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input value={formElement.city.value} type="text" className="form-control" id="inputCity" autoComplete="off" placeholder="City"
                                onChange={(e) => validating(e.target.value, "city", formElement, setFormElement, fillContact)} />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select value={formElement.state.value} id="inputState" className="form-control" onChange={(e) => validating(e.target.value, "state", formElement, setFormElement, fillContact)}>
                                <option value="Choose State">Choose State</option>
                                <option value="Benin">Benin</option>
                                <option value="Lagos">Lagos</option>
                                <option value="Port-Harcourt">Port-Harcourt</option>
                                <option value="Abuja">Abuja</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input value={formElement.zip.value} type="text" className="form-control" id="inputZip" autoComplete="off"
                                onChange={(e) => validating(e.target.value, "zip", formElement, setFormElement, fillContact)} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

function validating(value, input_name, allInput, setInput, fillContact) {
    // var input = {
    //     [input_name]: value
    // }
    // setInput({ ...allInput, ...input })

    var input = {};
    var isValidated = false;
    if (input_name !== "email" && input_name !== "state") {
        //Validating inputs that are not state and email
        if (value && value.trim()) isValidated = true;

        else isValidated = false;
    }
    else if (input_name === "state") {
        if (value !== "Choose State") isValidated = true;

        else isValidated = false;
    }
    else {
        isValidated = isEmail(value)
    }
    input[input_name] = {
        value: value,
        isValidated: isValidated
    }

    let contactForm = { ...allInput, ...input }
    setInput(contactForm)
    var all_isvalid = true;
    for (var field in contactForm) {
        if (contactForm[field].isValidated !== true) all_isvalid = false;
    }
    fillContact(all_isvalid);
}

function isEmail(email) {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if (re.test(email)) {
        return true;
    }
    return false;
}



export default Contact;