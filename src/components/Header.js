import React from 'react';

export default function Header(props){
    const {
        categories = [],
        currentNavTitle,
        setCurrentNavTitle
    } = props;
    return(
        <header>
            <h1>Sarah E. Stelljes</h1>
            <nav>
                <ul>
                    {categories.map((category) => (
                        <li
                            className={`displaying-${
                                currentNavTitle.titleName === category.titleName}`} key={category.titleName}
                                onClick={() => {
                                    setCurrentNavTitle(category);
                                    }}
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