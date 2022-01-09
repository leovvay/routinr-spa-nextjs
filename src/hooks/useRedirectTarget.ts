import {
  setRedirectTarget as setRedirectTargetAction,
  clearRedirectTarget,
} from '@store/services/redirect';

import useAppSelector from './useAppSelector';
import useAppDispatch from './useAppDispatch';

export default function useRedirectTarget(): [
  string | null | undefined,
  (value: string) => void,
  () => void
] {
  const dispatch = useAppDispatch();
  const redirectTarget = useAppSelector((state) => state.redirectTarget.value);
  const setRedirectTarget = (value: string) =>
    dispatch(setRedirectTargetAction(value));
  const resetRedirectTarget = () => dispatch(clearRedirectTarget());

  return [redirectTarget, setRedirectTarget, resetRedirectTarget];
}
