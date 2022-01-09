import { PostCreatorFormFields } from '@components/CreatorModals/PostCreatorModal';
import { Post, UpdatePostData } from '@store/services/posts';
import { MediaToRemove } from '@store/services/common/common.interface';
import CreatePostInput from '@store/services/posts/dto/createPost.input';
import MediaToRemoveInput from '@store/services/common/dto/media-to-remove.input';

class UpdatePostInput extends CreatePostInput implements UpdatePostData {
  id: number;

  mediaToRemove?: MediaToRemove[];

  constructor(data: PostCreatorFormFields & Pick<Post, 'id'>) {
    super(data);

    this.id = Number(data.id);
    this.mediaToRemove =
      data.mediaToRemove?.map((media) => new MediaToRemoveInput(media)) ?? [];
  }
}

export default UpdatePostInput;
