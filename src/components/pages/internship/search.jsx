import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './search.css';





function Search() {

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
    <>
      <section id="showcase">
        <div className="col-md-6 search-content">
          <h1>Internship and Graduates</h1>
          <p>Begin your career</p>

          <div className="search-wrapper" ref={ref}>
            <div className="row search-input">
              <input className="form-control form-control-lg col-md-8" autoComplete="off" id="search" type="text"
                placeholder="Search Jobs" onFocus={handleFocus}
              />
              <div className="col-6 col-md-4 ">
                <Link to="/jobs"><button className="search-btn" type="button">
                  Find Jobs
                <span></span><span></span><span></span><span></span>
                </button></Link>
              </div>
            </div>

            <div className="card list" id="card-list" style={{ display: showSearchOptions ? 'block' : 'none' }}>
              <h5>Professions</h5>
              <div className="card-body list-content">
                <Link to="/jobs?q=networking">Networking</Link>
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

          </div>
        </div>
      </section>
    </>
  );
}

export default Search;