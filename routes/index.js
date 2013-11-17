
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render(
      'index', {
                title: 'Ya Ha Ha!' 
                }
            );
};

exports.demo = function(req, res){
  res.render(
      'demo', {
                title: 'This is Demo page',
                header: 'demo demo demo demo ...' 
                }
            );
};

exports.app = function(req, res){
  res.render(
      'bootstrap', {
                title: 'This is Bootstrap',
                content: 'many many many content ......' 
                }
            );
};