import axios from 'axios';
import { createMockApi } from 'utils';

export const coreApi = axios.create({ baseURL: import.meta.env.VITE_API_URL });
export const mockCoreApi = createMockApi({ baseURL: import.meta.env.VITE_API_URL });
