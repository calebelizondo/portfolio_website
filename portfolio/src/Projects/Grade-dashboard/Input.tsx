import { useEffect, useState } from "react";
import { Course } from "./Dashboard";

interface InputProps {
    onCourseChange: (course: Course) => void;
}

const Input: React.FC<InputProps> = ({ onCourseChange }) => {
    const [subjectCodes, setSubjectCodes] = useState<string[]>([]);
    const [courseNums, setCourseNums] = useState<string[]>([]);
    const [selectedSubject, setSelectedSubject] = useState<string>("");
    const [selectedCourse, setSelectedCourse] = useState<string>("");

    // Fetch subject codes from server on initial render
    useEffect(() => {
        fetch('https://gradedashboardtamu.onrender.com/get_subject_codes')
            .then(response => response.json())
            .then(data => {
                setSubjectCodes(data.sort());
            })
            .catch(error => console.error('Error fetching subject codes:', error));
    }, []);

    // Fetch course numbers from server when subject code changes
    useEffect(() => {
        if (selectedSubject) {
            fetch(`https://gradedashboardtamu.onrender.com/get_course_codes/${selectedSubject}`)
                .then(response => response.json())
                .then(data => {
                    setCourseNums(data.sort());
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [selectedSubject]);

    function handleSubjectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedSubject(event.target.value);
    }

    function handleCourseChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const course = event.target.value;
        setSelectedCourse(course);
        // Send selected course to parent component
        onCourseChange(new Course(selectedSubject, selectedCourse));
    }

    return (
        <div className="input-container">
            <label>Choose a subject code</label>
            <select id="subject-select" value={selectedSubject} onChange={handleSubjectChange}>
                <option value="">Select a subject</option>
                {subjectCodes.map((subject: string) => (
                    <option key={subject} value={subject}>{subject}</option>
                ))}
            </select>
            <label>Choose a course code</label>
            <select id="course-select" value={selectedCourse} onChange={handleCourseChange}>
                <option value="">Select a course</option>
                {courseNums.map((course: string) => (
                    <option key={course} value={course}>{course}</option>
                ))}
            </select>
        </div>
    );
};

export default Input;