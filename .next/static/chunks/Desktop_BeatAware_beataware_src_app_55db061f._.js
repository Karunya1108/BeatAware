(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/BeatAware/beataware/src/app/firebase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/firebase.js
__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/firebase/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyBPOphfkJTqB3420esghrqI737etKrOj58"),
    authDomain: ("TURBOPACK compile-time value", "beataware-c1d3a.firebaseapp.com,"),
    projectId: ("TURBOPACK compile-time value", "beataware-c1d3a"),
    storageBucket: ("TURBOPACK compile-time value", "beataware-c1d3a.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "922163382363"),
    appId: ("TURBOPACK compile-time value", "1:922163382363:web:a923fffe7574a25641177e")
};
// initialize firebase app (prevent double initialization during hot reload)
const app = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApps"])()[0];
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
const storage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app);
const __TURBOPACK__default__export__ = app;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$src$2f$app$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/src/app/firebase.js [app-client] (ecmascript)"); // ✅ adjust if firebase.js is in another folder
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/node_modules/firebase/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function UserDetails() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        uid: "",
        firstName: "",
        lastName: "",
        dob: "",
        age: "",
        email: "",
        phone: "",
        city: "",
        address: "",
        emergencyContact: "",
        bloodGroup: "",
        medicalHistory: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkingAuth, setCheckingAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [successMsg, setSuccessMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ✅ use .env.local variable if available, else default localhost:5000
    const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:5000";
    // ✅ detect Firebase user
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserDetails.useEffect": ()=>{
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$firebase$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$src$2f$app$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "UserDetails.useEffect.unsubscribe": (currentUser)=>{
                    if (!currentUser) {
                        router.push("/login");
                        setCheckingAuth(false);
                        return;
                    }
                    setUser({
                        "UserDetails.useEffect.unsubscribe": (prev)=>({
                                ...prev,
                                uid: currentUser.uid,
                                email: currentUser.email || ""
                            })
                    }["UserDetails.useEffect.unsubscribe"]);
                    setCheckingAuth(false);
                }
            }["UserDetails.useEffect.unsubscribe"]);
            return ({
                "UserDetails.useEffect": ()=>unsubscribe()
            })["UserDetails.useEffect"];
        }
    }["UserDetails.useEffect"], [
        router
    ]);
    // ✅ handle input changes
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setUser((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    // ✅ parse text safely
    const parseResponseTextSafely = async (res)=>{
        const text = await res.text().catch(()=>"");
        if (!text) return null;
        try {
            return JSON.parse(text);
        } catch (e) {
            return text;
        }
    };
    // ✅ main form submit
    const handleSave = async (e)=>{
        e.preventDefault();
        if (checkingAuth) return;
        setErrorMsg(null);
        setSuccessMsg(null);
        setLoading(true);
        try {
            var _auth_currentUser;
            if (!user.uid) {
                setErrorMsg("UID is required — please ensure you're logged in.");
                setLoading(false);
                return;
            }
            const token = await ((_auth_currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$src$2f$app$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser) === null || _auth_currentUser === void 0 ? void 0 : _auth_currentUser.getIdToken());
            const res = await fetch("".concat(API_BASE, "/api/save-user"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...token ? {
                        Authorization: "Bearer ".concat(token)
                    } : {}
                },
                body: JSON.stringify(user)
            });
            const parsed = await parseResponseTextSafely(res);
            if (!res.ok) {
                const msg = typeof parsed === "string" ? parsed : (parsed === null || parsed === void 0 ? void 0 : parsed.error) || (parsed === null || parsed === void 0 ? void 0 : parsed.message) || "Error saving user";
                setErrorMsg(msg);
                setLoading(false);
                return;
            }
            setSuccessMsg("Profile saved successfully! Redirecting...");
            console.log("✅ Saved:", parsed);
            setTimeout(()=>router.push("/dashboard"), 1200);
        } catch (err) {
            console.error(err);
            setErrorMsg("Network error — check if backend is running on port 5000 and CORS is allowed.");
        } finally{
            setLoading(false);
        }
    };
    if (checkingAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center text-lg text-gray-800",
            children: "Checking authentication..."
        }, void 0, false, {
            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500 p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-semibold text-center text-gray-900 mb-1",
                    children: "Let’s Get to Know You"
                }, void 0, false, {
                    fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray-600 mb-4 text-sm",
                    children: "Enter your details to personalize your experience"
                }, void 0, false, {
                    fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                    lineNumber: 151,
                    columnNumber: 9
                }, this),
                errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 rounded-md bg-red-50 border border-red-200 text-red-800 px-4 py-2 text-sm",
                    children: [
                        errorMsg,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 text-xs text-gray-600",
                            children: [
                                "Tips: make sure ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                    children: "API_BASE"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 31
                                }, this),
                                " matches your backend port and CORS origin."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                    lineNumber: 157,
                    columnNumber: 11
                }, this),
                successMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-2 text-sm",
                    children: successMsg
                }, void 0, false, {
                    fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSave,
                    className: "space-y-5",
                    children: [
                        [
                            "firstName",
                            "lastName",
                            "dob",
                            "age",
                            "email",
                            "phone",
                            "city",
                            "address",
                            "emergencyContact",
                            "bloodGroup"
                        ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: field === "dob" ? "date" : field === "email" ? "email" : field === "age" || field === "phone" ? "number" : "text",
                                name: field,
                                placeholder: field === "bloodGroup" ? "Blood Group (e.g., O+, A-)" : field.charAt(0).toUpperCase() + field.slice(1),
                                value: user[field],
                                onChange: handleChange,
                                className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium",
                                required: true
                            }, field, false, {
                                fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            name: "medicalHistory",
                            placeholder: "Medical History",
                            value: user.medicalHistory,
                            onChange: handleChange,
                            rows: 3,
                            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium resize-none"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full ".concat(loading ? "opacity-70 cursor-not-allowed" : "", " bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg"),
                            children: loading ? "Saving..." : "Save & Continue"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                    lineNumber: 170,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_s(UserDetails, "VJ8qxngVxOXAUdm+nkC9i4UcXow=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UserDetails;
var _c;
__turbopack_context__.k.register(_c, "UserDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_BeatAware_beataware_src_app_55db061f._.js.map