import { Instructor } from "./Dashboard"

interface InstructorSelectorProps {
    instructors: Instructor[] | null;
    addInstructor: (instructor: Instructor) => void;
    removeInstructor: (instructor: Instructor) => void;
};

const InstructorSelect:React.FC<InstructorSelectorProps> = ({ instructors, addInstructor, removeInstructor }) => {
    
    //handles check and uncheck of instructor
    const instructorCheckHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const instructorName = event.target.parentElement?.textContent;
        if (instructorName && instructors) {
            const selectedInstructor = instructors.find((instructor: Instructor) => instructor.name === instructorName.trim());

            if (selectedInstructor) {
                if (event.target.checked) {
                    addInstructor(selectedInstructor);
                } else {
                    removeInstructor(selectedInstructor);
                }
            }
        }
    }

    return (
        <div className="instructor-selection-container">
            <ul className="instructor-select-list">
                {instructors?.map((instructor: Instructor) => (
                    <li key={instructor.name}>
                        <label>
                            <input type="checkbox" onChange={instructorCheckHandler} />
                            {instructor.name}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InstructorSelect;
