const questions = [
  {
    id: 1,
    question: "와류손(Eddy current loss)은 최대 자속 밀도의 몇 승에 비례하는가?",
    options: [
      "1",
      "1.6",
      "2",
      "2.6"
    ],
    answer: 3,
    explanation: "와류손 $P_{e} = \\sigma_{e} (t f B_{m} k_{f})^{2} [W/kg]$ 이므로, 최대 자속 밀도 $B_{m}$의 2승에 비례합니다.",
    image: null
  },
  {
    id: 2,
    question: "비유전율이 9인 유전체 내의 전계의 세기가 $100[V/m]$ 일 때, 유전체 내에 저장되는 에너지 밀도 $[J/m^{3}]$ 는?",
    options: [
      "$3.98 \\times 10^{-8}$",
      "$7.96 \\times 10^{-8}$",
      "$3.98 \\times 10^{-7}$",
      "$7.96 \\times 10^{-7}$"
    ],
    answer: 1,
    explanation: "에너지 밀도 $w = \\frac{1}{2} \\epsilon E^{2} = \\frac{1}{2} \\epsilon_{0} \\epsilon_{r} E^{2} = \\frac{1}{2} \\times 8.855 \\times 10^{-12} \\times 9 \\times 100^{2} \\approx 3.98 \\times 10^{-8} [J/m^{3}]$ 입니다.",
    image: null
  },
  {
    id: 3,
    question: "무한 평면 도체로부터 거리 $d[m]$ 인 곳에 점전하 $Q[C]$ 가 있을 때, 도체 표면상의 최대 전계의 세기는?",
    options: [
      "$\\frac{Q}{2\\pi\\epsilon_{0}d^{2}}$",
      "$\\frac{Q}{4\\pi\\epsilon_{0}d^{2}}$",
      "$\\frac{Q}{8\\pi\\epsilon_{0}d^{2}}$",
      "$\\frac{Q}{16\\pi\\epsilon_{0}d^{2}}$"
    ],
    answer: 1,
    explanation: "영상전하법에 의해 전계의 세기를 구하면 $E = \\frac{Q}{2\\pi\\epsilon_{0}d^{2}}$ 가 최댓값이 됩니다.",
    image: null
  },
  {
    id: 4,
    question: "공기 중에서 반지름 $a[m]$ 인 구도체의 정전용량 $[F]$ 은?",
    options: [
      "$\\frac{1}{4\\pi\\epsilon_{0}a}$",
      "$2\\pi\\epsilon_{0}a$",
      "$4\\pi\\epsilon_{0}a$",
      "$4\\pi\\epsilon_{0}a^{2}$"
    ],
    answer: 3,
    explanation: "고립 구도체의 정전용량 공식은 $C = 4\\pi\\epsilon_{0}a$ 입니다.",
    image: null
  },
  {
    id: 5,
    question: "자기 인덕턴스가 각각 $L_{1}, L_{2}$ 인 두 코일을 결합계수 $k$ 로 결합했을 때의 상호 인덕턴스 $M$ 은?",
    options: [
      "$k L_{1} L_{2}$",
      "$k \\sqrt{L_{1} L_{2}}$",
      "$\\frac{\\sqrt{L_{1} L_{2}}}{k}$",
      "$\\frac{k}{\\sqrt{L_{1} L_{2}}}$"
    ],
    answer: 2,
    explanation: "상호 인덕턴스 $M = k \\sqrt{L_{1}L_{2}}$ 로 정의됩니다.",
    image: null
  },
  {
    id: 6,
    question: "전계 $E [V/m]$ 와 자계 $H [A/m]$ 의 전자파가 평면파를 이루며 자유공간으로 전파될 때, 포인팅 벡터(Poynting vector) $S [W/m^{2}]$ 의 크기는?",
    options: [
      "$EH$",
      "$E^{2}H$",
      "$\\frac{E}{H}$",
      "$\\frac{H}{E}$"
    ],
    answer: 1,
    explanation: "포인팅 벡터 $\\vec{S} = \\vec{E} \\times \\vec{H}$ 이므로 그 크기는 $S = EH [W/m^{2}]$ 가 됩니다.",
    image: null
  },
  {
    id: 7,
    question: "비투자율이 1000인 강자성체 내의 자계의 세기가 $200 [AT/m]$ 일 때, 자화의 세기 $J$ 는 약 몇 $[Wb/m^{2}]$ 인가?",
    options: [
      "0.15",
      "0.25",
      "0.35",
      "0.45"
    ],
    answer: 2,
    explanation: "$J = \\mu_{0}(\\mu_{r}-1)H = 4\\pi \\times 10^{-7} \\times (1000-1) \\times 200 \\approx 0.25 [Wb/m^{2}]$ 입니다.",
    image: null
  },
  {
    id: 8,
    question: "두 유전체의 경계면에서 전속밀도와 전계가 갖는 성질에 대한 설명으로 옳은 것은? (단, 경계면에는 진전하가 없다고 한다.)",
    options: [
      "전속밀도의 접선성분과 전계의 법선성분이 같다.",
      "전속밀도의 법선성분과 전계의 접선성분이 같다.",
      "전속밀도와 전계의 법선성분이 모두 같다.",
      "전속밀도와 전계의 접선성분이 모두 같다."
    ],
    answer: 2,
    explanation: "유전체 경계 조건에서 전속밀도의 법선성분($D_{1n}=D_{2n}$)과 전계의 접선성분($E_{1t}=E_{2t}$)이 연속(같음)입니다.",
    image: null
  },
  {
    id: 9,
    question: "자기회로의 자기저항에 대한 설명으로 옳은 것은?",
    options: [
      "단면적에 비례한다.",
      "투자율에 비례한다.",
      "자로의 길이에 비례한다.",
      "권수비의 제곱에 비례한다."
    ],
    answer: 3,
    explanation: "자기저항 $R_{m} = \\frac{l}{\\mu S}$ 이므로 자로의 길이($l$)에 비례하고, 투자율($\\mu$)과 단면적($S$)에 반비례합니다.",
    image: null
  },
  {
    id: 10,
    question: "한 변의 길이가 $l[m]$ 인 정사각형 루프에 전류 $I[A]$ 가 흐를 때, 중심점에서의 자계의 세기 $[AT/m]$ 는?",
    options: [
      "$\\frac{\\sqrt{2}I}{\\pi l}$",
      "$\\frac{2\\sqrt{2}I}{\\pi l}$",
      "$\\frac{4\\sqrt{2}I}{\\pi l}$",
      "$\\frac{8\\sqrt{2}I}{\\pi l}$"
    ],
    answer: 2,
    explanation: "정다각형 중심 자계 공식 $H = \\frac{nI}{\\pi L} \\sin \\frac{\\pi}{n} \\tan \\frac{\\pi}{n}$ 을 정사각형($n=4$)에 적용하면 $H = \\frac{2\\sqrt{2}I}{\\pi l}$ 이 됩니다.",
    image: null
  },
  {
    id: 11,
    question: "전위 $V = x^{2} + y^{2} [V]$ 인 전계에서 점 $(1, 2) [m]$ 에 있는 전하밀도 $[C/m^{3}]$ 는?",
    options: [
      "$-2\\epsilon_{0}$",
      "$-4\\epsilon_{0}$",
      "$2\\epsilon_{0}$",
      "$4\\epsilon_{0}$"
    ],
    answer: 2,
    explanation: "가우스 법칙의 미분형 $\\nabla^{2}V = -\\frac{\\rho}{\\epsilon_{0}}$ 를 이용합니다. $\\frac{\\partial^{2}V}{\\partial x^{2}} = 2, \\frac{\\partial^{2}V}{\\partial y^{2}} = 2$ 이므로 $2+2 = -\\frac{\\rho}{\\epsilon_{0}} \\implies \\rho = -4\\epsilon_{0}$ 입니다.",
    image: null
  },
  {
    id: 12,
    question: "평행판 커패시터의 판 사이의 간격을 $1/2$ 로 줄이고, 판 면적을 2배로 늘리면 정전용량은 처음의 몇 배가 되는가?",
    options: [
      "1",
      "2",
      "4",
      "8"
    ],
    answer: 3,
    explanation: "$C = \\epsilon \\frac{S}{d}$ 에서 면적 $S$가 2배, 간격 $d$가 $1/2$배가 되면 정전용량은 4배가 됩니다.",
    image: null
  },
  {
    id: 13,
    question: "반지름 $a[m]$ 인 무한장 직선 도선에 전류 $I[A]$ 가 흐를 때, 도선 외부($r > a$)의 한 점에서의 자속밀도 $[Wb/m^{2}]$ 는?",
    options: [
      "$\\frac{\\mu_{0}I}{2\\pi r}$",
      "$\\frac{\\mu_{0}I}{2\\pi a}$",
      "$\\frac{\\mu_{0}I}{4\\pi r}$",
      "$\\frac{\\mu_{0}I r}{2\\pi a^{2}}$"
    ],
    answer: 1,
    explanation: "앙페르의 주회적분 법칙에 의해 $H = \\frac{I}{2\\pi r}$ 이고, $B = \\mu_{0}H = \\frac{\\mu_{0}I}{2\\pi r}$ 입니다.",
    image: null
  },
  {
    id: 14,
    question: "전위 함수 $V = 2x + 5y [V]$ 일 때, 전계의 세기 $[V/m]$ 는?",
    options: [
      "$2\\hat{x} + 5\\hat{y}$",
      "$-2\\hat{x} - 5\\hat{y}$",
      "$5\\hat{x} + 2\\hat{y}$",
      "$-5\\hat{x} - 2\\hat{y}$"
    ],
    answer: 2,
    explanation: "전계 $\\vec{E} = -\\nabla V = -(\\frac{\\partial V}{\\partial x}\\hat{x} + \\frac{\\partial V}{\\partial y}\\hat{y}) = -2\\hat{x} - 5\\hat{y}$ 입니다.",
    image: null
  },
  {
    id: 15,
    question: "투자율 $\\mu$, 자계의 세기 $H$ 인 매질 내의 에너지 밀도 $[J/m^{3}]$ 는?",
    options: [
      "$\\mu H$",
      "$\\mu H^{2}$",
      "$\\frac{1}{2}\\mu H$",
      "$\\frac{1}{2}\\mu H^{2}$"
    ],
    answer: 4,
    explanation: "자기 에너지 밀도 $w = \\frac{1}{2} \\mu H^{2}$ 입니다.",
    image: null
  },
  {
    id: 16,
    question: "선전하밀도가 $\\lambda [C/m]$ 인 무한 직선 전하로부터 $r [m]$ 떨어진 점의 전계의 세기는?",
    options: [
      "$\\frac{\\lambda}{2\\pi\\epsilon_{0}r}$",
      "$\\frac{\\lambda}{2\\pi\\epsilon_{0}r^{2}}$",
      "$\\frac{\\lambda}{4\\pi\\epsilon_{0}r}$",
      "$\\frac{\\lambda}{4\\pi\\epsilon_{0}r^{2}}$"
    ],
    answer: 1,
    explanation: "무한 직선 전계 공식은 $E = \\frac{\\lambda}{2\\pi\\epsilon_{0}r}$ 입니다.",
    image: null
  },
  {
    id: 17,
    question: "공기 중에서 자계의 세기가 $H [A/m]$ 인 곳의 자속밀도 $B [Wb/m^{2}]$ 는?",
    options: [
      "$H$",
      "$4\\pi \\times 10^{-7} H$",
      "$\\frac{H}{4\\pi \\times 10^{-7}}$",
      "$8.855 \\times 10^{-12} H$"
    ],
    answer: 2,
    explanation: "$B = \\mu_{0} H$ 이며 공기 중 투자율 $\\mu_{0} = 4\\pi \\times 10^{-7} [H/m]$ 입니다.",
    image: null
  },
  {
    id: 18,
    question: "그림과 같이 유전율이 각각 $\\epsilon_{1}, \\epsilon_{2}$ 인 두 유전체가 경계를 이루고 있을 때, 전계 $E_{1}$ 이 경계면과 $\\theta_{1}$ 의 각도로 입사하면 굴절각 $\\theta_{2}$ 와의 관계식은?",
    options: [
      "$\\epsilon_{1} \\tan \\theta_{1} = \\epsilon_{2} \\tan \\theta_{2}$",
      "$\\epsilon_{2} \\tan \\theta_{1} = \\epsilon_{1} \\tan \\theta_{2}$",
      "$\\epsilon_{1} \\sin \\theta_{1} = \\epsilon_{2} \\sin \\theta_{2}$",
      "$\\epsilon_{2} \\sin \\theta_{1} = \\epsilon_{1} \\sin \\theta_{2}$"
    ],
    answer: 2,
    explanation: "전계의 굴절 법칙 $\\frac{\\tan \\theta_{1}}{\\tan \\theta_{2}} = \\frac{\\epsilon_{1}}{\\epsilon_{2}}$ 에서 $\\epsilon_{2} \\tan \\theta_{1} = \\epsilon_{1} \\tan \\theta_{2}$ 가 성립합니다.",
    image: null
  },
  {
    id: 19,
    question: "두 점전하 사이에 작용하는 정전력의 크기는 거리의 몇 승에 반비례하는가?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 2,
    explanation: "쿨롱의 법칙 $F = k \\frac{Q_{1}Q_{2}}{r^{2}}$ 에 의해 거리 $r$의 2승에 반비례합니다.",
    image: null
  },
  {
    id: 20,
    question: "환상 솔레노이드 내부의 자계의 세기에 대한 설명으로 옳은 것은?",
    options: [
      "반지름에 비례한다.",
      "반지름에 반비례한다.",
      "권수의 제곱에 비례한다.",
      "전류의 제곱에 비례한다."
    ],
    answer: 2,
    explanation: "$H = \\frac{NI}{2\\pi r}$ 이므로 반지름 $r$에 반비례합니다.",
    image: null
  },
  {
    id: 21,
    question: "송전단 전압 $161[kV]$, 수전단 전압 $154[kV]$, 상차각 $30^{\\circ}$, 선로 리액턴스 $50[\\Omega]$ 일 때, 송전 전력 $[MW]$ 은 약 얼마인가?",
    options: [
      "124",
      "248",
      "496",
      "551"
    ],
    answer: 2,
    explanation: "$P = \\frac{V_{s}V_{r}}{X} \\sin \\delta = \\frac{161 \\times 154}{50} \\sin 30^{\\circ} = \\frac{24794}{50} \\times 0.5 \\approx 247.94 [MW]$ 입니다.",
    image: null
  },
  {
    id: 22,
    question: "조압 수조(Surge tank)의 설치 목적은?",
    options: [
      "수격 작용의 완화",
      "낙차의 증대",
      "유량의 조절",
      "수압관의 보호"
    ],
    answer: 1,
    explanation: "부하 차단 등으로 인한 급격한 수압 변화(수격 작용)를 흡수하여 수압관을 보호하기 위해 설치합니다.",
    image: null
  },
  {
    id: 23,
    question: "전력 계통에서 내부 이상전압의 크기가 가장 큰 경우는?",
    options: [
      "유도성 소전류 차단 시",
      "무부하 선로 충전전류 차단 시",
      "수차 발전기 부하 차단 시",
      "송전선로 단락 사고 발생 시"
    ],
    answer: 2,
    explanation: "무부하 선로 충전전류 차단 시 재점호가 발생하면 대단히 큰 이상전압이 발생할 수 있습니다.",
    image: null
  },
  {
    id: 24,
    question: "송전선로에서 복도체를 사용하는 가장 큰 목적은?",
    options: [
      "인덕턴스 증가",
      "코로나 발생 억제",
      "전선 중량 경감",
      "정전용량 감소"
    ],
    answer: 2,
    explanation: "복도체(다도체)를 사용하면 등가 반지름이 커져 전선 표면의 전위경도가 낮아지므로 코로나 임계 전압이 높아져 코로나 발생을 억제합니다.",
    image: null
  },
  {
    id: 25,
    question: "단절연 변압기를 사용할 수 있는 접지 방식은?",
    options: [
      "비접지 방식",
      "직접접지 방식",
      "소호리액터 접지 방식",
      "저항접지 방식"
    ],
    answer: 2,
    explanation: "직접접지 방식은 지락 시 건전상의 전위 상승이 거의 없으므로 중성점으로 갈수록 절연 강도를 낮추는 단절연이 가능합니다.",
    image: null
  },
  {
    id: 26,
    question: "송전선로의 중성점 접지 방식 중 통신선에 대한 유도 장해가 가장 큰 방식은?",
    options: [
      "비접지 방식",
      "직접접지 방식",
      "소호리액터 접지 방식",
      "저항접지 방식"
    ],
    answer: 2,
    explanation: "직접접지 방식은 지락 사고 시 지락 전류가 매우 크기 때문에 인근 통신선에 대한 전자유도 장해가 가장 큽니다.",
    image: null
  },
  {
    id: 27,
    question: "피뢰기의 정격전압 정의로 가장 적절한 것은?",
    options: [
      "방전을 개시하는 최고 전압",
      "속류를 차단할 수 있는 최고의 교류 전압",
      "방전 중 전압 강하가 일어나는 전압",
      "이상전압이 내습할 때의 충격 전압"
    ],
    answer: 2,
    explanation: "피뢰기의 정격전압이란 상용 주파수의 규정된 전압 범위 내에서 속류를 확실하게 차단할 수 있는 최고의 교류 전압을 말합니다.",
    image: null
  },
  {
    id: 28,
    question: "배전 계통에서 전력용 콘덴서(SC)를 부하와 병렬로 연결하는 주된 목적은?",
    options: [
      "전압 강하 증대",
      "유효 전력 증가",
      "부하 역률 개선",
      "고조파 제거"
    ],
    answer: 3,
    explanation: "부하의 지상 무효 전력을 상쇄하여 역률을 개선하고 전력 손실을 줄이기 위해 사용합니다.",
    image: null
  },
  {
    id: 29,
    question: "3상 송전선로의 선간 단락 고장 시 흐르는 전류는?",
    options: [
      "영상 전류",
      "정상 전류와 역상 전류",
      "정상 전류만 흐름",
      "영상, 정상, 역상 전류 모두 흐름"
    ],
    answer: 2,
    explanation: "비접지 선간 단락 고장 시에는 대칭분 중 정상 전류와 역상 전류만 흐르고 영상 전류는 흐르지 않습니다.",
    image: null
  },
  {
    id: 30,
    question: "원자력 발전소에서 원자로의 냉각재가 갖추어야 할 조건이 아닌 것은?",
    options: [
      "열용량이 클 것",
      "중성자 흡수 단면적이 클 것",
      "열전도율이 클 것",
      "부식성이 적을 것"
    ],
    answer: 2,
    explanation: "냉각재는 중성자를 잘 흡수하지 않아야 하므로 중성자 흡수 단면적이 작아야 합니다.",
    image: null
  },
  {
    id: 31,
    question: "그림과 같은 4단자망의 4단자 정수 $A, B, C, D$ 중 $D$ 는? (단, 직렬 임피던스 $Z$, 병렬 어드미턴스 $Y$ 인 T형 회로)",
    options: [
      "$1 + YZ$",
      "$1 + \\frac{YZ}{2}$",
      "$Y$",
      "$Z(1 + \\frac{YZ}{4})$"
    ],
    answer: 2,
    explanation: "T형 회로의 4단자 정수에서 $A = 1 + \\frac{YZ}{2}, D = 1 + \\frac{YZ}{2}$ 입니다.",
    image: null
  },
  {
    id: 32,
    question: "가공 송전선로에서 전선의 이도(Dip)를 설계할 때 고려해야 할 요소가 아닌 것은?",
    options: [
      "전선의 자중",
      "풍압 하중",
      "전선의 허용 전류",
      "빙설 하중"
    ],
    answer: 3,
    explanation: "이도는 물리적 하중(자중, 풍압, 빙설)과 장력에 의해 결정되며, 허용 전류는 열적 한계와 관련이 있습니다.",
    image: null
  },
  {
    id: 33,
    question: "배전 계통의 전압 조정 방법으로 사용되지 않는 것은?",
    options: [
      "LDC(선로 전압 강하 보상기)",
      "동기 조상기",
      "주상 변압기 탭 조정",
      "직렬 콘덴서"
    ],
    answer: 2,
    explanation: "동기 조상기는 주로 송전 계통의 대규모 전압 및 무효 전력 조정에 사용되며, 배전 계통에서는 LDC, 탭 조정, 직렬 콘덴서 등이 주로 사용됩니다.",
    image: null
  },
  {
    id: 34,
    question: "송전선로의 하중 조건에서 전선의 자중을 $W_{g}$, 빙설 하중을 $W_{i}$, 풍압 하중을 $W_{w}$ 라고 할 때, 합성 하중 $W$ 의 식은?",
    options: [
      "$W = W_{g} + W_{i} + W_{w}$",
      "$W = \\sqrt{W_{g} + W_{i} + W_{w}}$",
      "$W = \\sqrt{(W_{g} + W_{i})^{2} + W_{w}^{2}}$",
      "$W = \\sqrt{W_{g}^{2} + W_{i}^{2} + W_{w}^{2}}$"
    ],
    answer: 3,
    explanation: "합성 하중은 수직 하중(자중+빙설)과 수평 하중(풍압)의 벡터 합으로 구합니다. 따라서 $W = \\sqrt{(W_{g} + W_{i})^{2} + W_{w}^{2}}$ 입니다.",
    image: null
  },
  {
    id: 35,
    question: "송전단 전압 $154[kV]$, 수전단 전압 $150[kV]$, 부하각 $30^{\\circ}$, 선로 리액턴스 $30[\\Omega]$ 일 때 송전전력 $[MW]$ 은 약 얼마인가?",
    options: [
      "385",
      "442",
      "770",
      "884"
    ],
    answer: 1,
    explanation: "송전전력 $P = \\frac{V_{s}V_{r}}{X}\\sin\\delta = \\frac{154 \\times 150}{30}\\sin 30^{\\circ} = \\frac{23100}{30} \\times 0.5 = 385 [MW]$ 입니다.",
    image: null
  },
  {
    id: 36,
    question: "단상 2선식 배전선로에서 전선 한 가닥의 저항을 $R[\\Omega]$, 리액턴스를 $X[\\Omega]$ 라 하고, 부하 전류 $I[A]$, 역률 $\\cos \\theta$ 일 때 전압 강하 $[V]$ 의 근사식은?",
    options: [
      "$I(R\\cos\\theta + X\\sin\\theta)$",
      "$2I(R\\cos\\theta + X\\sin\\theta)$",
      "$\\sqrt{3}I(R\\cos\\theta + X\\sin\\theta)$",
      "$3I(R\\cos\\theta + X\\sin\\theta)$"
    ],
    answer: 2,
    explanation: "단상 2선식의 전압 강하 $e = 2I(R\\cos\\theta + X\\sin\\theta)$ 입니다. (3상 3선식은 $\\sqrt{3}$ 적용)",
    image: null
  },
  {
    id: 37,
    question: "송전 계통의 안정도를 증대시키는 방법으로 틀린 것은?",
    options: [
      "계통의 리액턴스를 작게 한다.",
      "재폐로 방식을 채택한다.",
      "소호 리액터 접지 방식을 채택한다.",
      "전압 변동을 크게 한다."
    ],
    answer: 4,
    explanation: "안정도를 증대시키려면 전압 변동을 작게(속응 탈조 제어 등) 유지해야 합니다.",
    image: null
  },
  {
    id: 38,
    question: "배전 계통에서 전력용 콘덴서와 직렬로 연결하는 리액터의 주된 목적은?",
    options: [
      "제5고조파 제거",
      "전압 조정",
      "역률 개선",
      "단락 전류 제한"
    ],
    answer: 1,
    explanation: "직렬 리액터(SR)는 콘덴서 투입 시 발생하는 제5고조파를 제거하여 파형을 개선하는 목적으로 사용합니다.",
    image: null
  },
  {
    id: 39,
    question: "보일러에서 증기의 온도를 높이기 위해 사용하는 장치는?",
    options: [
      "절탄기",
      "공기 예열기",
      "과열기",
      "재열기"
    ],
    answer: 3,
    explanation: "보일러에서 발생한 포화 증기를 가열하여 온도가 높은 과열 증기로 만드는 장치는 과열기(Superheater)입니다.",
    image: null
  },
  {
    id: 40,
    question: "송전선로에서 코로나(Corona) 임계 전압이 높아지는 경우는?",
    options: [
      "전선의 반지름이 작아질 때",
      "기압이 낮아질 때",
      "온도가 높아질 때",
      "전선의 반지름이 커질 때"
    ],
    answer: 4,
    explanation: "코로나 임계 전압 $E_{0} = 24.3 m_{0} m_{1} \\delta d \\log_{10}\\frac{D}{r} [kV]$ 이므로 전선의 지름(반지름 $r$)이 커지면 임계 전압이 높아져 코로나가 억제됩니다.",
    image: null
  },
  {
    id: 41,
    question: "직류기에서 브러시의 위치를 중성축에서 회전 방향으로 이동시켰을 때 발생하는 현상은?",
    options: [
      "정류 개선",
      "전기자 반작용 증대",
      "주자속 증가",
      "속도 감소"
    ],
    answer: 1,
    explanation: "브러시를 기하학적 중성축에서 전기적 중성축(회전 방향)으로 이동시키면 리액턴스 전압을 상쇄하여 정류가 개선됩니다.",
    image: null
  },
  {
    id: 42,
    question: "변압기의 철손을 구하기 위해 실시하는 시험은?",
    options: [
      "단락 시험",
      "무부하 시험",
      "부하 시험",
      "절연 내력 시험"
    ],
    answer: 2,
    explanation: "무부하 시험(개로 시험)을 통해 여자 전류와 철손($P_{i}$)을 구할 수 있습니다.",
    image: null
  },
  {
    id: 43,
    question: "동기 발전기의 병렬 운전 조건에서 기전력의 무엇이 다를 때 유효 횡류(동기화 전류)가 흐르는가?",
    options: [
      "크기",
      "위상",
      "파형",
      "주파수"
    ],
    answer: 2,
    explanation: "기전력의 위상이 다를 때 두 발전기 사이에 유효 횡류가 흘러 위상을 일치시키려는 동기화력이 발생합니다.",
    image: null
  },
  {
    id: 44,
    question: "3상 유도 전동기에서 2차 저항을 2배로 하면 최대 토크는 어떻게 되는가?",
    options: [
      "2배가 된다.",
      "1/2배가 된다.",
      "변하지 않는다.",
      "4배가 된다."
    ],
    answer: 3,
    explanation: "비례 추이의 원리에 의해 2차 저항을 조절하면 최대 토크 발생 슬립은 변하지만, 최대 토크($T_{max}$)의 크기 자체는 변하지 않습니다.",
    image: null
  },
  {
    id: 45,
    question: "슬립 $s = 0.05$ 인 3상 유도 전동기의 효율[%]은 약 얼마인가? (단, 기계손은 무시한다.)",
    options: [
      "85",
      "90",
      "95",
      "100"
    ],
    answer: 3,
    explanation: "유도 전동기의 효율 $\\eta \\approx (1 - s) \\times 100 = (1 - 0.05) \\times 100 = 95[\\%]$ 입니다.",
    image: null
  },
  {
    id: 46,
    question: "직류 분권 전동기의 속도 제어 방법 중 광범위한 속도 제어가 가능하고 효율이 가장 좋은 방법은?",
    options: [
      "계자 제어",
      "전압 제어",
      "저항 제어",
      "직렬 제어"
    ],
    answer: 2,
    explanation: "전압 제어(워드 레오나드 방식 등)는 광범위한 속도 조절이 가능하며 저항 손실이 적어 효율적입니다.",
    image: null
  },
  {
    id: 47,
    question: "SCR(사이리스터)의 특징으로 틀린 것은?",
    options: [
      "단방향성 3단자 소자이다.",
      "게이트 전류로 도통 시점을 제어할 수 있다.",
      "한번 도통되면 게이트 신호를 제거해도 도통 상태를 유지한다.",
      "역저지 불능 소자이다."
    ],
    answer: 4,
    explanation: "SCR은 역방향 전압에 대해 저지 능력을 갖는 역저지형 소자입니다.",
    image: null
  },
  {
    id: 48,
    question: "변압기의 권수비 $a = 10$ 이고 2차 저항이 $0.1[\\Omega]$ 일 때, 이를 1차측으로 환산한 저항 $[\\Omega]$ 은?",
    options: [
      "1",
      "10",
      "100",
      "1000"
    ],
    answer: 2,
    explanation: "1차 환산 저항 $R_{1} = a^{2} R_{2} = 10^{2} \\times 0.1 = 10 [\\Omega]$ 입니다.",
    image: null
  },
  {
    id: 49,
    question: "동기 전동기의 $V$ 곡선(위상 특성 곡선)에서 계자 전류($I_{f}$)를 증가시킬 때 나타나는 현상은?",
    options: [
      "진상 역률이 된다.",
      "지상 역률이 된다.",
      "전기자 전류가 최소가 된다.",
      "속도가 증가한다."
    ],
    answer: 1,
    explanation: "과여자($I_{f}$ 증가) 시 콘덴서로 작용하여 진상 역률(앞선 역률)이 됩니다.",
    image: "https://example.com/images/2022-3-49.png"
  },
  {
    id: 50,
    question: "복권 발전기를 병렬 운전할 때 반드시 설치해야 하는 것은?",
    options: [
      "균압선",
      "직렬 리액터",
      "방전 코일",
      "흡입 팬"
    ],
    answer: 1,
    explanation: "직권 계자가 있는 복권 및 직권 발전기의 병렬 운전 시 운전 안정화를 위해 균압선(Equalizer bus)을 설치해야 합니다.",
    image: null
  },
  {
    id: 51,
    question: "유도 전동기의 기동 방법 중 $Y-\\Delta$ 기동 시 기동 전류는 전전압 기동 시의 몇 배인가?",
    options: [
      "$1/2$",
      "$1/3$",
      "$\\sqrt{3}$",
      "3"
    ],
    answer: 2,
    explanation: "$Y$ 결선 기동 시 전압이 $1/\\sqrt{3}$ 배가 되므로 기동 전류와 기동 토크는 각각 $1/3$ 배로 감소합니다.",
    image: null
  },
  {
    id: 52,
    question: "변압기에서 발생하는 손실 중 부하의 크기에 따라 변하는 손실은?",
    options: [
      "철손",
      "와류손",
      "동손",
      "히스테리시스손"
    ],
    answer: 3,
    explanation: "동손($P_{c} = I^{2}R$)은 전류(부하)의 제곱에 비례하여 변하는 가변손입니다. 철손은 고정손입니다.",
    image: null
  },
  {
    id: 53,
    question: "동기 발전기의 돌극형 회전자가 비돌극형에 비해 갖는 특징은?",
    options: [
      "공극이 일정하다.",
      "고속기에 적합하다.",
      "단락비가 크다.",
      "원통형이다."
    ],
    answer: 3,
    explanation: "돌극형(수차 발전기 등)은 저속기용이며 공극이 불일정하고 단락비가 큰 특징을 가집니다.",
    image: null
  },
  {
    id: 54,
    question: "전부하 슬립이 5[%]인 유도 전동기의 회전수가 $1140[rpm]$ 일 때, 이 전동기의 극수는? (단, 주파수는 $60[Hz]$ 이다.)",
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    answer: 3,
    explanation: "동기 속도 $N_{s} = \\frac{1140}{1-0.05} = 1200[rpm]$. $P = \\frac{120f}{N_{s}} = \\frac{120 \\times 60}{1200} = 6$ 극입니다.",
    image: null
  },
  {
    id: 55,
    question: "교류를 직류로 변환하는 장치에 해당하지 않는 것은?",
    options: [
      "컨버터",
      "정류기",
      "인버터",
      "회전 변류기"
    ],
    answer: 3,
    explanation: "인버터(Inverter)는 직류(DC)를 교류(AC)로 변환하는 장치입니다.",
    image: null
  },
  {
    id: 56,
    question: "동기기의 제동 권선(Damper winding)을 설치하는 목적은?",
    options: [
      "난조 방지",
      "효율 증대",
      "전압 조정",
      "역률 개선"
    ],
    answer: 1,
    explanation: "제동 권선은 회전자의 속도 변화를 억제하여 난조(Hunting)를 방지하고 기동 토크를 발생시킵니다.",
    image: null
  },
  {
    id: 57,
    question: "단상 변압기의 임피던스 전압이란?",
    options: [
      "정격 부하 시의 2차 단자 전압",
      "정격 전류가 흐를 때 변압기 내의 전압 강하",
      "무부하 시의 2차 단자 전압",
      "단락 사고 시의 고장 전압"
    ],
    answer: 2,
    explanation: "변압기 2차측을 단락하고 1차측에 정격 전류가 흐르도록 인가한 전압으로, 내부 임피던스에 의한 전압 강하와 같습니다.",
    image: null
  },
  {
    id: 58,
    question: "3상 유도 전동기의 속도 제어 중 2차 저항 제어법의 특징은?",
    options: [
      "구조가 간단하고 제어가 용이하다.",
      "효율이 매우 좋다.",
      "농형 유도 전동기에 주로 사용한다.",
      "연속적인 무단 변속이 가능하다."
    ],
    answer: 1,
    explanation: "2차 저항 제어는 권선형 유도 전동기에서 사용하며 구조가 간단하지만 저항에서 열 손실이 발생하는 단점이 있습니다.",
    image: null
  },
  {
    id: 59,
    question: "직류 발전기에서 전기자 반작용을 방지하기 위한 가장 유효한 방법은?",
    options: [
      "보극 설치",
      "보상 권선 설치",
      "탄소 브러시 사용",
      "강한 계자 사용"
    ],
    answer: 2,
    explanation: "보상 권선(Compensating winding)은 전기자 전류와 반대 방향의 전류를 흘려 전기자 반작용을 직접적으로 상쇄합니다.",
    image: null
  },
  {
    id: 60,
    question: "변압기의 델타-와이($\\Delta-Y$) 결선 특징으로 틀린 것은?",
    options: [
      "제3고조파 장해가 없다.",
      "송전 계통의 강압용으로 주로 사용한다.",
      "1차와 2차 사이에 $30^{\\circ}$ 의 위상차가 발생한다.",
      "중성점 접지가 가능하다."
    ],
    answer: 2,
    explanation: "$\\Delta-Y$ 결선은 전압을 높일 수 있어 주로 발전소의 승압용으로 사용됩니다. (강압용은 $Y-\\Delta$)",
    image: null
  },
  {
    id: 61,
    question: "전달 함수 $G(s) = \\frac{s+2}{s(s+1)}$ 인 시스템의 단위 계단 응답의 최종값은?",
    options: [
      "0",
      "1",
      "2",
      "$\\infty$"
    ],
    answer: 4,
    explanation: "최종값 정리 $\\lim_{s \\to 0} s G(s) \\frac{1}{s} = \\lim_{s \\to 0} \\frac{s+2}{s(s+1)} = \\infty$ 입니다. (1형 시스템이므로 발산)",
    image: null
  },
  {
    id: 62,
    question: "특성 방정식 $s^{3} + 3s^{2} + 2s + K = 0$ 이 안정하기 위한 $K$ 의 범위는?",
    options: [
      "$K < 6$",
      "$0 < K < 6$",
      "$K > 0$",
      "$K > 6$"
    ],
    answer: 2,
    explanation: "루스 판별법에 의해 $s^{1}$ 행 계수 $\\frac{3 \\times 2 - K}{3} > 0 \\implies K < 6$. 따라서 $0 < K < 6$ 입니다.",
    image: null
  },
  {
    id: 63,
    question: "논리식 $A\\overline{B} + AB$ 를 간소화하면?",
    options: [
      "$A$",
      "$B$",
      "$\\overline{A}$",
      "$\\overline{B}$"
    ],
    answer: 1,
    explanation: "$A(\\overline{B} + B) = A \\cdot 1 = A$ 입니다.",
    image: null
  },
  {
    id: 64,
    question: "제어 시스템에서 오프셋(Offset, 잔류 편차)을 제거하는 제어는?",
    options: [
      "비례 제어",
      "적분 제어",
      "미분 제어",
      "온-오프 제어"
    ],
    answer: 2,
    explanation: "적분 제어(I 제어)는 정상 상태 오차인 오프셋을 제거하는 데 사용됩니다.",
    image: null
  },
  {
    id: 65,
    question: "2차 시스템의 감쇠비 $\\zeta = 1$ 인 경우의 응답 상태는?",
    options: [
      "무제동",
      "부족 제동",
      "임계 제동",
      "과제동"
    ],
    answer: 3,
    explanation: "$\\zeta=1$ 이면 임계 제동(Critical damping), $\\zeta<1$ 이면 부족 제동, $\\zeta>1$ 이면 과제동입니다.",
    image: null
  },
  {
    id: 66,
    question: "상태 공간 표현식 $\\dot{x} = Ax + Bu$ 에서 $A$ 행렬이 시스템의 무엇을 결정하는가?",
    options: [
      "입력 특성",
      "고유 특성(안정도)",
      "출력 특성",
      "제어 가능성"
    ],
    answer: 2,
    explanation: "시스템 행렬 $A$ 의 고유값(Eigenvalues)이 시스템의 안정도와 과도 응답 특성을 결정합니다.",
    image: null
  },
  {
    id: 67,
    question: "제어요소의 표준 형식 중 적분요소의 전달함수는? (단, $K$는 상수이다.)",
    options: [
      "$Ks$",
      "$\\frac{K}{s}$",
      "$K$",
      "$\\frac{K}{Ts+1}$"
    ],
    answer: 2,
    explanation: "적분 요소의 전달함수는 $\\frac{K}{s}$로 표현되며, 입력의 적분값에 비례하는 출력을 냅니다.",
    image: null
  },
  {
    id: 68,
    question: "그림의 논리회로와 등가인 논리식은? (입력 $A, B$가 NAND로, $C, D$가 NAND로 연결된 후 최종 NAND 게이트를 통과하는 구조)",
    options: [
      "$Y = A \\cdot B \\cdot C \\cdot D$",
      "$Y = A \\cdot B + C \\cdot D$",
      "$Y = \\overline{A \\cdot B} + \\overline{C \\cdot D}$",
      "$Y = (\\overline{A} + \\overline{B}) \\cdot (\\overline{C} + \\overline{D})$"
    ],
    answer: 2,
    explanation: "드모르간의 법칙에 의해 $Y = \\overline{\\overline{AB} \\cdot \\overline{CD}} = \\overline{\\overline{AB}} + \\overline{\\overline{CD}} = AB + CD$ 가 됩니다.",
    image: null
  },
  {
    id: 69,
    question: "상태방정식 $\\dot{x} = \\begin{bmatrix} 0 & 1 \\\\ -2 & -3 \\end{bmatrix}x + \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}u$ 로 표현되는 시스템의 특성방정식의 근은?",
    options: [
      "1, -3",
      "-1, -2",
      "-2, -3",
      "-1, -3"
    ],
    answer: 2,
    explanation: "$|sI - A| = \\begin{vmatrix} s & -1 \\\\ 2 & s+3 \\end{vmatrix} = s(s+3) + 2 = s^{2} + 3s + 2 = (s+1)(s+2) = 0$. 따라서 근은 -1, -2입니다.",
    image: null
  },
  {
    id: 70,
    question: "단위 궤환 제어시스템의 개루프 전달함수가 $G(s) = \\frac{10}{s(s+1)}$ 일 때, 단위 계단 입력에 대한 정상상태 오차는?",
    options: [
      "0",
      "0.1",
      "1",
      "10"
    ],
    answer: 1,
    explanation: "1형 시스템($s^{1}$ 포함)이므로 단위 계단 입력에 대한 위치 편차 상수는 무한대이며, 정상상태 오차는 0이 됩니다.",
    image: null
  },
  {
    id: 71,
    question: "평형 3상 부하에 선간전압 $200[V]$ 인가 시 선전류 $10[A]$, 부하의 역률이 0.8일 때 유효전력 $[W]$ 은?",
    options: [
      "1600",
      "$1600\\sqrt{3}$",
      "2000",
      "$2000\\sqrt{3}$"
    ],
    answer: 2,
    explanation: "$P = \\sqrt{3}VI\\cos\\theta = \\sqrt{3} \\times 200 \\times 10 \\times 0.8 = 1600\\sqrt{3} [W]$ 입니다.",
    image: null
  },
  {
    id: 72,
    question: "무손실 전송선로의 특성 임피던스가 $50[\\Omega]$ 이고 단위 길이당 인덕턴스가 $2[\\mu H/m]$ 일 때, 단위 길이당 정전용량 $[pF/m]$ 은?",
    options: [
      "400",
      "800",
      "1200",
      "1600"
    ],
    answer: 2,
    explanation: "$Z_{0} = \\sqrt{\\frac{L}{C}} \\implies C = \\frac{L}{Z_{0}^{2}} = \\frac{2 \\times 10^{-6}}{50^{2}} = 800 \\times 10^{-12} [F/m] = 800 [pF/m]$ 입니다.",
    image: null
  },
  {
    id: 73,
    question: "불평형 3상 전류 $I_{a}=10+j2, I_{b}=-5-j4, I_{c}=-3+j5 [A]$ 일 때 영상분 전류 $[A]$ 는?",
    options: [
      "$0.67 + j$",
      "$2 + j3$",
      "$2/3 + j$",
      "$3 + j2$"
    ],
    answer: 3,
    explanation: "$I_{0} = \\frac{1}{3}(I_{a}+I_{b}+I_{c}) = \\frac{1}{3}(10-5-3 + j(2-4+5)) = \\frac{1}{3}(2+j3) = 2/3 + j$ 입니다.",
    image: null
  },
  {
    id: 74,
    question: "전원 임피던스가 $Z_{s} = R + jX$ 일 때 부하로 최대 전력을 전달하기 위한 부하 임피던스 $Z_{L}$ 의 조건은?",
    options: [
      "$R + jX$",
      "$R - jX$",
      "$R$",
      "$jX$"
    ],
    answer: 2,
    explanation: "최대 전력 전달을 위해서는 부하 임피던스가 전원 임피던스의 공액 복소수($Z_{L} = Z_{s}^{*}$)여야 합니다.",
    image: null
  },
  {
    id: 75,
    question: "그림과 같은 삼각 파형($t=0$에서 $T$까지 상승)의 라플라스 변환은?",
    options: [
      "$\\frac{1}{Ts^{2}}(1 - e^{-Ts})$",
      "$\\frac{1}{Ts^{2}}(1 + e^{-Ts})$",
      "$\\frac{1}{s^{2}}(1 - e^{-Ts})$",
      "$\\frac{1}{Ts^{2}}(e^{-Ts} - 1)$"
    ],
    answer: 1,
    explanation: "$f(t) = \\frac{1}{T}t [u(t) - u(t-T)]$ 를 변환하면 $\\frac{1}{Ts^{2}} - \\frac{1}{Ts^{2}}e^{-Ts}$ 가 도출됩니다.",
    image: null
  },
  {
    id: 76,
    question: "전류 $i(t) = 4t^{3} + 2t [A]$ 가 흐를 때, $t=0$ 에서 $t=2$ 초까지 통과한 총 전기량 $[C]$ 은?",
    options: [
      "10",
      "20",
      "30",
      "40"
    ],
    answer: 2,
    explanation: "$Q = \\int_{0}^{2} (4t^{3} + 2t) dt = [t^{4} + t^{2}]_{0}^{2} = 16 + 4 = 20 [C]$ 입니다.",
    image: null
  },
  {
    id: 77,
    question: "전압 $v(t) = 100\\sin\\omega t + 50\\sin(3\\omega t + 30^{\\circ}) [V]$ 의 실효값 $[V]$ 은 약 얼마인가?",
    options: [
      "79",
      "85",
      "112",
      "150"
    ],
    answer: 1,
    explanation: "$V_{rms} = \\sqrt{(\\frac{100}{\\sqrt{2}})^{2} + (\\frac{50}{\\sqrt{2}})^{2}} = \\sqrt{5000 + 1250} = \\sqrt{6250} \\approx 79 [V]$ 입니다.",
    image: null
  },
  {
    id: 78,
    question: "시정수가 $0.1[s]$ 인 $RL$ 직렬회로에 저항 $R=10[\\Omega]$ 일 때 인덕턴스 $L [H]$ 은?",
    options: [
      "0.1",
      "1",
      "10",
      "100"
    ],
    answer: 2,
    explanation: "시정수 $\\tau = \\frac{L}{R} \\implies L = \\tau R = 0.1 \\times 10 = 1 [H]$ 입니다.",
    image: null
  },
  {
    id: 79,
    question: "4단자 정수 $A, B, C, D$ 사이의 관계식으로 옳은 것은?",
    options: [
      "$AD - BC = 0$",
      "$AD - BC = 1$",
      "$AB - CD = 1$",
      "$AC - BD = 1$"
    ],
    answer: 2,
    explanation: "가역 회로망(일반적인 수동 회로)에서 4단자 정수는 항상 $AD - BC = 1$ 을 만족합니다.",
    image: null
  },
  {
    id: 80,
    question: "저항 $R$ 3개를 $Y$ 결선으로 연결했을 때의 임피던스를 $\\Delta$ 결선으로 환산하면 각 변의 저항은?",
    options: [
      "$R/3$",
      "$R$",
      "$\\sqrt{3}R$",
      "$3R$"
    ],
    answer: 4,
    explanation: "평형 부하에서 $Y \\to \\Delta$ 변환 시 임피던스는 3배가 됩니다 ($Z_{\\Delta} = 3Z_{Y}$).",
    image: null
  },
  {
    id: 81,
    question: "옥상전선로의 시설 기준으로 틀린 것은?",
    options: [
      "전선은 절연전선을 사용할 것",
      "전선은 지름 $2.6[mm]$ 이상의 경동선일 것",
      "전선과 옥상 돌출물 사이의 이격거리는 $0.5[m]$ 이상일 것",
      "전선은 식물에 접촉하지 않도록 시설할 것"
    ],
    answer: 3,
    explanation: "저압 옥상전선로와 조영재 사이의 이격거리는 최소 $2[m]$ 이상(특례 시 $1m$)이어야 합니다.",
    image: null
  },
  {
    id: 82,
    question: "아크용접장치의 시설 기준으로 틀린 것은?",
    options: [
      "용접변압기는 절연변압기일 것",
      "용접회로의 제어장치는 용접변압기 2차측에 시설할 것",
      "전로의 대지전압은 $300[V]$ 이하일 것",
      "용접기 외함은 접지할 것"
    ],
    answer: 2,
    explanation: "용접변압기의 1차측 전로에는 개폐기를 시설해야 합니다.",
    image: null
  },
  {
    id: 83,
    question: "25[kV] 이하 특고압 가공전선로가 상호 교차할 경우, 양쪽 모두 나전선인 경우의 이격거리는 몇 $[m]$ 이상인가?",
    options: [
      "1.0",
      "1.2",
      "1.5",
      "2.0"
    ],
    answer: 3,
    explanation: "25kV 이하(KEC 기준 15kV 초과 35kV 이하) 나전선 상호 간 이격거리는 $1.5[m]$ 입니다.",
    image: null
  },
  {
    id: 84,
    question: "최대사용전압이 $22,900[V]$ 인 비접지식 특고압 전로의 절연내력 시험전압 $[V]$ 은?",
    options: [
      "22,900",
      "28,625",
      "34,350",
      "45,800"
    ],
    answer: 2,
    explanation: "7kV 초과 비접지식 전로의 시험전압은 최대사용전압의 1.25배입니다. $22,900 \\times 1.25 = 28,625 [V]$ 입니다.",
    image: null
  },
  {
    id: 85,
    question: "가공전선로의 지지물로 사용하는 철탑 중 전선로의 직선 부분(3도 이하의 수평 각도)에 사용되는 것은?",
    options: [
      "직선형",
      "각도형",
      "인류형",
      "내장형"
    ],
    answer: 1,
    explanation: "전선로의 직선 부분 또는 수평 각도 3도 이하인 곳에는 직선형 철탑을 사용합니다.",
    image: null
  },
  {
    id: 86,
    question: "아파트 현관의 타임스위치는 몇 분 이내에 소등되어야 하는가?",
    options: [
      "1분",
      "3분",
      "5분",
      "10분"
    ],
    answer: 2,
    explanation: "주택(아파트 등) 현관의 타임스위치는 3분 이내, 숙박업소는 1분 이내에 소등되어야 합니다.",
    image: null
  },
  {
    id: 87,
    question: "교류 전기철도에서 순시조건($t \\le 0.5$초) 시 레일 전위의 최대 허용 접촉전압 $[V]$ 은?",
    options: [
      "60",
      "65",
      "440",
      "670"
    ],
    answer: 4,
    explanation: "KEC 규정에 따라 순시조건($t \\le 0.5$s)에서 레일 전위 허용 한도는 $670[V]$ 입니다.",
    image: null
  },
  {
    id: 88,
    question: "전기저장장치(ESS)의 이차전지에 자동 차단 장치를 시설해야 하는 경우로 틀린 것은?",
    options: [
      "과전압 또는 과전류 발생 시",
      "제어장치에 이상이 발생한 경우",
      "이차전지 내부 온도가 급격히 상승한 경우",
      "충전 상태(SOC)가 50% 이하인 경우"
    ],
    answer: 4,
    explanation: "과전압, 과전류, 제어장치 이상, 온도 급상승 시에는 차단해야 하나 SOC 50%는 정상 운전 범위입니다.",
    image: null
  },
  {
    id: 89,
    question: "전력용 커패시터의 용량이 몇 $[kVA]$ 이상일 때 내부 고장 시 자동 차단 장치를 해야 하는가?",
    options: [
      "500",
      "1,000",
      "5,000",
      "10,000"
    ],
    answer: 4,
    explanation: "전력용 커패시터 뱅크 용량이 $10,000[kVA]$ 이상인 경우 내부 고장 시 자동으로 차단하는 장치를 시설해야 합니다.",
    image: null
  },
  {
    id: 90,
    question: "가공전선로 지지물에 시설하는 지선의 시설 기준으로 틀린 것은?",
    options: [
      "지선의 안전율은 2.5 이상일 것",
      "소선은 3가닥 이상의 연선일 것",
      "소선의 지름은 $2.0[mm]$ 이상의 금속선일 것",
      "도로 횡단 시 높이는 $5[m]$ 이상일 것"
    ],
    answer: 3,
    explanation: "지선에 사용되는 소선의 지름은 $2.6[mm]$ 이상의 금속선이어야 합니다.",
    image: null
  },
  {
    id: 91,
    question: "저압 가공전선로의 지지점 간 거리는 몇 $[m]$ 이하이어야 하는가? (단, 목주 또는 A종 지지물 사용 시)",
    options: [
      "150",
      "250",
      "300",
      "500"
    ],
    answer: 1,
    explanation: "A종 지지물(목주 포함)의 표준 경간은 $150[m]$ 이하입니다.",
    image: null
  },
  {
    id: 92,
    question: "특고압 가공전선로에서 발생하는 전계는 지표상 $1[m]$ 에서 몇 $[kV/m]$ 이하가 되도록 시설해야 하는가?",
    options: [
      "2.5",
      "3.5",
      "4.5",
      "5.5"
    ],
    answer: 2,
    explanation: "인체에 대한 전자계 영향을 고려하여 지표상 전계의 세기는 $3.5[kV/m]$ 이하로 유지해야 합니다.",
    image: null
  },
  {
    id: 93,
    question: "특고압 가공전선로의 지지물 양쪽 경간의 차가 큰 곳에 사용하는 철탑은?",
    options: [
      "직선형",
      "각도형",
      "인류형",
      "내장형"
    ],
    answer: 4,
    explanation: "경간 차가 큰 곳(불평형 장력이 큰 곳)에는 내장형(Strain type) 철탑을 사용하여 보강합니다.",
    image: null
  },
  {
    id: 94,
    question: "옥외 배선 시 목조 조영물에 시설할 수 있는 공사 방법은?",
    options: [
      "금속관 공사",
      "애자 공사",
      "버스덕트 공사",
      "금속제 가요전선관 공사"
    ],
    answer: 2,
    explanation: "목조 조영물에는 화재 위험으로 인해 금속관이나 덕트 사용이 제한되며, 애자 공사나 합성수지관 공사가 가능합니다.",
    image: null
  },
  {
    id: 95,
    question: "시가지에 시설하는 $154[kV]$ 가공전선로의 전선 높이는 지표상 몇 $[m]$ 이상인가?",
    options: [
      "10.0",
      "11.44",
      "12.0",
      "12.56"
    ],
    answer: 2,
    explanation: "$160kV$ 이하 시가지 전선 높이는 $10 + (15.4-3.5) \\times 0.12 = 11.44[m]$ 입니다.",
    image: null
  },
  {
    id: 96,
    question: "전기철도의 귀선로 시설에 대한 설명으로 틀린 것은?",
    options: [
      "귀선은 비절연 보호도체와 접속할 것",
      "귀선은 누설전류에 의한 전력 손실이 적을 것",
      "귀선로의 전선은 나전선을 사용할 것",
      "레일의 이음매는 본딩으로 확실하게 접속할 것"
    ],
    answer: 3,
    explanation: "전기철도 귀선은 안전을 위해 절연전선을 사용하거나 레일을 활용해야 합니다.",
    image: null
  },
  {
    id: 97,
    question: "구리 소재 접지도체의 최소 단면적은 몇 $[mm^{2}]$ 이상인가? (단, 피뢰시스템이 접속되지 않은 경우)",
    options: [
      "0.75",
      "2.5",
      "6",
      "16"
    ],
    answer: 3,
    explanation: "KEC 규정에 따라 피뢰시스템 미접속 시 구리 접지도체의 최소 단면적은 $6[mm^{2}]$ 입니다.",
    image: null
  },
  {
    id: 98,
    question: "$345[kV]$ 변전소 울타리 높이와 충전부까지 거리의 합계는 몇 $[m]$ 이상인가?",
    options: [
      "8.16",
      "8.28",
      "8.40",
      "9.72"
    ],
    answer: 2,
    explanation: "$160kV$ 초과 시 $6 + (34.5-16) \\times 0.12 = 8.22$ 이나 단수 적용 시 $8.28[m]$ 가 도출됩니다.",
    image: null
  },
  {
    id: 99,
    question: "가공 통신선을 도로 횡단하여 시설할 경우 노면상 높이는 몇 $[m]$ 이상인가?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    answer: 3,
    explanation: "가공 통신선이 도로를 횡단하는 경우 노면상 높이는 최소 $5[m]$ 이상이어야 합니다.",
    image: null
  },
  {
    id: 100,
    question: "케이블 트레이 공사에 사용할 수 없는 케이블은?",
    options: [
      "연피 케이블",
      "난연성 케이블",
      "캡타이어 케이블",
      "알루미늄피 케이블"
    ],
    answer: 3,
    explanation: "케이블 트레이에는 연피, 알루미늄피, 난연성 케이블을 사용하며, 이동용인 캡타이어 케이블은 사용할 수 없습니다.",
    image: null
  }
];

export default questions;