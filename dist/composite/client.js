"use strict";
// A use case of the composite pattern.
Object.defineProperty(exports, "__esModule", { value: true });
const file_1 = require("./file");
const folder_1 = require("./folder");
const FILESYSTEM = new folder_1.default('root');
const FILE_1 = new file_1.default('abc.txt');
const FILE_2 = new file_1.default('123.txt');
FILESYSTEM.attach(FILE_1);
FILESYSTEM.attach(FILE_2);
const FOLDER_A = new folder_1.default('folder_a');
FILESYSTEM.attach(FOLDER_A);
const FILE_3 = new file_1.default('xyz.txt');
FOLDER_A.attach(FILE_3);
const FOLDER_B = new folder_1.default('folder_b');
const FILE_4 = new file_1.default('456.txt');
FOLDER_B.attach(FILE_4);
FILESYSTEM.attach(FOLDER_B);
FILESYSTEM.dir('');
// now move FOLDER_A and its contents to FOLDER_B
console.log();
FOLDER_B.attach(FOLDER_A);
FILESYSTEM.dir('');
