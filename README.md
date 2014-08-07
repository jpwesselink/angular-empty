# Angular empty

### What it does

Empties objects and arrays.


### How to use

Install with bower

	bower install angular-empty

Include `empty.js`

	<script src="empty.js" type="text/javascript"/>


Declare app level module which dependends on `angular-empty`

	angular.module('myApp', [
		'angular-empty'
	]);


Make it run our example

	angular.module('myApp')
		// Inject the `empty` reference
		.run(['empty', '$log',
			function (empty, $log) {
				'use strict';

				var myObject = {
					foo: 1,
					bar: 2
				};

				$log.info('myObject before', myObject);

				var myResultObject = empty(myObject);

				$log.info('myObject after', myResultObject);

				$log.info('are myResultObject and myObject the same?', myResultObject ===
					myObject);


				var myArray = [1, 2, 3];

				$log.info('myArray before', myArray);

				var myResultArray = empty(myArray);

				$log.info('myArray after', myResultArray);

				$log.info('are myResultArray and myArray the same?', myResultArray ===
					myArray);
			}
		]);

Bootstrap `myApp`

	angular.element(document).ready(function () {
		'use strict';
		angular.bootstrap(document, ['myApp']);
	});


Go on being happy.
