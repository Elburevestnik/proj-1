import React from 'react';
import '../../styles/header.css'
import SvgStore from '../../assets/svg-store.svg';
import Icon from '../svg/svg-wrapper';
import {Colors} from '../../enums/colors.enum';

function Header() {
    return (
        <header className="start-page__header">
            <div className="start-page__header-logo">
                <Icon src={SvgStore} name="logo" widthSize='36px' heightSize='36px' alt='Logo icon'/>
            </div>
            <div className="start-page__header-actions">
                <button className="action-button action-button_type_svg">
                    <Icon src={SvgStore} name="searcher" strokeColor={Colors.Brown} widthSize='20px' heightSize='20px' className='svg_size_s' alt='Search icon'/>
                </button>
                <button className="action-button action-button_type_svg">
                    <Icon src={SvgStore} name="basket" strokeColor={Colors.Brown} widthSize='20px' heightSize='20px' className='svg_size_s' alt='Basket icon'/>
                </button>
                <button className="action-button action-button_type_secondary action-button_size_s action-button_separator-right">Sign In</button>
                <button className="action-button action-button_type_primary action-button_size_s">Sign Up</button>
            </div>
        </header>
    );
}

export default Header;