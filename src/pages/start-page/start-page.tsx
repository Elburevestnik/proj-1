import React from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import Footer from './components/footer/footer';

function StartPage() {
    return (
        <div className="start-page">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default StartPage;