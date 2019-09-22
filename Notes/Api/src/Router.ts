import { upload } from './Config';
import { RouteCollection, LoggedIn } from './service/Route.service';

// Server Routes
import {
    ServerInfo,
    Session,
    Logout,
} from './route/Server.route';

import {
    UserRegister,
    UserLogin,
    EmailAvailable,
    UserUpdate,
    UserPassword,
} from './route/User.route';

import {
    CreateTag,
    GetTags,
    DeleteTag,
} from './route/Tags.route';

import {
    CreateNote,
    GetNotes,
} from './route/Notes.route';

export const ServerRoutes = [
    { type: 'GET', path: '/', component: ServerInfo },
    { type: 'GET', path: '/session', component: Session },
    { type: 'GET', path: '/logout', component: Logout },
];

export const UserRoutes = [
    { type: 'POST', path: '/user/register', component: UserRegister },
    { type: 'POST', path: '/user/login', component: UserLogin },
    { type: 'GET', path: '/user/email', component: EmailAvailable },
    { type: 'PATCH', path: '/user', component: UserUpdate },
    { type: 'PATCH', path: '/user/password', component: UserPassword },
];

export const TagRoutes = [
    { type: 'POST', path: '/tag', component: CreateTag },
    { type: 'GET', path: '/tag', component: GetTags },
    { type: 'DELETE', path: '/tag/:_id', component: DeleteTag },
];

export const NoteRoutes = [
    { type: 'POST', path: '/note', component: CreateNote },
    { type: 'GET', path: '/note', component: GetNotes },
];

export function InitRoutes(app) {
    RouteCollection(app, 'Base Server', ServerRoutes);
    RouteCollection(app, 'User', UserRoutes);
    RouteCollection(app, 'Tag', TagRoutes, LoggedIn);
    RouteCollection(app, 'Note', NoteRoutes, LoggedIn);
}
