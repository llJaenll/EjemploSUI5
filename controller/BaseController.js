sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("sap.ui.ejemploProyecto.controller.BaseController", {

		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		}
	});

});