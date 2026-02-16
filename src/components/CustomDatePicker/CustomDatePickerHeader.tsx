import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import styles from "./CustomDatePicker.module.css";

interface Props {
    date: Date;
    decreaseMonth: () => void;
    increaseMonth: () => void;
    changeMonth: (month: number) => void;
    changeYear: (year: number) => void;
}

const months = Array.from({ length: 12 }, (_, i) =>
    format(new Date(2020, i, 1), "LLLL", { locale: ru }),
);

const CustomDatePickerHeader = ({
    date,
    decreaseMonth,
    increaseMonth,
    changeMonth,
    changeYear,
}: Props) => {
    const yearRef = useRef<HTMLDivElement | null>(null);
    const [openType, setOpenType] = useState<"month" | "year" | null>(null);

    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth();

    const startYear = 1900;
    const endYear = new Date().getFullYear() + 30;

    const years = Array.from(
        { length: endYear - startYear + 1 },
        (_, i) => startYear + i,
    );

    const toggle = (type: "month" | "year") => {
        setOpenType((prev) => (prev === type ? null : type));
    };

    useEffect(() => {
        if (openType === "year" && yearRef.current) {
            yearRef.current.scrollIntoView({ block: "center" });
        }
    }, [openType]);

    return (
        <div className={styles.customHeader}>
            <button
                type="button"
                onClick={decreaseMonth}
                className={styles.navButton}
            >
                &lsaquo;
            </button>

            <div className={styles.centerWrapper}>
                <span
                    className={styles.monthYearPart}
                    onClick={() => toggle("month")}
                >
                    {months[currentMonth]},
                </span>

                <span
                    className={styles.monthYearPart}
                    onClick={() => toggle("year")}
                >
                    {currentYear}
                </span>
            </div>

            <button
                type="button"
                onClick={increaseMonth}
                className={styles.navButton}
            >
                &rsaquo;
            </button>

            {openType === "month" && (
                <div className={styles.dropdown}>
                    <div className={styles.monthGrid}>
                        {months.map((month, index) => (
                            <div
                                key={month}
                                className={`${styles.monthItem} ${
                                    index === currentMonth
                                        ? styles.activeItem
                                        : ""
                                }`}
                                onClick={() => {
                                    changeMonth(index);
                                    setOpenType(null);
                                }}
                            >
                                {month}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {openType === "year" && (
                <div className={styles.dropdown}>
                    <div className={styles.yearList}>
                        {years.map((year) => (
                            <div
                                ref={year === currentYear ? yearRef : null}
                                key={year}
                                className={`${styles.monthItem} ${
                                    year === currentYear
                                        ? styles.activeItem
                                        : ""
                                }`}
                                onClick={() => {
                                    changeYear(year);
                                    setOpenType(null);
                                }}
                            >
                                {year}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomDatePickerHeader;
