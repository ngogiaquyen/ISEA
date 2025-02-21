import { createContext, useState } from 'react';

const CreateCandidateInforContext = createContext();

function CreateCandidateInforProvider({ children }) {
  const [interviewId, setInterviewId] = useState('');
  const [applicantID, setApplicantID] = useState('');
  return (
    <CreateCandidateInforContext.Provider value={{ interviewId, setInterviewId, applicantID, setApplicantID }}>
      {children}
    </CreateCandidateInforContext.Provider>
  );
}

export { CreateCandidateInforContext, CreateCandidateInforProvider };
