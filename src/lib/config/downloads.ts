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
