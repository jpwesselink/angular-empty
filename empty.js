angular.module('jp10k.angular-empty', [])
	.service('empty', function () {
		'use strict';

		var empty = function (target) {

			if (angular.isObject(target)) {
				return _clearObject(target);
			} else if (angular.isArray(target)) {
				return _clearArray(target);
			}
			return target;
		};

		var _clearObject = function (target) {
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

    var _clearArray = function (target) {
      target.length = 0;
      return target;
    };

    return empty;
	});
