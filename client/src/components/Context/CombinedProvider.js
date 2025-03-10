import { ActiveBoardProvider } from './ActiveBoardProvider';
import { CreateCandidateInforProvider } from './CreateCandidateInforProvider';
import { LoadBarPovider } from './LoadBarPovider';
import { LoginProvider } from './LoginProvider';
import { MenuSelectIdProvider } from './MenuSelectIdProvider';
import { ModalOverLayProvider } from './ModalOverlayProvider';
import { HomeProvider } from './HomeProvider';
import { ThemeProvider } from './ThemeContext';
import { ToastProvider } from './ToastProvider';

function CombinedProvider({ children }) {
  return (
    <HomeProvider>
      <ThemeProvider>
        <LoginProvider>
          <ActiveBoardProvider>
            <ToastProvider>
              <LoadBarPovider>
                <ModalOverLayProvider>
                  <CreateCandidateInforProvider>
                    <MenuSelectIdProvider>{children}</MenuSelectIdProvider>
                  </CreateCandidateInforProvider>
                </ModalOverLayProvider>
              </LoadBarPovider>
            </ToastProvider>
          </ActiveBoardProvider>
        </LoginProvider>
      </ThemeProvider>
    </HomeProvider>
  );
}

export default CombinedProvider;
