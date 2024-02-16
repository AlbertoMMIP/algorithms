import dotenv from 'dotenv';
import { argv } from 'process';
import { exercises } from './default.js';
import algoritms from './algorithms/index.js';
import bigO from './bigO/index.js';
import dataStructure from './data-structure/index.js';
import excercises from './excercises/index.js';
dotenv.config();

const allProcess = { ...algoritms, ...bigO, ...dataStructure, ...excercises };

function main() {
  console.log('Start project');
  const exercise = argv[2];
  const code = exercises[exercise];
  if (!code) {
    console.log('exercise not support');
    return;
  }
  const { [exercise]: process } = allProcess;
  process();
}


main();