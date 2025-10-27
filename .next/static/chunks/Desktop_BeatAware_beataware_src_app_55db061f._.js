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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$src$2f$app$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/BeatAware/beataware/src/app/firebase.js [app-client] (ecmascript)"); // make sure this path is correct
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
    const handleSave = async (e)=>{
        e.preventDefault();
        if (checkingAuth) return;
        setLoading(true);
        try {
            const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$src$2f$app$2f$firebase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser;
            if (!currentUser) throw new Error("Not authenticated. Please login.");
            const token = await currentUser.getIdToken();
            const url = "".concat(API_BASE, "/api/users");
            console.log("POST ->", url);
            console.log("Payload:", user);
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(token)
                },
                // include credentials in case server expects cookies (CORS credentials)
                credentials: "include",
                body: JSON.stringify(user)
            });
            // Network-level failure (e.g. server down / CORS preflight blocked) will throw before here
            if (!res.ok) {
                const text = await res.text().catch(()=>"");
                let message = "Server returned ".concat(res.status);
                try {
                    // try parse json
                    const json = JSON.parse(text || "{}");
                    message = json.error || json.message || message;
                } catch (e) {
                    if (text) message = text;
                }
                throw new Error(message);
            }
            // success
            router.push("/dashboard");
        } catch (err) {
            // distinguish network errors from server errors
            if (err instanceof TypeError && err.message === "Failed to fetch") {
                // This typically means CORS, network, or server not running
                console.error("Network/Fetch error:", err);
                alert("Network error: Failed to reach backend. Check backend is running and CORS is enabled. See console for details.");
            } else {
                console.error("Error saving profile:", err);
                alert("Error saving profile: " + (err.message || String(err)));
            }
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
                lineNumber: 130,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
            lineNumber: 129,
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
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray-600 mb-8 text-sm",
                    children: "Enter your details to personalize your experience"
                }, void 0, false, {
                    fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                    lineNumber: 141,
                    columnNumber: 9
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
                            lineNumber: 146,
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
                            lineNumber: 156,
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
                            lineNumber: 166,
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
                            lineNumber: 175,
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
                            lineNumber: 185,
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
                            lineNumber: 195,
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
                            lineNumber: 205,
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
                            lineNumber: 215,
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
                            lineNumber: 225,
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
                            lineNumber: 235,
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
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$BeatAware$2f$beataware$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "w-full ".concat(loading ? "opacity-70 cursor-not-allowed" : "", " bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300 shadow-lg"),
                            children: loading ? "Saving..." : "Save & Continue"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
            lineNumber: 137,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/BeatAware/beataware/src/app/user-details/page.tsx",
        lineNumber: 136,
        columnNumber: 5
    }, this);
}
_s(UserDetails, "WuLFUBQaZYMBegTb8OVZ8eTFGJU=", false, function() {
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