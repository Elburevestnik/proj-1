import cactus from '../../assets/kaktus-image.png';
import Icon from '../svg/svg-wrapper';
import SvgStore from '../../assets/svg-store.svg';
import {Colors} from '../../enums/colors.enum';
import React from 'react';
import styles from '../../styles/first-frame.module.css';
import buttonStyles from '../../styles/button.module.css'
import fontStyles from '../../styles/font.module.css'
import marginStyles from '../../styles/margin.module.css'

const arrowTextStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default function FirstFrame() {
    return (
        <div className={styles['first-frame']}>
            <img className={styles['first-frame__image']}
                 src={cactus}
                 alt="cactus">
            </img>
            <aside className={styles['first-frame__aside']}>
                <h1 className={[marginStyles['margin-bottom'], marginStyles['margin-bottom_size_m'], fontStyles.font, fontStyles['font_color_green']].join(' ')}>Kembang Flower Mantap</h1>
                <p className={[marginStyles['margin-bottom'], marginStyles['margin-bottom_size_m'], fontStyles.font, fontStyles['font_color_brown']].join(' ')}>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s
                </p>
                <div className={styles['first-frame__aside-actions']}>
                    <button className={[buttonStyles['action-button'], buttonStyles['action-button_type_secondary'], buttonStyles['action-button_size_xl'], buttonStyles['action-button_separator-right']].join(' ')}>
                        <p className={[fontStyles.font, fontStyles['font_size_s'], fontStyles['font_color_light-grey']].join(' ')} style={arrowTextStyle}><Icon src={SvgStore} name="arrow-left" fillColor={Colors.LightGrey} widthSize='32px' heightSize='32px' alt='Arrow icon'/><span>Previous</span></p>
                        <p className={[fontStyles.font, fontStyles['font_size_m']].join(' ')}>Kaktus Plant</p>
                    </button>
                    <button className={[buttonStyles['action-button'], buttonStyles['action-button_type_primary'],  buttonStyles['action-button_size_xl']].join(' ')}>
                        <p className={[fontStyles.font, fontStyles['font_size_s'], fontStyles['font_color_light-grey']].join(' ')} style={arrowTextStyle}><span>Next</span><Icon src={SvgStore} name="arrow-right" fillColor={Colors.LightGrey} widthSize='32px' heightSize='32px' alt='Arrow icon'/></p>
                        <p className={[fontStyles.font, fontStyles['font_size_m']].join(' ')}>Rahasia Plant</p>
                    </button>
                </div>
            </aside>
        </div>
    );
}