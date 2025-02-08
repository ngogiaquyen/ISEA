import {ActiveBoardProvider} from './ActiveBoardProvider';
import { LoginProvider } from './LoginProvider';
import { ToastProvider } from './ToastProvider';

function CombinedProvider({ children }) {
  return (
    <LoginProvider>
      <ActiveBoardProvider>
        <ToastProvider>
        {children}
        </ToastProvider>
      </ActiveBoardProvider>
    </LoginProvider>
  );
}

export default CombinedProvider;
