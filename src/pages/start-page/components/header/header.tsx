import React from 'react';
import '../../styles/header.css'
import SvgWrapper from '../svg/svg-wrapper';
import searcher from '../../assets/searcher.svg';
import basket from '../../assets/basket.svg';

function Header() {
    return (
        <header className="start-page__header">
            <div className="start-page__header-actions">
                <button className="action-button action-button_size_s"><SvgWrapper src={searcher} className='svg_size_s'/></button>
                <button className="action-button action-button_size_s"><SvgWrapper src={basket} className='svg_size_s'/></button>
                <button className="action-button action-button_type_secondary action-button_size_s action-button_separator-right">Sign In</button>
                <button className="action-button action-button_type_primary action-button_size_s">Sign Up</button>
            </div>
        </header>
    );
}

export default Header;