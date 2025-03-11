import { createContext, useState } from 'react';

const CreateCandidateInforContext = createContext();

function CreateCandidateInforProvider({ children }) {
  const [interviewId, setInterviewId] = useState('');
  const [applicantID, setApplicantID] = useState([]);
  const [keyLoad, setKeyLoad] = useState(false);

  return (
    <CreateCandidateInforContext.Provider
      value={{ interviewId, setInterviewId, applicantID, setApplicantID, keyLoad, setKeyLoad }}
    >
      {children}
    </CreateCandidateInforContext.Provider>
  );
}

export { CreateCandidateInforContext, CreateCandidateInforProvider };
