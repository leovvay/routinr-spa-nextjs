import { Influencer } from '@store/services/users';

export interface EditInfoFormInputs {
  displayName?: string;
  handle?: string;
  description?: string;
  facebook?: string;
  twitter?: string;
  youtube?: string;
  instagram?: string;
}

export interface EditInfoProps {
  influencer: Influencer;
  className?: string;
}
