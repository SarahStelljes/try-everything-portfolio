import React from "react";

export default function Resume(){
    
    return(
        <section>
            <h2>MY RESUME</h2>
            <div>
                <a 
                    href={require("../assets/resume/Resume2022.10.2.zip")}
                    download="sarah-stelljes-resume.zip"
                >
                    Download my Resume!
                </a>
                <h3>My proficiencies</h3>
                <ul className="proficiencies">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>MySQL</li>
                    <li>NoSQL (specifically mongoose)</li>
                    <li>Searching up things</li>
                    <li>Know when to ask for help</li>
                </ul>
            </div>
        </section>
    );
}