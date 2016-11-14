 'use strict';
 module.exports = function(ret, file, settings) {
 	let jscore = '<script src="http://static.kgimg.com/common/js/min/hijacked-min.js"></script>';
 	let ignoreFileReg = settings.ignoreFile || '';
 	if (ignoreFileReg instanceof Array) {
 		ignoreFileReg = ignoreFileReg.join("|");
 	}

 	if (ignoreFileReg.length > 0) {
 		ignoreFileReg = new RegExp(ignoreFileReg, "gi");
 	}
 	fis.util.map(ret.src, function(subpath, file, i) {
 		if (file.isHtmlLike && !(ignoreFileReg && file.origin.match(ignoreFileReg))) {
 			let content = file.getContent();

 			content = content.replace(/<html[^>]*>[\s\S]*(<\/html>)/ig, function(m, $1) {
 				if ($1) {
 					return m.replace($1, jscore + $1);
 				}
 				return m;
 			});
 			file.setContent(content);
 		}
 	});
 };