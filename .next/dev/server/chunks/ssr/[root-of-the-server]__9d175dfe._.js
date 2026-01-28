module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/wrong-notes/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WrongNotesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function WrongNotesPage() {
    const [wrongList, setWrongList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSession, setSelectedSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSolving, setIsSolving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedAnswer, setSelectedAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showExplanation, setShowExplanation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const data = localStorage.getItem("cbt-wrong-list");
        if (data) {
            const parsed = JSON.parse(data);
            const sorted = parsed.sort((a, b)=>a.addedAt - b.addedAt);
            setWrongList(sorted);
        }
    }, []);
    const groupedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const groups = {};
        wrongList.forEach((item)=>{
            const date = new Date(item.addedAt).toLocaleDateString();
            if (!groups[date]) groups[date] = {};
            if (!groups[date][item.examId]) groups[date][item.examId] = [];
            groups[date][item.examId].push(item);
        });
        return groups;
    }, [
        wrongList
    ]);
    const solvingQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (selectedDate && selectedSession && groupedData[selectedDate]) {
            return groupedData[selectedDate][selectedSession] || [];
        }
        return [];
    }, [
        selectedDate,
        selectedSession,
        groupedData
    ]);
    const currentQ = solvingQuestions[currentIndex];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (!isSolving || !currentQ) return;
            if ([
                '1',
                '2',
                '3',
                '4'
            ].includes(e.key)) {
                if (showExplanation) nextWrong();
                else handleSelect(Number(e.key));
            }
            if (showExplanation && (e.key === "ArrowRight" || e.key === "Enter")) nextWrong();
            if (e.key === "Escape") setIsSolving(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return ()=>window.removeEventListener("keydown", handleKeyDown);
    }, [
        isSolving,
        currentQ,
        currentIndex,
        showExplanation
    ]);
    const handleSelect = (num)=>{
        if (showExplanation) return;
        setSelectedAnswer(num);
        setShowExplanation(true);
        // 🚀 [자동 삭제] 맞혔을 경우 로컬 스토리지에서 즉시 삭제
        if (num === currentQ.answer) {
            const updated = wrongList.filter((item)=>!(item.id === currentQ.id && item.examId === currentQ.examId));
            localStorage.setItem("cbt-wrong-list", JSON.stringify(updated));
        }
    };
    const nextWrong = ()=>{
        // 맞혔던 문제라면 리스트 상태를 갱신 (인덱스는 그대로 두면 다음 문제가 밀려옴)
        if (selectedAnswer === currentQ.answer) {
            const updated = wrongList.filter((item)=>!(item.id === currentQ.id && item.examId === currentQ.examId));
            setWrongList(updated);
            // 만약 해당 섹션의 마지막 문제였다면 종료
            const remainingInSession = updated.filter((item)=>new Date(item.addedAt).toLocaleDateString() === selectedDate && item.examId === selectedSession);
            if (currentIndex >= remainingInSession.length) {
                alert("해당 폴더의 오답을 모두 정복했습니다! 🎉");
                setIsSolving(false);
            }
        } else {
            // 틀렸다면 다음 문제로 인덱스 이동
            if (currentIndex < solvingQuestions.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setIsSolving(false);
            }
        }
        setSelectedAnswer(null);
        setShowExplanation(false);
    };
    const removeItem = (id, examId)=>{
        const updated = wrongList.filter((item)=>!(item.id === id && item.examId === examId));
        localStorage.setItem("cbt-wrong-list", JSON.stringify(updated));
        setWrongList(updated);
    };
    if (isSolving && currentQ) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: "100vh",
                backgroundColor: "#121212",
                color: "white",
                padding: "40px 20px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 800,
                    margin: "0 auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 20,
                            color: "#aaa"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "📂 ",
                                    selectedDate,
                                    " ＞ ",
                                    selectedSession
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/wrong-notes/page.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    currentIndex + 1,
                                    " / ",
                                    solvingQuestions.length
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/wrong-notes/page.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/wrong-notes/page.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            backgroundColor: "#1E1E1E",
                            padding: "20px",
                            borderRadius: "12px",
                            border: "1px solid #333",
                            marginBottom: 20
                        },
                        children: currentQ.question
                    }, void 0, false, {
                        fileName: "[project]/app/wrong-notes/page.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: 10
                        },
                        children: currentQ.options.map((opt, i)=>{
                            const num = i + 1;
                            let bgColor = "#2C2C2C";
                            if (showExplanation) {
                                if (num === currentQ.answer) bgColor = "#1B5E20";
                                else if (selectedAnswer === num) bgColor = "#3E2723";
                            }
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>showExplanation ? nextWrong() : handleSelect(num),
                                style: {
                                    padding: "15px",
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    backgroundColor: bgColor,
                                    border: "2px solid #333"
                                },
                                children: [
                                    num,
                                    ". ",
                                    opt
                                ]
                            }, i, true, {
                                fileName: "[project]/app/wrong-notes/page.tsx",
                                lineNumber: 121,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/wrong-notes/page.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    showExplanation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 25,
                            padding: 25,
                            backgroundColor: "#1E1E1E",
                            borderRadius: 15,
                            border: "1px solid #4FC3F7"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#4FC3F7",
                                    fontWeight: "bold",
                                    marginBottom: 5
                                },
                                children: "💡 해설"
                            }, void 0, false, {
                                fileName: "[project]/app/wrong-notes/page.tsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: currentQ.explanation
                            }, void 0, false, {
                                fileName: "[project]/app/wrong-notes/page.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#666",
                                    fontSize: "0.8rem",
                                    marginTop: 15
                                },
                                children: "맞히면 오답노트에서 자동으로 삭제됩니다."
                            }, void 0, false, {
                                fileName: "[project]/app/wrong-notes/page.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/wrong-notes/page.tsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/wrong-notes/page.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/wrong-notes/page.tsx",
            lineNumber: 105,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: "100vh",
            backgroundColor: "#121212",
            color: "white",
            padding: "40px 20px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: 800,
                margin: "0 auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 30
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontSize: "1.8rem",
                                fontWeight: "bold"
                            },
                            children: selectedDate ? `📂 ${selectedDate}` : "📅 오답 기록"
                        }, void 0, false, {
                            fileName: "[project]/app/wrong-notes/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                style: {
                                    padding: "8px 16px",
                                    backgroundColor: "#333",
                                    color: "white",
                                    border: "none",
                                    borderRadius: 8
                                },
                                children: "홈으로"
                            }, void 0, false, {
                                fileName: "[project]/app/wrong-notes/page.tsx",
                                lineNumber: 144,
                                columnNumber: 26
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/wrong-notes/page.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/wrong-notes/page.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                !selectedDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gap: 15
                    },
                    children: Object.keys(groupedData).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            textAlign: "center",
                            marginTop: 50,
                            color: "#666"
                        },
                        children: "오답 노트가 비어있습니다. 아주 훌륭합니다! 👏"
                    }, void 0, false, {
                        fileName: "[project]/app/wrong-notes/page.tsx",
                        lineNumber: 148,
                        columnNumber: 54
                    }, this) : Object.keys(groupedData).reverse().map((date)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>setSelectedDate(date),
                            style: {
                                padding: "20px",
                                backgroundColor: "#1E1E1E",
                                borderRadius: 12,
                                cursor: "pointer",
                                border: "1px solid #333"
                            },
                            children: [
                                "📁 ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontWeight: "bold",
                                        marginLeft: 10
                                    },
                                    children: date
                                }, void 0, false, {
                                    fileName: "[project]/app/wrong-notes/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 22
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: "0.8rem",
                                        color: "#666",
                                        marginLeft: 35
                                    },
                                    children: [
                                        Object.keys(groupedData[date]).length,
                                        "개 회차 기록됨"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/wrong-notes/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, date, true, {
                            fileName: "[project]/app/wrong-notes/page.tsx",
                            lineNumber: 150,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/wrong-notes/page.tsx",
                    lineNumber: 147,
                    columnNumber: 11
                }, this),
                selectedDate && !isSolving && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "grid",
                        gap: 15
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedDate(null),
                            style: {
                                color: "#4FC3F7",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                textAlign: "left"
                            },
                            children: "⬅️ 뒤로가기"
                        }, void 0, false, {
                            fileName: "[project]/app/wrong-notes/page.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this),
                        Object.keys(groupedData[selectedDate]).map((examId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: "20px",
                                    backgroundColor: "#1E1E1E",
                                    borderRadius: 12,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    border: "1px solid #333"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "📄 ",
                                            examId,
                                            "회차 (",
                                            groupedData[selectedDate][examId].length,
                                            "문제)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/wrong-notes/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setSelectedSession(examId);
                                            setIsSolving(true);
                                            setCurrentIndex(0);
                                            setShowExplanation(false);
                                        },
                                        style: {
                                            padding: "10px 20px",
                                            backgroundColor: "#4CAF50",
                                            color: "white",
                                            border: "none",
                                            borderRadius: 8,
                                            fontWeight: "bold"
                                        },
                                        children: "다시 풀기"
                                    }, void 0, false, {
                                        fileName: "[project]/app/wrong-notes/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, examId, true, {
                                fileName: "[project]/app/wrong-notes/page.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/wrong-notes/page.tsx",
                    lineNumber: 158,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/wrong-notes/page.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/wrong-notes/page.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9d175dfe._.js.map