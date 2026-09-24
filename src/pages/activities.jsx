function Activities() {
  return (
    <>
      <title>Activities | TN Happy Kids Preschool</title>

      <meta
        name="description"
        content="Discover creative activities, music and movement, outdoor play and interactive learning activities at TN Happy Kids, designed to support children's overall development."
      />

      <meta
        name="keywords"
        content="TN Happy Kids activities, preschool activities, kids activities, creative activities, outdoor play, music and movement, learning activities"
      />

      <section className="page">
        <h1 className="page-title">Activities</h1>

        <p className="page-subtitle">
          Children enjoy a variety of activities that encourage
          creativity, communication, movement and teamwork.
        </p>

        <div className="card-grid" style={{ marginTop: "40px" }}>
          <div className="card">
            <h3>Creative Activities</h3>
            <p>Drawing, colouring, crafts and creative expression.</p>
          </div>

          <div className="card">
            <h3>Music & Movement</h3>
            <p>Fun activities involving music, rhythm and movement.</p>
          </div>

          <div className="card">
            <h3>Outdoor Play</h3>
            <p>Active play that supports physical development.</p>
          </div>

          <div className="card">
            <h3>Learning Activities</h3>
            <p>Interactive activities that make learning enjoyable.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Activities
