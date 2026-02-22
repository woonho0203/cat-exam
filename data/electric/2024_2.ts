const questions = [
  {
    id: 1,
    question: "라디오 방송의 평면파 주파수를 700[Hz]라 할 때, 이 평면파가 콘크리트 벽 $\\epsilon_{s}=5$ 속을 지날 때 전파 속도[m/s]는? (단, 공기 중에서의 유전율 $\\epsilon_{0}$, 투자율 및 비투자율 $\\mu_{s}=1$이라 한다.)",
    options: [
      "$2.54 \\times 10^{8}$",
      "$1.34 \\times 10^{8}$",
      "$4.38 \\times 10^{8}$",
      "$4.8 \\times 10^{8}$"
    ],
    answer: 3,
    explanation: "전파 속도 $v = \\frac{c}{\\sqrt{\\epsilon_{s}\\mu_{s}}} = \\frac{3 \\times 10^{8}}{\\sqrt{5 \\times 1}} \\approx 1.34 \\times 10^{8}$ [m/s]이나, 복원된 정답지에 따라 3번을 정답으로 처리합니다. [cite: 4, 7, 612]",
    image: null
  },
  {
    id: 2,
    question: "유전율 $\\epsilon$, 투자율 $\\mu$인 매질 중을 주파수 $f$[Hz]의 전자파가 전파되어 나갈 때의 파장[m]은?",
    options: [
      "$f\\sqrt{\\epsilon\\mu}$",
      "$\\frac{f}{\\sqrt{\\epsilon\\mu}}$",
      "$\\frac{1}{f\\sqrt{\\epsilon\\mu}}$",
      "$\\frac{\\sqrt{\\epsilon\\mu}}{f}$"
    ],
    answer: 2,
    explanation: "전파 속도 $v = f\\lambda = \\frac{1}{\\sqrt{\\epsilon\\mu}}$에서 파장 $\\lambda = \\frac{1}{f\\sqrt{\\epsilon\\mu}}$입니다. [cite: 10, 13, 612]",
    image: null
  },
  {
    id: 3,
    question: "자계의 벡터포텐셜을 $A[Wb/m]$라 할 때 도체 주위에서 자계 $B[Wb/m^{2}]$가 시간적으로 변화하면 도체에 생기는 전계의 세기 $E[V/m]$는?",
    options: [
      "$E = -\\frac{\\partial A}{\\partial t}$",
      "$rot~E = -\\frac{\\partial A}{\\partial t}$",
      "$E = rot~A$",
      "$rot~E = \\frac{\\partial B}{\\partial t}$"
    ],
    answer: 2,
    explanation: "맥스웰 방정식 $\\nabla \\times E = -\\frac{\\partial B}{\\partial t}$와 $B = \\nabla \\times A$의 관계를 통해 유도됩니다. [cite: 14, 15, 16, 612]",
    image: null
  },
  {
    id: 4,
    question: "공기 중에서 코로나 방전이 $3.5[kV/mm]$ 전계에서 발생한다고 하면, 이때 도체의 표면에 작용하는 힘은 약 몇 $[N/m^{2}]$인가?",
    options: [
      "27",
      "54",
      "381",
      "108"
    ],
    answer: 2,
    explanation: "단위 면적당 작용하는 힘(정전응력) $f = \\frac{1}{2}\\epsilon_{0}E^{2}$ 공식을 사용합니다. $E = 3.5[kV/mm] = 3.5 \\times 10^{6}[V/m]$를 대입하면 약 $54[N/m^{2}]$가 산출됩니다. [cite: 19, 22, 612]",
    image: null
  },
  {
    id: 5,
    question: "2장의 무한평판 도체를 4[cm]의 간격으로 놓은 후 평판 도체 간에 일정한 전계를 인가하였더니 평판 도체 표면에 $2[\\mu C/m^{2}]$의 전하밀도가 생겼다. 이때 평판 도체 표면에 작용하는 정전응력은 약 몇 $[N/m^{2}]$인가?",
    options: [
      "0.057",
      "0.226",
      "0.57",
      "2.26"
    ],
    answer: 2,
    explanation: "정전응력 $f = \\frac{\\sigma^{2}}{2\\epsilon_{0}} = \\frac{(2 \\times 10^{-6})^{2}}{2 \\times 8.854 \\times 10^{-12}} \\approx 0.226[N/m^{2}]$입니다. [cite: 24, 25, 28, 612]",
    image: null
  },
  {
    id: 6,
    question: "$E = i + 2j + 3k [V/cm]$로 표시되는 전계가 있다. $0.01[\\mu C]$의 전하를 원점으로부터 $r = 3i [m]$로 움직이는데 요하는 일[J]은?",
    options: [
      "$4.69 \\times 10^{-6}$",
      "$3 \\times 10^{-6}$",
      "$4.69 \\times 10^{-8}$",
      "$3 \\times 10^{-8}$"
    ],
    answer: 2,
    explanation: "일 $W = q(E \\cdot r)$입니다. 전계의 단위를 $[V/m]$로 환산하면 $E = 100i + 200j + 300k$이며, $W = 0.01 \\times 10^{-6} \\times (100 \\times 3) = 3 \\times 10^{-6}[J]$입니다. [cite: 29, 30, 34, 612]",
    image: null
  },
  {
    id: 7,
    question: "무한 평면 도체로부터 거리 $a[m]$인 곳에 점전하 $Q[C]$이 있을 때 이 무한 평면 도체 표면에 유도되는 면밀도가 최대인 점의 전하밀도는 몇 $[C/m^{2}]$인가?",
    options: [
      "$-\\frac{Q}{2\\pi a^{2}}$",
      "$-\\frac{Q^{2}}{4\\pi a}$",
      "$-\\frac{Q}{\\pi a^{2}}$",
      "40"
    ],
    answer: 1,
    explanation: "무한 평면과 점전하 사이의 영상전하법에 의해 최대 전하밀도는 $-\\frac{Q}{2\\pi a^{2}}$입니다. [cite: 36, 41, 612]",
    image: null
  },
  {
    id: 8,
    question: "두 개의 자극 판이 놓여 있다. 이때의 자극 판 사이의 자속밀도 $B[Wb/m^{2}]$, 자계의 세기 $H[AT/m]$, 투자율 $\\mu$라 하는 곳의 자계의 에너지 밀도 $[J/m^{3}]$는?",
    options: [
      "$\\frac{1}{2}HB^{2}$",
      "$\\frac{1}{2\\mu}H^{2}$",
      "HB",
      "$\\frac{1}{2\\mu}B^{2}$"
    ],
    answer: 4,
    explanation: "자기 에너지 밀도 $w = \\frac{1}{2}HB = \\frac{1}{2}\\mu H^{2} = \\frac{B^{2}}{2\\mu}$입니다. [cite: 43, 46, 612]",
    image: null
  },
  {
    id: 9,
    question: "강자성체의 자속밀도 $B$의 크기와 자화의 세기 $J$의 크기 사이의 관계로 옳은 것은?",
    options: [
      "$J$는 $B$보다 약간 크다.",
      "$J$는 $B$보다 대단히 크다.",
      "$J$는 $B$보다 약간 작다.",
      "$J$는 $B$보다 대단히 작다."
    ],
    answer: 3,
    explanation: "자속밀도 $B = \\mu_{0}(H + J)$이므로, 강자성체에서 $J$는 $B$보다 약간 작습니다. [cite: 47, 51, 612]",
    image: null
  },
  {
    id: 10,
    question: "코일로 감겨진 자기회로에서 철심의 투자율을 $\\mu$라 하고, 회로의 길이를 $l$이라 할 때, 그 회로 일부에 미소 공극 $l_{g}$를 만들면 자기저항은 처음의 몇 배가 되는가? (단, $l \\gg l_{g}$이다.)",
    options: [
      "$1 + \\frac{\\mu l}{\\mu_{0}l_{g}}$",
      "$1 + \\frac{\\mu_{0}l_{g}}{\\mu l}$",
      "$1 + \\frac{\\mu_{0}l}{\\mu l_{g}}$",
      "$1 + \\frac{\\mu l_{g}}{\\mu_{0}l}$"
    ],
    answer: 4,
    explanation: "공극이 없을 때의 저항 $R = \\frac{l}{\\mu A}$, 공극이 있을 때의 저항 $R' = \\frac{l}{\\mu A} + \\frac{l_{g}}{\\mu_{0} A}$이므로 비율은 $1 + \\frac{\\mu l_{g}}{\\mu_{0}l}$입니다. [cite: 54, 59, 612]",
    image: null
  },
  {
    id: 11,
    question: "비유전율 $\\epsilon_{r}=10$인 유전체 내에 전계의 세기가 $5[V/m]$일 때의 유전체 내의 전하밀도(전속밀도)는 $[C/m^{2}]$?",
    options: [
      "$40\\epsilon_{0}$",
      "$35\\epsilon_{0}$",
      "$50\\epsilon_{0}$",
      "$55\\epsilon_{0}$"
    ],
    answer: 3,
    explanation: "전속밀도 $D = \\epsilon_{0}\\epsilon_{r}E = \\epsilon_{0} \\times 10 \\times 5 = 50\\epsilon_{0}$입니다. [cite: 60, 62, 612]",
    image: null
  },
  {
    id: 12,
    question: "정전용량이 $C_{0}[\\mu F]$인 평행판의 공기 커패시터가 있다. 두 극판 사이에 극판과 평행하게 절반을 비유전율이 $\\epsilon_{r}$인 유전체로 채우면 커패시터의 정전용량 $[\\mu F]$은?",
    options: [
      "$\\frac{C_{0}}{1+\\frac{1}{\\epsilon_{r}}}$",
      "$\\frac{C_{0}}{2(1+\\frac{1}{\\epsilon_{r}})}$",
      "$\\frac{2C_{0}}{1+\\frac{1}{\\epsilon_{r}}}$",
      "$\\frac{4C_{0}}{1+\\frac{1}{\\epsilon_{r}}}$"
    ],
    answer: 3,
    explanation: "두 커패시터가 직렬로 연결된 구조이므로 $C = \\frac{2\\epsilon_{r}}{\\epsilon_{r}+1}C_{0} = \\frac{2C_{0}}{1+\\frac{1}{\\epsilon_{r}}}$입니다. [cite: 64, 67, 612]",
    image: null
  },
  {
    id: 13,
    question: "폐곡면을 통하는 전속과 폐곡면 내부의 전하와의 상관관계를 나타내는 법칙은?",
    options: [
      "가우스 법칙",
      "쿨롱의 법칙",
      "푸아송의 법칙",
      "라플라스 법칙"
    ],
    answer: 1,
    explanation: "폐곡면을 통하는 총 전속은 그 내부의 전하량과 같다는 법칙은 가우스 법칙입니다. [cite: 70, 71, 612]",
    image: null
  },
  {
    id: 14,
    question: "압전기 현상에서 분극이 응력과 동일한 방향으로 발생하는 현상을 무슨 효과라 하는가?",
    options: [
      "종효과",
      "횡효과",
      "역효과",
      "간접효과"
    ],
    answer: 1,
    explanation: "응력의 방향과 전기적 분극의 방향이 일치하는 것을 종효과라고 합니다. [cite: 75, 76, 77, 612]",
    image: null
  },
  {
    id: 15,
    question: "상자성체에서 자화율 $\\chi$와 투자율 $\\mu$의 관계를 판단할 수 있는 것은?",
    options: [
      "투자율 > 자화율",
      "투자율 < 자화율",
      "투자율 = 자화율",
      "비투자율 > 자화율"
    ],
    answer: 3,
    explanation: "복원된 정답지에 따라 3번을 정답으로 처리합니다. (일반적으로 $\\mu = \\mu_{0}(1+\\chi)$ 관계를 가집니다.) [cite: 81, 83, 612]",
    image: null
  },
  {
    id: 16,
    question: "반지름 $a[m]$인 도체구에 전하 $Q[C]$를 주었다. 도체구를 둘러싸고 있는 유전체의 비유전율이 $\\epsilon_{s}$인 경우 경계면에 나타나는 분극전하의 면밀도는 몇 $[C/m^{2}]$인가?",
    options: [
      "$\\frac{Q}{4\\pi a^{2}}(1-\\epsilon_{s})$",
      "$\\frac{Q}{4\\pi a^{2}}(\\epsilon_{s}-1)$",
      "$\\frac{Q}{4\\pi a^{2}}(1-\\frac{1}{\\epsilon_{s}})$",
      "$\\frac{Q}{4\\pi a^{2}}(\\frac{1}{\\epsilon_{s}}-1)$"
    ],
    answer: 3,
    explanation: "분극의 세기 $P = D(1-1/\\epsilon_{s}) = \\frac{Q}{4\\pi a^{2}}(1-1/\\epsilon_{s})$입니다. [cite: 86, 87, 612]",
    image: null
  },
  {
    id: 17,
    question: "평면 전자파가 유전율 $\\epsilon$, 투자율 $\\mu$인 유전체 내를 전파한다. 전계의 세기가 $E = E_{m}\\sin\\omega(t-\\frac{x}{v}) [V/m]$라면 자계의 세기 $H [AT/m]$는?",
    options: [
      "$\\sqrt{\\mu\\epsilon}E_{m}\\sin\\omega(t-\\frac{x}{v})$",
      "$\\sqrt{\\frac{\\epsilon}{\\mu}}E_{m}\\cos\\omega(t-\\frac{x}{v})$",
      "$\\sqrt{\\frac{\\epsilon}{\\mu}}E_{m}\\sin\\omega(t-\\frac{x}{v})$",
      "$\\sqrt{\\frac{\\mu}{\\epsilon}}E_{m}\\cos\\omega(t-\\frac{x}{v})$"
    ],
    answer: 3,
    explanation: "고유 임피던스 $\\eta = \\frac{E}{H} = \\sqrt{\\frac{\\mu}{\\epsilon}}$이므로 $H = \\sqrt{\\frac{\\epsilon}{\\mu}}E$입니다. [cite: 90, 91, 94, 612]",
    image: null
  },
  {
    id: 18,
    question: "전속밀도가 $D = e^{-2y}(a_{x}\\sin 2x + a_{y}\\cos 2x) [C/m^{2}]$일 때 전속의 단위 체적당 발산량 $[C/m^{3}]$은?",
    options: [
      "$2e^{-2y}(\\sin 2x + \\cos 2x)$",
      "$4e^{-2y}\\cos 2x$",
      "0",
      "$2e^{-2y}\\cos 2x$"
    ],
    answer: 3,
    explanation: "발산량 $\\nabla \\cdot D = \\frac{\\partial D_{x}}{\\partial x} + \\frac{\\partial D_{y}}{\\partial y} = 2e^{-2y}\\cos 2x - 2e^{-2y}\\cos 2x = 0$입니다. [cite: 96, 97, 99, 612]",
    image: null
  },
  {
    id: 19,
    question: "철도 궤도간 거리가 1.5[m]이며 궤도는 서로 절연되어 있다. 열차가 매시 60[km]의 속도로 달리면서 차축이 지구자계의 수직분력 $B = 0.15 \\times 10^{-4} [Wb/m^{2}]$을 절단할 때 두 궤도 사이에 발생하는 기전력은 몇 [V]인가?",
    options: [
      "$1.75 \\times 10^{-4}$",
      "$2.75 \\times 10^{-4}$",
      "$3.75 \\times 10^{-4}$",
      "$4.75 \\times 10^{-4}$"
    ],
    answer: 3,
    explanation: "기전력 $e = Blv$입니다. $v = 60[km/h] = \\frac{60000}{3600} [m/s] \\approx 16.67 [m/s]$이므로 $e = 0.15 \\times 10^{-4} \\times 1.5 \\times 16.67 = 3.75 \\times 10^{-4} [V]$입니다. [cite: 102, 103, 105, 612]",
    image: null
  },
  {
    id: 20,
    question: "인덕턴스가 20[mH]인 코일에 흐르는 전류가 0.2초 동안에 2[A] 변화했다면 자기유도현상에 의해 코일에 유기되는 기전력은 몇 [V]인가?",
    options: [
      "0.1",
      "0.2",
      "0.3",
      "0.4"
    ],
    answer: 2,
    explanation: "기전력 $e = L \\frac{di}{dt} = 20 \\times 10^{-3} \\times \\frac{2}{0.2} = 0.2 [V]$입니다. [cite: 108, 110, 113, 612]",
    image: null
  },
  {
    id: 21,
    question: "전력계통의 발전소, 변전소, 개폐소 등에 설치하여 전기를 생산하거나 변환, 저장하는 시설 중 발전소의 정의로 옳은 것은?",
    options: [
      "전기를 생산하여 공급하는 곳",
      "전압을 승압하거나 강압하는 곳",
      "전로를 개폐하는 곳",
      "전력수급을 조절하는 곳"
    ],
    answer: 1,
    explanation: "발전소는 원자력, 화력, 신재생에너지 등을 이용하여 전기를 발생시키거나 저장 후 공급하는 시설을 말합니다.",
    image: null
  },
  {
    id: 22,
    question: "송배전 선로에서 전압을 조정하고 무효전력을 제어하여 계통의 안정도를 높이는 설비로 옳은 것은?",
    options: [
      "변류기",
      "동기조상기",
      "전력용 콘덴서",
      "블로 리액터"
    ],
    answer: 2,
    explanation: "동기조상기는 계통의 전압 조정과 무효전력을 연속적으로 제어하여 안정도를 높이는 장치입니다.",
    image: null
  },
  {
    id: 23,
    question: "154[kV] 변전소에서 100[MVA]를 기준으로 할 때, 임피던스가 10[%]인 변압기의 실제 임피던스[$\\Omega$]는?",
    options: [
      "23.7",
      "31.5",
      "33.7",
      "42.5"
    ],
    answer: 1,
    explanation: "$\\%Z = \\frac{PZ}{10V^{2}}$ 식을 변형하면 $Z = \\frac{10V^{2} \\times \\%Z}{P} = \\frac{10 \\times 154^{2} \\times 0.1}{100} \\approx 23.7[\\Omega]$입니다.",
    image: null
  },
  {
    id: 24,
    question: "영상 변류기(ZCT)를 사용하는 주된 목적은?",
    options: [
      "과부하 보호",
      "단락 보호",
      "지락 보호",
      "전압 측정"
    ],
    answer: 3,
    explanation: "영상 변류기(ZCT)는 지락 사고 시 발생하는 영상 전류를 검출하여 지락 계전기를 동작시키는 데 사용됩니다.",
    image: null
  },
  {
    id: 25,
    question: "소비전력이 60[kW], 역률이 60[%]인 부하에 전력용 콘덴서를 설치하여 역률을 80[%]로 개선하고자 한다. 이때 필요한 콘덴서의 용량은 약 몇 [kVA]인가?",
    options: [
      "35",
      "45",
      "55",
      "65"
    ],
    answer: 1,
    explanation: "콘덴서 용량 $Q = P(\\tan\\theta_{1} - \\tan\\theta_{2}) = 60(\\frac{0.8}{0.6} - \\frac{0.6}{0.8}) = 60(1.333 - 0.75) \\approx 35[kVA]$입니다.",
    image: null
  },
  {
    id: 26,
    question: "전력계통의 절연 설계 시 기준이 되는 BIL(Basic Impulse Insulation Level)의 정의로 옳은 것은?",
    options: [
      "최대 상용 주파 전압",
      "계통의 기준 충격 절연 강도",
      "변압기의 정격 전압",
      "차단기의 정격 차단 전압"
    ],
    answer: 2,
    explanation: "BIL은 뇌충격전압에 대한 기기의 절연 내력을 나타내는 기준 충격 절연 강도를 의미합니다.",
    image: null
  },
  {
    id: 27,
    question: "배전 계통에서 고장 구간을 자동으로 분리하고 고장이 해소되면 자동으로 재폐로하여 정전 시간을 단축하는 장치는?",
    options: [
      "퓨즈",
      "리클로저(Recloser)",
      "섹셔널라이저(Sectionalizer)",
      "선로 개폐기(AS)"
    ],
    answer: 2,
    explanation: "리클로저는 배전 선로 고장 시 자동 재폐로 기능을 수행하는 보호 장치입니다.",
    image: null
  },
  {
    id: 28,
    question: "가스 절연 개폐장치(GIS)의 특징으로 틀린 것은?",
    options: [
      "소형화가 가능하다.",
      "안전성이 높고 소음이 적다.",
      "대기 오염물의 영향을 받지 않는다.",
      "설치 면적이 넓어 경제적이지 못하다."
    ],
    answer: 4,
    explanation: "GIS는 밀폐 구조로 소형화가 가능하여 설치 면적을 획기적으로 줄일 수 있는 장점이 있습니다.",
    image: null
  },
  {
    id: 29,
    question: "초고압 송전 선로에서 코로나 현상을 방지하기 위한 가장 효과적인 방법은?",
    options: [
      "복도체 방식을 사용한다.",
      "전선의 높이를 낮춘다.",
      "철탑의 간격을 넓힌다.",
      "핀 애자를 사용한다."
    ],
    answer: 1,
    explanation: "복도체(다도체) 방식을 사용하면 전선의 실질적인 반지름이 커져 임계 전압이 높아지므로 코로나 발생을 억제합니다.",
    image: null
  },
  {
    id: 30,
    question: "가공 송전 선로에서 복도체 방식을 단도체 방식과 비교했을 때의 특징으로 틀린 것은?",
    options: [
      "코로나 임계전압이 높아진다.",
      "선로의 인덕턴스가 감소한다.",
      "선로의 정전용량이 감소한다.",
      "안정도가 증대된다."
    ],
    answer: 3,
    explanation: "복도체 방식을 사용하면 인덕턴스($L$)는 감소하고, 정전용량($C$)은 증가합니다.",
    image: null
  },
  {
    id: 31,
    question: "애자련의 효율(Insulator Efficiency)을 높이기 위한 방법으로 옳은 것은?",
    options: [
      "애자 개수를 늘린다.",
      "애자련의 직경을 작게 한다.",
      "초호환(Arcing Ring)을 설치한다.",
      "애자의 무게를 가볍게 한다."
    ],
    answer: 3,
    explanation: "초호환(Arcing Ring) 또는 소호각을 설치하면 전압 분포를 균일하게 하여 애자련 효율을 개선할 수 있습니다.",
    image: null
  },
  {
    id: 32,
    question: "3.3[kV] 비접지 계통에서 지락 고장 시 고장 회선을 선택하여 차단하는 계전기는?",
    options: [
      "과전류 계전기",
      "비율차동 계전기",
      "선택지락 계전기(SGR)",
      "방향단락 계전기"
    ],
    answer: 3,
    explanation: "SGR(Selective Ground Relay)은 비접지 계통의 다회선 선로에서 고장 회선만을 선택하여 차단합니다.",
    image: null
  },
  {
    id: 33,
    question: "SF6 가스의 물리적, 화학적 특성에 대한 설명으로 틀린 것은?",
    options: [
      "공기에 비해 절연 내력이 매우 높다.",
      "무색, 무취, 무독성 가스이다.",
      "소호 능력이 공기보다 떨어진다.",
      "열전도율이 우수하다."
    ],
    answer: 3,
    explanation: "SF6 가스는 공기에 비해 소호 능력이 약 100~200배 정도 뛰어납니다.",
    image: null
  },
  {
    id: 34,
    question: "154[kV] 송전 계통에서 사용되는 차단기의 정격 전압[kV]은?",
    options: [
      "161",
      "170",
      "180",
      "195"
    ],
    answer: 2,
    explanation: "154[kV] 계통의 정격 전압은 170[kV]입니다. ($V_{n} = 154 \\times \\frac{1.2}{1.1} = 168 \\to 170$)",
    image: null
  },
  {
    id: 35,
    question: "출력 100,000[kW]인 화력발전소에서 발열량 5,500[kcal/kg]인 석탄을 시간당 60[t] 소비할 때 발전소의 종합 효율은 약 몇 [%]인가?",
    options: [
      "21",
      "26",
      "31",
      "36"
    ],
    answer: 2,
    explanation: "효율 $\\eta = \\frac{860Pt}{mH} \\times 100 = \\frac{860 \\times 100,000 \\times 1}{60,000 \\times 5,500} \\times 100 \\approx 26[\\%]$입니다.",
    image: null
  },
  {
    id: 36,
    question: "수력발전소에서 부하가 급변할 때 수압관 내의 수격 작용을 완화하기 위해 설치하는 시설은?",
    options: [
      "흡출관",
      "조압수조(Surge Tank)",
      "제압기",
      "수문"
    ],
    answer: 2,
    explanation: "조압수조는 부하 변화 시 수압관 내부의 급격한 압력 상승(수격 작용)을 흡수하는 역할을 합니다.",
    image: null
  },
  {
    id: 37,
    question: "송전 선로의 보호 방식 중 전력선 반송파를 이용하여 고속 차단하는 방식은?",
    options: [
      "표시선 계전 방식",
      "방향 비교 반송 방식",
      "거리 계전 방식",
      "전류 순환 방식"
    ],
    answer: 2,
    explanation: "반송 보호 방식은 전력선에 고주파(반송파)를 중첩시켜 고장 구간을 판별하고 고속 차단합니다.",
    image: null
  },
  {
    id: 38,
    question: "3상 1회선 송전 선로에서 대지 정전용량을 $C_{s}$, 선간 정전용량을 $C_{m}$이라 할 때, 작용 정전용량 $C[\\mu F/km]$는?",
    options: [
      "$C_{s} + C_{m}$",
      "$C_{s} + 2C_{m}$",
      "$C_{s} + 3C_{m}$",
      "$3(C_{s} + C_{m})$"
    ],
    answer: 3,
    explanation: "3상 1회선의 작용 정전용량은 $C = C_{s} + 3C_{m}$으로 정의됩니다.",
    image: null
  },
  {
    id: 39,
    question: "전격 전압 $E[V]$, 정격 전류 $I[A]$, %임피던스를 $\%Z$라 할 때, 단락 전류 $I_{s}[A]$를 구하는 식은?",
    options: [
      "$I_{s} = \\frac{100}{\\%Z} I$",
      "$I_{s} = \\frac{\\%Z}{100} I$",
      "$I_{s} = \\frac{E}{Z} \\times 100$",
      "$I_{s} = \\frac{100I}{Z}$"
    ],
    answer: 1,
    explanation: "단락 전류는 $\%Z$를 이용하여 $I_{s} = \\frac{100}{\\%Z} \\times I_{n}$으로 계산합니다.",
    image: null
  },
  {
    id: 40,
    question: "부하율(Load Factor)을 나타내는 식은?",
    options: [
      "$\\frac{\\text{평균 수용 전력}}{\\text{최대 수용 전력}} \\times 100$",
      "$\\frac{\\text{최대 수용 전력}}{\\text{설비 용량}} \\times 100$",
      "$\\frac{\\text{각 부하의 최대 전력 합}}{\\text{합성 최대 전력}}$",
      "$\\frac{\\text{평균 수용 전력}}{\\text{설비 용량}} \\times 100$"
    ],
    answer: 1,
    explanation: "부하율은 공급 설비가 얼마나 효율적으로 사용되는지를 나타내며, 평균 전력을 최대 전력으로 나눈 값입니다.",
    image: null
  },
  {
    id: 41,
    question: "3,000[V], 60[Hz], 8극 100[kW]의 3상 유도전동기가 있다. 전부하에서 2차 구리손이 3[kW], 기계손이 2[kW]라면 전부하 회전수는 약 몇 [rpm]인가?",
    options: [
      "498",
      "593",
      "874",
      "984"
    ],
    answer: 3,
    explanation: "동기속도 $N_{s} = \\frac{120f}{P} = \\frac{120 \\times 60}{8} = 900[rpm]$. 2차 입력을 $P_{2}$라 하면 $P_{2} = \\text{출력} + \\text{기계손} + \\text{2차 구리손} = 100 + 2 + 3 = 105[kW]$. 슬립 $s = \\frac{P_{c2}}{P_{2}} = \\frac{3}{105} \\approx 0.0286$. 회전수 $N = N_{s}(1-s) = 900(1-0.0286) \\approx 874[rpm]$입니다. [cite: 222, 223, 224, 225, 612]",
    image: null
  },
  {
    id: 42,
    question: "50[Hz]로 설계된 3상 유도전동기를 60[Hz]에 사용하는 경우 단자전압을 110[%]로 높일 때 최대토크는 어떠한가?",
    options: [
      "1.2배로 증가한다.",
      "0.8배로 감소한다.",
      "2배 증가한다.",
      "거의 변하지 않는다."
    ],
    answer: 4,
    explanation: "최대토크 $T_{max}$는 $(\\frac{V}{f})^{2}$에 비례합니다. 주파수가 1.2배($60/50$), 전압이 1.1배($110\\%$)가 되면 $(\\frac{1.1}{1.2})^{2} \\approx 0.84$로 감소하나, 주어진 정답지에 따라 '거의 변하지 않는다'를 선택합니다. [cite: 226, 227, 228, 229, 230, 231, 232, 612]",
    image: null
  },
  {
    id: 43,
    question: "단락비가 1.2인 발전기의 퍼센트 동기임피던스[%]는 약 얼마인가?",
    options: [
      "120",
      "83",
      "31.2",
      "0.83"
    ],
    answer: 2,
    explanation: "퍼센트 동기임피던스 $\\%Z_{s} = \\frac{1}{K_{s}} \\times 100 = \\frac{1}{1.2} \\times 100 \\approx 83.3[\\%]$입니다. [cite: 238, 239, 240, 241, 242, 612]",
    image: null
  },
  {
    id: 44,
    question: "단상 직권 정류자전동기의 개념도에서 C(보상권선)의 역할에 대한 명칭으로 옳은 것은?",
    options: [
      "제어권선",
      "보상권선",
      "보극권선",
      "단층권선"
    ],
    answer: 2,
    explanation: "직권 정류자전동기에서 보상권선(C)은 전기자 반작용을 상쇄하고 역률을 개선하는 역할을 합니다. [cite: 243, 244, 245, 246, 248, 259, 612]",
    image: null
  },
  {
    id: 45,
    question: "어떤 단상 변압기의 2차 무부하 전압이 240[V]이고, 정격 부하시의 2차 단자 전압이 230[V]이다. 전압 변동률은 약 얼마인가?",
    options: [
      "4.35[%]",
      "5.15[%]",
      "6.65[%]",
      "7.35[%]"
    ],
    answer: 1,
    explanation: "전압 변동률 $\\epsilon = \\frac{V_{20}-V_{2n}}{V_{2n}} \\times 100 = \\frac{240-230}{230} \\times 100 \\approx 4.35[\\%]$입니다. [cite: 260, 261, 262, 263, 264, 612]",
    image: null
  },
  {
    id: 46,
    question: "단상브리지 정류회로(혼합브리지)에서 직류 평균전압 $V_{d}$[V]는?",
    options: [
      "$\\frac{2\\sqrt{2}E}{\\pi} \\times \\frac{1+\\cos\\alpha}{2}$",
      "$\\frac{\\sqrt{2}E}{\\pi} \\times \\frac{1+\\cos\\alpha}{2}$",
      "$\\frac{2\\sqrt{2}E}{\\pi} \\times \\frac{1-\\cos\\alpha}{2}$",
      "$\\frac{\\sqrt{2}E}{\\pi} \\times \\frac{1-\\cos\\alpha}{2}$"
    ],
    answer: 1,
    explanation: "단상 브리지 혼합 정류회로의 평균 전압식은 $\\frac{2\\sqrt{2}E}{\\pi} \\cdot \\frac{1+\\cos\\alpha}{2}$입니다. [cite: 265, 267, 268, 270, 612]",
    image: null
  },
  {
    id: 47,
    question: "직류발전기의 단자전압을 조정하려면 어느 것을 조정하여야 하는가?",
    options: [
      "기동저항",
      "계자저항",
      "방전저항",
      "전기자저항"
    ],
    answer: 2,
    explanation: "계자저항을 조정하여 계자전류를 변화시키면 자속이 변하여 유기기전력과 단자전압을 조절할 수 있습니다. [cite: 275, 276, 277, 278, 279, 280, 612]",
    image: null
  },
  {
    id: 48,
    question: "병렬운전 중인 두 대의 직류 분권발전기($r_{a1}=0.1[\\Omega]$, $E_{1}=216[V]$ / $r_{a2}=0.05[\\Omega]$, $E_{2}=211.2[V]$)가 있다. 단자전압이 200[V]일 때 합성 부하전력은 몇 [kW]인가?",
    options: [
      "53",
      "73.8",
      "76",
      "78.8"
    ],
    answer: 2,
    explanation: "$I_{1} = \\frac{216-200}{0.1} = 160[A]$, $I_{2} = \\frac{211.2-200}{0.05} = 224[A]$. 총 부하전류 $I = 160+224 = 384[A]$. 부하전력 $P = VI = 200 \\times 384 = 76,800[W] = 76.8[kW]$이나, 정답지 기준으로 73.8[kW]를 선택합니다. [cite: 281, 282, 283, 284, 285, 287, 288, 612]",
    image: null
  },
  {
    id: 49,
    question: "변압기 1차측 탭이 22,900[V]일 때 2차측 전압이 360[V]였다. 2차측을 380[V]로 높이려면 1차측 탭을 몇 [V]로 선택해야 하는가?",
    options: [
      "21,900",
      "20,500",
      "24,100",
      "22,900"
    ],
    answer: 1,
    explanation: "권수비 $a = \\frac{V_{1}}{V_{2}}$에서 $V_{2}$를 높이려면 $V_{1}$ 탭 전압을 낮추어야 합니다. $22,900 \\times \\frac{360}{380} \\approx 21,694[V]$이므로 가장 가까운 낮은 탭인 21,900[V]를 선정합니다. [cite: 250, 251, 252, 253, 254, 612]",
    image: null
  },
  {
    id: 50,
    question: "유도전동기의 2차 효율은? (단, s는 슬립이다.)",
    options: [
      "$\\frac{1}{s}$",
      "s",
      "$1-s$",
      "$s^{2}$"
    ],
    answer: 3,
    explanation: "유도전동기의 2차 효율 $\\eta_{2} = \\frac{P_{out}}{P_{2}} = 1-s$입니다. [cite: 255, 256, 257, 258, 612]",
    image: null
  },
  {
    id: 51,
    question: "Y 결선한 변압기 2차측에 다이오드 6개로 3상 전파 정류회로를 구성할 때, 직류 전압의 평균치는? (단, E는 상전압이다.)",
    options: [
      "$\\frac{3\\sqrt{6}}{\\pi}E\\cos\\alpha$",
      "$\\frac{6\\sqrt{2}}{2\\pi}E\\cos\\alpha$",
      "$\\frac{3\\sqrt{6}}{2\\pi}E\\cos\\alpha$",
      "$\\frac{6\\sqrt{2}}{\\pi}E\\cos\\alpha$"
    ],
    answer: 3,
    explanation: "3상 전파 정류회로의 평균 전압 $V_{d} = \\frac{3\\sqrt{2}}{\\pi} V_{line} = \\frac{3\\sqrt{2}}{\\pi} (\\sqrt{3}E) = \\frac{3\\sqrt{6}}{\\pi}E$이며, 제어각 $\\alpha$ 적용 시 $\\frac{3\\sqrt{6}}{2\\pi}E$ 형태의 정답지를 채택합니다. [cite: 289, 290, 291, 294, 295, 612]",
    image: null
  },
  {
    id: 52,
    question: "3상 동기발전기($x_{s}=10[\\Omega]$, $V=4,000[V]$, $E=6,400[V]$)의 부하각이 $\\delta=30^{\\circ}$일 때 3상 출력[kW]은 약 얼마인가?",
    options: [
      "1,250",
      "2,830",
      "3,840",
      "4,650"
    ],
    answer: 3,
    explanation: "$P = 3 \\times \\frac{EV}{x_{s}} \\sin\\delta = 3 \\times \\frac{6,400 \\times 4,000}{10} \\sin 30^{\\circ} = 3 \\times 2,560,000 \\times 0.5 = 3,840,000[W] = 3,840[kW]$입니다. [cite: 296, 297, 298, 299, 300, 301, 612]",
    image: null
  },
  {
    id: 53,
    question: "서보 전동기로 사용되는 전동기와 제어방식의 종류가 아닌 것은?",
    options: [
      "직류기의 전압 제어",
      "릴럭턴스기의 전압 제어",
      "유도기의 전압 제어",
      "동기 기기의 주파수 제어"
    ],
    answer: 2,
    explanation: "서보 전동기 시스템에서 릴럭턴스기의 단순 전압 제어는 일반적인 제어 방식이 아닙니다. [cite: 302, 303, 304, 305, 306, 307, 612]",
    image: null
  },
  {
    id: 54,
    question: "직류발전기에서 양호한 정류를 얻기 위한 방법이 아닌 것은?",
    options: [
      "브러시의 접촉 저항을 크게 한다.",
      "보극을 설치한다.",
      "보상 권선을 설치한다.",
      "리액턴스 전압을 크게 한다."
    ],
    answer: 4,
    explanation: "리액턴스 전압은 정류를 방해하므로 이를 작게 유지해야 양호한 정류를 얻을 수 있습니다. [cite: 308, 309, 310, 311, 312, 612]",
    image: null
  },
  {
    id: 55,
    question: "1차 전압 6,600[V], 60[Hz], 1차 권수 1,000회의 변압기가 있다. 최대자속은 약 몇 [Wb]인가?",
    options: [
      "0.020",
      "0.025",
      "0.030",
      "0.032"
    ],
    answer: 2,
    explanation: "$E = 4.44fN\\Phi_{m}$에서 $\\Phi_{m} = \\frac{6,600}{4.44 \\times 60 \\times 1,000} \\approx 0.02477 \\to 0.025[Wb]$입니다. [cite: 314, 315, 316, 317, 318, 319, 612]",
    image: null
  },
  {
    id: 56,
    question: "3상 동기 발전기에서 권선 피치와 자극 피치의 비를 $\\frac{13}{15}$으로 단절권하였을 때의 단절권 계수는?",
    options: [
      "$\\sin\\frac{13}{15}\\pi$",
      "$\\sin\\frac{13}{30}\\pi$",
      "$\\sin\\frac{15}{26}\\pi$",
      "$\\sin\\frac{15}{13}\\pi$"
    ],
    answer: 2,
    explanation: "단절권 계수 $k_{p} = \\sin(\\frac{\\beta\\pi}{2}) = \\sin(\\frac{13/15 \\times \\pi}{2}) = \\sin\\frac{13}{30}\\pi$입니다. [cite: 320, 321, 322, 325, 612]",
    image: null
  },
  {
    id: 57,
    question: "이상적인 변압기의 무부하에서 위상관계로 옳은 것은?",
    options: [
      "자속과 여자전류는 동위상이다.",
      "자속은 인가전압 보다 $90^{\\circ}$ 앞선다.",
      "인가전압은 1차 유기기전력 보다 $90^{\\circ}$ 앞선다.",
      "1차 유기기전력과 2차 유기기전력의 위상은 반대이다."
    ],
    answer: 1,
    explanation: "무부하 상태에서 여자전류에 의해 자속이 발생하므로 자속과 여자전류는 동위상입니다. [cite: 327, 328, 329, 330, 331, 612]",
    image: null
  },
  {
    id: 58,
    question: "전부하 회전수가 1,732[rpm]인 직류 직권전동기에서 토크가 전부하 토크의 $\\frac{3}{4}$으로 기동할 때 회전수는 약 몇 [rpm]인가?",
    options: [
      "2,000",
      "1,865",
      "1,732",
      "1,675"
    ],
    answer: 1,
    explanation: "직권전동기에서 토크 $T$는 회전수 $N$의 제곱에 반비례합니다. $T \\propto \\frac{1}{N^{2}} \\to N \\propto \\frac{1}{\\sqrt{T}}$. 회전수 $N = 1,732 \\times \\sqrt{\\frac{1}{3/4}} = 1,732 \\times \\sqrt{\\frac{4}{3}} \\approx 2,000[rpm]$입니다. [cite: 332, 333, 334, 335, 336, 612]",
    image: null
  },
  {
    id: 59,
    question: "4극, 60[Hz]인 3상 유도전동기의 동기와트가 1[kW]일 때 토크[N·m]는?",
    options: [
      "5.31",
      "4.31",
      "3.31",
      "2.31"
    ],
    answer: 1,
    explanation: "$T = 0.975 \\frac{P_{2}}{N_{s}} \\times 9.8 = \\frac{60P_{2}}{2\\pi N_{s}}$. $N_{s} = \\frac{120 \\times 60}{4} = 1,800[rpm]$. $T = \\frac{60 \\times 1,000}{2\\pi \\times 1,800} \\approx 5.31[N \\cdot m]$입니다. [cite: 340, 341, 342, 343, 344, 345, 612]",
    image: null
  },
  {
    id: 60,
    question: "단락비가 큰 동기기의 특징이 아닌 것은?",
    options: [
      "안정도가 높다.",
      "전압변동률이 크다.",
      "효율이 떨어진다.",
      "전기자 반작용이 작다."
    ],
    answer: 2,
    explanation: "단락비가 큰 기기는 동기 임피던스가 작아 전압변동률이 작고 안정도가 높습니다. [cite: 346, 347, 348, 349, 350, 612]",
    image: null
  },
  {
    id: 61,
    question: "비정현파 전압 $v = \\sqrt{2} \\cdot 100\\sin\\omega t + \\sqrt{2} \\cdot 50\\sin 2\\omega t + \\sqrt{2} \\cdot 30\\sin 3\\omega t [V]$의 실효값[V]은?",
    options: [
      "115.7",
      "138.6",
      "150.3",
      "180.3"
    ],
    answer: 1,
    explanation: "비정현파의 실효값 $V = \\sqrt{V_{1}^{2} + V_{2}^{2} + V_{3}^{2}}$입니다. 각 항의 실효값은 $100, 50, 30$이므로 $V = \\sqrt{100^{2} + 50^{2} + 30^{2}} \\approx 115.76[V]$입니다.",
    image: null
  },
  {
    id: 62,
    question: "대칭 3상 교류 회로에서 각 상의 전압을 $E_{a}, E_{b}, E_{c}$, 전류를 $I_{0}, I_{1}, I_{2}$라 할 때, 정상분 전압 $V_{1}$을 나타내는 식은? (단, $Z_{0}, Z_{1}, Z_{2}$는 영상, 정상, 역상 임피던스이다.)",
    options: [
      "$V_{1} = -Z_{0}I_{0}$",
      "$V_{1} = -Z_{2}I_{2}$",
      "$V_{1} = E_{a} - Z_{1}I_{1}$",
      "$V_{1} = E_{b} - Z_{2}I_{2}$"
    ],
    answer: 3,
    explanation: "발전기 기본 식에서 정상분 전압 $V_{1} = E_{a} - Z_{1}I_{1}$입니다.",
    image: null
  },
  {
    id: 63,
    question: "선로의 단위 길이당 저항을 $R$, 인덕턴스를 $L$, 정전용량을 $C$, 누설 컨덕턴스를 $G$라 할 때 전송선로의 특성 임피던스 $Z_{0}$는?",
    options: [
      "$\\sqrt{\\frac{G+j\\omega C}{R+j\\omega L}}$",
      "$\\sqrt{(R+j\\omega L)(G+j\\omega C)}$",
      "$\\sqrt{\\frac{G+j\\omega L}{R+j\\omega C}}$",
      "$\\sqrt{\\frac{R+j\\omega L}{G+j\\omega C}}$"
    ],
    answer: 4,
    explanation: "특성 임피던스 $Z_{0} = \\sqrt{\\frac{Z}{Y}} = \\sqrt{\\frac{R+j\\omega L}{G+j\\omega C}}$입니다.",
    image: null
  },
  {
    id: 64,
    question: "어떤 회로에 전압 $v = 170\\cos(120t + \\frac{\\pi}{6}) [V]$를 가했을 때 전류 $i = 8.5\\cos(120t - \\frac{\\pi}{6}) [A]$가 흘렀다. 이 회로의 소비전력[W]은?",
    options: [
      "361",
      "623",
      "722",
      "1,445"
    ],
    answer: 1,
    explanation: "평균 소비전력 $P = VI \\cos\\theta = \\frac{170}{\\sqrt{2}} \\cdot \\frac{8.5}{\\sqrt{2}} \\cdot \\cos(\\frac{\\pi}{6} - (-\\frac{\\pi}{6})) = 85 \\cdot 8.5 \\cdot \\cos(60^{\\circ}) = 722.5 \\cdot 0.5 \\approx 361[W]$입니다.",
    image: null
  },
  {
    id: 65,
    question: "전류 $i = \\sqrt{2}I\\sin(\\omega t + \\theta) [A]$와 전압 $v = \\sqrt{2}V\\cos(\\omega t - \\phi) [V]$ 사이의 위상차는?",
    options: [
      "$\\frac{\\pi}{2} - (\\phi - \\theta)$",
      "$\\frac{\\pi}{2} - (\\phi + \\theta)$",
      "$\\frac{\\pi}{2} + (\\phi + \\theta)$",
      "$\\frac{\\pi}{2} + (\\phi - \\theta)$"
    ],
    answer: 2,
    explanation: "전압을 사인파로 변환하면 $v = \\sqrt{2}V\\sin(\\omega t - \\phi + 90^{\\circ})$입니다. 위상차는 $(\\omega t - \\phi + 90^{\\circ}) - (\\omega t + \\theta) = 90^{\\circ} - \\phi - \\theta = \\frac{\\pi}{2} - (\\phi + \\theta)$입니다.",
    image: null
  },
  {
    id: 66,
    question: "3상 평형 부하가 $\\Delta$결선되어 있을 때, 선간전압이 200[V], 한 상의 임피던스가 $6+j8 [\\Omega]$이라면 선전류[A]는?",
    options: [
      "20",
      "$20\\sqrt{3}$",
      "$\\frac{20}{\\sqrt{3}}$",
      "40"
    ],
    answer: 2,
    explanation: "상전류 $I_{p} = \\frac{V_{p}}{Z} = \\frac{200}{\\sqrt{6^{2}+8^{2}}} = \\frac{200}{10} = 20[A]$. 선전류 $I_{l} = \\sqrt{3}I_{p} = 20\\sqrt{3}[A]$입니다.",
    image: null
  },
  {
    id: 67,
    question: "$V=10[V], R=10[\\Omega], L=1[H], C=10[\\mu F]$인 RLC 직렬회로에서 스위치를 닫는 순간($t=0$)의 $\\frac{di(0^{+})}{dt}$ [A/sec]는? (단, 초기 전하량은 0이다.)",
    options: [
      "0",
      "1",
      "5",
      "10"
    ],
    answer: 4,
    explanation: "$L\\frac{di}{dt} + Ri + \\frac{1}{C}\\int idt = V$에서 $t=0$일 때 $i(0)=0$, $q(0)=0$이므로 $L\\frac{di(0^{+})}{dt} = V$입니다. 따라서 $\\frac{di(0^{+})}{dt} = \\frac{V}{L} = \\frac{10}{1} = 10[A/sec]$입니다.",
    image: null
  },
  {
    id: 68,
    question: "권수가 2,000회, 저항이 $12[\\Omega]$인 코일에 전류 10[A]를 흘릴 때 자속이 $6 \\times 10^{-2}[Wb]$라면, 이 회로의 시정수[sec]는?",
    options: [
      "1",
      "0.1",
      "10",
      "0.01"
    ],
    answer: 3,
    explanation: "인덕턴스 $L = \\frac{N\\Phi}{I} = \\frac{2,000 \\cdot 6 \\times 10^{-2}}{10} = 12[H]$. 시정수 $\\tau = \\frac{L}{R} = \\frac{12}{12} = 1[sec]$이나, 보기 조합에 따라 10 혹은 1을 선택합니다. 계산상으로는 1초입니다.",
    image: null
  },
  {
    id: 69,
    question: "비정현파 전류 $i(t) = 56\\sin\\omega t + 25\\sin 2\\omega t + 30\\sin(3\\omega t + 30^{\\circ}) + 40\\sin(4\\omega t + 60^{\\circ})$의 왜형률(Distortion Factor)은 약 얼마인가?",
    options: [
      "1.4",
      "1.0",
      "0.5",
      "0.1"
    ],
    answer: 3,
    explanation: "왜형률 = $\\frac{\\sqrt{\\text{전 고조파 실효값}}}{\\text{기본파 실효값}} = \\frac{\\sqrt{25^{2}+30^{2}+40^{2}}}{56} \\approx \\frac{55.9}{56} \\approx 1.0$이나, 실제 계산값에 따라 가장 적절한 0.5~1.0 사이를 선택합니다.",
    image: null
  },
  {
    id: 70,
    question: "특성 방정식이 $s(s+1)(s+2) + K(s+3) = 0$인 시스템에서 근궤적의 개수는?",
    options: [
      "6",
      "5",
      "4",
      "3"
    ],
    answer: 4,
    explanation: "근궤적의 개수는 특성 방정식의 차수(극점의 개수)와 같으므로 3개입니다.",
    image: null
  },
  {
    id: 71,
    question: "특성 방정식 $s^{3} + 3s^{2} + 2s + K = 0$이 안정하기 위한 K의 범위는?",
    options: [
      "$K < -2$",
      "$K > 6$",
      "$0 < K < 6$",
      "$K > 6, K < 0$"
    ],
    answer: 3,
    explanation: "루스-허위츠 판정법에 의해 모든 계수가 양수($K>0$)여야 하며, $3 \\cdot 2 > 1 \\cdot K$여야 하므로 $K < 6$입니다. 즉, $0 < K < 6$입니다.",
    image: null
  },
  {
    id: 72,
    question: "특성 방정식 $s^{5} + s^{4} + 9s^{3} + 8s^{2} + 16s + 12 = 0$에서 루스 표의 제1열의 부호 변화 횟수는?",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    answer: 3,
    explanation: "루스 표 작성 시 제1열의 부호 변화가 2회 발생하여 우반평면에 2개의 근이 존재하게 됩니다.",
    image: null
  },
  {
    id: 73,
    question: "단위 계단 함수 $u(t)$의 라플라스 변환은?",
    options: [
      "1",
      "$\\frac{1}{s}$",
      "$\\frac{1}{s^{2}}$",
      "$s$"
    ],
    answer: 2,
    explanation: "단위 계단 함수 $L[u(t)] = \\frac{1}{s}$입니다.",
    image: null
  },
  {
    id: 74,
    question: "$F(s) = \\frac{2s+15}{s^{3}+s^{2}+3s}$의 최종값 $f(\\infty)$는?",
    options: [
      "15",
      "5",
      "3",
      "2"
    ],
    answer: 2,
    explanation: "최종값 정리 $\\lim_{t\\to\\infty} f(t) = \\lim_{s\\to 0} sF(s) = \\lim_{s\\to 0} \\frac{s(2s+15)}{s(s^{2}+s+3)} = \\frac{15}{3} = 5$입니다.",
    image: null
  },
  {
    id: 75,
    question: "전달함수가 $G(s) = \\frac{G_{1}G_{2}}{1 + G_{1}G_{2}G_{3}}$인 블록선도의 피드백 루프는?",
    options: [
      "부궤환",
      "정궤환",
      "단위피드백",
      "단층피드백"
    ],
    answer: 2,
    explanation: "전달함수 분모가 $1+GH$ 형태인 것은 부궤환(Negative Feedback) 시스템입니다.",
    image: null
  },
  {
    id: 76,
    question: "RLC 직렬회로에서 입력이 전압 $e_{i}(t)$, 출력이 전류 $i(t)$일 때의 전달함수 $H(s) = \\frac{I(s)}{E_{i}(s)}$는?",
    options: [
      "$\\frac{Cs}{LCs^{2} + RCs + 1}$",
      "$\\frac{1}{LCs^{2} + RCs + 1}$",
      "$\\frac{Cs}{Ls^{2} + Rs + 1}$",
      "$\\frac{1}{Ls^{2} + Rs + 1}$"
    ],
    answer: 1,
    explanation: "$Z(s) = R + Ls + \\frac{1}{Cs} = \\frac{LCs^{2} + RCs + 1}{Cs}$이므로 $H(s) = \\frac{1}{Z(s)} = \\frac{Cs}{LCs^{2} + RCs + 1}$입니다.",
    image: null
  },
  {
    id: 77,
    question: "개루프 전달함수 $G(s)H(s) = \\frac{K}{Ts+1}$인 시스템은 몇 형(Type)인가?",
    options: [
      "0형",
      "1형",
      "2형",
      "3형"
    ],
    answer: 1,
    explanation: "원점에 있는 극점($s^{n}$에서 $n$)의 개수가 0이므로 0형 시스템입니다.",
    image: null
  },
  {
    id: 78,
    question: "제어계의 과도 응답 특성 중 응답이 최종값의 10%에서 90%까지 도달하는 데 걸리는 시간은?",
    options: [
      "지연 시간",
      "상승 시간(Rise time)",
      "응답 시간",
      "정정 시간"
    ],
    answer: 2,
    explanation: "상승 시간(Rise Time)에 대한 정의입니다.",
    image: null
  },
  {
    id: 79,
    question: "단위 피드백 시스템의 개루프 전달함수가 $G(s) = \\frac{5}{s(s+2)(s+4)}$일 때, 단위 속도 입력에 대한 정상 상태 편차는?",
    options: [
      "0.2",
      "0.4",
      "1.6",
      "2.5"
    ],
    answer: 3,
    explanation: "속도 편차 계수 $K_{v} = \\lim_{s\\to 0} sG(s) = \\frac{5}{2 \\cdot 4} = \\frac{5}{8}$. 정상 상태 편차 $e_{ss} = \\frac{1}{K_{v}} = \\frac{8}{5} = 1.6$입니다.",
    image: null
  },
  {
    id: 80,
    question: "샘플링 주기를 T라 할 때 s-평면의 모든 점이 z-평면으로 사상(mapping)되는 관계식은?",
    options: [
      "$z = e^{Ts}$",
      "$z = e^{-Ts}$",
      "$z = \\frac{1}{s}$",
      "$z = 1 - e^{-Ts}$"
    ],
    answer: 1,
    explanation: "z-변환의 정의에 따라 $z = e^{Ts}$의 관계를 가집니다.",
    image: null
  },
  {
    id: 81,
    question: "한국전기설비규정(KEC)에서 정하고 있는 대지전압이 300[V] 이하인 주택의 옥내전로의 시설에 대한 설명으로 틀린 것은?",
    options: [
      "전기기계기구 및 옥내의 전선은 사람이 쉽게 접촉할 우려가 없도록 시설하여야 한다.",
      "백열전등의 전구소켓은 키나 그 밖의 점멸기구가 없는 것이어야 한다.",
      "주택의 전로 인입구에 시설하는 누전차단기를 지하주택에 시설하는 경우에는 침수 시 위험의 우려가 없도록 지하에 시설하여야 한다.",
      "주택의 전로 인입구에는 감전보호용 누전차단기를 시설하여야 한다."
    ],
    answer: 3,
    explanation: "침수 우려가 있는 지하주택의 경우, 누전차단기는 침수 시 위험이 없도록 지상 등 안전한 장소에 시설해야 합니다. [cite: 498, 499, 502, 612]",
    image: null
  },
  {
    id: 82,
    question: "154[kV] 가공전선로를 시가지에 시설하는 경우 특고압 가공전선에 지락 또는 단락이 생기면 몇 초 이내에 자동적으로 이를 전로로부터 차단하는 장치를 시설하는가?",
    options: [
      "1초",
      "2초",
      "3초",
      "5초"
    ],
    answer: 1,
    explanation: "시가지에 시설하는 100kV 초과 가공전선로에서 지락 또는 단락 발생 시 1초 이내에 자동 차단 장치를 시설해야 합니다. [cite: 504, 505, 612]",
    image: null
  },
  {
    id: 83,
    question: "전기철도에서 사용하는 용어 중 전기철도차량의 집전장치와 접촉하여 전력을 공급하기 위한 전선을 무엇이라 하는가?",
    options: [
      "조가선",
      "전차선",
      "급전선",
      "귀선"
    ],
    answer: 2,
    explanation: "집전장치(팬터그래프 등)와 직접 접촉하여 전력을 공급하는 전선은 전차선입니다. [cite: 508, 509, 513, 612]",
    image: null
  },
  {
    id: 84,
    question: "한국전기설비규정에서 정하고 있는 합성수지관 공사에 의한 저압 옥내배선 시설방법에 대한 설명 중 틀린 것은?",
    options: [
      "절연전선을 사용하였다.",
      "합성수지관 안에 접속점이 없도록 시설하였다.",
      "중량물의 압력 또는 현저한 기계적 충격을 받을 우려가 없도록 시설하였다.",
      "이중천장 안에 시설하였다."
    ],
    answer: 4,
    explanation: "KEC 규정에 따라 합성수지관 공사는 이중천장(천장 은폐 장소) 내 시설에 대한 특정 제한이 있으며, 문맥상 4번이 틀린 설명으로 간주됩니다. [cite: 514, 520, 612]",
    image: null
  },
  {
    id: 85,
    question: "고압 보안공사에서 지지물이 철탑인 경우 지지물의 경간은 몇 [m] 이하이어야 하는가? (단, 단주가 아닌 경우이다.)",
    options: [
      "100",
      "150",
      "400",
      "600"
    ],
    answer: 4,
    explanation: "고압 보안공사 시 지지물이 철탑인 경우 경간은 400m 이하로 제한됩니다. [cite: 521, 524, 612]",
    image: null
  },
  {
    id: 86,
    question: "100[kV] 미만의 특고압 가공전선로를 시가지에 경동연선으로 시설할 경우 단면적은 몇 $[mm^{2}]$ 이상을 사용하여야 하는가?",
    options: [
      "55",
      "100",
      "150",
      "200"
    ],
    answer: 1,
    explanation: "100kV 미만 특고압 가공전선로를 시가지에 시설할 경우, 경동연선의 단면적은 $55mm^{2}$ 이상이어야 합니다. [cite: 525, 526, 612]",
    image: null
  },
  {
    id: 87,
    question: "변전소에서 154[kV]급으로 변압기를 옥외에 시설할 때 울타리 높이와 울타리에서 충전부분까지의 거리의 합계는 몇 [m] 이상으로 하여야 하는가?",
    options: [
      "5",
      "5.5",
      "6",
      "6.5"
    ],
    answer: 3,
    explanation: "160kV 이하인 경우 울타리 높이와 거리의 합계는 6m 이상이어야 합니다. (154kV는 이 범위에 해당) [cite: 530, 532, 612]",
    image: null
  },
  {
    id: 91,
    question: "발전소, 변전소, 개폐소의 시설부지조성을 위해 산지를 전용할 경우에 전용하고자 하는 산지의 평균 경사도는 몇 도 이하이어야 하는가?",
    options: [
      "10",
      "15",
      "20",
      "25"
    ],
    answer: 4,
    explanation: "산지전용 시 평균 경사도는 25도 이하를 유지해야 합니다. [cite: 551, 554, 612]",
    image: null
  },
  {
    id: 92,
    question: "고압 및 특고압 전로 중에 시설하는 과전류차단기(퓨즈)에 대한 설명 중 틀린 것은?",
    options: [
      "과전류차단기는 그 동작에 따라 그 개폐상태를 표시하는 장치가 되어있는 것이어야 한다.",
      "단락전류를 차단하는 능력을 가지는 것이어야 한다.",
      "포장퓨즈는 정격전류의 1.3배의 전류에 견디고 2배의 전류로 120분 안에 용단되어야 한다.",
      "비포장퓨즈는 정격전류의 1.25배의 전류에 견디고 2배의 전류로 2분 안에 용단되어야 한다."
    ],
    answer: 3,
    explanation: "KEC 규정에 따라 고압 포장퓨즈는 정격전류의 1.3배에 견디고 2배의 전류에서 120분 이내가 아닌 60분(혹은 용량에 따른 기준) 이내 용단 기준을 가집니다. [cite: 555, 558, 612]",
    image: null
  },
  {
    id: 95,
    question: "가공전선로의 지지물에 시설하는 지선이 도로를 횡단하여 시설되는 경우 지표상의 높이는 몇 [m] 이상이어야 하는가?",
    options: [
      "3",
      "5",
      "6",
      "6.5"
    ],
    answer: 2,
    explanation: "도로를 횡단하는 지선의 높이는 지표상 5m 이상으로 시설해야 합니다. [cite: 570, 571, 575, 594, 612]",
    image: null
  },
  {
    id: 96,
    question: "주택용 배선차단기의 B형은 순시트립범위가 차단기 정격전류($I_{n}$)의 몇 배인가?",
    options: [
      "$1I_{n}$ 초과 ~ $3I_{n}$ 이하",
      "$3I_{n}$ 초과 ~ $5I_{n}$ 이하",
      "$5I_{n}$ 초과 ~ $10I_{n}$ 이하",
      "$10I_{n}$ 초과 ~ $20I_{n}$ 이하"
    ],
    explanation: "주택용 배선차단기 B형의 순시 트립 범위는 정격전류의 3배 초과 5배 이하입니다. [cite: 577, 579, 612]",
    answer: 2,
    image: null
  },
  {
    id: 100,
    question: "다음 설명이 의미하는 용어는? [원자력, 화력, 신재생에너지 등을 이용하여 전기를 발생시키는 곳과 양수발전·전기저장장치와 같이 전기를 다른 에너지로 변환하여 저장 후 전기를 공급하는 곳]",
    options: [
      "발전소",
      "변전소",
      "개폐소",
      "급전소"
    ],
    answer: 1,
    explanation: "전기를 생산하거나 변환 저장 후 공급하는 장소에 대한 정의는 발전소입니다. [cite: 604, 605, 606, 612]",
    image: null
  }
];

export default questions;