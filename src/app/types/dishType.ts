import IngredientType from './ingredient';

type DishType = {
  _id: string;
  name: string;
  category: string;
  country: string;
  ingredients: IngredientType[];
};

export default DishType;
