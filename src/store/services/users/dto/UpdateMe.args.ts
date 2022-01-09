import { Socials, UpdateMeArgs as IUpdateMeArgs } from '@store/services/users';
import { CompleteRegistrationFormInputs } from '@components/LoginForm/components/CompleteRegistration/CompleteRegistration.interface';

import { EditInfoFormInputs } from '@modules/profile/[slug]/components/EditInfo/EditInfo.interfaces';

class UpdateMeArgs implements IUpdateMeArgs {
  description?: string;

  displayName?: string;

  firstName?: string;

  lastName?: string;

  handle?: string;

  isCreator?: boolean;

  socials: Partial<Record<Socials, string>>;

  constructor(
    data: Partial<EditInfoFormInputs & CompleteRegistrationFormInputs>
  ) {
    this.displayName = data.displayName;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.isCreator = data.isCreator;
    this.handle = data.handle;
    this.description = data.description;
    this.socials = {
      facebook: data.facebook,
      twitter: data.twitter,
      youtube: data.youtube,
      instagram: data.instagram,
    };
  }
}

export default UpdateMeArgs;
