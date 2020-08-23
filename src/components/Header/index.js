import React from 'react';

import './styles.css';

 const Header = ({icon = null, title = '', subtitle = ''}) => (
    <header className="header d-sn-flex flex-column">
         <h1 className="mt-3">
              <i className={`fa fa-${icon}`}></i> {title}
         </h1>
     <p className="lead text-muted">{subtitle}</p>
    </header> 
);

export default Header;