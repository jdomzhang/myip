#!/usr/bin/env node

'use strict';

const program = require('commander');
program
	.version('1.0.0')
	.usage('[options]')
	.action(() => {
		program.help();
	});

program.command('local').action(async () => {
	let ip = await require('internal-ip').v4();
	console.log(ip);
});

program.command('public').action(async () => {
	let ip = await require('public-ip').v4();
	console.log(ip);
});

program.command('both').action(async () => {
	let localIP = await require('internal-ip').v4();
	let publicIP = await require('public-ip').v4();

	console.log('local:\n\t', localIP, '\n');
	console.log('public:\n\t', publicIP, '\n');
});

program.parse(process.argv); // end with parse to parse through the input

if (program.args.length < 1) {
	program.help();
}
