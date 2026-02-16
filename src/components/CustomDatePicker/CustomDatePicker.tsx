import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type { Mode } from "../../types/customType";

import stylesInput from "../common/Input/Input.module.css";
import CustomDatePickerHeader from "./CustomDatePickerHeader";
import { registerLocale } from "react-datepicker";
import { ru } from "date-fns/locale/ru";

registerLocale("ru", ru);
export interface CustomDatePickerProps {
    id: string;
    mode?: Mode;
    value: Date | null;
    onChange: (date: Date | null) => void;
    label?: string;
    datePickerExtras?: Record<string, any>;
}

const CustomDatePicker = ({
    id,
    mode = "date",
    value,
    onChange,
    label,
    datePickerExtras,
}: CustomDatePickerProps) => {
    const showTime = mode === "datetime";
    const timeOnly = mode === "time";

    return (
        <div className={stylesInput.inputGroup}>
            {label && (
                <label
                    className={stylesInput.label}
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <div>
                <DatePicker
                    id={id}
                    selected={value}
                    onChange={(date: Date | Date[] | null) =>
                        onChange(Array.isArray(date) ? (date[0] ?? null) : date)
                    }
                    showTimeSelect={showTime || timeOnly}
                    showTimeSelectOnly={timeOnly}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    className={stylesInput.input}
                    renderCustomHeader={(props) => (
                        <CustomDatePickerHeader {...props} />
                    )}
                    icon={
                        <svg
                            fill="#4f46e5"
                            width="128"
                            height="128"
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            data-iconid="313630"
                            data-svgname="Calendar week solid"
                        >
                            <path d="M 9 4 L 9 5 L 5 5 L 5 27 L 27 27 L 27 5 L 23 5 L 23 4 L 21 4 L 21 5 L 11 5 L 11 4 L 9 4 z M 7 7 L 9 7 L 9 8 L 11 8 L 11 7 L 21 7 L 21 8 L 23 8 L 23 7 L 25 7 L 25 9 L 7 9 L 7 7 z M 7 11 L 25 11 L 25 25 L 7 25 L 7 11 z M 13 13 L 13 15 L 15 15 L 15 13 L 13 13 z M 17 13 L 17 15 L 19 15 L 19 13 L 17 13 z M 21 13 L 21 15 L 23 15 L 23 13 L 21 13 z M 9 17 L 9 19 L 11 19 L 11 17 L 9 17 z M 13 17 L 13 19 L 15 19 L 15 17 L 13 17 z M 17 17 L 17 19 L 19 19 L 19 17 L 17 17 z M 21 17 L 21 19 L 23 19 L 23 17 L 21 17 z M 9 21 L 9 23 L 23 23 L 23 21 L 9 21 z"></path>
                        </svg>
                    }
                    {...datePickerExtras}
                />
            </div>
        </div>
    );
};

export default CustomDatePicker;
