import { Tabs } from "expo-router";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Layout() {
	return (
		<Tabs>
			<Tabs.Screen
				name='profile'
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({ focus }) =>
						focus ? (
							<Feather name='eye' size={24} color='black' />
						) : (
							<Feather name='eye' size={24} color='gray' />
						),
				}}
			/>
			<Tabs.Screen
				name='chat'
				options={{
					title: "Chat",
					headerShown: false,
					tabBarIcon: ({ focus }) =>
						focus ? (
							<Ionicons
								name='chatbubble-ellipses-outline'
								size={24}
								color='black'
							/>
						) : (
							<Ionicons
								name='chatbubble-ellipses-outline'
								size={24}
								color='gray'
							/>
						),
				}}
			/>
			<Tabs.Screen
				name='bio'
				options={{
					title: "Account",
					headerShown: false,
					tabBarIcon: ({ focus }) =>
						focus ? (
							<MaterialCommunityIcons
								name='guy-fawkes-mask'
								size={24}
								color='black'
							/>
						) : (
							<MaterialCommunityIcons
								name='guy-fawkes-mask'
								size={24}
								color='gray'
							/>
						),
				}}
			/>
		</Tabs>
	);
}
