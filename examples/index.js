var incrvariance = require( './../lib' );

// Initialize a method to calculate the sample variance incrementally:
var variance = incrvariance();

// Simulate some data...
var value, s2;

console.log( '\nValue\tSample Variance\n' );

for ( var i = 0; i < 100; i++ ) {

	value = Math.random() * 100;
	s2 = variance( value );

	console.log( '%d\t%d', value.toFixed( 4 ), s2.toFixed( 4 ) );
}

// Final sample variance:
console.log( '\nFinal sample variance is %d...\n', variance() );
