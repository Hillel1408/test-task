import { Observer } from "components";
import styles from "components/TextBlock/TextBlock.module.scss";
import globalStyles from "styles/Globals.module.scss";

export default function TextBlock() {
    const list = [
        {
            title: "Опрошенных пользовались микрокредитами",
            text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах",
        },
        {
            title: "Опрошенных пользовались микрокредитами",
            text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах",
        },
        {
            title: "Опрошенных пользовались микрокредитами",
            text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах",
        },
        {
            title: "Опрошенных пользовались микрокредитами",
            text: "Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах",
        },
    ];

    return (
        <div className={styles.root}>
            <div className={globalStyles.container}>
                <div className={styles.grid}>
                    {list.map((item, index) => (
                        <Observer key={index}>
                            <div className={styles.gridItem}>
                                <span className={globalStyles.text18}>{item.title}</span>
                                <p className={globalStyles.text16}>{item.text}</p>
                            </div>
                        </Observer>
                    ))}
                </div>
            </div>
        </div>
    );
}
