import { useMedia } from 'react-use';

export default function useIsMobileVersion(force = false): boolean {
  const match = useMedia('(max-width:768px)');
  return force || match;
}
