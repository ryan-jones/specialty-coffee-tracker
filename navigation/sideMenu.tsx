import { createDrawerNavigator } from "react-navigation-drawer";
import { TabsNavigator } from "./bottomTabs";
import { createStackNavigator } from "react-navigation-stack";
import SettingsScreen from "../screens/Settings";

const SettingsNavigator = createStackNavigator({
	Settings: SettingsScreen,
});
const MainNavigator = createDrawerNavigator({
	Profile: TabsNavigator,
	Settings: SettingsNavigator,
});

export default MainNavigator;
