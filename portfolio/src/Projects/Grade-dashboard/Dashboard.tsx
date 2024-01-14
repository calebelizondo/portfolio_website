import { useState, useEffect } from 'react';import './Dashboard.css';
import CourseSelect from './CourseSelect';
import InstructorSelect from './InstructorSelect';
import GradeDistDisplay from './GradeDistDisplay';
import CourseEvalDisplay from './CourseEvalDisplay';

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
  evalResponses: number[][] | null;

  gradeDistribution: {
    a: number;
    b: number;
    c: number;
    d: number;
    f: number;
  };

  constructor(name: string, GPA: number, gradeDistribution: { a: number; b: number; c: number; d: number; f: number; }, 
      evalResponses: number[][] | null = null) {
      this.GPA = GPA;
      this.gradeDistribution = gradeDistribution;
      this.name = name;
      this.evalResponses = evalResponses;
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
            // Create new Instructor object and push to the list
            return new Instructor(professor, average_gpa, grade_distribution);
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
    // Fetch eval responses before adding instructor
    fetch(`https://gradedashboardtamu.onrender.com/get_evals/${selectedCourse?.subjectCode}/${selectedCourse?.courseNumber}/${instructor.name}`)
      .then(response => response.json())
        .then(data => {
          instructor.evalResponses = data.eval_answers;
        })
          .catch(error => {
              console.error('Error fetching evals:', error);
        }
      );

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

  return (
        <div className='dashboard-container'>
          <div className='input-container'>
            <CourseSelect onCourseChange={setSelectedCourse} />
            <InstructorSelect instructors={instructors} addInstructor={addInstructor} removeInstructor={removeInstructor}/>
          </div>
          <GradeDistDisplay instructors={selectedInstructors} />
          <CourseEvalDisplay instructors={selectedInstructors} />
        </div>
    );
};

export default Dashboard;