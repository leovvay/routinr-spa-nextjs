import { MembershipCreatorFormFields } from '@components/CreatorModals/MembershipCreatorModal';
import { MediaUpload } from '@store/services/common/common.interface';
import MediaInput from '@store/services/common/dto/media.input';
import { MembershipInfo } from '@store/services/membership/membership.interface';

import BaseMembershipInput from './baseMembership.input';

class UpdateMembershipInput extends BaseMembershipInput {
  id: number;

  isPublic?: boolean;

  cover?: MediaUpload;

  constructor(data: MembershipCreatorFormFields & Pick<MembershipInfo, 'id'>) {
    super(data);

    this.id = Number(data.id);

    if (data.cover) {
      this.cover = new MediaInput(data.cover);
    }
  }
}

export default UpdateMembershipInput;
