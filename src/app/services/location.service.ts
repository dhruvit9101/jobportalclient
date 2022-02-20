import { locations } from "../business-models/location.model";

export class locationService {
    lstLocation: locations[] = [];

    fillLocation() {
        this.lstLocation = [
            { id: 1, name: 'Pune' },
            { id: 2, name: 'Banglore' },
            { id: 3, name: 'Hydrabad' },
            { id: 4, name: 'Mumbai' }
        ];
        return this.lstLocation;
    }
}