import FeatureItem, {FeatureType} from './feature-item/feature-item';
import styles from '../../styles/features.module.css';

export const FEATURES: FeatureType[] = [
    {
        icon: 'delivery',
        feature: 'Fast Delivery',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
    },
    {
        icon: 'customer-service',
        feature: 'Great Customer Service',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
    },
    {
        icon: 'plant',
        feature: 'Original Plants',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
    },
    {
        icon: 'price',
        feature: 'Affordable Price',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard',
    },
];

export default function Features() {
    const features = FEATURES.map((item: FeatureType, index: number) => {
        return <FeatureItem key={item.feature + index} {...item}/>;
    });
    return (
        <div className={styles.features}>
            {features}
        </div>
    );
}