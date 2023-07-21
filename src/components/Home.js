export default function Books() {
  return (
    <div className="bookcard-container">

      <div className="Book-Card">
        <div className="title-section">
          <p className="genres">Action</p>
          <h3 className="title">The Hunger Games</h3>
          <h5 className="author">Suzanne Collins</h5>
          <div className="comRemEdit">
            <p className="comment-btn">Comments</p>
            <span className="up-bar">|</span>
            <p className="remove-btn">Remove</p>
            <span className="up-bar">|</span>
            <p className="edit-btn">Edit</p>
          </div>
        </div>

        <div className="stat-section">

          <div className="circle-container">
            <div className="circle">
              <div className="item layer-1">
                <div className="fill" />
              </div>
              <div className="item layer-2">
                <div className="fill" />
              </div>
              <div className="inside-content" />
            </div>
          </div>
          <div className="percent-complete">
            <span className="percent">64%</span>
            <span className="complete">Completed</span>
          </div>
        </div>

        <div className="update-section">
          <span className="current-chapter">CURRENT CHAPTER</span>
          <span className="current-lesson">Chapter 17</span>
          <button type="button" className="update-progress">UPDATE PROGRESS</button>
        </div>
      </div>
      {/* {second bookcard} */}
      <div className="Book-Card">
        <div className="title-section">
          <p className="genres">Science Fiction</p>
          <h3 className="title">Dune</h3>
          <h5 className="author">Frank Herbert</h5>
          <div className="comRemEdit">
            <p className="comment-btn">Comments</p>
            <span className="up-bar">|</span>
            <p className="remove-btn">Remove</p>
            <span className="up-bar">|</span>
            <p className="edit-btn">Edit</p>
          </div>
        </div>

        <div className="stat-section">

          <div className="circle-container">
            <div className="circle">
              <div className="item itm-lay-1">
                <div className="fill-1" />
              </div>
              <div className="item layer-2">
                <div className="fill" />
              </div>
              <div className="inside-content" />
            </div>
          </div>
          <div className="percent-complete">
            <span className="percent">8%</span>
            <span className="complete">Completed</span>
          </div>
        </div>

        <div className="update-section">
          <span className="current-chapter">CURRENT CHAPTER</span>
          <span className="current-lesson">Chapter 3</span>
          <button type="button" className="update-progress">UPDATE PROGRESS</button>
        </div>
      </div>
      {/* {third bookcard} */}
      <div className="Book-Card">
        <div className="title-section">
          <p className="genres">Economy</p>
          <h3 className="title">Capital in the Twenty-First Century</h3>
          <h5 className="author">Suzanne Collins</h5>
          <div className="comRemEdit">
            <p className="comment-btn">Comments</p>
            <span className="up-bar">|</span>
            <p className="remove-btn">Remove</p>
            <span className="up-bar">|</span>
            <p className="edit-btn">Edit</p>
          </div>
        </div>

        <div className="stat-section">

          <div className="circle-container">
            <div className="circl">
              <div className="ite">
                <div className="fil" />
              </div>
              <div className="item layer-2">
                <div className="fill" />
              </div>
              <div className="inside-content" />
            </div>
          </div>
          <div className="percent-complete">
            <span className="percent">0%</span>
            <span className="complete">Completed</span>
          </div>
        </div>

        <div className="update-section">
          <span className="current-chapter">CURRENT CHAPTER</span>
          <span className="current-lesson">Introduction</span>
          <button type="button" className="update-progress">UPDATE PROGRESS</button>
        </div>
      </div>

      <hr className="hr-line" />
      <form>
        <h4>ADD NEW BOOK</h4>
        <input className="booktitle-inp" type="text" placeholder="Book Title" required />
        <input className="catagory-inp" type="text" placeholder="Category" required />
        <input className="author-inp" type="text" placeholder="Book Author" required />
        <button className="submit-btn" type="button">ADD BOOK</button>
      </form>
    </div>
  );
}
