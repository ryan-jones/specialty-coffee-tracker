import { createAppContainer, createSwitchNavigator } from "react-navigation";
import DrawerNavigator from "./sideMenu";
import AuthScreen from "../screens/Auth";
import { createStackNavigator } from "react-navigation-stack";

const AuthNavigator = createStackNavigator({
	Auth: AuthScreen,
});

const MainNavigator = createSwitchNavigator({
	Auth: AuthNavigator,
	Profile: DrawerNavigator,
});

export default createAppContainer(MainNavigator);
