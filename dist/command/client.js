"use strict";
// The Command Pattern Use Case Example. A smart light Switch
Object.defineProperty(exports, "__esModule", { value: true });
const light_1 = require("./light");
const switch_1 = require("./switch");
const switch_on_command_1 = require("./switch-on-command");
const switch_off_command_1 = require("./switch-off-command");
// Create a receiver
const LIGHT = new light_1.default();
// Create Commands
const SWITCH_ON = new switch_on_command_1.default(LIGHT);
const SWITCH_OFF = new switch_off_command_1.default(LIGHT);
// Register the commands with the invoker
const SWITCH = new switch_1.default();
SWITCH.register('ON', SWITCH_ON);
SWITCH.register('OFF', SWITCH_OFF);
// Execute the commands that are registered on the Invoker
SWITCH.execute('ON');
SWITCH.execute('OFF');
SWITCH.execute('ON');
SWITCH.execute('OFF');
// show history
SWITCH.showHistory();
// replay last two executed commands
SWITCH.replayLast(2);
