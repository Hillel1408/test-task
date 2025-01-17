import { Observer } from "components";
import globalStyles from "styles/Globals.module.scss";
import styles from "components/HowItWorks/HowItWorks.module.scss";
import { images } from "assets";
import classNames from "classnames";

export default function HowItWorks() {
    const list = [
        {
            image: images.waiting,
            title: "Прочитай задание внимательно",
            text: "Думаю у тебя не займет это больше двух-трех минут",
        },
        {
            image: images.deliveryTruck,
            title: "Изучи весь макет заранее",
            text: "Подумай как это будет работать на разных разрешениях и при скролле",
        },
        {
            image: images.secure,
            title: "Сделай хорошо",
            text: "Чтобы мы могли тебе доверить подобные задачи в будущем",
        },
        {
            image: images.moneyBags,
            title: "Получи предложение",
            text: "Ну тут все просто, не я придумал правила, но думаю так и будет)))",
        },
    ];

    return (
        <div className={styles.root} id="howItWorks">
            <div className={globalStyles.container}>
                <Observer>
                    <h2 className={classNames(globalStyles.title2, styles.title)}>Как это работает</h2>
                </Observer>
                <Observer>
                    <div className={styles.grid}>
                        {list.map((item, index) => (
                            <div key={index} className={styles.gridItem}>
                                <img src={item.image} alt="" width="" height="" />
                                <div>
                                    <span className={globalStyles.title6}>{item.title}</span>
                                    <p className={globalStyles.text14}>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Observer>
            </div>
        </div>
    );
}
