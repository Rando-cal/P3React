import apiUrl from '../apiConfig'
import axios from 'axios'

// PASSING values to BACKEND AS: song ID should be 'req.body.songIdToAdd'
// !check AUTH token
export const addSongToCart = (songIdToAdd,user) => {
	console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
    console.log("songIdToAdd::",songIdToAdd);
	console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&');
	
	return axios({
		method: 'PATCH',
		url: apiUrl + '/carts'+ `/${songIdToAdd}`,
		headers: {
			Authorization: `Token token=${user.token}`,
			
		},
		data: { songIdToAdd : songIdToAdd }
		
	})
}