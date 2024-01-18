const About = () => {
    return (
        <>
            <div className="section-container light-brown">
                <h1 className="section-title">About me</h1>
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
                    to my coursework I also serve as the Managing Editor for the The Battalion, the 
                    independent student newspaper. 
                </p>
                <p>
                    I am currently looking for a summer internship in software development. I have experience working 
                    on both the back and front end of web applications with Javascript, Java, Python, C++, CSS, HTML, 
                    SQL and more. I also enjoy working in React, Typescript, and Django.
                </p>
                <p>
                    I am a hard worker who is always looking to learn new skills. I am passionate about 
                    software development and I am excited to work with a team of other developers. When I'm not in class, coding or editing I like to play guitar, read and play video games.
                </p>
            </div>
        </>
    );
};

export default About;