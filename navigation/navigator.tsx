import { createAppContainer, createSwitchNavigator } from "react-navigation";
import DrawerNavigator from "./sideMenu";
import { AuthNavigator } from "./stacks";
import OnInitScreen from "../screens/OnInit";

const MainNavigator = createSwitchNavigator({
	Startup: OnInitScreen,
	Auth: AuthNavigator,
	Home: DrawerNavigator,
});

export default createAppContainer(MainNavigator);
