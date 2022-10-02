import React, { useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

export default function Main({currentNavTitle}){
    const { titleName } = currentNavTitle;

    // const [returnInfo] = useState([
    //     [{
    //         category: 'about me',
    //         returning: {
    //             chilren: [<About/>]}
    //     }],
    //     [{
    //         category: 'contact',
    //         returning: {
    //             chilren: [<Contact/>]}
    //     }],
    //     [{
    //         category: 'portfolio',
    //         returning: {
    //             chilren: [<Portfolio/>]}
    //     }],
    //     [{
    //         category: 'resume',
    //         returning: {
    //             chilren: [<Resume/>]}
    //     }]
    // ]);

    // const currentPage = returnInfo.filter((returnThis) => returnThis.category === titleName);

    useEffect(()=> {
        document.title = (titleName);
    }, [titleName]);

    return(
        <div>
            {titleName === 'about me' ? <About/>
            : titleName === 'portfolio' ? <Portfolio/>
            : titleName === 'contact' ? <Contact/>
            : <Resume/>}
        </div>
    )
}