/**
 * thanks to https://github.com/defcc/rake-parser-less-common for the inspiration
 */

'use strict';

var fs = require('fs');
var root = fis.project.getProjectPath();
var path = require('path');
var currentModule = fis.config.get('namespace');
var lessLibImports = [];

module.exports = function(content, file, conf){
    if (conf.filedir.length && !lessLibImports.length) {
        conf.mod = conf.mod || 'common';
        var isCommonModule = currentModule != conf.mod;
        var commonModulePath = root;
        if ( isCommonModule ) {
            commonModulePath = path.resolve( root, '../' + conf.mod );
        }
        console.log('lib set\n');
        conf.filedir.forEach(function( dir ){
            var lessLib = path.resolve( commonModulePath, dir );
            if (fis.util.isDir( lessLib )){
                fs.readdirSync( lessLib ).forEach(function( item ){
                    if ( item.indexOf('.less') > 0 ) {
                        lessLibImports.push( fis.file( lessLib + '/' + item ).getContent() );
                    }
                });
            } else if (fis.util.isFile( lessLib )){
                lessLibImports.push( fis.file( lessLib ).getContent() );
            }
        });
    }
    // 先获取到 common 的模块依赖，添加到 less 文件中
    return lessLibImports.join('') + content;
};
