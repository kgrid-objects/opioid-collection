const download = require('./downloadAssets.js');
const shell = require('shelljs');

/**
 * Defines the activator to download
 */
let asset = {
  url: "https://api.github.com/repos/kgrid/kgrid-activator",
  filename: "",
  destination: "grid",
  tag_name: "1.1.5",
};

/**
 * Download the activator defined in the asset and run the activator
 */
download.downloadAssets(asset).then( artifact => {

  console.log( "starting activator");
  executeActivator( artifact.filename );

});
/**
 * Executes the download activator.  Expects the jar file to be in the grid
 * director. Sets the shelf to be all KOs in the collection directory
 */
function executeActivator(filename) {
  shell.cd("collection");
  let wd = process.cwd()
  console.log(wd);
  shell.cd("..");
  var activator = shell.exec(" java -jar grid/" + filename
      + "  --kgrid.shelf.cdostore.url=filesystem:file:///" + wd.replace(/\\/g,
          '/'), function (code, stdout, stderr) {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
  });

  return activator;
}
