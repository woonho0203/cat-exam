const questions = [
  {
    id: 1,
    question: "자기 인덕턴스가 각각 $L_{1}, L_{2}$ 인 두 코일의 상호 인덕턴스가 $M$일 때 결합 계수는?",
    options: [
      "$\\frac{L_{1}L_{2}}{M}$",
      "$\\frac{M}{L_{1}L_{2}}$",
      "$\\frac{M}{\\sqrt{L_{1}L_{2}}}$",
      "$\\frac{\\sqrt{L_{1}L_{2}}}{M}$"
    ],
    answer: 3,
    explanation: "결합 계수 $k = \\frac{M}{\\sqrt{L_{1}L_{2}}}$로 정의되며, 일반적인 경우 $0 \\le k \\le 1$ 범위를 가집니다. $k=1$이면 완전한 자기 결합 상태입니다.",
    image: null
  },
  {
    id: 2,
    question: "정상 전류계에서 $J$는 전류밀도, $\\sigma$는 도전율, $\\rho$는 고유저항, $E$는 전계의 세기일 때, 옴의 법칙의 미분형은?",
    options: [
      "$J = \\sigma E$",
      "$J = \\frac{E}{\\sigma}$",
      "$J = \\rho E$",
      "$J = \\rho \\sigma E$"
    ],
    answer: 1,
    explanation: "전류밀도 $J = \\frac{I}{S} = \\frac{1}{\\rho}E = \\sigma E$ 입니다. 저항률과 도전율은 역수 관계($\\sigma = 1/\\rho$)입니다.",
    image: null
  },
  {
    id: 3,
    question: "길이가 $10[cm]$이고 단면의 반지름이 $1[cm]$인 원통형 자성체가 길이 방향으로 균일하게 자화되어 있을 때 자화의 세기가 $0.5[Wb/m^{2}]$ 이라면 이 자성체의 자기모멘트 $[Wb\\cdot m]$는?",
    options: [
      "$1.57 \\times 10^{-5}$",
      "$1.57 \\times 10^{-4}$",
      "$1.57 \\times 10^{-3}$",
      "$1.57 \\times 10^{-2}$"
    ],
    answer: 1,
    explanation: "자기모멘트 $M = m \\cdot l = J \\cdot V = 0.5 \\times (\\pi \\times 0.01^{2} \\times 0.1) \\approx 1.57 \\times 10^{-5} [Wb\\cdot m]$ 입니다.",
    image: null
  },
  {
    id: 4,
    question: "공기 중 2개의 동심 구도체에서 내구(A)에만 전하 $Q$를 주고 외구(B)를 접지하였을 때 내구(A)의 전위는?",
    options: [
      "$\\frac{Q}{4\\pi\\epsilon_{0}}(\\frac{1}{a}-\\frac{1}{b}+\\frac{1}{c})$",
      "$\\frac{Q}{4\\pi\\epsilon_{0}}(\\frac{1}{a}-\\frac{1}{b})$",
      "$\\frac{Q}{4\\pi\\epsilon_{0}}\\cdot\\frac{1}{c}$",
      "$\\frac{Q}{4\\pi\\epsilon_{0}}(\\frac{1}{a}+\\frac{1}{b})$"
    ],
    answer: 2,
    explanation: "외구를 접지하면 외구의 전위는 0이 되며, 내구의 전위는 두 구 사이의 전위차 $V_{ab}$와 같습니다. $V_{a} = \\frac{Q}{4\\pi\\epsilon_{0}}(\\frac{1}{a} - \\frac{1}{b})$ 입니다.",
    image: "https://example.com/images/2021-3-04.png"
  },
  {
    id: 5,
    question: "평행판 커패시터에 어떤 유전체를 넣었을 때 전속밀도가 $4.8 \\times 10^{-7}[C/m^{2}]$ 이고 단위 체적당 정전에너지가 $5.3 \\times 10^{-3}[J/m^{3}]$ 이었다. 이 유전체의 유전율은 약 몇 $[F/m]$ 인가?",
    options: [
      "$1.15 \\times 10^{-11}$",
      "$2.17 \\times 10^{-11}$",
      "$3.19 \\times 10^{-11}$",
      "$4.21 \\times 10^{-11}$"
    ],
    answer: 2,
    explanation: "단위 체적당 정전에너지 $w = \\frac{D^{2}}{2\\epsilon}$ 에서 $\\epsilon = \\frac{D^{2}}{2w} = \\frac{(4.8 \\times 10^{-7})^{2}}{2 \\times 5.3 \\times 10^{-3}} \\approx 2.17 \\times 10^{-11} [F/m]$ 입니다.",
    image: null
  },
  {
    id: 6,
    question: "히스테리시스 곡선에서 히스테리시스 손실에 해당하는 것은?",
    options: [
      "보자력의 크기",
      "잔류자기의 크기",
      "보자력과 잔류자기의 곱",
      "히스테리시스 곡선의 면적"
    ],
    answer: 4,
    explanation: "단위 체적당 히스테리시스 손실은 히스테리시스 곡선의 면적에 비례하며, $P_{h} = \\eta f B_{m}^{1.6} [J/m^{3}]$ 로 나타낼 수 있습니다.",
    image: null
  },
  {
    id: 7,
    question: "그림과 같이 면적 $S[m^{2}]$ 인 평행판 커패시터에 유전율이 각각 $\\epsilon_{1}=4, \\epsilon_{2}=2$ 인 유전체를 채우고 양단에 $V[V]$ 전압을 인가했을 때, 내부 전계의 세기 $E_{1}$ 과 $E_{2}$ 의 관계식은?",
    options: [
      "$E_{1} = 2E_{2}$",
      "$E_{1} = 4E_{2}$",
      "$2E_{1} = E_{2}$",
      "$E_{1} = E_{2}$"
    ],
    answer: 3,
    explanation: "경계면에 전계가 수직으로 입사하므로 전속밀도가 일정합니다($D_{1}=D_{2}$). $\\epsilon_{1}E_{1} = \\epsilon_{2}E_{2} \\implies 4E_{1} = 2E_{2} \\implies 2E_{1} = E_{2}$ 입니다.",
    image: "https://example.com/images/2021-3-07.png"
  },
  {
    id: 8,
    question: "간격 $d[m]$, 면적 $S[m^{2}]$ 인 평행판 커패시터 극판 사이에 유전율 $\\epsilon$ 인 유전체를 넣고 $V[V]$ 전압을 가했을 때, 전극판을 떼어내는데 필요한 힘의 크기 $[N]$는?",
    options: [
      "$\\frac{1}{2\\epsilon}\\frac{V^{2}}{d^{2}S}$",
      "$\\frac{1}{2\\epsilon}\\frac{dV^{2}}{S}$",
      "$\\frac{1}{2}\\epsilon\\frac{V}{d}S$",
      "$\\frac{1}{2}\\epsilon\\frac{V^{2}}{d^{2}}S$"
    ],
    answer: 4,
    explanation: "단위 면적당 작용하는 힘 $f = \\frac{1}{2}\\epsilon E^{2}$ 입니다. 전계 $E=V/d$ 이므로 총 힘 $F = f \\cdot S = \\frac{1}{2}\\epsilon (\\frac{V}{d})^{2} S = \\frac{1}{2}\\epsilon \\frac{V^{2}}{d^{2}} S [N]$ 입니다.",
    image: null
  },
  {
    id: 9,
    question: "다음 중 기자력(magnetomotive force)에 대한 설명으로 틀린 것은?",
    options: [
      "SI 단위는 암페어(A) 이다.",
      "전기회로의 기전력에 대응한다.",
      "자기회로의 자기저항과 자속의 곱과 동일하다.",
      "코일에 전류를 흘렸을 때 전류밀도와 코일의 권수의 곱의 크기와 같다."
    ],
    answer: 4,
    explanation: "기자력 $F = NI [AT]$ 로, 전류($I$)와 코일의 권수($N$)의 곱입니다. 전류밀도와의 곱이 아닙니다.",
    image: null
  },
  {
    id: 10,
    question: "유전율 $\\epsilon$, 투자율 $\\mu$ 인 매질 내에서 전자파의 전파속도는?",
    options: [
      "$\\sqrt{\\frac{\\mu}{\\epsilon}}$",
      "$\\sqrt{\\mu\\epsilon}$",
      "$\\sqrt{\\frac{\\epsilon}{\\mu}}$",
      "$\\frac{1}{\\sqrt{\\epsilon\\mu}}$"
    ],
    answer: 4,
    explanation: "매질 내 전자파의 속도 $v = \\frac{1}{\\sqrt{\\epsilon\\mu}}$ 입니다. 진공 중에서는 $c \\approx 3 \\times 10^{8} [m/s]$ 입니다.",
    image: null
  },
  {
    id: 11,
    question: "평균 반지름이 $20[cm]$, 단면적 $S=6[cm^{2}]$ 인 환상 철심에서 권선수 $N=500$ 회인 코일에 전류 $4[A]$가 흐를 때 철심 내부의 자계의 세기 $H$는 약 몇 $[AT/m]$ 인가?",
    options: [
      "1590",
      "1700",
      "1870",
      "2120"
    ],
    answer: 1,
    explanation: "$H = \\frac{NI}{l} = \\frac{NI}{2\\pi r} = \\frac{500 \\times 4}{2\\pi \\times 0.2} \\approx 1592 [AT/m]$ 입니다.",
    image: null
  },
  {
    id: 12,
    question: "패러데이관(Faraday tube)의 성질에 대한 설명으로 틀린 것은?",
    options: [
      "패러데이관 중에 있는 전속수는 그 관속에 진전하가 없으면 일정하며 연속적이다.",
      "패러데이관의 양단에는 양 또는 음의 단위 진전하가 존재하고 있다.",
      "패러데이관 한 개의 단위 전위차 당 보유에너지는 $\\frac{1}{2}[J]$이다.",
      "패러데이관의 밀도는 전속밀도와 같지 않다."
    ],
    answer: 4,
    explanation: "패러데이관의 밀도는 전속밀도($D$)와 같습니다.",
    image: null
  },
  {
    id: 13,
    question: "공기 중 무한 평면도체의 표면으로부터 $2[m]$ 떨어진 곳에 $4[C]$의 점전하가 있다. 이 점전하가 받는 힘은 몇 $[N]$인가?",
    options: [
      "$\\frac{1}{\\pi\\epsilon_{0}}$",
      "$\\frac{1}{4\\pi\\epsilon_{0}}$",
      "$\\frac{1}{8\\pi\\epsilon_{0}}$",
      "$\\frac{1}{16\\pi\\epsilon_{0}}$"
    ],
    answer: 2,
    explanation: "영상전하법을 이용하면 $2d=4[m]$ 떨어진 곳에 $-4[C]$ 전하가 있는 것과 같습니다. $F = \\frac{Q(-Q)}{4\\pi\\epsilon_{0}(2d)^{2}} = \\frac{16}{4\\pi\\epsilon_{0} \\times 16} = \\frac{1}{4\\pi\\epsilon_{0}} [N]$ 입니다.",
    image: null
  },
  {
    id: 14,
    question: "반지름이 $r[m]$인 반원형 전류 $I[A]$에 의한 반원의 중심($O$)에서 자계의 세기 $[AT/m]$는?",
    options: [
      "$\\frac{2I}{r}$",
      "$\\frac{I}{r}$",
      "$\\frac{I}{2r}$",
      "$\\frac{I}{4r}$"
    ],
    answer: 4,
    explanation: "원형 전류 중심의 자계 $H_{0} = \\frac{I}{2r}$ 입니다. 반원형이므로 그 절반인 $\\frac{I}{4r}$ 가 됩니다.",
    image: "https://example.com/images/2021-3-14.png"
  },
  {
    id: 15,
    question: "진공 중 $(0, 1)[m]$ 위치에 $-2 \\times 10^{-9}[C]$ 전하가 있을 때, $(2, 0)[m]$ 점에 있는 $1[C]$ 전하에 작용하는 힘은? (단, $\\hat{x}, \\hat{y}$는 단위벡터)",
    options: [
      "$-\\frac{18}{3\\sqrt{5}}\\hat{x} + \\frac{36}{3\\sqrt{5}}\\hat{y}$",
      "$-\\frac{36}{5\\sqrt{5}}\\hat{x} + \\frac{18}{5\\sqrt{5}}\\hat{y}$",
      "$-\\frac{36}{3\\sqrt{5}}\\hat{x} + \\frac{18}{3\\sqrt{5}}\\hat{y}$",
      "$\\frac{36}{5\\sqrt{5}}\\hat{x} + \\frac{18}{5\\sqrt{5}}\\hat{y}$"
    ],
    answer: 2,
    explanation: "$r = \\sqrt{2^{2} + (-1)^{2}} = \\sqrt{5}$, 단위벡터 $r_{0} = \\frac{2\\hat{x}-\\hat{y}}{\\sqrt{5}}$입니다. $F = 9\\times10^{9} \\cdot \\frac{Q_1Q_2}{r^2} r_0 = -\\frac{36}{5\\sqrt{5}}\\hat{x} + \\frac{18}{5\\sqrt{5}}\\hat{y}$ 입니다.",
    image: null
  },
  {
    id: 16,
    question: "단면적이 균일한 환상철심에 권수 $N_1$인 A 코일과 권수 $N_2$인 B 코일이 있을 때, A 코일의 자기 인덕턴스가 $L_1$이라면 상호 인덕턴스 $M$은?",
    options: [
      "$\\frac{L_{1}N_{2}}{N_{1}}$",
      "$\\frac{N_{2}}{L_{1}N_{1}}$",
      "$\\frac{L_{1}N_{1}}{N_{2}}$",
      "$\\frac{N_{1}}{L_{1}N_{2}}$"
    ],
    answer: 1,
    explanation: "$L_{1} = \\frac{N_{1}^{2}}{R}$, $M = \\frac{N_{1}N_{2}}{R}$ 이므로 $R$을 소거하면 $M = \\frac{L_{1}N_{2}}{N_{1}}$ 입니다.",
    image: "https://example.com/images/2021-3-16.png"
  },
  {
    id: 17,
    question: "내압이 $2.0[kV]$이고 정전용량이 각각 $0.01[\\mu F], 0.02[\\mu F], 0.04[\\mu F]$ 인 3개의 커패시터를 직렬로 연결했을 때 전체 내압은 몇 $[V]$인가?",
    options: [
      "1750",
      "2000",
      "3500",
      "4000"
    ],
    answer: 3,
    explanation: "직렬 시 전하는 동일($Q=CV$)하므로 전압은 용량에 반비례($V \\propto 1/C$)합니다. 가장 작은 $0.01[\\mu F]$에 $2kV$가 걸릴 때가 한계이므로, $V_{total} = 2000 \\times (1 + \\frac{0.01}{0.02} + \\frac{0.01}{0.04}) = 3500[V]$ 입니다.",
    image: null
  },
  {
    id: 18,
    question: "간격 $d$, 면적 $S$ 평행판 사이에 유전율 $\\epsilon$ 인 유전체가 있다. $v(t) = V_{m}\\sin\\omega t$ 전압을 가할 때 변위전류밀도 $[A/m^{2}]$는?",
    options: [
      "$\\frac{\\epsilon\\omega V_{m}}{d}\\cos\\omega t$",
      "$\\frac{\\epsilon\\omega V_{m}}{d}\\sin\\omega t$",
      "$\\frac{\\epsilon V_{m}}{\\omega d}\\cos\\omega t$",
      "$\\frac{\\epsilon V_{m}}{\\omega d}\\sin\\omega t$"
    ],
    answer: 1,
    explanation: "$i_{d} = \\frac{\\partial D}{\\partial t} = \\epsilon \\frac{\\partial E}{\\partial t} = \\frac{\\epsilon}{d} \\frac{\\partial}{\\partial t}(V_{m}\\sin\\omega t) = \\frac{\\epsilon\\omega V_{m}}{d}\\cos\\omega t$ 입니다.",
    image: null
  },
  {
    id: 19,
    question: "속도 $v$의 전자가 평등자계 내에 수직으로 들어갈 때 전자의 원운동 반지름은?",
    options: [
      "구면 위에서 회전하고 자계 세기에 비례",
      "원운동을 하고 자계 세기에 비례",
      "원운동을 하고 자계 세기에 반비례",
      "원운동을 하고 처음 속도의 제곱에 비례"
    ],
    answer: 3,
    explanation: "로렌츠 힘과 원심력의 평형에 의해 $r = \\frac{mv}{eB}$ 입니다. 반지름은 자계 세기($B$)에 반비례하고 속도($v$)에 비례합니다.",
    image: null
  },
  {
    id: 20,
    question: "전기쌍극자 $M$에 의한 점 $P$의 전계 크기는 중심축과 $P$를 잇는 선분 사이 각 $\\theta$가 얼마일 때 최대가 되는가?",
    options: [
      "$0$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{3}$",
      "$\\frac{\\pi}{4}$"
    ],
    answer: 1,
    explanation: "$E = \\frac{M}{4\\pi\\epsilon_{0}r^{3}}\\sqrt{1+3\\cos^{2}\\theta}$ 에서 $\\theta=0^{\\circ}$ 일 때 최대, $90^{\\circ}$ 일 때 최소가 됩니다.",
    image: null
  },
  {
    id: 21,
    question: "보호 계전기의 동작 시간에 따른 분류 중 틀린 설명은?",
    options: [
      "순한시 계전기는 최소동작전류 이상 시 즉시 동작한다.",
      "반한시 계전기는 전류가 클수록 느리게 동작한다.",
      "정한시 계전기는 전류 크기와 관계없이 일정한 시간 후 동작한다.",
      "반한시정한시 계전기는 일정 전류까지는 반한시, 그 이상은 정한시로 동작한다."
    ],
    answer: 2,
    explanation: "반한시 특성은 동작전류가 커질수록 동작시간이 짧아지는(빠르게 동작하는) 특성입니다.",
    image: "https://example.com/images/2021-3-21.png"
  },
  {
    id: 22,
    question: "단상 2선식에서 단상 3선식으로 변경 시, 전선 1선당 공급전력은 약 몇 배 증가하는가?",
    options: [
      "0.71",
      "1.33",
      "1.41",
      "1.73"
    ],
    answer: 2,
    explanation: "단상 2선식은 $0.5P$, 단상 3선식은 $0.667P$입니다. 비교 시 $0.667/0.5 = 1.33$배가 됩니다.",
    image: null
  },
  {
    id: 23,
    question: "환상선로의 단락보호에 주로 사용하는 계전방식은?",
    options: [
      "비율차동계전방식",
      "방향거리계전방식",
      "과전류계전방식",
      "선택접지계전방식"
    ],
    answer: 2,
    explanation: "전원이 2군데 이상인 환상선로의 단락보호에는 방향거리계전기(DZ)를 주로 사용합니다.",
    image: null
  },
  {
    id: 24,
    question: "3상용 차단기의 정격차단용량은 정격전압과 정격차단전류의 곱의 몇 배인가?",
    options: [
      "$\\frac{1}{\\sqrt{2}}$",
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\sqrt{2}$",
      "$\\sqrt{3}$"
    ],
    answer: 4,
    explanation: "정격 차단용량 $P_{s} = \\sqrt{3} \\times V_{n} \\times I_{s}$ 입니다.",
    image: null
  },
  {
    id: 25,
    question: "낙차 $100[m]$, 유량 $20[m^{3}/s]$ 인 수차가 있다. 낙차가 $81[m]$로 감소하면 유량 $[m^{3}/s]$은?",
    options: [
      "15",
      "18",
      "24",
      "30"
    ],
    answer: 2,
    explanation: "유량은 낙차의 $1/2$승에 비례합니다. $Q_{2} = 20 \\times \\sqrt{81/100} = 20 \\times 0.9 = 18[m^{3}/s]$ 입니다.",
    image: null
  },
  {
    id: 26,
    question: "단락용량 $3000[MVA]$인 모선 전압이 $154[kV]$라면 등가 모선 임피던스 $[\\Omega]$는 약 얼마인가?",
    options: [
      "5.81",
      "6.21",
      "7.91",
      "8.71"
    ],
    answer: 3,
    explanation: "$Z = \\frac{V^{2}}{P_{s}} = \\frac{154^{2}}{3000} \\approx 7.91 [\\Omega]$ 입니다.",
    image: null
  },
  {
    id: 27,
    question: "직접접지 송전방식에 대한 설명으로 틀린 것은?",
    options: [
      "1선 지락 시 지락전류가 타 접지방식보다 최대이다.",
      "지락계전기 동작이 확실하고 선택차단이 가능하다.",
      "통신선 유도장해가 비접지방식보다 작다.",
      "기기의 절연레벨을 경감(저감절연)할 수 있다."
    ],
    answer: 3,
    explanation: "직접접지방식은 지락전류가 크기 때문에 통신선에 대한 유도장해가 매우 큽니다.",
    image: null
  },
  {
    id: 28,
    question: "송전선에 직렬콘덴서를 설치했을 때의 특징으로 틀린 것은?",
    options: [
      "선로의 전압강하를 감소시킨다.",
      "송전전력을 증가시킨다.",
      "부하역률이 좋을수록 설치효과가 크다.",
      "단락 시 사고전류에 의해 과전압이 발생한다."
    ],
    answer: 3,
    explanation: "직렬콘덴서는 부하역률이 나쁠수록(지상역률일수록) 유도 리액턴스 보상 효과가 커져 설치 효과가 큽니다.",
    image: null
  },
  {
    id: 29,
    question: "수압철관 지름 $4[m]$인 곳의 유속이 $4[m/s]$이다. 지름 $3.5[m]$인 곳의 유속 $[m/s]$은?",
    options: [
      "4.2",
      "5.2",
      "6.2",
      "7.2"
    ],
    answer: 2,
    explanation: "연속의 정리 $A_{1}v_{1} = A_{2}v_{2}$에 의해 $v_{2} = 4 \\times (4/3.5)^{2} \\approx 5.22 [m/s]$ 입니다.",
    image: null
  },
  {
    id: 30,
    question: "경간 $200[m]$인 가공 선로에서 전선 하중 $2[kg/m]$, 인장하중 $4000[kg]$, 안전율 2일 때, 전선 길이는 경간보다 약 몇 $[m]$ 더 긴가?",
    options: [
      "0.33",
      "0.61",
      "1.41",
      "1.73"
    ],
    answer: 1,
    explanation: "이도 $D = \\frac{WS^{2}}{8T} = \\frac{2 \\times 200^{2}}{8 \\times 2000} = 5[m]$. 길이 차이 $\\Delta L = \\frac{8D^{2}}{3S} = \\frac{8 \\times 25}{3 \\times 200} \\approx 0.33 [m]$ 입니다.",
    image: null
  },
  {
    id: 31,
    question: "현수 애자련의 연면 섬락과 가장 관계가 먼 것은?",
    options: [
      "댐퍼",
      "철탑 접지 저항",
      "현수 애자련의 개수",
      "현수 애자련의 소손"
    ],
    answer: 1,
    explanation: "댐퍼는 전선의 진동을 흡수하여 단선을 방지하는 설비로, 애자의 연면 섬락과는 직접적 관계가 없습니다.",
    image: null
  },
  {
    id: 32,
    question: "전력계통의 중성점 다중 접지방식의 특징으로 옳은 것은?",
    options: [
      "통신선의 유도장해가 적다.",
      "합성 접지 저항이 매우 높다.",
      "건전 상의 전위 상승이 매우 높다.",
      "지락보호 계전기의 동작이 확실하다."
    ],
    answer: 4,
    explanation: "다중 접지방식은 지락전류가 커서 보호 계전기의 동작이 매우 확실합니다.",
    image: null
  },
  {
    id: 33,
    question: "전압조정설비 특징 중 틀린 것은?",
    options: [
      "병렬콘덴서는 진상능력만 가진다.",
      "동기조상기는 조정 단계가 불연속적이다.",
      "동기조상기는 무효전력 공급과 흡수가 모두 가능하다.",
      "병렬리액터는 페란티 현상 억제를 위해 설치한다."
    ],
    answer: 2,
    explanation: "동기조상기는 회전기기이므로 무효전력을 연속적으로 조정할 수 있습니다. 정지기인 콘덴서/리액터는 단계적입니다.",
    image: null
  },
  {
    id: 34,
    question: "송전단 전압 $161[kV]$, 수전단 전압 $154[kV]$, 상차각 $30^{\\circ}$, 리액턴스 $45[\\Omega]$ 일 때 송전전력 $[MW]$ 은 약 얼마인가?",
    options: [
      "256",
      "275",
      "324",
      "551"
    ],
    answer: 2,
    explanation: "송전전력 $P = \\frac{V_{s}V_{r}}{X}\\sin\\delta = \\frac{161 \\times 154}{45}\\sin 30^{\\circ} = \\frac{24794}{45} \\times 0.5 \\approx 275.48[MW]$ 입니다.",
    image: null
  },
  {
    id: 35,
    question: "지중 전선로의 매설 방식이 아닌 것은?",
    options: [
      "직설식",
      "관로식",
      "암거식",
      "직접 매설식"
    ],
    answer: 1,
    explanation: "지중 전선로의 표준 매설 방식은 직접 매설식, 관로식, 전력구식(암거식)입니다. '직설식'이라는 용어는 없습니다.",
    image: null
  },
  {
    id: 36,
    question: "화력 발전소에서 절탄기(Economizer)의 용도는?",
    options: [
      "석탄을 분쇄한다.",
      "증기를 과열한다.",
      "보일러 급수를 가열한다.",
      "연소용 공기를 가열한다."
    ],
    answer: 3,
    explanation: "절탄기는 보일러 연도 가스의 폐열을 이용하여 보일러 급수를 가열함으로써 연료 소비를 절약하는 장치입니다.",
    image: null
  },
  {
    id: 37,
    question: "차단기의 정격 차단 시간의 정의로 옳은 것은?",
    options: [
      "트립 코일 여자부터 소호까지의 시간",
      "트립 코일 여자부터 접촉자 분리까지의 시간",
      "개로 명령부터 접촉자 분리까지의 시간",
      "개로 명령부터 아크 소호까지의 시간"
    ],
    answer: 1,
    explanation: "정격 차단 시간은 트립 코일이 여자되는 순간부터 아크가 완전히 소호되어 차단이 완료될 때까지의 시간을 의미합니다.",
    image: null
  },
  {
    id: 38,
    question: "배전 계통에서 전력용 콘덴서를 설치하는 주요 목적은?",
    options: [
      "전압 강하 증대",
      "유효 전력 손실 증가",
      "부하 역률 개선",
      "변압기 용량 부족 초래"
    ],
    answer: 3,
    explanation: "전력용 콘덴서(SC)는 부하의 지상 무효전력을 보상하여 역률을 개선하고 전력 손실을 경감시킵니다.",
    image: null
  },
  {
    id: 39,
    question: "원자력 발전소와 화력 발전소의 차이점으로 틀린 것은?",
    options: [
      "원자력은 연료로 우라늄을 사용한다.",
      "화력 발전은 보일러를 사용하나 원자력은 원자로를 사용한다.",
      "원자력 발전소는 증기 터빈을 사용하지 않는다.",
      "원자력은 방사능 차폐 설비가 필수적이다."
    ],
    answer: 3,
    explanation: "원자력 발전소도 원자로에서 발생한 열로 증기를 만들어 '증기 터빈'을 돌려 발전합니다.",
    image: null
  },
  {
    id: 40,
    question: "수차의 비속도(Specific Speed)가 가장 큰 수차는?",
    options: [
      "펠턴 수차",
      "프란시스 수차",
      "카플란 수차",
      "사류 수차"
    ],
    answer: 3,
    explanation: "저낙차 대유량에 사용되는 카플란 수차가 비속도가 가장 높습니다. (펠턴 < 프란시스 < 카플란 순)",
    image: null
  },
  {
    id: 41,
    question: "직류 분권 전동기의 운전 중 계자 회로가 단선되었을 때 발생하는 현상은?",
    options: [
      "속도가 급격히 감소한다.",
      "정지한다.",
      "위험한 속도로 높아진다.",
      "변화가 없다."
    ],
    answer: 3,
    explanation: "분권 전동기에서 계자 속도 $N \\propto \\frac{V-I_{a}R_{a}}{\\phi}$ 입니다. 계자 단선 시 자속 $\\phi$ 가 거의 0에 가까운 잔류 자기만 남게 되어 속도가 위험할 정도로 급상승(무부하 속도)하게 됩니다.",
    image: null
  },
  {
    id: 42,
    question: "변압기의 무부하 시험으로 구할 수 없는 것은?",
    options: [
      "철손",
      "여자 전류",
      "동손",
      "여자 어드미턴스"
    ],
    answer: 3,
    explanation: "무부하 시험으로는 철손, 여자 전류, 여자 어드미턴스를 구할 수 있습니다. 동손은 부하 전류에 의해 발생하므로 단락 시험을 통해 구합니다.",
    image: null
  },
  {
    id: 43,
    question: "3상 유도 전동기의 속도 제어 방법 중 인버터를 사용하여 주파수를 가변시키는 방법은?",
    options: [
      "극수 변환법",
      "2차 저항 제어법",
      "VVVF 제어법",
      "종속 접속법"
    ],
    answer: 3,
    explanation: "VVVF(Variable Voltage Variable Frequency) 제어는 인버터를 이용해 전압과 주파수를 동시에 조절하여 속도를 정밀하게 제어하는 방식입니다.",
    image: null
  },
  {
    id: 44,
    question: "동기 발전기의 병렬 운전 시 동기화 전력이 발생하는 경우는?",
    options: [
      "기전력의 크기가 다를 때",
      "기전력의 위상이 다를 때",
      "기전력의 파형이 다를 때",
      "기전력의 주파수가 다를 때"
    ],
    answer: 2,
    explanation: "위상이 다르면 유효 횡류(동기화 전류)가 흘러 위상을 일치시키려는 동기화 전력이 발생합니다.",
    image: null
  },
  {
    id: 45,
    question: "반도체 소자 중 양방향성 3단자 소자로 AC 전력 제어용으로 널리 사용되는 것은?",
    options: [
      "SCR",
      "TRIAC",
      "GTO",
      "IGBT"
    ],
    answer: 2,
    explanation: "트라이액(TRIAC)은 SCR을 역평렬로 연결한 구조의 양방향 3단자 소자로 교류 스위칭에 최적화되어 있습니다.",
    image: null
  },
  {
    id: 46,
    question: "변압기의 %임피던스가 $5[\\%]$ 일 때, 단락 사고가 발생하면 단락 전류는 정격 전류의 몇 배인가?",
    options: [
      "5",
      "10",
      "20",
      "100"
    ],
    answer: 3,
    explanation: "단락 전류 $I_{s} = \\frac{100}{\\%Z} \\times I_{n} = \\frac{100}{5} \\times I_{n} = 20 I_{n}$ 입니다.",
    image: null
  },
  {
    id: 47,
    question: "동기 전동기의 $V$ 곡선(위상 특성 곡선)에서 공급 전압과 부하가 일정할 때 역률이 1이 되는 점의 계자 전류는?",
    options: [
      "최소 계자 전류",
      "최대 계자 전류",
      "부족 여자 상태",
      "전기자 전류가 최소인 점"
    ],
    answer: 4,
    explanation: "$V$ 곡선에서 역률이 1일 때 전기자 전류 $I_{a}$ 가 가장 작아집니다.",
    image: "https://example.com/images/2021-3-47.png"
  },
  {
    id: 48,
    question: "다이오드를 사용한 3상 전파 정류 회로의 맥동률(ripple factor)은 약 몇 $[\\%]$ 인가?",
    options: [
      "4.2",
      "17",
      "48",
      "121"
    ],
    answer: 1,
    explanation: "3상 전파 정류는 맥동률이 약 $4.2\\%$ 로 매우 낮아 평활 회로 구성이 용이합니다.",
    image: null
  },
  {
    id: 49,
    question: "3상 유도 전동기에서 슬립 $s$ 가 1인 상태는?",
    options: [
      "정지 시",
      "동기 속도로 회전 시",
      "무부하 운전 시",
      "이상 운전 시"
    ],
    answer: 1,
    explanation: "슬립 $s = \\frac{N_{s}-N}{N_{s}}$ 에서 정지 시($N=0$) $s=1$ 이 되며, 동기 속도($N=N_{s}$) 시 $s=0$ 입니다.",
    image: null
  },
  {
    id: 50,
    question: "변압기의 냉각 방식 중 외함에 냉각유를 채우고 열을 외부 공기에 의해 자연 냉각하는 방식은?",
    options: [
      "유입 자냉식",
      "유입 풍냉식",
      "유입 수냉식",
      "송유 풍냉식"
    ],
    answer: 1,
    explanation: "유입 자냉식(ONAN)은 절연유의 대류 작용과 탱크 표면의 자연 방열을 이용합니다.",
    image: null
  },
  {
    id: 51,
    question: "전기자 저항이 $0.2[\\Omega]$ 인 직류 분권 발전기가 단자 전압 $100[V]$, 전기자 전류 $50[A]$ 로 운전될 때, 유기 기전력 $[V]$ 은?",
    options: [
      "90",
      "100",
      "110",
      "120"
    ],
    answer: 3,
    explanation: "발전기 유기 기전력 $E = V + I_{a}R_{a} = 100 + (50 \\times 0.2) = 110[V]$ 입니다.",
    image: null
  },
  {
    id: 52,
    question: "동기 발전기의 권선을 분포권으로 하는 주요 이유는?",
    options: [
      "기전력의 파형 개선",
      "권선량의 절약",
      "인덕턴스 증가",
      "열 발산 억제"
    ],
    answer: 1,
    explanation: "분포권과 단절권은 고조파를 제거하여 기전력의 파형을 개선하기 위해 사용합니다. (단, 기전력의 크기는 약간 감소함)",
    image: null
  },
  {
    id: 53,
    question: "유도자형 동기 발전기의 특징으로 옳은 것은?",
    options: [
      "계자극이 회전한다.",
      "전기자가 회전한다.",
      "계자와 전기자가 모두 고정되어 있다.",
      "소형 저속기에 주로 사용된다."
    ],
    answer: 3,
    explanation: "유도자형은 계자극과 전기자가 모두 고정되어 있고, 유도자(회전자)만 회전하므로 고속 회전이나 특수 주파수용에 사용됩니다.",
    image: null
  },
  {
    id: 54,
    question: "스테핑 모터(Stepping Motor)의 특징으로 틀린 것은?",
    options: [
      "디지털 신호에 의해 제어된다.",
      "피드백 회로 없이 오픈 루프 제어가 가능하다.",
      "위치 결정 정밀도가 높다.",
      "고속 운전 시 토크가 증가한다."
    ],
    answer: 4,
    explanation: "스테핑 모터는 고속 운전 시 토크가 급격히 감소하며 탈조(Pull-out) 현상이 발생할 수 있습니다.",
    image: null
  },
  {
    id: 55,
    question: "유도 전동기의 기동 시 $Y-\\Delta$ 기동을 하는 이유는?",
    options: [
      "기동 토크를 크게 하기 위해",
      "기전력의 파형을 개선하기 위해",
      "기동 전류를 줄이기 위해",
      "회전 방향을 바꾸기 위해"
    ],
    answer: 3,
    explanation: "$Y$ 결선으로 기동하면 전압이 $1/\\sqrt{3}$ 배가 되어 기동 전류와 기동 토크가 각각 $1/3$ 배로 줄어들어 계통의 충격을 완화합니다.",
    image: null
  },
  {
    id: 56,
    question: "직류기에서 보극(Interpole)을 설치하는 가장 큰 목적은?",
    options: [
      "전기자 반작용 방지 및 정류 개선",
      "전압 변동률 감소",
      "효율 증대",
      "회전수 조절"
    ],
    answer: 1,
    explanation: "보극은 중성축의 이동을 막아 리액턴스 전압을 상쇄함으로써 불꽃 없는 양호한 정류를 얻기 위해 설치합니다.",
    image: null
  },
  {
    id: 57,
    question: "변압기의 철심으로 규소강판을 사용하는 이유는?",
    options: [
      "동손을 줄이기 위해",
      "히스테리시스 손실을 줄이기 위해",
      "와전류 손실을 줄이기 위해",
      "냉각 효과를 높이기 위해"
    ],
    answer: 2,
    explanation: "규소강판은 히스테리시스 손실을 줄이고, 이를 성층(Lamination)하여 사용하는 것은 와전류 손실을 줄이기 위함입니다.",
    image: null
  },
  {
    id: 58,
    question: "3상 유도 전동기의 회전 방향을 바꾸기 위한 방법은?",
    options: [
      "공급 전압을 높인다.",
      "3선 중 2선의 접속을 바꾼다.",
      "계자 전류의 방향을 바꾼다.",
      "주파수를 낮춘다."
    ],
    answer: 2,
    explanation: "3상 전원 중 임의의 두 선을 서로 바꾸어 접속하면 회전 자계의 방향이 반대가 되어 전동기가 역회전합니다.",
    image: null
  },
  {
    id: 59,
    question: "단상 유도 전동기 중 기동 토크가 가장 큰 것은?",
    options: [
      "분상 기동형",
      "콘덴서 기동형",
      "반발 기동형",
      "셰이딩 코일형"
    ],
    answer: 3,
    explanation: "단상 유도 전동기 기동 토크 크기 순서: 반발 기동형 > 반발 유도형 > 콘덴서 기동형 > 분상 기동형 > 셰이딩 코일형",
    image: null
  },
  {
    id: 60,
    question: "SCR에 대한 설명으로 옳은 것은?",
    options: [
      "양방향성 소자이다.",
      "게이트 신호가 없어도 통전된다.",
      "한번 도통되면 게이트 신호를 제거해도 도통 상태를 유지한다.",
      "역저지 불능 소자이다."
    ],
    answer: 3,
    explanation: "SCR은 단방향성 3단자 사이리스터로, 게이트 트리거 후에는 게이트 신호를 제거해도 유지 전류 이상이 흐르는 한 온(ON) 상태를 유지합니다(래칭 효과).",
    image: null
  },
  {
    id: 61,
    question: "어떤 제어 시스템의 전달 함수가 $G(s) = \\frac{s+1}{s^{2}+3s+2}$ 일 때, 이 시스템의 극점(Pole)은?",
    options: [
      "-1, -2",
      "1, 2",
      "-1",
      "0"
    ],
    answer: 1,
    explanation: "특성 방정식(분모=0) $s^{2}+3s+2 = (s+1)(s+2) = 0$ 에서 극점은 -1, -2입니다. (분자가 0이 되는 $s=-1$ 은 영점(Zero)입니다.)",
    image: null
  },
  {
    id: 62,
    question: "단위 계단 입력에 대한 응답이 $c(t) = 1 - e^{-at}$ 인 요소는?",
    options: [
      "비례 요소",
      "미분 요소",
      "적분 요소",
      "1차 지연 요소"
    ],
    answer: 4,
    explanation: "전달 함수가 $\\frac{1}{Ts+1}$ 형태인 1차 지연 요소의 단위 계단 응답 특성입니다.",
    image: null
  },
  {
    id: 63,
    question: "특성 방정식이 $s^{3}+2s^{2}+s+K=0$ 인 시스템이 안정하기 위한 $K$의 범위는?",
    options: [
      "$K < 0$",
      "$0 < K < 1$",
      "$0 < K < 2$",
      "$K > 2$"
    ],
    answer: 3,
    explanation: "Routh 판별법에 의해 $s^{1}$ 행의 계수 $\\frac{2 \\times 1 - K}{2} > 0 \\implies K < 2$ 이고, 모든 계수가 양수여야 하므로 $0 < K < 2$ 입니다.",
    image: null
  },
  {
    id: 64,
    question: "전달 함수가 $G(s) = \\frac{10}{s(s+1)}$ 인 시스템의 형(Type)은?",
    options: [
      "0형",
      "1형",
      "2형",
      "3형"
    ],
    answer: 2,
    explanation: "원점에 있는 극점($s^{n}$ 에서 $n$)의 개수에 따라 결정됩니다. $s^{1}$ 이므로 1형 시스템입니다.",
    image: null
  },
  {
    id: 65,
    question: "제어 시스템에서 오차를 줄이기 위해 주로 사용하는 제어 방식은?",
    options: [
      "미분 제어",
      "적분 제어",
      "비례 제어",
      "온-오프 제어"
    ],
    answer: 2,
    explanation: "적분 제어(I 제어)는 잔류 편차(Steady-state error)를 제거하는 효과가 있습니다.",
    image: null
  },
  {
    id: 66,
    question: "상태 방정식이 $\\dot{x} = Ax + Bu$ 일 때, 특성 방정식은 어떻게 구하는가?",
    options: [
      "$|A| = 0$",
      "$|sI - A| = 0$",
      "$|I - A| = 0$",
      "$|sA - I| = 0$"
    ],
    answer: 2,
    explanation: "상태 공간 표현식에서 시스템의 고유한 특성을 나타내는 특성 방정식은 $|sI - A| = 0$ 입니다.",
    image: null
  },
  {
    id: 67,
    question: "제어요소의 표준 형식인 적분요소에 대한 전달함수는? (단, $K$는 상수이다.)",
    options: [
      "$Ks$",
      "$\\frac{K}{s}$",
      "$K$",
      "$\\frac{K}{Ts+1}$"
    ],
    answer: 2,
    explanation: "적분 요소의 전달함수는 $\\frac{K}{s}$입니다. ($Ks$는 미분, $K$는 비례 요소)",
    image: null
  },
  {
    id: 68,
    question: "그림의 논리회로와 등가인 논리식은? (입력 $A, B$가 NAND로, $C, D$가 NAND로 연결된 후 다시 NAND로 합쳐지는 구조)",
    options: [
      "$Y = A \\cdot B \\cdot C \\cdot D$",
      "$Y = A \\cdot B + C \\cdot D$",
      "$Y = \\overline{A \\cdot B} + \\overline{C \\cdot D}$",
      "$Y = (\\overline{A} + \\overline{B}) \\cdot (\\overline{C} + \\overline{D})$"
    ],
    answer: 2,
    explanation: "드모르간의 법칙에 의해 $Y = \\overline{\\overline{A \\cdot B} \\cdot \\overline{C \\cdot D}} = \\overline{\\overline{A \\cdot B}} + \\overline{\\overline{C \\cdot D}} = A \\cdot B + C \\cdot D$가 됩니다.",
    image: null
  },
  {
    id: 69,
    question: "상태방정식 $\\dot{x} = \\begin{bmatrix} 0 & -3 \\\\ 2 & -5 \\end{bmatrix}x + \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}u$ 로 표현되는 시스템의 특성방정식의 근은?",
    options: [
      "1, -3",
      "-1, -2",
      "-2, -3",
      "-1, -3"
    ],
    answer: 3,
    explanation: "$|sI - A| = \\begin{vmatrix} s & 3 \\\\ -2 & s+5 \\end{vmatrix} = s(s+5) + 6 = s^{2} + 5s + 6 = 0$. 따라서 근은 -2, -3입니다.",
    image: null
  },
  {
    id: 70,
    question: "블록선도 제어시스템에서 단위 램프입력에 대한 정상상태 오차가 0.01일 때, $G_{C1}(s) = k$의 값은? (단, $G_{P}(s) = \\frac{20}{s(s+1)(s+2)}$ 이다.)",
    options: [
      "0.1",
      "1",
      "10",
      "100"
    ],
    answer: 3,
    explanation: "속도편차상수 $k_{v} = \\lim_{s \\to 0} s G(s) = \\frac{20k}{2} = 10k$. $e_{ss} = \\frac{1}{k_{v}} = \\frac{1}{10k} = 0.01 \\implies k = 10$입니다.",
    image: null
  },
  {
    id: 71,
    question: "평형 3상 부하에 선간전압 200[V] 인가 시 선전류 8.6[A], 무효전력 1298[Var]이었다면 부하의 역률은 약 얼마인가?",
    options: [
      "0.6",
      "0.7",
      "0.8",
      "0.9"
    ],
    answer: 4,
    explanation: "피상전력 $P_{a} = \\sqrt{3}VI = \\sqrt{3} \\times 200 \\times 8.6 \\approx 2979[VA]$. $\\cos \\theta = \\frac{\\sqrt{P_{a}^{2} - P_{r}^{2}}}{P_{a}} = \\frac{\\sqrt{2979^{2} - 1298^{2}}}{2979} \\approx 0.9$입니다.",
    image: null
  },
  {
    id: 72,
    question: "무손실 전송선로의 단위 길이당 인덕턴스 $L$ 및 커패시턴스 $C$일 때 특성 임피던스 $Z_{0}$는?",
    options: [
      "$\\sqrt{\\frac{L}{C}}$",
      "$\\sqrt{\\frac{C}{L}}$",
      "$\\frac{L}{C}$",
      "$\\frac{C}{L}$"
    ],
    answer: 1,
    explanation: "무손실 선로($R=G=0$)에서 $Z_{0} = \\sqrt{\\frac{R+j\\omega L}{G+j\\omega C}} = \\sqrt{\\frac{L}{C}}$ 입니다.",
    image: null
  },
  {
    id: 73,
    question: "각 상의 전류가 $i_{a}=90\\sin\\omega t, i_{b}=90\\sin(\\omega t-90^{\\circ}), i_{c}=90\\sin(\\omega t+90^{\\circ}) [A]$ 일 때 영상분 전류의 순시치[A]는?",
    options: [
      "$30\\cos\\omega t$",
      "$30\\sin\\omega t$",
      "$90\\sin\\omega t$",
      "$90\\cos\\omega t$"
    ],
    answer: 2,
    explanation: "$I_{0} = \\frac{1}{3}(I_{a}+I_{b}+I_{c})$ 이며 $I_{b}, I_{c}$는 서로 상쇄되므로 $I_{0} = \\frac{1}{3}I_{a} = 30\\sin\\omega t$가 됩니다.",
    image: null
  },
  {
    id: 74,
    question: "전원 임피던스가 $1.4 + j5[\\Omega]$ 인 회로에서 부하로 전달되는 전력이 최대가 되기 위한 부하 임피던스 $[\\Omega]$는?",
    options: [
      "$1.4 - j5$",
      "$1.4 + j5$",
      "1.4",
      "$j5$"
    ],
    answer: 1,
    explanation: "최대 전력 전달 조건은 부하 임피던스가 전원 임피던스의 공액 복소수($Z_{L} = Z_{s}^{*}$)일 때입니다.",
    image: null
  },
  {
    id: 75,
    question: "그림과 같은 삼각 파형($t=0$에서 $1$까지 $t$, $t=1$에서 $2$까지 $2-t$)의 라플라스 변환은?",
    options: [
      "$\\frac{1}{s^{2}}(1 - 2e^{s})$",
      "$\\frac{1}{s^{2}}(1 - 2e^{-s})$",
      "$\\frac{1}{s^{2}}(1 - 2e^{s} + e^{2s})$",
      "$\\frac{1}{s^{2}}(1 - 2e^{-s} + e^{-2s})$"
    ],
    answer: 4,
    explanation: "$f(t) = t u(t) - 2(t-1)u(t-1) + (t-2)u(t-2)$ 이므로 변환 시 $\\frac{1}{s^{2}}(1 - 2e^{-s} + e^{-2s})$가 됩니다.",
    image: null
  },
  {
    id: 76,
    question: "전류 $i = 2t + 3t^{2} [A]$가 흐를 때, 30초 동안 통과한 총 전기량은 몇 $[Ah]$ 인가?",
    options: [
      "4.25",
      "6.75",
      "7.75",
      "8.25"
    ],
    answer: 3,
    explanation: "$Q = \\int_{0}^{30} (2t + 3t^{2}) dt = [t^{2} + t^{3}]_{0}^{30} = 900 + 27000 = 27900 [C]$. 이를 $[Ah]$로 바꾸면 $27900 / 3600 = 7.75 [Ah]$입니다.",
    image: null
  },
  {
    id: 77,
    question: "전압 $v(t) = 100\\sqrt{2}\\sin\\omega t + 200\\sqrt{2}\\sin 3\\omega t [V]$를 $R=8[\\Omega], \\omega L=2[\\Omega]$ 인 직렬회로에 인가 시 제3고조파 전류의 실효값$[A]$은?",
    options: [
      "10",
      "14",
      "20",
      "28"
    ],
    answer: 3,
    explanation: "제3고조파에서 리액턴스는 $3\\omega L = 6[\\Omega]$입니다. $Z_{3} = \\sqrt{8^{2} + 6^{2}} = 10[\\Omega]$. $I_{3} = V_{3} / Z_{3} = 200 / 10 = 20[A]$입니다.",
    image: null
  },
  {
    id: 78,
    question: "회로에 전압 $v_{1}(t) = e^{-4t} [V]$ 인가 시 $v_{2}(t) [V]$는? (단, $R=2[\\Omega], L=1[H]$ 이며 $v_{2}$는 저항 양단 전압이다.)",
    options: [
      "$e^{-2t} - e^{-4t}$",
      "$2e^{-2t} - 2e^{-4t}$",
      "$-2e^{-2t} + 2e^{-4t}$",
      "$-2e^{-2t} - 2e^{-4t}$"
    ],
    answer: 1,
    explanation: "전달함수 $H(s) = \\frac{2}{s+2}$, 입력 $V_{1}(s) = \\frac{1}{s+4}$. 출력 $V_{2}(s) = \\frac{2}{(s+2)(s+4)} = \\frac{1}{s+2} - \\frac{1}{s+4}$. 역변환 시 $e^{-2t} - e^{-4t}$입니다.",
    image: null
  },
  {
    id: 79,
    question: "4단자 정수 $A=8, B=j2, D=1.625+j$ 일 때, 정수 $C$는?",
    options: [
      "$4 - j4$",
      "$8 - j1.5$",
      "$4 - j6$",
      "$3 - j4$"
    ],
    answer: 3,
    explanation: "$AD - BC = 1$ 에서 $C = \\frac{AD-1}{B} = \\frac{8(1.625+j)-1}{j2} = \\frac{12+j8}{j2} = 4 - j6$ 입니다.",
    image: null
  },
  {
    id: 80,
    question: "저항 $R[\\Omega]$ 6개를 $\\Delta$ 결선 내부의 각 꼭짓점과 중성점을 잇는 형태로 결선 후 3상 전압 $V$를 가했을 때 상전류 $I[A]$의 크기는?",
    options: [
      "$\\frac{V}{R}$",
      "$\\frac{V}{2R}$",
      "$\\frac{V}{4R}$",
      "$\\frac{V}{5R}$"
    ],
    answer: 3,
    explanation: "회로를 해석하면 한 상의 임피던스가 $4R$이 되는 구조이므로 상전류 $I = V / 4R$이 됩니다.",
    image: null
  },
  {
    id: 81,
    question: "저압 옥상전선로의 시설기준으로 틀린 것은?",
    options: [
      "전개된 장소에 위험의 우려가 없도록 시설할 것",
      "전선은 지름 $2.6[mm]$ 이상의 경동선을 사용할 것",
      "전선은 절연전선(옥외용 비닐절연전선 제외)을 사용할 것",
      "전선은 상시 바람에 식물에 접촉하지 않도록 시설할 것"
    ],
    answer: 3,
    explanation: "옥상전선로는 OW(옥외용 비닐절연전선)를 포함한 절연전선을 사용할 수 있습니다.",
    image: null
  },
  {
    id: 82,
    question: "아크용접장치의 시설기준으로 틀린 것은?",
    options: [
      "용접변압기는 절연변압기일 것",
      "1차측 전로의 대지전압은 $300[V]$ 이하일 것",
      "2차측 전로에는 용접변압기 근처에 개폐기를 시설할 것",
      "2차측 전로 중 전극에 이르는 부분은 전류를 안전하게 통할 수 있을 것"
    ],
    answer: 3,
    explanation: "개폐기는 2차측이 아니라 1차측에 시설해야 합니다.",
    image: null
  },
  {
    id: 83,
    question: "25[kV] 이하 특고압 가공전선로가 상호 교차 시 양쪽 모두 나전선이라면 이격거리는 몇 $[m]$ 이상인가?",
    options: [
      "1.0",
      "1.2",
      "1.5",
      "1.75"
    ],
    answer: 3,
    explanation: "나전선인 경우 $1.5[m]$, 절연전선 $1.0[m]$, 케이블 $0.5[m]$ 이상입니다.",
    image: null
  },
  {
    id: 84,
    question: "1차 22000[V]인 중성점 비접지식 변압기의 특고압측 절연내력 시험전압$[V]$은?",
    options: [
      "24000",
      "27500",
      "33000",
      "44000"
    ],
    answer: 2,
    explanation: "$7kV$ 초과 비접지식이므로 최대사용전압의 1.25배를 적용합니다. $22000 \\times 1.25 = 27500[V]$ 입니다.",
    image: null
  },
  {
    id: 85,
    question: "가공전선로의 지지물로 볼 수 없는 것은?",
    options: [
      "철주",
      "지선",
      "철탑",
      "철근 콘크리트주"
    ],
    answer: 2,
    explanation: "지선은 지지물의 강도를 보강하는 요소일 뿐, 그 자체로 지지물은 아닙니다.",
    image: null
  },
  {
    id: 86,
    question: "타임스위치(센서등)를 반드시 시설해야 하는 곳은?",
    options: [
      "공장",
      "상점",
      "사무실",
      "아파트 현관"
    ],
    answer: 4,
    explanation: "아파트 현관(3분 이내 소등) 및 숙박업소 객실(1분 이내 소등)에는 타임스위치를 시설해야 합니다.",
    image: null
  },
  {
    id: 87,
    question: "교류 전기철도 급전시스템에서 순시조건($t \\le 0.5$초)일 때 레일 전위의 최대 허용접촉전압$[V]$은?",
    options: [
      "60",
      "65",
      "440",
      "670"
    ],
    answer: 4,
    explanation: "순시조건 670V, 일시적 조건 65V, 영구적 조건 60V 이하로 규정되어 있습니다.",
    image: null
  },
  {
    id: 88,
    question: "이차전지 자동 차단 장치를 시설해야 하는 경우로 틀린 것은?",
    options: [
      "과저항이 발생한 경우",
      "과전압이 발생한 경우",
      "제어장치에 이상이 발생한 경우",
      "내부 온도가 급격히 상승할 경우"
    ],
    answer: 1,
    explanation: "과전압, 과전류, 제어장치 이상, 온도 급상승 시 차단해야 하며 '과저항'은 해당되지 않습니다.",
    image: null
  },
  {
    id: 89,
    question: "뱅크용량이 몇 $[kVA]$ 이상인 조상기에는 내부 고장 시 자동 차단 장치를 해야 하는가?",
    options: [
      "10000",
      "15000",
      "20000",
      "25000"
    ],
    answer: 2,
    explanation: "조상기 및 $15000kVA$ 이상의 전력용 커패시터/분로리액터에 시설합니다.",
    image: null
  },
  {
    id: 90,
    question: "전주외등 시설 시 사용하는 공사방법으로 틀린 것은?",
    options: [
      "애자공사",
      "케이블공사",
      "금속관공사",
      "합성수지관공사"
    ],
    answer: 1,
    explanation: "전주외등 배선은 케이블, 금속관, 합성수지관 공사 중 하나여야 하며 애자공사는 허용되지 않습니다.",
    image: null
  },
  {
    id: 91,
    question: "농사용 저압 가공전선로의 지지점 간 거리는 몇 $[m]$ 이하인가?",
    options: [
      "30",
      "50",
      "60",
      "100"
    ],
    answer: 1,
    explanation: "농사용 저압 가공전선로의 경간은 $30[m]$ 이하로 제한됩니다.",
    image: null
  },
  {
    id: 92,
    question: "특고압 가공전선로에서 발생하는 극저주파 전계는 지표상 $1[m]$에서 몇 $[kV/m]$ 이하인가?",
    options: [
      "2.0",
      "2.5",
      "3.0",
      "3.5"
    ],
    answer: 4,
    explanation: "전계는 $3.5[kV/m]$, 자계는 $83.3[\\mu T]$ 이하로 유지해야 합니다.",
    image: null
  },
  {
    id: 93,
    question: "단면적 $55[mm^{2}]$ 경동연선을 사용하는 특고압 가공전선로의 B종 철주 허용 최대 경간$[m]$은?",
    options: [
      "150",
      "250",
      "300",
      "500"
    ],
    answer: 4,
    explanation: "B종 지지물에서 단면적 $50[mm^{2}]$ 이상 전선 사용 시 경간은 $500[m]$까지 허용됩니다.",
    image: null
  },
  {
    id: 94,
    question: "저압 옥측전선로에서 목조 조영물에 시설할 수 있는 공사는?",
    options: [
      "금속관 공사",
      "버스덕트공사",
      "합성수지관공사",
      "케이블공사(MI케이블 사용)"
    ],
    answer: 3,
    explanation: "금속관, 버스덕트, 케이블(MI 포함) 공사는 목조 이외의 조영물에만 가능하며, 목조에는 합성수지관 및 애자공사만 가능합니다.",
    image: null
  },
  {
    id: 95,
    question: "시가지 시설 $154[kV]$ 가공전선로와 도로 사이의 이격거리는 몇 $[m]$ 이상인가?",
    options: [
      "4.4",
      "4.8",
      "5.2",
      "5.6"
    ],
    answer: 2,
    explanation: "$3 + (15.4-3.5) \\times 0.15 = 3 + 12 \\times 0.15 = 4.8[m]$ 입니다. (단수 12적용)",
    image: null
  },
  {
    id: 96,
    question: "전기철도 귀선로에 대한 설명으로 틀린 것은?",
    options: [
      "나전선을 가공식으로 가설하는 것을 원칙으로 한다.",
      "사고 시에도 충분한 허용전류용량을 가져야 한다.",
      "레일 등으로 구성하여 변압기 중성점과 공통접지에 접속한다.",
      "비절연보호도체 위치는 레일전위 상승 경감을 고려한다."
    ],
    answer: 1,
    explanation: "귀선로는 절연된 전선을 사용하거나 레일을 이용하며, 나전선 가공 가설이 원칙은 아닙니다.",
    image: null
  },
  {
    id: 97,
    question: "피뢰시스템이 접속되지 않은 구리 소재 접지도체의 최소 단면적은 몇 $[mm^{2}]$ 이상인가?",
    options: [
      "0.75",
      "2.5",
      "6",
      "16"
    ],
    answer: 3,
    explanation: "구리 $6[mm^{2}]$, 철제 $50[mm^{2}]$ 이상이어야 합니다. (피뢰시스템 접속 시 구리 $16[mm^{2}]$)",
    image: null
  },
  {
    id: 98,
    question: "사용전압 $345[kV]$ 인 변전소 울타리 높이와 충전부까지 거리의 합계는 몇 $[m]$ 이상인가?",
    options: [
      "8.16",
      "8.28",
      "8.40",
      "9.72"
    ],
    answer: 2,
    explanation: "$160kV$ 초과이므로 $6 + (34.5-16) \\times 0.12 = 6 + 19 \\times 0.12 = 8.28[m]$ 입니다.",
    image: null
  },
  {
    id: 99,
    question: "전력보안 가공통신선을 횡단보도교 위에 시설 시 노면상 높이는 몇 $[m]$ 이상인가?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 1,
    explanation: "횡단보도교 위는 $3[m]$, 도로 횡단 시 $5[m]$, 철도 횡단 시 $6.5[m]$ 이상입니다.",
    image: null
  },
  {
    id: 100,
    question: "케이블트레이 공사에 사용할 수 없는 케이블은?",
    options: [
      "연피 케이블",
      "난연성 케이블",
      "캡타이어 케이블",
      "알루미늄피 케이블"
    ],
    answer: 3,
    explanation: "연피, 알루미늄피, 난연성 케이블은 가능하나 캡타이어 케이블은 케이블트레이에 사용할 수 없습니다.",
    image: null
  }
];

export default questions;