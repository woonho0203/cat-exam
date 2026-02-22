const questions = [
  {
    id: 1,
    question: "비투자율 $\\mu_s = 800$, 원형 단면적이 $S = 10[\\text{cm}^2]$, 평균 자로 길이 $l = 1.6\\pi \\times 10^{-2}[\\text{m}]$의 환상철심에 $600$회의 코일을 감고 이 코일에 $1[\\text{A}]$의 전류를 흘리면 환상 철심 내부의 자속은 몇 $[\\text{Wb}]$인가?",
    options: [
      "$1.2 \\times 10^{-3}$",
      "$1.2 \\times 10^{-5}$",
      "$2.4 \\times 10^{-3}$",
      "$2.4 \\times 10^{-5}$"
    ],
    answer: 4,
    explanation: "환상 솔레노이드의 내부 자속\n$\\phi = \\mu S H = \\mu_s \\mu_0 S \\frac{NI}{l}$\n$= 4\\pi \\times 10^{-7} \\times 800 \\times 1 \\times 10^{-3} \\times \\frac{600 \\times 1}{1.6\\pi \\times 10^{-2}} = 1.2 \\times 10^{-3}[\\text{Wb}]$",
    image: null
  },
  {
    id: 2,
    question: "정상전류계에서 $\\nabla \\cdot \\vec{J} = 0$ 에 대한 설명으로 틀린 것은?",
    options: [
      "도체 내에 흐르는 전류는 연속이다.",
      "도체 내에 흐르는 전류는 일정하다.",
      "단위 시간당 전하의 변화가 없다.",
      "도체 내에 전류가 흐르지 않는다."
    ],
    answer: 4,
    explanation: "전류의 연속 방정식 $\\text{div } \\vec{J} = -\\frac{\\partial \\rho}{\\partial t}$ 에서 도체 내 정상전류가 흐르면 전하밀도($\\rho$)가 시간($t$)에 대해 일정하므로 $\\text{div } \\vec{J} = 0$ 이며, 이것은 전류가 발생하나 소멸이 없이 연속적이라는 것을 의미한다.",
    image: null
  },
  {
    id: 3,
    question: "동일한 금속 도선의 두 점 사이에 온도차를 주고 전류를 흘렸을 때 열의 발생 또는 흡수가 일어나는 현상은?",
    options: [
      "펠티어(Peltier) 효과",
      "볼타(Volta) 효과",
      "제벡(Seebeck) 효과",
      "톰슨(Thomson) 효과"
    ],
    answer: 4,
    explanation: "• 펠티어 효과 : 두 종류 금속 접속면에 전류를 흘리면 접속점에서 열의 흡수, 발생이 일어나는 효과\n• 제벡 효과 : 두 종류 금속 접속면에 온도차가 있으면 기전력이 발생하는 효과\n• 톰슨 효과 : 동일한 금속 도선의 두 점 간에 온도차를 주고, 고온 쪽에서 저온 쪽으로 전류를 흘리면 도선 속에서 열이 발생되거나 흡수가 일어나는 현상",
    image: null
  },
  {
    id: 4,
    question: "비유전율이 $2$이고, 비투자율이 $2$인 매질 내에서의 전파속도 $v[\\text{m/s}]$와 진공 중의 빛의 속도 $v_0[\\text{m/s}]$ 사이의 관계는?",
    options: [
      "$v = \\frac{1}{2} v_0$",
      "$v = \\frac{1}{4} v_0$",
      "$v = \\frac{1}{6} v_0$",
      "$v = \\frac{1}{8} v_0$"
    ],
    answer: 1,
    explanation: "• 전파속도 $v = \\frac{1}{\\sqrt{\\mu\\epsilon}} = \\frac{1}{\\sqrt{\\mu_r\\mu_0\\epsilon_r\\epsilon_0}} = \\frac{1}{\\sqrt{\\mu_r\\epsilon_r}} \\frac{1}{\\sqrt{\\mu_0\\epsilon_0}}[\\text{m/s}]$\n($\\because \\frac{1}{\\sqrt{\\mu_0\\epsilon_0}} = 3 \\times 10^8[\\text{m/s}]$ (빛의 속도))\n• $\\mu_r = 2$, $\\epsilon_r = 2$일 때, $v = \\frac{3 \\times 10^8}{\\sqrt{2 \\times 2}} = \\frac{1}{2} v_0$가 된다.",
    image: null
  },
  {
    id: 5,
    question: "원점 내의 점 $(2, 2, 2)$에 $10[\\text{C}]$의 전하가 놓여 있다. 점 $(2, 5, 6)$에서의 전계 $\\vec{E}$는 약 몇 $[\\text{V/m}]$인가? (단, $\\vec{a}_x, \\vec{a}_y, \\vec{a}_z$는 단위벡터이다.)",
    options: [
      "$0.278\\vec{a}_x + 2.888\\vec{a}_z$",
      "$0.216\\vec{a}_x + 0.288\\vec{a}_z$",
      "$0.288\\vec{a}_y + 2.216\\vec{a}_z$",
      "$0.291\\vec{a}_y + 0.288\\vec{a}_z$"
    ],
    answer: 4,
    explanation: "• 그림과 같이 전하 $10[\\text{C}]$이 존재하는 점 A와 점 P 사이의 거리는\n$r = \\sqrt{(2-2)^2 + (5-2)^2 + (6-2)^2} = 5[\\text{m}]$\n이므로, P점의 전계의 세기 $E$는\n$E = 9 \\times 10^9 \\frac{Q}{r^2} = 9 \\times 10^9 \\times \\frac{10}{5^2} = 0.36[\\text{V/m}]$\n• 전계의 방향을 표시하는 단위 벡터는\n$\\vec{r}_0 = \\frac{\\vec{r}}{r} = \\frac{3\\vec{a}_y + 4\\vec{a}_z}{5} = (3\\vec{a}_y + 4\\vec{a}_z) \\times \\frac{1}{5}$\n• 따라서 전계 $\\vec{E}$는\n$\\vec{E} = E \\vec{r}_0 = 0.36 \\times \\frac{1}{5} (3\\vec{a}_y + 4\\vec{a}_z) = 0.216\\vec{a}_y + 0.288\\vec{a}_z[\\text{V/m}]$",
    image: null
  },
  {
    id: 6,
    question: "한 변의 길이가 $l[\\text{m}]$인 정사각형 도체에 전류 $I[\\text{A}]$가 흐르고 있을 때 중심점 $P$에서의 자계의 세기는 몇 $[\\text{A/m}]$인가?",
    options: [
      "$16\\pi I l$",
      "$\\frac{I}{4\\pi l}$",
      "$\\frac{\\sqrt{3}I}{\\pi l}$",
      "$\\frac{2\\sqrt{2}I}{\\pi l}$"
    ],
    answer: 4,
    explanation: "한 변 $AB$에 대한 중심점의 자계는\n$H_{AB} = \\frac{I}{4\\pi a} (\\sin\\beta_1 + \\sin\\beta_2)$ 이므로 $a = \\frac{l}{2}$,\n$\\sin\\beta_1 = \\sin\\beta_2 = \\sin 45^\\circ = \\frac{1}{\\sqrt{2}}$을 대입하면\n$H_{AB} = \\frac{I}{4\\pi (l/2)} (\\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}}) = \\frac{I}{2\\pi l} \\times \\frac{2}{\\sqrt{2}} = \\frac{I}{\\sqrt{2}\\pi l}[\\text{AT/m}]$\n• $H = H_{AB} + H_{BC} + H_{CD} + H_{DA} = 4H_{AB} = 4 \\times \\frac{I}{\\sqrt{2}\\pi l} = \\frac{4\\sqrt{2}I}{2\\pi l} = \\frac{2\\sqrt{2}I}{\\pi l}[\\text{AT/m}]$",
    image: null
  },
  {
    id: 7,
    question: "간격이 $3[\\text{cm}]$이고 면적이 $30[\\text{cm}^2]$인 평판의 공기 콘덴서에 $220[\\text{V}]$의 전압을 가하면 두 판 사이에 작용하는 힘은 약 몇 $[\\text{N}]$인가?",
    options: [
      "$6.3 \\times 10^{-6}$",
      "$7.14 \\times 10^{-7}$",
      "$8 \\times 10^{-5}$",
      "$5.75 \\times 10^{-4}$"
    ],
    answer: 2,
    explanation: "• 도체 표면의 정전 응력(단위 면적당의 작용력)\n$F = \\frac{1}{2}DE = \\frac{1}{2}\\epsilon_0 E^2 = \\frac{1}{2}\\epsilon_0 (\\frac{V}{d})^2[\\text{N/m}^2]$\n간격 $d = 3 \\times 10^{-2}[\\text{m}]$, 면적 $S = 30 \\times 10^{-4}[\\text{m}^2]$, 전압 $V = 220[\\text{V}]$를 대입하면\n$\\therefore F = \\frac{1}{2} \\times 8.855 \\times 10^{-12} \\times (\\frac{220}{3 \\times 10^{-2}})^2 \\times 30 \\times 10^{-4} = 7.14 \\times 10^{-7}[\\text{N}]$",
    image: null
  },
  {
    id: 8,
    question: "관계 $\\vec{E}[\\text{V/m}]$, 전속밀도 $\\vec{D}[\\text{C/m}^2]$, 유전율 $\\epsilon = \\epsilon_0\\epsilon_r[\\text{F/m}]$, 분극의 세기 $\\vec{P}[\\text{C/m}^2]$ 사이의 관계로 틀린 것으로 옳은 것은?",
    options: [
      "$\\vec{P} = \\vec{D} + \\epsilon_0\\vec{E}$",
      "$\\vec{P} = \\vec{D} - \\epsilon_0\\vec{E}$",
      "$\\vec{D} + \\vec{P} = \\frac{\\epsilon}{\\epsilon_0}$",
      "$\\vec{P} = \\frac{\\vec{D} - \\vec{E}}{\\epsilon_0}$"
    ],
    answer: 2,
    explanation: "전계 $\\vec{E} = \\frac{\\vec{D} - \\vec{P}}{\\epsilon_0}[\\text{V/m}]$에서 전속밀도 $\\vec{D} = \\epsilon_0\\vec{E} + \\vec{P}[\\text{C/m}^2]$\n따라서, 분극의 세기 $\\vec{P} = \\vec{D} - \\epsilon_0\\vec{E}[\\text{C/m}^2]$",
    image: null
  },
  {
    id: 9,
    question: "커패시터를 제조하는데 4가지(A, B, C, D)의 유전재료가 있다. 커패시터 내의 전계를 일정하게 하였을 때, 단위체적당 가장 큰 에너지 밀도를 나타내는 재료부터 순서대로 나열한 것은? (단, 유전재료 A, B, C, D의 비유전율은 각각 $\\epsilon_A = 8$, $\\epsilon_B = 10$, $\\epsilon_C = 2$, $\\epsilon_D = 4$이다.)",
    options: [
      "$\\text{D} > \\text{C} > \\text{A} > \\text{B}$",
      "$\\text{B} > \\text{A} > \\text{D} > \\text{C}$",
      "$\\text{D} > \\text{A} > \\text{C} > \\text{B}$",
      "$\\text{A} > \\text{B} > \\text{D} > \\text{C}$"
    ],
    answer: 2,
    explanation: "유전체 내에 저장되는 에너지밀도 $w = \\frac{1}{2}\\epsilon E^2[\\text{J/m}^3]$에서 $w \\propto \\epsilon$, 즉, 에너지밀도는 비유전율에 비례한다.\n따라서, $\\epsilon_B > \\epsilon_A > \\epsilon_D > \\epsilon_C$ 이므로 $\\text{B} > \\text{A} > \\text{D} > \\text{C}$",
    image: null
  },
  {
    id: 10,
    question: "내구의 반지름이 $2[\\text{cm}]$, 외구의 반지름이 $3[\\text{cm}]$인 동심구 도체 간에 고유저항이 $1.884 \\times 10^2[\\Omega \\cdot \\text{m}]$인 저항 물질로 채워져 있을 때, 내외구 간의 합성 저항은 약 몇 $[\\Omega]$인가?",
    options: [
      "$2.5$",
      "$5.0$",
      "$250$",
      "$500$"
    ],
    answer: 3,
    explanation: "• 동심구 도체 사이의 정전용량\n$C = \\frac{1}{\\frac{1}{4\\pi\\epsilon}(\\frac{1}{a} - \\frac{1}{b})} = 4\\pi\\epsilon \\frac{ab}{b-a}$ (여기서, $a$: 내구의 반지름[m], $b$: 외구의 반지름[m])\n$C = 4\\pi \\times \\frac{8.855 \\times 10^{-12} \\times 2 \\times 10^{-2} \\times 3 \\times 10^{-2}}{3 \\times 10^{-2} - 2 \\times 10^{-2}} = 6.677 \\times 10^{-12}[\\text{F}]$\n• $RC = \\rho\\epsilon$ 에서 $R = \\frac{\\rho\\epsilon}{C} = \\frac{1.884 \\times 10^2 \\times 8.855 \\times 10^{-12}}{6.677 \\times 10^{-12}} = 250[\\Omega]$",
    image: null
  },
  {
    id: 11,
    question: "영구자석의 재료로 적합한 것은?",
    options: [
      "잔류 자속밀도($B_r$)는 크고, 보자력($H_c$)은 작아야 한다.",
      "잔류 자속밀도($B_r$)는 작고, 보자력($H_c$)은 커야 한다.",
      "잔류 자속밀도($B_r$)와 보자력($H_c$) 모두 작아야 한다.",
      "잔류 자속밀도($B_r$)와 보자력($H_c$) 모두 커야 한다."
    ],
    answer: 4,
    explanation: "• 히스테리시스 곡선\n• 자성 재료는 히스테리시스 곡선의 면적 및\n• 잔류자화($B_r$)는 크고 잔류자화($H_c$)는 커야 한다.\n• 영구자석 재료는 히스테리시스 곡선의 면적 및\n보자력($H_c$)과 잔류자기($B_r$)도 모두 커야 한다.",
    image: null
  },
  {
    id: 12,
    question: "평등 전계 중에 유전체 구에 의한 전속분포가 그림과 같이 되었을 때 $\\epsilon_1$과 $\\epsilon_2$의 크기 관계는?",
    options: [
      "$\\epsilon_1 > \\epsilon_2$",
      "$\\epsilon_1 < \\epsilon_2$",
      "$\\epsilon_1 = \\epsilon_2$",
      "$\\epsilon_1 \\le \\epsilon_2$"
    ],
    answer: 1,
    explanation: "전속선은 유전율이 큰 쪽으로 모이므로 $\\epsilon_1 > \\epsilon_2$이다.",
    image: null
  },
  {
    id: 13,
    question: "전하 $e[\\text{C}]$, 질량 $m[\\text{kg}]$인 전자가 전계 $E[\\text{V/m}]$ 내에 놓여 있을 때 최초에 정지하고 있었다면 $t$초 후에 전자의 속도[m/s]는?",
    options: [
      "$\\frac{mE}{t}$",
      "$\\frac{mE}{et}$",
      "$\\frac{eE}{mt}$",
      "$\\frac{eEt}{m}$"
    ],
    answer: 4,
    explanation: "① 전자의 질량 $m[\\text{kg}]$이 가속도 $a[\\text{m/s}^2]$로 운동할 때 작용하는 역학적인 힘은 뉴턴의 제2법칙에 의해\n$F_m = ma[\\text{N}]$\n또 가속도 $a$와 속도 $v$의 관계 $a = \\frac{v}{t}$에 의해\n역학적인 힘 $F_m = m\\frac{v}{t}[\\text{N}]$\n② 전계 $E[\\text{V/m}]$내에서 전하 $e[\\text{C}]$에 작용하는 전기적인 힘, 즉 정전력 $F_e = eE[\\text{N}]$\n③ 역학적인 힘과 정전력은 같으므로\n$F_m = F_e$, $m\\frac{v}{t} = eE$\n$\\therefore v = \\frac{eEt}{m}[\\text{m/s}]$",
    image: null
  },
  {
    id: 14,
    question: "환상 솔레노이드의 단면적 $S$, 평균 반지름 $r$, 권선수 $N$이고 누설자속이 없는 경우 자기 인덕턴스의 크기는?",
    options: [
      "권선수 및 단면적에 비례한다.",
      "권선수의 제곱 및 단면적에 비례한다.",
      "권선수의 제곱 및 평균 반지름에 비례한다.",
      "권선수의 제곱에 비례하고 단면적에 반비례한다."
    ],
    answer: 2,
    explanation: "• 자속 $\\phi = \\frac{NI}{R_m} = \\frac{\\mu SNI}{l}[\\text{Wb}]$\n• $LI = N\\phi$ 에서 $L = N \\frac{\\phi}{I} = N \\frac{\\mu SNI}{lI} = \\frac{\\mu SN^2}{l}[\\text{H}]$\n따라서 자기 인덕턴스($L$)는 투자율($\\mu$), 단면적($S$) 및 권선수($N$)의 제곱에 비례하고, 자로 길이($l$)에 반비례한다.",
    image: null
  },
  {
    id: 15,
    question: "다음 중 비투자율($\\mu_r$)이 가장 큰 것은?",
    options: [
      "금",
      "은",
      "구리",
      "니켈"
    ],
    answer: 4,
    explanation: "자성체는 비투자율이 1보다 훨씬 큰 물질이다.\n금: 0.999964 (반자성체)\n은: 0.999998 (반자성체)\n구리: 0.999991 (반자성체)\n알루미늄: 1.00002 (상자성체)\n코발트: 250 (강자성체)\n철(순도 98.8%): 5,000 (강자성체)\n규소강(규소 4%): 7,000 (강자성체)\n니켈: 600 (강자성체)\n퍼멀로이: 100,000 (강자성체)\n따라서 니켈이 가장 크다.",
    image: null
  },
  {
    id: 16,
    question: "그림과 같은 환상 솔레노이드 내의 철심 중심에서의 자계의 세기 $H[\\text{AT/m}]$는? (단, 환상 철심의 평균 반지름은 $r[\\text{m}]$, 코일의 권수는 $N$회, 코일에 흐르는 전류는 $I[\\text{A}]$이다.)",
    options: [
      "$\\frac{NI}{\\pi r}$",
      "$\\frac{NI}{2\\pi r}$",
      "$\\frac{NI}{4\\pi r}$",
      "$\\frac{2NI}{\\pi r}$"
    ],
    answer: 2,
    explanation: "• 코일 내부 $\\oint \\vec{H} \\cdot d\\vec{l} = H \\cdot 2\\pi r = NI$, $H = \\frac{NI}{2\\pi r}[\\text{AT/m}]$\n• 코일 외부 $H = 0$",
    image: null
  },
  {
    id: 17,
    question: "강자성체가 아닌 것은?",
    options: [
      "코발트",
      "니켈",
      "철",
      "구리"
    ],
    answer: 4,
    explanation: "강자성체: 철, 니켈, 코발트, 가돌리늄, 디스프로슘 등\n구리는 반자성체이다.",
    image: null
  },
  {
    id: 18,
    question: "반지름이 $a$[m]인 원형 도선 2개의 루프가 $z$축 상에 그림과 같이 놓인 경우 $I$[A]의 전류가 흐를 때 원형 전류 중심 축 상의 자계 $H$[A/m]는? (단, $a_z$는 단위벡터이다.)",
    options: [
      "$H = \\frac{a^2 I}{(a^2 + z^2)^{3/2}} a_z$",
      "$H = \\frac{a^2 I}{(a^2 + z^2)^{3/2}} a_z$",
      "$H = \\frac{a^2 I}{(a^2 + z^2)^{3/2}} a_z$",
      "$H = \\frac{a^2 I}{2(a^2 + z^2)^{3/2}} a_z$"
    ],
    answer: 4,
    explanation: "원형 전류에 의한 중심축상의 자계 $w = \\frac{I}{4\\pi} \\int \\frac{dl \\times r}{r^3} = \\frac{I}{2} \\frac{a^2}{(a^2+z^2)^{3/2}} [AT]$이고 자계의 세기 $H_z$는 $H_z = -\\frac{\\partial u}{\\partial z} a_z = \\frac{a^2 I}{2(a^2+z^2)^{3/2}} a_z$가 된다. 그런데 원형전류가 두 개이고 원점에서 자계 방향도 같으므로 $H_z$의 2배가 된다. $\\ \\therefore H_z = 2H_z = \\frac{a^2 I}{(a^2+z^2)^{3/2}} a_z$",
    image: null
  },
  {
    id: 19,
    question: "방송국 안테나 출력이 $W$[W]이고 이로부터 진공 중에 $r$[m] 떨어진 점에서 자계의 세기의 실효치는 몇 [A/m]인가?",
    options: [
      "$\\frac{1}{r} \\sqrt{\\frac{W}{377\\pi}}$",
      "$\\frac{1}{2r} \\sqrt{\\frac{W}{377\\pi}}$",
      "$\\frac{1}{2r} \\sqrt{\\frac{W}{188\\pi}}$",
      "$\\frac{1}{r} \\sqrt{\\frac{2W}{377\\pi}}$"
    ],
    answer: 2,
    explanation: "전력밀도 $P = EH = 377H^2 = \\frac{W}{4\\pi r^2} [W/m^2]$ (∵ $E = \\sqrt{\\frac{\\mu_0}{\\epsilon_0}} H = 377H$) $\\ \\therefore H = \\sqrt{\\frac{W}{377 \\cdot 4\\pi r^2}} = \\frac{1}{2r} \\sqrt{\\frac{W}{377\\pi}}$",
    image: null
  },
  {
    id: 20,
    question: "정교한 평면도체와 점전하에 의한 영상전하는 몇 개 존재하는가?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 2,
    explanation: "영상전하 개수 $n = \\frac{360^\\circ}{\\theta} - 1$[개]이다. 직교면이면 $\\theta = 90^\\circ$이므로 $n = \\frac{360^\\circ}{90^\\circ} - 1 = 3$[개]이다.",
    image: null
  },
  {
    id: 21,
    question: "그림과 같은 유량곡선을 가진 수력발전계에서 최대사용량 0C로 1년간 발전하는데 필요한 저수지의 용량은?",
    options: [
      "연적 OCPBA",
      "연적 OCDBA",
      "면적 DEB",
      "면적 PCD"
    ],
    answer: 3,
    explanation: "최대 사용량 0C로 1년간 계속 발전할 때, 부족 수량은 면적 DEB에 상당한 수량이므로, 이 면적에 상당한 수량만큼 저수해 두면 된다.",
    image: null
  },
  {
    id: 22,
    question: "통신선과 평행인 주파수 60[Hz]의 3상 1회선 송전선이 있다. 1선 지락 때문에 영상전류가 100[A] 흐르고 있다면 통신선에 유도되는 전자유도전압[V]은 약 얼마인가? (단, 영상전류는 전 전선에 걸쳐서 같으며, 송전선과 통신선과의 상호 인덕턴스는 0.06[mH/km], 그 평행 길이는 40[km]이다.)",
    options: [
      "156.6",
      "162.8",
      "230.2",
      "271.4"
    ],
    answer: 4,
    explanation: "$E_m = j\\omega M_0 I_0 = j2\\pi f M_0 I_0 = j2\\pi \\times 60 \\times 0.06 \\times 10^{-3} \\times 40 \\times 3 \\times 100 = 271.4[V]$ ※ 유도전압은 그 크기를 뜻하므로 (－)의미가 없다.",
    image: null
  },
  {
    id: 23,
    question: "고장전류의 크기가 커질수록 동작시간이 짧게 되는 특성을 가진 계전기는?",
    options: [
      "순시 계전기",
      "정한시 계전기",
      "반한시 계전기",
      "반한시 정한시 계전기"
    ],
    answer: 3,
    explanation: "① 순시 계전기 : 최소 동작전류 이상의 전류가 흐르면 즉시 동작하는 특성 ② 정한시 계전기 : 동작전류의 크기에 관계없이 일정한 시간 후에 동작하는 특성 ③ 반한시 특성 : 동작전류가 커질수록 동작시간이 짧게 되는 특성 ④ 반한시 정한시 특성 : 동작전류가 작은 동안에는 동작전류가 커질수록 동작시간이 짧게 되고, 어떤 전류 이상이 되면 동작전류의 크기에 관계없이 일정한 시간에 동작하는 특성",
    image: null
  },
  {
    id: 24,
    question: "3상 4선식 송전선에서 한 선의 저항이 10[Ω], 리액턴스가 20[Ω]이며, 수전단의 선간전압이 60[kV], 부하역률이 0.8인 경우에 전압강하율이 10[%]라 하면 이 송전선로로 흐르는 약 몇 [kW]까지 수전할 수 있는가?",
    options: [
      "10000",
      "12000",
      "14400",
      "18000"
    ],
    answer: 3,
    explanation: "전압강하율 $\\epsilon = \\frac{P(R+X\\tan\\theta)}{V^2} \\times 100 = 10[\\%]$ $\\ 0.1 = \\frac{P(10+20 \\times \\frac{0.6}{0.8})}{60000^2}$ $\\ P = \\frac{0.1 \\times 60000^2}{10+20 \\times \\frac{0.6}{0.8}} = 14400[kW]$",
    image: null
  },
  {
    id: 25,
    question: "기준선간전압 23[kV], 기준용량 5000[kVA], 1선의 유도 리액턴스가 15[Ω]일 때 %리액턴스는?",
    options: [
      "28,36[%]",
      "14,18[%]",
      "7,09[%]",
      "3,55[%]"
    ],
    answer: 2,
    explanation: "$\\%X = \\frac{PX}{10V^2} = \\frac{5000 \\times 15}{10 \\times 23^2} = 14.18[\\%]$ 여기서, $P$: 기준용량[kVA], $V$: 전압[kV], $X$: 1선의 리액턴스[Ω]",
    image: null
  },
  {
    id: 26,
    question: "전력원선도의 가로축과 세로축을 나타내는 것은?",
    options: [
      "전압과 전류",
      "전압과 전력",
      "전류와 전력",
      "유효전력과 무효전력"
    ],
    answer: 4,
    explanation: "가로축 : 유효전력, 세로축 : 무효전력",
    image: null
  },
  {
    id: 27,
    question: "화력발전소에서 증기 및 급수가 흐르는 순서는?",
    options: [
      "절탄기 → 보일러 → 과열기 → 터빈 → 복수기",
      "보일러 → 절탄기 → 과열기 → 터빈 → 복수기",
      "보일러 → 과열기 → 절탄기 → 터빈 → 복수기",
      "절탄기 → 과열기 → 보일러 → 터빈 → 복수기"
    ],
    answer: 1,
    explanation: "실제 화력발전소에 쓰이는 기본 사이클(Rankine cycle)은 다음과 같다.",
    image: null
  },
  {
    id: 28,
    question: "송전선로에서 1선 지락 시에 건전상의 전압 상승이 가장 적은 접지방식은?",
    options: [
      "비접지방식",
      "직접접지방식",
      "저항접지방식",
      "소호리액터 접지방식"
    ],
    answer: 2,
    explanation: "| 접지방식 | 지락 시 건전상의 전압 상승 |\n|---|---|\n| 비접지 | 크다. |\n| | • 장거리 송전선의 경우, 이상전압 발생 |\n| | • 절연과 거의 차이가 없다. |\n| 직접접지 | • 약간 크다. |\n| 저항접지 | • 비접지의 경우보다 약간 작은 편이다. |\n| 소호리액터 접지 | • 적어도 $\\sqrt{3}$배까지 올라간다. |",
    image: null
  },
  {
    id: 29,
    question: "연료의 발열량이 430[kcal/kg]일 때, 화력발전소의 열효율[%]은? (단, 발전기 출력은 $P_G$[kW], 시간당 연료의 소비량은 $B$[kg/h]이다.)",
    options: [
      "$\\frac{P_G}{B} \\times 100$",
      "$\\sqrt{2} \\times \\frac{P_G}{B} \\times 100$",
      "$\\frac{P_G}{\\sqrt{3}B} \\times 100$",
      "$\\frac{P_G}{2B} \\times 100$"
    ],
    answer: 4,
    explanation: "발전기 출력 $P_G$[kW], 연료소비량 $B$[kg/h], 연료의 발열량 $C$[kcal/kg]이라면 $\\ \\cdot$ 입력 : $B \\times C$[kcal] $\\ \\cdot$ 출력 : $P_G \\times 860$[kcal] ($1[kWh] = 860[kcal]$) $\\ \\cdot$ 열효율 $\\eta = \\frac{출력}{입력} \\times 100 = \\frac{P_G \\times 860}{BC} \\times 100 = \\frac{P_G \\times 860}{B \\times 430} \\times 100 = \\frac{P_G \\times 2}{B} \\times 100 = \\frac{P_G}{2B} \\times 100[\\%]$",
    image: null
  },
  {
    id: 30,
    question: "접지봉으로 탭의 접지저항을 희망하는 접지저항까지 줄일 수 없을 때 사용하는 것은?",
    options: [
      "가공지선",
      "매설지선",
      "크로스본드선",
      "차폐선"
    ],
    answer: 2,
    explanation: "① 가공지선 : 낙뢰제 ② 매설지선 : 접지저항을 낮추어 역섬락 방지 ③ 크로스본드 : cable의 시스전압을 저감시키고 시스손실을 감소시키기 위한 접지방식 ④ 차폐선 : 유도 장해 감소",
    image: null
  },
  {
    id: 31,
    question: "정전용량 $C_1$이고, $V_1$의 전압에서 $Q_1$의 무효전력을 발생하는 콘덴서가 있다. 정전용량을 변화시켜 2배로 증설된 전압 $(2V_1)$에서도 동일한 무효전력 $Q_1$을 발생시키고자 할 때, 필요한 콘덴서의 정전용량 $C_2$는?",
    options: [
      "$C_2 = 4C_1$",
      "$C_2 = 2C_1$",
      "$C_2 = \\frac{1}{2}C_1$",
      "$C_2 = \\frac{1}{4}C_1$"
    ],
    answer: 4,
    explanation: "$Q_c = \\frac{V^2}{\\frac{1}{\\omega C}} = \\omega C V^2$ $\\ $무효전력은 전압의 제곱에 비례하므로, 2배로 증압된 전압에서도 동일한 무효전력을 발생시키려면 1/4배의 정전용량이 필요하다. $\\ \\cdot Q_1 = \\omega C_1 V_1^2 = Q_2 = \\omega C_2 (2V_1)^2 = \\omega C_2 4V_1^2 \\\\ \\therefore C_1 V_1^2 = C_2 4V_1^2 \\\\ \\therefore C_2 = \\frac{1}{4} C_1$",
    image: null
  },
  {
    id: 32,
    question: "전력 퓨즈(Power Fuse)는 고압, 특고압기기의 주로 어떤 전류의 차단을 목적으로 설치하는가?",
    options: [
      "충전전류",
      "부하전류",
      "단락전류",
      "영상전류"
    ],
    answer: 3,
    explanation: "전력용 퓨즈는 단락보호용으로 사용된다.",
    image: null
  },
  {
    id: 33,
    question: "송전선로에서의 고장 또는 발전기 탈락과 같은 외란에 대하여 계통에 연결된 각 동기기가 동기를 유지하면서 계속 안정적으로 운전할 수 있는지를 판별하는 안정도는?",
    options: [
      "동태안정도(dynamic stability)",
      "정태안정도(steady-state stability)",
      "진압안정도(voltage stability)",
      "과도안정도(transient stability)"
    ],
    answer: 4,
    explanation: "안정도의 종류 $\\ $① 정태안정도(static stability) : 송전 계통이 불변한 부하 또는 극히 서서히 증가하는 부하에 대하여 계속적으로 운전할 수 있는 능력을 정태 안정도라 하고, 안정도를 유지할 수 있는 극한의 송전 전력을 정태 안정 극한 전력이라고 한다. $\\ $② 과도안정도(transient stability) : 계통에 갑자기 고장 사고와 같은 급격한 외란이 발생하였을 때에도 탈조하지 않고 새로운 평형 상태를 회복하여 운전을 계속할 수 있는 능력을 과도 안정도라 하고 이 경우의 극한 전력을 과도 안정 극한 전력이라고 한다. $\\ $③ 동태안정도(dynamic stability) : 고속 자동 전압 조정기로 동기기의 여자 전류를 제어할 경우의 정태 안정도를 특히 동태 안정도라 한다.",
    image: null
  },
  {
    id: 34,
    question: "송전선로의 고장계산 계산상 영상임피던스가 필요한 경우?",
    options: [
      "1선 지락",
      "3상 단락",
      "2선 단락",
      "선간 단락"
    ],
    answer: 1,
    explanation: "$\\cdot$ 1선 지락 : 영상분, 정상분, 역상분 이 존재 $\\ \\cdot$ 선간 단락 : 정상분, 역상분 이 존재 $\\ \\cdot$ 3상 단락 : 정상분만 존재",
    image: null
  },
  {
    id: 35,
    question: "배전선로의 주상변압기에서 고압측-저압측에 주로 사용되는 보호장치의 조합으로 적합한 것은?",
    options: [
      "고압측 : 컷아웃 스위치, 저압측 : 캐치홀더",
      "고압측 : 캐치홀더, 저압측 : 컷아웃 스위치",
      "고압측 : 라인퓨즈, 저압측 : 라인퓨즈",
      "고압측 : 라인퓨즈, 저압측 : 리클로저"
    ],
    answer: 1,
    explanation: "주상변압기의 고압측 보호는 컷 아웃 스위치(cut out switch), 저압측 보호는 캐치 홀더(catch holder)이다.",
    image: null
  },
  {
    id: 36,
    question: "용량 20[kVA]인 단상 주상 변압기에 걸리는 하루 동안의 부하가 처음 14시간 동안은 20[kW], 다음 10시간 동안은 10[kW]일 때, 이 변압기에 의한 하루 동안의 손실량[Wh]은? (단, 부하의 역률은 1로 가정하고, 변압기의 전 부하동손은 300[W], 철손은 100[W]이다.)",
    options: [
      "6850",
      "7200",
      "7800",
      "8000"
    ],
    answer: 1,
    explanation: "총 손실량은 철손과 동손의 합이다.\\ 철손 에너지 = 철손 $\\times$ 시간 = $100[W] \\times 24[h] = 2400[Wh]$.\\ 동손은 부하율의 제곱에 비례한다. 정격용량 20[kVA], 전 부하동손 300[W].\\ 1) 처음 14시간 (부하 20[kW]): 부하율 $k_1 = \\frac{20[kW]}{20[kVA]} = 1$.\\ 동손 $P_{c1} = 300[W] \\times k_1^2 = 300[W] \\times 1^2 = 300[W]$.\\ 동손 에너지 $W_{c1} = 300[W] \\times 14[h] = 4200[Wh]$.\\ 2) 다음 10시간 (부하 10[kW]): 부하율 $k_2 = \\frac{10[kW]}{20[kVA]} = 0.5$.\\ 동손 $P_{c2} = 300[W] \\times k_2^2 = 300[W] \\times (0.5)^2 = 300[W] \\times 0.25 = 75[W]$.\\ 동손 에너지 $W_{c2} = 75[W] \\times 10[h] = 750[Wh]$.\\ 총 동손 에너지 $W_c = W_{c1} + W_{c2} = 4200[Wh] + 750[Wh] = 4950[Wh]$.\\ 총 손실량 = 철손 에너지 + 총 동손 에너지 = $2400[Wh] + 4950[Wh] = 7350[Wh]$.\\ (주어진 정답은 6850[Wh]로, 문제의 파라미터 또는 정답에 오류가 있을 수 있습니다.)",
    image: null
  },
  {
    id: 37,
    question: "케이블 단선사고에 의한 고장점까지의 거리를 정전용량측정법으로 구하는 경우, 건전상의 정전용량이 $C_l$, 고장점까지의 정전용량이 $C_x$, 케이블의 길이가 $l$ 일 때 고장점까지의 거리를 나타내는 식으로 알맞은 것은?",
    options: [
      "$\\frac{C_x}{C_l} l$",
      "$\\frac{2C_x}{C_l} l$",
      "$\\frac{C_x}{2C_l} l$",
      "$\\frac{2C_x}{2C_l} l$"
    ],
    answer: 1,
    explanation: "정전용량측정법에서 고장점까지의 거리 $x$는 건전상의 정전용량 $C_l$과 고장점까지의 정전용량 $C_x$에 비례하므로, $x = \\frac{C_x}{C_l} l$ 로 나타낼 수 있다.",
    image: null
  },
  {
    id: 38,
    question: "수용률을 나타낸 식은?",
    options: [
      "$\\frac{\\text{합성최대수용전력[kW]}}{\\text{평균전력[kW]}} \\times 100[\\%]$",
      "$\\frac{\\text{최대수용전력[kW]}}{\\text{부하설비합계[kW]}} \\times 100[\\%]$",
      "$\\frac{\\text{부하설비합계[kW]}}{\\text{최대수용전력[kW]}} \\times 100[\\%]$",
      "$\\frac{\\text{최대수용전력[kW]}}{\\text{합성최대수용전력[kW]}} \\times 100[\\%]$"
    ],
    answer: 2,
    explanation: "수용률은 최대 수용전력을 총 수요 설비용량으로 나눈 값에 100%를 곱한 것으로 정의된다. 즉, $\\text{수용률} = \\frac{\\text{최대수용전력}}{\\text{총 수요 설비용량}} \\times 100[\\%]$ 이며, 배전변압기의 용량계산의 척도가 된다.",
    image: null
  },
  {
    id: 39,
    question: "%임피던스에 대한 설명으로 틀린 것은?",
    options: [
      "단위를 갖지 않는다.",
      "정격량이 아닌 기준량에 대한 비를 나타낸 것이다.",
      "기기 용량의 대소에 관계없이 그 값이 일정한 범위 내에 들어간다.",
      "변압기나 동기기 등의 내부 임피던스에만 사용할 수 있다."
    ],
    answer: 2,
    explanation: "백분율 임피던스(%Z)는 정격 전압, 정격 전류 등 정격량을 기준으로 계산되는 값이다. 따라서 '정격량이 아닌 기준량에 대한 비를 나타낸 것'이라는 설명은 틀렸다. %Z는 단위를 가지지 않는 무명수이며, 기기 용량에 관계없이 일정한 범위 내에 들어가는 특성이 있다. 변압기, 동기기 등의 내부 임피던스뿐만 아니라 전선로의 임피던스도 %법으로 나타낼 수 있다.",
    image: null
  },
  {
    id: 40,
    question: "역률 0.8, 출력 320[kW]인 부하에 전력을 공급하는 변전소에 역률 개선을 위해 전력용콘덴서 140[kVA]를 설치했을 때 합성역률은?",
    options: [
      "0.93",
      "0.95",
      "0.97",
      "0.99"
    ],
    answer: 2,
    explanation: "초기 유효전력 $P = 320 \\text{ kW}$, 초기 역률 $\\cos\\theta_1 = 0.8$ 이므로 $\\sin\\theta_1 = \\sqrt{1 - 0.8^2} = 0.6$ 이다.\n초기 무효전력 $Q_1 = P \\tan\\theta_1 = P \\frac{\\sin\\theta_1}{\\cos\\theta_1} = 320 \\times \\frac{0.6}{0.8} = 320 \\times 0.75 = 240 \\text{ kVar}$.\n전력용 콘덴서 용량 $Q_c = 140 \\text{ kVar}$ 이므로, 개선 후 무효전력 $Q_2 = Q_1 - Q_c = 240 - 140 = 100 \\text{ kVar}$.\n개선 후 합성역률 $\\cos\\theta_2 = \\frac{P}{\\sqrt{P^2 + Q_2^2}} = \\frac{320}{\\sqrt{320^2 + 100^2}} = \\frac{320}{\\sqrt{102400 + 10000}} = \\frac{320}{\\sqrt{112400}} \\approx \\frac{320}{335.26} \\approx 0.9545$.",
    image: null
  },
  {
    id: 41,
    question: "전류계를 계기용 변류기 2차측을 단락시켜야 하는 이유는?",
    options: [
      "측정오차 방지",
      "2차측 정격 보호",
      "2차측 과전류 보호",
      "1차측 과전류 방지"
    ],
    answer: 2,
    explanation: "변류기(CT)의 2차 회로를 개방하면 1차 전류가 모두 여자전류가 되어 2차 권선에 매우 높은 전압이 유기되므로 절연이 파괴될 우려가 있고, 또 철심 중의 자속이 급격히 증가하여 철손이 증가하므로 열이 발생하여 소손될 염려가 있다. 따라서 CT의 2차측을 단락시켜 과전압 발생 및 소손을 방지하여 CT를 정격 범위 내에서 보호해야 한다.",
    image: null
  },
  {
    id: 42,
    question: "BJT에 대한 설명으로 틀린 것은?",
    options: [
      "Bipolar Junction Thyristor의 약자이다.",
      "베이스 전류로 컬렉터 전류를 제어하는 전류제어 스위치이다.",
      "MOSFET, IGBT 등의 전압제어 스위치보다 훨씬 큰 구동전력이 필요하다.",
      "회로기호는 B, E, C는 각각 베이스(Base), 에미터(Emitter), 컬렉터(Collector)이다."
    ],
    answer: 1,
    explanation: "BJT는 Bipolar Junction Transistor(양극성 접합 트랜지스터)의 약자이다. Bipolar Junction Thyristor는 SCR과 같은 다른 소자를 의미한다.",
    image: null
  },
  {
    id: 43,
    question: "사이클로 컨버터(Cyclo Converter)에 대한 설명으로 틀린 것은?",
    options: [
      "DC-DC buck 컨버터와 동일한 구조이다.",
      "출력주파수가 낮은 영역에서 많은 장점이 있다.",
      "시멘트공장의 분쇄기 등과 같이 대용량 저속 교류전동기 구동에 주로 사용된다.",
      "교류를 교류로 직접변환하면서 전압과 주파수를 동시에 가변하는 전력변환기이다."
    ],
    answer: 1,
    explanation: "사이클로 컨버터는 AC-AC 변환기로, 전원 주파수(AC)와 다른 주파수의 전력(AC)으로 변환시키는 직접 회로 장치이다. DC-DC buck 컨버터는 직류 전압을 강압하는 장치로, 사이클로 컨버터와는 구조와 기능이 다르다.",
    image: null
  },
  {
    id: 44,
    question: "단상 변압기 2대를 병렬 운전할 경우, 각 변압기의 부하전류를 $I_a, I_b$, 1차측으로 환산된 임피던스를 $Z_a, Z_b$, 백분율 임피던스 강하를 $z_a, z_b$, 정격용량을 $P_{an}, P_{bn}$이라 한다. 이때 부하 분담에 대한 관계로 옳은 것은?",
    options: [
      "$\\frac{I_a}{I_b} = \\frac{Z_b}{Z_a}$",
      "$\\frac{I_a}{I_b} = \\frac{P_{an}}{P_{bn}}$",
      "$\\frac{I_a}{I_b} = \\frac{Z_b}{Z_a} \\times \\frac{P_{an}}{P_{bn}}$",
      "$\\frac{I_a}{I_b} = \\frac{Z_a}{Z_b} \\times \\frac{P_{an}}{P_{bn}}$"
    ],
    answer: 3,
    explanation: "변압기 병렬운전 시 부하 분담은 각 변압기의 임피던스에 반비례하고, 정격용량에 비례한다. 따라서 $I_a : I_b = (P_{an}/Z_a) : (P_{bn}/Z_b)$ 이므로, $\\frac{I_a}{I_b} = \\frac{Z_b}{Z_a} \\times \\frac{P_{an}}{P_{bn}}$ 이다.",
    image: null
  },
  {
    id: 45,
    question: "4극 50[Hz] 이며 전기자 권선은 파권, 전기자 도체수가 250인 직류발전기가 있다. 이 발전기가 1200[rpm]으로 회전할 때 600[V]의 기전력을 유기하려면 1극당 자속은 몇 [Wb]인가?",
    options: [
      "0.04",
      "0.05",
      "0.06",
      "0.07"
    ],
    answer: 3,
    explanation: "직류발전기의 유기기전력 $E = \\frac{PZ\\Phi N}{60a}$ 이다.\n여기서 $P=4$ (극수), $Z=250$ (도체수), $N=1200 \\text{ rpm}$ (회전수), $E=600 \\text{ V}$ (기전력), 파권이므로 $a=2$ (병렬회로수)이다.\n1극당 자속 $\\Phi$에 대해 정리하면 $\\Phi = \\frac{60aE}{PZN} = \\frac{60 \\times 2 \\times 600}{4 \\times 250 \\times 1200} = \\frac{72000}{1200000} = 0.06 \\text{ Wb}$ 이다.",
    image: null
  },
  {
    id: 46,
    question: "직류발전기의 전기자 반작용에 대한 설명으로 틀린 것은?",
    options: [
      "전기자 반작용으로 인하여 전기적 중성축을 이동시킨다.",
      "정류자 편간 전압이 불균일하게 되어 섬락의 원인이 된다.",
      "전기자 반작용이 생기면 주자속이 왜곡되고 증가하게 된다.",
      "전기자 반작용이란, 전기자 전류에 의하여 생긴 자속이 계자에 의해 발생되는 주자속에 영향을 주는 현상을 말한다."
    ],
    answer: 3,
    explanation: "전기자 반작용은 전기자 전류에 의해 발생한 자속이 주자속에 영향을 주어 주자속을 왜곡시키고, 그 크기를 감소시킨다(감자작용). 따라서 '주자속이 증가하게 된다'는 설명은 틀렸다. 전기자 반작용은 전기적 중성축을 이동시키고, 정류자 편간 전압을 불균일하게 하여 섬락의 원인이 된다.",
    image: null
  },
  {
    id: 47,
    question: "발전기 회전자에 자속을 만들기 위하여 여자자석의 권선에 전류를 흘리는 것을 무엇이라 하는가?",
    options: [
      "수차발전기",
      "여자",
      "터빈발전기",
      "고주파발전기"
    ],
    answer: 2,
    explanation: "자속을 발생시키기 위해 계자권선(전자석의 권선)에 전류를 흘리는 것을 '여자(勵磁, Excitation)'라고 한다. 보극, 보상권선은 직류기의 반작용을 개선하기 위한 장치이며, 수차발전기, 터빈발전기, 고주파발전기는 발전기의 종류를 나타낸다.",
    image: null
  },
  {
    id: 48,
    question: "전력(1상)이 $E_0 I_0 \\cos\\delta$ 이고 동기임피던스(1상)가 $Z_s$ 인 2대의 3상 동기발전기를 무부하로 병렬 운전시킬 때 각 발전기의 기전력 사이에 $\\delta$ 의 위상차가 있으면 한쪽 발전기에서 다른 쪽 발전기로 공급되는 1상당의 전력[W]은?",
    options: [
      "$\\frac{E_0^2}{Z_s} \\sin\\delta$",
      "$\\frac{E_0^2}{Z_s} \\cos\\delta$",
      "$\\frac{E_0^2}{2Z_s} \\sin\\delta$",
      "$\\frac{E_0^2}{2Z_s} \\cos\\delta$"
    ],
    answer: 1,
    explanation: "두 동기발전기가 병렬 운전할 때, 기전력 $E_A$와 $E_B$ 사이에 위상차 $\\delta$가 발생하면 순환전류가 흐르며, 이로 인해 한쪽 발전기에서 다른 쪽 발전기로 전력이 공급된다. 이때 1상당 수수 전력 $P$는 $P = \\frac{E_A E_B}{Z_s} \\sin\\delta$ 로 주어진다. 문제에서 $E_A = E_B = E_0$ 이므로, $P = \\frac{E_0^2}{Z_s} \\sin\\delta$ 이다.",
    image: null
  },
  {
    id: 49,
    question: "60[Hz], 6극의 3상 권선형 유도전동기가 있다. 이 전동기의 정격 부하시 회전수는 1140[rpm]이다. 이 전동기를 같은 공급전압에서 전부하 토크로 기동하기 위한 외부저항은 몇 [Ω]인가? (단, 회전자 권선은 Y결선이며 슬립링 간의 저항은 0.1[Ω]이다.)",
    options: [
      "0.04",
      "0.05",
      "0.95",
      "1"
    ],
    answer: 3,
    explanation: "1. 동기속도 $N_s = \\frac{120f}{P} = \\frac{120 \\times 60}{6} = 1200 \\text{ rpm}$.\n2. 전부하 슬립 $s = \\frac{N_s - N}{N_s} = \\frac{1200 - 1140}{1200} = \\frac{60}{1200} = 0.05$.\n3. 슬립링 간의 저항이 0.1[Ω]이고 Y결선이므로, 회전자 1상당 저항 $r_2 = \\frac{0.1}{2} = 0.05 [\\Omega]$.\n4. 전부하 토크로 기동하기 위한 외부저항 $R_{ext}$는 $R_{ext} = r_2 (\\frac{1}{s} - 1)$ 공식을 사용하여 계산한다.\n$R_{ext} = 0.05 (\\frac{1}{0.05} - 1) = 0.05 (20 - 1) = 0.05 \\times 19 = 0.95 [\\Omega]$.",
    image: null
  },
  {
    id: 50,
    question: "3상 권선형 유도전동기 기동시 2차측에 외부 가변저항을 넣는 이유는?",
    options: [
      "회전수 감소",
      "기동전류 증가",
      "기동토크 감소",
      "기동전류 감소와 기동토크 증가"
    ],
    answer: 4,
    explanation: "권선형 유도전동기의 2차측에 외부 가변저항을 삽입하는 2차 저항법은 기동 시 회전자 회로의 저항을 증가시켜 기동전류를 감소시키고, 비례추이 원리에 따라 최대 토크 발생 슬립을 1에 가깝게 하여 기동토크를 증가시키는 효과가 있다.",
    image: null
  },
  {
    id: 51,
    question: "1차 전압은 3300[V]이고 1차측 무부하 전류는 0.15[A], 철손은 330[W]인 단상 변압기의 자화전류는 약 몇 [A]인가?",
    options: [
      "0.112",
      "0.145",
      "0.181",
      "0.231"
    ],
    answer: 1,
    explanation: "1. 철손전류 $I_i = \\frac{\\text{철손 } P_i}{\\text{1차 전압 } V_1} = \\frac{330}{3300} = 0.1 [A]$.\n2. 무부하 전류 $I_0$는 철손전류 $I_i$와 자화전류 $I_m$의 벡터합이므로, $I_0^2 = I_i^2 + I_m^2$ 관계가 성립한다.\n3. 따라서 자화전류 $I_m = \\sqrt{I_0^2 - I_i^2} = \\sqrt{0.15^2 - 0.1^2} = \\sqrt{0.0225 - 0.01} = \\sqrt{0.0125} \\approx 0.1118 [A]$.",
    image: null
  },
  {
    id: 52,
    question: "유도전동기의 안정 운전의 조건은? (단, $T_m$: 전동기 토크, $T_l$: 부하 토크, $n$: 회전수)",
    options: [
      "$\\frac{dT_m}{dn} < \\frac{dT_l}{dn}$",
      "$\\frac{dT_m}{dn} = \\frac{dT_l}{dn}$",
      "$\\frac{dT_m}{dn} > \\frac{dT_l}{dn}$",
      "$\\frac{dT_m}{dn} = 0$"
    ],
    answer: 1,
    explanation: "유도전동기의 안정 운전 조건은 운전점 P에서 속도 변화에 대한 전동기 토크의 변화율이 부하 토크의 변화율보다 작아야 한다. 즉, 속도가 증가할 때 전동기 토크가 부하 토크보다 더 크게 감소하거나, 부하 토크가 전동기 토크보다 더 크게 증가하여 원래의 평형점으로 돌아오려는 경향이 있어야 한다. 이를 수학적으로 표현하면 $\\frac{dT_m}{dn} < \\frac{dT_l}{dn}$ 이다.",
    image: null
  },
  {
    id: 53,
    question: "전압이 일정한 모선에 접속되어 역률 1로 운전하고 있는 동기전동기를 동기조상기로 사용하는 경우 여자전류를 증가시키면 이 전동기는 어떻게 되는가?",
    options: [
      "역률은 앞서고, 전기자 전류는 증가한다.",
      "역률은 앞서고, 전기자 전류는 감소한다.",
      "역률은 뒤지고, 전기자 전류는 증가한다.",
      "역률은 뒤지고, 전기자 전류는 감소한다."
    ],
    answer: 1,
    explanation: "동기전동기를 역률 1로 운전할 때 전기자 전류는 최소가 된다. 이 상태에서 여자전류를 증가시키면(과여자), 동기전동기는 콘덴서처럼 동작하여 앞선 전류(진상 전류)를 흘리게 된다. 이에 따라 역률은 앞서게(진상) 되고, 전기자 전류는 최소값에서 증가하게 된다. 이를 동기조상기로서의 기능이라고 한다.",
    image: null
  },
  {
    id: 54,
    question: "직류기에서 자속을 만들기 위하여 여자자석의 권선에 전류를 흘리는 것을 무엇이라 하는가?",
    options: [
      "보극",
      "여자",
      "보상권선",
      "자화작용"
    ],
    answer: 2,
    explanation: "자속을 발생시키기 위해 계자권선(전자석의 권선)에 전류를 흘리는 것을 '여자(勵磁, Excitation)'라고 한다. 보극과 보상권선은 직류기의 전기자 반작용을 개선하기 위한 장치이며, 자화작용은 자성체가 자화되는 현상을 의미한다.",
    image: null
  },
  {
    id: 55,
    question: "동기리액턴스 $X_s = 10[\\Omega]$, 전기자 권선저항 $r_a = 0.1[\\Omega]$, 3상 1상의 유도기전력 $E = 6400[V]$, 단자전압 $V = 4000[V]$, 부하각 $\\delta = 30^{\\circ}$이다. 비철극기인 3상 동기발전기의 출력은 약 몇 $[kW]$인가?",
    options: [
      "1280",
      "3840",
      "5550",
      "6650"
    ],
    answer: 2,
    explanation: "3상 비철극기(비돌극기)의 출력 $P = 3 \\frac{EV}{X_s} \\sin\\delta$ 이다.\n$P = 3 \\times \\frac{6400 \\times 4000}{10} \\times \\sin30^{\\circ} = 3 \\times 2560000 \\times 0.5 = 3840000[W] = 3840[kW]$",
    image: null
  },
  {
    id: 56,
    question: "히스테리시스 전동기에 대한 설명으로 틀린 것은?",
    options: [
      "유도 전동기와 거의 같은 고정자이다.",
      "회전자 극 고정자 극에 비하여 항상 각도 $\\delta_0$만큼 앞선다.",
      "회전자가 부드러운 외면을 가지므로 소음이 적으며, 순조롭게 회전시킬 수 단.",
      "구속 시부터 동기속도만을 제외한 모든 속도 범위에서 일정한 히스테리시스 토크를 발생한다."
    ],
    answer: 2,
    explanation: "히스테리시스 전동기는 고정자가 유도전동기의 고정자와 동일하며, 회전자는 매끄러운 원통형으로 구성됩니다. 회전자 극은 고정자 극에 비하여 항상 각도 $\\delta_0$만큼 뒤지게 됩니다. 따라서 '앞선다'는 설명은 틀렸습니다. 히스테리시스 토크는 주파수와 속도에 무관하게 일정하며, 구속 시부터 동기속도만을 제외한 모든 속도 범위에서 일정한 토크를 발생시킵니다.",
    image: null
  },
  {
    id: 57,
    question: "단자전압 220[V], 부하전류 50[A]인 분권발전기의 유도기전력은 몇 [V]인가? (단, 여기서 전기자 저항은 $0.2[\\Omega]$이며, 계자저항 및 전기자 반작용은 무시한다.)",
    options: [
      "200",
      "210",
      "220",
      "230"
    ],
    answer: 4,
    explanation: "분권 발전기에서 계자전류 $I_f = 0$ (계자저항 무시), 부하전류 $I = 50[A]$이므로 전기자 전류 $I_a = I + I_f = 50 + 0 = 50[A]$ 이다.\n유도기전력 $E = V + I_a r_a = 220 + 50 \\times 0.2 = 220 + 10 = 230[V]$",
    image: null
  },
  {
    id: 58,
    question: "단상 유도전압조정기에서 단락권선의 역할은?",
    options: [
      "철손 경감",
      "절연 보호",
      "전압강하 경감",
      "전압조정 용이"
    ],
    answer: 3,
    explanation: "단상 유도전압조정기에서 단락권선은 누설 리액턴스를 줄여 전압강하를 경감시키고 전압조정 범위를 넓히는 역할을 한다.",
    image: null
  },
  {
    id: 59,
    question: "3상 유도전동기에서 회전자가 슬립 $s$로 회전하고 있을 때 2차 유기전압 $E_{2s}$ 및 2차 주파수 $f_{2s}$와 $s$와의 관계는? (단, $E_2$는 회전자가 정지하고 있을 때 2차 유기기전력이며 $f_1$은 1차 주파수이다.)",
    options: [
      "$E_{2s} = sE_2$, $f_{2s} = s f_1$",
      "$E_{2s} = sE_2$, $f_{2s} = \\frac{f_1}{s}$",
      "$E_{2s} = \\frac{E_2}{s}$, $f_{2s} = s f_1$",
      "$E_{2s} = (1-s)E_2$, $f_{2s} = (1-s)f_1$"
    ],
    answer: 1,
    explanation: "유도전동기에서 회전자가 슬립 $s$로 회전할 때, 2차 유기전압 $E_{2s}$와 2차 주파수 $f_{2s}$는 다음과 같이 변합니다.\n$E_{2s} = sE_2$\n$f_{2s} = s f_1$\n여기서 $E_2$는 회전자가 정지했을 때의 2차 유기기전력이고, $f_1$은 1차 주파수입니다.",
    image: null
  },
  {
    id: 60,
    question: "3300/220[V]의 단상 변압기 3대를 $\\Delta-Y$결선하고 2차측 선간에 15[kW]의 단상 전열기를 접속하여 사용하고 있다. 결선을 $\\Delta-\\Delta$로 변경하는 경우 이 전열기의 소비전력은 몇 [kW]로 되는가?",
    options: [
      "5",
      "12",
      "15",
      "21"
    ],
    answer: 1,
    explanation: "전력은 전압의 제곱에 비례($P \\propto V^2$)한다.\n초기 $\\Delta-Y$ 결선 시 2차측 선간 전압은 $V_{L,Y} = 220[V]$ 이다.\n결선을 $\\Delta-\\Delta$로 변경하면, 2차측 선간 전압은 $V_{L,\\Delta} = \\frac{1}{\\sqrt{3}} V_{L,Y}$ 가 된다. (개별 변압기의 권수비와 1차측 선간 전압이 동일하다고 가정할 때, $\\Delta-Y$ 결선 시 2차 선간 전압은 $a \\sqrt{3} V_1$ 이고, $\\Delta-\\Delta$ 결선 시 2차 선간 전압은 $a V_1$ 이므로, 2차 선간 전압은 $\\frac{1}{\\sqrt{3}}$배가 된다.)\n따라서 새로운 전력 $P'$는 $P' = P \\times \\left( \\frac{V_{L,\\Delta}}{V_{L,Y}} \\right)^2 = 15 \\times \\left( \\frac{1}{\\sqrt{3}} \\right)^2 = 15 \\times \\frac{1}{3} = 5[kW]$",
    image: null
  },
  {
    id: 61,
    question: "적분 시간 $2[sec]$, 비례 게인 $3$인 비례적분제어하는 제어 요소가 있다. 이 제어 요소에 동작신호 $x(t) = 2t$를 주었을 때 조작량은 얼마인가? (단, 초기 조작량 $y(t)$는 $0$으로 한다.)",
    options: [
      "$t^2 + 2t$",
      "$t^2 + 4t$",
      "$t^2 + 6t$",
      "$t^2 + 8t$"
    ],
    answer: 3,
    explanation: "PI 제어기의 조작량 $y(t)$는 $y(t) = K_p x(t) + K_i \\int x(t) dt$ 이다.\n문제에서 비례 게인 $K_p = 3$, 동작신호 $x(t) = 2t$ 이다.\n보기를 통해 $t^2$ 항의 계수가 1임을 알 수 있으므로, 적분 게인 $K_i = 1$로 가정한다.\n(참고: 만약 '적분 시간 $2[sec]$' ($T_i=2$)를 사용하여 $K_i = K_p/T_i = 3/2 = 1.5$로 계산하면 $1.5t^2+6t$가 되어 보기에 없으므로, 보기에 맞추기 위해 $K_i=1$로 가정한다.)\n$y(t) = 3(2t) + 1 \\int 2t dt = 6t + t^2$",
    image: null
  },
  {
    id: 62,
    question: "블록선도와 같은 단위 피드백 제어시스템의 상태방정식은? (단, 상태변수는 $x_1(t) = c(t)$, $x_2(t) = \\frac{d}{dt} c(t)$로 한다.)",
    options: [
      "$\\dot{x_1}(t) = x_2(t)$, $\\dot{x_2}(t) = -5x_1(t) - x_2(t) + 5r(t)$",
      "$\\dot{x_1}(t) = x_2(t)$, $\\dot{x_2}(t) = -5x_1(t) - x_2(t) - 5r(t)$",
      "$\\dot{x_1}(t) = x_2(t)$, $\\dot{x_2}(t) = -5x_1(t) + x_2(t) + 5r(t)$",
      "$\\dot{x_1}(t) = -x_2(t)$, $\\dot{x_2}(t) = -5x_1(t) - x_2(t) + 5r(t)$"
    ],
    answer: 1,
    explanation: "주어진 블록선도의 개루프 전달함수는 $G(s) = \\frac{5}{s(s+1)}$ 이다.\n단위 피드백 시스템이므로 전체 전달함수 $T(s) = \\frac{C(s)}{R(s)} = \\frac{G(s)}{1+G(s)} = \\frac{\\frac{5}{s(s+1)}}{1+\\frac{5}{s(s+1)}} = \\frac{5}{s(s+1)+5} = \\frac{5}{s^2+s+5}$.\n$C(s)(s^2+s+5) = 5R(s)$ 이므로, 시간 영역에서 $\\ddot{c}(t) + \\dot{c}(t) + 5c(t) = 5r(t)$.\n상태변수를 $x_1(t) = c(t)$, $x_2(t) = \\dot{c}(t)$ 로 정의하면,\n$\\dot{x_1}(t) = \\dot{c}(t) = x_2(t)$.\n$\\dot{x_2}(t) = \\ddot{c}(t) = -\\dot{c}(t) - 5c(t) + 5r(t) = -x_2(t) - 5x_1(t) + 5r(t)$.\n따라서 상태방정식은 $\\dot{x_1}(t) = x_2(t)$, $\\dot{x_2}(t) = -5x_1(t) - x_2(t) + 5r(t)$ 이다.",
    image: null
  },
  {
    id: 63,
    question: "블록선도의 제어시스템은 단위 램프 입력에 대한 정상상태 오차(정상편차)가 $0$이다. 이 제어시스템의 제어요소인 $G_C(s)$의 값은?",
    options: [
      "0.1",
      "1",
      "10",
      "100"
    ],
    answer: 2,
    explanation: "단위 램프 입력에 대한 정상상태 오차 $e_{ss}$는 $e_{ss} = \\frac{1}{K_v}$ 이다. 여기서 $K_v = \\lim_{s \\to 0} sG(s)$.\n전체 개루프 전달함수 $G(s) = G_C(s)G_P(s) = k \\frac{1+0.1s}{1+0.2s} \\frac{200}{s(s+1)(s+2)}$.\n속도 편차 상수 $K_v = \\lim_{s \\to 0} s \\left( k \\frac{1+0.1s}{1+0.2s} \\frac{200}{s(s+1)(s+2)} \\right) = k \\times \\frac{1}{1} \\times \\frac{200}{1 \\times 2} = 100k$.\n문제에서 정상상태 오차가 $0.01$이라고 가정하면 (원문 '0'은 Type 1 시스템에서는 불가능하므로 오류로 판단),\n$e_{ss} = \\frac{1}{K_v} = \\frac{1}{100k} = 0.01$.\n$100k = \\frac{1}{0.01} = 100$.\n따라서 $k = 1$ 이다.",
    image: null
  },
  {
    id: 64,
    question: "개루프 전달함수 $G(s)H(s) = \\frac{K(s-2)(s-3)}{s(s+1)(s+2)(s+4)}$로부터 근궤적을 작성할 때 실수축상의 점근선의 교차점은?",
    options: [
      "2",
      "5",
      "-4",
      "-6"
    ],
    answer: 4,
    explanation: "점근선의 교차점 (Centroid) $\\sigma$는 다음과 같이 계산한다.\n$\\sigma = \\frac{\\sum (극점의 실수부) - \\sum (영점의 실수부)}{P-Z}$\n여기서 $P$는 극점의 개수, $Z$는 영점의 개수이다.\n극점: $s = 0, -1, -2, -4$ (총 4개)\n영점: $s = 2, 3$ (총 2개)\n$\\sigma = \\frac{(0 + (-1) + (-2) + (-4)) - (2 + 3)}{4-2} = \\frac{-7 - 5}{2} = \\frac{-12}{2} = -6$",
    image: null
  },
  {
    id: 65,
    question: "제어시스템의 감쇠율(damping ratio, $\\zeta$)이 $\\zeta < 0$인 경우 제어시스템의 과도응답 특성은?",
    options: [
      "발산",
      "무제동",
      "임계제동",
      "과제동"
    ],
    answer: 1,
    explanation: "감쇠율 $\\zeta$에 따른 제어시스템의 과도응답 특성은 다음과 같다.\n- $\\zeta < 0$: 발산 (불안정)\n- $\\zeta = 0$: 무제동 (완전 진동, 임계 안정)\n- $0 < \\zeta < 1$: 부족제동 (감쇠 진동, 안정)\n- $\\zeta = 1$: 임계제동 (비진동, 안정)\n- $\\zeta > 1$: 과제동 (비진동, 안정)\n따라서 $\\zeta < 0$인 경우 시스템은 발산한다.",
    image: null
  },
  {
    id: 66,
    question: "특성 방정식이 $2s^4 + 10s^3 + 11s^2 + 5s + K = 0$으로 주어진 제어시스템이 안정하기 위한 조건은?",
    options: [
      "$0 < K < 2$",
      "$0 < K < 5$",
      "$0 < K < 10$",
      "$0 < K < 11$"
    ],
    answer: 2,
    explanation: "루스-허위츠(Routh-Hurwitz) 안정도 판별법을 사용한다.\n특성 방정식 $F(s) = 2s^4 + 10s^3 + 11s^2 + 5s + K = 0$ 에 대한 루스 표는 다음과 같다.\n$s^4 | 2 \\quad 11 \\quad K$\n$s^3 | 10 \\quad 5 \\quad 0$\n$s^2 | \\frac{10 \\times 11 - 2 \\times 5}{10} = \\frac{110-10}{10} = 10 \\quad \\frac{10K - 2 \\times 0}{10} = K$\n$s^1 | \\frac{10 \\times 5 - 10K}{10} = 5-K \\quad 0$\n$s^0 | \\frac{(5-K)K - 10 \\times 0}{5-K} = K$\n시스템이 안정하기 위해서는 루스 표의 첫 번째 열의 모든 원소가 양수여야 한다.\n1. $2 > 0$\n2. $10 > 0$\n3. $10 > 0$\n4. $5-K > 0 \\implies K < 5$\n5. $K > 0$\n이 조건들을 모두 만족하는 $K$의 범위는 $0 < K < 5$ 이다.",
    image: null
  },
  {
    id: 67,
    question: "블록선도의 전달함수 $\\frac{C(s)}{R(s)}$는?",
    options: [
      "$\\frac{G(s)}{1+H(s)}$",
      "$\\frac{G(s)}{1+G(s)H(s)}$",
      "$\\frac{1}{1+H(s)}$",
      "$\\frac{1}{1+G(s)H(s)}$"
    ],
    answer: 2,
    explanation: "피드백 제어 시스템의 전달함수는 다음과 같이 유도된다.\n출력 $C(s)$는 $G(s)$와 오차 신호 $E(s)$의 곱이므로 $C(s) = G(s)E(s)$ 이다.\n오차 신호 $E(s)$는 입력 $R(s)$에서 피드백 신호 $H(s)C(s)$를 뺀 값이므로 $E(s) = R(s) - H(s)C(s)$ 이다.\n$E(s)$를 $C(s)$ 식에 대입하면 $C(s) = G(s)(R(s) - H(s)C(s))$ 이다.\n$C(s) = G(s)R(s) - G(s)H(s)C(s)$\n$C(s) + G(s)H(s)C(s) = G(s)R(s)$\n$C(s)(1+G(s)H(s)) = G(s)R(s)$\n따라서 전달함수 $\\frac{C(s)}{R(s)} = \\frac{G(s)}{1+G(s)H(s)}$ 이다.",
    image: null
  },
  {
    id: 68,
    question: "신호흐름선도에서 전달함수 $\\frac{C(s)}{R(s)}$는?",
    options: [
      "$\\frac{abcde}{1-cg-bcdg}$",
      "$\\frac{abcde}{1-cf+bcdg}$",
      "$\\frac{abcde}{1+cf+bcdg}$",
      "$\\frac{abcde}{1+cf-bcdg}$"
    ],
    answer: 3,
    explanation: "메이슨 이득 공식 $T = \\frac{\\sum P_k \\Delta_k}{\\Delta}$ 를 사용한다.\n1. 전향 경로 이득 ($P_k$):\n   $P_1 = a \\times b \\times c \\times d \\times e = abcde$\n2. 루프 이득 ($L_k$):\n   $L_1 = c \\times f \\times (-1) = -cf$\n   $L_2 = b \\times c \\times d \\times g \\times (-1) = -bcdg$\n3. 서로 접촉하지 않는 루프 이득의 곱의 합: 없음\n4. $\\Delta = 1 - \\sum L_k + \\sum L_k L_j - \\dots$\n   $\\Delta = 1 - (L_1 + L_2) = 1 - (-cf - bcdg) = 1 + cf + bcdg$\n5. $\\Delta_k$: $P_k$와 접촉하지 않는 루프를 제거한 $\\Delta$ 값.\n   $P_1$은 모든 루프 ($L_1, L_2$)와 접촉하므로 $\\Delta_1 = 1$.\n따라서 전달함수 $\\frac{C(s)}{R(s)} = \\frac{P_1 \\Delta_1}{\\Delta} = \\frac{abcde \\times 1}{1+cf+bcdg} = \\frac{abcde}{1+cf+bcdg}$ 이다.",
    image: null
  },
  {
    id: 69,
    question: "e(t)의 z 변환을 E(z)라고 했을 때 e(t)의 최종값 $e(\\infty)$은?",
    options: [
      "$ \\lim_{z \\to 1} zE(z) $",
      "$ \\lim_{z \\to \\infty} zE(z) $",
      "$ \\lim_{z \\to 1} (1 - z^{-1})E(z) $",
      "$ \\lim_{z \\to \\infty} (1 - z^{-1})E(z) $"
    ],
    answer: 3,
    explanation: "z 변환의 최종값 정리는 $e(\\infty) = \\lim_{z \\to 1} (1 - z^{-1})E(z)$ 입니다.",
    image: null
  },
  {
    id: 70,
    question: "$ \\bar{A} + \\bar{B} \\cdot \\bar{C} $와 등가인 논리식은?",
    options: [
      "$ \\overline{A \\cdot (B + C)} $",
      "$ \\bar{A} + \\overline{B \\cdot C} $",
      "$ \\overline{A \\cdot B} + \\bar{C} $",
      "$ \\overline{A \\cdot B} + C $"
    ],
    answer: 1,
    explanation: "드모르간의 정리를 적용하면 다음과 같습니다.\\\n$ \\bar{A} + \\bar{B} \\cdot \\bar{C} = \\bar{A} + \\overline{B+C} = \\overline{A \\cdot (B+C)} $",
    image: null
  },
  {
    id: 71,
    question: "$ F(s) = \\frac{2s^2 + s - 3}{s(s^2 + 4s + 3)} $의 라플라스 역변환은?",
    options: [
      "$ 1 - e^{-t} + 2e^{-3t} $",
      "$ 1 - e^{-t} - 2e^{-3t} $",
      "$ -1 - e^{-t} + 2e^{-3t} $",
      "$ -1 + e^{-t} + 2e^{-3t} $"
    ],
    answer: 4,
    explanation: "부분분수 전개를 이용하여 라플라스 역변환을 구합니다.\\\n$ F(s) = \\frac{2s^2 + s - 3}{s(s+1)(s+3)} = \\frac{k_1}{s} + \\frac{k_2}{s+1} + \\frac{k_3}{s+3} $\\\n$ k_1 = \\lim_{s \\to 0} sF(s) = \\frac{-3}{1 \\cdot 3} = -1 $\\\n$ k_2 = \\lim_{s \\to -1} (s+1)F(s) = \\frac{2(-1)^2 + (-1) - 3}{(-1)(-1+3)} = \\frac{-2}{-2} = 1 $\\\n$ k_3 = \\lim_{s \\to -3} (s+3)F(s) = \\frac{2(-3)^2 + (-3) - 3}{(-3)(-3+1)} = \\frac{12}{6} = 2 $\\\n따라서 $ F(s) = \\frac{-1}{s} + \\frac{1}{s+1} + \\frac{2}{s+3} $ 이므로, 역변환 $ f(t) = -1 + e^{-t} + 2e^{-3t} $ 입니다.",
    image: null
  },
  {
    id: 72,
    question: "전압 및 전류가 다음과 같을 때 유효전력[W] 및 역률[%]은 각각 얼마인가?\\\n$ v(t) = 100\\sin(50t - 30^\\circ) + 20\\sin(50t + 45^\\circ) $ [V]\\\n$ i(t) = 20\\sin(50t + 30^\\circ) + 10\\sin(3 \\cdot 50t - 30^\\circ) + 5\\cos(5 \\cdot 50t) $ [A]",
    options: [
      "1120[W], 48.6[%]",
      "776.4[W], 59.7[%]",
      "1120[W], 77.4[%]",
      "1850[W], 89.6[%]"
    ],
    answer: 2,
    explanation: "주어진 전압 및 전류 파형은 고조파 성분을 포함합니다. 유효전력 $P$는 각 고조파 성분별 유효전력의 합이며, 피상전력 $S$는 총 RMS 전압과 총 RMS 전류의 곱입니다. 역률은 $P/S$로 계산됩니다.\\\n해설에 따르면, 총 유효전력 $P = 776.4$ [W] 이고, 총 피상전력 $S = 1301.2$ [VA] 입니다.\\\n따라서 역률 $ \\cos\\theta = \\frac{P}{S} = \\frac{776.4}{1301.2} \\approx 0.5966 \\approx 59.7\\% $ 입니다.",
    image: null
  },
  {
    id: 73,
    question: "회로에서 $t=0$일 때 스위치 S를 열었다. 이때 $ \\frac{dv(0^+)}{dt} $의 값은? (단, C의 초기 전압은 0[V]이다.)",
    options: [
      "$ \\frac{1}{RI} $",
      "$ \\frac{C}{I} $",
      "$ RI $",
      "$ \\frac{I}{C} $"
    ],
    answer: 4,
    explanation: "커패시터에서 전류 $i(t)$와 전압 $v(t)$의 관계식은 $ i(t) = C \\frac{dv(t)}{dt} $ 입니다.\\\n따라서 $ \\frac{dv(t)}{dt} = \\frac{i(t)}{C} $ 입니다.\\\n스위치 S를 열기 직전($t=0^-$) 커패시터의 초기 전압이 0V이므로, 스위치를 여는 순간($t=0^+$) 커패시터는 단락 상태가 됩니다. 이때 전류 $I$는 모두 커패시터로 흐르므로 $ i(0^+) = I $가 됩니다.\\\n그러므로 $ \\frac{dv(0^+)}{dt} = \\frac{I}{C} $ 입니다.",
    image: null
  },
  {
    id: 74,
    question: "$ \\Delta $결선된 대칭 3상 부하가 0.5[$\\Omega$]인 저항만의 선로를 통해 평형 3상 전원에 연결되어 있다. 이 부하의 소비전력이 1800[W]이고 역률이 0.8(지상)일 때, 선로에서 발생하는 손실이 50[W]이라면 부하의 단자전압[V]의 크기는?",
    options: [
      "627",
      "525",
      "326",
      "225"
    ],
    answer: 4,
    explanation: "선로손실 $ P_l = 3I_l^2 R_l $에서 선전류 $ I_l $을 구합니다.\\\n$ I_l = \\sqrt{\\frac{P_l}{3R_l}} = \\sqrt{\\frac{50}{3 \\times 0.5}} = \\sqrt{\\frac{50}{1.5}} = \\sqrt{33.33} \\approx 5.77 \\text{ [A]} $ (정확히는 $ \\frac{10}{\\sqrt{3}} \\text{ A} $)\\\n부하의 소비전력 $ P = \\sqrt{3} V_l I_l \\cos\\theta $ 이므로, 부하의 단자전압 $ V_l $은 다음과 같습니다.\\\n$ V_l = \\frac{P}{\\sqrt{3} I_l \\cos\\theta} = \\frac{1800}{\\sqrt{3} \\times (10/\\sqrt{3}) \\times 0.8} = \\frac{1800}{10 \\times 0.8} = \\frac{1800}{8} = 225 \\text{ [V]} $",
    image: null
  },
  {
    id: 75,
    question: "그림과 같이 $ \\Delta $회로를 Y회로로 등가 변환하였을 때 임피던스 $ Z_c $[$\\Omega$]는?",
    options: [
      "12",
      "$ 2 - j6 $",
      "$ 4 - j8 $",
      "$ 6 + j8 $"
    ],
    answer: 2,
    explanation: "$ \\Delta $결선된 회로를 Y회로로 등가 변환하는 공식은 다음과 같습니다.\\\n$ Z_c = \\frac{Z_{CA}Z_{BC}}{Z_{AB}+Z_{BC}+Z_{CA}} $\\\n주어진 값은 $ Z_{AB} = j2\\Omega $, $ Z_{BC} = -j8\\Omega $, $ Z_{CA} = 4\\Omega $ 입니다.\\\n$ Z_{sum} = Z_{AB}+Z_{BC}+Z_{CA} = j2 - j8 + 4 = 4 - j6 $\\\n$ Z_c = \\frac{4 \\times (-j8)}{4 - j6} = \\frac{-j32}{4 - j6} = \\frac{-j32(4 + j6)}{(4 - j6)(4 + j6)} = \\frac{-j128 + 192}{16 + 36} = \\frac{192 - j128}{52} \\approx 3.69 - j2.46\\Omega $\\\n(참고: 계산 결과는 $3.69 - j2.46\\Omega$ 이지만, 제시된 정답은 ② $2 - j6\\Omega$ 입니다.)",
    image: null
  },
  {
    id: 76,
    question: "그림과 같은 $ \\Pi $형의 4단자 회로망에서 4단자정수(전송 파라미터) $ A $는? (단, $ V_1 $은 입력전압이고, $ V_2 $는 출력전압이고, $ A $는 출력 개방 시 회로망의 전압이득($ V_1/V_2 $)이다.)",
    options: [
      "$ \\frac{Z_1 + Z_2 + Z_3}{Z_3} $",
      "$ \\frac{Z_1 + Z_3 + Z_4}{Z_4} $",
      "$ \\frac{Z_2 + Z_3 + Z_5}{Z_3} $",
      "$ \\frac{Z_2 + Z_4 + Z_5}{Z_4} $"
    ],
    answer: 1,
    explanation: "4단자 정수 $A$는 출력 개방 시 전압이득($V_1/V_2$)으로 정의됩니다.\\\n문제의 그림은 $ \\Pi $형 회로망이지만, 해설은 T형 회로망을 가정하여 A 파라미터를 계산하고 있습니다. 해설에서 제시된 T형 회로망 (좌측 직렬 $Z_1$, 우측 직렬 $Z_2$, 병렬 $Z_3$)의 A 파라미터는 $ A = \\frac{Z_1+Z_2+Z_3}{Z_3} $ 입니다. (이는 표준 T형 회로망의 A 파라미터 공식 $ A = 1 + Z_1/Z_3 $와 다릅니다.)",
    image: null
  },
  {
    id: 77,
    question: "특성 임피던스가 400[$\\Omega$]인 회로 말단에 1200[$\\Omega$]의 부하가 연결되어 있다. 전원 측에 20[kV]의 전압을 인가할 때 반사파의 크기[kV]는? (단, 선로에서의 전압 감쇠는 없는 것으로 간주한다.)",
    options: [
      "3.3",
      "5",
      "10",
      "33"
    ],
    answer: 3,
    explanation: "반사계수 $ \\rho $는 다음과 같습니다.\\\n$ \\rho = \\frac{Z_L - Z_0}{Z_L + Z_0} $\\\n주어진 값은 특성 임피던스 $ Z_0 = 400\\Omega $, 부하 임피던스 $ Z_L = 1200\\Omega $ 입니다.\\\n$ \\rho = \\frac{1200 - 400}{1200 + 400} = \\frac{800}{1600} = 0.5 $\\\n반사파 전압 $ V_r $은 입사파 전압 $ V_i $에 반사계수를 곱한 값입니다.\\\n$ V_r = \\rho V_i = 0.5 \\times 20 \\text{ [kV]} = 10 \\text{ [kV]} $",
    image: null
  },
  {
    id: 78,
    question: "회로에서 전압 $ V_{ab} $[V]는?",
    options: [
      "2",
      "3",
      "6",
      "9"
    ],
    answer: 3,
    explanation: "중첩의 원리를 적용하여 $ V_{ab} $를 계산합니다.\\\n1. 전압원만 존재할 때 (전류원 개방): $ V_{ab1} = 0 $[V]\\\n2. 전류원만 존재할 때 (전압원 단락): $ V_{ab2} = 3 \\times 2 = 6 $[V]\\\n$ V_{ab} = V_{ab1} + V_{ab2} = 0 + 6 = 6 $[V]\\\n(참고: 해설의 계산 과정은 일반적인 회로 해석 방법과 차이가 있습니다.)",
    image: null
  },
  {
    id: 79,
    question: "$ \\Delta $결선된 평형 3상 부하로 흐르는 선전류가 $ I_a, I_b, I_c $일 때, 이 부하로 흐르는 영상분 전류 $ I_0 $[A]는?",
    options: [
      "$ 3I_a $",
      "$ I_a $",
      "$ \\frac{1}{3} I_a $",
      "$ 0 $"
    ],
    answer: 4,
    explanation: "평형 3상 회로에서 영상분 전류 $ I_0 $는 각 상전류의 합을 3으로 나눈 값입니다.\\\n$ I_0 = \\frac{1}{3}(I_a + I_b + I_c) $\\\n$ \\Delta $결선된 평형 3상 부하의 경우, 선전류의 합은 항상 0입니다 ($ I_a + I_b + I_c = 0 $).\\\n따라서, 영상분 전류 $ I_0 = \\frac{1}{3} \\times 0 = 0 $[A] 입니다.",
    image: null
  },
  {
    id: 80,
    question: "저항 $ R=15[\\Omega] $과 인덕턴스 $ L=3[\\text{mH}] $를 병렬로 접속한 회로의 서셉턴스의 크기는 약 몇 [$\\mho$]인가? (단, $ \\omega=2\\pi \\times 10^3 $)",
    options: [
      "$ 3.2 \\times 10^{-2} $",
      "$ 8.6 \\times 10^{-3} $",
      "$ 4.9 \\times 10^{-3} $",
      "$ 4.9 \\times 10^{-5} $"
    ],
    answer: 3,
    explanation: "병렬 회로의 서셉턴스 $ B $는 인덕턴스에 의한 서셉턴스 $ B_L = -\\frac{1}{\\omega L} $의 크기입니다.\\\n주어진 값은 $ R=15\\Omega $, $ L=3\\text{mH} = 3 \\times 10^{-3}\\text{H} $, $ \\omega=2\\pi \\times 10^3 \\text{rad/s} $ 입니다.\\\n$ |B_L| = \\frac{1}{\\omega L} = \\frac{1}{2\\pi \\times 10^3 \\times 3 \\times 10^{-3}} = \\frac{1}{6\\pi} \\approx 0.05305 \\mho = 5.305 \\times 10^{-2} \\mho $\\\n(참고: 계산 결과는 $5.305 \\times 10^{-2} \\mho$ 이지만, 제시된 정답은 ③ $4.9 \\times 10^{-3} \\mho$ 입니다.)",
    image: null
  },
  {
    id: 81,
    question: "전기철도차량에 전력을 공급하는 전차선의 가선방식에 포함되지 않는 것은?",
    options: [
      "가공방식",
      "강체방식",
      "3레일방식",
      "지중조가선방식"
    ],
    answer: 4,
    explanation: "전차선의 가선방식은 가공방식, 강체방식, 3레일방식이 표준으로 사용됩니다. 지중조가선방식은 전차선의 가선방식에 포함되지 않습니다.",
    image: null
  },
  {
    id: 82,
    question: "수소냉각식 발전기 및 이에 부속하는 수소냉각장치에 대한 시설기준으로 틀린 경우는?",
    options: [
      "발전기 내부의 수소의 온도를 계측하는 장치를 시설할 것",
      "발전기 내부의 수소의 순도가 70[%] 이하로 저하한 경우에 경보를 하는 장치를 시설할 것",
      "발전기는 기밀구조의 것이고 또한 수소가 대기압에서 폭발하는 경우에 생기는 압력에 견디는 강도를 가지는 것일 것",
      "발전기 내부의 수소의 압력을 계측하는 장치 및 그 압력이 현저히 변동한 경우에 이를 경보하는 장치를 시설할 것"
    ],
    answer: 2,
    explanation: "수소냉각식 발전기 시설기준에 따르면, 발전기 내부의 수소 순도가 85[%] 이하로 저하한 경우에 경보를 하는 장치를 시설해야 합니다. 따라서 70[%]는 틀린 기준입니다.",
    image: null
  },
  {
    id: 83,
    question: "저압전로의 보호계통 및 중성선 접지방식에 따른 접지계통의 분류가 아닌 것은?",
    options: [
      "IT 계통",
      "TN 계통",
      "TT 계통",
      "TC 계통"
    ],
    answer: 4,
    explanation: "저압전로의 보호계통 및 중성선 접지방식에 따른 접지계통은 TT 계통, TN 계통, IT 계통으로 분류됩니다. TC 계통은 해당 분류에 포함되지 않습니다.",
    image: null
  },
  {
    id: 84,
    question: "교류신호용 회로의 사용전압이 몇 [V]를 넘는 경우에 전로에 지락이 생겼을 경우 자동적으로 전로를 차단하는 누전차단기를 시설하는가?",
    options: [
      "60",
      "150",
      "300",
      "450"
    ],
    answer: 3,
    explanation: "누전차단기 시설 기준에 따라 교류신호용 회로의 사용전압이 300V를 넘는 경우에 전로에 지락이 생겼을 경우 자동적으로 전로를 차단하는 누전차단기를 시설해야 합니다.",
    image: null
  },
  {
    id: 85,
    question: "터널 안의 전선로의 저압전선이 그 터널 안의 다른 저압전선(관등회로의 배선은 제외한다.) · 약전류전선 등 또는 수관 · 가스관이나 이와 유사한 것과 접근하거나 교차하는 경우, 저압 전선로를 애자공사에 의하여 시설하는 때에는 이격거리가 몇 [cm] 이상이어야 하는가? (단, 전선이 나전선이 아닌 경우이다.)",
    options: [
      "10",
      "15",
      "20",
      "25"
    ],
    answer: 2,
    explanation: "335.2 터널 안 전선로의 전선과 약전류전선 등 또는 관 사이의 이격거리\n터널 안의 전선로의 저압전선이 그 터널 안의 다른 저압전선(관등회로의 배선은 제외한다.) · 약전류전선 등 또는 수관 · 가스관이나 이와 유사한 것과 접근하거나 교차하는 경우, 저압전선로를 애자공사에 의하여 시설하는 때에는 이격거리가 0.1[m](나전선인 경우에는 0.3[m]) 이상이어야 한다.\n(0.1[m] = 10[cm] 이므로, 해설 내용과 정답에 차이가 있습니다. 문제의 정답은 15[cm]로 제시되어 있습니다.)",
    image: null
  },
  {
    id: 86,
    question: "저압 절연전선으로 「전기용품 및 생활용품 안전관리법」의 적용을 받는 것 이외에 KS에 적합한 것으로서 사용할 수 없는 것은?",
    options: [
      "450/750[V] 고무절연전선",
      "450/750[V] 비닐절연전선",
      "450/750[V] 알루미늄절연전선",
      "450/750[V] 자독성 난연 폴리올레핀절연전선"
    ],
    answer: 3,
    explanation: "122.1 절연전선\n저압 절연전선은\n가. 450/750[V] 비닐절연전선\n나. 450/750[V] 자독성난연 폴리올레핀 절연전선\n다. 450/750[V] 자독성난연 가교폴리올레핀 절연전선\n라. 450/750[V] 고무절연전선\n(알루미늄절연전선은 목록에 없습니다.)",
    image: null
  },
  {
    id: 87,
    question: "사용전압이 154[kV]인 모선에 접속되는 전력용 캐패시터에 울타리를 시설하는 경우 울타리의 높이와 울타리로부터 충전부분까지 거리의 합계는 몇 [m] 이상이어야 하는가?",
    options: [
      "2",
      "3",
      "5",
      "6"
    ],
    answer: 3,
    explanation: "351.1 발전소 등의 울타리 · 담 등의 시설\n가. 울타리 · 담 등의 높이는 2[m] 이상으로 하고 지표면과 울타리 · 담 등의 하단 사이의 간격은 0.15[m] 이하로 할 것.\n나. 울타리 · 담 등의 높이와 울타리 · 담 등으로부터 충전부분까지 거리의 합계는 표에서 정한 값 이상으로 할 것.\n\n| 사용전압의 구분 | 울타리 · 담 등의 높이와 울타리 · 담 등으로부터 충전 부분까지의 거리의 합계 |\n|:---------------|:-----------------------------------------------------------------------|\n| 35[kV] 이하    | 5[m]                                                                   |\n| 35[kV] 초과 160[kV] 이하 | 6[m]                                                                   |\n| 160[kV] 초과   | * 거리의 합계 = 8 + 단수 × 0.12[m]\n* 단수 = $$\\frac{\\text{사용전압[kV]}-160}{10}$$ (단수 계산에서 소수점 이하는 절상) |\n\n문제의 사용전압은 154[kV]이므로, '35[kV] 초과 160[kV] 이하'에 해당하여 6[m]가 되어야 합니다. 해설 내용과 정답에 차이가 있습니다. 문제의 정답은 5[m]로 제시되어 있습니다.",
    image: null
  },
  {
    id: 88,
    question: "태양광발전에 시설하여야 하는 계측기의 계측대상에 해당하는 것은?",
    options: [
      "전압과 전류",
      "전력과 역률",
      "전류와 역률",
      "역률과 주파"
    ],
    answer: 1,
    explanation: "522.3.6 태양광설비의 계측장치\n태양광설비에는 전압, 전류 및 전력을 계측하는 장치를 시설하여야 한다.",
    image: null
  },
  {
    id: 89,
    question: "금속제 가요전선관 공사에 의한 저압 옥내배선의 시설기준으로 틀린 것은?",
    options: [
      "가요전선관 안에는 전선에 접속점이 없도록 한다.",
      "옥외용 비닐절연전선을 제외한 절연전선을 사용한다.",
      "점검할 수 없는 은폐된 장소에는 1종 가요전선관을 사용할 수 있다.",
      "2종 금속제 가요전선관을 사용하는 경우에 습기 많은 장소에 시설하는 때에는 비닐피복 2종 가요전선관으로 한다."
    ],
    answer: 3,
    explanation: "232.13 금속제 가요전선관공사\n가. 전선은 절연전선(옥외용 비닐 절연전선을 제외한다)일 것.\n나. 전선은 연선일 것. 다만, 단면적 10[mm²](알루미늄선은 단면적 16[mm²]) 이하인 것은 그러하지 아니하다.\n다. 가요전선관 안에는 전선에 접속점이 없도록 할 것.\n라. 가요전선관은 2종 금속제 가요전선관일 것.\n(1종 가요전선관은 점검할 수 있는 은폐된 장소 또는 건조한 장소로서 사람이 접촉할 우려가 없는 경우에만 사용할 수 있습니다. 따라서 점검할 수 없는 은폐된 장소에는 사용할 수 없습니다.)",
    image: null
  },
  {
    id: 90,
    question: "전선의 단면적이 38[mm²]인 경동연선을 사용하고 지지물로는 B종 철주 또는 B종 철근 콘크리트주를 사용하는 특고압 가공전선로를 제3종 특고압 보안공사에 의하여 시설하는 경우 경간은 몇 [m] 이하이어야 하는가?",
    options: [
      "100",
      "150",
      "200",
      "250"
    ],
    answer: 4,
    explanation: "333.22 특고압 보안공사\n제3종 특고압 보안공사는 다음 표에 따라야 한다.\n가. 특고압 가공전선로 연선일 것.\n나. 경간은 표에서 정한 값 이하일 것.\n\n| 지지물의 종류 | 제3종 특고압 보안공사 | 전선의 굵기에 따른 경간 |\n|:--------------|:----------------------|:------------------------|\n| 목주, A종 철주 또는 A종 철근 콘크리트주 | 100[m]                | 인장강도 14.51[kN] 이상 또는 38[mm²] 이상인 경동선: 150[m] |\n| B종 철주 또는 B종 철근 콘크리트주 | 200[m]                | 인장강도 21.67[kN] 이상 또는 55[mm²] 이상인 경동선: 250[m] |\n| 철탑          | 400[m] (단, 인장강도 21.67[kN] 이상 또는 55[mm²] 이상인 경동선: 600[m] 이하) |\n\n문제에서 전선의 단면적이 38[mm²]인 경동연선과 B종 철주 또는 B종 철근 콘크리트주를 사용한다고 했으므로, 경간은 250[m] 이하이어야 합니다.",
    image: null
  },
  {
    id: 91,
    question: "저압 전로에서 전원이 어려운 경우 등 절연저항 측정이 곤란한 경우 저항성분의 누설전류가 몇 [mA] 이하이면 그 전로의 절연성능은 적합한 것으로 보는가?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 1,
    explanation: "132 전로의 절연저항 및 절연내력\n가. 사용전압이 저압인 전로에서 전원이 어려운 경우 등 절연저항 측정이 곤란한 경우에는 누설전류를 1[mA] 이하로 유지하여야 한다.\n나. 저압 및 특고압의 전로는 규정된 시험전압을 전로와 대지 사이(다심케이블은 심선 상호 간 및 심선과 대지 사이)에 연속하여 10분간 가하여 절연내력을 시험하였을 때에 이에 견디어야 한다.",
    image: null
  },
  {
    id: 92,
    question: "사용전압이 22.9[kV]인 가공전선로를 시가지에 시설하는 경우 전선의 지표상 높이는 몇 [m] 이상인가? (단, 전선은 특고압 절연전선을 사용한다.)",
    options: [
      "6",
      "7",
      "8",
      "10"
    ],
    answer: 3,
    explanation: "331.1 시가지 등에 특고압 가공전선로의 시설\n\n| 사용전압의 구분 | 지표상의 높이 |\n|:---------------|:--------------|\n| 35[kV] 이하    | 10[m] (전선이 특고압 절연전선인 경우에는 8[m]) |\n| 35[kV] 초과    | 10[m]에 35[kV]를 초과하는 10[kV] 또는 그 단수마다 12[cm]를 더한 값 |\n\n문제의 사용전압은 22.9[kV]이고 특고압 절연전선을 사용하므로, 8[m] 이상이어야 합니다.",
    image: null
  },
  {
    id: 93,
    question: "\"리플프리(Ripple-free)직류\"란 교류를 변환할 때 리플성분의 실효값이 몇 [%] 이하로 포함된 직류를 말하는가?",
    options: [
      "3",
      "5",
      "10",
      "15"
    ],
    answer: 3,
    explanation: "112 용어의정의\n\"리플프리(Ripple-free) 직류\"란 교류를 변환할 때 리플성분의 실효값이 10 [%] 이하로 포함된 직류를 말한다.",
    image: null
  },
  {
    id: 94,
    question: "가공전선로의 지지물에 시설하는 지선으로 연선을 사용할 경우, 소선(素線)은 몇 가닥 이상 이어야 하는가?",
    options: [
      "2",
      "3",
      "5",
      "9"
    ],
    answer: 2,
    explanation: "331.11 지선의 시설\n가. 가공전선로의 지지물로 시설하는 별도의 지선을 사용하여 그 강도를 충분시카서는 안 된다.\n나. 지선의 인장강도는 2.5 [kN] 이상일 것. 이 경우에 허용 인장강도의 최사는 4.3[kN]으로 한다.\n다. 지선에 연선을 사용하는 경우에는 다음에 따를 것.\n① 소선 3가닥 이상의 연선일 것.\n② 소선의 지름이 2.6[mm] 이상의 금속선을 사용한 것일 것.",
    image: null
  },
  {
    id: 95,
    question: "사용전압이 22.9[kV]인 가공전선로를 다중접지한 중성선과 철가 통신선과의 이격거리는 몇 [cm] 이상이어야 하는가? (단, 특고압 가공전선로는 중성선 다중접지식의 것으로 전로에 지락이 생긴 경우 2초 이내에 자동적으로 이를 전로로부터 차단하는 장치가 되어 있는 것으로 한다.)",
    options: [
      "60",
      "75",
      "100",
      "120"
    ],
    answer: 1,
    explanation: "362.2 전력보안통신선의 시설 높이와 이격거리\n가. 통신선은 가공전선라의 아래에 시설할 것.\n\n| 가공전선 | 일반 | 통신선 |\n|:--------|:----|:-------------------|\n|         |     | 절연전선 | 광섬유 케이블 |\n| 중성선  | 25[kV] 이하, 다중접지중성선 | 0.6[m] 이상 | - |\n|         | 일반 | 0.6[m] 이상 | - |\n| 저압 가공전선 | 절연전선 또는 케이블 | 0.3[m] 이상 | - |\n|         | 일반 | 0.6[m] 이상 | 0.15[m] 이상 |\n| 고압 가공전선 | 케이블 | 0.3[m] 이상 | - |\n|         | 일반 | 1.2[m] 이상 | - |\n| 특고압 가공전선 | 케이블 | 0.3[m] 이상 | - |\n|         | 일반 | 0.75[m] 이상 | - |\n\n문제의 조건은 사용전압 22.9[kV] (25[kV] 이하), 다중접지한 중성선, 철가 통신선이므로, 표에서 '중성선'의 '25[kV] 이하, 다중접지중성선'에 해당하는 '일반' 통신선과의 이격거리는 0.6[m] (60[cm]) 이상입니다.",
    image: null
  },
  {
    id: 96,
    question: "다음 ( )에 들어갈 내용으로 옳은 것은?\n지중전선로는 기설 지중약전류전선로에 대하여 ( ⓐ ) 또는 ( ⓑ )에 의하여 통신상의 장해를 주지 않도록 지중약전류전선로로부터 충분히 이격시키거나 기타 적당한 방법으로 시설하여야 한다.",
    options: [
      "ⓐ 누설전류, ⓑ 유도작용",
      "ⓐ 단락전류, ⓑ 유도작용",
      "ⓐ 단락전류, ⓑ 정전작용",
      "ⓐ 누설전류, ⓑ 정전작용"
    ],
    answer: 1,
    explanation: "334.5 지중약전류전선로의 유도장해 방지\n지중전선로는 기설 지중약전류전선로에 대하여 누설전류 또는 유도작용에 의하여 통신상의 장해를 주지 않도록 지중약전류전선로로부터 충분히 이격시키거나 기타 적당한 방법으로 시설하여야 한다.",
    image: null
  },
  {
    id: 97,
    question: "사용전압 22.9[kV]인 가공전선이 삭도와 제1차 접근상태로 시설되는 경우, 가공전선과 삭도 또는 삭도용 지주 사이의 이격거리는 몇 [m] 이상으로 하여야 하는가? (단, 전선으로는 특고압 절연전선을 사용한다.)",
    options: [
      "0.5",
      "1",
      "2",
      "2.12"
    ],
    answer: 2,
    explanation: "333.25 특고압 가공전선과 삭도와의 접근 또는 교차\n특고압 가공전선이 삭도와 제1차 접근상태로 시설되는 경우에는 다음에 따라야 한다.\n가. 특고압 가공전선로는 제3종 특고압 보안공사에 의할 것.\n나. 특고압 가공전선과 삭도 또는 삭도용 지주 사이의 이격거리는 표에서 정한 값 이상일 것.\n\n| 사용전압 | 전선의 종류 | 이격거리 |\n|:--------|:------------|:---------|\n| 35[kV] 이하 | 특고압 절연전선 사용 | 1[m]     |\n|         | 케이블      | 0.5[m]   |\n| 35[kV] 초과 60[kV] 이하 | -           | 2[m]     |\n|         | * 이격거리 = 2 + 단수 × 0.12[m]\n* 단수 = $$\\frac{\\text{전압[kV]}-60}{10}$$ (단수 계산에서 소수점 이하는 절상) |\n\n문제의 사용전압은 22.9[kV]이고 특고압 절연전선을 사용하므로, 이격거리는 1[m] 이상이어야 합니다.",
    image: null
  },
  {
    id: 98,
    question: "저압 옥내배선에 사용하는 연동선의 최소 굵기는 몇 [mm²]인가?",
    options: [
      "1.5",
      "2.5",
      "4.0",
      "6.0"
    ],
    answer: 2,
    explanation: "231.3 저압 옥내배선의 사용전선\n가. 저압 옥내배선의 전선: 단면적 2.5[mm²] 이상의 연동선\n나. 옥내배선의 사용 전압이 400[V] 이하인 경우에는 다음에 의하여 시설할 수 있다.\n① 전광류시 장치 또는 제어 회로\n* 단면적 1.5[mm²] 이상의 연동선\n* 단면적 0.75[mm²] 이상의 다심케이블 또는 다심 캡타이어케이블을 사용하고 또한 과전류가 생겼을 때에 자동적으로 전로에서 차단하는 장치를 시설\n② 전광장 또는 이와 유사한 것의 내부 배선: 단면적 0.75[mm²] 이상인 코드 또는 캡타이어케이블\n(일반적인 저압 옥내배선에는 2.5[mm²] 이상의 연동선을 사용해야 합니다.)",
    image: null
  },
  {
    id: 99,
    question: "전격살충기의 전격격자는 지표 또는 바닥에서 몇 [m] 이상의 높은 곳에 시설하여야 하는가?",
    options: [
      "1.5",
      "2",
      "2.8",
      "3.5"
    ],
    answer: 1,
    explanation: "241.7 전격살충기\n전격살충기의 전격격자는 지표 또는 바닥에서 3.5[m] 이상의 높은 곳에 시설할 것. 다만 2차측 개방 전압이 5[kV] 이하의 절연변압기를 사용하고 보호격자에 사람이 접촉될 경우 절연변압기의 1차측 전로를 자동적으로 차단하는 보호장치를 시설한 것은 지표 또는 바닥에서 1.8[m]까지 감할 수 있다.\n나. 전격살충기의 전격격자와 다른 시설물(가공전선은 제외한다) 또는 식물과의 이격거리는 0.3[m] 이상일 것.\n(해설에 따르면 일반적인 경우 3.5[m], 특정 조건에서 1.8[m]까지 감할 수 있습니다. 제시된 정답 1.5[m]는 해설 내용과 직접적으로 일치하지 않습니다.)",
    image: null
  },
  {
    id: 100,
    question: "전기철도의 설비를 보호하기 위해 시설하는 피뢰기의 시설기준으로 틀린 것은?",
    options: [
      "피뢰기는 변전소 인입측 및 급전선 인출측에 설치하여야 한다.",
      "피뢰기는 가능한 한 보호하는 기기와 가깝게 시설하되 누설전류 측정이 용이하도록 지지대와 접하여 설치하여야 한다.",
      "피뢰기는 개방형을 사용하고 유효보호거리를 증가시키기 위하여 방전개시전압 및 제한전압이 낮은 것을 사용한다.",
      "피뢰기는 가공전선과 직접 접속하는 지중케이블에서 낙뢰에 의해 절연파괴의 우려가 있는 케이블 단말에 설치하여야 한다."
    ],
    answer: 3,
    explanation: "451.3 피뢰기 설치장소\n1. 다음의 장소에 피뢰기를 설치하여야 한다.\n가. 변전소 인입측 및 급전선 인출측\n나. 가공전선과 직접 접속하는 지중케이블에서 낙뢰에 의해 절연파괴의 우려가 있는 케이블 단말\n2. 피뢰기는 가능한 한 보호하는 기기와 가깝게 시설하되 누설전류 측정이 용이하도록 지지대와 접하여 설치하여야 한다.\n451.4 피뢰기의 선정\n피뢰기는 다음의 조건을 고려하여 선정한다.\n1. 피뢰기는 밀봉형을 사용하고 유효 보호거리를 증가시키기 위하여 방전개시전압 및 제한전압이 낮은 것을 사용하여야 한다.\n2. 공칭방전전류에 대하여 2선 또는 3선의 피뢰기 동시동작이 우려되는 변전소 근처의 단량 전류가 큰 장소에는 속류차단능력이 크고 또한 차단성능이 회로조건의 영향을 받을 우려가 적은 것을 사용한다.\n(피뢰기는 '밀봉형'을 사용해야 합니다. '개방형'은 틀린 설명입니다.)",
    image: null
  }
];

export default questions;