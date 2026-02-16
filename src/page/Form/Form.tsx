import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addPerson } from "../../redux/slices/peopleSlice";
import { v4 as uuidv4 } from "uuid";
import type Person from "../../types/persone";
import { updateField, resetForm } from "../../redux/slices/formSlice";

import CustomDatePicker from "../../components/CustomDatePicker/CustomDatePicker";
import Button from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";

import styles from "./Form.module.css";

const Form = () => {
    const dispatch = useAppDispatch();
    const formData = useAppSelector((state) => state.form.draft);

    const handleChange = (field: keyof Person, value: string | Date | null) => {
        let stringValue = "";
        if (value === null) {
            stringValue = "";
        } else if (typeof value === "string") {
            stringValue = value;
        } else {
            if (field === "birthdate") {
                stringValue = value.toISOString().split("T")[0];
            } else {
                stringValue = value.toISOString();
            }
        }

        dispatch(updateField({ field, value: stringValue }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, birthdate, meetingTime } = formData;

        if (!name || !email || !birthdate || !meetingTime) return;

        const newPerson: Person = {
            id: uuidv4(),
            name,
            email,
            birthdate: birthdate.toString(),
            meetingTime: meetingTime.toString(),
        };

        dispatch(addPerson(newPerson));
        dispatch(resetForm());
    };

    return (
        <div className={styles.personForm}>
            <h2>Форма заполнения информации</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <Input
                        id="name"
                        label="Имя"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                    />
                </div>
                <div>
                    <Input
                        id="email"
                        label="Электронная почта"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                    />
                </div>
                <div>
                    <CustomDatePicker
                        id="birthdate"
                        mode="date"
                        value={
                            formData.birthdate
                                ? new Date(formData.birthdate)
                                : null
                        }
                        onChange={(value) => handleChange("birthdate", value)}
                        label="Дата рождения"
                        datePickerExtras={{
                            maxDate: new Date(Date.now()),
                            dateFormat: "dd.MM.yyyy",
                            locale: "ru",
                        }}
                    />
                </div>
                {/*Для проверки mode="datetime" */}
                {/* <div>
                    <CustomDatePicker
                        id="meetingTime"
                        mode="datetime"
                        value={
                            formData.meetingTime
                                ? new Date(formData.meetingTime)
                                : null
                        }
                        onChange={(value) => handleChange("meetingTime", value)}
                        label="Дата и время встречи"
                        datePickerExtras={{
                            minDate: new Date(Date.now()),
                            dateFormat: "dd.MM.yyyy HH:mm",
                            locale: "ru",
                            timeIntervals: 15,
                            minTime: new Date(new Date().setHours(8, 0, 0, 0)),
                            maxTime: new Date(new Date().setHours(18, 0, 0, 0)),
                        }}
                    />
                </div> */}
                <div>
                    <CustomDatePicker
                        id="meetingTime"
                        mode="time"
                        value={
                            formData.meetingTime
                                ? new Date(formData.meetingTime)
                                : null
                        }
                        onChange={(value) => handleChange("meetingTime", value)}
                        label="Время встречи"
                        datePickerExtras={{
                            dateFormat: "HH:mm",
                            locale: "ru",
                            timeIntervals: 15,
                            minTime: new Date(new Date().setHours(8, 0, 0, 0)),
                            maxTime: new Date(new Date().setHours(18, 0, 0, 0)),
                        }}
                    />
                </div>

                <Button type="submit">Добавить</Button>
            </form>
        </div>
    );
};

export default Form;
