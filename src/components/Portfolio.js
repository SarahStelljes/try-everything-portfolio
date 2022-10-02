import React, { useState } from "react";

export default function Portfolio(){
    const [apps] = useState([
        {
            title: 'Zoo Keepr',
            deployedLink: 'https://zookeepr-animal-data-api.herokuapp.com/',
            gitHubLink: 'https://github.com/SarahStelljes/zookeepr',
            imageName: 'zookeepr'
        },
        {
            title: 'JATE',
            deployedLink: 'https://serene-journey-58435.herokuapp.com/',
            gitHubLink: 'https://github.com/SarahStelljes/TextEdor',
            imageName: 'TextEdor-JATE'
        },
        {
            title: 'Satori Notes - Note Taker',
            deployedLink: 'https://h23ni9-satori-notes.herokuapp.com/',
            gitHubLink: 'https://github.com/SarahStelljes/SatoriNotes',
            imageName: 'satori-notes'
        },
        {
            title: 'Contact Cards',
            deployedLink: 'https://frozen-falls-61238.herokuapp.com/',
            gitHubLink: 'https://github.com/SarahStelljes/contact-card',
            imageName: 'contact-cards'
        },
        {
            title: 'MechTech Blog',
            deployedLink: 'https://intense-brook-68539.herokuapp.com/',
            gitHubLink: 'https://github.com/SarahStelljes/MechTech',
            imageName: 'mechtech-blog'
        },
        {
            title: 'Pizza Hunt',
            deployedLink: 'https://safe-brook-63406.herokuapp.com/',
            gitHubLink: 'https://github.com/SarahStelljes/pizza-hunt',
            imageName: 'pizza-hunt'
        }
    ]);

    return(
        <section>
            <h2>MY PORTFOLIO</h2>
            <div>
                {apps.map((app) => (
                    <div className="app-card" key={app.title}>
                        <h3>{app.title}</h3>
                        <img
                            className="app-card-img image"
                            src={require(`../assets/images/${app.imageName}.JPG`)}
                            alt={app.title}
                        />
                        <div>
                            <a href={app.deployedLink}>
                                Live Link
                            </a>
                            <a href={app.gitHubLink}>
                                GitHub Repo Link
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}