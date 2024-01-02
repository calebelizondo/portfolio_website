import './Dashboard.css';
import Input from './CourseSelect';
import InstructorSelect from './InstructorSelect';
import { useState, useEffect } from 'react';

export class Course {
  subjectCode: string;
  courseNumber: string;

  constructor(subjectCode: string, courseNumber: string) {
    this.subjectCode = subjectCode;
    this.courseNumber = courseNumber;
  }
}

export class Instructor {
  name: string;
  GPA: number;
  gradeDistribution: {
    A: number;
    B: number;
    C: number;
    D: number;
    F: number;
  };

  constructor(name: string, GPA: number, gradeDistribution: { A: number; B: number; C: number; D: number; F: number; }) {
    this.GPA = GPA;
    this.gradeDistribution = gradeDistribution;
    this.name = name;
  }
}

const Dashboard = () => {
  // The course selected by the user
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  // All instructors for the selected course
  const [instructors, setInstructors] = useState<Instructor[] | null>(null);
  // The instructors selected by the user
  const [selectedInstructors, setSelectedInstructors] = useState<Instructor[] | null>(null);

  //Fetch the instructors for the selected course
  useEffect(() => {
    if (selectedCourse != null) {
      fetch(`https://gradedashboardtamu.onrender.com/get_grades/${selectedCourse?.subjectCode}/${selectedCourse?.courseNumber}`)
        .then(response => response.json())
        .then(data => {
          const formattedInstructors: Instructor[] = data.map((instructorData: any) => {
            // Extract data and create Instructor objects
            const { professor, average_gpa, grade_distribution } = instructorData;
            const { A, B, C, D, F } = grade_distribution;

            // Create new Instructor object and push to the list
            return new Instructor(professor, average_gpa, { A, B, C, D, F });
          });

          // Update state with formatted instructors
          setInstructors(formattedInstructors);
        })
        .catch(error => console.error('Error fetching instructors:', error));
    }else { // If no course is selected, clear the instructors
      setInstructors(null);
      setSelectedInstructors(null);
    }
  }, [selectedCourse]); 

  function addInstructor(instructor: Instructor) {
    if (selectedInstructors == null) {
      setSelectedInstructors([instructor]);
      return;
    }else {
      setSelectedInstructors([...selectedInstructors, instructor]);
    }
  }

  function removeInstructor(instructor: Instructor) {
    if (selectedInstructors == null) {
      return;
    }
    setSelectedInstructors(selectedInstructors.filter(i => i.name !== instructor.name));
  }

  console.log("formattedInstructors: ", instructors);
  console.log("selectedInstructors: ", selectedInstructors);

  return (
        <>
          <div className='input-container'>
            <Input onCourseChange={setSelectedCourse} />
            <InstructorSelect instructors={instructors} addInstructor={addInstructor} removeInstructor={removeInstructor}/>
          </div>
        </>
    );
};

export default Dashboard;