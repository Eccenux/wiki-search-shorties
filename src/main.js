var { MyGadget } = require("./MyGadget");

// instance
var gadget = new MyGadget();

// hook when object is ready
mw.hook('userjs.searchShortiesExample.loaded').fire(gadget);

$(function(){
	// load Mediwiki core dependency
	// (in this case util is loaded to be able to use `mw.util.addPortletLink`)
	mw.loader.using(["mediawiki.util"]).then( function() {
		gadget.init();

		// hook when initial elements are ready 
		mw.hook('userjs.searchShortiesExample.ready').fire(gadget);
	});
});
