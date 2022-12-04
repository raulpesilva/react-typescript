import { createReStateMethods } from '@raulpesilva/re-state';

const AUTHENTICATED_KEY = 'authenticated';
const authenticatedInitialValue = false;

const methods = createReStateMethods(AUTHENTICATED_KEY, authenticatedInitialValue);
export const { useAuthenticatedSelect, dispatchAuthenticated } = methods;
