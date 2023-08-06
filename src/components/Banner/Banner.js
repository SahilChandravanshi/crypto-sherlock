import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
	banner: {
		backgroundImage: "url(./bannerVideo.gif)",
	},
	bannerContent: {
		height: 600,
		display: "flex",
		flexDirection: "column",
		paddingTop: 100,
		justifyContent: "space-around",
		// alignItems: "center",
	},
	tagline: {
		display: "flex",
		height: "40%",
		flexDirection: "column",
		justifyContent: "center",
		textAlign: "center",
	},
	carousel: {
		height: "50%",
		display: "flex",
		alignItems: "center",
	},
}));

const Banner = () => {
	const classes = useStyles();

	return (
		<div className={classes.banner}>
			<Container className={classes.bannerContent}>
				<div className={classes.tagline}>
					<Typography
						variant="h3"
						style={{
							fontWeight: "bold",
							marginBottom: 15,
							fontFamily: "Montserrat",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<img src="./logoSherlock.png" alt="logo" width={180} height={180} />
						Crypto Sherlock
					</Typography>
					<Typography
						variant="subtitle2"
						style={{
							color: "darkgrey",
							textTransform: "capitalize",
							fontFamily: "Montserrat",
						}}
					>
						Get all the Info about Crypto Currencies
					</Typography>
				</div>
				<Carousel />
			</Container>
		</div>
	);
};

export default Banner;
