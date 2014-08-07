angular.module('angular-empty', [])
	.service('empty', function () {
		'use strict';

		var empty = function (target) {

			if (angular.isArray(target)) {
				return _clearArray(target);
			} else if (angular.isObject(target)) {
				return _clearObject(target);
			}
			return target;
		};

		var _clearObject = function (target) {
			var keys = [];

			for (var key in target) {
				if (target.hasOwnProperty(key)) {
					keys.push(key);
				}
			}
			for (var i = 0; i < keys.length; i++) {
				delete target[keys[i]];
			}

			return target;
		};

		var _clearArray = function (target) {
			while (target.length > 0) {
				target.pop();
			}
			return target;
		};

		return empty;
	});
