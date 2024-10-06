import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantCardComponent } from '../plant-card/plant-card.component';
import { PlantSpeciesService } from '../../services/plant-species.service';
import { PlantSpecies } from '../../interfaces/plant-species';

@Component({
	selector: 'app-card',
	standalone: true,
	imports: [CommonModule, PlantCardComponent],
	templateUrl: './card.component.html',
	styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
	speciesList: PlantSpecies[] = [];
	constructor(private plantspeciesservice: PlantSpeciesService) { }
	ngOnInit(): void {
		this.fetchSpeciesList();
	};
	fetchSpeciesList = () => {
		this.plantspeciesservice.getSpeciesList().subscribe({
			next: (species: any) => {
				if (species?.data?.length > 0) {
					this.speciesList = species.data.filter((speciesItm: { default_image: null; }) => speciesItm?.default_image !== null).map((speciesItm: {
						watering: null;
						cycle: null; id: any; common_name: any; default_image: { thumbnail: any; };
					}) => {
						return {
							speciesId: speciesItm?.id ?? "Unknown Species",
							speciesName: speciesItm?.common_name ?? null,
							speciesImage: speciesItm?.default_image?.thumbnail ?? null,
							speciesWateringAmount: speciesItm?.watering ?? null,
							speciesCycle: speciesItm?.cycle ?? null,
						}
					});
				}
			},
			error: (err) => console.error(err)
		});
	};
}