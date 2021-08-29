import React from 'react';
import FirstFrame from '../first-frame/first-frame';
import styles from '../../styles/main.module.css';
import Features from '../features/features';
import FeaturedPlants from '../featured-plants/featured-plants';

function Content() {
    return (
        <main className={styles.content}>
            <FirstFrame/>
            <Features />
            <FeaturedPlants />
        </main>
    );
}

export default Content;