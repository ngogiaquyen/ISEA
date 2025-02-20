import { ActiveBoardProvider } from './ActiveBoardProvider';
import { CreateCandidateInforProvider } from './CreateCandidateInforProvider';
import { LoadBarPovider } from './LoadBarPovider';
import { LoginProvider } from './LoginProvider';
import { ModalOverLayProvider } from './ModalOverlayProvider';
import { ThemeProvider } from './ThemeContext';
import { ToastProvider } from './ToastProvider';

function CombinedProvider({ children }) {
  return (
    <ThemeProvider>
      <LoginProvider>
        <ActiveBoardProvider>
          <ToastProvider>
            <LoadBarPovider>
              <ModalOverLayProvider>
                <CreateCandidateInforProvider>{children}</CreateCandidateInforProvider>
              </ModalOverLayProvider>
            </LoadBarPovider>
          </ToastProvider>
        </ActiveBoardProvider>
      </LoginProvider>
    </ThemeProvider>
  );
}

export default CombinedProvider;
