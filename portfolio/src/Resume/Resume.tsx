const Resume: React.FC = () => {

  const downloadResume = () => {
    const link = document.createElement('a');
    link.download = 'resume.pdf';
    link.href = '/resume.pdf';
    link.click();
  }

  return (
    <>
        here is my resume
    </>
  );
};

export default Resume; 