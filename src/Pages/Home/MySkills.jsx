import data from "../../data/index.json";

export default function MySkills() {
  return (
    <div className="outer-skill">
   <h1>My Expertise</h1>
       <div className="container-skill">

    <div className="skill-box">
        <span className="title">HTML</span>
        <div className="skill-bar">
            <span className="skill-per html">
                <span className="tooltip">95%</span>
            </span>
        </div>
    </div>
    <div className="skill-box">
        <span className="title">PHP</span>
        <div className="skill-bar">
            <span className="skill-per php">
                <span className="tooltip">80%</span>
            </span>
        </div>
    </div>
    <div className="skill-box">
        <span className="title">React</span>
        <div className="skill-bar">
            <span className="skill-per react">
                <span className="tooltip">87%</span>
            </span>
        </div>
    </div>
    <div className="skill-box">
        <span className="title">SQL</span>
        <div className="skill-bar ">
            <span className="skill-per SQL">
                <span className="tooltip">75%</span>
            </span>
        </div>
    </div>
    <div className="skill-box">
        <span className="title">ExpressJS</span>
        <div className="skill-bar">
            <span className="skill-per expressjs">
                <span className="tooltip">80%</span>
            </span>
        </div>
    </div>
    <div className="skill-box">
        <span className="title">Bootstrap/CSS</span>
        <div className="skill-bar">
            <span className="skill-per bootsrap">
                <span className="tooltip">85%</span>
            </span>
        </div>
    </div>
    <div className="skill-box">
        <span className="title">Javascript</span>
        <div className="skill-bar ">
            <span className="skill-per javascript">
                <span className="tooltip">75%</span>
            </span>
        </div>
    </div>
    <div className="skill-box">
        <span className="title">MongoDB</span>
        <div className="skill-bar ">
            <span className="skill-per mongo">
                <span className="tooltip">70%</span>
            </span>
        </div>
    </div>
    <div className="skill-box">
        <span className="title">Github</span>
        <div className="skill-bar ">
            <span className="skill-per git">
                <span className="tooltip">60%</span>
            </span>
        </div>
    </div>
    <div className="skill-box">
        <span className="title">cPanel</span>
        <div className="skill-bar ">
            <span className="skill-per git">
                <span className="tooltip">60%</span>
            </span>
        </div>
    </div>
</div>
    </div>
   
  );
}
