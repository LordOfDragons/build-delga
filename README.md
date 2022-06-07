# Build DELGA distribution docker action

This action builds DELGA distribution file from checkout out project repository.
DELGA files are the distribution format of game projects build using the
[Drag[en]gine Game Engine](https://dragondreams.ch/?page_id=152)

Specify the project file (*.degp) and the profile name to use. After the action
has run successfully the *.delga file is present in the path set in the profile.

## Inputs

## `projectFile`

**Required** Path to the project-file to use (*.degp), within the repository. Default `"project.degp"`.

## `profile`

**Required** Name of profile to use. Default `"Release"`.

## Example usage

uses: LordOfDragons/build-delga@v1
with:
  projectFile: 'MyGame.degp'
  profile: 'Release'
