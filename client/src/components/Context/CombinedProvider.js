import {ActiveBoardProvider} from './ActiveBoardProvider';
import { LoginProvider } from './LoginProvider';

function CombinedProvider({ children }) {
  return (
    <LoginProvider>
      <ActiveBoardProvider>{children}</ActiveBoardProvider>
    </LoginProvider>
  );
}

export default CombinedProvider;
