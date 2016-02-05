System.config({
  baseURL: "http://karudedios.github.io/chat-challenge/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system",
      "es7.decorators"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "app/app.js",
      "github:angular/bower-angular-animate@1.4.9.js",
      "github:angular/bower-angular-aria@1.4.9.js",
      "github:angular/bower-angular-cookies@1.4.9.js",
      "github:angular/bower-angular-resource@1.4.9.js",
      "github:angular/bower-material@1.0.4.js",
      "github:angular-ui/ui-router@0.2.17.js",
      "app/utils/constants.js",
      "github:angular/bower-angular@1.4.9.js",
      "app/app.run.js",
      "app/components/preBootstrapLoader/pre-bootstrap-loader.component.js",
      "github:dogfalo/materialize@0.97.5.js",
      "app/app.factory.js",
      "app/app.config.js",
      "app/app.css!github:systemjs/plugin-css@0.1.20.js",
      "github:angular/bower-angular-aria@1.4.9/angular-aria.js",
      "github:angular/bower-angular-cookies@1.4.9/angular-cookies.js",
      "github:angular/bower-angular-resource@1.4.9/angular-resource.js",
      "github:angular/bower-angular-animate@1.4.9/angular-animate.js",
      "github:angular/bower-material@1.0.4/index.js",
      "app/utils/decorators.js",
      "npm:babel-runtime@5.8.35/helpers/class-call-check.js",
      "github:angular/bower-angular@1.4.9/angular.js",
      "npm:babel-runtime@5.8.35/helpers/sliced-to-array.js",
      "npm:babel-runtime@5.8.35/helpers/create-class.js",
      "npm:babel-runtime@5.8.35/core-js/promise.js",
      "npm:babel-runtime@5.8.35/core-js/object/assign.js",
      "npm:md5@2.0.0.js",
      "npm:babel-runtime@5.8.35/core-js/get-iterator.js",
      "app/models/user.js",
      "github:angular-ui/ui-router@0.2.17/angular-ui-router.js",
      "github:dogfalo/materialize@0.97.5/js/materialize.js",
      "app/utils/helpers.js",
      "github:socketio/socket.io-client@1.4.5.js",
      "app/components/auth/auth.config.js",
      "app/app.controller.js",
      "app/components/chatroom/chatroom.config.js",
      "github:dogfalo/materialize@0.97.5/css/materialize.css!github:systemjs/plugin-css@0.1.20.js",
      "npm:core-js@1.2.6/library/fn/object/assign.js",
      "npm:babel-runtime@5.8.35/core-js/is-iterable.js",
      "npm:core-js@1.2.6/library/fn/promise.js",
      "npm:babel-runtime@5.8.35/core-js/object/define-property.js",
      "npm:core-js@1.2.6/library/fn/get-iterator.js",
      "npm:babel-runtime@5.8.35/helpers/to-array.js",
      "npm:md5@2.0.0/md5.js",
      "github:angular/bower-material@1.0.4/angular-material.js",
      "app/components/auth/logout/logout.config.js",
      "app/components/chatroom/chatroom.controller.js",
      "app/components/chatroom/create/chatroom-create.config.js",
      "app/components/auth/login/login.config.js",
      "app/components/chatroom/delete/chatroom-delete.config.js",
      "github:socketio/socket.io-client@1.4.5/socket.io.js",
      "github:components/jquery@2.2.0.js",
      "app/components/chatroom/chatroom.html!github:systemjs/plugin-text@0.0.4.js",
      "app/app.html!github:systemjs/plugin-text@0.0.4.js",
      "npm:core-js@1.2.6/library/modules/$.core.js",
      "npm:core-js@1.2.6/library/modules/es6.object.to-string.js",
      "npm:crypt@0.0.1.js",
      "npm:charenc@0.0.1.js",
      "npm:core-js@1.2.6/library/modules/es6.object.assign.js",
      "npm:core-js@1.2.6/library/fn/is-iterable.js",
      "npm:core-js@1.2.6/library/modules/web.dom.iterable.js",
      "npm:core-js@1.2.6/library/modules/es6.string.iterator.js",
      "npm:core-js@1.2.6/library/fn/object/define-property.js",
      "npm:core-js@1.2.6/library/modules/core.get-iterator.js",
      "npm:babel-runtime@5.8.35/core-js/array/from.js",
      "npm:core-js@1.2.6/library/modules/es6.promise.js",
      "npm:is-buffer@1.0.2.js",
      "app/components/auth/logout/logout.controller.js",
      "app/components/chatroom/create/chatroom-create.controller.js",
      "npm:babel-runtime@5.8.35/helpers/to-consumable-array.js",
      "app/components/auth/login/login.controller.js",
      "app/components/chatroom/delete/chatroom-delete.controller.js",
      "app/components/chatroom/create/chatroom-create.html!github:systemjs/plugin-text@0.0.4.js",
      "app/components/auth/login/login.html!github:systemjs/plugin-text@0.0.4.js",
      "github:components/jquery@2.2.0/jquery.js",
      "app/components/chatroom/delete/chatroom-delete.html!github:systemjs/plugin-text@0.0.4.js",
      "npm:charenc@0.0.1/charenc.js",
      "npm:crypt@0.0.1/crypt.js",
      "npm:core-js@1.2.6/library/modules/$.iterators.js",
      "npm:core-js@1.2.6/library/modules/$.export.js",
      "npm:core-js@1.2.6/library/modules/es6.array.iterator.js",
      "npm:core-js@1.2.6/library/modules/$.object-assign.js",
      "npm:core-js@1.2.6/library/modules/core.is-iterable.js",
      "npm:core-js@1.2.6/library/modules/$.string-at.js",
      "npm:core-js@1.2.6/library/modules/$.iter-define.js",
      "npm:core-js@1.2.6/library/modules/$.an-object.js",
      "npm:core-js@1.2.6/library/modules/core.get-iterator-method.js",
      "npm:core-js@1.2.6/library/modules/$.library.js",
      "npm:core-js@1.2.6/library/modules/$.js",
      "npm:core-js@1.2.6/library/modules/$.global.js",
      "npm:core-js@1.2.6/library/modules/$.is-object.js",
      "npm:core-js@1.2.6/library/modules/$.a-function.js",
      "npm:core-js@1.2.6/library/modules/$.strict-new.js",
      "npm:core-js@1.2.6/library/modules/$.same-value.js",
      "npm:core-js@1.2.6/library/fn/array/from.js",
      "npm:core-js@1.2.6/library/modules/$.classof.js",
      "npm:core-js@1.2.6/library/modules/$.for-of.js",
      "npm:core-js@1.2.6/library/modules/$.ctx.js",
      "npm:core-js@1.2.6/library/modules/$.set-proto.js",
      "npm:core-js@1.2.6/library/modules/$.wks.js",
      "npm:core-js@1.2.6/library/modules/$.species-constructor.js",
      "npm:core-js@1.2.6/library/modules/$.redefine-all.js",
      "npm:core-js@1.2.6/library/modules/$.descriptors.js",
      "npm:core-js@1.2.6/library/modules/$.set-to-string-tag.js",
      "npm:core-js@1.2.6/library/modules/$.iter-detect.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "npm:core-js@1.2.6/library/modules/$.set-species.js",
      "npm:core-js@1.2.6/library/modules/$.microtask.js",
      "npm:is-buffer@1.0.2/index.js",
      "npm:core-js@1.2.6/library/modules/$.add-to-unscopables.js",
      "npm:core-js@1.2.6/library/modules/$.iter-step.js",
      "npm:core-js@1.2.6/library/modules/$.fails.js",
      "npm:core-js@1.2.6/library/modules/$.to-integer.js",
      "npm:core-js@1.2.6/library/modules/$.defined.js",
      "npm:core-js@1.2.6/library/modules/$.has.js",
      "npm:core-js@1.2.6/library/modules/$.cof.js",
      "npm:core-js@1.2.6/library/modules/$.uid.js",
      "npm:core-js@1.2.6/library/modules/$.to-object.js",
      "npm:core-js@1.2.6/library/modules/$.iobject.js",
      "npm:core-js@1.2.6/library/modules/$.to-iobject.js",
      "npm:core-js@1.2.6/library/modules/$.hide.js",
      "npm:core-js@1.2.6/library/modules/$.redefine.js",
      "npm:core-js@1.2.6/library/modules/$.iter-create.js",
      "npm:core-js@1.2.6/library/modules/es6.array.from.js",
      "npm:core-js@1.2.6/library/modules/$.iter-call.js",
      "npm:core-js@1.2.6/library/modules/$.is-array-iter.js",
      "npm:core-js@1.2.6/library/modules/$.to-length.js",
      "npm:core-js@1.2.6/library/modules/$.shared.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:core-js@1.2.6/library/modules/$.task.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "npm:core-js@1.2.6/library/modules/$.property-desc.js",
      "npm:core-js@1.2.6/library/modules/$.invoke.js",
      "npm:process@0.11.2.js",
      "npm:core-js@1.2.6/library/modules/$.dom-create.js",
      "npm:core-js@1.2.6/library/modules/$.html.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "npm:process@0.11.2/browser.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:ieee754@1.1.6.js",
      "npm:base64-js@0.0.8.js",
      "npm:isarray@1.0.0.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:ieee754@1.1.6/index.js",
      "npm:isarray@1.0.0/index.js"
    ]
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.9",
    "angular-animate": "github:angular/bower-angular-animate@1.4.9",
    "angular-aria": "github:angular/bower-angular-aria@1.4.9",
    "angular-cookies": "github:angular/bower-angular-cookies@1.4.9",
    "angular-material": "github:angular/bower-material@1.0.4",
    "angular-resource": "github:angular/bower-angular-resource@1.4.9",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.17",
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "clean-css": "npm:clean-css@3.4.9",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "dogfalo/materialize": "github:dogfalo/materialize@0.97.5",
    "md5": "npm:md5@2.0.0",
    "socket.io-client": "github:socketio/socket.io-client@1.4.5",
    "text": "github:systemjs/plugin-text@0.0.4",
    "github:angular-ui/ui-router@0.2.17": {
      "angular": "github:angular/bower-angular@1.4.9"
    },
    "github:angular/bower-angular-animate@1.4.9": {
      "angular": "github:angular/bower-angular@1.4.9"
    },
    "github:angular/bower-angular-aria@1.4.9": {
      "angular": "github:angular/bower-angular@1.4.9"
    },
    "github:angular/bower-angular-cookies@1.4.9": {
      "angular": "github:angular/bower-angular@1.4.9"
    },
    "github:angular/bower-angular-resource@1.4.9": {
      "angular": "github:angular/bower-angular@1.4.9"
    },
    "github:angular/bower-material@1.0.4": {
      "angular": "github:angular/bower-angular@1.4.9",
      "angular-animate": "github:angular/bower-angular-animate@1.4.9",
      "angular-aria": "github:angular/bower-angular-aria@1.4.9",
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "github:dogfalo/materialize@0.97.5": {
      "css": "github:systemjs/plugin-css@0.1.20",
      "jquery": "github:components/jquery@2.2.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:clean-css@3.4.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-buffer@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:md5@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "charenc": "npm:charenc@0.0.1",
      "crypt": "npm:crypt@0.0.1",
      "is-buffer": "npm:is-buffer@1.0.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
