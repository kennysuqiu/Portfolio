const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/involvement.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Computer Science Undegraduate at Florida State
                  University.{" "}
                </h3>
                <p>
                  {`I'm`} from Panama City, Panama, and I love Tech and Food. In
                  my professional experience, I have worked with IT departments
                  such as the Florida State Univeresity Enrollment Management
                  Technology division, as well as having a background in
                  Computer Science from Florida State.
                </p>
                {/* <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">5k</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">3k</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#work">
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>Feb 2022- Present</span>
                <h6>Special Projects Intern</h6>
                <p>Florida State University Enrollment Management Technology</p>
              </li>
              <li>
                <span>Jun 2017- Aug 2021</span>
                <h6>Sales Representative</h6>
                <p>Almacen Happy Center</p>
              </li>
              <li>
                <span>May 2020 - Aug 2020</span>
                <h6>Virtual Learning Environment Intern</h6>
                <p>Panama STEM</p>
              </li>
              <li>
                <span>May 2019 - Oct 2019</span>
                <h6>Information Technology Intern</h6>
                <p>Metropilitan School of Panama</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} I'm Computer Science Undegraduate at Florida State
                University. I'm from Panama City, Panama, and I love Tech and
                Food. In my professional experience, I have worked with IT
                departments such as the Florida State Univeresity Enrollment
                Management Technology division, as well as a background in
                Computer Science.
              </p>
              <div className="skill-lt">
                <h6>HTML5/CSS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "82%" }}>
                    <span data-toggle="tooltip" title="82%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>C++</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "72%" }}>
                    <span data-toggle="tooltip" title="72%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Python</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Java</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "72%" }}>
                    <span data-toggle="tooltip" title="72%" />
                  </div>
                </div>
              </div>
              <div className="skill-lt">
                <h6>React</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "70%" }}>
                    <span data-toggle="tooltip" title="70%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/fsu-seal-3d.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Special Projects Intern</h6>
                  <label>
                    FSU Enrollment Management Technology | In-Person | Feb 2022
                    - Present
                  </label>
                  <div className="rb-time">Part-Time</div>
                  <p>
                    ● Redesigned an existing time clock using Python for the
                    department including a front-end web interface that showed
                    all timestamps built using PHP, HTML, and CSS resulting in a
                    20% reduced code <br />● Built a “Steps Challenge” web
                    application that helped the department engage in
                    sportsmanship and company culture with over 30+ members in
                    the span of 4 weeks <br />● Led a small team of 3
                    individuals to customize and develop Microsoft PowerApps by
                    integrating SharePoint, Power Automate, PowerBI, and Azure{" "}
                    <br />● Conducted biweekly meetings with members outside of
                    the computer support department requesting feedback and any
                    suggestions for new iterations of the PowerApps
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/HappyCenterLogo.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Sales Representative</h6>
                  <label>
                    Almacen Happy Center | In-Person | Jun 2017 - Aug 2021
                  </label>
                  <div className="rb-time">Part-Time</div>
                  <p>
                    ● Administered the party supply retail store by handling
                    everything from customer service to budgeting the business’
                    income and expenses. <br />● Promoted the use of social
                    media platforms such as WhatsApp and Instagram
                    (@almacenhappycenter) to showcase the store’s products and
                    services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/METLogo.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Information Technology Intern</h6>
                  <label>
                    Metropilitan School of Panama | In-Person | May 2019 - Oct
                    2019
                  </label>
                  <div className="rb-time">Part-Time</div>
                  <p>
                    ● Managed over 50 tickets daily by assisting students and
                    faculty <br />● Maintained and deployed software in over 600
                    devices patched and licenses up to date within the Apple
                    ecosystem <br />● Administered active directory by assigning
                    group policies and network capabilities for new students and
                    guests
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
