import styles from '../../../styles/feature-item.module.css';
import fontStyles from '../../../styles/font.module.css';
import Icon from '../../svg/svg-wrapper';
import Svg from '../../../assets/svg-store.svg';

export type FeatureType = {
    feature: string;
    description: string;
    icon: string;
}

export default function FeatureItem(props: FeatureType) {
    return (
        <div className={styles['feature-item']}>
            <Icon className={styles['feature-item__icon']} src={Svg} name={props.icon}/>
            <p className={[styles['feature-item__name'], fontStyles.font, fontStyles.font_size_xs, fontStyles.font_color_green, fontStyles.font_weight_bold].join(' ')}>{props.feature}</p>
            <p className={[styles['feature-item__description'], fontStyles.font, fontStyles.font_size_xxs, fontStyles.font_color_green].join(' ')}>{props.description}</p>
        </div>
    );
}