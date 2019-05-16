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
  'window', 'self', 'document', 'location', 'history', 'scrollbars',
  'statusbar', 'toolbar', 'status', 'close', 'closed',
  'stop', 'focus', 'blur', 'frames', 'length', 'top',
  'opener', 'parent', 'frameElement', 'open', 'navigator',
  'applicationCache', 'alert', 'confirm', 'prompt', 'print',
];
names = filterOut(names, WindowAttributes);


// 事件 onXxx
names = names.filter(e => !e.match(/^on/))


// webkit 
names = names.filter(e => !e.match(/^webkit/i))


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
  "WebSocket", "Window", "Worker", "WorkerGlobalScope", "WorkerLocation", "WorkerNavigator",
  "HTMLFormControlsCollection"
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
  "ScriptProcessorNode", "AudioProcessingEvent", "OfflineAudioContext", "OfflineAudioCompletionEvent",
  "BaseAudioContext", "AudioScheduledSourceNode", "AudioParamMap"
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
// WebRTC API
// https://w3c.github.io/webrtc-pc/#dom-rtctrackevent
// WebRTC (Web Real-Time Communications) is a technology which enables Web applications and sites to 
// capture and optionally stream audio and/or video media, as well as to exchange arbitrary data 
// between browsers without requiring an intermediary.
names = filterOut(names, [
  "RTCTrackEvent", "RTCStatsReport", "RTCSessionDescription", "RTCRtpTransceiver", "RTCRtpSender", 
  "RTCRtpReceiver", "RTCPeerConnectionIceEvent", "RTCPeerConnection", "RTCIceCandidate", "RTCErrorEvent", 
  "RTCError", "RTCDataChannelEvent", "RTCDataChannel", "RTCDTMFToneChangeEvent", "RTCDTMFSender", 
  "RTCCertificate"
]);


// MediaStream Image Capture
// https://w3c.github.io/mediacapture-image/#photocapabilities-section
// The MediaStream Image Capture API is an API for capturing images or videos from a photographic device. 
// In addition to capturing data, it also allows you to retrieve information ...
names = filterOut(names, [
  "ImageCapture", "PhotoCapabilities", "MediaSettingsRange"
]);


// Media Capture and Streams
// https://w3c.github.io/mediacapture-main
// This document defines a set of JavaScript APIs that allow local media, including audio and video, 
// to be requested from a platform.
names = filterOut(names, [
  "MediaStream", "MediaStreamEvent", "MediaStreamTrack", "MediaStreamTrackEvent",
  "MediaDevices", "MediaDeviceInfo", "InputDeviceInfo", "OverconstrainedError"
]);


// Network​Information
// https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation
names = filterOut(names, ["NetworkInformation"]);


// MediaStream Recording
// https://w3c.github.io/mediacapture-record
names = filterOut(names, ["MediaRecorder", "BlobEvent", "MediaRecorderErrorEvent"]);


// Media Capabilities
// https://wicg.github.io/media-capabilities/
names = filterOut(names, ["MediaCapabilities"]);


// Web MIDI API
// https://webaudio.github.io/web-midi-api/#midiaccess-interface
names = filterOut(names, [
  "MIDIInputMap", "MIDIOutputMap", "MIDIAccess", "MIDIPort", "MIDIInput",
  "MIDIOutput", "MIDIMessageEvent", "MIDIConnectionEvent"
]);


// Indexed DB
// https://w3c.github.io/IndexedDB/
names = filterOut(names, [
  "IDBRequest", "IDBOpenDBRequest", "IDBVersionChangeEvent", "IDBFactory", "IDBDatabase", 
  "IDBObjectStore", "IDBIndex", "IDBKeyRange", "IDBCursor", "IDBCursorWithValue", 
  "IDBTransaction"
]);


// Gamepad
// https://w3c.github.io/gamepad/
names = filterOut(names, [
  "Gamepad", "GamepadEvent", "GamepadHapticActuator", "GamepadButton"
]);

// DOM
// https://dom.spec.whatwg.org/
names = filterOut(names, [
  "StaticRange", "AbortController", "AbortSignal", "NamedNodeMap"
]);

// DOM4
// https://www.w3.org/TR/dom/#interface-event
names = filterOut(names, [
  "Event", "CustomEvent", "EventTarget", "NodeList", "HTMLCollection",
  "MutationObserver", "MutationRecord", "DOMImplementation", "Range",
  "NodeIterator", "TreeWalker", "NodeFilter", "DOMTokenList", "DOMSettableTokenList",
  "DOMError"
]);


// Media Capture from DOM Element
// https://w3c.github.io/mediacapture-fromelement/
names = filterOut(names, [
  "CanvasCaptureMediaStreamTrack"
]);

