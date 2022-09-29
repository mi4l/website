import { spawnSync } from "child_process";

const getLatestCommitForDirectory = directoryPath =>
  spawnSync('git', ['log', '-n', '1', '--pretty=format:%ct', directoryPath]).stdout.toString();

const generateOutputFilename = pathData =>
  `[name].${getLatestCommitForDirectory('./' + pathData.chunk.name)}.${{
    'javascript': 'js'
  }[pathData.contentHashType]}`;

export default () => ({
  entry: {
    core: './core/index.js',
    style: './www/style/base.scss'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['sass-loader']
      }
    ]
  },
  // output: {
  //   filename: generateOutputFilename
  // }
});