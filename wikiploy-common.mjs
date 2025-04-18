import { DeployConfig } from 'wikiploy';

/**
 * Add config.
 * @param {Array} configs DeployConfig array.
 * @param {String} site Domian of a MW site.
 */
export function addConfig(configs, site, isRelease) {
	let deploymentName = isRelease ? '~/searchShorties' : '~/searchShorties-dev';
	configs.push(new DeployConfig({
		src: 'dist/searchShorties.js',
		dst: `${deploymentName}.js`,
		site,
		nowiki: true,
	}));
	configs.push(new DeployConfig({
		src: 'dist/searchShorties.css',
		dst: `${deploymentName}.css`,
		site,
	}));
}
export function addConfigRelease(configs, site) {
	addConfig(configs, site, true);
}
