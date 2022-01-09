import { MembershipCreatorFormFields } from '@components/CreatorModals/MembershipCreatorModal';

class BaseMembershipInput {
  content: 'All Routines and selected posts' | 'Selected posts';

  description: string;

  price: number;

  recurrence: 'month' | 'one-off';

  title: string;

  includeAddress: boolean;

  constructor(data: MembershipCreatorFormFields) {
    this.content = data.content.value;
    this.description = data.description;
    this.price = data.price.value;
    this.recurrence = data.recurrence;
    this.title = data.title;
    this.includeAddress = data.includeAddress;
  }
}

export default BaseMembershipInput;
