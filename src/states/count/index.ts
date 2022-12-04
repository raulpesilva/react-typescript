import { createReStateMethods } from '@raulpesilva/re-state';

export const COUNT_KEY = 'count';
export const countInitialValue = 0;

export const { useCountSelect, dispatchCount } = createReStateMethods(COUNT_KEY, countInitialValue);
