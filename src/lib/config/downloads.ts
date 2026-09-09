export interface ReleaseDownload {
	channelKey: string;
	title: string;
	version: string;
	date: string;
	msiUrl: string;
	zipUrl: string;
	changelogUrl: string;
	badgeType: 'stable' | 'preview' | 'nightly';
}

export interface PuttyRelease {
	version: string;
	date: string;
	title: string;
	downloadUrl: string;
	releasePageUrl: string;
	isLatest?: boolean;
}

export const releaseDownloads: ReleaseDownload[] = [
	{
		channelKey: 'stable',
		title: 'Stable',
		version: 'v1.76.20',
		date: 'Fri, Apr 12, 2019',
		msiUrl: 'https://github.com/mRemoteNG/mRemoteNG/releases/download/v1.76.20/mRemoteNG-Installer-1.76.20.24615.msi',
		zipUrl: 'https://github.com/mRemoteNG/mRemoteNG/releases/download/v1.76.20/mRemoteNG-Portable-1.76.20.24669.zip',
		changelogUrl: 'https://github.com/mRemoteNG/mRemoteNG/releases/tag/v1.76.20',
		badgeType: 'stable'
	},
	{
		channelKey: 'preview',
		title: 'Preview',
		version: 'v1.77.1',
		date: 'Mon, Sep 02, 2019',
		msiUrl: 'https://github.com/mRemoteNG/mRemoteNG/releases/download/v1.77.1/mRemoteNG-Installer-1.77.1.27654.msi',
		zipUrl: 'https://github.com/mRemoteNG/mRemoteNG/releases/download/v1.77.1/mRemoteNG-Portable-1.77.1.27713.zip',
		changelogUrl: 'https://github.com/mRemoteNG/mRemoteNG/releases/tag/v1.77.1',
		badgeType: 'preview'
	},
	{
		channelKey: 'nightly',
		title: 'Nightly',
		version: 'v1.77.3.1784-NB',
		date: 'Thu, Mar 16, 2023',
		msiUrl: 'https://github.com/mRemoteNG/mRemoteNG/releases/download/2023.03.03-v1.77.3-nb/mRemoteNG-Installer-1.77.3.nb-1784.msi',
		zipUrl: 'https://github.com/mRemoteNG/mRemoteNG/releases/download/2022.06.13-v1.77.3-nb/Portable.-.1.77.3.NB.rar',
		changelogUrl: 'https://github.com/mRemoteNG/mRemoteNG/releases/tag/2023.03.03-v1.77.3-nb',
		badgeType: 'nightly'
	}
];

export const latestPuttyRelease: PuttyRelease = {
	version: 'v0.85.0.1x64',
	date: 'Mar 04, 2026',
	title: 'PuTTYNG 0.85 x64 (signed)',
	downloadUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/download/v0.85.0.1x64/PuTTYNG.exe',
	releasePageUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/tag/v0.85.0.1x64',
	isLatest: true
};

export const olderPuttyReleases: PuttyRelease[] = [
	{
		version: 'v0.83.0.1.x64',
		date: 'Oct 07, 2025',
		title: 'PuTTYNG 0.83 x64',
		downloadUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/download/v0.83.0.1.x64/PuTTYNG.exe',
		releasePageUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/tag/v0.83.0.1.x64'
	},
	{
		version: 'v0.83.0.1',
		date: 'Feb 11, 2025',
		title: 'PuTTYNG 0.83',
		downloadUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/download/v0.83.0.1/PuTTYNG.exe',
		releasePageUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/tag/v0.83.0.1'
	},
	{
		version: 'v0.82.0.1',
		date: 'Dec 23, 2024',
		title: 'PuTTYNG 0.82.0.1',
		downloadUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/download/v0.82.0.1/PuTTYNG.exe',
		releasePageUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/tag/v0.82.0.1'
	},
	{
		version: 'v0.81.0.1',
		date: 'Jul 16, 2024',
		title: 'PuTTYNG 0.81.0.1',
		downloadUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/download/v0.81.0.1/PuTTYNG.exe',
		releasePageUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/tag/v0.81.0.1'
	},
	{
		version: 'v0.81',
		date: 'Apr 17, 2024',
		title: 'PuTTYNG 0.81',
		downloadUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/download/v0.81/PuTTYNG.exe',
		releasePageUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/tag/v0.81'
	},
	{
		version: 'v0.78.0.10',
		date: 'Nov 21, 2022',
		title: 'PuTTYNG 0.78.0.10',
		downloadUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/download/v0.78.0.10/PuTTYNG.exe',
		releasePageUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/tag/v0.78.0.10'
	},
	{
		version: 'v0.76.0.95',
		date: 'Jan 21, 2022',
		title: 'PuTTYNG 0.76',
		downloadUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/download/v0.76.0.95/PuTTYNG.exe',
		releasePageUrl: 'https://github.com/mRemoteNG/PuTTYNG/releases/tag/v0.76.0.95'
	}
];
