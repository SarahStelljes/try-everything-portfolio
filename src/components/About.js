import React from "react";

export default function About(){
    return(
        <section>
            <h2>ABOUT ME</h2>
            <div className="about-me-div">
                <img
                    src={require(`../assets/images/Sarah_picture.jpg`)}
                    className="image profile-img"
                    alt="Sarah E. Stelljes"
                />
                <div>
                    <h3>Sarah's Bio</h3>
                    <p>Ever since I was young, I have loved the creative arts and technology. When I started thinking about what I wanted to do for a job, I knew it had to be something creative, and maybe involve technology. I had a few ideas at first, such as a film director/screen writer or author, or perhaps even a game developer. The first two options I tried to go for, but it didn't really fit well in the end, partly because I didn't enjoy the classes that weren't really needed in the field I wanted to go into. So I ended up going with game development. While I was in college for game development, I had a begginer class that started you off with coding languages such as HTML, CSS, and JavaScript, basically a website. That's when I found my love for coding and started to want to be a webdeveloper, and so I signed myself up for a coding bootcamp for Full Stack web development. To be honest, I still want to do other things like write stories and develop games, but now I would rather do that on the side.</p>
                </div>
            </div>
        </section>
    );
}