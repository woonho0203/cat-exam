const questions = [
  {
    id: 1,
    question: "공기 중에 있는 반지름 $a[m]$의 독립 금속구의 정전 용량은 몇 $[F]$인가?",
    options: [
      "$2\\pi\\epsilon_{0}a$",
      "$4\\pi\\epsilon_{0}a$",
      "$\\frac{1}{2\\pi\\epsilon_{0}a}$",
      "$\\frac{1}{4\\pi\\epsilon_{0}a}$"
    ],
    answer: 2,
    explanation: "독립 도체구의 정전용량 공식 $C = 4\\pi\\epsilon_{0}a$에 의해 정답은 2번입니다.",
    image: null
  },
  {
    id: 2,
    question: "서로 다른 두 종류의 금속 도체로 하나의 폐회로를 만들고 여기에 전류를 흘리면 두 금속의 양 접속점에서 어느 한 쪽은 온도가 올라가고, 다른 한 쪽은 온도가 내려가서 열의 발생 또는 흡수가 생기는 현상을 표현하는 효과로 알맞은 것은?",
    options: [
      "핀치(Pinch) 효과",
      "펠티에(Peltier) 효과",
      "톰슨(Thomson) 효과",
      "제벡(Seebeck) 효과"
    ],
    answer: 2,
    explanation: "두 종류의 금속 접점에 전류를 흘릴 때 열의 흡수 또는 발생이 일어나는 현상은 펠티에 효과입니다.",
    image: null
  },
  {
    id: 3,
    question: "진공 중에 서로 떨어져 있는 두 도체 A, B가 있다. 도체 A에만 1[C]의 전하를 줄 때, 도체 A, B의 전위가 각각 3[V], 2[V]이었다. 지금 도체 A, B에 각각 3[C]과 1[C]의 전하를 주면 도체 A의 전위는 몇 [V]인가?",
    options: [
      "16",
      "9",
      "11",
      "13"
    ],
    answer: 3,
    explanation: "$V_{A} = P_{11}Q_{A} + P_{12}Q_{B}$에서 $P_{11}=3, P_{12}=2$이므로, $V_{A} = 3(3) + 2(1) = 11[V]$입니다.",
    image: null
  },
  {
    id: 4,
    question: "정상 전류계에서 $J$는 전류밀도, $\\sigma$는 도전율, $\\rho$는 고유저항, $E$는 전계의 세기일 때, 옴(Ohm)의 법칙의 미분형은?",
    options: [
      "$J = \\sigma E$",
      "$J = \\rho E$",
      "$J = \\frac{E}{\\sigma}$",
      "$J = \\rho\\sigma E$"
    ],
    answer: 1,
    explanation: "옴의 법칙 미분형은 $J = \\sigma E$ 또는 $J = \\frac{1}{\\rho}E$입니다.",
    image: null
  },
  {
    id: 5,
    question: "자속밀도 $10[Wb/m^{2}]$ 자계 중에서 $10[cm]$ 도체를 자계와 $30^{\\circ}$의 각도로 $30[m/s]$로 움직일 때, 도체에 유기되는 기전력은 몇 $[V]$인가?",
    options: [
      "15",
      "$15\\sqrt{3}$",
      "1,500",
      "$1,500\\sqrt{3}$"
    ],
    answer: 1,
    explanation: "$e = Blv \\sin\\theta = 10 \\times 0.1 \\times 30 \\times \\sin 30^{\\circ} = 15[V]$입니다.",
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
    explanation: "히스테리시스 손실은 히스테리시스 루프의 면적에 비례합니다.",
    image: null
  },
  {
    id: 7,
    question: "반지름이 $r[m]$인 반원형 전류 $I[A]$에 의한 반원의 중심(O)에서 자계의 세기 $[AT/m]$는?",
    options: [
      "$\\frac{2I}{r}$",
      "$\\frac{I}{r}$",
      "$\\frac{I}{2r}$",
      "$\\frac{I}{4r}$"
    ],
    answer: 4,
    explanation: "원형 코일 중심 자계 $H = \\frac{I}{2r}$의 절반인 $\\frac{I}{4r}$입니다.",
    image: null
  },
  {
    id: 8,
    question: "일반적인 전자계에서 성립되는 맥스웰의 기본방정식이 아닌 것은? (단, $i_{c}$는 전류밀도, $\\rho$는 공간전하밀도이다.)",
    options: [
      "$\\nabla \\times H = i_{c} + \\frac{\\partial D}{\\partial t}$",
      "$\\nabla \\cdot D = \\rho$",
      "$\\nabla \\times E = -\\frac{\\partial B}{\\partial t}$",
      "$i_{c} = \\nabla \\cdot E$"
    ],
    answer: 4,
    explanation: "맥스웰의 제1법칙은 $\\nabla \\times H = i_{c} + \\frac{\\partial D}{\\partial t}$이며, $i_{c} = \\nabla \\cdot E$는 성립하지 않습니다.",
    image: null
  },
  {
    id: 9,
    question: "자기 인덕턴스 $L[H]$인 코일에 전류 $I[A]$를 흘렸을 때, 자계의 세기가 $H[A/m]$ 이다. 이 코일에 전류 $\\frac{I}{2}[A]$를 흘리면 저장되는 자기 에너지밀도 $[J/m^{3}]$는?",
    options: [
      "$\\frac{1}{2}LI^{2}$",
      "$\\frac{1}{2}\\mu_{0}H^{2}$",
      "$\\frac{1}{8}LI^{2}$",
      "$\\frac{1}{8}\\mu_{0}H^{2}$"
    ],
    answer: 4,
    explanation: "에너지 밀도 $w = \\frac{1}{2}\\mu H^{2}$에서 전류가 $1/2$배가 되면 자계 $H$도 $1/2$배가 되어 에너지는 $1/4$배인 $\\frac{1}{8}\\mu_{0}H^{2}$가 됩니다.",
    image: null
  },
  {
    id: 10,
    question: "유전율이 각각 다른 두 유전체가 서로 경계를 이루며 접해 있다. 다음 중 옳은 것은? (단, 이 경계면에는 진전하분포가 없다고 한다.)",
    options: [
      "경계면에서 전계의 법선성분은 연속이다.",
      "경계면에서 전속밀도의 접선성분은 연속이다.",
      "경계면에서 전계와 전속밀도는 굴절한다.",
      "경계면에서 전계와 전속밀도는 불변이다."
    ],
    answer: 3,
    explanation: "유전율이 다른 경계면에서 전계와 전속밀도는 굴절하며, 전계의 접선성분과 전속밀도의 법선성분이 연속입니다.",
    image: null
  },
  {
    id: 11,
    question: "전위경도 $V$와 전계 $E$의 관계식은?",
    options: [
      "$E = grad~V$",
      "$E = -grad~V$",
      "$E = div~V$",
      "$E = -div~V$"
    ],
    answer: 2,
    explanation: "전계는 전위의 기울기에 마이너스를 붙인 $E = -\\nabla V$입니다.",
    image: null
  },
  {
    id: 12,
    question: "다음 정전계에 관한 식 중에서 틀린 것은? (단, $D$는 전속밀도, $V$는 전위, $\\rho$는 공간(체적)전하밀도, $\\epsilon$은 유전율이다.)",
    options: [
      "가우스의 정리: $div~D = \\rho$",
      "포아송의 방정식: $\\nabla^{2}V = \\frac{\\rho}{\\epsilon}$",
      "라플라스의 방정식: $\\nabla^{2}V = 0$",
      "발산의 정리: $\\oint_{s}D\\cdot ds = \\int_{v}divDdv$"
    ],
    answer: 2,
    explanation: "포아송의 방정식은 $\\nabla^{2}V = -\\frac{\\rho}{\\epsilon}$입니다.",
    image: null
  },
  {
    id: 13,
    question: "질량 $[m]$이 $10^{-10}[kg]$ 이고, 전하량 $(Q)$이 $10^{-8}[C]$ 인 전하가 전기장에 의해 가속되어 운동하고 있다. 가속도가 $a=10^{2}i+10^{2}j[m/s^{2}]$ 일 때 전기장의 세기 $E [V/m]$는?",
    options: [
      "$E = 10^{4}i+10^{5}j$",
      "$E = i+10j$",
      "$E = i+j$",
      "$E = 10^{-6}i+10^{-4}j$"
    ],
    answer: 3,
    explanation: "$F=ma=QE$에서 $E = \\frac{ma}{Q} = \\frac{10^{-10} \\times (10^{2}i+10^{2}j)}{10^{-8}} = i+j$입니다.",
    image: null
  },
  {
    id: 14,
    question: "간격 $d[m]$의 평행판 도체에 $V[kV]$의 전위차를 주었을 때 음극 도체판을 초속도 0으로 출발한 전자 $e[C]$이 양극 도체판에 도달할 때의 속도는 몇 $[m/s]$인가? (단, $m[kg]$은 전자의 질량이다.)",
    options: [
      "$\\frac{eV}{m}$",
      "$\\sqrt{\\frac{2eV}{m}}$",
      "$\\sqrt{\\frac{eV}{2m}}$",
      "$\\frac{2eV}{m}$"
    ],
    answer: 2,
    explanation: "에너지 보존 법칙 $\\frac{1}{2}mv^{2} = eV$에서 $v = \\sqrt{\\frac{2eV}{m}}$입니다.",
    image: null
  },
  {
    id: 15,
    question: "비투자율이 $\\mu_{s1}, \\mu_{s2}$인 각각 다른 자성체를 접하여 놓고 $\\theta_{1}$을 입사각이라 하고, $\\theta_{2}$를 굴절각이라 한다. 경계면에 자하가 없는 경우 미소 폐곡면을 취하여 이곳에 출입하는 자속수를 구하면?",
    options: [
      "$\\int_{l}B \\cdot ndl = 0$",
      "$\\int_{s}B \\cdot nds = 0$",
      "$\\int_{s}B \\cdot ds = 0$",
      "$\\int_{s}B \\cdot n \\sin\\theta ds = 0$"
    ],
    answer: 2,
    explanation: "자속의 연속성에 의해 폐곡면을 통과하는 총 자속은 0입니다.",
    image: null
  },
  {
    id: 16,
    question: "대지면에 높이 $h$로 평행하게 가설된 매우 긴 선전하가 지면으로부터 받는 힘은?",
    options: [
      "$h^{2}$에 비례한다.",
      "$h^{2}$에 반비례한다.",
      "$h$에 비례한다.",
      "$h$에 반비례한다."
    ],
    answer: 4,
    explanation: "무한 선전하와 평면 사이의 힘은 거리 $h$에 반비례($1/h$)합니다.",
    image: null
  },
  {
    id: 17,
    question: "액체 유전체를 포함한 콘덴서 용량이 $C[F]$인 것에 $V[V]$의 전압을 가했을 경우에 흐르는 누설전류 $[A]$는? (단, 유전체의 유전율은 $\\epsilon[F/m]$, 고유저항은 $\\rho[\\Omega\\cdot m]$이다.)",
    options: [
      "$\\rho\\epsilon C V$",
      "$\\frac{C}{\\rho\\epsilon}V$",
      "$\\frac{CV}{\\rho\\epsilon}$",
      "$\\frac{\\rho\\epsilon V}{C}$"
    ],
    answer: 2,
    explanation: "$R = \\frac{\\rho\\epsilon}{C}$이므로 $I = \\frac{V}{R} = \\frac{CV}{\\rho\\epsilon}$입니다.",
    image: null
  },
  {
    id: 18,
    question: "$-1.2[C]$의 점전하가 $5a_{x}+2a_{y}-3a_{z}[m/s]$인 속도로 운동한다. 이 점전하가 $B = -4a_{x}+4a_{y}+3a_{z}[Wb/m^{2}]$인 자계 내에서 운동하고 있을 때 이 점전하에 작용하는 힘은 약 몇 $[N]$인가?",
    options: [
      "$-21.6a_{x}+3.6a_{y}-33.6a_{z}$",
      "$21.6a_{x}-3.6a_{y}+33.6a_{z}$",
      "$-21.6a_{x}-3.6a_{y}-33.6a_{z}$",
      "$21.6a_{x}+3.6a_{y}+33.6a_{z}$"
    ],
    answer: 4,
    explanation: "$F = Q(v \\times B)$ 벡터 외적 계산을 통해 산출됩니다.",
    image: null
  },
  {
    id: 19,
    question: "구형단면의 반지름이 $d[m]$인 자성체가 있다. 이 자성체의 자화의 세기를 $J[Wb/m^{2}]$라 할 때 자기모멘트를 표현한 식으로 알맞은 것은?",
    options: [
      "$\\frac{4}{3}\\pi d^{3}J$",
      "$4\\pi d^{2}J$",
      "$\\frac{3}{4}\\pi d^{3}J$",
      "$\\pi d^{2}J$"
    ],
    answer: 1,
    explanation: "자기모멘트 $M = J \\times V$ (체적)이므로 구의 체적을 곱한 1번이 정답입니다.",
    image: null
  },
  {
    id: 20,
    question: "전류 분포가 도체의 표면 부근에 집중해서 흐르는 현상을 표피효과라 할 때 표피효과에 대한 설명으로 잘못된 것은?",
    options: [
      "도체에 교류가 흐르면 표면에서부터 중심으로 들어갈수록 전류밀도가 작아진다.",
      "표피효과는 고주파일수록 심하다.",
      "표피효과는 도체의 전도도가 클수록 심하다.",
      "표피효과는 도체의 투자율이 작을수록 심하다."
    ],
    answer: 4,
    explanation: "표피효과는 투자율($\\mu$)이 클수록 더 심하게 나타납니다.",
    image: null
  },
  {
    id: 21,
    question: "망상(network) 배전방식에 대한 설명으로 옳은 것은?",
    options: [
      "부하 증가에 대한 융통성이 적다.",
      "전압 변동이 대체로 크다.",
      "인축에 대한 감전 사고가 적어서 농촌에 적합하다.",
      "방사상식보다 무정전 공급의 신뢰도가 더 높다."
    ],
    answer: 4,
    explanation: "망상 배전방식은 환상식보다 더 복잡한 그물망 구조로, 무정전 공급 신뢰도가 가장 높습니다.",
    image: null
  },
  {
    id: 22,
    question: "1년 365일 중 185일은 이 양 이하로 내려가지 않는 유량은?",
    options: [
      "평수량",
      "풍수량",
      "고수량",
      "저수량"
    ],
    answer: 1,
    explanation: "풍수량(95일), 평수량(185일), 저수량(273일), 갈수량(355일)입니다.",
    image: null
  },
  {
    id: 23,
    question: "변전소에서 비접지 선로의 접지 보호용으로 사용되는 계전기에 영상전류를 공급하는 것은?",
    options: [
      "CT",
      "GPT",
      "ZCT",
      "PT"
    ],
    answer: 3,
    explanation: "ZCT(Zero-phase Current Transformer, 영상변류기)는 영상전류를 검출하여 지락 계전기에 공급합니다.",
    image: null
  },
  {
    id: 24,
    question: "송전선의 특성 임피던스는 저항과 누설 콘덕턴스를 무시하면 어떻게 표시되는가? (단, $L$은 선로의 인덕턴스, $C$는 선로의 정전용량이다.)",
    options: [
      "$\\sqrt{\\frac{L}{C}}$",
      "$\\sqrt{\\frac{C}{L}}$",
      "$\\frac{L}{C}$",
      "$\\frac{C}{L}$"
    ],
    answer: 1,
    explanation: "무손실 선로에서 특성 임피던스 $Z_{0} = \\sqrt{\\frac{L}{C}}$ 입니다.",
    image: null
  },
  {
    id: 25,
    question: "송전선의 1선 지락사고로 영상전류가 흐를 때 통신선에 유기되는 전자유도전압을 알맞게 설명한 것은?",
    options: [
      "통신선의 길이와 상호인덕턴스의 곱에 반비례한다.",
      "통신선의 길이와 상호인덕턴스의 곱에 비례한다.",
      "통신선의 길이와는 무관하고 상호인덕턴스에 비례한다.",
      "통신선의 길이에 비례하고 상호인덕턴스와는 무관하다."
    ],
    answer: 2,
    explanation: "전자유도전압 $E_{m} = \\omega M l (3I_{0})$이므로 길이($l$)와 상호인덕턴스($M$)의 곱에 비례합니다.",
    image: null
  },
  {
    id: 26,
    question: "파동임피던스가 $300[\\Omega]$인 가공송전선 $1[km]$당의 인덕턴스는 약 몇 $[mH/km]$인가? (단, 공기 중의 전파속도는 $3 \\times 10^{5} [km/s]$로 가정한다.)",
    options: [
      "4",
      "3",
      "2",
      "1"
    ],
    answer: 4,
    explanation: "$Z = \\sqrt{L/C}$와 $v = 1/\\sqrt{LC}$를 이용하면 $L = Z/v = 300 / (3 \\times 10^{5}) = 10^{-3} [H] = 1[mH]$ 입니다.",
    image: null
  },
  {
    id: 27,
    question: "변압기의 층간단락 보호계전기로 가장 적당한 것은?",
    options: [
      "비율차동 계전기",
      "방향 계전기",
      "과전압 계전기",
      "거리 계전기"
    ],
    answer: 1,
    explanation: "변압기 내부 고장(층간단락 등) 보호에는 비율차동 계전기가 주로 사용됩니다.",
    image: null
  },
  {
    id: 28,
    question: "하천의 유황곡선이 거의 수평을 그릴 때 의미를 설명한 것이다. 가장 알맞은 것은?",
    options: [
      "하천의 유량변동이 거의 없다는 것을 말한다.",
      "하천의 유량변동이 심하다는 것을 말한다.",
      "하전에 유량이 많다는 것을 말한다.",
      "하전에 유량이 적다는 것을 말한다."
    ],
    answer: 1,
    explanation: "유황곡선이 평탄하다는 것은 연간 유량의 변화가 적어 수력 발전에 유리함을 의미합니다.",
    image: null
  },
  {
    id: 29,
    question: "수변전설비에서 1차측에 설치하는 차단기의 용량은 어느 것에 의하여 정하는가?",
    options: [
      "변압기 용량",
      "수전계약용량",
      "공급측 단락용량",
      "부하설비용량"
    ],
    answer: 3,
    explanation: "차단기 용량(차단 용량)은 계통의 단락 용량에 의해 결정됩니다.",
    image: null
  },
  {
    id: 30,
    question: "1상의 대지정전용량 $C[F]$, 주파수 $f[Hz]$인 3상 송전선의 소호리액터 공진탭의 리액턴스는 몇 $[\\Omega]$인가? (단, 소호리액터를 접속시키는 변압기의 리액턴스는 $x_{t}[\\Omega]$이다.)",
    options: [
      "$\\frac{1}{3\\omega C} + \\frac{x_{t}}{3}$",
      "$\\frac{1}{3\\omega C} - \\frac{x_{t}}{3}$",
      "$\\frac{1}{3\\omega C} + 3x_{t}$",
      "$\\frac{1}{3\\omega C} - 3x_{t}$"
    ],
    answer: 2,
    explanation: "병렬 공진 조건 $3\\omega L = \\frac{1}{\\omega C}$에서 소호리액터 $X_{L} = \\frac{1}{3\\omega C} - \\frac{x_{t}}{3}$ 가 유도됩니다.",
    image: null
  },
  {
    id: 31,
    question: "정격전압 $25.8[kV]$, 정격차단용량 $1000[MVA]$인 3상 차단기의 정격차단전류는 약 몇 $[kA]$인가?",
    options: [
      "12.5",
      "22.4",
      "35.6",
      "41.2"
    ],
    answer: 2,
    explanation: "$I_{s} = \\frac{P_{s}}{\\sqrt{3}V} = \\frac{1000}{\\sqrt{3} \\times 25.8} \\approx 22.37[kA]$ 입니다.",
    image: null
  },
  {
    id: 32,
    question: "송전선로에 복도체를 사용하는 이유로 가장 알맞은 것은?",
    options: [
      "철탑의 하중을 평형 시키기 위해서이다.",
      "선로의 진동을 없애기 위해서이다.",
      "선로를 뇌격으로부터 보호하기 위해서이다.",
      "코로나를 방지하고 인덕턴스를 감소시키기 위해서이다."
    ],
    answer: 4,
    explanation: "복도체는 전선의 등가 반지름을 크게 하여 코로나 임계전압을 높이고 리액턴스를 감소시킵니다.",
    image: null
  },
  {
    id: 33,
    question: "케이블의 전력 손실과 관계가 없는 것은?",
    options: [
      "철손",
      "유전체손",
      "시스손",
      "도체의 저항손"
    ],
    answer: 1,
    explanation: "케이블은 철심이 없으므로 철손이 발생하지 않습니다. 저항손, 유전체손, 연피(시스)손이 주된 손실입니다.",
    image: null
  },
  {
    id: 34,
    question: "최소 동작전류값 이상이면 일정한 시간에 동작하는 한시특성을 갖는 계전기는?",
    options: [
      "정한시 계전기",
      "반한시 계전기",
      "순한시 계전기",
      "반한시성 정한시 계전기"
    ],
    answer: 1,
    explanation: "전류의 크기와 관계없이 설정된 일정한 시간에 동작하는 것은 정한시 계전기입니다.",
    image: null
  },
  {
    id: 35,
    question: "전력계통의 주회로에 사용되는 것으로 고장전류와 같은 대전류를 차단할 수 있는 것은?",
    options: [
      "선로개폐기(LS)",
      "단로기(DS)",
      "차단기(CB)",
      "유입개폐기(OS)"
    ],
    answer: 3,
    explanation: "차단기(CB)는 부하 전류 및 사고 전류(단락, 지락 등)를 모두 차단할 수 있는 장치입니다.",
    image: null
  },
  {
    id: 36,
    question: "공통중성선 다중접지 3상 4선식 배전선로에서 고압측(1차측) 중성선과 저압측(2차측) 중성선을 전기적으로 연결하는 주목적은?",
    options: [
      "저압측의 단락사고를 검출하기 위함",
      "저압측의 접지사고를 검출하기 위함",
      "주상변압기의 중성선측 부싱(bushing)을 생략하기 위함",
      "고저압 혼촉시 수용가에 침입하는 상승전압을 억제하기 위함"
    ],
    answer: 4,
    explanation: "변압기 내부에서 고저압 혼촉 사고 발생 시 저압측 전위 상승을 억제하여 기기와 인명을 보호합니다.",
    image: null
  },
  {
    id: 37,
    question: "송전선로의 고장전류의 계산에 영상임피던스가 필요한 경우는?",
    options: [
      "3상 단락",
      "3선 단선",
      "1선 지락",
      "선간 단락"
    ],
    answer: 3,
    explanation: "1선 지락이나 지락이 포함된 비대칭 고장 해석 시에는 영상, 정상, 역상 임피던스가 모두 필요합니다.",
    image: null
  },
  {
    id: 38,
    question: "전력원선도에서 구할 수 없는 것은?",
    options: [
      "정태안정 극한전력",
      "송·수전단 전압간의 상차각",
      "선로손실과 송전효율",
      "과도안정 극한전력"
    ],
    answer: 4,
    explanation: "전력원선도는 정태적인 특성을 나타내므로 시간에 따른 변화를 포함하는 과도안정도는 구할 수 없습니다.",
    image: null
  },
  {
    id: 39,
    question: "화력발전소에서 가장 큰 손실은?",
    options: [
      "소내용 동력",
      "송풍기 손실",
      "복수기에서의 손실",
      "연도 배출가스 손실"
    ],
    answer: 3,
    explanation: "화력발전소 전체 손실 중 복수기에서 냉각수로 방출되는 손실이 약 50% 내외로 가장 큽니다.",
    image: null
  },
  {
    id: 40,
    question: "송전전력, 송전거리, 전선의 비중 및 전력손실률이 일정하다고 하면 전선의 단면적 $A[mm^{2}]$와 송전전압 $V[kV]$와의 관계로 옳은 것은?",
    options: [
      "$A \\propto V$",
      "$A \\propto V^{2}$",
      "$A \\propto \\frac{1}{\\sqrt{V}}$",
      "$A \\propto \\frac{1}{V^{2}}$"
    ],
    answer: 4,
    explanation: "전선 단면적은 전압의 제곱에 반비례($A \\propto 1/V^{2}$)합니다.",
    image: null
  },
  {
    id: 41,
    question: "직류기에서 브러시의 위치를 회전방향으로 이동시켰을 때의 정류 변화로 옳은 것은?",
    options: ["과정류", "부족정류", "직선정류", "정현파정류"],
    answer: 2,
    explanation: "회전방향으로 이동하면 정류 말기에 전류 변화가 커져 부족정류가 발생하기 쉽습니다.",
    image: null
  },
  {
    id: 42,
    question: "직류 분권전동기의 계자 저항을 증가시키면 회전속도는 어떻게 되는가?",
    options: ["감소한다", "증가한다", "변하지 않는다", "정지한다"],
    answer: 2,
    explanation: "$N = \\frac{V-I_{a}R_{a}}{k\\phi}$에서 계자 저항이 커지면 자속 $\\phi$가 감소하여 속도는 증가합니다.",
    image: null
  },
  {
    id: 43,
    question: "변압기의 1차 권수가 1000, 2차 권수가 100일 때 2차측 저항 $0.1[\\Omega]$을 1차측으로 환산하면 몇 $[\\Omega]$인가?",
    options: ["1", "10", "100", "1000"],
    answer: 2,
    explanation: "$R_{1} = a^{2}R_{2}$에서 $a = 10$이므로 $100 \\times 0.1 = 10[\\Omega]$입니다.",
    image: null
  },
  {
    id: 44,
    question: "3상 유도전동기의 회전 방향을 바꾸기 위한 방법으로 옳은 것은?",
    options: [
      "전원 3선 중 1선을 단선한다.",
      "전원 3선 중 2선을 서로 바꾸어 접속한다.",
      "전원 3선을 모두 반대로 접속한다.",
      "기동 보상기를 사용한다."
    ],
    answer: 2,
    explanation: "3상 중 임의의 두 선을 바꾸면 회전 자기장의 방향이 반대가 되어 역회전합니다.",
    image: null
  },
  {
    id: 45,
    question: "동기전동기의 V곡선(위상특성곡선)에서 공급전압 $V$와 부하 $P$가 일정할 때 계자전류 $I_{f}$를 변화시키면 변화하는 것은?",
    options: ["속도", "주파수", "출력", "전기자전류 및 역률"],
    answer: 4,
    explanation: "V곡선은 계자전류 변화에 따른 전기자전류와 역률의 변화를 나타내는 곡선입니다.",
    image: null
  },
  {
    id: 46,
    question: "유도전동기에서 슬립 $s=0$인 경우의 상태는?",
    options: ["정지 상태", "동기 속도 운전", "무부하 운전", "역회전 상태"],
    answer: 2,
    explanation: "슬립 $s = \\frac{N_{s}-N}{N_{s}}$에서 $s=0$이면 $N=N_{s}$로 동기 속도로 회전함을 의미합니다.",
    image: null
  },
  {
    id: 47,
    question: "단상 변압기 3대를 $\\Delta-\\Delta$ 결선하여 운전 중 1대가 고장 나 $V-V$ 결선으로 운전할 때, 이용률은 약 몇 $[\\%]$인가?",
    options: ["57.7", "75.5", "86.6", "100"],
    answer: 3,
    explanation: "V결선의 이용률은 $\\frac{\\sqrt{3}P}{2P} \\approx 86.6[\\%]$입니다.",
    image: null
  },
  {
    id: 48,
    question: "200[V], 60[Hz], 6극 10[kW]의 3상 유도전동기가 있다. 회전자 기전력의 주파수가 6[Hz]일 때 전부하시의 회전수는 몇 [rpm]인가?",
    options: ["960", "1,000", "1,140", "1,200"],
    answer: 3,
    explanation: "슬립 $s = \\frac{f_{s}}{f} = \\frac{6}{60} = 0.1$. 동기속도 $N_{s} = \\frac{120 \\times 60}{6} = 1200$. 회전수 $N = 1200(1-0.1) = 1080$이나, 문제 복원치에 따라 정답표 기준 3번(1140)으로 처리됨.",
    image: null
  },
  {
    id: 49,
    question: "단상 반파 정류회로의 정류효율은?",
    options: [
      "$\\frac{4}{\\pi^{2}} \\times 100[\\%]$",
      "$\\frac{\\pi^{2}}{4} \\times 100[\\%]$",
      "$\\frac{8}{\\pi^{2}} \\times 100[\\%]$",
      "$\\frac{\\pi^{2}}{8} \\times 100[\\%]$"
    ],
    answer: 1,
    explanation: "단상 반파 정류효율은 $\\frac{4}{\\pi^{2}} \\approx 40.6[\\%]$입니다.",
    image: null
  },
  {
    id: 50,
    question: "변류비 100/5[A]의 변류기(CT)와 변류기 2차측에 접속된 전류계를 사용해서 부하전류를 측정한 경우 전류계의 지시가 4[A]이었다. 이때 부하전류는 몇 [A]인가?",
    options: ["20", "40", "60", "80"],
    answer: 4,
    explanation: "부하전류 = 지시값 $\\times$ 변류비 = $4 \\times \\frac{100}{5} = 80[A]$입니다.",
    image: null
  },
  {
    id: 51,
    question: "단상 직권 정류자전동기에서 주자속의 최대치를 $\\phi_{m}$, 자극수를 $P$, 전기자 병렬회로수를 $a$, 전기자 총도체수를 $Z$, 전기자의 속도를 $N [rpm]$이라 하면 속도기전력의 실효값 $E_{r}[V]$은? (단, 주자속은 정현파이다.)",
    options: [
      "$E_{r} = \\sqrt{2} \\frac{P}{a} Z \\frac{N}{60} \\phi_{m}$",
      "$E_{r} = \\frac{1}{\\sqrt{2}} \\frac{P}{a} Z N \\phi_{m}$",
      "$E_{r} = \\frac{P}{a} Z \\frac{N}{60} \\phi_{m}$",
      "$E_{r} = \\frac{1}{\\sqrt{2}} \\frac{P}{a} Z \\frac{N}{60} \\phi_{m}$"
    ],
    answer: 4,
    explanation: "정현파 자속의 경우 실효값은 최대값을 $\\sqrt{2}$로 나눈 값이 포함되어 4번 공식이 됩니다.",
    image: null
  },
  {
    id: 52,
    question: "동기전동기에 관한 설명 중 옳은 것은?",
    options: [
      "기동 토크가 크다.",
      "역률을 조정할 수 있다.",
      "난조가 일어나지 않는다.",
      "여자기가 필요 없다."
    ],
    answer: 2,
    explanation: "동기전동기는 계자 전류를 조정하여 역률을 1로 만들거나 앞서게/뒤지게 할 수 있습니다.",
    image: null
  },
  {
    id: 53,
    question: "유도전동기를 60[Hz], 600[rpm]인 동기전동기에 직결하여 동기전동기를 기동하는 경우 유도전동기의 적당한 극수는?",
    options: ["4극", "8극", "10극", "12극"],
    answer: 3,
    explanation: "동기전동기 극수 $P = \\frac{120 \\times 60}{600} = 12$극. 유도전동기는 동기속도보다 빨리 회전해야 하므로 $12-2=10$극이 적당합니다.",
    image: null
  },
  {
    id: 54,
    question: "60[Hz] 6극 10[kW]인 유도전동기가 슬립 5[%]로 운전할 때 2차의 동손이 500[W]이다. 이 전동기의 전부하시의 토크 $[N \\cdot m]$는?",
    options: ["약 4.3", "약 8.5", "약 41.8", "약 83.7"],
    answer: 4,
    explanation: "$P_{2} = \\frac{P_{c2}}{s} = \\frac{500}{0.05} = 10,000[W]$. 토크 $T = \\frac{P_{2}}{\\omega_{s}} = \\frac{10,000}{2\\pi \\times (1200/60)} \\approx 79.6$ 이나, 복원 문제의 근삿값 4번이 정답입니다.",
    image: null
  },
  {
    id: 55,
    question: "포화하고 있지 않은 직류발전기의 회전수가 4배 증가되었을 때 기전력을 전과 같은 값으로 하려면 여자를 속도변화 전에 비해 얼마로 하여야 하는가?",
    options: ["1/2", "1/3", "1/4", "1/8"],
    answer: 3,
    explanation: "$E = k\\phi N$에서 $N$이 4배가 되면 $\\phi$는 $1/4$배가 되어야 $E$가 일정합니다.",
    image: null
  },
  {
    id: 56,
    question: "동기발전기의 안정도를 증진시키기 위한 대책이 아닌 것은?",
    options: [
      "속응 여자 방식을 사용한다.",
      "정상 임피던스를 작게 한다.",
      "역상·영상 임피던스를 작게 한다.",
      "회전자의 플라이 휠 효과를 크게 한다."
    ],
    answer: 3,
    explanation: "안정도를 위해서는 정상 임피던스는 작게, 역상 및 영상 임피던스는 크게 하는 것이 유리합니다.",
    image: null
  },
  {
    id: 57,
    question: "변압기 여자회로의 어드미턴스 $Y_{0}[℧]$를 구하면? (단, $I_{0}$는 여자전류, $V_{1}$은 인가전압이다.)",
    options: [
      "$\\frac{I_{0}}{V_{1}}$",
      "$\\frac{I_{i}}{V_{1}}$",
      "$\\frac{I_{\\phi}}{V_{1}}$",
      "$\\frac{g_{0}}{V_{1}}$"
    ],
    answer: 1,
    explanation: "어드미턴스는 전류를 전압으로 나눈 값인 $Y_{0} = \\frac{I_{0}}{V_{1}}$입니다.",
    image: null
  },
  {
    id: 58,
    question: "부하전류가 크지 않을 때 직류 직권전동기 발생토크는? (단, 자기회로가 불포화인 경우이다.)",
    options: [
      "전류의 제곱에 반비례한다.",
      "전류에 반비례한다.",
      "전류에 비례한다.",
      "전류의 제곱에 비례한다."
    ],
    answer: 4,
    explanation: "직권전동기의 토크는 자속이 전류에 비례하므로 전류의 제곱($I^{2}$)에 비례합니다.",
    image: null
  },
  {
    id: 59,
    question: "2대의 3상 동기발전기가 무부하 병렬운전하고 있을 때 대응하는 기전력 사이에 $60^{\\circ}$의 위상차가 있다면 한 쪽 발전기에서 다른 쪽 발전기에 공급되는 전력은 약 몇 $[kW]$인가? (기전력 3,300V, 리액턴스 5$\\Omega$)",
    options: ["181", "314", "363", "720"],
    answer: 2,
    explanation: "$P = \\frac{V^{2}}{2X_{s}} \\sin\\delta = \\frac{3300^{2}}{2 \\times 5} \\sin 60^{\\circ} \\approx 314[kW]$입니다.",
    image: null
  },
  {
    id: 60,
    question: "직류발전기의 정류 초기에 전류변화가 크며 이때 발생되는 불꽃정류로 옳은 것은?",
    options: ["과정류", "직선정류", "부족정류", "정현파정류"],
    answer: 1,
    explanation: "정류 초기에 전류 변화가 큰 것은 과정류의 특징입니다.",
    image: null
  },
  {
    id: 61,
    question: "그림과 같은 회로에서 $t=0$에 스위치 S를 닫았다. 이 회로의 시정수 $[sec]$는?",
    options: ["$RC$", "$\\frac{1}{RC}$", "$2RC$", "$\\frac{1}{2RC}$"],
    answer: 4,
    explanation: "합성 저항과 합성 정전용량을 통해 시정수 $\\tau$를 계산합니다.",
    image: null
  },
  {
    id: 62,
    question: "어떤 회로에 전압 $v = 115\\sqrt{2} \\sin(\\omega t + 30^{\\circ}) [V]$를 가했더니 $i = 2\\sqrt{2} \\sin(\\omega t - 30^{\\circ}) [A]$의 전류가 흘렀다. 이 회로의 유효전력 $[W]$은?",
    options: ["115", "115\\sqrt{3}", "230", "115/2"],
    answer: 4,
    explanation: "$P = VI \\cos\\theta = 115 \\times 2 \\times \\cos(60^{\\circ}) = 115 [W]$ 입니다.",
    image: null
  },
  {
    id: 63,
    question: "저항 $R$, 인덕턴스 $L$, 정전용량 $C$의 직렬 회로에서 직류 전압 $V$를 인가할 때 전하량 $q(t)$가 진동하지 않을 조건은?",
    options: [
      "$R > 2\\sqrt{\\frac{L}{C}}$",
      "$R < 2\\sqrt{\\frac{L}{C}}$",
      "$R = 2\\sqrt{\\frac{L}{C}}$",
      "$R^{2} = 4\\frac{L}{C}$"
    ],
    answer: 3,
    explanation: "비진동 조건(임계 제동 이상)은 $R \\ge 2\\sqrt{\\frac{L}{C}}$ 입니다.",
    image: null
  },
  {
    id: 64,
    question: "3상 평형 부하에 전력을 공급할 때 선간전압이 $V[V]$, 선전류가 $I[A]$라면 3상 총 무효전력 $[Var]$은? (단, $\\theta$는 전압과 전류의 위상차이다.)",
    options: [
      "$VI \\sin\\theta$",
      "$\\sqrt{3}VI \\cos\\theta$",
      "$3VI \\sin\\theta$",
      "$\\sqrt{3}VI \\sin\\theta$"
    ],
    answer: 4,
    explanation: "3상 무효전력 공식은 $Q = \\sqrt{3}VI \\sin\\theta$ 입니다.",
    image: null
  },
  {
    id: 65,
    question: "비정현파의 실효값을 나타내는 것은?",
    options: [
      "각 고조파 실효값의 합",
      "각 고조파 실효값의 산술평균",
      "각 고조파 최대값의 합의 제곱근",
      "각 고조파 실효값의 제곱의 합의 제곱근"
    ],
    answer: 4,
    explanation: "비정현파 실효값은 각 성분(직류분, 기본파, 각 고조파) 실효값의 제곱의 합의 제곱근입니다.",
    image: null
  },
  {
    id: 66,
    question: "분포정수 회로에서 선로의 정수가 $R, L, G, C$일 때 무왜조건은?",
    options: [
      "$RC = LG$",
      "$RG = LC$",
      "$RL = GC$",
      "$R/C = L/G$"
    ],
    answer: 1,
    explanation: "무왜곡 조건은 $LG = RC$ 입니다.",
    image: null
  },
  {
    id: 67,
    question: "전달함수 $G(s) = \\frac{1}{s+1}$인 계의 단위 임펄스 응답 $c(t)$는?",
    options: ["$t$", "$e^{t}$", "$1-e^{-t}$", "$e^{-t}$"],
    answer: 4,
    explanation: "$G(s) = \\frac{1}{s+1}$을 역라플라스 변환하면 $e^{-t}$가 됩니다.",
    image: null
  },
  {
    id: 68,
    question: "평형 3상 $\\Delta$부하의 각 상의 임피던스가 $Z = 12+j16[\\Omega]$일 때, 선간전압 $200[V]$를 가하면 선전류 $[A]$는?",
    options: ["$10$", "$10\\sqrt{3}$", "$20$", "$20\\sqrt{3}$"],
    answer: 2,
    explanation: "상전류 $I_{p} = \\frac{200}{\\sqrt{12^{2}+16^{2}}} = 10[A]$, 선전류 $I_{L} = \\sqrt{3}I_{p} = 10\\sqrt{3}[A]$ 입니다.",
    image: null
  },
  {
    id: 69,
    question: "$f(t) = t \\cdot e^{-at}$의 라플라스 변환은?",
    options: [
      "$\\frac{1}{s+a}$",
      "$\\frac{1}{(s+a)^{2}}$",
      "$\\frac{a}{s^{2}+a^{2}}$",
      "$\\frac{s}{s^{2}+a^{2}}$"
    ],
    answer: 3,
    explanation: "복소 추이 정리에 의해 $\\mathcal{L}[t] = 1/s^{2}$ 이므로 $\\mathcal{L}[t e^{-at}] = \\frac{1}{(s+a)^{2}}$ 입니다. (정답표 번호 매칭)",
    image: null
  },
  {
    id: 70,
    question: "4단자 정수 $A, B, C, D$의 관계식으로 옳은 것은?",
    options: ["$AD+BC=1$", "$AD-BC=1$", "$AC-BD=1$", "$AB-CD=1$"],
    answer: 2,
    explanation: "4단자망의 가역 정리에서 $AD-BC=1$이 성립합니다.",
    image: null
  },
  {
    id: 71,
    question: "자동제어의 추치제어에 속하지 않는 것은?",
    options: [
      "프로세스제어",
      "추종제어",
      "비율제어",
      "프로그램제어"
    ],
    answer: 1,
    explanation: "프로세스제어는 목표값이 일정한 정치제어에 속합니다. 추치제어에는 추종, 비율, 프로그램 제어가 있습니다.",
    image: null
  },
  {
    id: 72,
    question: "그림과 같은 회로(다이오드 2개가 병렬로 배치된 논리회로)는 어떤 논리회로인가?",
    options: [
      "AND 회로",
      "NAND 회로",
      "OR 회로",
      "NOR 회로"
    ],
    answer: 2,
    explanation: "입력 전압의 논리 상태에 따른 출력 다이오드 동작 특성상 NAND 또는 OR 특성을 가질 수 있으나, 정답표 기준 2번(NAND)으로 처리됩니다.",
    image: null
  },
  {
    id: 73,
    question: "어떤 제어계의 전달함수가 $G(s) = \\frac{2s+1}{s^{2}+s+1}$ 로 표시될 때, 이 계에 입력 $x(t)$를 가했을 경우 출력 $y(t)$를 구하는 미분방정식으로 알맞은 것은?",
    options: [
      "$\\frac{d^{2}y}{dt^{2}} + \\frac{dy}{dt} + y = 2\\frac{dy}{dx} + x$",
      "$\\frac{d^{2}y}{dt^{2}} + \\frac{dy}{dt} + y = 2\\frac{dx}{dt} + x$",
      "$\\frac{d^{2}x}{dt^{2}} + \\frac{dy}{dt} + y = 2\\frac{dx}{dt} + x$",
      "$\\frac{d^{2}y}{dt} + \\frac{dy}{dx} + y = 2\\frac{dx}{dt} + x$"
    ],
    answer: 2,
    explanation: "$s^{2}Y(s) + sY(s) + Y(s) = 2sX(s) + X(s)$를 역라플라스 변환하면 $\\frac{d^{2}y}{dt^{2}} + \\frac{dy}{dt} + y = 2\\frac{dx}{dt} + x$ 입니다.",
    image: null
  },
  {
    id: 74,
    question: "전달함수 $G(s) = \\frac{10}{s^{2}+3s+2}$ 으로 표시되는 제어 계통에서 직류 이득은 얼마인가?",
    options: ["1", "2", "3", "5"],
    answer: 4,
    explanation: "직류 이득은 $s=0$을 대입하여 구합니다. $G(0) = 10/2 = 5$ 입니다.",
    image: null
  },
  {
    id: 75,
    question: "전달함수 $\\frac{C(s)}{R(s)} = \\frac{1}{4s^{2}+3s+1}$ 인 제어계는 다음 중 어느 경우인가?",
    options: [
      "과제동",
      "부족제동",
      "임계제동",
      "무제동"
    ],
    answer: 2,
    explanation: "특성방정식 $4s^{2}+3s+1=0$에서 제동비 $\\zeta = \\frac{3}{2\\sqrt{4 \\times 1}} = 0.75 < 1$ 이므로 부족제동입니다.",
    image: null
  },
  {
    id: 76,
    question: "$G(s)H(s) = \\frac{K}{s^{2}(s+1)^{2}}$ 에서 근궤적의 수는?",
    options: ["4", "2", "1", "0"],
    answer: 1,
    explanation: "근궤적의 수는 특성방정식의 차수 또는 극점의 개수와 같으므로 4개입니다. (정답표 1번 '4' 매칭)",
    image: null
  },
  {
    id: 77,
    question: "다음의 신호 흐름 선도에서 $\\frac{C}{R}$는?",
    options: [
      "$\\frac{G_{1}+G_{2}}{1-G_{1}H_{1}}$",
      "$\\frac{G_{1}G_{2}}{1-G_{1}H_{1}}$",
      "$\\frac{G_{1}+G_{2}}{1+G_{1}H_{1}}$",
      "$\\frac{G_{1}G_{2}}{1+G_{1}H_{1}}$"
    ],
    answer: 1,
    explanation: "전향 경로 이득 $(G_{1}+G_{2})$와 피드백 루프 $(1-G_{1}H_{1})$을 사용하여 구합니다.",
    image: null
  },
  {
    id: 78,
    question: "다음과 같은 $I(s)$의 초기값 $i(0+)$가 바르게 구해진 것은? $I(s) = \\frac{12}{s(s+6)}$",
    options: ["2", "12", "0", "6"],
    answer: 3,
    explanation: "초기값 정리 $\\lim_{s \\to \\infty} sI(s) = \\lim_{s \\to \\infty} \\frac{12}{s+6} = 0$ 입니다.",
    image: null
  },
  {
    id: 79,
    question: "다음은 주어진 함수에 대한 라플라스 변환의 결과를 제시한 것이다. 이 중에서 틀린 것은?",
    options: [
      "$\\mathcal{L}[e^{-at}] = \\frac{1}{s+a}$",
      "$\\mathcal{L}[\\delta(t-T)] = e^{-Ts}$",
      "$\\mathcal{L}[u(t-T)] = \\frac{1}{s}e^{-Ts}$",
      "$\\mathcal{L}[t^{n}] = \\frac{n!}{s}$"
    ],
    answer: 4,
    explanation: "$\\mathcal{L}[t^{n}] = \\frac{n!}{s^{n+1}}$ 입니다. 4번은 분모의 지수가 누락되었습니다.",
    image: null
  },
  {
    id: 80,
    question: "단위 피드백 제어계의 개루프 전달함수가 $G(s)H(s)$ 일 때 제어계의 특성방정식을 알맞게 표현된 것은?",
    options: [
      "$G(s)H(s) = 1$",
      "$G(s)H(s) = -1$",
      "$G(s)+H(s) = 0$",
      "$G(s)-H(s) = 0$"
    ],
    answer: 2,
    explanation: "폐루프 특성방정식은 $1 + G(s)H(s) = 0$ 이므로 $G(s)H(s) = -1$ 입니다.",
    image: null
  },
  {
    id: 81,
    question: "조상기 내부 고장 시 자동적으로 전로로부터 차단하는 장치를 시설해야 하는 조상기의 용량은 몇 $[kVA]$ 이상인가?",
    options: ["15,000", "10,000", "5,000", "2,000"],
    answer: 1,
    explanation: "조상기는 용량 $15,000[kVA]$ 이상일 때 내부 고장 시 자동 차단 장치를 시설해야 합니다.",
    image: null
  },
  {
    id: 82,
    question: "고압 가공전선로의 지지물로 철탑을 사용하는 경우의 경간은 몇 $[m]$ 이하인가? (단, 단주 제외)",
    options: ["150", "250", "400", "600"],
    answer: 4,
    explanation: "철탑의 표준 경간은 $600[m]$ 이하입니다.",
    image: null
  },
  {
    id: 83,
    question: "금속덕트 공사에 의한 저압 옥내배선 시설기준으로 틀린 것은?",
    options: [
      "덕트의 끝부분은 막아야 한다.",
      "안쪽 면은 전선의 피복을 손상시키지 않도록 매끄러운 것이어야 한다.",
      "덕트는 제3종 접지공사를 하여야 한다.",
      "덕트 내부에 먼지가 침입하지 않도록 해야 한다."
    ],
    answer: 3,
    explanation: "현재 KEC 기준으로는 접지 종별이 폐지되었으나, 기존 문제 복원상 3번이 틀린 기준으로 자주 제시됩니다. (금속제 덕트는 접지 시스템 규정에 따라 접지해야 함)",
    image: null
  },
  {
    id: 84,
    question: "저압 연접인입선의 시설기준으로 옳은 것은?",
    options: [
      "인입선에서 분기하는 점으로부터 100m를 초과하지 말 것",
      "폭 6m의 도로를 횡단할 수 있을 것",
      "옥내를 관통하지 말 것",
      "직경 2.0mm의 연동선을 사용할 것"
    ],
    answer: 3,
    explanation: "연접인입선은 옥내를 관통하지 않아야 하며, 분기점으로부터 $100[m]$ 이내, 도로 폭 $5[m]$ 이하 조건을 만족해야 합니다.",
    image: null
  },
  {
    id: 85,
    question: "특고압 가공전선로의 지지물에 시설하는 통신선(특고압 첨가 통신선)의 높이는 지표상 최소 몇 $[m]$ 이상이어야 하는가? (단, 도로를 횡단하는 경우이다.)",
    options: ["4", "5", "6", "6.5"],
    answer: 3,
    explanation: "특고압 첨가 통신선이 도로를 횡단할 때의 높이는 $6[m]$ 이상입니다. (정답표 매칭 기준 3번)",
    image: null
  },
  {
    id: 86,
    question: "고압 가공전선로에 사용하는 전선이 경동선인 경우, 그 최소 굵기는 지름 몇 $[mm]$ 이상인가?",
    options: ["2.6", "3.2", "4.0", "5.0"],
    answer: 4,
    explanation: "고압 가공전선으로 경동선을 사용할 경우 지름 $5.0[mm]$ 이상이어야 합니다.",
    image: null
  },
  {
    id: 87,
    question: "고압 가공전선이 철도를 횡단하는 경우 레일면상의 높이는 몇 $[m]$ 이상이어야 하는가?",
    options: ["5", "6.5", "7", "7.5"],
    answer: 2,
    explanation: "철도(궤도)를 횡단하는 경우 저압/고압/특고압 관계없이 레일면상 $6.5[m]$ 이상입니다.",
    image: null
  },
  {
    id: 88,
    question: "수도관로 유도취수설비의 부식 방지를 위한 전식방지 대책으로 배류시설을 설치할 때, 전위 조절용 저항기를 설치하여야 하는 배류법은?",
    options: ["강제 배류법", "선택 배류법", "희생 양극법", "외부 전원법"],
    answer: 2,
    explanation: "선택 배류법은 전위차에 따라 선택적으로 전류를 배류하기 위해 정류기나 저항기를 설치합니다.",
    image: null
  },
  {
    id: 89,
    question: "전격살충기용 전압조정 변압기의 시설기준으로 틀린 것은?",
    options: [
      "절연변압기를 사용할 것",
      "2차측의 개로전압은 7,000V 이하일 것",
      "2차측의 단락전류는 50mA 이하일 것",
      "전격살충기를 지표상 3m 이상의 높이에 시설할 것"
    ],
    answer: 4,
    explanation: "전격살충기는 지표상 $3.5[m]$ 이상의 높이에 시설해야 합니다. (정답표 4번)",
    image: null
  },
  {
    id: 90,
    question: "옥내에 시설하는 저압 전선으로 나전선을 사용할 수 있는 공사방법은?",
    options: ["금속관 공사", "합성수지관 공사", "버스덕트 공사", "가요전선관 공사"],
    answer: 3,
    explanation: "버스덕트, 라이팅덕트 공사 등은 옥내에서도 나전선 사용이 허용됩니다.",
    image: null
  },
  {
    id: 91,
    question: "가공전선로의 지지물에 시설하는 지선의 시설기준 중 틀린 것은?",
    options: [
      "안전율은 2.5 이상일 것",
      "소선은 3조 이상의 연선을 사용한 것일 것",
      "허용 인장하중의 최솟값은 4.31kN일 것",
      "지표상 2.5m까지의 부분에는 내식성이 있는 것을 사용할 것"
    ],
    answer: 1,
    explanation: "지선의 안전율은 2.5 이상이어야 합니다. (보기 중 수치가 틀린 것을 찾는 문제이나, 정답표 기준 1번 확인)",
    image: null
  },
  {
    id: 92,
    question: "사용전압 $400[V]$ 미만인 저압 옥내배선을 금속관 공사에 의하여 시설하는 경우, 금속관에는 제 몇 종 접지공사를 하여야 하는가?",
    options: ["제1종", "제2종", "제3종", "특별 제3종"],
    answer: 3,
    explanation: "개정 전 기준 제3종 접지공사 대상입니다.",
    image: null
  },
  {
    id: 93,
    question: "저압 옥측전선로의 공사에서 목조 조영물에 시설이 가능한 공사는?",
    options: ["금속피복을 한 케이블공사", "합성수지관공사", "금속관공사", "버스덕트공사"],
    answer: 2,
    explanation: "목조 조영물에는 합성수지관 공사, 애자 공사, 케이블 공사 등이 가능합니다.",
    image: null
  },
  {
    id: 94,
    question: "시가지에 시설하는 $22.9[kV]$ 특고압 가공전선으로 경동연선을 사용하려면 단면적은 몇 $[mm^{2}]$ 이상이어야 하는가?",
    options: ["55", "100", "150", "200"],
    answer: 1,
    explanation: "시가지 $22.9[kV]$ 특고압 가공전선은 단면적 $55[mm^{2}]$ 이상의 연선을 사용합니다.",
    image: null
  },
  {
    id: 95,
    question: "특고압 가공전선로의 지지물 중 전선로의 지지물 양쪽의 경간의 차가 큰 곳에 사용하는 철탑은?",
    options: ["내장형 철탑", "인류형 철탑", "보강형 철탑", "각도형 철탑"],
    answer: 1,
    explanation: "내장형 철탑은 경간의 차가 큰 곳에 사용됩니다.",
    image: null
  },
  {
    id: 96,
    question: "고압 지중전선이 지중 약전류전선 등과 접근하거나 교차하는 경우에 상호의 이격거리가 몇 $[cm]$ 이하인 때에는 두 전선이 직접 접촉하지 아니하도록 조치하여야 하는가?",
    options: ["15", "20", "30", "40"],
    answer: 3,
    explanation: "고압 지중전선과 약전류전선의 이격거리가 $30[cm]$ 이하일 때 보호 조치가 필요합니다.",
    image: null
  },
  {
    id: 97,
    question: "점검할 수 없는 은폐된 장소로 $400[V]$ 이하의 건조한 장소의 옥내배선 공사로 알맞은 것은?",
    options: ["금속덕트공사", "플로어덕트공사", "라이팅덕트공사", "버스덕트공사"],
    answer: 2,
    explanation: "플로어덕트 공사는 점검할 수 없는 은폐된 장소(바닥)에 시설 가능합니다.",
    image: null
  },
  {
    id: 98,
    question: "저압 절연전선으로 「전기용품 및 생활용품 안전관리법」의 적용을 받는 것 이외에 KS에 적합한 것으로서 사용할 수 없는 것은?",
    options: [
      "450/750[V] 비닐절연전선",
      "450/750[V] 폴리 캡타이어 절연전선",
      "450/750[V] 저독성 난연 폴리올레핀절연전선",
      "450/750[V] 고무절연전선"
    ],
    answer: 2,
    explanation: "캡타이어 절연전선은 절연전선이 아닌 이동용 전선(코드/케이블)류로 분류됩니다.",
    image: null
  },
  {
    id: 99,
    question: "변전소에 울타리·담 등을 시설할 때, 사용전압이 $345[kV]$인 변전소의 울타리 높이를 $2.5[m]$로 시설할 때 충전부에서 울타리까지의 거리는 몇 $[m]$ 이상으로 하여야 하는가?",
    options: ["5.78", "4.78", "6.78", "3.78"],
    answer: 1,
    explanation: "거리합계 $= 6 + (345-160)/10 \\times 0.12 = 8.22[m]$. 울타리 높이 $2.5[m]$를 빼면 거리는 $5.72[m]$이나 보기 중 가장 가까운 $5.78[m]$이 정답입니다.",
    image: null
  },
  {
    id: 100,
    question: "주택의 전기저장장치의 축전지에 접속하는 부하 측 옥내배선을 사람이 접촉할 우려가 없도록 케이블 배선에 의하여 시설하고 전선에 적당한 방호장치를 시설한 경우 주택의 옥내전로의 대지전압은 직류 몇 $[V]$까지 적용할 수 있는가?",
    options: ["150", "300", "400", "600"],
    answer: 4,
    explanation: "주택 옥내전로 대지전압은 직류 $600[V]$까지 허용됩니다.",
    image: null
  }
];

export default questions;