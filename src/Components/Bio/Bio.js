import birdie from '../../Images/polobirdie.jpg';
import dlshow from '../../Images/poloshow.jpg';
import greece from '../../Images/pologreece.jpg';
import resume from '../../Images/LeachResume.pdf';
import './Bio.css';

const Bio = () => {
  return (
    <div className="bio-container">
      <div className="pagebreak"></div>
      <h2 className="section-title">About Me</h2>
      <article className="article-container">
        <div className="indiv-article">
          <p>
            I spent the past 10 years traveling around the world performing music
            with several different artists. When everything came to a halt in
            March of 2020, I was forced to catch my breath and plan my next
            move. In May of 2021 I enrolled in Turing School of Software &
            Design and discovered how similar the programming and musical brains
            were.
          </p>
          <p>
            Like music, you're constantly presented with opportunities to learn
            something new. The frustrating parallel is you'll never come close
            to learning it all; the positive parallel is you will only become
            stale when you decide to. There is always more to learn.
          </p>
        </div>
        <div className="indiv-article">
          <p>
            My past experience as an artist, educator, and entrepreneur has
            provided me excellent problem-solving, time management, and
            communication skills. I believe that curiosity, drive, and passion are an excellent and invigorating combination for an emerging developer - I'm excited to see what happens next.
          </p>
          <p>
            Feel free to reach out to me on <span />
            <a
              className="bio-links"
              href="https://www.linkedin.com/in/davidleach724/"
            >
              linkedIn
            </a>
            , <span />
            <a className="bio-links" href={'mailto:davidleach724@gmail.com'}>
              email me directly
            </a>
            , or{' '}
            <a className="bio-links" href={resume}>
              take a look at my resume.
            </a>
          </p>
        </div>
      </article>
      <div className="pictures">
        <img src={birdie} className="polaroid" alt="dave and birdie hiking" />
        <img src={dlshow} className="polaroid" alt="the late show" />
        <img src={greece} className="polaroid" alt="athens greece" />
      </div>
    </div>
  );
};

export default Bio;
