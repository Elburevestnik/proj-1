import styles from './plant.module.css';
import fontStyles from '../../../styles/font.module.css'

export type PlantType = {
    name: string;
    price: {
        currency: string,
        count: number
    };
    imgSrc: string;
};

export default function Plant(props: PlantType) {
    return (
        <div className={styles["plant-card"]}>
            <img className={styles["plant-card__image"]} src={props.imgSrc} alt={props.name} />
            <p className={[styles["plant-card__name"], fontStyles.font, fontStyles.font_color_brown, fontStyles.font_size_xs].join(' ')}>{props.name}</p>
            <p className={[styles["plant-card__price"], fontStyles.font, fontStyles.font_color_brown, fontStyles.font_size_xs, fontStyles.font_weight_bold].join(' ')}>{props.price.currency}{props.price.count.toFixed(2)}</p>
        </div>
    );
}