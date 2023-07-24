import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeCost, changeName } from "./slices/formSlice";
import {
  carsReducer,
  addCar,
  changeSearchTerm,
  removeCar,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store, changeCost, changeName, changeSearchTerm, addCar, removeCar };
