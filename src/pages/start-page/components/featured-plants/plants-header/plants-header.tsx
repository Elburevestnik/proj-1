import styles from './plants-header.module.css';
import fontStyles from '../../../styles/font.module.css';

export default function PlantsHeader() {
    return (
        <div className={styles.header}>
            <p className={[fontStyles.font, fontStyles.font_size_s, fontStyles.font_weight_bold, fontStyles.font_color_brown].join(' ')}>Featured Plants</p>
            <select className={styles['header__sorting']} name="plants-sorting" id="plants-sorting">
                <option className={[fontStyles.font, fontStyles.font_size_xxs, fontStyles.font_color_brown].join(' ')} value="cheaper">Cheaper First</option>
            </select>
        </div>
    );
}