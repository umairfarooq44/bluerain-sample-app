/*
* This file demonstrates using BlueRain Client on web
*/
const BR = require('@blueeast/bluerain-os').default;

const apps = require('./apps');
const config = require('./config');
const plugins = require('./plugins');

const bootOptions = {
	apps: apps,
	config: config,
	plugins: plugins
};

BR.boot(bootOptions);

console.log('BlueRain Booted!', BR);
