import { Link } from "react-router-dom"

function Home() {
  return (
    <>
      <title>TN Happy Kids | Preschool & Kindergarten</title>

      <meta
        name="description"
        content="TN Happy Kids offers a safe, joyful and engaging preschool and kindergarten learning environment for children. Explore our programs and admission options."
      />

      <meta
        name="keywords"
        content="TN Happy Kids, preschool, kindergarten, playschool, nursery school, toddler care, play group, LKG, UKG, kids school"
      />

      <section className="hero">
        <div className="hero-content">
          <h1>
            Learn, <span>Play</span> & Grow
          </h1>

          <p>
            Welcome to TN Happy Kids, where children learn through
            joyful experiences, creative activities and caring guidance.
          </p>

          <div className="hero-buttons">
            <Link to="/admission" className="primary-btn">
              Admission Enquiry
            </Link>

            <Link to="/about" className="secondary-btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="cards">
        <div className="section-heading">
          <h2>Our Programs</h2>
          <p>Programs designed for every stage of early learning.</p>
        </div>

        <div className="card-grid">
          <div className="card">
            <h3>Toddler Care</h3>
            <p>
              A safe and caring environment for little learners.
            </p>
          </div>

          <div className="card">
            <h3>Play Group</h3>
            <p>
              Learning through play, interaction and exploration.
            </p>
          </div>

          <div className="card">
            <h3>LKG</h3>
            <p>
              Building early academic and social skills.
            </p>
          </div>

          <div className="card">
            <h3>UKG</h3>
            <p>
              Preparing children for their next stage of learning.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
