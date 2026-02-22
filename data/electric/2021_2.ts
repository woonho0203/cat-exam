const questions = [
  {
    id: 1,
    question: "두 종류의 유전율 $(\\epsilon_{1}, \\epsilon_{2})$을 가진 유전체가 서로 접하고 있는 경계면에 진전하가 존재하지 않을 때 성립하는 경계조건으로 옳은 것은? (단, $E_{1}, E_{2}$는 각 유전체에서의 전계이고, $D_{1}, D_{2}$는 각 유전체에서의 전속밀도이고, $\\theta_{1}, \\theta_{2}$는 각각 경계면의 법선벡터와 $E_{1}, E_{2}$가 이루는 각이다.)",
    options: [
      "$E_{1} \\cos \\theta_{1} = E_{2} \\cos \\theta_{2}, D_{1} \\sin \\theta_{1} = D_{2} \\sin \\theta_{2}, \\frac{\\tan \\theta_{1}}{\\tan \\theta_{2}} = \\frac{\\epsilon_{2}}{\\epsilon_{1}}$",
      "$E_{1} \\cos \\theta_{1} = E_{2} \\cos \\theta_{2}, D_{1} \\sin \\theta_{1} = D_{2} \\sin \\theta_{2}, \\frac{\\tan \\theta_{1}}{\\tan \\theta_{2}} = \\frac{\\epsilon_{1}}{\\epsilon_{2}}$",
      "$E_{1} \\sin \\theta_{1} = E_{2} \\sin \\theta_{2}, D_{1} \\cos \\theta_{1} = D_{2} \\cos \\theta_{2}, \\frac{\\tan \\theta_{1}}{\\tan \\theta_{2}} = \\frac{\\epsilon_{1}}{\\epsilon_{2}}$",
      "$E_{1} \\sin \\theta_{1} = E_{2} \\sin \\theta_{2}, D_{1} \\cos \\theta_{1} = D_{2} \\cos \\theta_{2}, \\frac{\\tan \\theta_{1}}{\\tan \\theta_{2}} = \\frac{\\epsilon_{2}}{\\epsilon_{1}}$"
    ],
    answer: 3,
    explanation: "유전체 경계 조건: 1. 전계의 접선성분이 같다($E_{1} \\sin \\theta_{1} = E_{2} \\sin \\theta_{2}$). 2. 전속밀도의 법선성분이 같다($D_{1} \\cos \\theta_{1} = D_{2} \\cos \\theta_{2}$). 3. 굴절의 법칙: $\\frac{\\tan \\theta_{1}}{\\tan \\theta_{2}} = \\frac{\\epsilon_{1}}{\\epsilon_{2}}$",
    image: null
  },
  {
    id: 2,
    question: "진공 중의 평등자계 $H_{0}$ 중에 반지름이 $a[m]$이고, 투자율이 $\\mu$인 구 자성체가 있다. 이 구 자성체의 감자율은? (단, 구 자성체 내부의 자계는 $H = \\frac{3\\mu_{0}}{2\\mu_{0} + \\mu} H_{0}$이다.)",
    options: [
      "1",
      "$\\frac{1}{2}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{4}$"
    ],
    answer: 3,
    explanation: "구 자성체의 감자율 $N = 1/3$이다. 내부 자계 식과 감자력 식 $H' = \\frac{N}{\\mu_{0}}J$를 연립하여 유도하면 $N = 1/3$이 도출된다.",
    image: null
  },
  {
    id: 3,
    question: "공기 중에서 반지름 $0.03[m]$의 구도체에 줄 수 있는 최대 전하는 약 몇 $[C]$인가? (단, 이 구도체의 주위 공기에 대한 절연내력은 $5 \\times 10^{6} [V/m]$이다.)",
    options: [
      "$5 \\times 10^{-7}$",
      "$2 \\times 10^{-6}$",
      "$5 \\times 10^{-5}$",
      "$2 \\times 10^{-4}$"
    ],
    answer: 1,
    explanation: "$Q = CV = 4\\pi\\epsilon_{0}a \\cdot Ea = 4\\pi\\epsilon_{0}a^{2}E$ 식에 대입하면, $Q = \\frac{1}{9 \\times 10^{9}} \\times 0.03^{2} \\times 5 \\times 10^{6} = 5 \\times 10^{-7} [C]$이 된다.",
    image: null
  },
  {
    id: 4,
    question: "유전율 $\\epsilon$, 전계의 세기 $E$인 유전체의 단위 체적당 축적되는 정전에너지는?",
    options: [
      "$\\frac{E}{2\\epsilon}$",
      "$\\frac{\\epsilon E}{2}$",
      "$\\frac{\\epsilon E^{2}}{2}$",
      "$\\frac{\\epsilon^{2} E^{2}}{2}$"
    ],
    answer: 3,
    explanation: "단위 체적당 정전에너지 $w = \\frac{1}{2} \\epsilon E^{2} = \\frac{1}{2} DE = \\frac{D^{2}}{2\\epsilon} [J/m^{3}]$이다.",
    image: null
  },
  {
    id: 5,
    question: "단면적이 균일한 환상철심에 권수 $N_{A}$인 A코일과 권수 $N_{B}$인 B코일이 있을 때, A코일의 자기 인덕턴스가 $L_{A}[H]$라면 두 코일의 상호 인덕턴스 $[H]$는? (단, 누설자속은 0이다.)",
    options: [
      "$\\frac{L_{A} N_{A}}{N_{B}}$",
      "$\\frac{L_{A} N_{B}}{N_{A}}$",
      "$\\frac{N_{A}}{L_{A} N_{B}}$",
      "$\\frac{N_{B}}{L_{A} N_{A}}$"
    ],
    answer: 2,
    explanation: "$L_{A} = \\frac{N_{A}^{2}}{R}$, $M = \\frac{N_{A} N_{B}}{R}$이므로 $R$을 소거하면 $M = L_{A} \\frac{N_{B}}{N_{A}}$가 된다.",
    image: null
  },
  {
    id: 6,
    question: "비투자율이 350인 환상철심 내부의 평균 자계의 세기가 $342 [AT/m]$일 때 자화의 세기는 약 몇 $[Wb/m^{2}]$인가?",
    options: [
      "0.12",
      "0.15",
      "0.18",
      "0.21"
    ],
    answer: 2,
    explanation: "$J = \\mu_{0}(\\mu_{s} - 1)H = 4\\pi \\times 10^{-7} \\times (350 - 1) \\times 342 \\approx 0.15 [Wb/m^{2}]$이다.",
    image: null
  },
  {
    id: 7,
    question: "진공 중에 놓인 $Q[C]$의 전하에서 발산되는 전기력선의 수는?",
    options: [
      "$Q$",
      "$\\epsilon_{0} Q$",
      "$\\frac{Q}{\\epsilon_{0}}$",
      "$\\frac{\\epsilon_{0}}{Q}$"
    ],
    answer: 3,
    explanation: "가우스의 정리에 의해 발산되는 전기력선 수 $N = \\frac{Q}{\\epsilon_{0}}$개이다.",
    image: null
  },
  {
    id: 8,
    question: "비투자율이 50인 환상 철심을 이용하여 $100 [cm]$ 길이의 자기회로를 구성할 때 자기저항을 $2.0 \\times 10^{7} [AT/Wb]$ 이하로 하기 위해서는 철심의 단면적을 약 몇 $[m^{2}]$ 이상으로 하여야 하는가?",
    options: [
      "$3.6 \\times 10^{-4}$",
      "$6.4 \\times 10^{-4}$",
      "$8.0 \\times 10^{-4}$",
      "$9.2 \\times 10^{-4}$"
    ],
    answer: 3,
    explanation: "$R_{m} = \\frac{l}{\\mu S}$에서 $S = \\frac{l}{\\mu_{0}\\mu_{s}R_{m}} = \\frac{1}{4\\pi \\times 10^{-7} \\times 50 \\times 2 \\times 10^{7}} \\approx 8.0 \\times 10^{-4} [m^{2}]$이다.",
    image: null
  },
  {
    id: 9,
    question: "전기력선의 성질에 대한 설명으로 옳은 것은?",
    options: [
      "전기력선은 등전위면과 평행하다.",
      "전기력선은 도체 표면과 직교한다.",
      "전기력선은 도체 내부에 존재할 수 있다.",
      "전기력선은 전위가 낮은 점에서 높은 점으로 향한다."
    ],
    answer: 2,
    explanation: "전기력선은 도체 표면(등전위면)과 수직으로 출입하며, 도체 내부에는 전하가 없으므로 존재하지 않는다.",
    image: null
  },
  {
    id: 10,
    question: "자속밀도가 $10 [Wb/m^{2}]$인 자계 중에 $10 [cm]$ 도체를 자계와 $60^{\\circ}$의 각도로 $30 [m/s]$로 움직일 때, 이 도체에 유기되는 기전력은 몇 $[V]$인가?",
    options: [
      "15",
      "$15\\sqrt{3}$",
      "1500",
      "$1500\\sqrt{3}$"
    ],
    answer: 2,
    explanation: "$e = Blv \\sin \\theta = 10 \\times (10 \\times 10^{-2}) \\times 30 \\times \\sin 60^{\\circ} = 30 \\times \\frac{\\sqrt{3}}{2} = 15\\sqrt{3} [V]$이다.",
    image: null
  },
  {
    id: 11,
    question: "평등자계와 직각방향으로 일정한 속도로 발사된 전자의 원운동에 관한 설명으로 옳은 것은?",
    options: [
      "플레밍의 오른손법칙에 의한 로렌츠의 힘과 원심력의 평형 원운동이다.",
      "원의 반지름은 전자의 발사속도와 전계의 세기의 곱에 반비례한다.",
      "전자의 원운동 주기는 전자의 발사속도와 무관하다.",
      "전자의 원운동 주파수는 전자의 질량에 비례한다."
    ],
    answer: 3,
    explanation: "주기 $T = \\frac{2\\pi m}{qB}$로, 발사 속도 $v$와는 관계없이 일정하다.",
    image: null
  },
  {
    id: 12,
    question: "공기 중에 있는 반지름 $a[m]$의 독립 금속구의 정전용량은 몇 $[F]$인가?",
    options: [
      "$2\\pi\\epsilon_{0}a$",
      "$4\\pi\\epsilon_{0}a$",
      "$\\frac{1}{2\\pi\\epsilon_{0}a}$",
      "$\\frac{1}{4\\pi\\epsilon_{0}a}$"
    ],
    answer: 2,
    explanation: "고립 구도체의 정전용량 $C = 4\\pi\\epsilon_{0}a [F]$이다.",
    image: null
  },
  {
    id: 13,
    question: "와전류가 이용되고 있는 것은?",
    options: [
      "수중 음파 탐지기",
      "레이더",
      "자기 브레이크(magnetic brake)",
      "사이클로트론(cyclotron)"
    ],
    answer: 3,
    explanation: "자기 브레이크는 금속판이 이동할 때 발생하는 와전류와 자계 사이의 흡인력을 이용하여 제동력을 얻는다.",
    image: null
  },
  {
    id: 14,
    question: "전계 $E = \\frac{2}{x}\\hat{x} + \\frac{2}{y}\\hat{y} [V/m]$에서 점 $(3, 5)[m]$를 통과하는 전기력선의 방정식은?",
    options: [
      "$x^{2} + y^{2} = 12$",
      "$y^{2} - x^{2} = 12$",
      "$x^{2} + y^{2} = 16$",
      "$y^{2} - x^{2} = 16$"
    ],
    answer: 4,
    explanation: "$\\frac{dx}{E_{x}} = \\frac{dy}{E_{y}} \\implies x dx = y dy \\implies \\frac{1}{2}x^{2} = \\frac{1}{2}y^{2} + C$이다. 점 $(3, 5)$ 대입 시 $C = -8$이므로 $y^{2} - x^{2} = 16$이 도출된다.",
    image: null
  },
  {
    id: 15,
    question: "전계 $E [V/m]$가 두 유전체의 경계면에 평행으로 작용하는 경우 경계면에 단위 면적당 작용하는 힘의 크기는 몇 $[N/m^{2}]$인가? (단, $\\epsilon_{1}, \\epsilon_{2}$는 각 유전체의 유전율이다.)",
    options: [
      "$f = E^{2}(\\epsilon_{1} - \\epsilon_{2})$",
      "$f = \\frac{1}{E^{2}}(\\epsilon_{1} - \\epsilon_{2})$",
      "$f = \\frac{1}{2}E^{2}(\\epsilon_{1} - \\epsilon_{2})$",
      "$f = \\frac{1}{2E^{2}}(\\epsilon_{1} - \\epsilon_{2})$"
    ],
    answer: 3,
    explanation: "전계가 경계면에 평행할 때 단위 면적당 작용하는 힘 $f = \\frac{1}{2}(\\epsilon_{1} - \\epsilon_{2})E^{2}$이다.",
    image: null
  },
  {
    id: 16,
    question: "전계 $E = \\sqrt{2}E_{e} \\sin \\omega(t - \\frac{x}{c}) [V/m]$의 평면전자파가 있다. 진공 중에서 자계의 실효값은 몇 $[A/m]$인가?",
    options: [
      "$\\frac{1}{4\\pi} E_{e}$",
      "$\\frac{1}{36\\pi} E_{e}$",
      "$\\frac{1}{120\\pi} E_{e}$",
      "$\\frac{1}{360\\pi} E_{e}$"
    ],
    answer: 3,
    explanation: "진공의 고유 임피던스 $Z_{0} = E/H = 120\\pi$이므로, $H_{e} = E_{e}/120\\pi$이다.",
    image: null
  },
  {
    id: 17,
    question: "진공 중에 서로 떨어져 있는 두 도체 A, B가 있다. 도체 A에만 $1[C]$의 전하를 줄 때, 도체 A, B의 전위가 각각 $3[V], 2[V]$이었다. 지금 도체 A, B에 각각 $1[C]$과 $2[C]$의 전하를 주면 도체 A의 전위는 몇 $[V]$인가?",
    options: [
      "6",
      "7",
      "8",
      "9"
    ],
    answer: 2,
    explanation: "전위계수 성질 이용: $V_{A} = P_{AA}Q_{A} + P_{AB}Q_{B}$이다. 문제 조건에서 $P_{AA}=3, P_{AB}=2$이므로 $V_{A} = 3(1) + 2(2) = 7[V]$이다.",
    image: null
  },
  {
    id: 18,
    question: "한 변의 길이가 $4[m]$인 정사각형의 루프에 $1[A]$의 전류가 흐를 때, 중심점에서의 자속밀도 $B$는 약 몇 $[Wb/m^{2}]$인가?",
    options: [
      "$2.83 \\times 10^{-7}$",
      "$5.65 \\times 10^{-7}$",
      "$11.31 \\times 10^{-7}$",
      "$14.14 \\times 10^{-7}$"
    ],
    answer: 1,
    explanation: "$H = \\frac{2\\sqrt{2}I}{\\pi l} = \\frac{2\\sqrt{2} \\times 1}{\\pi \\times 4} = \\frac{\\sqrt{2}}{2\\pi}$이다. $B = \\mu_{0}H = 4\\pi \\times 10^{-7} \\times \\frac{\\sqrt{2}}{2\\pi} = 2\\sqrt{2} \\times 10^{-7} \\approx 2.83 \\times 10^{-7} [Wb/m^{2}]$이다.",
    image: null
  },
  {
    id: 19,
    question: "원점에 $1[\\mu C]$의 점전하가 있을 때 점 $P(2, -2, 4)[m]$에서의 전계의 세기에 대한 단위벡터는 약 얼마인가?",
    options: [
      "$0.41 a_{x} - 0.41 a_{y} + 0.82 a_{z}$",
      "$-0.41 a_{x} + 0.41 a_{y} - 0.82 a_{z}$",
      "$-0.33 a_{x} + 0.33 a_{y} - 0.66 a_{z}$",
      "$0.33 a_{x} - 0.33 a_{y} + 0.66 a_{z}$"
    ],
    answer: 1,
    explanation: "단위벡터 $a_{r} = \\frac{r}{|r|} = \\frac{2a_{x} - 2a_{y} + 4a_{z}}{\\sqrt{2^{2} + (-2)^{2} + 4^{2}}} = \\frac{2a_{x} - 2a_{y} + 4a_{z}}{\\sqrt{24}} \\approx 0.41 a_{x} - 0.41 a_{y} + 0.82 a_{z}$이다.",
    image: null
  },
  {
    id: 20,
    question: "공기 중에서 전자기파의 파장이 $3[m]$라면 그 주파수는 몇 $[MHz]$인가?",
    options: [
      "100",
      "300",
      "1000",
      "3000"
    ],
    answer: 1,
    explanation: "$f = \\frac{v}{\\lambda} = \\frac{3 \\times 10^{8}}{3} = 10^{8} [Hz] = 100 [MHz]$이다.",
    image: null
  },
  {
    id: 21,
    question: "비등수형 원자로의 특징에 대한 설명으로 틀린 것은?",
    options: [
      "증기 발생기가 필요하다.",
      "저농축 우라늄을 연료로 사용한다.",
      "노심에서 비등을 일으킨 증기가 직접 터빈에 공급되는 방식이다.",
      "가압수형 원자로에 비해 출력밀도가 낮다."
    ],
    answer: 1,
    explanation: "비등수형(BWR)은 원자로 내에서 직접 증기를 발생시켜 터빈으로 보내므로 별도의 증기 발생기가 필요 없다.",
    image: null
  },
  {
    id: 22,
    question: "전력계통에서 내부 이상전압의 크기가 가장 큰 경우는?",
    options: [
      "유도성 소전류 차단 시",
      "수차발전기의 부하 차단 시",
      "무부하 선로 충전전류 차단 시",
      "송전선로의 부하 차단기 투입 시"
    ],
    answer: 3,
    explanation: "무부하 송전선로의 충전전류 차단 시 재점호에 의해 가장 높은 이상전압이 발생한다.",
    image: null
  },
  {
    id: 23,
    question: "망상(network)배전방식의 장점이 아닌 것은?",
    options: [
      "전압변동이 적다.",
      "인축의 접지사고가 적어진다.",
      "부하의 증가에 대한 융통성이 크다.",
      "무정전 공급이 가능하다."
    ],
    answer: 2,
    explanation: "망상 배전방식은 신뢰도는 높으나 설비가 복잡하여 인축의 접촉 사고 우려가 증가하는 단점이 있다.",
    image: null
  },
  {
    id: 24,
    question: "송전단 전압을 $V_{s}$, 수전단 전압을 $V_{r}$, 선로의 리액턴스를 $X$라 할 때 정상 시의 최대 송전전력의 개략적인 값은?",
    options: [
      "$\\frac{V_{s} - V_{r}}{X}$",
      "$\\frac{V_{s}^{2} - V_{r}^{2}}{X}$",
      "$\\frac{V_{s}(V_{s} - V_{r})}{X}$",
      "$\\frac{V_{s}V_{r}}{X}$"
    ],
    answer: 4,
    explanation: "송전전력 $P = \\frac{V_{s}V_{r}}{X} \\sin \\delta$에서 최대 전력은 상차각 $\\delta=90^{\\circ}$일 때인 $\\frac{V_{s}V_{r}}{X}$이다.",
    image: null
  },
  {
    id: 25,
    question: "500[kVA]의 단상 변압기 상용 3대(결선 $\\triangle-\\triangle$), 예비 1대를 갖는 변전소가 있다. 부하의 증가로 인하여 예비 변압기까지 동원해서 사용한다면 응할 수 있는 최대부하[kVA]는 약 얼마인가?",
    options: [
      "2000",
      "1730",
      "1500",
      "830"
    ],
    answer: 2,
    explanation: "단상 변압기 4대를 모두 사용하면 V-V 결선 2뱅크 운전이 가능하므로, $P = 2 \\times \\sqrt{3} \\times 500 \\approx 1730 [kVA]$가 된다.",
    image: null
  },
  {
    id: 26,
    question: "배전용 변전소의 주변압기로 주로 사용되는 것은?",
    options: [
      "강압 변압기",
      "체승 변압기",
      "단권 변압기",
      "3권선 변압기"
    ],
    answer: 1,
    explanation: "배전 변전소는 송전 전압을 배전 전압으로 낮추는 역할을 하므로 강압(체강) 변압기를 사용한다.",
    image: null
  },
  {
    id: 27,
    question: "3상용 차단기의 정격 차단 용량은?",
    options: [
      "$\\sqrt{3} \\times$ 정격전압 $\\times$ 정격차단전류",
      "$\\sqrt{3} \\times$ 전압 $\\times$ 정격전류",
      "$3 \\times$ 정격전압 $\\times$ 정격차단전류",
      "$\\sqrt{3} \\times$ 정격전압 $\\times$ 정격전류"
    ],
    answer: 1,
    explanation: "차단용량 $P_{s} = \\sqrt{3} \\times V_{n} \\times I_{s}$ (정격전압 $\\times$ 정격차단전류)이다.",
    image: null
  },
  {
    id: 28,
    question: "3상 3선식 송전선로에서 각 선의 대지정전용량이 $0.5096 [\\mu F]$이고, 선간정전용량이 $0.1295 [\\mu F]$일 때, 1선의 작용정전용량은 약 몇 $[\\mu F]$인가?",
    options: [
      "0.6",
      "0.9",
      "1.2",
      "1.8"
    ],
    answer: 2,
    explanation: "$C_{n} = C_{s} + 3C_{m} = 0.5096 + 3 \\times 0.1295 \\approx 0.9 [\\mu F]$이다.",
    image: null
  },
  {
    id: 29,
    question: "그림과 같은 송전계통에서 S점에 3상 단락사고가 발생했을 때 단락전류 $[A]$는 약 얼마인가? (단, 선로의 길이는 $50 [km]$, 리액턴스는 $0.6 [\\Omega/km]$, 기준용량은 $40 [MVA]$로 한다.)",
    options: [
      "224",
      "324",
      "454",
      "554"
    ],
    answer: 4,
    explanation: "전체 $\%X$를 계산하면 약 $37.92\\%$가 된다. $I_{n} = \\frac{40 \\times 10^{6}}{\\sqrt{3} \\times 110 \\times 10^{3}} \\approx 209.9 [A]$이며, 단락전류 $I_{s} = \\frac{100}{37.92} \\times 209.9 \\approx 554 [A]$이다.",
    image: null
  },
  {
    id: 30,
    question: "전력계통의 전압을 조정하는 가장 보편적인 방법은?",
    options: [
      "발전기의 유효전력 조정",
      "부하의 유효전력 조정",
      "계통의 주파수 조정",
      "계통의 무효전력 조정"
    ],
    answer: 4,
    explanation: "전력계통의 전압 조정은 무효전력 공급 및 흡수량을 조절하여 수행하는 것이 가장 보편적이다.",
    image: null
  },
  {
    id: 31,
    question: "역률 0.8(지상)의 $2800 [kW]$ 부하에 전력용 콘덴서를 병렬로 접속하여 합성역률을 0.9로 개선하고자 할 경우, 필요한 전력용 콘덴서의 용량 $[kVA]$은 약 얼마인가?",
    options: [
      "372",
      "558",
      "744",
      "1116"
    ],
    answer: 3,
    explanation: "$Q_{c} = P(\\tan \\theta_{1} - \\tan \\theta_{2}) = 2800 \\times (\\frac{0.6}{0.8} - \\frac{\\sqrt{1-0.9^{2}}}{0.9}) \\approx 744 [kVA]$이다.",
    image: null
  },
  {
    id: 32,
    question: "컴퓨터에 의한 전력조류 계산에서 슬랙(slack)모선의 초기치로 지정하는 값은? (단, 슬랙 모선을 기준모선으로 한다.)",
    options: [
      "유효전력과 무효전력",
      "전압 크기와 유효전력",
      "전압 크기와 위상각",
      "전압 크기와 무효전력"
    ],
    answer: 3,
    explanation: "슬랙 모선(기준 모선)에서는 전압의 크기($V$)와 위상각($\\delta$)을 기지량으로 지정한다.",
    image: null
  },
  {
    id: 33,
    question: "직격뢰에 대한 방호설비로 가장 적당한 것은?",
    options: [
      "복도체",
      "가공지선",
      "서지흡수기",
      "정전방전기"
    ],
    answer: 2,
    explanation: "가공지선은 송전로 상부에 가설되어 직격뢰에 대한 차폐 효과를 제공한다.",
    image: null
  },
  {
    id: 34,
    question: "저압배전선로에 대한 설명으로 틀린 것은?",
    options: [
      "저압 뱅킹 방식은 전압변동을 경감할 수 있다.",
      "밸런서(balancer)는 단상 2선식에 필요하다.",
      "부하율(F)과 손실계수(H) 사이에는 $1 \\ge F \\ge H \\ge F^{2} \\ge 0$ 의 관계가 있다.",
      "수용률이란 최대수용전력을 설비용량으로 나눈 값을 퍼센트로 나타낸 것이다."
    ],
    answer: 2,
    explanation: "단상 3선식에서 부하 불평형 시 발생하는 전압 불평형을 방지하기 위해 저압 밸런서를 설치합니다. 단상 2선식에는 필요하지 않습니다.",
    image: null
  },
  {
    id: 35,
    question: "증기터빈 내에서 팽창 도중에 있는 증기를 일부 추기하여 그것이 갖는 열을 급수가열에 이용하는 열사이클은?",
    options: [
      "랭킨사이클",
      "카르노사이클",
      "재생사이클",
      "재열사이클"
    ],
    answer: 3,
    explanation: "터빈 내 팽창 도중 증기를 뽑아(추기) 급수를 가열하는 방식은 재생 사이클(Regenerative Cycle)입니다.",
    image: null
  },
  {
    id: 36,
    question: "단상 2선식 배전선로의 말단에 지상역률 $\\cos \\theta$ 인 부하 $P[kW]$ 가 접속되어 있고 선로말단의 전압은 $V[V]$ 이다. 선로 한 가닥의 저항을 $R[\\Omega]$ 이라 할 때 송전단의 공급전력 $[kW]$ 은?",
    options: [
      "$P + \\frac{P^{2}R}{V \\cos \\theta} \\times 10^{3}$",
      "$P + \\frac{2P^{2}R}{V \\cos \\theta} \\times 10^{3}$",
      "$P + \\frac{P^{2}R}{V^{2} \\cos^{2} \\theta} \\times 10^{3}$",
      "$P + \\frac{2P^{2}R}{V^{2} \\cos^{2} \\theta} \\times 10^{3}$"
    ],
    answer: 4,
    explanation: "송전단 전력 $P_{s} = P + P_{l}$ 입니다. 단상 2선식의 선로손실 $P_{l} = 2I^{2}R$ 이며, $I = \\frac{P \\times 10^{3}}{V \\cos \\theta}$ 이므로 대입하면 $P_{s} = P + \\frac{2P^{2}R}{V^{2} \\cos^{2} \\theta} \\times 10^{3}$ 이 됩니다.",
    image: null
  },
  {
    id: 37,
    question: "선로, 기기 등의 절연 수준 저감 및 전력용 변압기의 단절연을 모두 행할 수 있는 중성점 접지방식은?",
    options: [
      "직접접지방식",
      "소호리액터접지방식",
      "고저항접지방식",
      "비접지방식"
    ],
    answer: 1,
    explanation: "직접접지방식은 지락 시 건전상 전위 상승이 최소이므로 기기의 절연 수준을 낮추는 경제적인 단절연(Graded Insulation)이 가능합니다.",
    image: null
  },
  {
    id: 38,
    question: "부하전류 차단이 불가능한 전력개폐 장치는?",
    options: [
      "진공차단기",
      "유입차단기",
      "단로기",
      "가스차단기"
    ],
    answer: 3,
    explanation: "단로기(Disconnecting Switch)는 아크 소호 장치가 없으므로 무부하 상태의 회로만 개폐할 수 있으며, 부하전류 차단은 불가능합니다.",
    image: null
  },
  {
    id: 39,
    question: "최대수용전력이 $3[kW]$ 인 수용가가 3세대, $5[kW]$ 인 수용가가 6세대라고 할 때, 이 수용가군에 전력을 공급할 수 있는 주상변압기의 최소 용량 $[kVA]$ 은? (단, 역률은 1, 수용가 간의 부등률은 1.3이다.)",
    options: [
      "25",
      "30",
      "35",
      "40"
    ],
    answer: 2,
    explanation: "변압기용량 = (각 수용가 최대전력의 합) / 부등률 = $(3 \\times 3 + 5 \\times 6) / 1.3 = 39 / 1.3 = 30[kVA]$ 입니다.",
    image: null
  },
  {
    id: 40,
    question: "가공송전선로에서 총 단면적이 같은 경우 단도체와 비교하여 복도체의 장점이 아닌 것은?",
    options: [
      "안정도를 증대시킬 수 있다.",
      "공사비가 저렴하고 시공이 간편하다.",
      "전선표면의 전위경도를 감소시켜 코로나 임계전압이 높아진다.",
      "선로의 인덕턴스가 감소되고 정전용량이 증가해서 송전용량이 증대된다."
    ],
    answer: 2,
    explanation: "복도체는 단도체에 비해 시공이 복잡하고 공사비가 비싸다는 단점이 있습니다.",
    image: null
  },
  {
    id: 41,
    question: "부하전류가 크지 않을 때 직류 직권전동기 발생 토크는? (단, 자기회로가 불포화인 경우이다.)",
    options: [
      "전류에 비례한다.",
      "전류에 반비례한다.",
      "전류의 제곱에 비례한다.",
      "전류의 제곱에 반비례한다."
    ],
    answer: 3,
    explanation: "직권전동기에서 자기포화 전에는 자속 $\\phi$ 가 전류 $I$ 에 비례하므로, 토크 $T = K \\phi I = K' I^{2}$ 이 되어 전류의 제곱에 비례합니다.",
    image: null
  },
  {
    id: 42,
    question: "동기전동기에 대한 설명으로 틀린 것은?",
    options: [
      "동기전동기는 주로 회전계자형이다.",
      "동기전동기는 무효전력을 공급할 수 있다.",
      "동기전동기는 제동권선을 이용한 기동법이 일반적으로 많이 사용된다.",
      "3상 동기전동기의 회전방향을 바꾸려면 계자권선 전류의 방향을 반대로 한다."
    ],
    answer: 4,
    explanation: "3상 동기전동기의 회전방향을 바꾸려면 계자전류가 아니라 3선 중 2선의 접속을 바꾸어야 합니다.",
    image: null
  },
  {
    id: 43,
    question: "동기발전기에서 동기속도와 극수와의 관계를 옳게 표시한 것은? (단, $N$ : 동기속도, $P$ : 극수이다.)",
    options: [
      "$N \\propto P$",
      "$N \\propto \\frac{1}{P}$",
      "$N \\propto P^{2}$",
      "$N \\propto \\frac{1}{P^{2}}$"
    ],
    answer: 2,
    explanation: "동기속도 $N_{s} = \\frac{120f}{P}$ 이므로, 속도는 극수 $P$ 에 반비례합니다.",
    image: null
  },
  {
    id: 44,
    question: "어떤 직류전동기가 역기전력 $200[V]$, 매분 1200회전으로 토크 $158.76[N\\cdot m]$ 를 발생하고 있을 때의 전기자 전류는 약 몇 $[A]$ 인가? (단, 기계손 및 철손은 무시한다.)",
    options: [
      "90",
      "95",
      "100",
      "105"
    ],
    answer: 3,
    explanation: "출력 $P = E_{c} I_{a} = \\omega T = (\\frac{2\\pi \\times 1200}{60}) \\times 158.76$ 입니다. $200 \\times I_{a} = 40\\pi \\times 158.76 \\approx 19950$, 따라서 $I_{a} \\approx 100[A]$ 입니다.",
    image: null
  },
  {
    id: 45,
    question: "일반적인 DC 서보모터의 제어에 속하지 않는 것은?",
    options: [
      "역률제어",
      "토크제어",
      "속도제어",
      "위치제어"
    ],
    answer: 1,
    explanation: "서보모터는 위치, 속도, 토크를 정밀하게 추종하는 것이 목적이며 역률제어는 수행하지 않습니다.",
    image: null
  },
  {
    id: 46,
    question: "극수가 4극이고 전기자권선이 단중 중권인 직류발전기의 전기자전류가 $40[A]$ 이면 전기자권선의 각 병렬회로에 흐르는 전류 $[A]$ 는?",
    options: [
      "4",
      "6",
      "8",
      "10"
    ],
    answer: 4,
    explanation: "중권(Parallel winding)에서 병렬회로수 $a$ 는 극수 $P$ 와 같으므로 $a=4$ 입니다. 각 회로의 전류 $I = 40/4 = 10[A]$ 입니다.",
    image: null
  },
  {
    id: 47,
    question: "부스트(Boost)컨버터의 입력전압이 $45[V]$ 로 일정하고, 스위칭 주기가 $20[kHz]$, 듀티비(Duty ratio)가 0.6일 때 출력전압은 몇 $[V]$ 인가?",
    options: [
      "27",
      "67.5",
      "75",
      "112.5"
    ],
    answer: 4,
    explanation: "부스트 컨버터 출력전압 $V_{o} = \\frac{V_{i}}{1-D} = \\frac{45}{1-0.6} = \\frac{45}{0.4} = 112.5[V]$ 입니다.",
    image: null
  },
  {
    id: 48,
    question: "8극, $900[rpm]$ 동기발전기와 병렬 운전하는 6극 동기발전기의 회전수는 몇 $[rpm]$ 인가?",
    options: [
      "900",
      "1000",
      "1200",
      "1400"
    ],
    answer: 3,
    explanation: "병렬운전 시 주파수가 같아야 합니다. $f = \\frac{PN}{120} = \\frac{8 \\times 900}{120} = 60[Hz]$ 입니다. 6극 발전기의 회전수 $N = \\frac{120 \\times 60}{6} = 1200[rpm]$ 입니다.",
    image: null
  },
  {
    id: 49,
    question: "단상 정류자전동기의 일종인 단상 반발전동기에 해당되는 것은?",
    options: [
      "시라게전동기",
      "반발유도전동기",
      "아트킨손형 전동기",
      "단상 직권 정류자전동기"
    ],
    answer: 3,
    explanation: "단상 반발 전동기에는 아트킨손형(Atkinson), 톰슨(Thomson), 데리(Deri) 전동기가 있습니다.",
    image: null
  },
  {
    id: 50,
    question: "변압기 단락시험에서 변압기의 임피던스 전압이란?",
    options: [
      "1차 전류가 여자전류에 도달했을 때의 2차측 단자전압",
      "1차 전류가 정격전류에 도달했을 때의 2차측 단자전압",
      "1차 전류가 정격전류에 도달했을 때의 변압기 내의 전압강하",
      "1차 전류가 2차 단락전류에 도달했을 때의 변압기 내의 전압강하"
    ],
    answer: 3,
    explanation: "임피던스 전압은 변압기 2차측을 단락한 후 1차측에 정격전류가 흐르도록 인가한 전압이며, 이는 변압기 내부의 전압강하와 같습니다.",
    image: null
  },
  {
    id: 51,
    question: "10[kW], 3상 380[V] 유도전동기의 전부하 전류는 약 몇 [A]인가? (단, 전동기의 효율은 85%, 역률은 85%이다.)",
    options: [
      "15",
      "21",
      "26",
      "36"
    ],
    answer: 2,
    explanation: "$I = \\frac{P}{\\sqrt{3}V \\cdot \\cos \\theta \\cdot \\eta} = \\frac{10000}{\\sqrt{3} \\times 380 \\times 0.85 \\times 0.85} \\approx 21.03[A]$ 입니다.",
    image: null
  },
  {
    id: 52,
    question: "와전류 손실을 패러데이 법칙으로 설명한 과정 중 틀린 것은?",
    options: [
      "와전류가 철심 내에 흘러 발열 발생",
      "유도기전력 발생으로 철심에 와전류가 흐름",
      "와전류 에너지 손실량은 전류밀도에 반비례",
      "시변 자속으로 강자성체 철심에 유도기전력 발생"
    ],
    answer: 3,
    explanation: "와전류 손실은 전류밀도의 제곱에 비례하며 재료 특성 및 주파수, 자속밀도에 의존합니다. 반비례 설명은 옳지 않습니다.",
    image: null
  },
  {
    id: 53,
    question: "변압기의 주요시험 항목 중 전압변동률 계산에 필요한 수치를 얻기 위한 필수적인 시험은?",
    options: [
      "단락시험",
      "내전압시험",
      "변압비시험",
      "온도상승시험"
    ],
    answer: 1,
    explanation: "전압변동률 계산에 필요한 퍼센트 저항강하($p$)와 퍼센트 리액턴스 강하($q$)를 구하기 위해서는 단락시험이 필수적입니다.",
    image: null
  },
  {
    id: 54,
    question: "2전동기설에 의하여 단상 유도전동기의 가상적 2개의 회전자 중 정방향에 회전하는 회전자 슬립이 $s$ 이면 역방향에 회전하는 가상적 회전자의 슬립은 어떻게 표시되는가?",
    options: [
      "$1 + s$",
      "$1 - s$",
      "$2 - s$",
      "$3 - s$"
    ],
    answer: 3,
    explanation: "역방향 슬립 $s_{b} = \\frac{N_{s} - (-N)}{N_{s}} = \\frac{N_{s} + N}{N_{s}} = 2 - s$ 가 됩니다.",
    image: null
  },
  {
    id: 55,
    question: "3상 농형 유도전동기의 전전압 기동토크는 전부하토크의 1.8배이다. 이 전동기에 기동보상기를 사용하여 기동전압을 전전압의 $2/3$ 로 낮추어 기동하면, 기동토크는 전부하토크 $T$ 와 어떤 관계인가?",
    options: [
      "1.0$T$",
      "0.8$T$",
      "0.6$T$",
      "0.3$T$"
    ],
    answer: 2,
    explanation: "토크는 전압의 제곱에 비례하므로, $T' = 1.8T \\times (2/3)^{2} = 1.8T \\times 4/9 = 0.8T$ 가 됩니다.",
    image: null
  },
  {
    id: 56,
    question: "변압기에서 생기는 철손 중 와류손(Eddy Current Loss)은 철심의 규소강판 두께와 어떤 관계에 있는가?",
    options: [
      "두께에 비례",
      "두께의 2승에 비례",
      "두께의 3승에 비례",
      "두께의 $1/2$ 승에 비례"
    ],
    answer: 2,
    explanation: "와류손 $P_{e} = K_{e}(t f B_{m})^{2}$ 이므로 철심 두께 $t$ 의 제곱에 비례합니다.",
    image: null
  },
  {
    id: 57,
    question: "50[Hz], 12극의 3상 유도전동기가 10[HP]의 정격출력을 내고 있을 때, 회전수는 약 몇 [rpm]인가? (단, 회전자 동손은 350[W]이고, 회전자 입력은 동손과 출력의 합이다.)",
    options: [
      "468",
      "478",
      "488",
      "500"
    ],
    answer: 2,
    explanation: "2차 입력 $P_{2} = 10 \\times 746 + 350 = 7810[W]$. 슬립 $s = P_{c2} / P_{2} = 350 / 7810 \\approx 0.0448$. 동기속도 $N_{s} = 120 \\times 50 / 12 = 500$. 회전수 $N = 500 \\times (1-0.0448) \\approx 478[rpm]$ 입니다.",
    image: null
  },
  {
    id: 58,
    question: "변압기의 권수를 $N$ 이라고 할 때 누설리액턴스는?",
    options: [
      "$N$ 에 비례한다.",
      "$N^{2}$ 에 비례한다.",
      "$N$ 에 반비례한다.",
      "$N^{2}$ 에 반비례한다."
    ],
    answer: 2,
    explanation: "인덕턴스 $L = \\frac{N^{2}}{R_{m}}$ 이므로 누설리액턴스는 권수 $N$ 의 제곱에 비례합니다.",
    image: null
  },
  {
    id: 59,
    question: "동기발전기의 병렬운전 조건에서 같지 않아도 되는 것은?",
    options: [
      "기전력의 용량",
      "기전력의 위상",
      "기전력의 크기",
      "기전력의 주파수"
    ],
    answer: 1,
    explanation: "동기발전기 병렬운전 조건은 크기, 위상, 주파수, 파형이 같아야 하며 용량은 서로 달라도 무방합니다.",
    image: null
  },
  {
    id: 60,
    question: "다이오드를 사용하는 정류회로에서 과대한 부하전류로 인하여 다이오드가 소손될 우려가 있을 때 가장 적절한 조치는?",
    options: [
      "다이오드를 병렬로 추가한다.",
      "다이오드를 직렬로 추가한다.",
      "다이오드 양단에 적당한 저항을 추가한다.",
      "다이오드 양단에 적당한 커패시터를 추가한다."
    ],
    answer: 1,
    explanation: "과전류 방지를 위해서는 다이오드를 병렬로 연결하여 전류를 분담시킵니다. (직렬 연결은 과전압 방지 목적)",
    image: null
  },
  {
    id: 61,
    question: "전달함수가 $G_{C}(s) = \\frac{s^{2} + 3s + 5}{2s}$ 인 제어기는 어떤 제어기인가?",
    options: [
      "비례 미분 제어기",
      "적분 제어기",
      "비례 적분 제어기",
      "비례 미분 적분 제어기"
    ],
    answer: 4,
    explanation: "$G_{c}(s) = \\frac{s}{2} + \\frac{3}{2} + \\frac{5}{2s}$ 로 분리하면 비례($3/2$), 미분($s/2$), 적분($5/2s$) 항이 모두 포함된 PID 제어기임을 알 수 있습니다.",
    image: null
  },
  {
    id: 62,
    question: "제시된 논리회로의 출력 $Y$ 는? (입력 A, B가 OR 게이트와 AND 게이트로 연결된 구조)",
    options: [
      "$A$",
      "$B$",
      "$A + B$",
      "$A \\cdot B$"
    ],
    answer: 2,
    explanation: "회로를 수식으로 정리하면 $Y = (A + B) \\cdot B = AB + BB = AB + B = B(A + 1) = B$ 입니다.",
    image: null
  },
  {
    id: 63,
    question: "특성방정식이 $s^{3} + 2s^{2} + s + k = 0$ 인 제어시스템이 안정하기 위한 $k$ 의 범위는?",
    options: [
      "$k > 0$",
      "$k > 1$",
      "$0 < k < 1$",
      "$0 < k < 2$"
    ],
    answer: 4,
    explanation: "Routh 판별법 적용 시 제1열 부호 변화가 없어야 합니다. $s^{2}$ 행 계수 2, $s^{1}$ 행 계수 $(2 \\times 1 - k)/2 > 0$ 이므로 $k < 2$ 이고 $k > 0$ 이어야 안정합니다.",
    image: null
  },
  {
    id: 64,
    question: "상태방정식 $\\dot{x} = \\begin{bmatrix} 0 & 1 \\\\ -2 & -3 \\end{bmatrix}x + \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}u$ 로 표현되는 제어시스템의 특성방정식의 근은?",
    options: [
      "1, -3",
      "-1, -2",
      "-2, -3",
      "-1, -3"
    ],
    answer: 2,
    explanation: "$|sI - A| = s^{2} + 3s + 2 = (s+1)(s+2) = 0$. 따라서 근은 -1, -2입니다.",
    image: null
  },
  {
    id: 65,
    question: "그림의 블록선도에서 $A=1, B=1$ 일 때 출력 $C$ 는 약 얼마인가? (전향경로 15, 피드백 경로 4, 이득 5)",
    options: [
      "0.22",
      "0.33",
      "1.22",
      "3.1"
    ],
    answer: 2,
    explanation: "$C/A = 15/(1+60) = 15/61$, $C/B = 5/61$. 중첩의 원리에 의해 $C = 20/61 \\approx 0.33$ 입니다.",
    image: null
  },
  {
    id: 66,
    question: "전달함수가 $\\frac{C(s)}{R(s)} = \\frac{1}{3s^{2} + 4s + 1}$ 인 제어시스템의 과도 응답 특성은?",
    options: [
      "무제동",
      "부족제동",
      "임계제동",
      "과제동"
    ],
    answer: 4,
    explanation: "특성방정식 $s^{2} + \\frac{4}{3}s + \\frac{1}{3} = 0$ 에서 감쇠비 $\\delta = \\frac{4/3}{2\\sqrt{1/3}} \\approx 1.15 > 1$ 이므로 과제동(Overdamped)입니다.",
    image: null
  },
  {
    id: 67,
    question: "제어요소가 제어대상에 주는 양은?",
    options: [
      "동작신호",
      "조작량",
      "제어량",
      "궤환량"
    ],
    answer: 2,
    explanation: "제어장치(제어요소)의 출력이자 제어대상의 입력이 되는 신호를 조작량(Manipulated variable)이라 합니다.",
    image: null
  },
  {
    id: 68,
    question: "함수 $f(t) = e^{-at}$ 의 $Z$ 변환 함수 $F(z)$ 는?",
    options: [
      "$\\frac{2z}{z - e^{aT}}$",
      "$\\frac{1}{z + e^{aT}}$",
      "$\\frac{z}{z + e^{-aT}}$",
      "$\\frac{z}{z - e^{-aT}}$"
    ],
    answer: 4,
    explanation: "지수함수 $e^{-at}$ 의 $Z$ 변환 공식은 $\\frac{z}{z - e^{-aT}}$ 입니다.",
    image: null
  },
  {
    id: 69,
    question: "전달함수 $G(j\\omega) = j5\\omega$ 일 때, $\\omega = 0.02[rad/sec]$ 에서의 이득 $[dB]$ 은?",
    options: [
      "20",
      "10",
      "-20",
      "-10"
    ],
    answer: 3,
    explanation: "$G = 20 \\log |j5 \\times 0.02| = 20 \\log 0.1 = -20[dB]$ 입니다.",
    image: null
  },
  {
    id: 70,
    question: "페루프 전달함수 $T(s) = \\frac{KG}{1+GH}$ 에서 이득 $K$ 에 대한 감도 $S_{K}^{T}$ 는?",
    options: [
      "1",
      "0.5",
      "$\\frac{G}{1+GH}$",
      "$\\frac{-GH}{1+GH}$"
    ],
    answer: 1,
    explanation: "$S_{K}^{T} = \\frac{\\partial T}{\\partial K} \\cdot \\frac{K}{T}$ 계산 시 1이 도출됩니다.",
    image: null
  },
  {
    id: 71,
    question: "구동점 임피던스의 영점이 $s=-10$, 극점이 $s=-5 \\pm j20$ 이고 $Z(0)=1$ 인 회로의 $R, L, C$ 값은?",
    options: [
      "$R=1[\\Omega], L=0.1[H], C=0.0235[F]$",
      "$R=1[\\Omega], L=0.2[H], C=1.0[F]$",
      "$R=2[\\Omega], L=0.1[H], C=0.0235[F]$",
      "$R=2[\\Omega], L=0.2[H], C=1.0[F]$"
    ],
    answer: 1,
    explanation: "$Z(0)=R=1$ 입니다. 영점 조건 $-\\frac{R}{L}=-10$ 에서 $L=0.1$ 이 도출됩니다. 극점 조건 $s^{2} + \\frac{R}{L}s + \\frac{1}{LC}$ 를 통해 $C$ 값을 구하면 약 $0.0235$ 입니다.",
    image: null
  },
  {
    id: 72,
    question: "그림의 회로에서 $6[V]$ 전압원과 $4[A]$ 전류원이 있을 때 저항 $1[\\Omega]$ 에 흐르는 전류는?",
    options: [
      "3",
      "2",
      "1",
      "-1"
    ],
    answer: 3,
    explanation: "중첩의 원리: 전압원만 있을 때 $3[A]$, 전류원만 있을 때 반대방향 $2[A]$ 가 흐릅니다. $3 - 2 = 1[A]$ 입니다.",
    image: null
  },
  {
    id: 73,
    question: "파형이 톱니파인 경우 파형률은 약 얼마인가?",
    options: [
      "1.155",
      "1.732",
      "1.414",
      "0.577"
    ],
    answer: 1,
    explanation: "톱니파(삼각파)의 파형률(실효값/평균값)은 $1.155$ (약 $\\frac{2}{\\sqrt{3}}$) 입니다.",
    image: null
  },
  {
    id: 74,
    question: "무손실 전송선로에서 $L=7.5[\\mu H/m], C=0.012[\\mu F/m]$ 일 때 전압 $100[V]$ 지점의 전류 $[A]$ 는?",
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    answer: 2,
    explanation: "특성 임피던스 $Z_{0} = \\sqrt{L/C} = \\sqrt{7.5/0.012} = 25[\\Omega]$. $I = V/Z_{0} = 100/25 = 4[A]$ 입니다.",
    image: null
  },
  {
    id: 75,
    question: "전압 $v(t) = 14.14 \\sin \\omega t + 7.07 \\sin (3\\omega t + \\pi/6)$ 의 실효값은 약 몇 $[V]$ 인가?",
    options: [
      "8.87",
      "11.2",
      "15.8",
      "21.2"
    ],
    answer: 2,
    explanation: "$V_{rms} = \\sqrt{(14.14/\\sqrt{2})^{2} + (7.07/\\sqrt{2})^{2}} = \\sqrt{100 + 25} \\approx 11.2[V]$ 입니다.",
    image: null
  },
  {
    id: 76,
    question: "평형 3상 $\\Delta$ 회로에서 $V_{ab}=200[V], Z=4+j3[\\Omega]$ 일 때 선전류 $[A]$ 는?",
    options: [
      "$40\\sqrt{3} \\angle 36.87^{\\circ}$",
      "$40\\sqrt{3} \\angle -36.87^{\\circ}$",
      "$40\\sqrt{3} \\angle 66.87^{\\circ}$",
      "$40\\sqrt{3} \\angle -66.87^{\\circ}$"
    ],
    answer: 4,
    explanation: "상전류 $I_{p} = 200/5 = 40[A]$. 위상차 $\\theta = 36.87^{\\circ}$. $\\Delta$ 결선 선전류는 상전류의 $\\sqrt{3}$ 배이며 위상은 $30^{\circ}$ 더 늦으므로 총 $-66.87^{\\circ}$ 가 됩니다.",
    image: null
  },
  {
    id: 77,
    question: "정상상태에서 $t=0$ 에 스위치를 열었을 때 회로에 흐르는 과도 전류 $i(t)$ 는?",
    options: [
      "$\\frac{V}{R} e^{-\\frac{R+r}{L}t}$",
      "$\\frac{V}{r} e^{-\\frac{R+r}{L}t}$",
      "$\\frac{V}{R} e^{-\\frac{L}{R+r}t}$",
      "$\\frac{V}{r} e^{-\\frac{L}{R+r}t}$"
    ],
    answer: 2,
    explanation: "전원 제거 시 시정수는 $L/(R+r)$ 이며 초기 전류는 $V/r$ 입니다. 지수적으로 감소하는 형태인 2번이 정답입니다.",
    image: null
  },
  {
    id: 78,
    question: "선간전압 $150[V]$, 선전류 $10\\sqrt{3}[A]$, 역률 80%일 때 평형 3상 무효전력 $[var]$ 은?",
    options: [
      "3600",
      "3000",
      "2700",
      "1800"
    ],
    answer: 3,
    explanation: "$P_{r} = \\sqrt{3}VI \\sin \\theta = \\sqrt{3} \\times 150 \\times 10\\sqrt{3} \\times 0.6 = 4500 \\times 0.6 = 2700[var]$ 입니다.",
    image: null
  },
  {
    id: 79,
    question: "그림과 같은 구형 펄스($t=1$ 에서 $t=2$ 까지 크기 1)의 라플라스 변환은?",
    options: [
      "$\\frac{1}{s} (e^{s} - e^{2s})$",
      "$\\frac{1}{s} (e^{-s} - e^{-2s})$",
      "$\\frac{1}{s} (e^{-2s} - e^{-s})$",
      "$\\frac{1}{s} (e^{-s} + e^{-2s})$"
    ],
    answer: 2,
    explanation: "$f(t) = u(t-1) - u(t-2)$ 이므로 시간 추이 정리를 적용하면 $\\frac{e^{-s}}{s} - \\frac{e^{-2s}}{s}$ 가 됩니다.",
    image: null
  },
  {
    id: 80,
    question: "불평형 3상 전류 $I_{a}=15+j2, I_{b}=-20-j14, I_{c}=-3+j10$ 일 때 영상분 전류 $[A]$ 는?",
    options: [
      "$2.67 + j0.38$",
      "$15.5 - j3.56$",
      "$2.02 + j6.98$",
      "$-2.67 - j0.67$"
    ],
    answer: 4,
    explanation: "$I_{0} = \\frac{1}{3}(I_{a} + I_{b} + I_{c}) = \\frac{1}{3}(-8 - j2) = -2.67 - j0.67$ 입니다.",
    image: null
  },
  {
    id: 81,
    question: "지중 전선로를 직접 매설식에 의하여 차량 기타 중량물의 압력을 받을 우려가 있는 장소에 시설하는 경우 매설 깊이는 몇 $[m]$ 이상으로 하여야 하는가?",
    options: [
      "0.6",
      "1.0",
      "1.2",
      "1.5"
    ],
    answer: 2,
    explanation: "중량물의 압력을 받을 우려가 있는 장소는 $1.0[m]$, 기타 장소는 $0.6[m]$ 이상 매설해야 합니다.",
    image: null
  },
  {
    id: 82,
    question: "지중 전선로에 사용하는 지중함의 시설기준으로 틀린 것은?",
    options: [
      "조명 및 세척이 가능한 장치를 하도록 할 것",
      "견고하고 차량 기타 중량물의 압력에 견디는 구조일 것",
      "그 안의 고인 물을 제거할 수 있는 구조로 되어 있을 것",
      "뚜껑은 시설자 이외의 자가 쉽게 열 수 없도록 시설할 것"
    ],
    answer: 1,
    explanation: "지중함에 조명이나 세척 장치를 시설해야 한다는 규정은 없습니다.",
    image: null
  },
  {
    id: 83,
    question: "돌침, 수평도체, 메시도체의 요소 중에 한 가지 또는 이를 조합한 형식으로 시설하는 것은?",
    options: [
      "접지극시스템",
      "수뢰부시스템",
      "내부피뢰시스템",
      "인하도선시스템"
    ],
    answer: 2,
    explanation: "낙뢰를 직접 받아내는 부분을 수뢰부시스템(Air-termination system)이라 하며 돌침 등을 사용합니다.",
    image: null
  },
  {
    id: 84,
    question: "일반 주택의 저압 옥내배선 시설기준 중 적합하지 않은 것은?",
    options: [
      "합성수지관의 지지점 간의 거리를 $2[m]$ 로 하였다.",
      "합성수지관 안에서 전선의 접속점이 없도록 하였다.",
      "금속관공사에 절연전선을 사용하였다.",
      "인입구 가까운 곳에 개폐기를 시설하였다."
    ],
    answer: 1,
    explanation: "합성수지관공사에서 지지점 간의 거리는 $1.5[m]$ 이하로 규정되어 있습니다.",
    image: null
  },
  {
    id: 85,
    question: "하나 또는 복합하여 시설하여야 하는 접지극의 방법으로 틀린 것은?",
    options: [
      "지중 금속구조물",
      "토양에 매설된 기초 접지극",
      "케이블의 금속외장 및 금속피복",
      "대지에 매설된 강화콘크리트의 용접된 금속보강재"
    ],
    answer: 4,
    explanation: "강화콘크리트의 금속보강재는 접지극으로 사용할 수 없으나, 일반 철근콘크리트의 용접된 철근은 가능합니다.",
    image: null
  },
  {
    id: 86,
    question: "매설금속체측의 누설전류에 의한 전기 부식 방지 방법으로 틀린 것은?",
    options: [
      "절연코팅",
      "배류장치 설치",
      "변전소 간 간격 축소",
      "저준위 금속체를 접속"
    ],
    answer: 3,
    explanation: "변전소 간 간격 축소는 '전기철도측'의 부식 방지 대책이며, 매설금속체측의 대책이 아닙니다.",
    image: null
  },
  {
    id: 87,
    question: "사용전압 $154[kV]$ 전선로를 제1종 특고압보안공사로 시설할 때 경동연선의 단면적은 몇 $[mm^{2}]$ 이상이어야 하는가?",
    options: [
      "55",
      "100",
      "150",
      "200"
    ],
    answer: 3,
    explanation: "$100[kV]$ 이상 $300[kV]$ 미만의 보안공사에서는 단면적 $150[mm^{2}]$ 이상의 경동연선을 사용해야 합니다.",
    image: null
  },
  {
    id: 88,
    question: "동일 지지물에 저압 가공전선과 고압 가공전선을 병행 설치하는 경우의 기준으로 옳은 것은?",
    options: [
      "고압을 아래로 하고 이격거리 $0.5[m]$ 이상",
      "고압을 아래로 하고 이격거리 $1.0[m]$ 이상",
      "고압을 위로 하고 이격거리 $0.5[m]$ 이상",
      "고압을 위로 하고 이격거리 $1.0[m]$ 이상"
    ],
    answer: 3,
    explanation: "고압 가공전선을 저압 가공전선의 위에 배치하며, 두 전선 사이의 이격거리는 최소 $0.5[m]$ 이상이어야 합니다.",
    image: null
  },
  {
    id: 89,
    question: "플로어덕트공사에서 연선을 사용하지 않아도 되는 구리선(동선)의 최대 단면적은 몇 $[mm^{2}]$ 인가?",
    options: [
      "2.5",
      "4",
      "6",
      "10"
    ],
    answer: 4,
    explanation: "단면적 $10[mm^{2}]$ (알루미늄 $16[mm^{2}]$) 이하인 경우에는 단선(연선 아님) 사용이 가능합니다.",
    image: null
  },
  {
    id: 90,
    question: "전기설비기술기준의 안전원칙에 대한 내용 중 틀린 것은?",
    options: [
      "감전, 화재 등 위해 우려가 없도록 시설한다.",
      "다른 물건의 기능에 전기적 장해를 주지 않도록 한다.",
      "경쟁과 사업 도입 촉진을 통한 건전한 발전을 도모하도록 시설한다.",
      "손상으로 인해 전기 공급에 지장을 주지 않도록 한다."
    ],
    answer: 3,
    explanation: "기술기준 제2조(안전원칙)는 전기설비의 물리적 안전과 장해 방지에 대한 규정이며, 경쟁 촉진 등의 경영적 내용은 포함되지 않습니다.",
    image: null
  },
  {
    id: 91,
    question: "전압의 종별에서 교류 $600[V]$ 는 무엇으로 분류하는가?",
    options: [
      "저압",
      "고압",
      "특고압",
      "초고압"
    ],
    answer: 1,
    explanation: "KEC 규정에 따라 교류 $1,000[V]$ 이하(직류 $1,500[V]$ 이하)는 저압으로 분류됩니다.",
    image: null
  },
  {
    id: 92,
    question: "풍력터빈 설비 손상 방지를 위한 계측장치에 포함되지 않는 것은?",
    options: [
      "조도계",
      "압력계",
      "온도계",
      "풍속계"
    ],
    answer: 1,
    explanation: "풍력터빈 계측장치는 회전속도계, 진동계, 풍속계, 압력계, 온도계가 필요하며 조도계는 해당되지 않습니다.",
    image: null
  },
  {
    id: 93,
    question: "옥내 배선공사 중 반드시 절연전선을 사용하지 않아도 되는 공사방법은?",
    options: [
      "금속관공사",
      "버스덕트공사",
      "합성수지관공사",
      "플로어덕트공사"
    ],
    answer: 2,
    explanation: "버스덕트, 라이팅덕트, 접촉전선 등은 나전선 사용이 예외적으로 허용되는 공사입니다.",
    image: null
  },
  {
    id: 94,
    question: "시가지 시설 철탑 특고압 가공전선로($170[kV]$ 이하)에서 전선 수평 간격이 $4[m]$ 미만인 경우 경간은 몇 $[m]$ 이하인가?",
    options: [
      "100",
      "150",
      "200",
      "250"
    ],
    answer: 4,
    explanation: "철탑의 일반 경간은 $400[m]$ 이나, 전선 수평 간격이 $4[m]$ 미만인 경우에는 $250[m]$ 이하로 제한됩니다.",
    image: null
  },
  {
    id: 95,
    question: "기술원이 수시로 순회하는 무인 변전소에서 경보장치를 시설하지 않아도 되는 경우는?",
    options: [
      "변전소에 화재가 발생한 경우",
      "제어회로의 전압이 현저히 저하한 경우",
      "차단기가 자동 차단 후 재폐로한 경우",
      "수소 순도가 90% 이하로 저하한 경우"
    ],
    answer: 3,
    explanation: "차단기가 재폐로(Reclosing)된 경우에는 기술자가 즉시 출동할 필요가 없으므로 경보 대상에서 제외됩니다.",
    image: null
  },
  {
    id: 96,
    question: "특고압용 타냉식 변압기의 냉각장치 고장 시 필요한 보호장치는?",
    options: [
      "경보장치",
      "속도조정장치",
      "온도시험장치",
      "냉매흐름장치"
    ],
    answer: 1,
    explanation: "타냉식 변압기는 냉각장치 고장이나 온도 상승 시 반드시 '경보장치'를 시설해야 합니다.",
    image: null
  },
  {
    id: 97,
    question: "특고압 가공전선로 지지물 중 양쪽의 경간 차가 큰 곳에 사용하는 철탑의 종류는?",
    options: [
      "각도형",
      "인류형",
      "내장형",
      "보강형"
    ],
    answer: 3,
    explanation: "경간의 차가 큰 곳(Long span)에는 전선의 장력 불평형에 견디는 내장형(Strain type) 철탑을 사용합니다.",
    image: null
  },
  {
    id: 98,
    question: "아파트 욕실 비데용 콘센트 시설방법 중 적합하지 않은 것은?",
    options: [
      "콘센트는 접지극이 없는 것을 사용한다.",
      "습기가 많은 곳은 방습장치를 한다.",
      "절연변압기($3[kVA]$ 이하)로 보호된 전로에 접속한다.",
      "인체감전보호용 누전차단기($15[mA]$ 이하)로 보호된 전로에 접속한다."
    ],
    answer: 1,
    explanation: "물기가 있는 장소의 콘센트는 반드시 접지극이 있는 방적형 콘센트를 사용해야 합니다.",
    image: null
  },
  {
    id: 99,
    question: "고압 가공전선로의 가공지선에 나경동선을 사용 시 최소 지름은 몇 $[mm]$ 인가?",
    options: [
      "2.0",
      "3.0",
      "4.0",
      "5.0"
    ],
    answer: 3,
    explanation: "고압 가공지선은 인장강도 $5.26[kN]$ 이상 또는 지름 $4[mm]$ 이상의 나경동선을 사용합니다.",
    image: null
  },
  {
    id: 100,
    question: "변전소 주요 변압기에서 계측해야 하는 사항이 아닌 것은?",
    options: [
      "역률",
      "전압",
      "전력",
      "전류"
    ],
    explanation: "변전소 주요 변압기에는 전압, 전류, 전력 및 온도를 계측하는 장치를 시설해야 하며 역률은 필수 계측 항목이 아닙니다.",
    answer: 1,
    image: null
  }
];

export default questions;