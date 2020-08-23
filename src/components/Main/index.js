import React from 'react';
import Header from '../Header';

import './styles.css';

//as propriedades que eu recebi no main estao sendo propagadas no header
const Main = ({children, icon, title, subtitle}) => (
    <React.Fragment>
        
        <Header icon={icon} title={title} subtitle={subtitle}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {children}
            </div>
        </main>
    </React.Fragment>
);

export default Main;