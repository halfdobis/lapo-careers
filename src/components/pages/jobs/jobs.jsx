import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../global/footer';
import Header from '../../global/header';
import './jobs.css'





function Jobs() {

    const [showSearchOptions, setShowSearchOptions] = useState(false);

    const ref = useRef(null)

    const handleFocus = () => {
        setShowSearchOptions(true);
    }

    const handleClickOut = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setShowSearchOptions(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOut, true);

        return () => {
            document.removeEventListener('click', handleClickOut, true);
        }
    }, []);

    return (
        <div>
            <Header />
            <section className=" container job-search jumbotron">
                <div className="search-wrapper" ref={ref}>
                    <div className="row search-bar">
                        <input className="form-control form-control-lg col" autoComplete="off" id="search" type="text"
                            placeholder="Search Jobs" onFocus={handleFocus}
                        />
                        <button type="button" className="btn btn-primary">
                            Find jobs
                           </button>
                    </div>
                    <div className="card list" id="card-list" style={{ display: showSearchOptions ? 'block' : 'none' }}>
                        <h5>Professions</h5>
                        <div className="card-body list-content">
                            <Link to="/jobs">Networking</Link>
                            <Link to="/jobs">Risk Management</Link>
                            <Link to="/jobs">Application development</Link>
                            <Link to="/jobs">Finance</Link>
                            <Link to="/jobs">Publicity</Link>
                            <Link to="/jobs">Marketing</Link>
                            <Link to="/jobs">Legal</Link>
                            <Link to="/jobs">Human Resource</Link>
                            <Link to="/jobs">Audit</Link>
                            <Link to="/jobs">Cooperate Planning</Link>
                            <Link to="/jobs">Operations</Link>
                            <Link to="/jobs">Accountant</Link>
                        </div>
                    </div>
                    <a href="/jobs"><p className="ml-2">Learn More</p></a>
                </div>
            </section>

            <section>
                <div className="container">

                    <div className="card">
                        <div className="card-body row">
                            <h5 className="col">Showing 1 - to 6 of 16 jobs</h5>
                            <h6 className="col-md-auto mt-2">Sort by</h6>
                            <select className="form-control col col-lg-2">
                                <option>Most relevant</option>
                                <option>Most recent</option>
                                <option>Most popular</option>
                            </select>
                        </div>
                    </div>

                    <div className="card job-role">
                        <div className="card-body">
                            <Link to="/info"><h5>Front-End JavaScript Engineer – Lagos</h5></Link>
                            <p className="role-text">Ikeja, Lagos | Operations | Dec 19, 2020</p>
                            <p className="sub-role-text">LAPO’s mission is to empower every person and every organization on
                            the planet
                            to achieve more. Our culture is centered on embracing a growth mindset, a theme of
                            inspiring
                                excellence.</p>
                        </div>
                    </div>

                    <div className="card job-role">
                        <div className="card-body">
                            <Link to="/info"><h5>Front-End JavaScript Engineer – Abuja</h5></Link>
                            <p className="role-text">Ikeja, Lagos | Accounting | Dec 27, 2020</p>
                            <p className="sub-role-text">LAPO’s mission is to empower every person and every organization on
                            the planet
                            to achieve more. Our culture is centered on embracing a growth mindset, a theme of
                            inspiring
                                excellence.</p>
                        </div>
                    </div>

                    <div className="card job-role" data-aos="fade-right">
                        <div className="card-body">
                            <Link to="/info"><h5>Front-End JavaScript Engineer - Benin</h5></Link>
                            <p className="role-text">Ikeja, Lagos | Application Davelopment | Jan 1, 2021</p>
                            <p className="sub-role-text">LAPO’s mission is to empower every person and every organization on
                            the planet
                            to achieve more. Our culture is centered on embracing a growth mindset, a theme of
                            inspiring
                                excellence.</p>
                        </div>
                    </div>

                    <div className="card job-role" data-aos="fade-left">
                        <div className="card-body">
                            <Link to="/info"><h5>Front-End JavaScript Engineer - Lagos</h5></Link>
                            <p className="role-text">Ikeja, Lagos | Marketing | Jan 1, 2021</p>
                            <p className="sub-role-text">LAPO’s mission is to empower every person and every organization on
                            the planet
                            to achieve more. Our culture is centered on embracing a growth mindset, a theme of
                            inspiring
                                excellence.</p>
                        </div>
                    </div>

                    <div className="card job-role" data-aos="fade-right">
                        <div className="card-body">
                            <Link to="/info"><h5>Front-End JavaScript Engineer - Lagos</h5></Link>
                            <p className="role-text">Ikeja, Lagos | Finance | Jan 3, 2021</p>
                            <p className="sub-role-text">LAPO’s mission is to empower every person and every organization on
                            the planet
                            to achieve more. Our culture is centered on embracing a growth mindset, a theme of
                            inspiring
                                excellence.</p>
                        </div>
                    </div>

                    <div className="card job-role" data-aos="fade-left">
                        <div className="card-body">
                            <Link to="/info"><h5>Front-End JavaScript Engineer - Port-Harcourt</h5></Link>
                            <p className="role-text">Ikeja, Lagos | Risk Management | Jan 6, 2021</p>
                            <p className="sub-role-text">LAPO’s mission is to empower every person and every organization on
                            the planet
                            to achieve more. Our culture is centered on embracing a growth mindset, a theme of
                            inspiring
                                excellence.</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="page-nav">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <span className="page-link">Previous</span>
                        </li>
                        <li className="page-item active" aria-current="page">
                            <span className="page-link">
                                1
                        <span className="sr-only">(current)</span>
                            </span>
                        </li>
                        <li className="page-item"><a className="page-link" href="/jobs">2</a></li>
                        <li className="page-item"><a className="page-link" href="/jobs">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="/jobs">Next</a>
                        </li>
                    </ul>
                </nav>
            </section>

            <Footer />
        </div>
    );
}

export default Jobs;