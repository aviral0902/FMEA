/**
 * @author Aviral Jain
 * Ajax Web Service Calls Helper.
 * Description : Defines method for calling web services through ajax.
 */

(function() {

  $.ajaxSetup({
    cache : false,
    timeout : 50000,
    headers : {
      'Cache-Control' : 'no-cache'
    }
  });

  App.communication = {

    /**
     * Name    : GET
     * Purpose : Method for making the GET request service call.
     * Params  : options - json objects containing (url - The service url to call, data - the query params to be passed,
     successCallback  - On Success, the control will be given back to the function
     errorCallback - On Error, the control will be given back to the function,
     dataType - indicates the response type.)
     * Returns : --
     **/
    GET : function(options) {
      console.log(JSON.stringify(options))
      $.ajax({
        type : "GET",
        url : App.settings.server + options.url,
        data : options.data,
        dataType : options.dataType || "json",
        async : options.async || true,
        timeout : 10000,
        complete : function(jqXHR, textStatus) {
        },
        success : function(data, textStatus, jqXHR) {
          console.log(JSON.stringify(data))
          // This check will changes according to output data
          if (data && data.success && data.data && data.data.response) {
            if (options.successCallback) {
              options.successCallback(data.data.response);
            }
          } else {
            var errorOptions = {
              "jqXHR" : jqXHR,
              "textStatus" : "error",
              "errorThrown" : data.data.message
            };

            if (options.errorCallback) {
              options.errorCallback(errorOptions);
            }

          }

        },
        error : function(jqXHR, textStatus, errorThrown) {
          var errorOptions = {
            "jqXHR" : jqXHR,
            "textStatus" : textStatus,
            "errorThrown" : errorThrown
          };
          if (errorThrown) {
            console.log('Error message ' + errorThrown);
          }
          if (jqXHR.status == 0) {
            App.vent.trigger("checkNetworkStatus");
          } else {
            if (options.errorCallback) {
              options.errorCallback(errorOptions);
            }
          }
        }
      });

    },
    /**
     * Name    : POST
     * Purpose : Method for making the POST request service call
     * Params  : options - json object containing (url - The service url to call,
     data - Request body to be sent to the server
     successCallback  - On Success, the control will be given back to the function
     errorCallback - On Error, the control will be given back to the function,
     dataType - indicates the response type.)
     * Returns : --
     **/
    POST : function(options) {
      console.log(JSON.stringify(options))
      $.ajax({
        url : App.settings.server + options.url,
        data : options.data,
        dataType : options.dataType || "json",
        type : 'POST',
        async : options.async || true,
        timeout : 10000,
        complete : function(jqXHR, textStatus) {
        },
        success : function(data, textStatus, jqXHR) {
          console.log(JSON.stringify(data));
          // This check will changes according to output data
          if (data && data.success && data.data && data.data.response) {
            if (options.successCallback) {
              options.successCallback(data.data.response);
            }
          } else {
            var errorOptions = {
              "jqXHR" : jqXHR,
              "textStatus" : "error",
              "errorThrown" : data.data.message
            };

            if (options.errorCallback) {
              options.errorCallback(errorOptions);
            }
          }
        },
        error : function(jqXHR, textStatus, errorThrown) {
          var errorOptions = {
            "jqXHR" : jqXHR,
            "textStatus" : textStatus,
            "errorThrown" : errorThrown
          };
          if (errorThrown) {
            console.log('Error message ' + errorThrown);
          }
          if (jqXHR.status == 0) {
            App.vent.trigger("checkNetworkStatus");
          } else {
            if (options.errorCallback) {
              options.errorCallback(errorOptions);
            }
          }
        }
      });
    },
    /**
     * Name    : DELETE
     * Purpose : Method for making the DELETE request service call
     * Params  : options - json object containing (url - The service url to call,
     data - Request body to be sent to the server
     successCallback  - On Success, the control will be given back to the function
     errorCallback - On Error, the control will be given back to the function,
     dataType - indicates the response type.)
     * Returns : --
     **/
    DELETE : function(options) {
      console.log(JSON.stringify(options))
      $.ajax({
        url : App.settings.server + options.url,
        data : options.data,
        dataType : options.dataType || "json",
        async : options.async || true,
        type : 'DELETE',
        timeout : 10000,
        complete : function(jqXHR, textStatus) {
        },
        success : function(data, textStatus, jqXHR) {
          // This check will changes according to output data
          if (data && data.success && data.data && data.data.response) {
            if (options.successCallback) {
              options.successCallback(data.data.response);
            }
          } else {
            var errorOptions = {
              "jqXHR" : jqXHR,
              "textStatus" : "error",
              "errorThrown" : data.data.message
            };

            if (options.errorCallback) {
              options.errorCallback(errorOptions);
            }

          }

        },
        error : function(jqXHR, textStatus, errorThrown) {
          var errorOptions = {
            "jqXHR" : jqXHR,
            "textStatus" : textStatus,
            "errorThrown" : errorThrown
          };
          if (errorThrown) {
            console.log('Error message ' + errorThrown);
          }
          if (jqXHR.status == 0) {
            App.vent.trigger("checkNetworkStatus");
          } else {
            if (options.errorCallback) {
              options.errorCallback(errorOptions);
            }
          }
        }
      });
    },

    /**
     * Name    : PUT
     * Purpose : Method for making the PUT request service call
     * Params  : options - json object containing (url - The service url to call,
     data - Request body to be sent to the server
     successCallback  - On Success, the control will be given back to the function
     errorCallback - On Error, the control will be given back to the function,
     dataType - indicates the response type.)
     * Returns : --
     **/
    PUT : function(options) {
        console.log(JSON.stringify(options))
      $.ajax({
        url : App.settings.server + options.url,
        data : options.data,
        dataType : options.dataType || "json",
        async : options.async || true,
        type : 'PUT',
        timeout : 10000,
        complete : function(jqXHR, textStatus) {
        },
        success : function(data, textStatus, jqXHR) {
          console.log(JSON.stringify(data));
          // This check will changes according to output data
          if (data && data.success && data.data && data.data.response) {
            if (options.successCallback) {
              options.successCallback(data.data.response);
            }
          } else {
            var errorOptions = {
              "jqXHR" : jqXHR,
              "textStatus" : "error",
              "errorThrown" : data.data.message
            };

            if (options.errorCallback) {
              options.errorCallback(errorOptions);
            }

          }

        },
        error : function(jqXHR, textStatus, errorThrown) {
          var errorOptions = {
            "jqXHR" : jqXHR,
            "textStatus" : textStatus,
            "errorThrown" : errorThrown
          };
          if (errorThrown) {
            console.log('Error message ' + errorThrown);
          }
          if (jqXHR.status == 0) {
            App.vent.trigger("checkNetworkStatus");
          } else {
            if (options.errorCallback) {
              options.errorCallback(errorOptions);
            }
          }

        }
      });
    }
  };
})();
