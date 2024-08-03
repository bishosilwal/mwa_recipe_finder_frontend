import IngredientType from './ingredient';

type DishType = {
  name: string;
  description: string;
  ingredients: IngredientType[];
};

export default DishType;
