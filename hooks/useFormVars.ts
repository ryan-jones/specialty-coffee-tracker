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

export default function useFormVars() {
	const { type } = useFormContext();
	const { newCoffee, selectedCoffee }: any = useSelector((state) => state);

	return type === "add"
		? {
				type,
				coffee: newCoffee,
				basicActionCreator: updateNewCoffeeBasic,
				locationActionCreator: updateNewCoffeeLocation,
				brewMethodActionCreator: updateNewCoffeeBrewMethod,
		  }
		: {
				type,
				coffee: selectedCoffee.edited,
				basicActionCreator: updateSelectedCoffeeBasic,
				locationActionCreator: updateSelectedCoffeeLocation,
				brewMethodActionCreator: updateSelectedCoffeeBrewMethod,
		  };
}
