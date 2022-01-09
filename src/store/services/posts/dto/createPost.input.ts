import { PostCreatorFormFields } from '@components/CreatorModals/PostCreatorModal';
import { CreatePostData } from '@store/services/posts';
import { MediaUpload } from '@store/services/common/common.interface';
import MediaInput from '@store/services/common/dto/media.input';

class CreatePostInput implements CreatePostData {
  description: string;

  membershipId: number | null;

  membershipType: 'All Memberships' | 'Selected Membership';

  isPremium: boolean;

  tags: string[];

  title: string;

  youtubeUrl: string;

  attachments: MediaUpload[];

  constructor(data: PostCreatorFormFields) {
    const isSelectedMemberships = data.membership?.value !== -1;

    this.description = data.description;
    this.title = data.title;
    this.isPremium = data.isPremium;
    this.membershipId = null;
    this.membershipType = 'All Memberships';
    this.tags = data.tags.map((tag) => tag.label as string);
    this.attachments = data.attachments.map((media) => new MediaInput(media));

    this.youtubeUrl = data.youtubeUrl;

    if (isSelectedMemberships && data.membership) {
      this.membershipId = data.membership.value as number;
      this.membershipType = 'Selected Membership';
    }
  }
}

export default CreatePostInput;
