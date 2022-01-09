import { CreateRoutineData } from '@store/services/routines';
import { Category } from '@store/services/categories';
import { OverviewForm } from '@components/RoutineBuilder/RoutineBuilder.types';

class CreateRoutineInput implements CreateRoutineData {
  benefits?: string;

  categories?: Pick<Category, 'id'>[];

  description?: string;

  hashtag?: string;

  title?: string;

  constructor(routineData: Partial<OverviewForm>) {
    this.title = routineData.title;
    this.benefits = routineData.benefits;
    this.description = routineData.description;
    this.hashtag = routineData.hashtag;
    this.categories = routineData.categories?.map((category) => ({
      id: Number(category.value),
    }));
  }
}

export default CreateRoutineInput;
