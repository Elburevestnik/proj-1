import React from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import styles from './styles/main.module.css';

function Page() {
    console.log(styles);
    return (
        <div className={styles.pageWrapper}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default Page;