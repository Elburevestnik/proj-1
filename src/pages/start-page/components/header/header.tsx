import React from 'react';
import SvgStore from '../../assets/svg-store.svg';
import Icon from '../svg/svg-wrapper';
import {Colors} from '../../enums/colors.enum';
import headerStyles from '../../styles/header.module.css';
import buttonStyles from '../../styles/button.module.css';

function Header() {
    return (
        <header className={headerStyles.header}>
            <div>
                <Icon src={SvgStore} name="logo" widthSize='36px' heightSize='36px' alt='Logo icon'/>
            </div>
            <div className={headerStyles['header-actions']}>
                <button className={[buttonStyles['action-button'], buttonStyles['action-button_type_svg']].join(' ')}>
                    <Icon src={SvgStore} name="searcher" strokeColor={Colors.Brown} widthSize='20px' heightSize='20px' className='svg_size_s' alt='Search icon'/>
                </button>
                <button className={[buttonStyles['action-button'], buttonStyles['action-button_type_svg']].join(' ')}>
                    <Icon src={SvgStore} name="basket" strokeColor={Colors.Brown} widthSize='20px' heightSize='20px' className='svg_size_s' alt='Basket icon'/>
                </button>
                <button className={[buttonStyles['action-button'], buttonStyles['action-button_type_secondary'], buttonStyles['action-button_size_s'], buttonStyles['action-button_separator-right']].join(' ')}>Sign In</button>
                <button className={[buttonStyles['action-button'], buttonStyles['action-button_type_primary'],  buttonStyles['action-button_size_s']].join(' ')}>Sign Up</button>
            </div>
        </header>
    );
}

export default Header;