import {
	updateNewCoffeeLocation,
	updateNewCoffeeBrewMethod,
	updateNewCoffeeBasic,
	updateCoffeeNotes,
} from "../store/actions/newCoffee";
import {
	updateSelectedCoffeeLocation,
	updateSelectedCoffeeBrewMethod,
	updateSelectedCoffeeBasic,
	updateSelectedCoffeeNotes,
} from "../store/actions/selectedCoffee";
import { useSelector } from "react-redux";

export default function useFormVars(type: string) {
	const { newCoffee, selectedCoffee }: any = useSelector((state) => state);

	return type === "add"
		? {
				type,
				coffee: newCoffee,
				basicActionCreator: updateNewCoffeeBasic,
				locationActionCreator: updateNewCoffeeLocation,
				brewMethodActionCreator: updateNewCoffeeBrewMethod,
				notesActionCreator: updateCoffeeNotes,
		  }
		: {
				type,
				coffee: selectedCoffee.edited,
				basicActionCreator: updateSelectedCoffeeBasic,
				locationActionCreator: updateSelectedCoffeeLocation,
				brewMethodActionCreator: updateSelectedCoffeeBrewMethod,
				notesActionCreator: updateSelectedCoffeeNotes,
		  };
}
