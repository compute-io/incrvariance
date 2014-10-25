incrvariance
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Provides a method to compute a sample variance incrementally.


## Installation

``` bash
$ npm install compute-incrvariance
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var incrvariance = require( 'compute-incrvariance' );
```

#### incrvariance()

Returns an initialized method to compute a sample variance incrementally.

``` javascript
var variance = incrvariance();
```

#### variance( [value] )

If provided a `value`, the method updates and returns the updated sample variance. If not provided a `value`, the method returns the current sample variance.

``` javascript
variance( 2 );

console.log( variance( 1 ) );
// returns 0.5

variance( 3 );

console.log( variance() );
// returns 1
```


## Examples

``` javascript
var incrvariance = require( 'compute-incrvariance' );

// Initialize a method to calculate the sample variance incrementally:
var variance = incrvariance();

// Simulate some data...
for ( var i = 0; i < 1000; i++ ) {
	variance( Math.random() * 100 );
}

console.log( variance() );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

## Notes

The use case for this module differs from the conventional [vector](https://github.com/compute-io/variance) implementation and the [stream](https://github.com/flow-io/?query=variance) implementation.

The use case for the vector implementation is where you have a known dataset and want to calculate a summary statistic (e.g., a single number characterizing the width of a distribution).

The use case for the stream implementation is where you have either (1) a stream source, which may or may not be definite, or (2) a desire to continually stream each updated value.

The incremental implementation overlaps both use cases, but also provides an additional benefit. Namely, this module decouples the act of updating the sample variance from the act of consuming the sample variance.

For example, suppose every 2 seconds your application receives a new value from a remote data source and you want to continuously update the sample variance.

In a streaming implementation, the updated sample variance is either pooled (chunked) or automatically piped to a new destination. The consumer is ultimately responsible for discarding incoming observations.

In contrast to the streaming (push) model, an incremental implementation provides a pull model in which consumers can choose when to observe the current value. Such behavior is important if we consider that, instead of observing on a regular interval (streaming), observations may be random. This module is more amenable to such observation indeterminacy.



## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-incrvariance.svg
[npm-url]: https://npmjs.org/package/compute-incrvariance

[travis-image]: http://img.shields.io/travis/compute-io/incrvariance/master.svg
[travis-url]: https://travis-ci.org/compute-io/incrvariance

[coveralls-image]: https://img.shields.io/coveralls/compute-io/incrvariance/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/incrvariance?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/incrvariance.svg
[dependencies-url]: https://david-dm.org/compute-io/incrvariance

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/incrvariance.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/incrvariance

[github-issues-image]: http://img.shields.io/github/issues/compute-io/incrvariance.svg
[github-issues-url]: https://github.com/compute-io/incrvariance/issues