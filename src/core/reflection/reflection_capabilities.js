'use strict';"use strict";
var lang_1 = require('angular2/src/facade/lang');
var exceptions_1 = require('angular2/src/facade/exceptions');
var ReflectionCapabilities = (function () {
    function ReflectionCapabilities(reflect) {
        this._reflect = lang_1.isPresent(reflect) ? reflect : lang_1.global.Reflect;
    }
    ReflectionCapabilities.prototype.isReflectionEnabled = function () { return true; };
    ReflectionCapabilities.prototype.factory = function (t) {
        switch (t.length) {
            case 0:
                return function () { return new t(); };
            case 1:
                return function (a1) { return new t(a1); };
            case 2:
                return function (a1, a2) { return new t(a1, a2); };
            case 3:
                return function (a1, a2, a3) { return new t(a1, a2, a3); };
            case 4:
                return function (a1, a2, a3, a4) { return new t(a1, a2, a3, a4); };
            case 5:
                return function (a1, a2, a3, a4, a5) { return new t(a1, a2, a3, a4, a5); };
            case 6:
                return function (a1, a2, a3, a4, a5, a6) {
                    return new t(a1, a2, a3, a4, a5, a6);
                };
            case 7:
                return function (a1, a2, a3, a4, a5, a6, a7) {
                    return new t(a1, a2, a3, a4, a5, a6, a7);
                };
            case 8:
                return function (a1, a2, a3, a4, a5, a6, a7, a8) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8);
                };
            case 9:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9);
                };
            case 10:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
                };
            case 11:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
                };
            case 12:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12);
                };
            case 13:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
                };
            case 14:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14);
                };
            case 15:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15);
                };
            case 16:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16);
                };
            case 17:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17);
                };
            case 18:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18);
                };
            case 19:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19);
                };
            case 20:
                return function (a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20) {
                    return new t(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20);
                };
        }
        ;
        throw new Error("Cannot create a factory for '" + lang_1.stringify(t) + "' because its constructor has more than 20 arguments");
    };
    /** @internal */
    ReflectionCapabilities.prototype._zipTypesAndAnnotations = function (paramTypes, paramAnnotations) {
        var result;
        if (typeof paramTypes === 'undefined') {
            result = new Array(paramAnnotations.length);
        }
        else {
            result = new Array(paramTypes.length);
        }
        for (var i = 0; i < result.length; i++) {
            // TS outputs Object for parameters without types, while Traceur omits
            // the annotations. For now we preserve the Traceur behavior to aid
            // migration, but this can be revisited.
            if (typeof paramTypes === 'undefined') {
                result[i] = [];
            }
            else if (paramTypes[i] != Object) {
                result[i] = [paramTypes[i]];
            }
            else {
                result[i] = [];
            }
            if (lang_1.isPresent(paramAnnotations) && lang_1.isPresent(paramAnnotations[i])) {
                result[i] = result[i].concat(paramAnnotations[i]);
            }
        }
        return result;
    };
    ReflectionCapabilities.prototype.parameters = function (typeOrFunc) {
        // Prefer the direct API.
        if (lang_1.isPresent(typeOrFunc.parameters)) {
            return typeOrFunc.parameters;
        }
        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
            var paramAnnotations = this._reflect.getMetadata('parameters', typeOrFunc);
            var paramTypes = this._reflect.getMetadata('design:paramtypes', typeOrFunc);
            if (lang_1.isPresent(paramTypes) || lang_1.isPresent(paramAnnotations)) {
                return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
            }
        }
        // The array has to be filled with `undefined` because holes would be skipped by `some`
        var parameters = new Array(typeOrFunc.length);
        parameters.fill(undefined);
        return parameters;
    };
    ReflectionCapabilities.prototype.annotations = function (typeOrFunc) {
        // Prefer the direct API.
        if (lang_1.isPresent(typeOrFunc.annotations)) {
            var annotations = typeOrFunc.annotations;
            if (lang_1.isFunction(annotations) && annotations.annotations) {
                annotations = annotations.annotations;
            }
            return annotations;
        }
        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
            var annotations = this._reflect.getMetadata('annotations', typeOrFunc);
            if (lang_1.isPresent(annotations))
                return annotations;
        }
        return [];
    };
    ReflectionCapabilities.prototype.propMetadata = function (typeOrFunc) {
        // Prefer the direct API.
        if (lang_1.isPresent(typeOrFunc.propMetadata)) {
            var propMetadata = typeOrFunc.propMetadata;
            if (lang_1.isFunction(propMetadata) && propMetadata.propMetadata) {
                propMetadata = propMetadata.propMetadata;
            }
            return propMetadata;
        }
        if (lang_1.isPresent(this._reflect) && lang_1.isPresent(this._reflect.getMetadata)) {
            var propMetadata = this._reflect.getMetadata('propMetadata', typeOrFunc);
            if (lang_1.isPresent(propMetadata))
                return propMetadata;
        }
        return {};
    };
    ReflectionCapabilities.prototype.interfaces = function (type) {
        throw new exceptions_1.BaseException("JavaScript does not support interfaces");
    };
    ReflectionCapabilities.prototype.getter = function (name) { return new Function('o', 'return o.' + name + ';'); };
    ReflectionCapabilities.prototype.setter = function (name) {
        return new Function('o', 'v', 'return o.' + name + ' = v;');
    };
    ReflectionCapabilities.prototype.method = function (name) {
        var functionBody = "if (!o." + name + ") throw new Error('\"" + name + "\" is undefined');\n        return o." + name + ".apply(o, args);";
        return new Function('o', 'args', functionBody);
    };
    // There is not a concept of import uri in Js, but this is useful in developing Dart applications.
    ReflectionCapabilities.prototype.importUri = function (type) { return "./" + lang_1.stringify(type); };
    return ReflectionCapabilities;
}());
exports.ReflectionCapabilities = ReflectionCapabilities;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVJHYlA5OEhyLnRtcC9hbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFPTywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2xDLDJCQUE0QixnQ0FBZ0MsQ0FBQyxDQUFBO0FBSTdEO0lBR0UsZ0NBQVksT0FBYTtRQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLEdBQUcsYUFBTSxDQUFDLE9BQU8sQ0FBQztJQUFDLENBQUM7SUFFN0Ysb0RBQW1CLEdBQW5CLGNBQWlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRS9DLHdDQUFPLEdBQVAsVUFBUSxDQUFlO1FBQ3JCLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsY0FBTSxPQUFBLElBQUksQ0FBQyxFQUFFLEVBQVAsQ0FBTyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsVUFBQyxFQUFPLElBQUssT0FBQSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBVCxDQUFTLENBQUM7WUFDaEMsS0FBSyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxVQUFDLEVBQU8sRUFBRSxFQUFPLElBQUssT0FBQSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQWIsQ0FBYSxDQUFDO1lBQzdDLEtBQUssQ0FBQztnQkFDSixNQUFNLENBQUMsVUFBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sSUFBSyxPQUFBLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxD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RSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUFsRSxDQUFrRSxDQUFDO1lBQ2hGLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsVUFBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDL0UsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRO29CQUN2RCxPQUFBLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQUF2RSxDQUF1RSxDQUFDO1lBQ3JGLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsVUFBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDL0UsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUTtvQkFDakUsT0FBQSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JBQTVFLENBQTRFLENBQUM7WUFDMUYsS0FBSyxFQUFFO2dCQUNMLE1BQU0sQ0FBQyxVQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUMvRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUTtvQkFDM0UsT0FBQSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ3JFLEdBQUcsQ0FBQztnQkFEVixDQUNVLENBQUM7WUFDeEIsS0FBSyxFQUFFO2dCQUNMLE1BQU0sQ0FBQyxVQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUMvRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUM5RSxHQUFRO29CQUFLLE9BQUEsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ2hFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQURwQixDQUNvQixDQUFDO1lBQzVDLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsVUFBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDL0UsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFDOUUsR0FBUSxFQUFFLEdBQVE7b0JBQUssT0FBQSxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQ3RELEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO2dCQURuQyxDQUNtQyxDQUFDO1lBQ3JFLEtBQUssRUFBRTtnQkFDTCxNQUFNLENBQUMsVUFBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFDL0UsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFDOUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxHQUFRO29CQUFLLE9BQUEsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFDNUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7Z0JB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O0lBQ2xHLDBDQUFTLEdBQVQsVUFBVSxJQUFVLElBQVksTUFBTSxDQUFDLE9BQUssZ0JBQVMsQ0FBQyxJQUFJLENBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEUsNkJBQUM7QUFBRCxDQUFDLEFBckxELElBcUxDO0FBckxZLDhCQUFzQix5QkFxTGxDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBUeXBlLFxuICBpc1ByZXNlbnQsXG4gIGlzRnVuY3Rpb24sXG4gIGdsb2JhbCxcbiAgc3RyaW5naWZ5LFxuICBDb25jcmV0ZVR5cGVcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7QmFzZUV4Y2VwdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9leGNlcHRpb25zJztcbmltcG9ydCB7R2V0dGVyRm4sIFNldHRlckZuLCBNZXRob2RGbn0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1BsYXRmb3JtUmVmbGVjdGlvbkNhcGFiaWxpdGllc30gZnJvbSAnLi9wbGF0Zm9ybV9yZWZsZWN0aW9uX2NhcGFiaWxpdGllcyc7XG5cbmV4cG9ydCBjbGFzcyBSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzIGltcGxlbWVudHMgUGxhdGZvcm1SZWZsZWN0aW9uQ2FwYWJpbGl0aWVzIHtcbiAgcHJpdmF0ZSBfcmVmbGVjdDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHJlZmxlY3Q/OiBhbnkpIHsgdGhpcy5fcmVmbGVjdCA9IGlzUHJlc2VudChyZWZsZWN0KSA/IHJlZmxlY3QgOiBnbG9iYWwuUmVmbGVjdDsgfVxuXG4gIGlzUmVmbGVjdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XG5cbiAgZmFjdG9yeSh0OiBDb25jcmV0ZVR5cGUpOiBGdW5jdGlvbiB7XG4gICAgc3dpdGNoICh0Lmxlbmd0aCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gKCkgPT4gbmV3IHQoKTtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIChhMTogYW55KSA9PiBuZXcgdChhMSk7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSkgPT4gbmV3IHQoYTEsIGEyKTtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55KSA9PiBuZXcgdChhMSwgYTIsIGEzKTtcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCk7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSkgPT4gbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO1xuICAgICAgY2FzZSA3OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpO1xuICAgICAgY2FzZSA4OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4KTtcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55KSA9PlxuICAgICAgICAgICAgICAgICAgIG5ldyB0KGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTkpO1xuICAgICAgY2FzZSAxMDpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTApO1xuICAgICAgY2FzZSAxMTpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSkgPT4gbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEpO1xuICAgICAgY2FzZSAxMjpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSwgYTEyOiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMik7XG4gICAgICBjYXNlIDEzOlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnksIGExMTogYW55LCBhMTI6IGFueSwgYTEzOiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzKTtcbiAgICAgIGNhc2UgMTQ6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSwgYTExOiBhbnksIGExMjogYW55LCBhMTM6IGFueSwgYTE0OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQpO1xuICAgICAgY2FzZSAxNTpcbiAgICAgICAgcmV0dXJuIChhMTogYW55LCBhMjogYW55LCBhMzogYW55LCBhNDogYW55LCBhNTogYW55LCBhNjogYW55LCBhNzogYW55LCBhODogYW55LCBhOTogYW55LFxuICAgICAgICAgICAgICAgIGExMDogYW55LCBhMTE6IGFueSwgYTEyOiBhbnksIGExMzogYW55LCBhMTQ6IGFueSwgYTE1OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSk7XG4gICAgICBjYXNlIDE2OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnksIGExMTogYW55LCBhMTI6IGFueSwgYTEzOiBhbnksIGExNDogYW55LCBhMTU6IGFueSwgYTE2OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSwgYTE2KTtcbiAgICAgIGNhc2UgMTc6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSwgYTExOiBhbnksIGExMjogYW55LCBhMTM6IGFueSwgYTE0OiBhbnksIGExNTogYW55LCBhMTY6IGFueSwgYTE3OiBhbnkpID0+XG4gICAgICAgICAgICAgICAgICAgbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsIGExMiwgYTEzLCBhMTQsIGExNSwgYTE2LFxuICAgICAgICAgICAgICAgICAgICAgICAgIGExNyk7XG4gICAgICBjYXNlIDE4OlxuICAgICAgICByZXR1cm4gKGExOiBhbnksIGEyOiBhbnksIGEzOiBhbnksIGE0OiBhbnksIGE1OiBhbnksIGE2OiBhbnksIGE3OiBhbnksIGE4OiBhbnksIGE5OiBhbnksXG4gICAgICAgICAgICAgICAgYTEwOiBhbnksIGExMTogYW55LCBhMTI6IGFueSwgYTEzOiBhbnksIGExNDogYW55LCBhMTU6IGFueSwgYTE2OiBhbnksIGExNzogYW55LFxuICAgICAgICAgICAgICAgIGExODogYW55KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsIGExNCwgYTE1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhMTYsIGExNywgYTE4KTtcbiAgICAgIGNhc2UgMTk6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSwgYTExOiBhbnksIGExMjogYW55LCBhMTM6IGFueSwgYTE0OiBhbnksIGExNTogYW55LCBhMTY6IGFueSwgYTE3OiBhbnksXG4gICAgICAgICAgICAgICAgYTE4OiBhbnksIGExOTogYW55KSA9PiBuZXcgdChhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5LCBhMTAsIGExMSwgYTEyLCBhMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhMTQsIGExNSwgYTE2LCBhMTcsIGExOCwgYTE5KTtcbiAgICAgIGNhc2UgMjA6XG4gICAgICAgIHJldHVybiAoYTE6IGFueSwgYTI6IGFueSwgYTM6IGFueSwgYTQ6IGFueSwgYTU6IGFueSwgYTY6IGFueSwgYTc6IGFueSwgYTg6IGFueSwgYTk6IGFueSxcbiAgICAgICAgICAgICAgICBhMTA6IGFueSwgYTExOiBhbnksIGExMjogYW55LCBhMTM6IGFueSwgYTE0OiBhbnksIGExNTogYW55LCBhMTY6IGFueSwgYTE3OiBhbnksXG4gICAgICAgICAgICAgICAgYTE4OiBhbnksIGExOTogYW55LCBhMjA6IGFueSkgPT4gbmV3IHQoYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSwgYTEwLCBhMTEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYTEyLCBhMTMsIGExNCwgYTE1LCBhMTYsIGExNywgYTE4LCBhMTksIGEyMCk7XG4gICAgfTtcblxuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYENhbm5vdCBjcmVhdGUgYSBmYWN0b3J5IGZvciAnJHtzdHJpbmdpZnkodCl9JyBiZWNhdXNlIGl0cyBjb25zdHJ1Y3RvciBoYXMgbW9yZSB0aGFuIDIwIGFyZ3VtZW50c2ApO1xuICB9XG5cbiAgLyoqIEBpbnRlcm5hbCAqL1xuICBfemlwVHlwZXNBbmRBbm5vdGF0aW9ucyhwYXJhbVR5cGVzLCBwYXJhbUFubm90YXRpb25zKTogYW55W11bXSB7XG4gICAgdmFyIHJlc3VsdDtcblxuICAgIGlmICh0eXBlb2YgcGFyYW1UeXBlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc3VsdCA9IG5ldyBBcnJheShwYXJhbUFubm90YXRpb25zLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IG5ldyBBcnJheShwYXJhbVR5cGVzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIFRTIG91dHB1dHMgT2JqZWN0IGZvciBwYXJhbWV0ZXJzIHdpdGhvdXQgdHlwZXMsIHdoaWxlIFRyYWNldXIgb21pdHNcbiAgICAgIC8vIHRoZSBhbm5vdGF0aW9ucy4gRm9yIG5vdyB3ZSBwcmVzZXJ2ZSB0aGUgVHJhY2V1ciBiZWhhdmlvciB0byBhaWRcbiAgICAgIC8vIG1pZ3JhdGlvbiwgYnV0IHRoaXMgY2FuIGJlIHJldmlzaXRlZC5cbiAgICAgIGlmICh0eXBlb2YgcGFyYW1UeXBlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmVzdWx0W2ldID0gW107XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtVHlwZXNbaV0gIT0gT2JqZWN0KSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IFtwYXJhbVR5cGVzW2ldXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKGlzUHJlc2VudChwYXJhbUFubm90YXRpb25zKSAmJiBpc1ByZXNlbnQocGFyYW1Bbm5vdGF0aW9uc1tpXSkpIHtcbiAgICAgICAgcmVzdWx0W2ldID0gcmVzdWx0W2ldLmNvbmNhdChwYXJhbUFubm90YXRpb25zW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBhcmFtZXRlcnModHlwZU9yRnVuYzogVHlwZSk6IGFueVtdW10ge1xuICAgIC8vIFByZWZlciB0aGUgZGlyZWN0IEFQSS5cbiAgICBpZiAoaXNQcmVzZW50KCg8YW55PnR5cGVPckZ1bmMpLnBhcmFtZXRlcnMpKSB7XG4gICAgICByZXR1cm4gKDxhbnk+dHlwZU9yRnVuYykucGFyYW1ldGVycztcbiAgICB9XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9yZWZsZWN0KSAmJiBpc1ByZXNlbnQodGhpcy5fcmVmbGVjdC5nZXRNZXRhZGF0YSkpIHtcbiAgICAgIHZhciBwYXJhbUFubm90YXRpb25zID0gdGhpcy5fcmVmbGVjdC5nZXRNZXRhZGF0YSgncGFyYW1ldGVycycsIHR5cGVPckZ1bmMpO1xuICAgICAgdmFyIHBhcmFtVHlwZXMgPSB0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIHR5cGVPckZ1bmMpO1xuICAgICAgaWYgKGlzUHJlc2VudChwYXJhbVR5cGVzKSB8fCBpc1ByZXNlbnQocGFyYW1Bbm5vdGF0aW9ucykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ppcFR5cGVzQW5kQW5ub3RhdGlvbnMocGFyYW1UeXBlcywgcGFyYW1Bbm5vdGF0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFRoZSBhcnJheSBoYXMgdG8gYmUgZmlsbGVkIHdpdGggYHVuZGVmaW5lZGAgYmVjYXVzZSBob2xlcyB3b3VsZCBiZSBza2lwcGVkIGJ5IGBzb21lYFxuICAgIGxldCBwYXJhbWV0ZXJzID0gbmV3IEFycmF5KCg8YW55PnR5cGVPckZ1bmMubGVuZ3RoKSk7XG4gICAgcGFyYW1ldGVycy5maWxsKHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIHBhcmFtZXRlcnM7XG4gIH1cblxuICBhbm5vdGF0aW9ucyh0eXBlT3JGdW5jOiBUeXBlKTogYW55W10ge1xuICAgIC8vIFByZWZlciB0aGUgZGlyZWN0IEFQSS5cbiAgICBpZiAoaXNQcmVzZW50KCg8YW55PnR5cGVPckZ1bmMpLmFubm90YXRpb25zKSkge1xuICAgICAgdmFyIGFubm90YXRpb25zID0gKDxhbnk+dHlwZU9yRnVuYykuYW5ub3RhdGlvbnM7XG4gICAgICBpZiAoaXNGdW5jdGlvbihhbm5vdGF0aW9ucykgJiYgYW5ub3RhdGlvbnMuYW5ub3RhdGlvbnMpIHtcbiAgICAgICAgYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucy5hbm5vdGF0aW9ucztcbiAgICAgIH1cbiAgICAgIHJldHVybiBhbm5vdGF0aW9ucztcbiAgICB9XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9yZWZsZWN0KSAmJiBpc1ByZXNlbnQodGhpcy5fcmVmbGVjdC5nZXRNZXRhZGF0YSkpIHtcbiAgICAgIHZhciBhbm5vdGF0aW9ucyA9IHRoaXMuX3JlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Fubm90YXRpb25zJywgdHlwZU9yRnVuYyk7XG4gICAgICBpZiAoaXNQcmVzZW50KGFubm90YXRpb25zKSkgcmV0dXJuIGFubm90YXRpb25zO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBwcm9wTWV0YWRhdGEodHlwZU9yRnVuYzogYW55KToge1trZXk6IHN0cmluZ106IGFueVtdfSB7XG4gICAgLy8gUHJlZmVyIHRoZSBkaXJlY3QgQVBJLlxuICAgIGlmIChpc1ByZXNlbnQoKDxhbnk+dHlwZU9yRnVuYykucHJvcE1ldGFkYXRhKSkge1xuICAgICAgdmFyIHByb3BNZXRhZGF0YSA9ICg8YW55PnR5cGVPckZ1bmMpLnByb3BNZXRhZGF0YTtcbiAgICAgIGlmIChpc0Z1bmN0aW9uKHByb3BNZXRhZGF0YSkgJiYgcHJvcE1ldGFkYXRhLnByb3BNZXRhZGF0YSkge1xuICAgICAgICBwcm9wTWV0YWRhdGEgPSBwcm9wTWV0YWRhdGEucHJvcE1ldGFkYXRhO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb3BNZXRhZGF0YTtcbiAgICB9XG4gICAgaWYgKGlzUHJlc2VudCh0aGlzLl9yZWZsZWN0KSAmJiBpc1ByZXNlbnQodGhpcy5fcmVmbGVjdC5nZXRNZXRhZGF0YSkpIHtcbiAgICAgIHZhciBwcm9wTWV0YWRhdGEgPSB0aGlzLl9yZWZsZWN0LmdldE1ldGFkYXRhKCdwcm9wTWV0YWRhdGEnLCB0eXBlT3JGdW5jKTtcbiAgICAgIGlmIChpc1ByZXNlbnQocHJvcE1ldGFkYXRhKSkgcmV0dXJuIHByb3BNZXRhZGF0YTtcbiAgICB9XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgaW50ZXJmYWNlcyh0eXBlOiBUeXBlKTogYW55W10ge1xuICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFwiSmF2YVNjcmlwdCBkb2VzIG5vdCBzdXBwb3J0IGludGVyZmFjZXNcIik7XG4gIH1cblxuICBnZXR0ZXIobmFtZTogc3RyaW5nKTogR2V0dGVyRm4geyByZXR1cm4gPEdldHRlckZuPm5ldyBGdW5jdGlvbignbycsICdyZXR1cm4gby4nICsgbmFtZSArICc7Jyk7IH1cblxuICBzZXR0ZXIobmFtZTogc3RyaW5nKTogU2V0dGVyRm4ge1xuICAgIHJldHVybiA8U2V0dGVyRm4+bmV3IEZ1bmN0aW9uKCdvJywgJ3YnLCAncmV0dXJuIG8uJyArIG5hbWUgKyAnID0gdjsnKTtcbiAgfVxuXG4gIG1ldGhvZChuYW1lOiBzdHJpbmcpOiBNZXRob2RGbiB7XG4gICAgbGV0IGZ1bmN0aW9uQm9keSA9IGBpZiAoIW8uJHtuYW1lfSkgdGhyb3cgbmV3IEVycm9yKCdcIiR7bmFtZX1cIiBpcyB1bmRlZmluZWQnKTtcbiAgICAgICAgcmV0dXJuIG8uJHtuYW1lfS5hcHBseShvLCBhcmdzKTtgO1xuICAgIHJldHVybiA8TWV0aG9kRm4+bmV3IEZ1bmN0aW9uKCdvJywgJ2FyZ3MnLCBmdW5jdGlvbkJvZHkpO1xuICB9XG5cbiAgLy8gVGhlcmUgaXMgbm90IGEgY29uY2VwdCBvZiBpbXBvcnQgdXJpIGluIEpzLCBidXQgdGhpcyBpcyB1c2VmdWwgaW4gZGV2ZWxvcGluZyBEYXJ0IGFwcGxpY2F0aW9ucy5cbiAgaW1wb3J0VXJpKHR5cGU6IFR5cGUpOiBzdHJpbmcgeyByZXR1cm4gYC4vJHtzdHJpbmdpZnkodHlwZSl9YDsgfVxufVxuIl19