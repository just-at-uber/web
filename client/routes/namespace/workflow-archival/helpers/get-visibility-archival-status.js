import get from 'lodash-es/get';

export default namespaceSettings =>
  get(namespaceSettings, 'configuration.visibilityArchivalStatus', '');
