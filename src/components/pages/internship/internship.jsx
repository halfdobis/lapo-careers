import './internship.css'
import Search from './search';
import map from '../../../assets/map.png';
import img2 from '../../../assets/img2.png';





function Internship() {
  return (
    <div>
      <Search />

      <div className="news col-12" data-aos="fade-up">
        <div className="news-text">
          <h3>2021 internship and graduates recruitment</h3>
          <p>
            As competition for graduate jobs increases, students need to think
            of new ways to set themselves apart from all of the other equally
            qualified and skilled candidates. Graduates who have relevant
            workplace experience tend to be more valued by employers, and this
            makes internships an attractive prospect. But what exactly are
            internships, how can they help you and what will you be expected to
            do? We’ll explore these areas in this guide, which should help you
            to decide whether an internship is the right choice for you.
        </p>
          <p>
            An internship is an opportunity offered by an employer to potential
            employees, called interns, to work at a firm for a fixed period of
            time. Interns are usually undergraduates or students, and most
            internships last between a month and three months. Internships are
            usually part-time if offered during a university semester and
            full-time if offered during the vacation periods. An internship
            should give you practical skills, workplace experience and greater
            knowledge of that industry, in exchange for the employer benefiting
            from your labour.
        </p>
          <p>
            An apprenticeship is a dedicated vocational programme that combines
            work-based training and study towards an NVQ (National Vocational
            Qualification) or foundation degree. Apprentices usually spend four
            days a week with their employer and then a day in the training
            centre, where they will work on building their portfolio to achieve
            their NVQ. Traditionally, apprenticeships were reserved to trade
            occupations such as construction or planning. More recently,
            apprenticeships are offered in an increasing number of industries,
            from accountancy to marketing.
        </p>
        </div>
      </div>


      <div className="work-news row " data-aos="fade-up">
        <div className="col-md-6">
          <div className="image">
            <img src={map} alt="map" />
          </div>
        </div>
        <div className="col-md-6 work-news-text">
          <h1>Where do you want to work?</h1>
          <p>
            Lapo provides opportunities to empower you to create things that
            help others and change the world. Come as you are, do what you
            love.
          </p>
          <select className="form-control">
            <option>Select location</option>
            <option>Benin</option>
            <option>Lagos</option>
            <option>Abuja</option>
            <option>Port Harcourt</option>
          </select>
        </div>
      </div>

      <div className="sub-news row" data-aos="fade-up">
        <div className="col-md-6 sub-news-text">
          <h1>Life as a LAPO intern</h1>
          <p>
            Our interns work on real-world projects in collaboration with
            teams across the Country, while having fun along the way. You’ll be
            empowered to build community, find your passion and achieve your
            goals. Join LAPO today, and help us create the world of
            tomorrow.
          </p>
        </div>
        <div className="col-md-6">
          <div className="image">
            <img src={img2} alt="map" />
          </div>
        </div>
      </div>



    </div>
  );
}

export default Internship;