var es = require('event-stream');
var stream = require('stream');
var path  = require("path");

var buildTool = require('./build-file');

module.exports = function( mainID ){
    var doBuild = function( file, callback ){
         // console.log( file );
         var tempMainID = mainID;

        var code = String(file.contents);
        var srcPath = String(file.path);
        var fileName = path.basename(file.path, ".js");

        // console.log(file.path, fileName, mainID);

        mainID = mainID + fileName;

        // console.log(mainID);
        // console.time('seajs');
        file.contents = new Buffer( buildTool( srcPath, mainID, code ) );

        mainID = tempMainID;
        // console.timeEnd('seajs');

        callback( null, file);
    };

    return es.map( doBuild );
};

// var srcPath = 'test/ctrl/testCtrl.js',
//     mainID = 'test/ctrl/testCtrl.js',
//     code = '';

// var code = buildTool( srcPath, mainID, code );

// console.log( code );



/* ############################################### */
/* readme
 * @param: mainID, 主模块入口的id, 请使用网站静态文件的绝对地址
 * 可以直接避免出现开发机的完整路径
 * 
 * 
 * 
 */

