import useFormContext from "./useFormContext";
import {
	updateNewCoffeeLocation,
	updateNewCoffeeBrewMethod,
	updateNewCoffeeBasic,
} from "../store/actions/newCoffee";
import {
	updateSelectedCoffeeLocation,
	updateSelectedCoffeeBrewMethod,
	updateSelectedCoffeeBasic,
} from "../store/actions/selectedCoffee";
import { useSelector } from "react-redux";
import { ICoffee } from "../models/interfaces";

export default function useFormVars() {
	const { type } = useFormContext();
	const store: any = useSelector((state) => state);

	const coffee: ICoffee =
		type === "add" ? store.newCoffee : store.coffees.selectedCoffee;

	const basicActionCreator =
		type === "add" ? updateNewCoffeeBasic : updateSelectedCoffeeBasic;

	const locationActionCreator =
		type === "add" ? updateNewCoffeeLocation : updateSelectedCoffeeLocation;

	const brewMethodActionCreator =
		type === "add" ? updateNewCoffeeBrewMethod : updateSelectedCoffeeBrewMethod;

	return {
		coffee,
		basicActionCreator,
		locationActionCreator,
		brewMethodActionCreator,
	};
}
