angular.module('jp10k.angular-empty', [])
	.service('empty', function () {
		'use strict';

		var empty = function (target) {
			var keys = [];

			/*jslint unparam: true*/
			angular.forEach(target, function (value, key) {
				keys.push(key);
			});
			angular.forEach(keys, function (key) {
				delete target[key];
			});
			return target;
		};
		return empty;
	});
