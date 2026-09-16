import { writeFileSync } from 'node:fs';

const [version, build, tag] = process.argv.slice(2);
const expectedTag = `${tag?.slice(0, 8)}-v${version}-NB-(${build})`;

if (!/^\d+\.\d+\.\d+$/.test(version ?? '') || !/^\d+$/.test(build ?? '') || tag !== expectedTag) {
	throw new Error('Usage: node update-nightly-release.mjs <version> <build> <yyyyMMdd-v<version>-NB-(<build>)>');
}

const compactDate = tag.slice(0, 8);
const date = `${compactDate.slice(0, 4)}-${compactDate.slice(4, 6)}-${compactDate.slice(6, 8)}`;
const encodedTag = encodeURIComponent(tag);
const assetPrefix = `mRemoteNG-${compactDate}-v${version}-NB-${build}`;
const downloadBase = `https://github.com/mRemoteNG/mRemoteNG/releases/download/${encodedTag}`;

const nightlyRelease = {
	version: `v${version} NB ${build}`,
	date,
	msiUrl: `${downloadBase}/${assetPrefix}-x64-FD.zip`,
	zipUrl: `${downloadBase}/${assetPrefix}-x64-SC.zip`,
	arm64FdUrl: `${downloadBase}/${assetPrefix}-arm64-FD.zip`,
	arm64ScUrl: `${downloadBase}/${assetPrefix}-arm64-SC.zip`,
	msiLabel: 'x64 FD',
	zipLabel: 'x64 SC',
	changelogUrl: `https://github.com/mRemoteNG/mRemoteNG/releases/tag/${tag}`
};

writeFileSync(
	new URL('./src/lib/config/nightly.json', import.meta.url),
	`${JSON.stringify(nightlyRelease, null, '\t')}\n`
);
