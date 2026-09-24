function Programs() {
  const programs = [
    {
      title: "Toddler Care",
      text: "A caring environment focused on early development and exploration."
    },
    {
      title: "Play Group",
      text: "Fun-filled learning experiences through play and activities."
    },
    {
      title: "LKG",
      text: "Early learning activities that build foundational skills."
    },
    {
      title: "UKG",
      text: "A structured learning environment that prepares children for school."
    }
  ]

  return (
    <section className="cards">
      <div className="section-heading">
        <h2>Our Programs</h2>
        <p>Explore our early learning programs.</p>
      </div>

      <div className="card-grid">
        {programs.map((program) => (
          <div className="card" key={program.title}>
            <h3>{program.title}</h3>
            <p>{program.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Programs