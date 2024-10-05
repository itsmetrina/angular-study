import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { perenual_api_key } from '../myconfig';

@Injectable({
	providedIn: 'root'
})
export class PlantSpeciesService {
	private api_url = `https://perenual.com/api/species-list?key=${perenual_api_key}`;
	constructor(private http: HttpClient) { }
	getSpeciesList = () => {
		return this.http.get(this.api_url);
	}
}