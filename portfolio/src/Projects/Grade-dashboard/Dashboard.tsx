import './Dashboard.css';
import Input from './Input';
import { useState } from 'react';

export class Course {
  subjectCode: string;
  courseNumber: string;

  constructor(subjectCode: string, courseNumber: string) {
    this.subjectCode = subjectCode;
    this.courseNumber = courseNumber;
  }
}

const Dashboard = () => {

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  console.log(selectedCourse);


  return (
        <>

          <div>
            <Input onCourseChange={setSelectedCourse} />
          </div>
        </>
    );
};

export default Dashboard;