import { Observer } from "components";
import { useState } from "react";
import classNames from "classnames";
import styles from "components/Faq/Faq.module.scss";
import globalStyles from "styles/Globals.module.scss";

export default function Faq() {
    const [activeSpoiler, setActiveSpoiler] = useState<number | null>(null);

    const list = [
        {
            title: "Подтверждено: сознание наших соотечественников не замутнено пропагандой?",
            text: "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
        },
        {
            title: "Прототип нового сервиса - это как трубный призыв?",
            text: "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
        },
        {
            title: "Частокол на границе продолжает удивлять?",
            text: "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
        },
        {
            title: "Очевидцы сообщают, что слышали грохот грома градущих изменений?",
            text: "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
        },
        {
            title: "И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?",
            text: "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
        },
        {
            title: "Нынче никто не может себе позволить инициировать треск разлетающихся скреп?",
            text: "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
        },
        {
            title: "Высококачественный прототип будущего проекта обнадёживает?",
            text: "В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.",
        },
    ];
    return (
        <div className={styles.root} id="faq">
            <div className={globalStyles.container}>
                <Observer>
                    <h2 className={classNames(globalStyles.title2, styles.title)}>Вопросы и ответы</h2>
                </Observer>
                <ul className={styles.spoilers}>
                    {list.map((item, index) => (
                        <Observer key={index}>
                            <li
                                onClick={() => {
                                    setActiveSpoiler(index);
                                }}
                                className={classNames(activeSpoiler === index && styles.activeSpoiler, styles.spoilersItem)}
                            >
                                <h3>
                                    <span className={globalStyles.text18}>{item.title}</span>
                                    <button>
                                        <svg width="24" height="24" fill="none">
                                            <path
                                                d="M17 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z"
                                                fill="#191C1F"
                                            />
                                            <circle cx="12" cy="12" r="11" stroke="#191C1F" strokeWidth="2" />
                                        </svg>
                                    </button>
                                </h3>
                                <div>
                                    <p className={globalStyles.text18}>{item.text}</p>
                                </div>
                            </li>
                        </Observer>
                    ))}
                </ul>
            </div>
        </div>
    );
}
