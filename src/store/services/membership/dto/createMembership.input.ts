import { MembershipCreatorFormFields } from '@components/CreatorModals/MembershipCreatorModal';
import { MediaUpload } from '@store/services/common/common.interface';
import MediaInput from '@store/services/common/dto/media.input';

import { CreateMembershipData } from '../membership.interface';
import BaseMembershipInput from './baseMembership.input';

class CreateMembershipInput
  extends BaseMembershipInput
  implements CreateMembershipData
{
  cover: MediaUpload;

  constructor(data: MembershipCreatorFormFields) {
    super(data);

    this.cover = new MediaInput(data.cover);
  }
}

export default CreateMembershipInput;
