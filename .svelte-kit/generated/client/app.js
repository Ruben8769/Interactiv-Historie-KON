export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/layer1/1a": [3],
		"/layer2/2a": [4],
		"/layer3/3a": [5],
		"/layer3/3b": [6],
		"/layer3/3c": [7],
		"/layer4/4a": [8],
		"/layer4/4b": [9],
		"/layer4/4c": [10],
		"/layer4/4d": [11],
		"/layer4/4e": [12],
		"/layer5/5a": [13],
		"/layer5/5b": [14],
		"/layer5/5c": [15],
		"/layer5/5d": [16],
		"/layer6/6a": [17],
		"/layer6/6b": [18],
		"/layer6/6c": [19]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';