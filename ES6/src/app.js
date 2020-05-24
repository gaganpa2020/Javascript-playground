import {Car} from './classes/Car.js';
import {Drone} from './classes/Drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';


let dataService = new FleetDataService();
dataService.loadData(fleet);

for(let car of dataService.cars)
    console.log(car.license);

console.log(dataService.errors);
