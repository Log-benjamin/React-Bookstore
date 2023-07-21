import bookImage from '../assets/BookCatagories.jpg';

export default function Catagories() {
  return (
    <div className="Catagorie-Container">
      <img className="bookCat" src={bookImage} alt="Books-Img" />
      <div className="Cat-description">
        <h3>Most Popular Book Genres, Explained</h3>
        <p>
          When it comes to a selecting a great book, we don&apos;t discriminate
          here at OprahMag.com. From an essential fall best-seller, to novels by
          Latinx authors, and every single read on Oprah&apos;s Book Club list,
          our approach to finding a riveting page-turner is to have an open mind.
        </p>
        <p>
          But when you&apos;re a major reader, it&apos;s easy to get caught up in what
          seems to be an endless array of genres that sometimes seem to box you in.
          Do you prefer sci-fi or fantasy? (But wait, are they the same thing?)
          What are the key differences between a thriller and a mystery? Oh, and what
          does &quot;literary fiction&quot; even mean? For all you bibliophiles who would like
          these burning questions answered, we&apos;ve listed—and defined—the most popular
          book genres in both fiction and nonfiction so you&apos;ll know exactly what to
          look for during your next visit to the bookstore.
        </p>
      </div>
      <div className="lists-genere">
        <div className="Star">
          <i className="fa-solid fa-star" />
          <h4>Action and Adventure</h4>
        </div>
        <p>
          These books constantly have you on the edge of your seat with
          excitement, as your fave main character repeatedly finds themselves in high stakes
          situations. The protagonist has an ultimate goal to achieve and is always put in risky,
          often dangerous situations. This genre typically crosses over with others like mystery,
          crime, sci-fi, and fantasy.
        </p>
      </div>
      {/* separate lists */}
      <div className="lists-genere">
        <div className="Star">
          <i className="fa-solid fa-star" />
          <h4>Classics</h4>
        </div>
        <p>
          You may think of these books as the throwback readings you were assigned in English class.
          (Looking at you, Charles Dickens.) The classics have been around for decades, and were
          often groundbreaking stories at their publish time, but have continued to be impactful for
          generations, serving as the foundation for many popular works we read today.
        </p>
      </div>
      {/* separate lists */}
      <div className="lists-genere">
        <div className="Star">
          <i className="fa-solid fa-star" />
          <h4>Comic Book or Graphic Novel </h4>
        </div>
        <p>
          The stories in comic books and graphic novels are presented to the reader through
          engaging, sequential narrative art (illustrations and typography) that&apos;s either
          presented in a specific design or the traditional panel layout you find in comics.
          With both, you&apos;ll often find the dialogue presented in the tell-tale &ldquo;word
          balloons&ldquo; next to the respective characters.
        </p>
      </div>
      {/* separate lists */}
      <div className="lists-genere">
        <div className="Star">
          <i className="fa-solid fa-star" />
          <h4>Horror</h4>
        </div>
        <p>
          Meant to cause discomfort and fear for both the character and readers, horror writers
          often make use of supernatural and paranormal elements in morbid stories that are
          sometimes a little too realistic. The master of horror fiction? None other than
          Stephen King.
        </p>
      </div>
      {/* separate lists */}
      <div className="lists-genere">
        <div className="Star">
          <i className="fa-solid fa-star" />
          <h4>Romance</h4>
        </div>
        <p>
          Oh romance, how could we ever resist you? The genre that makes your heart all warm and
          fuzzy focuses on the love story of the main protagonists. This world of fiction is
          extremely wide-reaching in and of itself, as it has a variety of sub-genres including:
          contemporary romance, historical, paranormal, and the steamier erotica. If you&apos;re
          in need of any suggestions, we&apos;ve got a list of the best romances of all time and
          the top picks of the year.
        </p>
      </div>
      {/* separate lists */}
      <div className="lists-genere">
        <div className="Star">
          <i className="fa-solid fa-star" />
          <h4>Science Fiction (Sci-Fi)</h4>
        </div>
        <p>
          Though they&apos;re often thought of in the same vein as fantasy, what distinguishes
          science fiction stories is that they lean heavily on themes of technology and future
          science. You&apos;ll find apocalyptic and dystopian novels in the sci-fi genre as well.
        </p>
      </div>
      {/* separate lists */}
      <div className="lists-genere">
        <div className="Star">
          <i className="fa-solid fa-star" />
          <h4>Suspense and Thrillers</h4>
        </div>
        <p>
          While they often encompass the same elements as mystery books, the suspense and thriller
          genre sees the hero attempt to stop and defeat the villain to save their own life rather
          than uncover a specific crime. Thrillers typically include cliffhangers and deception to
          encourage suspense, while pulling the wool over the eyes of both the main character
          and reader.
        </p>
      </div>
    </div>
  );
}
