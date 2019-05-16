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
  'postMessage',
  // https://html.spec.whatwg.org/multipage/custom-elements.html#dom-window-customelements
  'customElements',
  'external',
  'createImageBitmap',
  'sessionStorage',
  'localStorage',
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

// HTML5
// https://www.w3.org/TR/html50/browsers.html
names = filterOut(names, [
  'locationbar', 'menubar', 'personalbar', 'defaultStatus', 'defaultstatus',
  'btoa', 'atob', 'WindowBase64', 
  'setTimeout', 'clearTimeout', 'setInterval', 'clearInterval'
]);

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
  'indexedDB',
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
  "StaticRange", "AbortController", "AbortSignal", "NamedNodeMap",
  'event'
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

// Unknown or not found in MDN
names = filterOut(names, [
  "MediaEncryptedEvent", "CSSFontFaceRule", 'origin', 'clientInformation',
  'offscreenBuffering', 'styleMedia', 'capture​Events', 'captureEvents',
  'releaseEvents', 'find', 'UserActivation', 'XSLTProcessor',
  'openDatabase', 'ApplicationCacheErrorEvent'
]);

// non standard or non-normative
names = filterOut(names, [
  "TextEvent",
  'queueMicrotask',
  'chrome',
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
names = filterOut(names, ["VisualViewport", 'visualViewport']);

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
  "CSS", // namespace
  "getComputedStyle",
  "MediaList", "StyleSheet", "CSSStyleSheet", "StyleSheetList", 
  "LinkStyle", "CSSRuleList", "CSSRule", "CSSStyleRule", "CSSImportRule", 
  "CSSGroupingRule", "CSSPageRule", "CSSMarginRule", "CSSNamespaceRule", 
  "CSSStyleDeclaration", "ElementCSSInlineStyle"
]);

