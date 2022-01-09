import { useDispatch } from 'react-redux';

import type { AppDispatch } from '@store/index';

export default () => useDispatch<AppDispatch>();
