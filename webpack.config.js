import { spawnSync } from "child_process";

const getLatestCommitForDirectory = directoryPath =>
  spawnSync('git', ['log', '-n', '1', '--pretty=format:%ct', directoryPath]).stdout.toString();

const generateOutputFilename = pathData =>
  `[name].${getLatestCommitForDirectory('./' + pathData.chunk.name)}.js`;
  
export default () => ({
  entry: {
    core: './core/index.js',
  },
  output: {
    filename: generateOutputFilename
  }
});