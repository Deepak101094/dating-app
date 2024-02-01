import {
	Image,
	KeyboardAvoidingView,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";
import React, { useState } from "react";
import {
	MaterialCommunityIcons,
	AntDesign,
	Ionicons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
		>
			<View style={styles.headerWrapper}>
				<View style={styles.headerImageWrapper}>
					<Image
						style={styles.img}
						source={{
							uri: "https://cdn-icons-png.flaticon.com/128/6655/6655045.png",
						}}
					/>
				</View>
				<Text style={styles.headerTitle}>Match Mate</Text>
			</View>
			<KeyboardAvoidingView>
				<View style={{ alignItems: "center" }}>
					<Text style={styles.title}> Register to your account</Text>
				</View>
				<View style={styles.mainImageWrapper}>
					<Image
						style={{ width: 100, height: 80, resizeMode: "cover" }}
						source={{
							uri: "https://cdn-icons-png.flaticon.com/128/2509/2509078.png",
						}}
					/>
				</View>
				<View style={{ marginTop: 10 }}>
					<View style={styles.inputWrapper}>
						<Ionicons
							style={{ marginLeft: 8 }}
							name='person-sharp'
							size={24}
							color='white'
						/>
						<TextInput
							value={name}
							onChangeText={(text) => setName(text)}
							style={styles.input}
							placeholder='Enter your name'
							placeholderTextColor='white'
						/>
					</View>
					<View style={styles.inputWrapper}>
						<MaterialCommunityIcons
							style={{ marginLeft: 8 }}
							name='email'
							size={24}
							color='white'
						/>
						<TextInput
							value={email}
							onChangeText={(text) => setEmail(text)}
							style={styles.input}
							placeholder='Enter your email'
							placeholderTextColor='white'
						/>
					</View>
					<View style={styles.inputWrapper}>
						<AntDesign
							style={{ marginLeft: 8 }}
							name='lock'
							size={24}
							color='white'
						/>
						<TextInput
							value={password}
							onChangeText={(text) => setPassword(text)}
							secureTextEntry={true}
							style={styles.input}
							placeholder='Enter your password'
							placeholderTextColor='white'
						/>
					</View>
				</View>

				<Pressable style={styles.btn}>
					<Text style={styles.btnTitle}>Register</Text>
				</Pressable>
				<Pressable
					onPress={() => router.replace("/Login")}
					style={{ marginTop: 12 }}
				>
					<Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
						Already have an account? Sign In
					</Text>
				</Pressable>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default Register;

const styles = StyleSheet.create({
	headerWrapper: {
		height: 200,
		backgroundColor: "pink",
		width: "100%",
	},
	headerImageWrapper: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 25,
	},
	img: {
		width: 150,
		height: 80,
		resizeMode: "contain",
	},
	headerTitle: {
		marginTop: 20,
		textAlign: "center",
		fontSize: 20,
		fontFamily: "GillSans-SemiBold",
	},
	title: {
		fontSize: 17,
		fontWeight: "bold",
		marginTop: 25,
		color: "#F9629F",
	},
	mainImageWrapper: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
	},

	inputWrapper: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: 5,
		backgroundColor: "#FFC0CB",
		paddingVertical: 5,
		borderRadius: 5,
		marginTop: 20,
	},
	input: {
		color: "white",
		marginVertical: 10,
		width: 300,
		fontSize: 17,
	},
	btn: {
		width: 200,
		backgroundColor: "#FFC0CB",
		borderRadius: 6,
		marginLeft: "auto",
		marginRight: "auto",
		padding: 15,
		marginTop: 40,
	},
	btnTitle: {
		textAlign: "center",
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});
