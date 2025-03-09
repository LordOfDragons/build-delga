const core = require('@actions/core');
const fs = require('node:fs');
//const github = require('@actions/github');

try {
	const workspace = process.env['GITHUB_WORKSPACE'];
	const projectFile = core.getInput("projectFile", { required: true });
	const profile = core.getInput("profile", { required: true });
	const outputDir = core.getInput("outputDir") ?? "deigde-output";
	core.info(`Parameters:`)
	core.info(`- workspace: ${workspace}`)
	core.info(`- projectFile: ${projectFile}`)
	core.info(`- profile: ${profile}`)
	core.info(`- outputDir: ${outputDir}`)
	
	let cmd = []
	cmd.push('docker')
	cmd.push('run')
	cmd.push('--rm')
	cmd.push('--workdir')
	cmd.push('/github/workspace')
	cmd.push(`-v "${workspace}":"/github/workspace"`)
	cmd.push(`-v "${workspace}/${outputDir}":"/opt/deigde-output"`)
	cmd.push('lordofdragons/deigde-ci:latest')
	cmd.push(`"/github/workspace/${projectFile}"`)
	cmd.push('--project.profile.distribute')
	cmd.push(`"${profile}"`)
	core.info(`command: ${cmd.join(' ')}`)
	execSync(cmd.join(' '), { stdio: 'inherit' });
	
	fs.readFile(`${workspace}/${outputDir}/exitcode`, 'utf8', (err, data) => {
		if (err) {
			throw new Error(err);
		}
		if (data[0] != '0') {
			throw new Error("Failed running IGDE");
		}
	});
	
} catch (err) {
	core.setFailed(`Action failed with error ${err}`);
}
