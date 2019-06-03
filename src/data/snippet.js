export default publishableKey => `
  (function(){var Sift=window.Sift=window.Sift||[];if(Sift.initialized)return;if(Sift.invoked){window.console&&console.error&&console.error("Sift snippet included twice.");return}Sift.invoked=true;Sift.methods=["page","identify","on"];Sift.factory=function(method){return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);Sift.push(args);return Sift}};for(var i=0;i<Sift.methods.length;i++){var key=Sift.methods[i];Sift[key]=Sift.factory(key)}Sift.load=function(publishableKey){var script=document.createElement("script");script.type="text/javascript";script.async=true;script.src="https://widget.uryybfvsg.com/widget.js";var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first);Sift.PUBLISHABLE_KEY=publishableKey};Sift.SNIPPET_VERSION="0.0.1";
  Sift.load("${publishableKey}");
  })();
`
