import $ from 'jquery';
import {Car} from './classes/Car.js';
import {Drone} from './classes/Drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {Button} from './ui/button.js';

let b = new Button('Click Me');
b.appendToElement($('body'));