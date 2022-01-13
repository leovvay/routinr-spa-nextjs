import { useMedia } from 'react-use';

export default function useIsTabletVersion(force = false): boolean {
  const match = useMedia('(max-width:820px)');
  return force || match;
}
