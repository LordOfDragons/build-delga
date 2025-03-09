# Build DELGA distribution docker action

This action builds DELGA distribution file from checkout out project repository.
DELGA files are the distribution format of game projects build using the
[Drag[en]gine Game Engine](https://dragondreams.ch/?page_id=152)

Specify the project file (_.degp) and the profile name to use. After the action
has run successfully the _.delga file is present in the path set in the profile.

## Inputs

## `projectFile`

**Required** Path to the project-file to use (\*.degp), within the repository. Default `"project.degp"`.

## `profile`

**Required** Name of profile to use. Default `"Release"`.

## `outputDir`

**Optional** Name of deigde output directory to use. Default `"deigde-output"`.
This directory is used to store the log files (`deigde.log`) as well as the exit code
of the deigde run (`exitcode`). Exit code is 0 on success and another value on failure.
If building fails the `deigde.log` file can be examined. It is recommended to always
output this file as artifact. This way a second build just to get the log file is not needed.

## Example usage

```
uses: LordOfDragons/build-delga@v2
with:
  projectFile: 'MyGame.degp'
  profile: 'Release'
  outputDir: 'deigde-output'
```
