import React from 'react';
import '../../styles/content.css'
import kaktus from '../../assets/kaktus-image.png';
import SvgStore from '../../assets/svg-store.svg';
import Icon from '../svg/svg-wrapper';
import {Colors} from '../../enums/colors.enum';

const arrowTextStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

function Content() {
    return (
        <main className="start-page__content">
            <div className="start-page__content-info">
                <img className="start-page__image"
                     src={kaktus}
                     alt="kaktus">
                </img>
                <aside className="start-page__aside">
                    <h1 className="margin-bottom margin-bottom_size_m font font_color_green">Kembang Flower Mantap</h1>
                    <p className="margin-bottom margin-bottom_size_m font font_color_brown">Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s
                    </p>
                    <div className="start-page__aside-actions">
                        <button className="action-button action-button_type_secondary action-button_size_xl action-button_separator-right">
                            <p className='font font_size_s font_color_light-grey' style={arrowTextStyle}><Icon src={SvgStore} name="arrow-left" fillColor={Colors.LightGrey} widthSize='32px' heightSize='32px' alt='Arrow icon'/><span>Previous</span></p>
                            <p className='font font_size_m'>Kaktus Plant</p>
                        </button>
                        <button className="action-button action-button_type_primary action-button_size_xl">
                            <p className='font font_size_s font_color_light-grey' style={arrowTextStyle}><span>Next</span><Icon src={SvgStore} name="arrow-right" fillColor={Colors.LightGrey} widthSize='32px' heightSize='32px' alt='Arrow icon'/></p>
                            <p className='font font_size_m'>Rahasia Plant</p>
                        </button>
                    </div>
                </aside>
            </div>
        </main>
    );
}

export default Content;