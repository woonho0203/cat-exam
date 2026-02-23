const questions = [
  {
    id: 1,
    question: "면적이 매우 넓은 두 개의 도체 판을 $d[m]$ 간격으로 수평하게 평행 배치하고, 이 평행 도체 판 사이에 놓인 전자가 정지하고 있기 위해서 그 도체 판 사이에 가하여야 할 전위차 $[V]$는? (단, $g$는 중력 가속도이고, $m$은 전자의 질량이고, $e$는 전자의 전하량이다.)",
    options: [
      "mged",
      "$\\frac{ed}{mg}$",
      "$\\frac{mgd}{e}$",
      "$\\frac{mge}{d}$"
    ],
    answer: 3,
    explanation: "전자의 정지 조건은 전기력($F_e = eE$)과 중력($F_g = mg$)이 평형을 이룰 때입니다. $eE = mg$에서 $E = \\frac{mg}{e}$이며, 전위차 $V = Ed = \\frac{mgd}{e}[V]$가 됩니다.",
    image: null
  },
  {
    id: 2,
    question: "전위함수 $V = x^2 + y^2 [V]$일 때 점 $P(3, 4) [m]$에서의 등전위선의 반지름은 몇 $[m]$이며, 전기력선 방정식은 어떻게 되는가?",
    options: [
      "등전위선의 반지름: 3, 전기력선 방정식: $y = \\frac{3}{4}x$",
      "등전위선의 반지름: 4, 전기력선 방정식: $y = \\frac{4}{3}x$",
      "등전위선의 반지름: 5, 전기력선 방정식: $x = \\frac{4}{3}y$",
      "등전위선의 반지름: 5, 전기력선 방정식: $x = \\frac{3}{4}y$"
    ],
    answer: 4,
    explanation: "등전위선의 반지름 $r = \\sqrt{x^2 + y^2} = \\sqrt{3^2 + 4^2} = 5[m]$입니다. 전기력선 방정식은 $\\frac{dx}{E_x} = \\frac{dy}{E_y}$를 이용하며, $E = -\\nabla V = -2xi - 2yj$이므로 $\\frac{dx}{-2x} = \\frac{dy}{-2y} \\Rightarrow \\ln x = \\ln y + C$. 점(3, 4)를 대입하면 $x = \\frac{3}{4}y$가 도출됩니다.",
    image: null
  },
  {
    id: 3,
    question: "자기회로에서 자기저항의 크기에 대한 설명으로 옳은 것은?",
    options: [
      "자기회로의 길이에 비례",
      "자기회로의 단면적에 비례",
      "자성체의 비투자율에 비례",
      "자성체의 비투자율의 제곱에 비례"
    ],
    answer: 1,
    explanation: "자기저항 $R_m = \\frac{l}{\\mu S}$이므로 자기회로의 길이($l$)에 비례하고 단면적($S$)과 투자율($\\mu$)에 반비례합니다.",
    image: null
  },
  {
    id: 4,
    question: "10[mm]의 지름을 가진 동선에 50[A]의 전류가 흐르고 있을 때 단위시간 동안 동선의 단면을 통과하는 전자의 수는 약 몇 개인가?",
    options: [
      "$7.85 \\times 10^{16}$",
      "$20.45 \\times 10^{15}$",
      "$31.21 \\times 10^{19}$",
      "$50 \\times 10^{19}$"
    ],
    answer: 3,
    explanation: "단위시간(1초) 동안 흐른 전하량 $Q = It = 50 \\times 1 = 50[C]$입니다. 전자의 개수 $N = \\frac{Q}{e} = \\frac{50}{1.602 \\times 10^{-19}} \\approx 31.21 \\times 10^{19}$개입니다.",
    image: null
  },
  {
    id: 5,
    question: "자기 인덕턴스와 상호 인덕턴스와의 관계에서 결합계수 $k$의 범위는?",
    options: [
      "$0 \\le k \\le \\frac{1}{2}$",
      "$0 \\le k \\le 1$",
      "$1 \\le k \\le 2$",
      "$1 \\le k \\le 10$"
    ],
    answer: 2,
    explanation: "결합계수 $k$는 누설 자속이 없는 경우 $k=1$, 자기적 결합이 없는 경우 $k=0$이므로 $0 \\le k \\le 1$의 범위를 갖습니다.",
    image: null
  },
  {
    id: 6,
    question: "면적이 $S[m^2]$이고 극간의 거리가 $d[m]$인 평행판 콘덴서에 비유전율이 $\\epsilon_r$인 유전체를 채울 때 정전용량 $[F]$은? (단, $\\epsilon_0$는 진공의 유전율이다.)",
    options: [
      "$\\frac{2\\epsilon_0 \\epsilon_r S}{d}$",
      "$\\frac{\\epsilon_0 \\epsilon_r S}{\\pi d}$",
      "$\\frac{\\epsilon_0 \\epsilon_r S}{d}$",
      "$\\frac{2\\pi \\epsilon_0 \\epsilon_r S}{d}$"
    ],
    answer: 3,
    explanation: "평행판 콘덴서의 정전용량 기본식 $C = \\frac{\\epsilon S}{d} = \\frac{\\epsilon_0 \\epsilon_r S}{d}$입니다.",
    image: null
  },
  {
    id: 7,
    question: "반자성체의 비투자율 $(\\mu_r)$ 값의 범위는?",
    options: [
      "$\\mu_r = 1$",
      "$\\mu_r < 1$",
      "$\\mu_r > 1$",
      "$\\mu_r = 0$"
    ],
    answer: 2,
    explanation: "자성체의 분류: 강자성체($\\mu_r \\gg 1$), 상자성체($\\mu_r > 1$), 반자성체($\\mu_r < 1$)입니다.",
    image: null
  },
  {
    id: 8,
    question: "반지름 $a[m]$인 무한장 원통형 도체에 전류가 균일하게 흐를 때 도체 내부에서 자계의 세기 $[AT/m]$는?",
    options: [
      "원통 중심축으로부터 거리에 비례한다.",
      "원통 중심축으로부터 거리에 반비례한다.",
      "원통 중심축으로부터 거리의 제곱에 비례한다.",
      "원통 중심축으로부터 거리의 제곱에 반비례한다."
    ],
    answer: 1,
    explanation: "원통형 도체 내부($r < a$) 자계의 세기 $H = \\frac{Ir}{2\\pi a^2}$이므로 중심축으로부터의 거리 $r$에 비례합니다.",
    image: null
  },
  {
    id: 9,
    question: "정전계 해석에 관한 설명으로 틀린 것은?",
    options: [
      "포아송 방정식은 가우스 정리의 미분형으로 구할 수 있다.",
      "도체 표면에서의 전계의 세기는 표면에 대해 법선 방향을 갖는다.",
      "라플라스 방정식은 전극이나 도체의 형태에 관계없이 체적전하밀도가 0인 모든 점에서 $\\nabla^2 V = 0$을 만족한다.",
      "라플라스 방정식은 비선형 방정식이다."
    ],
    answer: 4,
    explanation: "라플라시언($\\nabla^2$)은 선형 스칼라 연산자이므로 라플라스 방정식 및 포아송 방정식은 모두 선형 방정식입니다.",
    image: null
  },
  {
    id: 10,
    question: "비유전율이 4인 유전체의 분극률은 진공의 유전율의 몇 배인가?",
    options: [
      "1",
      "3",
      "9",
      "12"
    ],
    answer: 2,
    explanation: "분극률 $\\chi = \\epsilon_0(\\epsilon_r - 1) = \\epsilon_0(4 - 1) = 3\\epsilon_0$이므로 진공 유전율의 3배가 됩니다.",
    image: null
  },
  {
    id: 11,
    question: "공기 중에 있는 무한히 긴 직선 도체에 10[A]의 전류가 흐르고 있을 때 도선으로부터 2[m] 떨어진 점에서의 자속밀도는 몇 $[Wb/m^2]$인가?",
    options: [
      "$10^{-5}$",
      "$0.5 \\times 10^{-6}$",
      "$10^{-6}$",
      "$2 \\times 10^{-6}$"
    ],
    answer: 3,
    explanation: "자계 $H = \\frac{I}{2\\pi d}$이고 자속밀도 $B = \\mu_0 H = \\frac{4\\pi \\times 10^{-7} \\times 10}{2\\pi \\times 2} = 10^{-6} [Wb/m^2]$입니다.",
    image: null
  },
  {
    id: 12,
    question: "그림에서 $N=1000$회, $l=100[cm]$, $S=10[cm^2]$인 환상 철심의 자기 회로에 전류 $I=10[A]$를 흘렸을 때 축적되는 자계 에너지는 몇 $[J]$인가? (단, 비투자율 $\\mu_r = 100$이다.)",
    options: [
      "$2\\pi \\times 10^{-3}$",
      "$2\\pi \\times 10^{-2}$",
      "$2\\pi \\times 10^{-1}$",
      "$2\\pi$"
    ],
    answer: 4,
    explanation: "인덕턴스 $L = \\frac{\\mu_0 \\mu_r S N^2}{l} = \\frac{4\\pi \\times 10^{-7} \\times 100 \\times 10 \\times 10^{-4} \\times 1000^2}{1} = 4\\pi \\times 10^{-2} [H]$. 축적 에너지 $W = \\frac{1}{2}LI^2 = \\frac{1}{2} \\times 4\\pi \\times 10^{-2} \\times 10^2 = 2\\pi [J]$.",
    image: null
  },
  {
    id: 13,
    question: "20[℃]에서 저항의 온도계수가 0.002인 니크롬선의 저항이 100[Ω]이다. 온도가 60[℃]로 상승되면 저항은 몇 [Ω]이 되겠는가?",
    options: [
      "108",
      "112",
      "115",
      "120"
    ],
    answer: 1,
    explanation: "$R_2 = R_1[1 + \\alpha_1(t_2 - t_1)] = 100[1 + 0.002(60 - 20)] = 108[Ω]$입니다.",
    image: null
  },
  {
    id: 14,
    question: "전계 및 자계의 세기가 각각 $E[V/m]$, $H[AT/m]$일 때, 포인팅 벡터 $P[W/m^2]$의 표현으로 옳은 것은?",
    options: [
      "$P = \\frac{1}{2} E \\times H$",
      "$P = E \\text{ rot } H$",
      "$P = E \\times H$",
      "$P = H \\text{ rot } E$"
    ],
    answer: 3,
    explanation: "포인팅 벡터는 단위 시간당 단위 면적을 통과하는 에너지로 $P = E \\times H [W/m^2]$로 표현됩니다.",
    image: null
  },
  {
    id: 15,
    question: "자기유도계수 $L$의 계산 방법이 아닌 것은? (단, $N$: 권수, $\\Phi$: 자속 $[Wb]$, $I$: 전류 $[A]$, $A$: 벡터 퍼텐셜 $[Wb/m]$, $i$: 전류밀도 $[A/m^2]$, $B$: 자속밀도 $[Wb/m^2]$, $H$: 자계의 세기 $[AT/m]$이다.)",
    options: [
      "$L = \\frac{N\\Phi}{I}$",
      "$L = \\frac{\\int_v A \\cdot i \\, dv}{I^2}$",
      "$L = \\frac{\\int_v B \\cdot H \\, dv}{I^2}$",
      "$L = \\frac{\\int_v A \\cdot i \\, dv}{I}$"
    ],
    answer: 4,
    explanation: "에너지 식 $W = \\frac{1}{2}LI^2 = \\frac{1}{2}\\int(B \\cdot H)dv = \\frac{1}{2}\\int(A \\cdot i)dv$에서 $L$을 구하면 분모에 $I^2$이 있어야 합니다.",
    image: null
  },
  {
    id: 16,
    question: "평등자계 내에 전자가 수직으로 입사하였을 때 전자의 운동에 대한 설명으로 옳은 것은?",
    options: [
      "원심력은 전자속도에 반비례한다.",
      "구심력은 자계의 세기에 반비례한다.",
      "원운동을 하고, 반지름은 자계의 세기에 비례한다.",
      "원운동을 하고, 반지름은 전자의 회전속도에 비례한다."
    ],
    answer: 4,
    explanation: "구심력($evB$)과 원심력($mv^2/r$)이 평형을 이뤄 원운동을 하며, 반지름 $r = \\frac{mv}{eB}$이므로 속도 $v$에 비례하고 자계 $B(\\mu H)$에 반비례합니다.",
    image: null
  },
  {
    id: 17,
    question: "진공 중 3[m] 간격으로 두 개의 평행한 무한평판 도체에 각각 $+4[C/m^2]$, $-4[C/m^2]$의 전하를 주었을 때, 두 도체 간의 전위차는 약 몇 $[V]$인가?",
    options: [
      "$1.5 \\times 10^{11}$",
      "$1.5 \\times 10^{12}$",
      "$1.36 \\times 10^{11}$",
      "$1.36 \\times 10^{12}$"
    ],
    answer: 4,
    explanation: "전계 $E = \\frac{\\sigma}{\\epsilon_0} = \\frac{4}{8.854 \\times 10^{-12}} \\approx 4.52 \\times 10^{11} [V/m]$. 전위차 $V = Ed = 4.52 \\times 10^{11} \\times 3 \\approx 1.36 \\times 10^{12} [V]$입니다.",
    image: null
  },
  {
    id: 18,
    question: "자속밀도 $B[Wb/m^2]$의 평등 자계 내에서 길이 $l[m]$인 도체 $ab$가 속도 $v[m/s]$로 그림과 같이 도선을 따라서 자계와 수직으로 이동할 때, 도체 $ab$에 의해 유기된 기전력의 크기 $[V]$와 폐회로 $abcd$ 내 저항 $R$에 흐르는 전류의 방향은? (단, 폐회로 $abcd$ 내 도선 및 도체의 저항은 무시한다.)",
    options: [
      "$e = Blv$, 전류 방향: $c \\rightarrow d$",
      "$e = Blv$, 전류 방향: $d \\rightarrow c$",
      "$e = Blv^2$, 전류 방향: $c \\rightarrow d$",
      "$e = Blv^2$, 전류 방향: $d \\rightarrow c$"
    ],
    answer: 1,
    explanation: "유기기전력 $e = Blv \\sin \\theta$에서 $\\theta=90^\\circ$이므로 $e = Blv$입니다. 플레밍의 오른손 법칙을 적용하면 전류는 $a \\rightarrow b$로 흐르며, 폐회로를 따라 $b \\rightarrow c \\rightarrow d \\rightarrow a$ 순으로 흐르므로 저항 $R$에서는 $c \\rightarrow d$ 방향이 됩니다.",
    image: null
  },
  {
    id: 19,
    question: "유전율이 $\\epsilon_1, \\epsilon_2 [F/m]$인 유전체 경계면에 단위 면적당 작용하는 힘의 크기는 몇 $[N/m^2]$인가? (단, 전계가 경계면에 수직인 경우이며, 두 유전체에서의 전속밀도는 $D_1 = D_2 = D [C/m^2]$이다.)",
    options: [
      "$2(\\frac{1}{\\epsilon_1} - \\frac{1}{\\epsilon_2})D^2$",
      "$\\frac{1}{2}(\\frac{1}{\\epsilon_1} + \\frac{1}{\\epsilon_2})D^2$",
      "$2(\\frac{1}{\\epsilon_1} + \\frac{1}{\\epsilon_2})D^2$",
      "$\\frac{1}{2}(\\frac{1}{\\epsilon_2} - \\frac{1}{\\epsilon_1})D^2$"
    ],
    answer: 4,
    explanation: "전계가 수직인 경우 맥스웰 응력 $f = \\frac{1}{2}(\\frac{1}{\\epsilon_2} - \\frac{1}{\\epsilon_1})D^2$가 작용합니다.",
    image: null
  },
  {
    id: 20,
    question: "그림과 같이 내부 도체구 $A$에 $+Q[C]$, 외부 도체구 $B$에 $-Q[C]$를 부여한 동심 도체구 사이의 정전용량 $[F]$는?",
    options: [
      "$4\\pi\\epsilon_0(b-a)$",
      "$\\frac{4\\pi\\epsilon_0 ab}{b-a}$",
      "$\\frac{ab}{4\pi\\epsilon_0(b-a)}$",
      "$4\\pi\\epsilon_0(\\frac{1}{a} - \\frac{1}{b})$"
    ],
    answer: 2,
    explanation: "동심구 정전용량 공식 $C = \\frac{4\\pi\\epsilon_0}{\\frac{1}{a} - \\frac{1}{b}} = \\frac{4\\pi\\epsilon_0 ab}{b-a}$입니다.",
    image: null
  },
  {
    id: 21,
    question: "중성점 직접접지방식의 발전기가 있다. 1선 지락 사고 시 지락전류는? (단, $Z_1, Z_2, Z_0$는 각각 정상, 역상, 영상 임피던스이며, $E_a$는 지락된 상의 무부하 기전력이다.)",
    options: [
      "$\\frac{E_a}{Z_0 + Z_1 + Z_2}$",
      "$\\frac{Z_1 E_a}{Z_0 + Z_1 + Z_2}$",
      "$\\frac{3E_a}{Z_0 + Z_1 + Z_2}$",
      "$\\frac{Z_0 E_a}{Z_0 + Z_1 + Z_2}$"
    ],
    answer: 3,
    explanation: "1선 지락 시 지락전류 $I_g = 3I_0$이며, $I_0 = \\frac{E_a}{Z_1 + Z_2 + Z_0}$이므로 $I_g = \\frac{3E_a}{Z_1 + Z_2 + Z_0}$입니다.",
    image: null
  },
  {
    id: 22,
    question: "화력발전소에서 절탄기의 용도는?",
    options: [
      "보일러에 공급되는 급수를 예열한다.",
      "포화증기를 과열한다.",
      "연소용 공기를 예열한다.",
      "석탄을 건조한다."
    ],
    answer: 1,
    explanation: "절탄기(Economizer)는 보일러 연도의 배기 가스 잔열을 이용하여 보일러 급수를 예열함으로써 열효율을 높이는 장치입니다.",
    image: null
  },
  {
    id: 23,
    question: "3상 배전선로의 말단에 역률 60[%](늦음), 60[kW]의 평형 3상 부하가 있다. 부하점에 부하와 병렬로 전력용 콘덴서를 접속하여 선로손실을 최소로 하고자 할 때 콘덴서 용량 [kVA]은? (단, 부하단의 전압은 일정하다.)",
    options: [
      "40",
      "60",
      "80",
      "100"
    ],
    answer: 3,
    explanation: "선로손실을 최소로 하려면 역률을 1로 개선해야 하므로 부하의 무효전력만큼 콘덴서가 필요합니다. $Q_c = P \\tan \\theta = 60 \\times \\frac{\\sqrt{1 - 0.6^2}}{0.6} = 60 \\times \\frac{0.8}{0.6} = 80 [kVA]$입니다.",
    image: null
  },
  {
    id: 24,
    question: "다음 중 송전계통의 절연협조에 있어서 절연레벨이 가장 낮은 기기는?",
    options: [
      "피뢰기",
      "단로기",
      "변압기",
      "차단기"
    ],
    answer: 1,
    explanation: "절연협조 시 가장 낮은 절연 계급을 갖는 것은 피뢰기입니다. (순서: 피뢰기 < 변압기 < 차단기/단로기 < 선로애자)",
    image: null
  },
  {
    id: 25,
    question: "송배전 선로에서 선택지락계전기(SGR)의 용도는?",
    options: [
      "다회선에서 접지 고장 회선의 선택",
      "단일 회선에서 접지 전류의 대소 선택",
      "단일 회선에서 접지 전류의 방향 선택",
      "단일 회선에서 접지 사고의 지속 시간 선택"
    ],
    answer: 1,
    explanation: "선택지락계전기(Selective Ground Relay)는 병행 2회선 이상의 선로에서 지락 사고 발생 시 사고 회선만을 선택하여 차단하기 위해 사용합니다.",
    image: null
  },
  {
    id: 26,
    question: "고장 즉시 동작하는 특성을 갖는 계전기는?",
    options: [
      "순시 계전기",
      "정한시 계전기",
      "반한시 계전기",
      "반한시성 정한시 계전기"
    ],
    answer: 1,
    explanation: "순시 계전기는 최소 동작 전류 이상의 고장 전류가 흐르면 시간 지체 없이 즉시 동작하는 특성을 가집니다.",
    image: null
  },
  {
    id: 27,
    question: "정격전압 7.2[kV], 정격차단용량 100[MVA]인 3상 차단기의 정격 차단전류는 약 몇 [kA]인가?",
    options: [
      "14",
      "26",
      "37",
      "8"
    ],
    answer: 4,
    explanation: "차단용량 $P_s = \\sqrt{3} V_n I_s$에서 $I_s = \\frac{100 \\times 10^6}{\\sqrt{3} \\times 7.2 \\times 10^3} \\approx 8,018[A] \\approx 8[kA]$입니다.",
    image: null
  },
  {
    id: 28,
    question: "30000[kW]의 전력을 51[km] 떨어진 지점에 송전하는데 필요한 전압은 약 몇 [kV]인가? (단, Still의 식에 의하여 산정한다.)",
    options: [
      "22",
      "33",
      "66",
      "100"
    ],
    answer: 4,
    explanation: "Still의 식: $V = 5.5 \\sqrt{0.6l + \\frac{P}{100}} = 5.5 \\sqrt{0.6 \\times 51 + \\frac{30000}{100}} = 5.5 \\sqrt{30.6 + 300} \\approx 100 [kV]$입니다.",
    image: null
  },
  {
    id: 29,
    question: "댐의 부속설비가 아닌 것은?",
    options: [
      "수로",
      "수조",
      "취수구",
      "흡출관"
    ],
    answer: 4,
    explanation: "흡출관(Draft Tube)은 수차의 출구와 방수로 사이를 연결하여 유효 낙차를 늘리기 위한 수차의 구성 요소입니다.",
    image: null
  },
  {
    id: 30,
    question: "3상 3선식에서 전선 한 가닥에 흐르는 전류는 단상 2선식의 경우의 몇 배가 되는가? (단, 송전전력, 부하역률, 송전거리, 전력손실 및 선간전압이 같다.)",
    options: [
      "$\\frac{1}{\\sqrt{3}}$",
      "$\\frac{2}{3}$",
      "$\\frac{3}{4}$",
      "$\\frac{4}{9}$"
    ],
    answer: 1,
    explanation: "$P_1 = VI_1 \\cos \\theta$, $P_3 = \\sqrt{3} VI_3 \\cos \\theta$에서 $P_1 = P_3$이므로 $I_3 = \\frac{1}{\\sqrt{3}}I_1$입니다.",
    image: null
  },
  {
    id: 31,
    question: "사고, 정전 등의 중대한 영향을 받는 지역에서 정전과 동시에 자동적으로 예비전원용 배전선로로 전환하는 장치는?",
    options: [
      "차단기",
      "리클로저(Recloser)",
      "섹셔널라이저(Sectionalizer)",
      "자동부하 전환개폐기(Auto Load Transfer Switch)"
    ],
    answer: 4,
    explanation: "ALTS는 이중 전원을 확보하여 주전원 정전 시 예비전원으로 자동 전환함으로써 무정전 공급을 가능케 합니다.",
    image: null
  },
  {
    id: 32,
    question: "전선의 표피 효과에 대한 설명으로 알맞은 것은?",
    options: [
      "전선이 굵을수록, 주파수가 높을수록 커진다.",
      "전선이 굵을수록, 주파수가 낮을수록 커진다.",
      "전선이 가늘수록, 주파수가 높을수록 커진다.",
      "전선이 가늘수록, 주파수가 낮을수록 커진다."
    ],
    answer: 1,
    explanation: "표피 효과는 주파수가 높을수록, 전선이 굵을수록, 도전율 및 투자율이 클수록 커집니다.",
    image: null
  },
  {
    id: 33,
    question: "일반회로 정수가 같은 평행 2회선에서 A, B, C, D는 각각 1회선의 경우의 몇 배로 되는가?",
    options: [
      "A: 2배, B: 2배, C: $\\frac{1}{2}$배, D: 1배",
      "A: 1배, B: 2배, C: $\\frac{1}{2}$배, D: 1배",
      "A: 1배, B: $\\frac{1}{2}$배, C: 2배, D: 1배",
      "A: 1배, B: $\\frac{1}{2}$배, C: 2배, D: 2배"
    ],
    answer: 3,
    explanation: "평행 2회선 시 $A'=A, D'=D$로 불변이고, 임피던스 요소인 $B'=B/2$, 어드미턴스 요소인 $C'=2C$가 됩니다.",
    image: null
  },
  {
    id: 34,
    question: "변전소에서 비접지 선로의 접지보호용으로 사용되는 계전기에 영상전류를 공급하는 것은?",
    options: [
      "CT",
      "GPT",
      "ZCT",
      "PT"
    ],
    answer: 3,
    explanation: "영상변류기(ZCT)는 지락 사고 시 흐르는 영상전류를 검출하여 지락계전기에 공급합니다.",
    image: null
  },
  {
    id: 35,
    question: "단로기에 대한 설명으로 틀린 것은?",
    options: [
      "소호장치가 있어 아크를 소멸시킨다.",
      "무부하 및 여자전류의 개폐에 사용된다.",
      "사용회로수에 의해 분류하면 단투형과 쌍투형이 있다.",
      "회로의 분리 또는 계통의 접속 변경 시 사용한다."
    ],
    answer: 1,
    explanation: "단로기(DS)는 소호장치가 없으므로 부하 전류를 차단할 수 없으며 무부하 상태에서만 개폐가 가능합니다.",
    image: null
  },
  {
    id: 36,
    question: "4단자 정수 $A=0.9918+j0.0042$, $B=34.17+j50.38$, $C=(-0.006+j3.247) \\times 10^{-4}$인 송전선로의 송전단에 66[kV]를 인가하고 수전단을 개방하였을 때 수전단 선간전압은 약 몇 [kV]인가?",
    options: [
      "$\\frac{66.55}{\\sqrt{3}}$",
      "62.5",
      "$\\frac{62.5}{\\sqrt{3}}$",
      "66.55"
    ],
    answer: 4,
    explanation: "수전단 개방 시 $I_R=0$이므로 $E_S = AE_R$. $E_R = \\frac{E_S}{A} = \\frac{66/\\sqrt{3}}{0.9918 \\angle \\theta} \\approx \\frac{38.1}{0.9918} \\approx 38.42 [kV]$. 선간전압 $V_R = \\sqrt{3} E_R \\approx 66.55 [kV]$입니다.",
    image: null
  },
  {
    id: 37,
    question: "증기터빈 출력을 $P[kW]$, 증기량을 $W[t/h]$, 초압 및 배기의 증기 엔탈피를 각각 $i_0, i_1 [kcal/kg]$이라 하면 터빈의 효율 $\\eta_T [%]$는?",
    options: [
      "$\\frac{860P \\times 10^3}{W(i_0 - i_1)} \\times 100$",
      "$\\frac{860P}{W(i_0 - i_1) \\times 10^3} \\times 100$",
      "$\\frac{860P \\times 10^3}{W(i_1 - i_0)} \\times 100$",
      "$\\frac{860P}{W(i_1 - i_0) \\times 10^3} \\times 100$"
    ],
    answer: 2,
    explanation: "효율 $\\eta = \\frac{\\text{출력}}{\\text{입력}}$. 출력은 $860P[kcal]$, 입력은 $W[t/h] \\times 10^3 [kg/t] \\times (i_0 - i_1) [kcal/kg]$이므로 2번 식이 맞습니다.",
    image: null
  },
  {
    id: 38,
    question: "송전선로에서 가공지선을 설치하는 목적이 아닌 것은?",
    options: [
      "뇌(雷)의 직격을 받을 경우 송전선 보호",
      "유도뢰에 의한 송전선의 고전위 방지",
      "통신선에 대한 전자유도장해 경감",
      "철탑의 접지저항 경감"
    ],
    answer: 4,
    explanation: "철탑의 접지저항을 경감하기 위해 설치하는 것은 매설지선(Counterpoise)입니다.",
    image: null
  },
  {
    id: 39,
    question: "수전단의 전력원 방정식이 $P_r^2 + (Q_r + 400)^2 = 250000$으로 표현되는 전력계통에서 조상설비 없이 전압을 일정하게 유지하면서 공급할 수 있는 부하전력은? (단, 부하는 무유도성이다.)",
    options: [
      "200",
      "250",
      "300",
      "350"
    ],
    answer: 3,
    explanation: "조상설비가 없고 부하가 무유도성이면 $Q_r = 0$입니다. $P_r^2 + 400^2 = 500^2 \\Rightarrow P_r^2 = 250000 - 160000 = 90000$. 따라서 $P_r = 300$입니다.",
    image: null
  },
  {
    id: 40,
    question: "전력설비의 수용률을 나타낸 것은?",
    options: [
      "$\\frac{\\text{평균전력}}{\\text{설비용량}} \\times 100 [\\%]$",
      "$\\frac{\\text{부하설비용량}}{\\text{평균전력}} \\times 100 [\\%]$",
      "$\\frac{\\text{부하설비용량}}{\\text{최대수용전력}} \\times 100 [\\%]$",
      "$\\frac{\\text{최대수용전력}}{\\text{부하설비용량}} \\times 100 [\\%]$"
    ],
    answer: 4,
    explanation: "수용률이란 총 부하 설비 용량에 대한 최대 수용 전력의 비를 나타낸 것입니다.",
    image: null
  },
  {
    id: 41,
    question: "단상 유도전동기의 기동 시 브러시를 필요로 하는 것은?",
    options: [
      "분상 기동형",
      "반발 기동형",
      "콘덴서 분상 기동형",
      "셰이딩 코일 기동형"
    ],
    answer: 2,
    explanation: "반발 기동형 유도전동기는 기동 시 반발 전동기로 동작하며 브러시 이동으로 제어가 가능합니다. [cite: 514, 515]",
    image: null
  },
  {
    id: 42,
    question: "전원전압이 $100[V]$인 단상 전파정류제어에서 점호각이 $30^{\\circ}$일 때 직류 평균전압은 약 몇 $[V]$인가?",
    options: [
      "54",
      "64",
      "84",
      "94"
    ],
    answer: 3,
    explanation: "$E_{d} = \\frac{\\sqrt{2}E}{\\pi}(1 + \\cos \\alpha) = \\frac{\\sqrt{2} \\times 100}{\\pi}(1 + \\cos 30^{\\circ}) \\approx 84[V]$입니다. [cite: 527]",
    image: null
  },
  {
    id: 43,
    question: "3선 중 2선의 전원 단자를 서로 바꾸어서 결선하면 회전방향이 바뀌는 기기가 아닌 것은?",
    options: [
      "회전변류기",
      "유도전동기",
      "동기전동기",
      "정류자형 주파수 변환기"
    ],
    answer: 4,
    explanation: "정류자형 주파수 변환기의 회전자계 방향은 회전자의 회전 여부나 속도와 관계가 없습니다. [cite: 540, 542]",
    image: null
  },
  {
    id: 44,
    question: "단상 유도전동기의 분상 기동형에 대한 설명으로 틀린 것은?",
    options: [
      "보조권선은 높은 저항과 낮은 리액턴스를 갖는다.",
      "주권선은 비교적 낮은 저항과 높은 리액턴스를 갖는다.",
      "높은 토크를 발생시키려면 보조권선에 병렬로 저항을 삽입한다.",
      "전동기가 기동하여 속도가 어느 정도 상승하면 보조권선을 전원에서 분리해야 한다."
    ],
    answer: 3,
    explanation: "더 높은 기동토크를 발생시키려면 기동(보조)권선 내에 직렬 저항을 접속해야 합니다. [cite: 551]",
    image: null
  },
  {
    id: 45,
    question: "변압기의 $\\%Z$가 커지면 단락전류는 어떻게 변화하는가?",
    options: [
      "커진다.",
      "변동없다.",
      "작아진다.",
      "무한대로 커진다."
    ],
    answer: 3,
    explanation: "단락전류 $I_s = \\frac{100}{\\%Z} I_n$ 이므로 $\\%Z$가 커지면 단락전류는 작아집니다. [cite: 565]",
    image: null
  },
  {
    id: 46,
    question: "정격전압 $6600[V]$인 3상 동기발전기가 정격출력(역률 = 1)으로 운전할 때 전압변동률이 $12[\\%]$이었다. 여자전류와 회전수를 조정하지 않은 상태로 무부하 운전하는 경우 단자전압 $[V]$은?",
    options: [
      "6433",
      "6943",
      "7392",
      "7842"
    ],
    answer: 3,
    explanation: "$V_0 = (1 + \\frac{\\epsilon}{100})V_n = (1 + 0.12) \\times 6600 = 7392[V]$입니다. [cite: 576]",
    image: null
  },
  {
    id: 47,
    question: "계자 권선이 전기자에 병렬로만 연결된 직류기는?",
    options: [
      "분권기",
      "직권기",
      "복권기",
      "타여자기"
    ],
    answer: 1,
    explanation: "분권기는 계자권선과 전기자 권선이 병렬로 연결된 구조입니다. [cite: 587]",
    image: null
  },
  {
    id: 48,
    question: "3상 $20000[kVA]$인 동기발전기가 있다. 이 발전기는 $60[Hz]$일 때는 $200[rpm]$, $50[Hz]$일 때는 약 $167[rpm]$으로 회전한다. 이 동기발전기의 극수는?",
    options: [
      "18극",
      "36극",
      "54극",
      "72극"
    ],
    answer: 2,
    explanation: "극수 $P = \\frac{120f}{N_s} = \\frac{120 \\times 60}{200} = 36$극입니다. [cite: 598]",
    image: null
  },
  {
    id: 49,
    question: "1차 전압 $6600[V]$, 권수비 30인 단상변압기로 전등부하에 $30[A]$를 공급할 때의 입력 $[kW]$은? (단, 변압기의 손실은 무시한다.)",
    options: [
      "4.4",
      "5.5",
      "6.6",
      "7.7"
    ],
    answer: 3,
    explanation: "$I_1 = \\frac{I_2}{a} = \\frac{30}{30} = 1[A]$. 입력 $P = V_1 I_1 \\cos \\theta = 6600 \\times 1 \\times 1 = 6.6[kW]$입니다. [cite: 608, 610]",
    image: null
  },
  {
    id: 50,
    question: "스텝 모터에 대한 설명으로 틀린 것은?",
    options: [
      "가속과 감속이 용이하다.",
      "정역 및 변속이 용이하다.",
      "위치제어 시 각도 오차가 작다.",
      "브러시 등 부품수가 많아 유지보수 필요성이 크다."
    ],
    answer: 4,
    explanation: "스텝 모터는 브러시나 슬립 링이 없어 부품수가 적고 유지 보수 필요성이 적습니다. [cite: 628]",
    image: null
  },
  {
    id: 51,
    question: "출력이 $20[kW]$인 직류발전기의 효율이 $80[\\%]$이면 전 손실은 약 몇 $[kW]$인가?",
    options: [
      "0.8",
      "1.25",
      "5",
      "15"
    ],
    answer: 3,
    explanation: "손실 $P_l = \\frac{P}{\\eta} - P = \\frac{20}{0.8} - 20 = 5[kW]$입니다. [cite: 642]",
    image: null
  },
  {
    id: 52,
    question: "동기전동기의 공급 전압과 부하를 일정하게 유지하면서 역률을 1로 운전하고 있는 상태에서 여자 전류를 증가시키면 전기자 전류는?",
    options: [
      "앞선 무효전류가 증가",
      "앞선 무효전류가 감소",
      "뒤진 무효전류가 증가",
      "뒤진 무효전류가 감소"
    ],
    answer: 1,
    explanation: "V곡선(위상특성곡선)에서 역률 1보다 계자전류를 증가시키면 앞선 전류(진역률)가 흐릅니다. [cite: 652, 653]",
    image: null
  },
  {
    id: 53,
    question: "전압변동률이 작은 동기발전기의 특성으로 옳은 것은?",
    options: [
      "단락비가 크다.",
      "속도변동률이 크다.",
      "동기 리액턴스가 크다.",
      "전기자 반작용이 크다."
    ],
    answer: 1,
    explanation: "단락비가 큰 기계(철기계)는 동기 임피던스가 작고 전압변동률이 양호합니다. [cite: 667, 672]",
    image: null
  },
  {
    id: 54,
    question: "직류발전기에 $P[N\\cdot m/s]$의 기계적 동력을 주면 전력은 몇 $[W]$로 변환되는가? (단, 손실은 없으며, $i_a$는 전기자 도체의 전류, $e$는 전기자 도체의 유도기전력, $Z$는 총 도체수이다.)",
    options: [
      "$P = i_{a} e Z$",
      "$P = \\frac{i_{a} e}{Z}$",
      "$P = \\frac{i_{a} Z}{e}$",
      "$P = \\frac{e Z}{i_{a}}$"
    ],
    answer: 1,
    explanation: "전력 $P = EI = (e \\times \\frac{Z}{a}) \\times (a \\times i_a) = i_a e Z$입니다. [cite: 686]",
    image: null
  },
  {
    id: 55,
    question: "도통(on) 상태에 있는 SCR을 차단(off) 상태로 만들기 위해서는 어떻게 하여야 하는가?",
    options: [
      "게이트 펄스전압을 가한다.",
      "게이트 전류를 증가시킨다.",
      "게이트 전압이 부(-)가 되도록 한다.",
      "전원전압의 극성이 반대가 되도록 한다."
    ],
    answer: 4,
    explanation: "SCR을 차단하려면 애노드 전압을 0 또는 부(-)로 만들어야 합니다. [cite: 694]",
    image: null
  },
  {
    id: 56,
    question: "직류전동기의 워드레오나드 속도제어 방식으로 옳은 것은?",
    options: [
      "전압제어",
      "저항제어",
      "계자제어",
      "직병렬제어"
    ],
    answer: 1,
    explanation: "워드 레오나드 방식은 전압제어법의 일종으로 제어 범위가 넓고 정토크 제어가 가능합니다. [cite: 699]",
    image: null
  },
  {
    id: 57,
    question: "단권변압기의 설명으로 틀린 것은?",
    options: [
      "분로권선과 직렬권선으로 구분된다.",
      "1차 권선과 2차 권선의 일부가 공통으로 사용된다.",
      "3상에는 사용할 수 없고 단상으로만 사용한다.",
      "분로권선에서 누설자속이 없기 때문에 전압변동률이 작다."
    ],
    answer: 3,
    explanation: "단권변압기는 결선 방식에 따라 3상에서도 사용 가능합니다. [cite: 710]",
    image: null
  },
  {
    id: 58,
    question: "유도전동기를 정격상태로 사용 중, 전압이 $10[\\%]$ 상승할 때 특성변화로 틀린 것은? (단, 부하는 일정 토크라고 가정한다.)",
    options: [
      "슬립이 작아진다.",
      "역률이 떨어진다.",
      "속도가 감소한다.",
      "히스테리시스손과 와류손이 증가한다."
    ],
    answer: 3,
    explanation: "속도는 전압의 제곱에 비례하므로 전압이 상승하면 속도도 상승합니다. [cite: 723]",
    image: null
  },
  {
    id: 59,
    question: "단자전압 $110[V]$, 전기자 전류 $15[A]$, 전기자 회로의 저항 $2[\\Omega]$, 정격속도 $1800[rpm]$으로 전부하에서 운전하고 있는 직류 분권전동기의 토크는 약 몇 $[Nm]$인가?",
    options: [
      "6.0",
      "6.4",
      "10.08",
      "11.14"
    ],
    answer: 2,
    explanation: "역기전력 $E = 110 - (2 \\times 15) = 80[V]$. 토크 $\\tau = 0.975 \\frac{EI}{N} \\times 9.8 \\approx 6.4[N\\cdot m]$입니다. [cite: 730, 731]",
    image: null
  },
  {
    id: 60,
    question: "용량 $1[kVA]$, $3000/200[V]$의 단상변압기를 단권변압기로 결선해서 $3000/3200[V]$의 승압기로 사용할 때 그 부하용량 $[kVA]$은?",
    options: [
      "1/16",
      "21",
      "15",
      "16"
    ],
    answer: 4,
    explanation: "부하용량 = $\\frac{V_h}{V_h - V_l} \\times \\text{자기용량} = \\frac{3200}{3200-3000} \\times 1 = 16[kVA]$입니다. [cite: 740]",
    image: null
  },
  {
    id: 61,
    question: "특성방정식이 $s^{3} + 2s^{2} + Ks + 10 = 0$으로 주어지는 제어시스템이 안정하기 위한 $K$의 범위는?",
    options: [
      "$K > 0$",
      "$K > 5$",
      "$K < 0$",
      "$0 < K < 5$"
    ],
    answer: 2,
    explanation: "루드 표 판정법에 의해 제1열의 부호 변화가 없어야 하므로 $\\frac{2K-10}{2} > 0 \\Rightarrow K > 5$가 되어야 합니다. [cite: 749, 761]",
    image: null
  },
  {
    id: 62,
    question: "제어시스템의 개루프 전달함수가 $G(s)H(s) = \\frac{K(s+30)}{s^{4}+s^{3}+2s^{2}+s+7}$로 주어질 때, 다음 중 $K > 0$인 경우 근궤적의 점근선이 실수축과 이루는 각 $[^{\\circ}]$은?",
    options: [
      "20",
      "60",
      "90",
      "120"
    ],
    answer: 2,
    explanation: "점근선의 각도 $\\alpha = \\frac{(2k+1)180^{\\circ}}{P-Z}$에서 $k=0$일 때 $\\frac{180^{\\circ}}{4-1} = 60^{\\circ}$입니다. [cite: 769]",
    image: null
  },
  {
    id: 63,
    question: "변환된 함수 $F(z) = \\frac{3z}{(z - e^{-3T})}$에 대응되는 라플라스 변환 함수는?",
    options: [
      "$\\frac{1}{(s+3)}$",
      "$\\frac{3}{(s-3)}$",
      "$\\frac{1}{(s-3)}$",
      "$\\frac{3}{(s+3)}$"
    ],
    answer: 4,
    explanation: "$z$-변환 표에 의해 $\\frac{z}{z-e^{-at}} \\leftrightarrow \\frac{1}{s+a}$이므로 $F(s) = \\frac{3}{s+3}$입니다. [cite: 777, 782]",
    image: null
  },
  {
    id: 64,
    question: "그림과 같은 제어시스템의 전달함수 $\\frac{C(s)}{R(s)}$는?",
    options: [
      "1/15",
      "2/15",
      "3/15",
      "4/15"
    ],
    answer: 2,
    explanation: "전향경로 이득: 2, 루프 이득: -6, -8. 전달함수 $G = \\frac{2}{1 - (-6 - 8)} = \\frac{2}{15}$입니다. [cite: 797, 803]",
    image: null
  },
  {
    id: 65,
    question: "전달함수가 $G_{C}(s) = \\frac{2s+5}{7s}$인 제어기가 있다. 이 제어기는 어떤 제어기인가?",
    options: [
      "비례 미분 제어기",
      "적분 제어기",
      "비례 적분 제어기",
      "비례 적분 미분 제어기"
    ],
    answer: 3,
    explanation: "$G_c(s) = \\frac{2}{7} + \\frac{5}{7s}$ 형태이므로 비례(P) 항과 적분(I) 항의 합인 비례적분 제어기입니다. [cite: 810, 811]",
    image: null
  },
  {
    id: 66,
    question: "단위 피드백제어계에서 개루프 전달함수 $G(s)$가 다음과 같이 주어졌을 때 단위 계단 입력에 대한 정상상태 편차는? $G(s) = \\frac{5}{s(s+1)(s+2)}$",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    answer: 1,
    explanation: "1형 제어계에서 단위 계단 입력에 대한 위치 편차는 0입니다. [cite: 822]",
    image: null
  },
  {
    id: 67,
    question: "그림과 같은 논리회로의 출력 $Y$는?",
    options: [
      "$ABCDE + \\bar{F}$",
      "$A B CD E + F$",
      "$\\bar{A} + \\bar{B} + \\bar{C} + \\bar{D} + \\bar{E} + F$",
      "$A + B + C + D + E + F$"
    ],
    answer: 1,
    explanation: "드 모르간의 정리를 적용하여 연산하면 $ABCDE + \\bar{F}$가 도출됩니다. [cite: 838]",
    image: null
  },
  {
    id: 68,
    question: "그림의 신호흐름선도에서 전달함수 $\\frac{C(s)}{R(s)}$는?",
    options: [
      "$\\frac{a^3}{(1-ab)^3}$",
      "$\\frac{a^3}{(1-3ab+a^2b^2)}$",
      "$\\frac{a^3}{1-3ab}$",
      "$\\frac{a^3}{1-3ab+2a^2b^2}$"
    ],
    answer: 2,
    explanation: "메이슨의 공식에 의해 $\\frac{a^3}{1 - (ab+ab+ab) + a^2b^2} = \\frac{a^3}{1 - 3ab + a^2b^2}$입니다. [cite: 852, 860]",
    image: null
  },
  {
    id: 69,
    question: "다음과 같은 미분방정식으로 표현되는 제어시스템의 시스템 행렬 $A$는? $\\frac{d^{2}c(t)}{dt^{2}} + 5\\frac{dc(t)}{dt} + 3c(t) = r(t)$",
    options: [
      "$[\\begin{matrix} -5 & 3 \\\\ 0 & 0 \\end{matrix}]$ ",
      "$[\\begin{matrix} 0 & 1 \\\\ -3 & -5 \\end{matrix}]$ ",
      "$[\\begin{matrix} 0 & 3 \\\\ 0 & 1 \\end{matrix}]$ ",
      "$[\\begin{matrix} 0 & 1 \\\\ -5 & 3 \\end{matrix}]$ "
    ],
    answer: 2,
    explanation: "상태방정식 수립 시 시스템 행렬 $A$는 $[\\begin{matrix} 0 & 1 \\\\ -3 & -5 \\end{matrix}]$가 됩니다. [cite: 891, 894]",
    image: null
  },
  {
    id: 70,
    question: "안정한 제어시스템의 보드 선도에서 이득 여유는?",
    options: [
      "$-20 \\sim 20[dB]$ 사이에 있는 크기 $[dB]$ 값이다.",
      "$0 \\sim 20[dB]$ 사이에 있는 크기 선도의 길이이다.",
      "위상이 $0^{\\circ}$가 되는 주파수에서 이득의 크기 $[dB]$이다.",
      "위상이 $-180^{\\circ}$가 되는 주파수에서 이득의 크기 $[dB]$이다."
    ],
    answer: 4,
    explanation: "이득 여유는 위상이 $-180^{\\circ}$가 되는 위상 교차 주파수에서 정의됩니다. [cite: 899]",
    image: null
  },
  {
    id: 71,
    question: "3상 전류가 $I_a = 10+j3[A]$, $I_b = -5-j2[A]$, $I_c = -3+j4[A]$일 때 정상분 전류의 크기는 약 몇 $[A]$인가?",
    options: [
      "5",
      "6.4",
      "10.5",
      "13.34"
    ],
    answer: 2,
    explanation: "정상분 $I_1 = \\frac{1}{3}(I_a + aI_b + a^2I_c) \\approx 6.4 + j0.09 \\approx 6.4[A]$입니다. [cite: 910, 912]",
    image: null
  },
  {
    id: 72,
    question: "그림의 회로에서 영상 임피던스 $Z_{01}$이 $6[\\Omega]$일 때, 저항 $R$의 값은 몇 $[\\Omega]$인가?",
    options: [
      "2",
      "4",
      "6",
      "9"
    ],
    answer: 2,
    explanation: "$Z_{01} = \\sqrt{5R + R^2} = 6$에서 $R^2 + 5R - 36 = 0$이므로 $R=4[\\Omega]$입니다. [cite: 922]",
    image: null
  },
  {
    id: 73,
    question: "Y결선의 평형 3상 회로에서 선간전압 $V_{ab}$와 상전압 $V_{an}$의 관계로 옳은 것은? (단, $V_{bn} = V_{an} e^{-j(2\\pi/3)}$, $V_{cn} = V_{bn} e^{-j(2\\pi/3)}$)",
    options: [
      "$V_{ab} = \\frac{1}{\\sqrt{3}} e^{j(\\pi/6)} V_{an}$",
      "$V_{ab} = \\frac{1}{\\sqrt{3}} e^{-j(\\pi/6)} V_{an}$",
      "$V_{ab} = \\sqrt{3} e^{j(\\pi/6)} V_{an}$",
      "$V_{ab} = \\sqrt{3} e^{-j(\\pi/6)} V_{an}$"
    ],
    answer: 3,
    explanation: "Y결선에서 선간전압은 상전압보다 크기가 $\\sqrt{3}$배이고 위상이 $30^{\\circ}(\\pi/6)$ 앞섭니다. [cite: 955]",
    image: null
  },
  {
    id: 74,
    question: "선로의 단위 길이 당 인덕턴스, 저항, 정전용량, 누설 컨덕턴스를 각각 $L, R, C, G$라 하면 전파정수는?",
    options: [
      "$\\frac{\\sqrt{(R+j\\omega L)}}{\\sqrt{(G+j\\omega C)}}$",
      "$\\sqrt{(R+j\\omega L)(G+j\\omega C)}$",
      "$\\sqrt{\\frac{(R+j\\omega C)}{(G+j\\omega L)}}$",
      "$\\sqrt{\\frac{(G+j\\omega C)}{(R+j\\omega L)}}$"
    ],
    answer: 2,
    explanation: "전파정수 $\\gamma = \\sqrt{ZY} = \\sqrt{(R + j\\omega L)(G + j\\omega C)}$입니다. [cite: 963]",
    image: null
  },
  {
    id: 75,
    question: "회로에서 $0.5[\\Omega]$ 양단 전압 $V$은 약 몇 $[V]$인가?",
    options: [
      "0.6",
      "0.93",
      "1.47",
      "1.5"
    ],
    answer: 3,
    explanation: "중첩의 원리를 이용하면 $V = (2.4 + 0.53) \\times 0.5 \\approx 1.47[V]$입니다. [cite: 974]",
    image: null
  },
  {
    id: 76,
    question: "$f(t) = t^{2} e^{-\\alpha t}$를 라플라스 변환하면?",
    options: [
      "$\\frac{2}{(s+\\alpha)^2}$",
      "$\\frac{3}{(s+\\alpha)^2}$",
      "$\\frac{2}{(s+\\alpha)^3}$",
      "$\\frac{3}{(s+\\alpha)^3}$"
    ],
    answer: 3,
    explanation: "복소 추이 정리에 의해 $\\mathcal{L}[t^2 e^{-\\alpha t}] = [\\frac{2}{s^3}]_{s \\rightarrow s+\\alpha} = \\frac{2}{(s+\\alpha)^3}$입니다. [cite: 990]",
    image: null
  },
  {
    id: 77,
    question: "$RLC$ 직렬회로의 파라미터가 $R^{2} = \\frac{4L}{C}$의 관계를 가진다면, 이 회로에 직류 전압을 인가하는 경우 과도 응답특성은?",
    options: [
      "무제동",
      "과제동",
      "부족제동",
      "임계제동"
    ],
    answer: 4,
    explanation: "$R^2 = 4L/C$인 조건은 임계제동 특성에 해당합니다. [cite: 999]",
    image: null
  },
  {
    id: 78,
    question: "그림과 같이 결선된 회로의 단자(a, b, c)에 선간전압이 $V[V]$인 평형 3상 전압을 인가할 때 상전류 $I[A]$의 크기는?",
    options: [
      "$\\frac{V}{4R}$",
      "$\\frac{3V}{4R}$",
      "$\\frac{\\sqrt{3}V}{4R}$",
      "$\\frac{V}{4\\sqrt{3}R}$"
    ],
    answer: 1,
    explanation: "델타-와이 변환을 통해 합성 저항을 구하면 $4R$이 되어 $I = \\frac{V}{4R}$이 됩니다. [cite: 1018, 1035]",
    image: null
  },
  {
    id: 79,
    question: "$v(t) = 3 + 5\\sqrt{2} \\sin \\omega t + 10\\sqrt{2} \\sin (3\\omega t - \\pi/3) [V]$의 실효값 크기는 약 몇 $[V]$인가?",
    options: [
      "9.6",
      "10.6",
      "11.6",
      "12.6"
    ],
    answer: 3,
    explanation: "$V = \\sqrt{3^2 + 5^2 + 10^2} \\approx 11.6[V]$입니다. [cite: 1044]",
    image: null
  },
  {
    id: 80,
    question: "$8+j6[\\Omega]$인 임피던스에 $13+j20[V]$의 전압을 인가할 때 복소전력은 약 몇 $[VA]$인가?",
    options: [
      "12.7 + j34.1",
      "45.5 + j34.1",
      "12.7 + j55.5",
      "45.5 + j55.5"
    ],
    answer: 2,
    explanation: "$P_a = VI^* = (13+j20) \\times (2.24-j0.82) \\approx 45.5 + j34.1[VA]$입니다. [cite: 1052]",
    image: null
  },
  {
    id: 81,
    question: "지중 전선로를 직접 매설식에 의하여 시설할 때, 중량물의 압력을 받을 우려가 있는 장소에 저압 또는 고압의 지중전선을 견고한 트라프 기타 방호물에 넣지 않고도 부설할 수 있는 케이블은?",
    options: [
      "PVC 외장 케이블",
      "콤바인 덕트 케이블",
      "염화비닐 절연 케이블",
      "폴리에틸렌 외장 케이블"
    ],
    answer: 2,
    explanation: "지중 전선로를 직접 매설식으로 시설하는 경우, 콤바인 덕트 케이블 또는 개장한 케이블을 사용하면 방호물에 넣지 않고 시설할 수 있습니다. [cite: 1064]",
    image: null
  },
  {
    id: 82,
    question: "수소냉각식 발전기 등의 시설기준으로 틀린 것은?",
    options: [
      "발전기안 또는 조상기안의 수소의 온도를 계측하는 장치를 시설할 것",
      "발전기축의 밀봉부로부터 수소가 누설될 때 누설된 수소를 외부로 방출하지 않을 것",
      "발전기안 또는 조상기안의 수소의 순도가 $85[\\%]$ 이하로 저하한 경우에 이를 경보하는 장치를 시설할 것",
      "발전기 또는 조상기는 수소가 대기압에서 폭발하는 경우에 생기는 압력에 견디는 강도를 가지는 것일 것"
    ],
    answer: 2,
    explanation: "발전기 축의 밀봉부로부터 누설된 수소 가스는 안전하게 외부에 방출할 수 있는 장치를 시설하여야 합니다. [cite: 1076]",
    image: null
  },
  {
    id: 83,
    question: "어느 유원지의 어린이 놀이기구인 유희용 전차에 전기를 공급하는 전로의 사용전압은 교류인 경우 몇 $[V]$ 이하이어야 하는가?",
    options: [
      "20",
      "40",
      "60",
      "100"
    ],
    answer: 2,
    explanation: "유희용 전차 전원장치의 2차측 단자 최대사용전압은 직류 $60[V]$ 이하, 교류 $40[V]$ 이하입니다. [cite: 1090]",
    image: null
  },
  {
    id: 84,
    question: "연료전지 및 태양전지 모듈의 절연내력시험을 하는 경우 충전부분과 대지 사이에 인가하는 시험전압은 얼마인가? (단, 연속하여 10분간 가하여 견디는 것이어야 한다.)",
    options: [
      "최대사용전압의 1.25배의 직류전압 또는 1배의 교류전압 ($500[V]$ 미만으로 되는 경우에는 $500[V]$)",
      "최대사용전압의 1.25배의 직류전압 또는 1.25배의 교류전압 ($500[V]$ 미만으로 되는 경우에는 $500[V]$)",
      "최대사용전압의 1.5배의 직류전압 또는 1배의 교류전압 ($500[V]$ 미만으로 되는 경우에는 $500[V]$)",
      "최대사용전압의 1.5배의 직류전압 또는 1.25배의 교류전압 ($500[V]$ 미만으로 되는 경우에는 $500[V]$)"
    ],
    answer: 3,
    explanation: "연료전지 및 태양전지 모듈은 최대사용전압의 $1.5$배의 직류전압 또는 $1$배의 교류전압에 견뎌야 합니다. [cite: 1100]",
    image: null
  },
  {
    id: 85,
    question: "전개된 장소에서 저압 옥상전선로의 시설기준으로 적합하지 않은 것은?",
    options: [
      "전선은 절연전선을 사용하였다.",
      "전선 지지점 간의 거리를 $20[m]$로 하였다.",
      "전선은 지름 $2.6[mm]$의 경동선을 사용하였다.",
      "저압 절연전선과 그 저압 옥상 전선로를 시설하는 조영재와의 이격거리를 $2[m]$로 하였다."
    ],
    answer: 2,
    explanation: "저압 옥상전선로의 지지점 간의 거리는 $15[m]$ 이하이어야 합니다. [cite: 1113]",
    image: null
  },
  {
    id: 86,
    question: "저압 수상전선로에 사용되는 전선은?",
    options: [
      "옥외 비닐케이블",
      "600[V] 비닐절연전선",
      "600[V] 고무절연전선",
      "클로로프렌 캡타이어 케이블"
    ],
    answer: 4,
    explanation: "저압 수상전선로에는 클로로프렌 캡타이어 케이블을 사용합니다. [cite: 1124]",
    image: null
  },
  {
    id: 87,
    question: "케이블트레이공사에 사용하는 케이블 트레이에 적합하지 않은 것은?",
    options: [
      "비금속제 케이블 트레이는 난연성 재료가 아니어도 된다.",
      "금속재의 것은 적절한 방식처리를 한 것이거나 내식성 재료의 것이어야 한다.",
      "금속제 케이블 트레이 계통은 기계적 및 전기적으로 완전하게 접속하여야 한다.",
      "케이블 트레이가 방화구획의 벽 등을 관통하는 경우에 관통부는 불연성의 물질로 충전하여야 한다."
    ],
    answer: 1,
    explanation: "비금속제 케이블 트레이는 반드시 난연성 재료이어야 합니다. [cite: 1142]",
    image: null
  },
  {
    id: 88,
    question: "고압 가공전선을 시설할 때 사용되는 경동선의 굵기는 지름 몇 $[mm]$ 이상인가?",
    options: [
      "2.6",
      "3.2",
      "4.0",
      "5.0"
    ],
    answer: 4,
    explanation: "고압 가공전선으로 경동선을 사용하는 경우 지름 $5[mm]$ 이상이어야 합니다. [cite: 1150]",
    image: null
  },
  {
    id: 89,
    question: "가공전선로의 지지물의 강도계산에 적용하는 풍압하중은 빙설이 많은 지방이외의 지방에서 저온계절에는 어떤 풍압하중을 적용하는가? (단, 인가가 연접되어 있지 않다고 한다.)",
    options: [
      "갑종풍압하중",
      "을종풍압하중",
      "병종풍압하중",
      "을종과 병종풍압하중을 혼용"
    ],
    answer: 3,
    explanation: "빙설이 많은 지방 이외의 지방에서 저온계절(인가 연접 무관)에는 병종풍압하중을 적용합니다. [cite: 1159]",
    image: null
  },
  {
    id: 90,
    question: "백열전등 또는 방전등에 전기를 공급하는 옥내전로의 대지전압은 몇 $[V]$ 이하이어야 하는가? (단, 백열전등 또는 방전등 및 이에 부속하는 전선은 사람이 접촉할 우려가 없도록 시설한 경우이다.)",
    options: [
      "60",
      "110",
      "220",
      "300"
    ],
    answer: 4,
    explanation: "옥내 전로의 대지전압은 $300[V]$ 이하이어야 합니다. [cite: 1168]",
    image: null
  },
  {
    id: 91,
    question: "가공전선로의 지지물에 시설하는 지선으로 연선을 사용할 경우 소선은 최소 몇 가닥 이상이어야 하는가?",
    options: [
      "3",
      "5",
      "7",
      "9"
    ],
    answer: 1,
    explanation: "지선에 연선을 사용하는 경우 소선 $3$가닥 이상의 연선이어야 합니다. [cite: 1181]",
    image: null
  },
  {
    id: 92,
    question: "특고압 가공전선로의 지지물에 첨가하는 통신선 보안장치에 사용되는 피뢰기의 동작전압은 교류 몇 $[V]$ 이하인가?",
    options: [
      "300",
      "600",
      "1000",
      "1500"
    ],
    answer: 3,
    explanation: "특고압 가공전선로 첨가 통신선의 보안장치 중 피뢰기($L_1$)는 교류 $1[kV](1000[V])$ 이하에서 동작해야 합니다. [cite: 1194]",
    image: null
  },
  {
    id: 93,
    question: "태양전지 발전소에 시설하는 태양전지 모듈, 전선 및 개폐기 기타 기구의 시설기준에 대한 내용으로 틀린 것은?",
    options: [
      "충전부분은 노출되지 아니하도록 시설할 것",
      "옥내에 시설하는 경우에는 전선을 케이블공사로 시설할 수 있다.",
      "태양전지 모듈의 프레임은 지지물과 전기적으로 완전하게 접속하여야 한다.",
      "태양전지 모듈을 병렬로 접속하는 전로에는 과전류차단기를 시설하지 않아도 된다."
    ],
    answer: 4,
    explanation: "모듈을 병렬로 접속하는 전로에는 단락전류 발생 시 전로를 보호하는 과전류차단기를 시설하여야 합니다. [cite: 1223]",
    image: null
  },
  {
    id: 94,
    question: "저압 가공전선로 또는 고압 가공전선로와 기설 가공 약전류 전선로가 병행하는 경우에는 유도작용에 의한 통신상의 장해가 생기지 아니하도록 전선과 기설 약전류 전선간의 이격거리는 몇 $[m]$ 이상이어야 하는가? (단, 전기철도용 급전선로는 제외한다.)",
    options: [
      "2",
      "4",
      "6",
      "8"
    ],
    answer: 1,
    explanation: "저압 또는 고압 가공전선로와 가공약전류전선로 병행 시 이격거리는 $2[m]$ 이상이어야 합니다. [cite: 1236]",
    image: null
  },
  {
    id: 95,
    question: "중성점 직접 접지식 전로에 접속되는 최대사용전압 $161[kV]$인 3상 변압기 권선(성형결선)의 절연내력시험을 할 때 접지시켜서는 안 되는 것은?",
    options: [
      "철심 및 외함",
      "시험되는 변압기의 부싱",
      "시험되는 권선의 중성점 단자",
      "시험되지 않는 각 권선(다른 권선이 2개 이상 있는 경우에는 각 권선)의 임의의 1단자"
    ],
    answer: 2,
    explanation: "시험 시 중성점 단자, 다른 권선의 임의 단자, 철심 및 외함은 접지하지만, 부싱은 접지 대상이 아닙니다. [cite: 1249]",
    image: null
  }
];

export default questions;