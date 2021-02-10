
function Header({links}){    
    
    const resultHTML =[];

    links.forEach(({id,title, link}) => {
        resultHTML.push(<a className="nav-links__item" href={link} key={id}>{title}</a>)        
    });

    return( <>
        <header className="header">
            <div className="container">
                <div className="nav-menu">
                    <div className="nav-img">
                        <span>Mehmet Şerif Paşa</span>
                    </div>
                
                    <nav className="nav-links">
                        {resultHTML}
                    </nav>
    
                </div>
            </div>
        </header>      
        </>
    );
}

export default Header;
