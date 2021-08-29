import PlantsHeader from './plants-header/plants-header';
import Plant, {PlantType} from './plant/plant';
import styles from './featured-plants.module.css';
import cactus_1 from '../../assets/1.png';
import cactus_2 from '../../assets/2.png';
import cactus_3 from '../../assets/3.png';
import cactus_4 from '../../assets/4.png';
import cactus_5 from '../../assets/5.png';

export const FEATURED_PLANTS: PlantType[] = [
    {
        name: 'Kaktus Plants',
        price: {
            currency: 'IDR',
            count: 85.000
        },
        imgSrc: cactus_1
    },
    {
        name: 'Landak Plants',
        price: {
            currency: 'IDR',
            count: 105.000
        },
        imgSrc: cactus_2

    },
    {
        name: 'Kecubung Plants',
        price: {
            currency: 'IDR',
            count: 185.000
        },
        imgSrc: cactus_3
    },
    {
        name: 'Kecubung Plants 1',
        price: {
            currency: 'IDR',
            count: 75.000
        },
        imgSrc: cactus_4
    },
    {
        name: 'Kecubung Plants 2',
        price: {
            currency: 'IDR',
            count: 15.000
        },
        imgSrc: cactus_5
    }
];

export default function FeaturedPlants() {
    const plantsList = FEATURED_PLANTS.map((plant: PlantType, index: number) => {
        return <Plant key={plant.name + index} {...plant}/>;
    });
    return (
        <div>
            <PlantsHeader/>
            <div className={styles['featured-plants']}>
                {plantsList}
            </div>
        </div>
    );
}