import { createDrawerNavigator } from "react-navigation-drawer";
import { TabsNavigator } from "./bottomTabs";
import { SettingsNavigator } from "./stacks";
import { COLORS } from "../styles/colors";

const DrawerNavigator = createDrawerNavigator(
	{
		Profile: {
			screen: TabsNavigator,
			navigationOptions: {
				drawerLabel: "Home",
			},
		},
		Settings: SettingsNavigator,
	},
	{
		contentOptions: {
			activeTintColor: COLORS.baseColor,
			labelStyle: {
				fontFamily: "main-en",
				fontWeight: "bold",
			},
		},
	}
);

export default DrawerNavigator;
