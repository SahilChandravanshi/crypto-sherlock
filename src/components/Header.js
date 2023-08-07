import { useEffect, useState } from "react";
import {
	AppBar,
	Container,
	MenuItem,
	Select,
	Toolbar,
	Typography,
} from "@material-ui/core";
import {
	createTheme,
	makeStyles,
	ThemeProvider,
} from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
	title: {
		flex: 1,
		color: "gold",
		fontFamily: "Montserrat",
		fontWeight: "bold",
		cursor: "pointer",
	},
	headerImage: {
		[theme.breakpoints.down("xs")]: {
			display: "none",
		},
	},
}));

const darkTheme = createTheme({
	palette: {
		primary: {
			main: "#fff",
		},
		type: "dark",
	},
});

const Header = () => {
	const classes = useStyles();
	// import states from Crypto Context
	const { currency, setCurrency } = CryptoState();

	// state to set elevation of navbar on scroll
	const [elevationLevel, setElevationLevel] = useState(0);
	// state to set navbar color on scroll
	const [navColor, setnavColor] = useState("transparent");
	// function to change properties of navbar on scroll
	const listenScrollEvent = () => {
		window.scrollY > 10 ? setnavColor("#000915") : setnavColor("transparent");
		window.scrollY > 10 ? setElevationLevel(3) : setElevationLevel(0);
	};
	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);

	const navigate = useNavigate();

	return (
		<ThemeProvider theme={darkTheme}>
			<AppBar
				position="fixed"
				style={{ backgroundColor: navColor }}
				elevation={elevationLevel}
			>
				<Container>
					<Toolbar>
						<Typography
							onClick={() => navigate(`/`)}
							variant="h6"
							className={classes.title}
							style={{
								display: "flex",
								// justifyContent: "center",
								alignItems: "center",
								gap: 2,
							}}
						>
							<img
								src="./logoSherlock.png"
								alt="logo"
								height={35}
								className={classes.headerImage}
							/>
							Crypto Sherlock
						</Typography>
						<Select
							variant="outlined"
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={currency}
							style={{ width: 100, height: 40, marginLeft: 15 }}
							onChange={(e) => setCurrency(e.target.value)}
						>
							<MenuItem value={"USD"}>USD</MenuItem>
							<MenuItem value={"INR"}>INR</MenuItem>
						</Select>
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	);
};

export default Header;
