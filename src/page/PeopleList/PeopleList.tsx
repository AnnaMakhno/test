import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { deletePerson } from "../../redux/slices/peopleSlice";
import PersonCard from "../../components/PersonCard/PersoneCard";
import styles from "./PeopleList.module.css";
import type Person from "../../types/persone";

const PeopleList = () => {
    const dispatch = useAppDispatch();
    const people = useAppSelector((state) => state.people);
    const draft = useAppSelector((state) => state.form.draft);

    const isDraftFilled = (draft: Person) => {
        return Object.values(draft).some((value) => value !== "");
    };

    const allPeople = isDraftFilled(draft)
        ? [...people, { ...draft, id: "draft" }]
        : people;

    const handleDeletePerson = (id: string) => {
        dispatch(deletePerson(id));
    };

    return (
        <div className={styles.peopleListPage}>
            <h2>Список людей</h2>

            {allPeople.length === 0 ? (
                <p>Нет доступных людей</p>
            ) : (
                <ul className={styles.peopleList}>
                    {allPeople.map((person) => (
                        <PersonCard
                            key={person.id}
                            person={person}
                            onDelete={
                                person.id === "draft"
                                    ? undefined
                                    : handleDeletePerson
                            }
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PeopleList;
