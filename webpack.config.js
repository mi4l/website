import fs from 'fs';
import process from 'process';

const generateOutputFilename = pathData =>
  `[name].${
    JSON.parse(
      fs.readFileSync(process.cwd() + '/build/artifacts/test.json', 'utf8')
    )[pathData.chunk.name + '/']
  }.js`;

export default () => {
  return {
    entry: {
      core: './core/index.js',
    },
    output: {
      filename: generateOutputFilename
    }
  }
};