jQuery.sap.require("sap.ui.ejemploProyecto.util.Formatter");
jQuery.sap.require("sap/ui/model/json/JSONModel");
jQuery.sap.require("sap/m/MessageToast");
jQuery.sap.require("sap/m/Table");

sap.ui.define([
  "sap/ui/ejemploProyecto/controller/BaseController",
  "sap/m/MessageBox",
  "sap/ui/model/json/JSONModel",
  'sap/m/Dialog',
  'sap/m/List',
  'sap/m/StandardListItem',
  'sap/m/Button'
], function (BaseController,MessageBox,JSONModel,Dialog,List,StandardListItem, Button) {
    "use strict";
    return BaseController.extend("sap.ui.ejemploProyecto.controller.Home", {
      onInit : function () {
        var thes = this;
        // this.setModel();
        // thes.getView().byId('idSelect').setSelectedKey(1);
        // this.getView().byId('idAvatar').setVisible(false);  
      },
      onImportacion: function (oEvent) {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("ordenesCompra");
      },
      onImportacionPedidos: function (oEvent) {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("ordenesCompraPedidos");
      },
      onConsolidado: function (oEvent) {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("consolidado");  
      },
      onFechaPlanificada: function (oEvent) {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("fechaPlanificada");  
      },
      onFecSolicitud: function (){
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("estado");
      }
    });
});