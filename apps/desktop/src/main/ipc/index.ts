import { app } from 'electron';
import { browserinternetView } from '../windows/browser/browser';

export * from './ipc-browser';
export * from './ipc-data-api';
export * from './ipc-parser-data';

app.on('will-quit', () => browserinternetView.stopTask())
