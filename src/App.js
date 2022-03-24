import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/header/Header';
import List from './components/list/List';
import Map from './components/map/Map';
import { getPlacesData } from './API';

const App = () => {
	const [places, setPlaces] = useState([]);

	const [coords, setCoords] = useState({});

	const [bounds, setBounds] = useState({});

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({ coords: { latitude, longitude } }) => {
				setCoords({ lat: latitude, lng: longitude });
			}
		);
	}, []);

	useEffect(() => {
		console.log(coords, bounds);
		getPlacesData(bounds.sw, bounds.ne).then((data) => {
			console.log('data is ', data);
			setPlaces(data);
		});
	}, [coords, bounds]);

	return (
		<>
			<CssBaseline />
			<Header />
			<Grid container spacing={3} style={{ width: '100%', marginTop: '5px' }}>
				<Grid item xs={12} md={4}>
					<List places={places} />
				</Grid>
				<Grid item xs={12} md={8}>
					<Map setCoords={setCoords} setBounds={setBounds} coords={coords} />
				</Grid>
			</Grid>
		</>
	);
};

export default App;
