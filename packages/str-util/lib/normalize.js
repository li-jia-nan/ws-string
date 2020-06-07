"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripTable = [
    /[\u2000-\u200F]/g,
    /[\u2028-\u202F]/g,
    /[\u205F-\u206F]/g,
    // ZERO WIDTH NO-BREAK SPACE
    /\uFEFF/g,
];
function normalize(input, options = {}) {
    if (!options.allow_nbsp) {
        input = input.replace(/\xA0/g, ' ');
    }
    if (!options.allow_bom) {
        input = input.replace(/\uFEFF/g, '');
    }
    exports.StripTable.forEach(function (r) {
        input = input.replace(r, '');
    });
    return input;
}
exports.normalize = normalize;
exports.default = normalize;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm9ybWFsaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ2EsUUFBQSxVQUFVLEdBQUc7SUFFekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFFbEIsNEJBQTRCO0lBQzVCLFNBQVM7Q0FFVCxDQUFDO0FBRUYsU0FBZ0IsU0FBUyxDQUFDLEtBQWEsRUFBRSxVQUdyQyxFQUFFO0lBRUwsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQ3ZCO1FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQ3RCO1FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3JDO0lBRUQsa0JBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBRTdCLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDLENBQUMsQ0FBQztJQUVILE9BQU8sS0FBSyxDQUFDO0FBQ2QsQ0FBQztBQXJCRCw4QkFxQkM7QUFPRCxrQkFBZSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBTdHJpcFRhYmxlID0gW1xuXG5cdC9bXFx1MjAwMC1cXHUyMDBGXS9nLFxuXHQvW1xcdTIwMjgtXFx1MjAyRl0vZyxcblx0L1tcXHUyMDVGLVxcdTIwNkZdL2csXG5cblx0Ly8gWkVSTyBXSURUSCBOTy1CUkVBSyBTUEFDRVxuXHQvXFx1RkVGRi9nLFxuXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKGlucHV0OiBzdHJpbmcsIG9wdGlvbnM6IHtcblx0YWxsb3dfbmJzcD86IGJvb2xlYW4sXG5cdGFsbG93X2JvbT86IGJvb2xlYW4sXG59ID0ge30pOiBzdHJpbmdcbntcblx0aWYgKCFvcHRpb25zLmFsbG93X25ic3ApXG5cdHtcblx0XHRpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1xceEEwL2csICcgJyk7XG5cdH1cblxuXHRpZiAoIW9wdGlvbnMuYWxsb3dfYm9tKVxuXHR7XG5cdFx0aW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9cXHVGRUZGL2csICcnKTtcblx0fVxuXG5cdFN0cmlwVGFibGUuZm9yRWFjaChmdW5jdGlvbiAocilcblx0e1xuXHRcdGlucHV0ID0gaW5wdXQucmVwbGFjZShyLCAnJyk7XG5cdH0pO1xuXG5cdHJldHVybiBpbnB1dDtcbn1cblxuZXhwb3J0IHR5cGUgSU9wdGlvbnMgPSB7XG5cdGFsbG93X25ic3A/OiBib29sZWFuLFxuXHRhbGxvd19ib20/OiBib29sZWFuLFxufVxuXG5leHBvcnQgZGVmYXVsdCBub3JtYWxpemU7XG4iXX0=