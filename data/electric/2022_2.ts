const questions = [
  {
    id: 1,
    question: "$\\epsilon_{r}=81, \\mu_{r}=1$ 인 매질의 고유 임피던스는 약 몇 $[\\Omega]$ 인가? (단, $\\epsilon_{r}$ 은 비유전율이고, $\\mu_{r}$ 은 비투자율이다.)",
    options: [
      "13.9",
      "21.9",
      "33.9",
      "41.9"
    ],
    answer: 4,
    explanation: "고유 임피던스 $Z_{0} = \\sqrt{\\frac{\\mu}{\\epsilon}} = 377\\sqrt{\\frac{\\mu_{r}}{\\epsilon_{r}}} = 377\\sqrt{\\frac{1}{81}} \\approx 41.9 [\\Omega]$ 입니다.",
    image: null
  },
  {
    id: 2,
    question: "강자성체의 $B-H$ 곡선을 자세히 관찰하면 매끈한 곡선이 아니라 자속밀도가 어느 순간 급격히 계단적으로 증가 또는 감소하는 것을 알 수 있다. 이러한 현상을 무엇이라 하는가?",
    options: [
      "퀴리점(Curie point)",
      "자왜현상(Magneto-striction)",
      "바크하우젠 효과(Barkhausen effect)",
      "자기 여자효과(Magnetic aftereffect)"
    ],
    answer: 3,
    explanation: "자성체 내 자구가 외부 자계에 의해 회전하면서 자속밀도가 계단적으로 증가하는 현상을 바크하우젠 효과라 합니다.",
    image: null
  },
  {
    id: 3,
    question: "진공 중에 무한 평면도체와 $d[m]$ 만큼 떨어진 곳에 선전하밀도 $\\lambda[C/m]$ 의 무한 직선도체가 평행하게 놓여 있는 경우 직선 도체의 단위 길이당 받는 힘은 몇 $[N/m]$ 인가?",
    options: [
      "$\\frac{\\lambda^{2}}{\\pi\\epsilon_{0}d}$",
      "$\\frac{\\lambda^{2}}{2\\pi\\epsilon_{0}d}$",
      "$\\frac{\\lambda^{2}}{4\\pi\\epsilon_{0}d}$",
      "$\\frac{\\lambda^{2}}{16\\pi\\epsilon_{0}d}$"
    ],
    answer: 3,
    explanation: "영상법에 의해 거리 $2d$인 지점에 $-\\lambda$ 전하가 있는 것과 같으므로 $F = \\frac{\\lambda^{2}}{4\\pi\\epsilon_{0}d}$ 입니다.",
    image: "https://example.com/images/2022-2-03.png"
  },
  {
    id: 4,
    question: "평행 극판 사이에 유전율이 각각 $\\epsilon_{1}, \\epsilon_{2}$ 인 유전체를 채우고, 극판 사이에 일정한 전압을 걸었을 때 두 유전체 사이에 작용하는 힘의 방향은? (단, $\\epsilon_{1} > \\epsilon_{2}$ 이다.)",
    options: [
      "$\\epsilon_{1}$ 방향",
      "$\\epsilon_{2}$ 방향",
      "경계면의 수평 방향",
      "힘이 작용하지 않는다"
    ],
    answer: 2,
    explanation: "유전체 경계면에 수직으로 전계가 작용할 때, 힘은 유전율이 큰 쪽에서 작은 쪽($\\epsilon_{2}$ 방향)으로 작용합니다.",
    image: "https://example.com/images/2022-2-04.png"
  },
  {
    id: 5,
    question: "정전용량이 $20[\\mu F]$ 인 공기의 평행판 커패시터에 $0.1[C]$ 의 전하량을 충전하였다. 두 평행판 사이에 비유전율이 10인 유전체를 채웠을 때 유전체 표면에 나타나는 분극 전하량 $[C]$ 은?",
    options: [
      "0.009",
      "0.01",
      "0.09",
      "0.1"
    ],
    answer: 3,
    explanation: "분극전하량 $Q' = (1 - \\frac{1}{\\epsilon_{s}})Q = (1 - \\frac{1}{10}) \\times 0.1 = 0.09[C]$ 입니다.",
    image: null
  },
  {
    id: 6,
    question: "유전율이 $\\epsilon_{1}, \\epsilon_{2}$ 인 두 유전체가 경계를 이루어 평행하게 접하고 있는 경우 유전율이 $\\epsilon_{1}$ 인 영역에 전하 $Q$ 가 존재할 때 이 전하와 유전체 사이에 작용하는 힘에 대한 설명으로 옳은 것은?",
    options: [
      "$\\epsilon_{1} > \\epsilon_{2}$ 인 경우 반발력이 작용한다.",
      "$\\epsilon_{1} > \\epsilon_{2}$ 인 경우 흡인력이 작용한다.",
      "$\\epsilon_{1}$ 과 $\\epsilon_{2}$ 에 상관없이 반발력이 작용한다.",
      "$\\epsilon_{1}$ 과 $\\epsilon_{2}$ 에 상관없이 흡인력이 작용한다."
    ],
    answer: 1,
    explanation: "영상전하 $Q' = \\frac{\\epsilon_{1}-\\epsilon_{2}}{\\epsilon_{1}+\\epsilon_{2}}Q$ 이므로 $\\epsilon_{1} > \\epsilon_{2}$ 이면 같은 부호의 전하가 유기되어 반발력이 작용합니다.",
    image: null
  },
  {
    id: 7,
    question: "단면적이 균일한 환상철심에 권수 100회인 A코일과 권수 400회인 B코일이 있을 때 A코일의 자기 인덕턴스가 $4[H]$ 라면 두 코일의 상호 인덕턴스는 몇 $[H]$ 인가? (단, 누설자속은 0이다.)",
    options: [
      "4",
      "8",
      "12",
      "16"
    ],
    answer: 4,
    explanation: "$M = \\frac{N_{B}}{N_{A}}L_{A} = \\frac{400}{100} \\times 4 = 16 [H]$ 입니다.",
    image: null
  },
  {
    id: 8,
    question: "평균 자로의 길이가 $10[cm]$, 평균 단면적이 $2[cm^{2}]$ 인 환상 솔레노이드의 자기 인덕턴스를 $5.4[mH]$ 정도로 하고자 한다. 이때 필요한 코일의 권선수는 약 몇 회인가? (단, 철심의 비투자율은 15000이다.)",
    options: [
      "6",
      "12",
      "24",
      "29"
    ],
    answer: 2,
    explanation: "$N = \\sqrt{\\frac{Ll}{\\mu_{0}\\mu_{s}S}} = \\sqrt{\\frac{5.4 \\times 10^{-3} \\times 0.1}{4\\pi \\times 10^{-7} \\times 15000 \\times 2 \\times 10^{-4}}} \\approx 12$ 회입니다.",
    image: null
  },
  {
    id: 9,
    question: "투자율이 $\\mu[H/m]$, 단면적이 $S[m^{2}]$, 길이가 $l[m]$ 인 자성체에 권선을 N회 감아서 $I[A]$ 의 전류를 흘렸을 때 이 자성체의 단면적 $S[m^{2}]$ 를 통과하는 자속 $[Wb]$ 은?",
    options: [
      "$\\mu \\frac{I}{Nl}S$",
      "$\\frac{NI}{\\mu l}S$",
      "$\\frac{NI}{\\mu S}l$",
      "$\\mu \\frac{NI}{l}S$"
    ],
    answer: 4,
    explanation: "자속 $\\phi = \\frac{F}{R_{m}} = \\frac{NI}{l / \\mu S} = \\frac{\\mu SNI}{l} [Wb]$ 입니다.",
    image: null
  },
  {
    id: 10,
    question: "커패시터의 유전체 내에 흐르는 변위전류밀도 $i_{d}[A/m^{2}]$ 는? (단, $S$는 면적, $D$는 전속밀도이다.)",
    options: [
      "$\\frac{\\partial D}{\\partial t}$",
      "$\\frac{\\partial q}{\\partial t}$",
      "$S \\frac{\\partial D}{\\partial t}$",
      "$\\frac{1}{S} \\frac{\\partial D}{\\partial t}$"
    ],
    answer: 1,
    explanation: "변위전류밀도 $i_{d} = \\frac{\\partial D}{\\partial t}$ 입니다.",
    image: "https://example.com/images/2022-2-10.png"
  },
  {
    id: 11,
    question: "진공 중에서 점 $(1, 3)[m]$ 의 위치에 $-2 \\times 10^{-9}[C]$ 의 점전하가 있을 때 점 $(2, 1)[m]$ 에 있는 $1[C]$ 의 점전하에 작용하는 힘은 몇 $[N]$ 인가? (단, $\\hat{x}, \\hat{y}$ 는 단위벡터이다.)",
    options: [
      "$-\\frac{18}{5\\sqrt{5}}\\hat{x} + \\frac{36}{5\\sqrt{5}}\\hat{y}$",
      "$-\\frac{36}{5\\sqrt{5}}\\hat{x} + \\frac{18}{5\\sqrt{5}}\\hat{y}$",
      "$-\\frac{36}{5\\sqrt{5}}\\hat{x} - \\frac{18}{5\\sqrt{5}}\\hat{y}$",
      "$\\frac{18}{5\\sqrt{5}}\\hat{x} + \\frac{36}{5\\sqrt{5}}\\hat{y}$"
    ],
    answer: 1,
    explanation: "벡터 $r = (2-1)\\hat{x} + (1-3)\\hat{y} = \\hat{x} - 2\\hat{y}$ 이고 $|r| = \\sqrt{5}$ 입니다. 쿨롱의 법칙을 적용하면 정답이 도출됩니다.",
    image: null
  },
  {
    id: 12,
    question: "정전용량이 $C_{0}[F]$ 인 평행판 공기 커패시터의 두 극판 사이에 극판과 평행하게 절반을 비유전율이 $\\epsilon_{r}$ 인 유전체로 채우면 커패시터의 정전용량 $[F]$ 은?",
    options: [
      "$\\frac{C_{0}}{2(1 + \\frac{1}{\\epsilon_{r}})}$",
      "$\\frac{C_{0}}{1 + \\frac{1}{\\epsilon_{r}}}$",
      "$\\frac{2C_{0}}{1 + \\frac{1}{\\epsilon_{r}}}$",
      "$\\frac{4C_{0}}{1 + \\frac{1}{\\epsilon_{r}}}$"
    ],
    answer: 3,
    explanation: "두 콘덴서가 직렬로 연결된 구조이므로 합성 정전용량 $C = \\frac{2C_{0}}{1 + \\frac{1}{\\epsilon_{r}}}$ 입니다.",
    image: null
  },
  {
    id: 13,
    question: "반지름 $a[m]$ 인 구도체 1과 안쪽 반지름 $b[m]$, 바깥쪽 반지름 $c[m]$ 인 구도체 2가 동심으로 있다. 이 도체계에서 전위계수 $P_{11}$ 은?",
    options: [
      "$\\frac{1}{4\\pi\\epsilon a}$",
      "$\\frac{1}{4\\pi\\epsilon}(\\frac{1}{a} - \\frac{1}{b})$",
      "$\\frac{1}{4\\pi\\epsilon}(\\frac{1}{b} - \\frac{1}{c})$",
      "$\\frac{1}{4\\pi\\epsilon}(\\frac{1}{a} - \\frac{1}{b} + \\frac{1}{c})$"
    ],
    answer: 4,
    explanation: "내구에 단위전하를 주었을 때 내구의 전위 $V_{1} = P_{11} = \\frac{1}{4\\pi\\epsilon}(\\frac{1}{a} - \\frac{1}{b} + \\frac{1}{c})$ 입니다.",
    image: "https://example.com/images/2022-2-13.png"
  },
  {
    id: 14,
    question: "평행한 무한장 직선의 두 도선에 $I[A]$, $4I[A]$ 인 전류가 각각 흐른다. 두 도선 사이 점 P에서의 자계의 세기가 0이라면 $\\frac{a}{b}$ 는?",
    options: [
      "1",
      "2",
      "$\\frac{1}{2}$",
      "$\\frac{1}{4}$"
    ],
    answer: 4,
    explanation: "자계의 세기가 같아야 하므로 $\\frac{I}{2\\pi a} = \\frac{4I}{2\\pi b}$ 에서 $\\frac{a}{b} = \\frac{1}{4}$ 입니다.",
    image: "https://example.com/images/2022-2-14.png"
  },
  {
    id: 15,
    question: "자계의 세기를 나타내는 단위가 아닌 것은?",
    options: [
      "$A/m$",
      "$N/Wb$",
      "$(H \\cdot A)/m^{2}$",
      "$Wb/(H \\cdot m)$"
    ],
    answer: 3,
    explanation: "자계의 세기 단위는 $A/m, N/Wb, Wb/(H \\cdot m)$ 등이 사용되나 $(H \\cdot A)/m^{2}$ 는 해당되지 않습니다.",
    image: null
  },
  {
    id: 16,
    question: "내압 및 정전용량이 각각 $1000V-2\\mu F, 700V-3\\mu F, 600V-4\\mu F, 300V-8\\mu F$ 인 4개의 커패시터를 직렬 연결 시 가장 먼저 절연 파괴되는 것은?",
    options: [
      "$1000V-2\\mu F$",
      "$600V-4\\mu F$",
      "$700V-3\\mu F$",
      "$300V-8\\mu F$"
    ],
    answer: 1,
    explanation: "직렬 시 전하량($Q=CV$)이 가장 작은 콘덴서부터 전압이 많이 걸려 먼저 파괴됩니다. $Q_{1} = 2 \\times 10^{-3}C$ 로 가장 작습니다.",
    image: null
  },
  {
    id: 17,
    question: "내구 반지름 $a=5[cm]$, 외구 반지름 $b=10[cm]$ 인 공기 동심구형 커패시터의 정전용량은 약 몇 $[pF]$ 인가?",
    options: [
      "11.1",
      "22.2",
      "33.3",
      "44.4"
    ],
    answer: 1,
    explanation: "$C = 4\\pi\\epsilon_{0} \\frac{ab}{b-a} = \\frac{1}{9 \\times 10^{9}} \\times \\frac{0.05 \\times 0.1}{0.05} \\approx 11.1 [pF]$ 입니다.",
    image: null
  },
  {
    id: 18,
    question: "반지름 2[m], 권수 120회 원형코일 중심 자계의 세기를 $30[AT/m]$ 로 하려면 흐르는 전류 $[A]$ 는?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 1,
    explanation: "$H = \\frac{NI}{2a}$ 에서 $I = \\frac{2aH}{N} = \\frac{2 \\times 2 \\times 30}{120} = 1 [A]$ 입니다.",
    image: null
  },
  {
    id: 19,
    question: "구좌표계에서 $\\nabla^{2}r$ 의 값은 얼마인가? (단, $r = \\sqrt{x^{2} + y^{2} + z^{2}}$ 이다.)",
    options: [
      "$\\frac{1}{r}$",
      "$\\frac{2}{r}$",
      "$r$",
      "$2r$"
    ],
    answer: 2,
    explanation: "라플라시안 계산 시 $\\nabla^{2}r = \\frac{2}{r}$ 이 도출됩니다.",
    image: null
  },
  {
    id: 20,
    question: "자성체의 종류에 대한 설명으로 옳은 것은?",
    options: [
      "$\\chi_{m} > 0$ 이면 역자성체이다.",
      "$\\chi_{m} < 0$ 이면 상자성체이다.",
      "$\\mu_{r} > 1$ 이면 비자성체이다.",
      "$\\mu_{r} < 1$ 이면 역자성체이다."
    ],
    answer: 4,
    explanation: "비투자율 $\\mu_{r} < 1$ (자화율 $\\chi_{m} < 0$) 인 물질을 역(반)자성체라 합니다.",
    image: null
  },
  {
    id: 21,
    question: "피뢰기의 충격방전 개시전압은 무엇으로 표시하는가?",
    options: [
      "직류전압의 크기",
      "충격파의 평균치",
      "충격파의 최대치",
      "충격파의 실효치"
    ],
    answer: 3,
    explanation: "피뢰기에 충격전압이 인가되어 방전을 시작할 때의 최고 전압값은 충격파의 최대치로 나타냅니다.",
    image: null
  },
  {
    id: 22,
    question: "전력용 콘덴서에 비해 동기조상기의 이점으로 옳은 것은?",
    options: [
      "소음이 적다.",
      "진상전류 이외에 지상전류를 취할 수 있다.",
      "전력손실이 적다.",
      "유지보수가 쉽다."
    ],
    answer: 2,
    explanation: "동기조상기는 진상과 지상 양용으로 무효전력을 연속적으로 조정할 수 있다는 장점이 있습니다.",
    image: null
  },
  {
    id: 23,
    question: "밸런서의 설치가 가장 필요한 배전방식은?",
    options: [
      "단상 2선식",
      "단상 3선식",
      "3상 3선식",
      "3상 4선식"
    ],
    answer: 2,
    explanation: "단상 3선식에서 부하 불평형에 의한 전압 불평형을 방지하기 위해 저압 밸런서를 설치합니다.",
    image: null
  },
  {
    id: 24,
    question: "단락보호방식에 관한 설명으로 틀린 것은?",
    options: [
      "방사상 선로에서 전원이 양단에 있을 경우 방향 단락 계전기와 과전류 계전기를 조합한다.",
      "전원이 1단에만 있는 방사상 선로의 고장 전류는 발전소로부터 방사상으로만 흐른다.",
      "환상 선로에서 전원이 두 군데 이상 있는 경우 방향 거리 계전기를 사용한다.",
      "환상 선로에서 전원이 1단에만 있을 경우 선택 단락 계전기를 사용한다."
    ],
    answer: 4,
    explanation: "전원이 1단인 환상 선로에서는 방향 단락 계전기를 주로 사용하며 선택 단락 계전기는 병렬 2회선 선로에 적합합니다.",
    image: null
  },
  {
    id: 25,
    question: "부하전류가 흐르는 전로는 개폐할 수 없으나 기기의 점검이나 수리를 위하여 회로를 분리하는 데 사용하는 것은?",
    options: [
      "차단기",
      "단로기",
      "전력용 퓨즈",
      "부하 개폐기"
    ],
    answer: 2,
    explanation: "단로기(DS)는 소호 장치가 없어 부하전류 차단은 불가능하지만 점검 시 회로 분리용으로 사용됩니다.",
    image: null
  },
  {
    id: 26,
    question: "정전용량 $0.01[\\mu F/km]$, 길이 $173.2[km]$, 선간전압 $60[kV]$, 주파수 $60[Hz]$ 인 3상 송전선로의 충전전류는 약 몇 $[A]$ 인가?",
    options: [
      "16.3",
      "12.5",
      "22.6",
      "37.2"
    ],
    answer: 3,
    explanation: "$I_{c} = 2\\pi f C l \\frac{V}{\\sqrt{3}} = 2\\pi \\times 60 \\times 0.01 \\times 10^{-6} \\times 173.2 \\times \\frac{60000}{\\sqrt{3}} \\approx 22.6 [A]$ 입니다.",
    image: null
  },
  {
    id: 27,
    question: "전력계통의 안정도 종류에 해당하지 않는 것은?",
    options: [
      "정태 안정도",
      "상태 안정도",
      "과도 안정도",
      "동태 안정도"
    ],
    answer: 2,
    explanation: "전력계통 안정도는 정태, 동태, 과도 안정도로 구분됩니다.",
    image: null
  },
  {
    id: 28,
    question: "보호계전기의 반한시·정한시 특성은?",
    options: [
      "동작전류가 커질수록 동작시간이 짧게 되는 특성",
      "최소 동작전류 이상 시 즉시 동작하는 특성",
      "동작전류 크기에 관계없이 일정한 시간에 동작하는 특성",
      "동작전류가 적을 때는 반한시, 어떤 전류 이상이면 정한시로 동작하는 특성"
    ],
    answer: 4,
    explanation: "반한시·정한시 특성은 동작전류가 작을 때는 반비례하다가 일정 수준 이상에서 시간 고정되는 특성입니다.",
    image: "https://example.com/images/2022-2-28.png"
  },
  {
    id: 29,
    question: "배전선로의 역률개선에 따른 효과로 적합하지 않은 것은?",
    options: [
      "선로의 전력손실 경감",
      "선로의 전압강하 감소",
      "전원측 설비의 이용률 향상",
      "선로 절연의 비용 절감"
    ],
    answer: 4,
    explanation: "역률 개선은 손실과 전압강하를 줄이지만 선로 자체의 절연 비용과는 직접적인 관련이 없습니다.",
    image: null
  },
  {
    id: 30,
    question: "저압뱅킹 배전방식에서 캐스케이딩현상을 방지하기 위하여 설치하는 것으로 알맞은 것은?",
    options: [
      "구분퓨즈",
      "리클로저",
      "섹셔널라이저",
      "구분개폐기"
    ],
    answer: 1,
    explanation: "캐스케이딩(고장 확대) 방지를 위해 인접 변압기 연락선 중간에 구분 퓨즈를 설치합니다.",
    image: null
  },
  {
    id: 31,
    question: "승압기에 의하여 전압 $V_{e}$ 에서 $V_{h}$ 로 승압할 때, 자기용량 W인 단상 승압기가 공급할 수 있는 부하용량은?",
    options: [
      "$\\frac{V_{h}}{e} \\times W$",
      "$\\frac{V_{e}}{e} \\times W$",
      "$\\frac{V_{e}}{V_{h}-V_{e}} \\times W$",
      "$\\frac{V_{h}-V_{e}}{V_{e}} \\times W$"
    ],
    answer: 1,
    explanation: "부하용량 $P = \\frac{V_{h}}{V_{h}-V_{e}}W = \\frac{V_{h}}{e}W$ 입니다.",
    image: null
  },
  {
    id: 32,
    question: "배기가스의 여열을 이용해서 보일러 급수를 예열함으로써 연료 소비량을 줄이는 장치는?",
    options: [
      "과열기",
      "공기 예열기",
      "절탄기",
      "재열기"
    ],
    answer: 3,
    explanation: "연소 후 배기가스 폐열로 급수를 가열하는 장치는 절탄기(Economizer)입니다.",
    image: null
  },
  {
    id: 33,
    question: "직렬콘덴서를 선로에 삽입할 때의 이점이 아닌 것은?",
    options: [
      "선로의 인덕턴스를 보상한다.",
      "수전단의 전압강하를 줄인다.",
      "정태안정도를 증가시킨다.",
      "송전단의 역률을 개선한다."
    ],
    answer: 4,
    explanation: "직렬콘덴서는 전압강하와 안정도 개선에 효과가 있으나, 대규모 역률 개선에는 병렬 콘덴서가 사용됩니다.",
    image: null
  },
  {
    id: 34,
    question: "전선의 굵기가 균일하고 부하가 균등하게 분산되어 있는 배전선로의 전력손실은 전체 부하가 선로 말단에 집중되어 있는 경우에 비하여 어느 정도가 되는가?",
    options: [
      "$\\frac{1}{2}$",
      "$\\frac{1}{3}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{4}$"
    ],
    answer: 2,
    explanation: "평등 분포 부하의 전력손실은 말단 집중 부하일 때의 $\\frac{1}{3}$ 배이며, 전압강하는 $\\frac{1}{2}$ 배가 됩니다.",
    image: null
  },
  {
    id: 35,
    question: "송전단 전압 $161[kV]$, 수전단 전압 $154[kV]$, 상차각 $35^{\\circ}$, 리액턴스 $60[\\Omega]$ 일 때 선로 손실을 무시하면 전송전력 $[MW]$ 은 약 얼마인가?",
    options: [
      "356",
      "307",
      "237",
      "161"
    ],
    answer: 3,
    explanation: "전송전력 $P = \\frac{V_{s}V_{r}}{X}\\sin\\delta = \\frac{161 \\times 154}{60}\\sin 35^{\\circ} \\approx 237[MW]$ 입니다.",
    image: null
  },
  {
    id: 36,
    question: "직접접지방식에 대한 설명으로 틀린 것은?",
    options: [
      "1선 지락 사고 시 건전상의 대지 전압이 거의 상승하지 않는다.",
      "계통의 절연수준이 낮아지므로 경제적이다.",
      "변압기의 단절연이 가능하다.",
      "보호계전기가 신속히 동작하므로 과도안정도가 좋다."
    ],
    answer: 4,
    explanation: "직접접지방식은 지락전류가 매우 커서 계통에 큰 충격을 주므로 과도안정도는 나빠집니다.",
    image: null
  },
  {
    id: 37,
    question: "그림과 같이 지지점 A, B, C에는 고저차가 없으며, 경간 AB와 BC 사이에 전선이 가설되어 그 이도가 각각 $12[cm]$ 이다. 지지점 B에서 전선이 떨어져 전선의 이도가 D로 되었다면 D의 길이 $[cm]$ 는? (단, 지지점 B는 A와 C의 중점이며 지지점 B에서 전선이 떨어지기 전, 후의 길이는 같다.)",
    options: [
      "17",
      "24",
      "30",
      "36"
    ],
    answer: 2,
    explanation: "실제 전선 길이 공식 $L = S + \\frac{8D^{2}}{3S}$ 를 이용하면, 경간이 2배가 될 때 이도 $D$ 는 기존 이도 $D_{1}$ 의 2배인 $24[cm]$ 가 됩니다.",
    image: "https://example.com/images/2022-2-37.png"
  },
  {
    id: 38,
    question: "수차의 캐비테이션 방지책으로 틀린 것은?",
    options: [
      "흡출수두를 증대시킨다.",
      "과부하 운전을 가능한 한 피한다.",
      "수차의 비속도를 너무 크게 잡지 않는다.",
      "침식에 강한 금속재료로 러너를 제작한다."
    ],
    answer: 1,
    explanation: "캐비테이션 방지를 위해서는 흡출수두를 너무 높게 잡지 말아야 합니다(흡출수두 감소 필요).",
    image: null
  },
  {
    id: 39,
    question: "1회선 송전선과 변압기의 조합에서 변압기의 여자 어드미턴스를 무시하였을 경우 송수전단의 관계를 나타내는 4단자 정수 $D_{0}$ 는? (단, 송전단변압기 임피던스 $Z_{ts}$, 수전단변압기 임피던스 $Z_{tr}$ 이다.)",
    options: [
      "$D + CZ_{tr}$",
      "$C + DZ_{ts}$",
      "$C + AZ_{ts}$",
      "$CD + CA$"
    ],
    answer: 1,
    explanation: "행렬 계산 결과 전체 4단자 정수 중 $D_{0} = D + CZ_{tr}$ 이 됩니다.",
    image: null
  },
  {
    id: 40,
    question: "송전선로에 매설지선을 설치하는 목적은?",
    options: [
      "철탑 기초의 강도를 보강하기 위하여",
      "직격뢰로부터 송전선을 차폐보호하기 위하여",
      "현수애자 1연의 전압 분담을 균일화하기 위하여",
      "철탑으로부터 송전선로로의 역섬락을 방지하기 위하여"
    ],
    answer: 4,
    explanation: "매설지선은 탑각 접지저항을 낮추어 뇌격 시 철탑 전위 상승에 의한 역섬락을 방지합니다.",
    image: null
  },
  {
    id: 41,
    question: "단상 변압기의 무부하 상태에서 $V_{1}=200\\sin(\\omega t+30^{\\circ})[V]$ 의 전압이 인가되었을 때 $I_{0}=3\\sin(\\omega t+60^{\\circ})+0.7\\sin(3\\omega t+180^{\\circ})[A]$ 의 전류가 흘렀다. 이때 무부하손은 약 몇 $[W]$ 인가?",
    options: [
      "150",
      "259.8",
      "415.2",
      "512"
    ],
    answer: 2,
    explanation: "기본파에 의한 전력만 유효하므로 $P = V_{1}I_{1}\\cos\\theta = \\frac{200}{\\sqrt{2}} \\times \\frac{3}{\\sqrt{2}} \\times \\cos(60^{\\circ}-30^{\\circ}) \\approx 259.8[W]$ 입니다.",
    image: null
  },
  {
    id: 42,
    question: "직류기의 다중 중권 권선법에서 전기자 병렬 회로수 $a$ 와 극수 $P$ 사이의 관계로 옳은 것은? (단, $m$ 은 다중도이다.)",
    options: [
      "$a = 2$",
      "$a = 2m$",
      "$a = P$",
      "$a = mP$"
    ],
    answer: 4,
    explanation: "중권(Parallel winding)에서 병렬 회로수 $a = mP$ 입니다. (파권은 $a = 2m$)",
    image: null
  },
  {
    id: 43,
    question: "단상 직권 정류자 전동기의 전기자 권선과 계자 권선에 대한 설명으로 틀린 것은?",
    options: [
      "계자권선의 권수를 적게 한다.",
      "전기자 권선의 권수를 크게 한다.",
      "변압기 기전력을 적게 하여 역률 저하를 방지한다.",
      "브러시로 단락되는 코일 중의 단락전류를 크게 한다."
    ],
    answer: 4,
    explanation: "정류 개선을 위해 브러시로 단락되는 코일의 단락전류는 작게 제한해야 합니다.",
    image: null
  },
  {
    id: 44,
    question: "전부하시의 단자전압이 무부하시의 단자전압보다 높은 직류발전기는?",
    options: [
      "분권발전기",
      "평복권발전기",
      "과복권발전기",
      "차동복권발전기"
    ],
    answer: 3,
    explanation: "과복권 발전기는 직권 계자 기자력이 커서 부하 시 전압이 무부하 시보다 높아지는 특성을 가집니다.",
    image: "https://example.com/images/2022-2-44.png"
  },
  {
    id: 45,
    question: "슬립 $s_{t}$ 에서 최대 토크를 발생하는 3상 유도전동기에 2차측 한 상의 저항을 $r_{2}$ 라 하면 최대 토크로 기동하기 위해 2차측 외부로부터 가해 주어야 할 저항 $[\\Omega]$ 은?",
    options: [
      "$\\frac{1-s_{t}}{s_{t}}r_{2}$",
      "$\\frac{1+s_{t}}{s_{t}}r_{2}$",
      "$\\frac{r_{2}}{1-s_{t}}$",
      "$\\frac{r_{2}}{s_{t}}$"
    ],
    answer: 1,
    explanation: "비례추이에 의해 기동 시($s=1$) 최대 토크를 얻으려면 $R = r_{2}(\\frac{1-s_{t}}{s_{t}})$ 를 삽입해야 합니다.",
    image: null
  },
  {
    id: 46,
    question: "단상 변압기를 병렬 운전할 경우 부하전류의 분담은?",
    options: [
      "용량에 비례하고 누설 임피던스에 비례",
      "용량에 비례하고 누설 임피던스에 반비례",
      "용량에 반비례하고 누설 리액턴스에 비례",
      "용량에 반비례하고 누설 리액턴스의 제곱에 비례"
    ],
    answer: 2,
    explanation: "변압기 부하 분담 $P_{a} \\propto \\frac{P_{n}}{\\%Z}$ 이므로 용량에 비례하고 %임피던스에 반비례합니다.",
    image: null
  },
  {
    id: 47,
    question: "스텝 모터(step motor)의 장점으로 틀린 것은?",
    options: [
      "회전각과 속도는 펄스 수에 비례한다.",
      "위치제어를 할 때 각도 오차가 적고 누적된다.",
      "가속, 감속이 용이하며 정역전 및 변속이 쉽다.",
      "피드백 없이 오픈 루프로 손쉽게 속도 및 위치제어를 할 수 있다."
    ],
    answer: 2,
    explanation: "스텝 모터는 위치 제어 시 각도 오차가 적고 누적되지 않는 것이 큰 장점입니다.",
    image: null
  },
  {
    id: 48,
    question: "380[V], 60[Hz], 4극, 10[kW]인 3상 유도전동기의 전부하 슬립이 4[%]이다. 전원전압을 10[%] 낮추는 경우 전부하 슬립은 약 몇 [%]인가?",
    options: [
      "3.3",
      "3.6",
      "4.4",
      "4.9"
    ],
    answer: 4,
    explanation: "슬립 $s$ 는 전압의 제곱에 반비례하므로 $s' = 0.04 \\times (\\frac{1}{0.9})^{2} \\approx 0.049 (4.9\\%)$ 가 됩니다.",
    image: null
  },
  {
    id: 49,
    question: "직류 분권전동기에서 정출력 가변속도의 용도에 적합한 속도제어법은?",
    options: [
      "계자제어",
      "저항제어",
      "전압제어",
      "극수제어"
    ],
    answer: 1,
    explanation: "계자제어법은 정출력 제어 특성을 가지며 속도 제어 범위는 좁지만 효율이 좋습니다.",
    image: null
  },
  {
    id: 50,
    question: "직류 분권전동기의 전기자전류가 $10[A]$ 일 때 $5[Nm]$ 의 토크가 발생하였다. 이 전동기의 계자의 자속이 $80[\\%]$ 로 감소되고, 전기자전류가 $12[A]$ 로 되면 토크는 약 몇 $[Nm]$ 인가?",
    options: [
      "3.9",
      "4.3",
      "4.8",
      "5.2"
    ],
    answer: 3,
    explanation: "토크 $T = k\\phi I_{a}$ 에서 $T' = 5 \\times 0.8 \\times (12/10) = 4.8[Nm]$ 입니다.",
    image: null
  },
  {
    id: 51,
    question: "3상 권선형 유도전동기의 기동 시 2차측 저항을 2배로 하면 최대토크 값은 어떻게 되는가?",
    options: [
      "3배로 된다.",
      "2배로 된다.",
      "1/2로 된다.",
      "변하지 않는다."
    ],
    answer: 4,
    explanation: "유도전동기에서 최대 토크의 크기는 2차 저항의 크기와 무관합니다(비례추이의 원리).",
    image: null
  },
  {
    id: 52,
    question: "권수비가 $a$ 인 단상변압기 3대를 1차 $\\Delta$, 2차 $Y$ 로 결선하여 2차측 단자전압 $V[V]$, 전류 $I[A]$ 라 할 때, 1차측의 단자전압 및 선전류는?",
    options: [
      "$\\frac{aV}{\\sqrt{3}}[V], \\frac{\\sqrt{3}I}{a}[A]$",
      "$\\frac{\\sqrt{3}V}{a}[V], \\frac{aI}{\\sqrt{3}}[A]$",
      "$\\sqrt{3}aV[V], \\frac{I}{\\sqrt{3}a}[A]$",
      "$\\frac{V}{\\sqrt{3}a}[V], \\sqrt{3}aI[A]$"
    ],
    answer: 1,
    explanation: "$\Delta-Y$ 결선에서 전압비는 $V_{1}/V_{2} = a/\\sqrt{3}$ 이므로 $V_{1} = aV/\\sqrt{3}$ 이고, 전류비는 역수 관계에 의해 $I_{1} = \\sqrt{3}I/a$ 가 됩니다.",
    image: "https://example.com/images/2022-2-52.png"
  },
  {
    id: 53,
    question: "3상 전원전압 $220[V]$ 를 3상 반파정류회로의 각 상에 SCR을 사용하여 위상각을 $60^{\\circ}$ 로 제어할 때 순 저항부하에서의 출력전압 평균값은 약 몇 $[V]$ 인가?",
    options: [
      "128.65",
      "148.55",
      "257.3",
      "297.1"
    ],
    answer: 2,
    explanation: "3상 반파 정류 출력전압 $E_{d} = 1.17V_{ph} \\cos\\alpha = 1.17 \\times (220/\\sqrt{3}) \\times \\cos 60^{\\circ} \\approx 148.55[V]$ 입니다.",
    image: null
  },
  {
    id: 54,
    question: "유도자형 동기발전기의 설명으로 옳은 것은?",
    options: [
      "전기자만 고정되어 있다.",
      "계자극만 고정되어 있다.",
      "회전자가 없는 특수 발전기이다.",
      "계자극과 전기자가 고정되어 있다."
    ],
    answer: 4,
    explanation: "유도자형 발전기는 계자극과 전기자를 모두 고정하고 그 사이에 유도자(회전자)를 회전시켜 고주파를 발생시킵니다.",
    image: null
  },
  {
    id: 55,
    question: "3상 동기발전기의 여자전류 $10[A]$ 에 대한 단자전압이 $1000\\sqrt{3}[V]$, 3상 단락전류가 $50[A]$ 인 경우 동기임피던스는 몇 $[\\Omega]$ 인가?",
    options: [
      "15",
      "11",
      "20",
      "34"
    ],
    answer: 3,
    explanation: "동기임피던스 $Z_{s} = \\frac{V_{n}/\\sqrt{3}}{I_{s}} = \\frac{1000\\sqrt{3}/\\sqrt{3}}{50} = 20[\\Omega]$ 입니다.",
    image: null
  },
  {
    id: 56,
    question: "동기발전기에서 무부하 정격전압 시 여자전류 $I_{f0}$, 정격부하 정격전압 시 여자전류 $I_{f1}$, 3상 단락 정격전류 시 여자전류 $I_{fs}$ 라 할 때 단락비 $K$ 는?",
    options: [
      "$K = \\frac{I_{fs}}{I_{f0}}$",
      "$K = \\frac{I_{f0}}{I_{fs}}$",
      "$K = \\frac{I_{fs}}{I_{f1}}$",
      "$K = \\frac{I_{f1}}{I_{fs}}$"
    ],
    answer: 2,
    explanation: "단락비 $K = \\frac{I_{f0}}{I_{fs}}$ 로 정의됩니다.",
    image: null
  },
  {
    id: 57,
    question: "변압기의 습기를 제거하여 절연을 향상시키는 건조법이 아닌 것은?",
    options: [
      "열풍법",
      "단락법",
      "진공법",
      "건식법"
    ],
    answer: 4,
    explanation: "건식법은 변압기 냉각 방식의 한 종류이며 건조법에는 해당하지 않습니다.",
    image: null
  },
  {
    id: 58,
    question: "기본파 유효자속이 약 몇 $[Wb]$ 인가? (단, 극수 20, 60Hz, 3상 동기발전기, 한 상당 권수 150, 선간전압 3300V, 권선계수 0.9024 적용)",
    options: [
      "0.004",
      "0.062",
      "0.053",
      "0.07"
    ],
    answer: 3,
    explanation: "유기기전력 $E = 4.44 K_{w} f W \\phi$ 에서 $\\phi = \\frac{3300/\\sqrt{3}}{4.44 \\times 0.9024 \\times 60 \\times 150} \\approx 0.053[Wb]$ 입니다.",
    image: null
  },
  {
    id: 59,
    question: "2방향성 3단자 사이리스터는 어느 것인가?",
    options: [
      "SCR",
      "SSS",
      "SCS",
      "TRIAC"
    ],
    answer: 4,
    explanation: "TRIAC은 양방향성 3단자 소자로 교류 전력 제어에 사용됩니다.",
    image: null
  },
  {
    id: 60,
    question: "일반적인 3상 유도전동기에 대한 설명으로 틀린 것은?",
    options: [
      "불평형 전압으로 운전하는 경우 전류는 증가하나 토크는 감소한다.",
      "원선도 작성을 위해서는 무부하시험, 구속시험, 1차 권선저항 측정을 하여야 한다.",
      "농형은 권선형에 비해 구조가 견고하며 대형전동기로 널리 사용된다.",
      "회전자의 3선 중 1선이 단선되면 동기속도의 50%에서 가속되지 못하는 현상을 게르게스현상이라 한다."
    ],
    answer: 3,
    explanation: "농형은 구조가 견고하여 중소형에 주로 쓰이며, 대형 유도전동기는 주로 권선형이 사용됩니다.",
    image: null
  },
  {
    id: 61,
    question: "그림의 블록선도에서 전달함수 $C(s)/R(s)$ 는?",
    options: [
      "$\\frac{10}{9}$",
      "$\\frac{10}{13}$",
      "$\\frac{12}{9}$",
      "$\\frac{12}{13}$"
    ],
    answer: 2,
    explanation: "메이슨의 정리에 의해 $G(s) = \\frac{1 \\times 2 \\times (2+3)}{1 - (-2-6-4)} = \\frac{10}{13}$ 입니다.",
    image: "https://example.com/images/2022-2-61.png"
  },
  {
    id: 62,
    question: "전달함수가 $G(s) = \\frac{1}{0.1s(0.01s+1)}$ 인 시스템에서 $\\omega=0.1[rad/s]$ 일 때의 이득 $[dB]$ 과 위상각은?",
    options: [
      "$40[dB], -90^{\\circ}$",
      "$-40[dB], 90^{\\circ}$",
      "$40[dB], 90^{\\circ}$",
      "$-40[dB], -180^{\\circ}$"
    ],
    answer: 1,
    explanation: "이득 $20\\log|G(j0.1)| = 20\\log(100) = 40[dB]$ 이며, 위상각은 $-90^{\\circ} - \\tan^{-1}(0.001) \\approx -90^{\\circ}$ 입니다.",
    image: null
  },
  {
    id: 63,
    question: "논리식 $Y = (A+B)(\\overline{A}+B)$ 와 등가인 것은?",
    options: [
      "$Y = A$",
      "$Y = B$",
      "$Y = \\overline{A}$",
      "$Y = \\overline{B}$"
    ],
    answer: 2,
    explanation: "분배법칙 적용 시 $Y = A\\overline{A} + AB + B\\overline{A} + BB = 0 + B(A+\\overline{A}) + B = B+B = B$ 입니다.",
    image: null
  },
  {
    id: 64,
    question: "개루프 전달함수 $G(s)H(s) = \\frac{K}{s(s+3)(s+8)}$ 에 대한 근궤적의 분리점은 약 얼마인가?",
    options: [
      "-0.93",
      "-5.74",
      "-6.0",
      "-1.33"
    ],
    answer: 4,
    explanation: "$\\frac{dK}{ds} = -(3s^{2} + 22s + 24) = 0$ 의 해 중 근궤적 존재 구간($-3 < s < 0$)에 있는 값은 $-1.33$ 입니다.",
    image: null
  },
  {
    id: 65,
    question: "$F(z) = \\frac{(1-e^{-aT})z}{(z-1)(z-e^{-aT})}$ 의 역 $Z$ 변환은?",
    options: [
      "$t \\cdot e^{-at}$",
      "$a^{t} \\cdot e^{-at}$",
      "$1 + e^{-at}$",
      "$1 - e^{-at}$"
    ],
    answer: 4,
    explanation: "부분분수 전개 후 역변환 시 단위 계단 함수와 지수 함수의 차인 $1 - e^{-at}$ 가 됩니다.",
    image: null
  },
  {
    id: 66,
    question: "기본 제어요소인 비례요소의 전달함수는? (단, $K$ 는 상수이다.)",
    options: [
      "$G(s) = K$",
      "$G(s) = Ks$",
      "$G(s) = \\frac{K}{s}$",
      "$G(s) = \\frac{K}{s+K}$"
    ],
    answer: 1,
    explanation: "비례요소는 출력이 입력에 단순히 비례하므로 $G(s) = K$ 입니다.",
    image: null
  },
  {
    id: 67,
    question: "상태방정식 $\\dot{x} = \\begin{bmatrix} 0 & 1 \\\\ -3 & -4 \\end{bmatrix}x$ 시스템의 상태천이행렬 $\\Phi(t)$ 는?",
    options: [
      "$\\begin{bmatrix} 1.5e^{-t}-0.5e^{-3t} & -1.5e^{-t}+1.5e^{-3t} \\\\ 0.5e^{-t}-0.5e^{-3t} & -0.5e^{-t}+1.5e^{-3t} \\end{bmatrix}$",
      "$\\begin{bmatrix} 1.5e^{-t}-0.5e^{-3t} & 0.5e^{-t}-0.5e^{-3t} \\\\ -1.5e^{-t}+1.5e^{-3t} & -0.5e^{-t}+1.5e^{-3t} \\end{bmatrix}$",
      "$\\begin{bmatrix} 1.5e^{-t}-0.5e^{-4t} & 0.5e^{-t}-0.5e^{-4t} \\\\ -1.5e^{-t}+1.5e^{-4t} & -0.5e^{-t}+1.5e^{-4t} \\end{bmatrix}$",
      "$\\begin{bmatrix} 1.5e^{-t}-0.5e^{-4t} & -1.5e^{-t}+1.5e^{-4t} \\\\ 0.5e^{-t}-0.5e^{-4t} & -0.5e^{-t}+1.5e^{-4t} \\end{bmatrix}$"
    ],
    answer: 2,
    explanation: "$\\Phi(t) = \\mathcal{L}^{-1}\\{[sI-A]^{-1}\\}$ 계산 결과 2번 행렬이 도출됩니다.",
    image: null
  },
  {
    id: 68,
    question: "전달함수가 $T(s) = \\frac{1}{4s^{2}+s+1}$ 인 시스템의 고유주파수 $\\omega_{n}$ 과 감쇠율 $\\zeta$ 는?",
    options: [
      "$\\omega_{n}=0.25, \\zeta=1.0$",
      "$\\omega_{n}=0.5, \\zeta=0.25$",
      "$\\omega_{n}=0.5, \\zeta=0.5$",
      "$\\omega_{n}=1.0, \\zeta=0.5$"
    ],
    answer: 2,
    explanation: "$\\omega_{n}^{2} = 1/4 \\implies \\omega_{n}=0.5$ 이며, $2\\zeta\\omega_{n} = 1/4 \\implies \\zeta=0.25$ 입니다.",
    image: null
  },
  {
    id: 69,
    question: "그림의 신호흐름선도를 미분방정식으로 표현한 것으로 옳은 것은?",
    options: [
      "$\\frac{d^{2}c(t)}{dt^{2}}+3\\frac{dc(t)}{dt}+2c(t)=r(t)$",
      "$\\frac{d^{2}c(t)}{dt^{2}}+2\\frac{dc(t)}{dt}+3c(t)=r(t)$",
      "$\\frac{d^{2}c(t)}{dt^{2}}-3\\frac{dc(t)}{dt}-2c(t)=r(t)$",
      "$\\frac{d^{2}c(t)}{dt^{2}}-2\\frac{dc(t)}{dt}-3c(t)=r(t)$"
    ],
    answer: 1,
    explanation: "전달함수 $G(s) = \\frac{1/s^{2}}{1-(-3/s-2/s^{2})} = \\frac{1}{s^{2}+3s+2}$ 를 미분방정식으로 변환한 결과입니다.",
    image: "https://example.com/images/2022-2-69.png"
  },
  {
    id: 70,
    question: "특성방정식이 $s^{4}+s^{3}-3s^{2}-s+2=0$ 일 때, $s$ 평면의 오른쪽에 위치하는 근은 몇 개인가?",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    answer: 3,
    explanation: "루드 판별법 적용 시 제1열 부호 변화가 2회($1 \to -2$, $-2 \to 2$ 계열) 발생하므로 우반평면 근은 2개입니다.",
    image: null
  },
  {
    id: 71,
    question: "회로에서 $6[\\Omega]$ 저항에 흐르는 전류 $[A]$ 는?",
    options: [
      "2.5",
      "5",
      "7.5",
      "10"
    ],
    answer: 2,
    explanation: "중첩의 원리를 이용하여 7A 전류원 기여분 2.33A와 8A 전류원 기여분 2.67A를 더하면 5A가 됩니다.",
    image: "https://example.com/images/2022-2-71.png"
  },
  {
    id: 72,
    question: "$RL$ 직렬회로에서 시정수가 $0.03[s]$, 저항이 $14.7[\\Omega]$ 일 때 이 회로의 인덕턴스 $[mH]$ 는?",
    options: [
      "441",
      "362",
      "17.6",
      "2.53"
    ],
    answer: 1,
    explanation: "$L = \\tau R = 0.03 \\times 14.7 = 0.441[H] = 441[mH]$ 입니다.",
    image: null
  },
  {
    id: 73,
    question: "불평형 3상 교류회로에서 $I_{a}=7.28\\angle15.95^{\\circ}, I_{b}=12.81\\angle-128.66^{\\circ}, I_{c}=7.21\\angle123.69^{\\circ}$ 일 때 역상분 전류 $[A]$ 는?",
    options: [
      "$8.95\\angle-1.14^{\\circ}$",
      "$8.95\\angle 1.14^{\\circ}$",
      "$2.51\\angle-96.55^{\\circ}$",
      "$2.51\\angle 96.55^{\\circ}$"
    ],
    answer: 4,
    explanation: "$I_{2} = \\frac{1}{3}(I_{a} + a^{2}I_{b} + aI_{c})$ 계산 시 약 $2.51\\angle 96.55^{\\circ}$ 가 도출됩니다.",
    image: null
  },
  {
    id: 74,
    question: "그림과 같은 T형 4단자 회로의 임피던스 파라미터 $Z_{22}$ 는?",
    options: [
      "$Z_{3}$",
      "$Z_{1}+Z_{2}$",
      "$Z_{1}+Z_{3}$",
      "$Z_{2}+Z_{3}$"
    ],
    answer: 4,
    explanation: "$Z_{22}$ 는 2번 포트에서 본 구동점 임피던스로 $Z_{2} + Z_{3}$ 가 됩니다.",
    image: "https://example.com/images/2022-2-74.png"
  },
  {
    id: 75,
    question: "그림과 같은 부하에 선간전압 $V_{ab}=100\\angle 30^{\\circ}[V]$ 인 평형 3상 전압을 가했을 때 선전류 $I_{a}[A]$ 는?",
    options: [
      "$\\frac{100}{\\sqrt{3}}(\\frac{1}{R}+j3\\omega C)$",
      "$100(\\frac{1}{R}+j\\sqrt{3}\\omega C)$",
      "$\\frac{100}{\\sqrt{3}}(\\frac{1}{R}+j\\omega C)$",
      "$100(\\frac{1}{R}+j\\omega C)$"
    ],
    answer: 1,
    explanation: "$\Delta$ 부하를 $Y$ 로 변환하여 해석하면 한 상의 어드미턴스 $Y_{p} = 1/R + j3\\omega C$ 이며, $I_{a} = V_{p}Y_{p}$ 입니다.",
    image: "https://example.com/images/2022-2-75.png"
  },
  {
    id: 76,
    question: "분포정수 선로에서 무왜형 조건($RC=LG$)을 만족하기 위한 단위 길이당 컨덕턴스 $[\\mho/km]$ 는? (단, $R=0.5, L=1\\mu, C=6\\mu$)",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 3,
    explanation: "$G = RC/L = (0.5 \\times 6 \\times 10^{-6}) / 10^{-6} = 3[\\mho/km]$ 입니다.",
    image: null
  },
  {
    id: 77,
    question: "그림 (a)의 $Y$ 결선을 (b)의 $\\Delta$ 결선으로 변환 시 $R_{ab}, R_{bc}, R_{ca}$ 는? (단, $R_{a}=2, R_{b}=3, R_{c}=4$)",
    options: [
      "$R_{ab}=6/9, R_{bc}=12/9, R_{ca}=8/9$",
      "$R_{ab}=1/3, R_{bc}=1, R_{ca}=1/2$",
      "$R_{ab}=13/2, R_{bc}=13, R_{ca}=26/3$",
      "$R_{ab}=11/3, R_{bc}=11, R_{ca}=11/2$"
    ],
    answer: 3,
    explanation: "$Y \\to \\Delta$ 변환 공식 $R_{ab} = \\frac{R_{a}R_{b}+R_{b}R_{c}+R_{c}R_{a}}{R_{c}}$ 등을 적용한 결과입니다.",
    image: "https://example.com/images/2022-2-77.png"
  },
  {
    id: 78,
    question: "비정현파 전압 $v(t)=200\\sin 100\\pi t+80\\sin(300\\pi t-\\pi/2)$ 와 전류 $i(t)=1/5\\sin(100\\pi t-\\pi/3)+1/10\\sin(300\\pi t-\\pi/4)$ 에 의한 평균전력은 약 몇 $[W]$ 인가?",
    options: [
      "6.414",
      "8.586",
      "12.828",
      "24.212"
    ],
    answer: 3,
    explanation: "$P = V_{1}I_{1}\\cos\\theta_{1} + V_{3}I_{3}\\cos\\theta_{3} = (100 \\times 0.1 \\times 0.5) + (40 \\times 0.05 \\times 0.707) \\approx 12.828[W]$ 입니다.",
    image: null
  },
  {
    id: 79,
    question: "회로에서 전체 부하에 대한 복소 전력은 약 몇 $[VA]$ 인가? (단, $I_{1}=2e^{-j\\pi/6}, I_{2}=5e^{j\\pi/6}, I_{3}=5, Z_{3}=1$ 이며 전류공액을 취한다.)",
    options: [
      "55.3-j7.5",
      "55.3+j7.5",
      "45-j26",
      "45+j26"
    ],
    answer: 1,
    explanation: "합성전류 $I = 11.06+j1.5[A]$, 전압 $V = I_{3}Z_{3} = 5[V]$. 복소전력 $P_{a} = VI^{*} = 5(11.06-j1.5) = 55.3-j7.5[VA]$ 입니다.",
    image: "https://example.com/images/2022-2-79.png"
  },
  {
    id: 80,
    question: "역라플라스 변환 $f(t) = \\mathcal{L}^{-1}[\\frac{s^{2}+3s+2}{s^{2}+2s+5}]$ 의 결과는?",
    options: [
      "$\\delta(t)+e^{-t}(\\cos 2t-\\sin 2t)$",
      "$\\delta(t)+e^{-t}(\\cos 2t-2\\sin 2t)$",
      "$\\delta(t)+e^{-t}(\\cos 2t+2\\sin 2t)$",
      "$\\delta(t)+e^{-t}(\\cos 2t+\\sin 2t)$"
    ],
    answer: 2,
    explanation: "함수 분리 후 역변환 시 임펄스 함수 $\\delta(t)$ 와 감쇠 사인/코사인 항의 조합으로 나타납니다.",
    image: null
  },
  {
    id: 81,
    question: "풍력터빈의 피뢰설비 시설기준에 대한 설명으로 틀린 것은?",
    options: [
      "피뢰설비 기능저하로 인해 다른 기능에 영향을 미치지 않을 것",
      "내부 계측 센서용 케이블은 금속관 등을 사용하여 뇌유도 과전압으로부터 보호할 것",
      "인하도선은 뇌격전류를 안전하게 흘릴 수 있는 충분한 굵기여야 하며 가능한 직선으로 시설할 것",
      "수뢰부를 풍력터빈 중앙부분에 배치하되 발열에 용손되지 않도록 할 것"
    ],
    answer: 4,
    explanation: "수뢰부는 풍력터빈의 선단 부분 및 가장자리 부분에 배치해야 합니다.",
    image: null
  },
  {
    id: 82,
    question: "물에 젖은 상태에서 전기를 사용하는 장소(욕실 등)에 콘센트 시설 시 인체감전보호용 누전차단기의 정격감도전류는 몇 $[mA]$ 이하인가?",
    options: [
      "5",
      "10",
      "15",
      "30"
    ],
    answer: 3,
    explanation: "물기가 있는 장소에서는 정격감도전류 $15[mA]$ 이하, 동작시간 $0.03$ 초 이하의 누전차단기를 사용해야 합니다.",
    image: null
  },
  {
    id: 83,
    question: "강관으로 구성된 철탑의 갑종 풍압하중은 수직 투영면적 $1[m^{2}]$ 에 대해 몇 $[Pa]$ 인가? (단, 단주는 제외한다.)",
    options: [
      "1255",
      "1412",
      "1627",
      "2157"
    ],
    answer: 1,
    explanation: "KEC 규정에 따라 강관 철탑의 갑종 풍압하중은 $1255[Pa]$ 입니다.",
    image: null
  },
  {
    id: 84,
    question: "교류식 전기철도용 전차선로는 기설 가공약전류 전선로에 대하여 무엇에 의한 통신상의 장해가 생기지 않도록 시설해야 하는가?",
    options: [
      "정전작용",
      "유도작용",
      "가열작용",
      "산화작용"
    ],
    answer: 2,
    explanation: "전차선로는 약전류 전선로에 유도작용에 의한 장해를 주지 않도록 시설해야 합니다.",
    image: null
  },
  {
    id: 85,
    question: "한국전기설비규정(KEC) 용어 정의에서 감전에 대한 보호 등 안전을 위해 제공되는 도체는?",
    options: [
      "접지도체",
      "보호도체",
      "수평도체",
      "접지극도체"
    ],
    answer: 2,
    explanation: "보호도체(PE)는 안전을 목적으로 설치되는 도체입니다.",
    image: null
  },
  {
    id: 86,
    question: "주택 전기저장장치의 축전지에 접속하는 부하 측 옥내배선을 케이블 배선 및 방호장치 시설 시 대지전압은 직류 몇 $[V]$ 까지 적용 가능한가? (단, 자동 차단 장치 시설 시)",
    options: [
      "150",
      "300",
      "400",
      "600"
    ],
    answer: 4,
    explanation: "조건을 충족하는 경우 주택 옥내전로의 대지전압을 직류 $600[V]$ 까지 상향할 수 있습니다.",
    image: null
  },
  {
    id: 87,
    question: "전압의 구분에 대한 설명으로 옳은 것은?",
    options: [
      "직류에서의 저압은 $1000[V]$ 이하의 전압을 말한다.",
      "교류에서의 저압은 $1500[V]$ 이하의 전압을 말한다.",
      "직류에서의 고압은 $3500[V]$ 초과 $7000[V]$ 이하를 말한다.",
      "특고압은 $7000[V]$ 를 초과하는 전압을 말한다."
    ],
    answer: 4,
    explanation: "특고압은 $7kV$ 를 초과하는 전압입니다. (직류 저압 $1.5kV$ 이하, 교류 저압 $1kV$ 이하)",
    image: null
  },
  {
    id: 88,
    question: "고압 가공전선로의 가공지선으로 나경동선을 사용할 때의 최소 지름은 몇 $[mm]$ 이상인가?",
    options: [
      "3.2",
      "3.5",
      "4.0",
      "5.0"
    ],
    answer: 3,
    explanation: "고압 가공지선은 인장강도 $5.26[kN]$ 이상 또는 지름 $4[mm]$ 이상의 나경동선을 사용합니다.",
    image: null
  },
  {
    id: 89,
    question: "특고압용 변압기 내부 고장 시 자동차단장치 또는 경보장치를 시설해야 하는 최소 뱅크용량 $[kVA]$ 은?",
    options: [
      "1000",
      "3000",
      "5000",
      "10000"
    ],
    answer: 3,
    explanation: "$5,000[kVA]$ 이상 $10,000[kVA]$ 미만 시 차단 또는 경보장치를, $10,000[kVA]$ 이상 시 반드시 자동차단장치를 시설합니다.",
    image: null
  },
  {
    id: 90,
    question: "$22.9[kV]$ 가공전선이 철도를 횡단하는 경우 레일면상의 최소 높이는 몇 $[m]$ 인가?",
    options: [
      "5",
      "5.5",
      "6",
      "6.5"
    ],
    answer: 4,
    explanation: "철도 또는 궤도 횡단 시에는 전압에 관계없이 기본 $6.5[m]$ 이상을 유지해야 합니다.",
    image: null
  },
  {
    id: 91,
    question: "합성수지관 및 부속품의 시설에 대한 설명으로 틀린 것은?",
    options: [
      "관의 지지점 간의 거리는 $1.5[m]$ 이하로 할 것",
      "합성수지제 가요전선관 상호 간은 직접 접속할 것",
      "접착제 사용 시 삽입 깊이는 바깥지름의 $0.8$ 배 이상으로 할 것",
      "접착제 미사용 시 삽입 깊이는 바깥지름의 $1.2$ 배 이상으로 할 것"
    ],
    answer: 2,
    explanation: "합성수지제 (가요)전선관 상호 간은 직접 접속하지 말아야 합니다.",
    image: null
  },
  {
    id: 92,
    question: "가공전선로 지지물의 가공 통신선이 철도 또는 궤도를 횡단하는 경우 레일면상 높이는 몇 $[m]$ 이상인가?",
    options: [
      "3",
      "3.5",
      "5",
      "6.5"
    ],
    answer: 4,
    explanation: "통신선도 철도 횡단 시에는 $6.5[m]$ 이상의 높이를 확보해야 합니다.",
    image: null
  },
  {
    id: 93,
    question: "전력보안통신설비의 조가선은 단면적 몇 $[mm^{2}]$ 이상의 아연도강연선을 사용해야 하는가?",
    options: [
      "16",
      "38",
      "50",
      "55"
    ],
    answer: 2,
    explanation: "조가선은 단면적 $38[mm^{2}]$ 이상의 아연도강연선을 사용해야 합니다.",
    image: null
  },
  {
    id: 94,
    question: "1종 금속제 가요전선관 시설 시 삽입 또는 첨가해야 하는 나연동선의 최소 단면적 $[mm^{2}]$ 은?",
    options: [
      "0.75",
      "1.5",
      "2.5",
      "4"
    ],
    answer: 3,
    explanation: "1종 금속제 가요전선관에는 단면적 $2.5[mm^{2}]$ 이상의 나연동선을 전체 길이에 걸쳐 시설해야 합니다.",
    image: null
  },
  {
    id: 95,
    question: "$154[kV]$ 전선로를 제1종 특고압 보안공사로 시설할 때 사용되는 경동연선의 최소 단면적 $[mm^{2}]$ 은?",
    options: [
      "100",
      "125",
      "150",
      "200"
    ],
    answer: 3,
    explanation: "$100kV$ 이상 $300kV$ 미만 보안공사 시 $150[mm^{2}]$ 이상의 경동연선을 사용합니다.",
    image: null
  },
  {
    id: 96,
    question: "$400[V]$ 이하 저압 옥측전선로를 애자공사로 시설 시 전선 상호 간 이격거리는 최소 몇 $[m]$ 인가? (단, 젖지 않는 장소)",
    options: [
      "0.025",
      "0.045",
      "0.06",
      "0.12"
    ],
    answer: 3,
    explanation: "저압 옥측 애자공사 시 전선 상호 간 간격은 $0.06[m]$ (6cm) 이상이어야 합니다.",
    image: null
  },
  {
    id: 97,
    question: "지중전선로가 지중약전류전선로에 통신상 장해를 주는 원인으로 옳은 것은?",
    options: [
      "충전전류 또는 표피작용",
      "충전전류 또는 유도작용",
      "누설전류 또는 표피작용",
      "누설전류 또는 유도작용"
    ],
    answer: 4,
    explanation: "지중 전선로의 통신 장해는 주로 누설전류 또는 유도작용에 의해 발생합니다.",
    image: null
  },
  {
    id: 98,
    question: "$10.5[kV]$ 초과 교류 회전기의 절연내력 시험전압은 최대사용전압의 몇 배인가?",
    options: [
      "1",
      "1.1",
      "1.25",
      "1.5"
    ],
    answer: 3,
    explanation: "$7kV$ 를 초과하는 회전기는 최대사용전압의 $1.25$ 배 전압으로 시험합니다.",
    image: null
  },
  {
    id: 99,
    question: "폭연성 분진 장소에 시설하는 저압 옥내배선 공사방법으로 옳은 것은?",
    options: [
      "금속관공사",
      "애자사용공사",
      "합성수지관공사",
      "캡타이어 케이블공사"
    ],
    answer: 1,
    explanation: "폭연성 분진 장소는 금속관공사 또는 케이블공사(캡타이어 제외)만 가능합니다.",
    image: null
  },
  {
    id: 100,
    question: "정격전류 $16[A]$ 인 범용 퓨즈(gG)의 용단전류는 정격전류의 몇 배인가?",
    options: [
      "1.25",
      "1.5",
      "1.6",
      "1.9"
    ],
    answer: 3,
    explanation: "$16A$ 이상 범용 퓨즈의 용단전류 배수는 $1.6$ 배입니다.",
    image: null
  }
];

export default questions;