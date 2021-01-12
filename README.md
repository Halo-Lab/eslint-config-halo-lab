# Eslint Setup 
You might like them - or you might not. Don't worry you can always change them.

## Local / Per Project Install

1. If you don't already have a package.json file, create one with ```npm init```.

2. Then we need to install everything needed by the config:
```
npm install --save-dev eslint-config-halo-lab
```
3. You can see in your package.json there are now a big list of devDependencies.
4. Create a ```.eslintrc``` file in the root of your project's directory (it should live where package.json does). Your ```.eslintrc``` file should look like this:

## Usage
In `package.json`:

```json
{
  "extends": [
    "halo-lab"
  ]
}
```
## Status and contribution
The project is supported by Halo lab development team, we're not working on it regularly, but trying to invest in it when we have time between clients' project. <br />
Though, feel free to open issues and you're very welcome to contribute. 
 <br />
  <br />
<a href="https://www.halo-lab.com/?utm_source=github-brifinator-3000">
    <img src="http://api.halo-lab.com/wp-content/uploads/dev_halo.svg" alt="Developed in Halo lab" height="60">
</a>
