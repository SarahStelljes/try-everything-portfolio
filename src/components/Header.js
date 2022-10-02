import React from 'react';

export default function Header(props){
    const {
        categories = [],
        currentNavTitle,
        setCurrentNavTitle
    } = props;
    return(
        <header>
            <h1>Sarah Stelljes</h1>
            <nav>
                <ul>
                    {categories.map((category) => (
                        <li
                            className={`${
                                currentNavTitle.titleName === category.titleName && category.titleName
                            }`} key={category.titleName}
                        >
                            <span onClick={() => {
                                setCurrentNavTitle(category);
                                }}
                            >
                                {category.titleName}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}