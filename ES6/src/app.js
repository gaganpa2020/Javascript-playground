import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';
import {DataTable} from './ui/data-table.js';
import {GoogleMap} from './ui/google-map.js';


let dataService = new FleetDataService();
dataService.loadData(fleet);
let centerOfMap = {lat: 40.783661, lng: -73.965883};
//let map = new GoogleMap(centerOfMap, dataService.drone);
let map = new GoogleMap(centerOfMap, dataService.all);
map.appendToElement($('body'));


// let headers = "License Make Model Miles".split(' ');
// let dataService = new FleetDataService();
// dataService.loadData(fleet);
// let dt = new DataTable(headers, dataService.cars);
// dt.appendToElement($('body'));

// let b = new Button('Click Me');
// b.appendToElement($('body'));

// let i = new Image('images/drone.jpg');
// i.appendToElement($('body'));

// let tb = new TitleBar('ES6 Tutorial');
// tb.addLink('Home', '');
// tb.addLink('Cars', '');
// tb.addLink('Drones', '');
// tb.addLink('Map', '');
// tb.appendToElement($('body'));
