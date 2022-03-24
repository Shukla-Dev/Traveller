import axios from 'axios';

const URL =
	'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, {
			params: {
				bl_latitude: sw.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
				tr_latitude: ne.lat,
			},
			headers: {
				'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
				'X-RapidAPI-Key': 'a8ceea9bbemshc5f532044389753p131e0ejsn81a627fcd175',
			},
		});

		return data;
	} catch (error) {
		console.log(error);
	}
};
