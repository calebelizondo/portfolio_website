import headshot from '../assets/headshot.jpg';

const About = () => {
    return (
        <>
            <div className="section-container timberwolf">
                
                <h1 className="section-title">About me</h1>
                <div className="headshot-container">
                    <img className="headshot" src={headshot} alt="headshot" />
                </div>
                <div className="icon-container-small">
                    <a href="tel:+12547224412"><i className="fas fa-phone small-icon"></i></a>
                    <a href="mailto:calebelizondo@tamu.edu"><i className="far fa-envelope small-icon"></i></a>
                    <a href="https://github.com/calebelizondo">
                            <i className="fab fa-github small-icon"></i>   
                        </a>
                        <a href="https://www.linkedin.com/in/caleb-elizondo-08975a250/">
                            <i className="fab fa-linkedin small-icon"></i>
                        </a>
                    </div>

                <p>
                    My name is Caleb Elizondo and I am a junior Computer Science major at Texas A&M. In addition
                    to my coursework I also serve as the Managing Editor for The Battalion, the 
                    independent student newspaper. 
                </p>
                <p>
                    I am currently looking for a summer internship in software development. I have experience working 
                    on both the back and front end of web applications with Javascript, Java, Python, C++, CSS, HTML, 
                    SQL and more. I also enjoy working in React, Typescript, and Django. In my coursework I am also learning 
                    about scientific programming in MatLab and Machine Learning.
                </p>
                <p>
                    While I am confident in my technical skills, I believe what makes me unique is my leadership experience and 'soft' skills.
                    In my role at The Battalion I am constantly communicating at all levels of the organization and managing a team of nearly 20 editorial staffers.
                </p>
                <p>
                    When I'm not in class, working or coding a personal project, I enjoy playing the guitar, reading, and playing video games. Right now I am working my
                    way through Baldur's Gate 3 (in Honor Mode, of course) and Bioshock Infinite.
                </p>
            </div>
        </>
    );
};

export default About;