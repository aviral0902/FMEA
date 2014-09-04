App.modules = App.modules || {};
App.models = App.models || {};
App.sessionVars = App.sessionVars || {};

// Templates container
App.templates = App.templates || {};
//    Temporary settings changing runtime
App.session = App.session || {
  logged : false, // The user is logged in
  device : {
    iOS : (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i))
  },
  token : null
}; 