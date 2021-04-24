// A use case of the composite pattern.

import File from './file'
import Folder from './folder'

const FILESYSTEM = new Folder('root')
const FILE_1 = new File('abc.txt')
const FILE_2 = new File('123.txt')
FILESYSTEM.attach(FILE_1)
FILESYSTEM.attach(FILE_2)
const FOLDER_A = new Folder('folder_a')
FILESYSTEM.attach(FOLDER_A)
const FILE_3 = new File('xyz.txt')
FOLDER_A.attach(FILE_3)
const FOLDER_B = new Folder('folder_b')
const FILE_4 = new File('456.txt')
FOLDER_B.attach(FILE_4)
FILESYSTEM.attach(FOLDER_B)
FILESYSTEM.dir('')

// now move FOLDER_A and its contents to FOLDER_B
console.log()
FOLDER_B.attach(FOLDER_A)
FILESYSTEM.dir('')
