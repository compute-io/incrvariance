/**
*
*	COMPUTE: incrvariance
*
*
*	DESCRIPTION:
*		- Provides a method to compute a sample variance incrementally.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	// INCREMENTAL SAMPLE VARIANCE //

	/**
	* FUNCTION: incrvariance()
	*	Returns a method to compute the sample variance incrementally.
	*
	* @returns {Function} method to compute the sample variance incrementally
	*/
	function incrvariance() {
		var mu = 0,
			N = 0,
			M2 = 0,
			delta;
		/**
		* FUNCTION: incrvariance( [value] )
		*	If a `value` is provided, updates and returns the updated sample variance. If no `value` is provided, returns the current sample variance.
		*
		* @param {Number} [value] - value used to update the sample variance
		* @returns {Number} sample variance
		*/
		return function incrvariance( x ) {
			if ( !arguments.length ) {
				if ( N < 2 ) {
					return 0;
				}
				return M2 / (N-1);
			}
			N += 1;
			delta = x - mu;
			mu += delta / N;
			M2 += delta * ( x - mu );
			if ( N < 2 ) {
				return 0;
			}
			return M2 / (N-1);
		};
	} // end FUNCTION incrvariance()


	// EXPORTS //

	module.exports = incrvariance;

})();