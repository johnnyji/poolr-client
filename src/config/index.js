import path from 'path';

const SRC_PATH = path.join(__dirname, '.././');

export default {
  paths: {
    data: {
      currentUser: path.join(SRC_PATH, 'data/currentUser.js'),
    }
  }
};
