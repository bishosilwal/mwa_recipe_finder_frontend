import IngredientType from './ingredient';

type DishType = {
  _id: string | null;
  name: string;
  category: string;
  country: string;
  ingredients: IngredientType[];
};

export default DishType;
