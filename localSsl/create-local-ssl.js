//-- https://github.com/FiloSottile/mkcert

import hostile from 'hostile';
import { exec } from 'child_process';
const env = require('../environments/env.local');

const createLocalSsl = (platform) => {
	const localDomain = env.HOST.name;
	const localhost = 'localhost';
	const localIpV4 = '127.0.0.1';
	const localIpV6 = '::1';

	const addresses = [localDomain, localhost, localIpV4, localIpV6];

	addHostsFileEntry(localIpV4, localDomain);

	//-- Need to wait for the first entry to be saved
	setTimeout(() => {
		addHostsFileEntry(localIpV6, localDomain);
	}, 1000);

	switch (platform) {
		default:
		case 'win':
			createLocalSslWindows(addresses);
			break;
		case 'mac':
		case 'lin':
			throw new Error('mac and linux OSes are not currently supported');
	}
};

const addHostsFileEntry = (ip, url) => {
	hostile.set(ip, url, function (err) {
		if (err) {
			console.error(`Unable to add '${ip} ${url}' to the hosts file`, err);
		} else {
			console.log(`Added '${ip} ${url}' to the hosts file`);
		}
	});
};

const createLocalSslWindows = (addresses) => {
	exec(
		"powershell Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))"
	);
	exec('powershell -command "start-process cmd -verb runas -argumentlist \'/c choco install mkcert\'"');
	exec('mkcert -install');
	exec(`mkcert -cert-file ./localSsl/cert.pem -key-file ./localSsl/key.pem ${addresses.join(' ')}`);
};

const platformDefault = process.argv[2] ?? 'win';
const platformOverride = process.argv[3];

createLocalSsl(platformOverride ?? platformDefault);