// WebVR (firefox + edge)
// https://immersive-web.github.io/webvr/spec/1.1/
names = filterOut(names, [
  "VRDisplay", "VRDisplayCapabilities", "VRFieldOfView", "VRPose", "VRFrameData", 
  "VREyeParameters", "VRStageParameters", "VRDisplayEvent"
]);

// Web App Manifest
// https://w3c.github.io/manifest/
// 存储 Web App 元信息
names = filterOut(names, ["BeforeInstallPromptEvent"]);

// Battery
// https://w3c.github.io/battery/
names = filterOut(names, ["BatteryManager"]);

// https://www.w3.org/TR/DOM-Level-3-XPath/xpath.html#XPathResult
names = filterOut(names, [
  "XPathResult", "XPathEvaluator", "XPathExpression", "XPathNSResolver", "XPathNamespace"
]);

// https://w3c.github.io/DOM-Parsing/
names = filterOut(names, ["DOMParser", "XMLSerializer"]);

// Unknown
// not found in MDN
names = filterOut(names, [
  "MediaEncryptedEvent", "CSSFontFaceRule"
]);

// non standard
names = filterOut(names, [
  "TextEvent"
]);

// other
names = filterOut(names, [
  "name", // ???
  "DOMException"
]);

// https://xhr.spec.whatwg.org/
names = filterOut(names, [
  "XMLHttpRequestEventTarget", "XMLHttpRequestUpload", "XMLHttpRequest", "FormData",
  "ProgressEvent"
]);

// https://www.w3.org/TR/2014/WD-DOM-Level-3-Events-20140925/
names = filterOut(names, [
  "UIEvent", "FocusEvent", "MouseEvent", "WheelEvent", "InputEvent",
  "KeyboardEvent", "CompositionEvent", "MutationEvent"
]);

// https://wicg.github.io/visual-viewport/#the-visualviewport-interface
names = filterOut(names, ["VisualViewport"]);

// Web Video Text Track 
// https://w3c.github.io/webvtt/
names = filterOut(names, ["VTTCue", "VTTRegion"]);

// URL
// https://url.spec.whatwg.org/
names = filterOut(names, ["URL", "URLSearchParams"]);

// https://drafts.csswg.org/css-transitions/
names = filterOut(names, ["TransitionEvent"]);

// Touch Events
// https://drafts.csswg.org/css-transitions/
// 多点触控
names = filterOut(names, ["Touch", "TouchEvent", "TouchList"]);

// Long Tasks API
// https://w3c.github.io/longtasks/#sec-TaskAttributionTiming
// 帮助检测任务执行时间
names = filterOut(names, ["PerformanceLongTaskTiming", "TaskAttributionTiming"]);

// CSSOM
// https://drafts.csswg.org/cssom/
names = filterOut(names, [
  "CSS",
  "MediaList", "StyleSheet", "CSSStyleSheet", "StyleSheetList", 
  "LinkStyle", "CSSRuleList", "CSSRule", "CSSStyleRule", "CSSImportRule", 
  "CSSGroupingRule", "CSSPageRule", "CSSMarginRule", "CSSNamespaceRule", 
  "CSSStyleDeclaration", "ElementCSSInlineStyle"
]);

// CSSOM View
// https://drafts.csswg.org/cssom-view/
names = filterOut(names, [
  "MediaQueryList", "MediaQueryListEvent", "Screen", "CaretPosition"
]);

// CSS Typed OM Level 1
// https://drafts.css-houdini.org/css-typed-om-1/
names = filterOut(names, [
  "CSSStyleValue", "StylePropertyMapReadOnly", "StylePropertyMap", "CSSUnparsedValue", 
  "CSSVariableReferenceValue", "CSSKeywordValue", "CSSNumericValue", "CSSUnitValue", 
  "CSSMathValue", "CSSMathSum", "CSSMathProduct", "CSSMathNegate", "CSSMathInvert", 
  "CSSMathMin", "CSSMathMax", "CSSMathClamp", "CSSNumericArray", "CSSTransformValue", 
  "CSSTransformComponent", "CSSTranslate", "CSSRotate", "CSSScale", "CSSSkew", "CSSSkewX", 
  "CSSSkewY", "CSSPerspective", "CSSMatrixComponent", "CSSImageValue",
  "CSSPositionValue"
]);

// CSS Font Loading Module Level 3
// https://drafts.csswg.org/css-font-loading/
names = filterOut(names, ["FontFace", "FontFaceSetLoadEvent"]);

// CSS Conditional Rules Module Level 3
// https://drafts.csswg.org/css-conditional-3/
names = filterOut(names, [
  "CSSGroupingRule", "CSSConditionRule", "CSSMediaRule", "CSSSupportsRule"
]);

