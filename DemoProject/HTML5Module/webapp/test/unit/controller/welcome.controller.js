/*global QUnit*/

sap.ui.define([
	"com/yash/HTML5Module/controller/welcome.controller"
], function (Controller) {
	"use strict";

	QUnit.module("welcome Controller");

	QUnit.test("I should test the welcome controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
