
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	home_canada: tryRequire('./home_canada.png') || require('./questionMark.png'),
	home_Rectangle5: tryRequire('./home_Rectangle5.png') || require('./questionMark.png'),
	home_Rectangle6: tryRequire('./home_Rectangle6.png') || require('./questionMark.png'),
	home_BlobShape: tryRequire('./home_BlobShape.png') || require('./questionMark.png'),
	home_BlobShape_1: tryRequire('./home_BlobShape_1.png') || require('./questionMark.png'),
	home_BlobShape_2: tryRequire('./home_BlobShape_2.png') || require('./questionMark.png'),
	home_BlobShape_3: tryRequire('./home_BlobShape_3.png') || require('./questionMark.png'),
	card_Ellipse1: tryRequire('./card_Ellipse1.png') || require('./questionMark.png'),
	card_Line1: tryRequire('./card_Line1.png') || require('./questionMark.png'),
	card_Star1: tryRequire('./card_Star1.png') || require('./questionMark.png'),
	about_Vector: tryRequire('./about_Vector.png') || require('./questionMark.png'),
	about_Vector_1: tryRequire('./about_Vector_1.png') || require('./questionMark.png'),
}