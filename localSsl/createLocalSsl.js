//-- https://github.com/FiloSottile/mkcert

const { exec } = require('child_process');

const createLocalSsl = (platform) => {
	switch (platform) {
		default:
		case 'win':
			createLocalSslWindows();
			break;
		case 'mac':
			createLocalSslMac();
			break;
	}
};

const createLocalSslWindows = () => {
	exec(
		"powershell Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))"
	);
	exec('powershell -command "start-process cmd -verb runas -argumentlist \'/c choco install mkcert\'"');
	exec('mkcert -install');
	exec('mkcert -cert-file ./localSsl/cert.pem -key-file ./localSsl/key.pem localhost 127.0.0.1 ::1');
};

const createLocalSslMac = () => {
	exec('brew install mkcert');
	exec('mkcert -install');
	exec('mkcert -cert-file ./localSsl/cert.pem -key-file ./localSsl/key.pem localhost 127.0.0.1 ::1');
};

const platformDefault = process.argv[2] ?? 'win';
const platformOverride = process.argv[3];

createLocalSsl(platformOverride ?? platformDefault);
