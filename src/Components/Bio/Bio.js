import './Bio.css'

const Bio = () => {

  return (
    <div className="bio-container">
      <div className='pagebreak'></div>
      <h1 className='section-title'>About Me</h1>
      <article className="article-container">
        <div className="indiv-article">
           <p>I spent the past 10 years playing music, touring around the world, and performing on notable programs such as "The Late Show with David Letterman." When the world shut down in March of 2020, I was able to catch my breath and had the opportunity to plan for what came next. In May of 2021 I enrolled in Turing School of Software & Design and discovered just how similar the programming and musical brains are.</p>
           <p>Like music, you're constantly presented with opportunities to learn something new. The frustrating parallel is you'll never come close to learning it all; the positive parallel is you will only become stale when you decide to. There is always more to learn.</p>
        </div>
        <div className="indiv-article">
          <p>My past experience in music and as an educator has provided me excellent problem-solving, time management, and communication skills that result in a quality addition to a team. I spent most of my life explaining concepts in anologies becuase what I was covering wasn't tangible. I received a Bachelors in Business Administration in  Management Information Systems from the University of Oklahoma that gave me a broad overview of how technology and databases function within businesses. I believe that curiosity, drive, and passion are an excellent and almost dangerous combination for an emerging developer - I'm excited to see what happens.
          </p>
          <p>Feel free to reach out to me on linkedIn, email me directly, or take a look at my resume.</p>
        </div>
      </article>
    </div>
  )
}

export default Bio;