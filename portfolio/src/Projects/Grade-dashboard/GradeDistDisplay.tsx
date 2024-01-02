import { Instructor } from "./Dashboard"
import GradeCard from "./GradeCard";

interface GradeDistDisplayProps {
  instructors: Instructor[] | null;
}; 


const GradeDistDisplay: React.FC<GradeDistDisplayProps> = ( { instructors } ) => {
  return (
    <div className="grade-dists-container">
        { instructors?.map((instructor) => (
            <GradeCard instructor={instructor} />
        ) )}
    </div>
  );
};

export default GradeDistDisplay;