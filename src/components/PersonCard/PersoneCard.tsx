import React from "react";
import Button from "../common/Button/Button";
import styles from "./PersonCard.module.css";
import type Person from "../../types/persone";

interface PersonCardProps {
    person: Person;
    onDelete?: (id: string) => void;
}

const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("ru-RU");
};

const formatTime = (dateString: string) => {
    if (!dateString) return "-";
    return new Date(dateString)
        .toLocaleString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
        })
        .replace(",", "");
};

const formatDateTime = (dateString: string) => {
    if (!dateString) return "-";
    return new Date(dateString)
        .toLocaleString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })
        .replace(",", "");
};

const PersonCard: React.FC<PersonCardProps> = ({ person, onDelete }) => {
    return (
        <li className={styles.personCard}>
            <div className={styles.info}>
                <strong>{person.name}</strong> ({person.email},{" "}
                {formatDate(person.birthdate)}). <br /> Время встречи:{" "}
                {formatTime(person.meetingTime)}
            </div>
            <div className={styles.actions}>
                {onDelete === undefined ? (
                    <p> черновик </p>
                ) : (
                    <Button
                        variant="danger"
                        onClick={() => onDelete && onDelete(person.id)}
                    >
                        Удалить
                    </Button>
                )}
            </div>
        </li>
    );
};

export default PersonCard;
