let names = Object.getOwnPropertyNames(window);

// JS 对象
let BasicJSObjects = [
  "BigInt",
  "BigInt64Array",
  "BigUint64Array",
  "Infinity",
  "NaN",
  "eval",
  "isFinite",
  "isNaN",
  "undefined",
  "parseFloat",
  "parseInt",
  "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent",
  "Object", "Array", "Date", "Boolean", "RegExp", "String",
  "Promise", "Proxy", "Map", "WeakMap", "Set", "WeakSet",
  "Symbol", "Reflect",
  "Error", "EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError",
  "Function",
  "Number",
  "ArrayBuffer", "SharedArrayBuffer", "DataView",
  "Uint8Array", "Int8Array", "Uint16Array", "Int16Array", "Uint32Array", "Int32Array", 
  "Float32Array", "Float64Array", "Uint8ClampedArray",
  "JSON", "Math", "Atomics",
  "escape", "unescape", 
];
names = filterOut(names, BasicJSObjects);


// DOM 中的元素构造器
names = names.filter(e => {
  try {
    return !(window[e].prototype instanceof Node)
  } catch (err) {
    return true;
  }
}).filter( e => e != "Node");


// Window 对象上的属性
// https://html.spec.whatwg.org/#window
let WindowAttributes = [
  'window', 'self', 'document', 'location', 'history',
  'customElements', 'menubar', 'personalbar', 'scrollbars',
  'statusbar', 'toolbar', 'status', 'close', 'closed',
  'stop', 'focus', 'blur', 'frames', 'length', 'top',
  'opener', 'parent', 'frameElement', 'open', 'navigator',
  'applicationCache', 'alert', 'confirm', 'prompt', 'print',
  'postMessage', 'console'
];
names = filterOut(names, WindowAttributes);


// 事件 onXxx
names = names.filter(e => !e.match(/^on/))


// webkit 
names = names.filter(e => !e.match(/^webkit/))


// HTML 标准中的接口
// https://html.spec.whatwg.org/
// 搜索 interface
let interfaces = [
  "ApplicationCache", "AudioTrack", "AudioTrackList", "BarProp", "BeforeUnloadEvent", 
  "BroadcastChannel", "CanvasGradient", "CanvasPattern", "CanvasRenderingContext2D", "CloseEvent", 
  "CustomElementRegistry", "DOMStringList", "DOMStringMap", "DataTransfer", "DataTransferItem", 
  "DataTransferItemList", "DedicatedWorkerGlobalScope", "Document", "DragEvent", "ErrorEvent", 
  "EventSource", "External", "FormDataEvent", "HTMLAllCollection", "HashChangeEvent", 
  "History", "ImageBitmap", "ImageBitmapRenderingContext", "ImageData", "Location", 
  "MediaError", "MessageChannel", "MessageEvent", "MessagePort", "MimeType", 
  "MimeTypeArray", "Navigator", "OffscreenCanvas", "OffscreenCanvasRenderingContext2D", 
  "PageTransitionEvent", "Path2D", "Plugin", "PluginArray", "PopStateEvent", 
  "PromiseRejectionEvent", "RadioNodeList", "SharedWorker", "SharedWorkerGlobalScope", 
  "Storage", "StorageEvent", "TextMetrics", "TextTrack", "TextTrackCue", "TextTrackCueList", 
  "TextTrackList", "TimeRanges", "TrackEvent", "ValidityState", "VideoTrack", "VideoTrackList", 
  "WebSocket", "Window", "Worker", "WorkerGlobalScope", "WorkerLocation", "WorkerNavigator"
];
names = filterOut(names, interfaces);


//  the ECMAScript Internationalization API
names = names.filter(e => e != "Intl");


// Streams 标准
// https://streams.spec.whatwg.org/
names = filterOut(names, [
  "ReadableStream", "ReadableStreamDefaultReader", "ReadableStreamBYOBReader", 
  "ReadableStreamDefaultController", "ReadableByteStreamController", "ReadableStreamBYOBRequest",
  "WritableStream", "WritableStreamDefaultWriter", "WritableStreamDefaultController", 
  "TransformStream", "TransformStreamDefaultController", "ByteLengthQueuingStrategy",
  "CountQueuingStrategy"
]);


// WebGL
// https://www.khronos.org/registry/webgl/specs/latest/1.0/#5.15
names = filterOut(names, [
  "WebGLContextEvent", "WebGL2RenderingContext", "WebGLActiveInfo", "WebGLBuffer", 
  "WebGLFramebuffer", "WebGLProgram", "WebGLQuery", "WebGLRenderbuffer", "WebGLRenderingContext", 
  "WebGLSampler", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLSync", "WebGLTexture", 
  "WebGLTransformFeedback", "WebGLUniformLocation", "WebGLVertexArrayObject"
]);


// Web Audio API
// https://webaudio.github.io/web-audio-api/#the-waveshapernode-interface
names = filterOut(names, [
  "AudioContext", "AudioNode", "AnalyserNode", "AudioBuffer", "AudioBufferSourceNode", 
  "AudioDestinationNode", "AudioParam", "AudioListener", "AudioWorklet", "AudioWorkletGlobalScope", 
  "AudioWorkletNode", "AudioWorkletProcessor", "BiquadFilterNode", "ChannelMergerNode", 
  "ChannelSplitterNode", "ConstantSourceNode", "ConvolverNode", "DelayNode", 
  "DynamicsCompressorNode", "GainNode", "IIRFilterNode", "MediaElementAudioSourceNode", 
  "MediaStreamAudioSourceNode", "MediaStreamTrackAudioSourceNode", "MediaStreamAudioDestinationNode", 
  "PannerNode", "PeriodicWave", "OscillatorNode", "StereoPannerNode", "WaveShaperNode", 
  "ScriptProcessorNode", "AudioProcessingEvent"
]);


// Encoding 标准
// https://encoding.spec.whatwg.org/
names = filterOut(names, [ "TextDecoder", "TextEncoder", "TextDecoderStream", "TextEncoderStream" ]);


// Web Background Synchronization
// https://wicg.github.io/BackgroundSync/spec/#sync-manager-interface
names = filterOut(names, ["SyncManager"]);


// Web Cryptography API
// https://www.w3.org/TR/WebCryptoAPI/#subtlecrypto-interface
names = filterOut(names, ["SubtleCrypto", "CryptoKey", "Crypto", "crypto"]);


// Media Source Extension
// https://w3c.github.io/media-source/#sourcebufferlist
names = filterOut(names, ["MediaSource", "SourceBuffer", "SourceBufferList"]);


// The Screen Orientation API
// https://w3c.github.io/screen-orientation/
names = filterOut(names, ["ScreenOrientation"]);


// TODO: your code here


// ============================================================================
//                               HELPER
// ============================================================================

function filterOut(names, props) {
  const set = new Set(props);
  return names.filter(e => !set.has(e));
}

export const words = names;