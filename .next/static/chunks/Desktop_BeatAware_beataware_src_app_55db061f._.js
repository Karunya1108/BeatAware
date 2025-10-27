(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/BeatAware/beataware/src/app/firebase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$src$2f$app$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/src/app/firebase.js [app-client] (ecmascript)"); // ensure this path is correct for your project
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function UserDetails() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    // Use env var if provided (set NEXT_PUBLIC_API_BASE in .env.local for Next.js)
    // Example: NEXT_PUBLIC_API_BASE=http://127.0.0.1:5000
    const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:5000";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserDetails.useEffect": ()=>{
            // Ensure user is signed in and prefill email
            const unsubscribe = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$src$2f$app$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged({
                "UserDetails.useEffect.unsubscribe": (current)=>{
                    if (!current) {
                        router.push("/login");
                        setCheckingAuth(false);
                        return;
                    }
                    setUser({
                        "UserDetails.useEffect.unsubscribe": (prev)=>({
                                ...prev,
                                email: current.email || ""
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
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setUser((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const parseResponseTextSafely = async (res)=>{
        // Read response as text first, then attempt JSON parse; fallback to text
        const text = await res.text().catch(()=>"");
        if (!text) return null;
        try {
            return JSON.parse(text);
        } catch (e) {
            return text;
        }
    };
    const handleSave = async (e)=>{
        e.preventDefault();
        if (checkingAuth) return;
        setErrorMsg(null);
        setSuccessMsg(null);
        setLoading(true);
        try {
            const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$src$2f$app$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
            if (!currentUser) {
                setErrorMsg("Not authenticated. Please log in.");
                return;
            }
            // Try to get ID token (server may validate it)
            let token = null;
            try {
                token = await currentUser.getIdToken();
            } catch (tErr) {
                console.warn("Could not get ID token (continuing):", tErr);
            }
            const url = "".concat(API_BASE, "/api/users");
            console.log("POST ->", url);
            console.log("Payload:", user);
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...token ? {
                        Authorization: "Bearer ".concat(token)
                    } : {}
                },
                // If your backend expects cookies, uncomment credentials below and configure CORS
                // credentials: "include",
                body: JSON.stringify(user)
            });
            const parsed = await parseResponseTextSafely(res);
            console.log("Response status:", res.status, "body:", parsed);
            if (!res.ok) {
                // Build human-friendly message (prefer server-provided message)
                let message = "Server returned status ".concat(res.status);
                if (parsed) {
                    if (typeof parsed === "string") message = parsed;
                    else if (parsed.message) message = parsed.message;
                    else if (parsed.error) message = parsed.error;
                    else message = JSON.stringify(parsed).slice(0, 500);
                }
                setErrorMsg(message);
                return;
            }
            // success
            setSuccessMsg("Profile saved — redirecting to dashboard...");
            // optional: log success payload
            console.log("Saved profile response:", parsed);
            setTimeout(()=>router.push("/dashboard"), 700);
        } catch (err) {
            console.error("handleSave unexpected error:", err);
            const msg = err instanceof TypeError && err.message === "Failed to fetch" ? "Network error: cannot reach backend. Check server & CORS." : (err === null || err === void 0 ? void 0 : err.message) || "Unknown error saving profile";
            setErrorMsg(msg);
        } finally{
            setLoading(false);
        }
    };
    if (checkingAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Checking authentication..."
            }, void 0, false, {
                fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
            lineNumber: 153,
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
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray-600 mb-4 text-sm",
                    children: "Enter your details to personalize your experience"
                }, void 0, false, {
                    fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, this),
                errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 rounded-md bg-red-50 border border-red-200 text-red-800 px-4 py-2 text-sm",
                    children: errorMsg
                }, void 0, false, {
                    fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                    lineNumber: 171,
                    columnNumber: 11
                }, this),
                successMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-2 text-sm",
                    children: successMsg
                }, void 0, false, {
                    fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSave,
                    className: "space-y-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "firstName",
                            placeholder: "First Name",
                            value: user.firstName,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 182,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "lastName",
                            placeholder: "Last Name",
                            value: user.lastName,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "date",
                            name: "dob",
                            value: user.dob,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            name: "age",
                            placeholder: "Age",
                            value: user.age,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            name: "email",
                            placeholder: "Email",
                            value: user.email,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "tel",
                            name: "phone",
                            placeholder: "Phone Number",
                            value: user.phone,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "city",
                            placeholder: "City",
                            value: user.city,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "address",
                            placeholder: "Address",
                            value: user.address,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 251,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "tel",
                            name: "emergencyContact",
                            placeholder: "Emergency Contact",
                            value: user.emergencyContact,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            name: "bloodGroup",
                            placeholder: "Blood Group (e.g., O+, A-)",
                            value: user.bloodGroup,
                            onChange: handleChange,
                            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            name: "medicalHistory",
                            placeholder: "Medical History",
                            value: user.medicalHistory,
                            onChange: handleChange,
                            rows: 3,
                            className: "w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 font-medium resize-none"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full ".concat(loading ? "opacity-70 cursor-not-allowed" : "", " bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg"),
                            children: loading ? "Saving..." : "Save & Continue"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
            lineNumber: 161,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
_s(UserDetails, "LLUq91nAIW71oZfAFb9Ezk6Vv+g=", false, function() {
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