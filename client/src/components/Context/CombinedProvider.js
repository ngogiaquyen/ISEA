import { ActiveBoardProvider } from './ActiveBoardProvider';
import { LoadBarPovider } from './LoadBarPovider';
import { LoginProvider } from './LoginProvider';
import { ToastProvider } from './ToastProvider';

function CombinedProvider({ children }) {
  return (
    <LoginProvider>
      <ActiveBoardProvider>
        <ToastProvider>
          <LoadBarPovider>{children}</LoadBarPovider>
        </ToastProvider>
      </ActiveBoardProvider>
    </LoginProvider>
  );
}

export default CombinedProvider;
