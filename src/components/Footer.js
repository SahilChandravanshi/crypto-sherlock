import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	footerContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
		backgroundColor: "#000915",
		height: "15vh",
		paddingTop: 80,
		paddingBottom: 40,
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footerContainer}>
			<p style={{ fontWeight: "bold" }}>Crypto Sherlock </p>
			<p>| Made by</p>
			<a
				class="light-blue-text text-lighten-1 right"
				href="https://sahilchandravanshi.com/"
			>
				Sahil Chandravanshi
			</a>
		</footer>
	);
};

export default Footer;
