# Features

This package allows you to call functions globaly without having to run into the issue of calling an undefined function.

If the function you are trying to call isn't defined, it will return it's first parameter as a default.

This package is espacially usefull for loading some text in a specified language or selecting an image size for multiple sources in an object of image data. See exemple below.

# Installation

```shell
npm i -s get-transform
```

# Functions
- root - return current global variable ( window for browsers and global for node.js )
- \_\_ - pass function call to root().\_\_ //generaly used to parse a string
- _j - pass function call to root()._j //generaly used to return a string from an object with multiple languages
- _i - pass function call to root()._i //gerenaly used to return an image source from an object with multiple sources

# Usage

Declare the function you want available globaly

```js
import { root } from 'get-transform'
or
const root = require('get-transform').root;

...

function getImageSrc(obj, size){
	if(obj == undefined) return '';
	if(size == undefined) return obj.url;
	if(typeof obj === 'string') return obj;

	return obj.meta.sizes[size];
}
...
if( root()._i === undefined ){
	root()._i = getImageSrc;
}
```

Use the function anywhere else

```js
import { _i } from 'get-transform'

...

const imageData = {
	_id: 'dsa7y732basd7a',
	title: 'image_name',
	mimetype: 'image/jpeg',
	url: '/path/to/my/img.jpeg'
	meta: {
		sizes: {
			sm: '/path/to/my/img-sm.jpeg',
			md: '/path/to/my/img-md.jpeg',
			lg: '/path/to/my/img-lg.jpeg', //We are targeting this source in this exemple
			xl: '/path/to/my/img-xl.jpeg'
		}
	}
};
const myImg = new Image();
myImg.src = _i( imageData, 'lg' );

console.log( myImg.src ) // '/path/to/my/img-lg.jpeg'

```
