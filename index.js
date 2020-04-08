function root(){
	if( typeof window === 'undefined' )
		return global;

	return window;
}

function __(a, b, c, d){
	if( typeof root().__ === 'function' )
		return root().__(a, b, c, d);

	return a;
}

function _j(a, b, c, d){
	if( typeof root().__ === 'function' )
		return root()._j(a, b, c, d);

	return a;
}

function _i(a, b, c, d){
	if( typeof root().__ === 'function' )
		return root()._i(a, b, c, d);

	return a;
}

module.exports = {
	'root': root,
	'__': __,
	'_j': _j,
	'_i': _i
}
