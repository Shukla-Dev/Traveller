import React from 'react';
import {
	Box,
	Typography,
	Button,
	Card,
	CardMedia,
	CardActions,
	CaedContent,
	Chip,
} from '@material-ui/core';
import { LocationOn } from '@material-ui/icons';
import { Phone } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import useStyles from './styles';

const PlaceDetails = ({ place }) => {
	const classes = useStyles();

	return (
		<Card elevation={6}>
			<CardMedia
				style={{ height: 350 }}
				image={
					place.photo
						? place?.photo?.images?.large?.url
						: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
				}
				title={place.name}
			/>
		</Card>
	);
};

export default PlaceDetails;