// CSSOM View
// https://drafts.csswg.org/cssom-view/
names = filterOut(names, [
  "matchMedia",
  "screen",
  // browsing context
  "moveTo",
  "moveBy",
  "resizeTo",
  "resizeBy",
  // viewport
  "innerWidth", "innerHeight",
  // viewport scrolling
  "scrollX", "pageXOffset", "scrollY", "pageYOffset",
  "scroll", "scrollTo", "scrollBy",
  // client
  "screenX", "screenLeft", "screenY", "screenTop", "outerWidth", "outerHeight",
  "devicePixelRatio",
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
names = filterOut(names, ["Selection", 'getSelection']);

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
names = filterOut(names, ["Headers", "Request", "Response", 'fetch']);

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
  "performance",
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
names = filterOut(names, [
  "IdleDeadline", 'requestIdleCallback', 'cancelIdleCallback'
]);

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

// Console API
// https://console.spec.whatwg.org/
names = filterOut(names, ["console"]); // namespace

// https://w3c.github.io/webappsec-secure-contexts/
names = filterOut(names, ["isSecureContext"]);

// https://www.w3.org/TR/animation-timing/#dom-windowanimationtiming-requestanimationframe
names = filterOut(names, [
  'requestAnimationFrame', 'cancelAnimationFrame'
]);

// https://tc39.github.io/proposal-global/#sec-other-properties-of-the-global-object-global
names = filterOut(names, ["globalThis"]);

// WebAssembly
// https://www.w3.org/TR/wasm-web-api-1/
names = filterOut(names, [
  'WebAssembly',

]);

// https://wicg.github.io/background-fetch/
names = filterOut(names, [
  'BackgroundFetchManager', 'BackgroundFetchRegistration',
  'BackgroundFetchRecord'
]);

// https://wicg.github.io/mediasession/#index
names = filterOut(names, [
  'MediaSession', 'MediaMetadata'
]);

// Notification API
// https://notifications.spec.whatwg.org/
names = filterOut(names, [
  'Notification', 'NotificationEvent'
]);

// Payment Handler
// https://w3c.github.io/payment-handler/#idl-index
names = filterOut(names, [
  'PaymentManager', 'PaymentInstruments', 'CanMakePaymentEvent',
  'PaymentRequestEvent', 'PaymentRequestUpdateEvent'
]);

// Permissions API
// https://w3c.github.io/permissions/
names = filterOut(names, ["Permissions", "PermissionStatus"]);

// Picture in Picture
// https://wicg.github.io/picture-in-picture/
names = filterOut(names, [
  'PictureInPictureWindow', 'EnterPictureInPictureEvent'
]);

// Push API
// https://w3c.github.io/push-api/
names = filterOut(names, [
  'PushManager', 'PushSubscriptionOptions', 'PushSubscription'
]);

// https://www.w3.org/TR/remote-playback/
names = filterOut(names, ["RemotePlayback"]);

// Web Speech API
// https://w3c.github.io/speech-api/
names = filterOut(names, [
  'speechSynthesis',
  'SpeechRecognition', 'SpeechRecognitionErrorEvent',
  'SpeechRecognitionAlternative', 'SpeechRecognitionResult',
  'SpeechRecognitionResultList', 'SpeechRecognitionEvent',
  'SpeechGrammar', 'SpeechSynthesis', 'SpeechSynthesisErrorEvent',
  'SpeechSynthesisEvent', 'SpeechSynthesisUtterance'
]);

// Web Bluetooth
// https://webbluetoothcg.github.io/web-bluetooth/#idl-index
names = filterOut(names, [
  "BluetoothUUID", "Bluetooth", "BluetoothCharacteristicProperties", 
  "BluetoothDevice", "BluetoothRemoteGATTCharacteristic", 
  "BluetoothRemoteGATTDescriptor", "BluetoothRemoteGATTServer", 
  "BluetoothRemoteGATTService"
]);

// Web USB
// https://wicg.github.io/webusb/#enumeration
names = filterOut(names, [
  "USB", "USBConnectionEvent", "USBDevice", "USBInTransferResult", "USBOutTransferResult", "USBIsochronousInTransferPacket", "USBIsochronousInTransferResult", "USBIsochronousOutTransferPacket", "USBIsochronousOutTransferResult", "USBConfiguration", "USBInterface", "USBAlternateInterface", "USBEndpoint", "USBPermissionResult"
]);

// Service Worker
// https://w3c.github.io/ServiceWorker/
names = filterOut(names, [
  'ServiceWorker', 'ServiceWorkerRegistration', 'ServiceWorkerContainer',
  'NavigationPreloadManager', 'ServiceWorkerMessageEvent',
  'Cache', 'CacheStorage', 'caches'
]);

// https://w3c.github.io/deviceorientation/#devicemotionevent
names = filterOut(names, [
  'DeviceMotionEvent', 'DeviceMotionEventAcceleration',
  'DeviceMotionEventRotationRate',
  'DeviceOrientationEvent'
]);

// Presentation API
// https://w3c.github.io/presentation-api/#interface-presentation
names = filterOut(names, ["Presentation", "PresentationAvailability", "PresentationConnection", "PresentationConnectionAvailableEvent", "PresentationConnectionCloseEvent", "PresentationConnectionList", "PresentationReceiver", "PresentationRequest"]);

// Worklet
// https://drafts.css-houdini.org/worklets/#idl-index
names = filterOut(names, ['Worklet']);

// CredentialManagement
// https://w3c.github.io/webappsec-credential-management/
names = filterOut(names, [
  'Credential', 'CredentialsContainer', 'PasswordCredential',
  "FederatedCredential"
]);

// Keyboard Map
// https://wicg.github.io/keyboard-map
names = filterOut(names, ['KeyboardLayoutMap', 'Keyboard']);

// Web Lock
// https://wicg.github.io/web-locks/#api-lock
names = filterOut(names, ['Lock', 'LockManager']);

// Encrypted Media
// https://w3c.github.io/encrypted-media/
names = filterOut(names, [
  'MediaKeySystemAccess', 'MediaKeys', 'MediaKeySession',
  'MediaKeyStatusMap', 'MediaKeySystemAccess', 'MediaKeyMessageEvent'
]);

// Storage
// https://storage.spec.whatwg.org/
names = filterOut(names, ['StorageManager']);

// Payment Request API
// https://w3c.github.io/payment-request/
names = filterOut(names, [
  'PaymentAddress', 'PaymentRequest', 'PaymentResponse'
]);

// Generic Sensor API
// https://www.w3.org/TR/generic-sensor/
names = filterOut(names, ["Sensor", "SensorErrorEvent"]);

// https://www.w3.org/TR/orientation-sensor/#absoluteorientationsensor-interface
names = filterOut(names, ["OrientationSensor", "AbsoluteOrientationSensor", "RelativeOrientationSensor"]);

// https://www.w3.org/TR/accelerometer/#accelerometer-interface
names = filterOut(names, ['Accelerometer']);

// https://www.w3.org/TR/gyroscope/
names = filterOut(names, ['Gyroscope']);

// https://www.w3.org/TR/accelerometer/
names = filterOut(names, ['LinearAccelerationSensor']);

// Web Authentication
// https://w3c.github.io/webauthn/
names = filterOut(names, ["PublicKeyCredential", "AuthenticatorResponse", "AuthenticatorAttestationResponse", "AuthenticatorAssertionResponse"]);

names = filterOut(names, ['parcelRequire']);
// ============================================================================
//                               HELPER
// ============================================================================

function filterOut(names, props) {
  const set = new Set(props);
  return names.filter(e => !set.has(e));
}

export const words = names;