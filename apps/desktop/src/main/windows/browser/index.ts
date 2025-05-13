import { createTaskIpc } from './ipc/task';
import { createTiktokIpc } from './ipc/tiktok';
import { createTiktokBackstageIpc } from './ipc/tiktok-backstage';
import { createUserFinderIpc } from './ipc/user-finder';

export * from './ipc/task';
export * from './ipc/tiktok';
export * from './ipc/tiktok-backstage';
export * from './ipc/user-finder';

createTiktokIpc()
createTiktokBackstageIpc()
createTaskIpc()
createUserFinderIpc()
