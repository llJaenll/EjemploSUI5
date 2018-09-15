sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.ejemploProyecto.controller.App", {
      	onInit: function () {
			// var userModel = new sap.ui.model.json.JSONModel("/services/userapi/currentUser");
	  		
			// userModel.attachRequestCompleted(function() {
            //	sessionStorage.usuarioName = userModel.getData().name;
   			// });
		}
   });
});