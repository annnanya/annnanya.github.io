import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Skills from "./components/Header/Skills";

const App = () => {
	return (
		<>
			<Toaster position="top-center" />
			<Header />
			{/* <Skills /> */}
			<Nav />
			<Portfolio />
			{/* <Contacts /> */}
			<Footer />
		</>
	);
};

export default App;