// CSS Animations Level 1
// https://drafts.csswg.org/css-animations/
names = filterOut(names, [
  "AnimationEvent", "CSSKeyframeRule", "CSSKeyframesRule"
]);

// Selection API
// https://w3c.github.io/selection-api
names = filterOut(names, ["Selection"]);

// Webapp Security
// https://w3c.github.io/webappsec-csp/
names = filterOut(names, ["CSPViolationReportBody", "SecurityPolicyViolationEvent"]);

// SVG
// https://svgwg.org/svg2-draft/types.html
names = filterOut(names, [
  "SVGUnitTypes", "SVGTransformList", "SVGTransform", "SVGStringList",
  "SVGRect", "SVGPreserveAspectRatio", "SVGPointList", "SVGPoint", 
  "SVGNumberList", "SVGNumber", "SVGMatrix", 
  "SVGLengthList", "SVGLength", "SVGAngle",
  "SVGAnimatedTransformList", "SVGAnimatedString", "SVGAnimatedRect", 
  "SVGAnimatedPreserveAspectRatio", "SVGAnimatedNumberList", "SVGAnimatedNumber", 
  "SVGAnimatedLengthList", "SVGAnimatedLength", "SVGAnimatedInteger", 
  "SVGAnimatedEnumeration", "SVGAnimatedBoolean", "SVGAnimatedAngle", 
]);

// fetch
// https://fetch.spec.whatwg.org/
names = filterOut(names, ["Headers", "Request", "Response"]);

// https://drafts.csswg.org/resize-observer/#resize-observer-entry-interface
names = filterOut(names, [
  "ResizeObserver", "ResizeObserverEntry"
]);

// ReportingObserver (chrome)
names = filterOut(names, ["ReportingObserver"]);

// Pointer Event
// https://w3c.github.io/pointerevents/#pointerevent-interface
names = filterOut(names, ["PointerEvent"]);

// Performance 
names = filterOut(names, [
  "Performance", "PerformanceEntry", "PerformanceFrameTiming",
  "PerformanceMark", "PerformanceMeasure", "PerformanceNavigationTiming",
  "PerformanceObserver", "PerformanceResourceTiming",
  "PerformanceTiming"
]);

// Server Timing
// https://w3c.github.io/server-timing/#the-dfn-performanceservertiming-dfn-interface
names = filterOut(names, ["PerformanceServerTiming"]);

// Paint Timing
// https://w3c.github.io/paint-timing/#sec-PerformancePaintTiming
names = filterOut(names, ["PerformancePaintTiming"]);

// Performance Timeline Level 2
// https://w3c.github.io/paint-timing/#sec-PerformancePaintTiming
names = filterOut(names, [
  "Performance", "PerformanceEntry", "PerformanceObserver", 
  "PerformanceObserverEntryList"
]);

// Navigation Timing
// https://www.w3.org/TR/navigation-timing/#sec-navigation-info-interface
names = filterOut(names, ["PerformanceNavigation"]);

// Intersection Observer 
// https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
// 判断元素可见性，或者相对位置
names = filterOut(names, [
  "IntersectionObserver", "IntersectionObserverEntry"
]);

// Input Device Capabilities
// https://wicg.github.io/InputDeviceCapabilities/#dom-uievent-sourcecapabilities
names = filterOut(names, ["InputDeviceCapabilities"]);

// Cooperative Scheduling of Background Tasks
// https://www.w3.org/TR/requestidlecallback/
names = filterOut(names, ["IdleDeadline"]);

// HTMLOptionsCollection 
// https://www.w3.org/TR/DOM-Level-2-HTML/html.html#HTMLOptionsCollection
names = filterOut(names, [
  "HTMLCollection", "HTMLOptionsCollection"
]);

// File API
// https://w3c.github.io/FileAPI
names = filterOut(names, ["Blob", "File", "FileList", "FileReader", "FileReaderSync"]);

// Geometry Interfaces Module Level 1
// https://drafts.fxtf.org/geometry/
names = filterOut(names, [
  "DOMPointReadOnly", "DOMPoint", "DOMRectReadOnly", "DOMRect",
  "DOMRectList", "DOMQuad", "DOMMatrixReadOnly", "DOMMatrix"
]);

// Clipboard
// https://w3c.github.io/clipboard-apis/
names = filterOut(names, ["Clipboard", "ClipboardEvent"]);


// ============================================================================
//                               HELPER
// ============================================================================

function filterOut(names, props) {
  const set = new Set(props);
  return names.filter(e => !set.has(e));
}

export const words = names;