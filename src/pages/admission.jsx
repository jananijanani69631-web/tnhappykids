function Admission() {
  return (
    <>
      <title>Admission Enquiry | TN Happy Kids Tambaram</title>

      <meta
        name="description"
        content="Submit an admission enquiry for TN Happy Kids Tambaram. Explore preschool and kindergarten programs including Toddler Care, Play Group, LKG and UKG."
      />

      <meta
        name="keywords"
        content="TN Happy Kids admission, preschool admission Tambaram, kindergarten admission Tambaram, playschool admission, LKG admission, UKG admission, TN Happy Kids Tambaram"
      />

      <section className="page">
        <h1 className="page-title">Admission Enquiry</h1>

        <p className="page-subtitle">
          Fill in your details and our team can get in touch with you.
        </p>

        <div className="form-container" style={{ marginTop: "35px" }}>
          <div className="form-group">
            <label>Parent Name</label>
            <input type="text" placeholder="Enter parent name" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter phone number" />
          </div>

          <div className="form-group">
            <label>Child Name</label>
            <input type="text" placeholder="Enter child name" />
          </div>

          <div className="form-group">
            <label>Program</label>

            <select>
              <option>Select Program</option>
              <option>Toddler Care</option>
              <option>Play Group</option>
              <option>LKG</option>
              <option>UKG</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Enter your message"></textarea>
          </div>

          <button className="submit-btn">
            Submit Enquiry
          </button>
        </div>
      </section>
    </>
  )
}

export default Admission
