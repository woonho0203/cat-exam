const questions = [
  {
    id: 1,
    question: "환상 솔레노이드 철심 내부에서 자계의 세기 $[AT/m]$는? (단, $N$은 코일 권선수, $r$은 환상 철심의 평균 반지름, $I$는 코일에 흐르는 전류이다.)",
    options: [
      "$\\frac{NI}{4\\pi r}$",
      "$\\frac{NI}{2\\pi r}$",
      "$\\frac{NI}{2r}$",
      "$\\frac{NI}{r}$"
    ],
    answer: 2,
    explanation: "환상 솔레노이드 내부 자계의 세기 $H = \\frac{NI}{2\\pi r}$ 입니다.",
    image: null
  },
  {
    id: 2,
    question: "전류가 흐르는 무한 직선 도체가 있다. 이 도체로부터 수직으로 $0.1[m]$ 떨어진 점에서 자계의 세기가 $180[AT/m]$ 이다. 도체로부터 수직으로 $0.3[m]$ 떨어진 점에서 자계의 세기 $[AT/m]$는?",
    options: [
      "20",
      "60",
      "180",
      "540"
    ],
    answer: 2,
    explanation: "무한장 직선도체에 의한 자계 $H = \\frac{I}{2\\pi r}$ 로 거리에 반비례합니다. 거리가 3배($0.1 \\rightarrow 0.3$)가 되었으므로 자계는 $1/3$배인 $60[AT/m]$가 됩니다.",
    image: null
  },
  {
    id: 3,
    question: "임의의 형상의 도선에 전류 $I[A]$가 흐를 때, 거리 $r[m]$만큼 떨어진 점에서의 자계의 세기 $H[AT/m]$를 구하는 비오-사바르의 법칙에서 자계의 세기 $H[AT/m]$와 거리 $r[m]$의 관계로 옳은 것은?",
    options: [
      "$r$에 반비례",
      "$r$에 비례",
      "$r^2$에 반비례",
      "$r^2$에 비례"
    ],
    answer: 3,
    explanation: "비오-사바르의 법칙 $dH = \\frac{I dl \\sin \\theta}{4\\pi r^2}$에 의해 자계의 세기는 거리의 제곱($r^2$)에 반비례합니다.",
    image: null
  },
  {
    id: 4,
    question: "길이가 $l[m]$, 단면적의 반지름이 $a[m]$인 원통이 길이 방향으로 균일하게 자화되어 자화의 세기가 $J[Wb/m^2]$인 경우, 원통 양단에서의 자극의 세기 $m[Wb]$은?",
    options: [
      "$alJ$",
      "$2\\pi alJ$",
      "$\\pi a^2J$",
      "$\\frac{J}{\pi a^2}$"
    ],
    answer: 3,
    explanation: "자화의 세기 $J = \\frac{m}{s}$ 이므로 자극의 세기 $m = Js = J \\cdot \\pi a^2 [Wb]$입니다.",
    image: null
  },
  {
    id: 5,
    question: "진공 중에서 전자파의 전파속도 $[m/s]$는?",
    options: [
      "$C_0 = \\frac{1}{\\sqrt{\\epsilon_0\\mu_0}}$",
      "$C_0 = \\frac{1}{\\sqrt{\\epsilon_0}}$",
      "$C_0 = \\sqrt{\\epsilon_0\\mu_0}$",
      "$C_0 = \\frac{1}{\\sqrt{\\mu_0}}$"
    ],
    answer: 1,
    explanation: "진공 중의 전파속도 $v_0 = \\frac{1}{\\sqrt{\\epsilon_0\\mu_0}} \\approx 3 \\times 10^8 [m/s]$입니다.",
    image: null
  },
  {
    id: 6,
    question: "영구자석 재료로 사용하기에 적합한 특성은?",
    options: [
      "잔류자기와 보자력이 모두 큰 것이 적합하다.",
      "잔류자기는 크고 보자력은 작은 것이 적합하다.",
      "잔류자기는 작고 보자력은 큰 것이 적합하다.",
      "잔류자기와 보자력이 모두 작은 것이 적합하다."
    ],
    answer: 1,
    explanation: "영구자석 재료는 히스테리시스 곡선의 면적 및 보자력이 크고, 잔류자기도 커야 합니다.",
    image: null
  },
  {
    id: 7,
    question: "변위전류와 관계가 가장 깊은 것은?",
    options: [
      "도체",
      "반도체",
      "자성체",
      "유전체"
    ],
    answer: 4,
    explanation: "변위 전류는 진공 또는 유전체 내 전속밀도의 시간적 변화에 의해서 발생합니다.",
    image: null
  },
  {
    id: 8,
    question: "자속밀도가 $10[Wb/m^2]$인 자계 내에 길이 $4[cm]$의 도체를 자계와 직각으로 놓고 이 도체를 $0.4$초 동안 $1[m]$씩 균일하게 이동하였을 때 발생하는 기전력은 몇 $[V]$인가?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 1,
    explanation: "속도 $v = \\frac{1}{0.4} = 2.5[m/s]$, 기전력 $e = Blv \\sin \\theta = 10 \\times 0.04 \\times 2.5 \\times \\sin 90^\\circ = 1[V]$입니다.",
    image: null
  },
  {
    id: 9,
    question: "내부 원통의 반지름이 $a$, 외부 원통의 반지름이 $b$인 동축 원통 콘덴서의 내외 원통 사이에 공기를 넣었을 때 정전용량이 $C_1$이었다. 내외 반지름을 모두 3배로 증가시키고 공기 대신 비유전율이 3인 유전체를 넣었을 경우의 정전용량 $C_2$는?",
    options: [
      "$C_2 = \\frac{C_1}{9}$",
      "$C_2 = \\frac{C_1}{3}$",
      "$C_2 = 3C_1$",
      "$C_2 = 9C_1$"
    ],
    answer: 3,
    explanation: "동축 원통의 정전용량 $C = \\frac{2\\pi\\epsilon}{\\ln(b/a)}$입니다. 반지름을 모두 3배하면 $\\ln(3b/3a) = \\ln(b/a)$로 분모는 불변이며, 비유전율이 3배가 되었으므로 $C_2 = 3C_1$이 됩니다.",
    image: null
  },
  {
    id: 10,
    question: "다음 정전계에 관한 식 중에서 틀린 것은? (단, $D$는 전속밀도, $V$는 전위, $\\rho$는 공간(체적) 전하밀도, $\\epsilon$은 유전율이다.)",
    options: [
      "가우스의 정리: $\\text{div } D = \\rho$",
      "포아송의 방정식: $\\nabla^2 V = \\frac{\\rho}{\\epsilon}$",
      "라플라스의 방정식: $\\nabla^2 V = 0$",
      "발산의 정리: $\\oint_s D \\cdot ds = \\int_v \\text{div } D \\, dv$"
    ],
    answer: 2,
    explanation: "포아송의 방정식은 $\\nabla^2 V = -\\frac{\\rho}{\\epsilon}$ 입니다. 보기 2번은 부호가 틀렸습니다.",
    image: null
  },
  {
    id: 11,
    question: "질량($m$)이 $10^{-10}[kg]$이고, 전하량($Q$)이 $10^{-8}[C]$인 전하가 전기장에 의해 가속되어 운동하고 있다. 가속도가 $a=10^2i+10^2j[m/s^2]$일 때 전기장의 세기 $E[V/m]$는?",
    options: [
      "$E = 10^4i + 10^5j$",
      "$E = i + 10j$",
      "$E = i + j$",
      "$E = 10^{-6}i + 10^{-4}j$"
    ],
    answer: 3,
    explanation: "$F = QE = ma$ 에서 $E = \\frac{m}{Q}a = \\frac{10^{-10}}{10^{-8}}(10^2i + 10^2j) = 10^{-2}(10^2i + 10^2j) = i + j [V/m]$입니다.",
    image: null
  },
  {
    id: 12,
    question: "유전율이 $\\epsilon_1, \\epsilon_2$인 유전체 경계면에 수직으로 전계가 작용할 때 단위 면적당 수직으로 작용하는 힘 $[N/m^2]$은? (단, $E$는 전계 $[V/m]$이고, $D$는 전속밀도 $[C/m^2]$이고, $\\epsilon_1 > \\epsilon_2$이다.)",
    options: [
      "$2(\\frac{1}{\\epsilon_2} - \\frac{1}{\\epsilon_1})D^2$",
      "$\\frac{1}{2}(\\frac{1}{\\epsilon_2} - \\frac{1}{\\epsilon_1})E^2$",
      "$2(\\frac{1}{\\epsilon_2} - \\frac{1}{\\epsilon_1})E^2$",
      "$\\frac{1}{2}(\\frac{1}{\\epsilon_2} - \\frac{1}{\\epsilon_1})D^2$"
    ],
    answer: 4,
    explanation: "경계면에 수직으로 입사 시 $D_1 = D_2 = D$입니다. 단위 면적당 힘 $f_n = w_2 - w_1 = \\frac{1}{2}\\frac{D^2}{\\epsilon_2} - \\frac{1}{2}\\frac{D^2}{\\epsilon_1} = \\frac{1}{2}(\\frac{1}{\\epsilon_2} - \\frac{1}{\\epsilon_1})D^2$입니다.",
    image: null
  },
  {
    id: 13,
    question: "진공 중에서 $2[m]$ 떨어진 두 개의 무한 평행 도선에 단위 길이당 $10^{-7}[N]$의 반발력이 작용할 때 각 도선에 흐르는 전류의 크기와 방향은? (단, 각 도선에 흐르는 전류의 크기는 같다.)",
    options: [
      "각 도선에 $2[A]$가 반대 방향으로 흐른다.",
      "각 도선에 $2[A]$가 같은 방향으로 흐른다.",
      "각 도선에 $1[A]$가 반대 방향으로 흐른다.",
      "각 도선에 $1[A]$가 같은 방향으로 흐른다."
    ],
    answer: 3,
    explanation: "평행도선 사이의 힘 $F = \\frac{2I^2}{r} \\times 10^{-7}$에서 $10^{-7} = \\frac{2I^2}{2} \\times 10^{-7}$이므로 $I = 1[A]$입니다. 반발력이 작용하므로 전류의 방향은 반대입니다.",
    image: null
  },
  {
    id: 14,
    question: "자기 인덕턴스(self inductance) $[H]$을 나타낸 식은? (단, $N$은 권선수, $I$는 전류 $[A]$, $\\Phi$는 자속 $[Wb]$, $B$는 자속밀도 $[Wb/m^2]$, $H$는 자계의 세기 $[AT/m]$, $A$는 벡터 퍼텐셜 $[Wb/m]$, $J$는 전류밀도 $[A/m^2]$이다.)",
    options: [
      "$L = \\frac{N\\Phi}{I^2}$",
      "$L = \\frac{1}{2I^2} \\int B \\cdot H \\, dv$",
      "$L = \\frac{1}{I^2} \\int A \\cdot J \\, dv$",
      "$L = \\frac{1}{I} \\int B \\cdot H \\, dv$"
    ],
    answer: 3,
    explanation: "자계 에너지 $W = \\frac{1}{2}LI^2 = \\frac{1}{2}\\int B \\cdot H \\, dv$에서 $L = \\frac{1}{I^2}\\int B \\cdot H \\, dv$이며, 벡터 퍼텐셜을 적용하면 $L = \\frac{1}{I^2}\\int A \\cdot J \\, dv$가 유도됩니다.",
    image: null
  },
  {
    id: 15,
    question: "반지름이 $a[m], b[m]$인 두 개의 구 형상 도체 전극이 도전율 $k$인 매질 속에 거리 $r[m]$만큼 떨어져 있다. 양 전극 간의 저항 $[\\Omega]$은? (단, $r \\gg a, r \\gg b$ 이다.)",
    options: [
      "$4\\pi k (\\frac{1}{a} + \\frac{1}{b})$",
      "$4\\pi k (\\frac{1}{a} - \\frac{1}{b})$",
      "$\\frac{1}{4\\pi k} (\\frac{1}{a} + \\frac{1}{b})$",
      "$\\frac{1}{4\\pi k} (\\frac{1}{a} - \\frac{1}{b})$"
    ],
    answer: 3,
    explanation: "두 구체 사이의 정전용량 $C = \\frac{4\\pi\\epsilon}{\\frac{1}{a} + \\frac{1}{b}}$ 이고 $R = \\frac{\\rho\\epsilon}{C}$ 관계를 이용하면 $R = \\frac{1}{4\\pi k}(\\frac{1}{a} + \\frac{1}{b})$가 됩니다.",
    image: null
  },
  {
    id: 16,
    question: "정전계 내 도체 표면에서 전계의 세기가 $E = \\frac{a_x - 2a_y + 2a_z}{\\epsilon_0} [V/m]$ 일 때 도체 표면상의 전하밀도 $\\rho_s [C/m^2]$를 구하면? (단, 자유공간이다.)",
    options: [
      "1",
      "2",
      "3",
      "5"
    ],
    answer: 3,
    explanation: "도체 표면의 전하밀도 $\\rho_s = \\epsilon_0 |E| = \\epsilon_0 \\times \\frac{\\sqrt{1^2 + (-2)^2 + 2^2}}{\\epsilon_0} = 3 [C/m^2]$입니다.",
    image: null
  },
  {
    id: 17,
    question: "저항의 크기가 $1[\\Omega]$인 전선이 있다. 전선의 체적을 동일하게 유지하면서 길이를 2배로 늘였을 때 전선의 저항 $[\\Omega]$은?",
    options: [
      "0.5",
      "1",
      "2",
      "4"
    ],
    answer: 4,
    explanation: "체적이 일정할 때 저항 $R = \\rho \\frac{l^2}{V}$에 의해 길이의 제곱에 비례합니다. 길이가 2배가 되면 저항은 $2^2 = 4$배가 되어 $4[\\Omega]$이 됩니다.",
    image: null
  },
  {
    id: 18,
    question: "반지름이 $3[cm]$인 원형 단면을 가지고 있는 환상 연철심에 코일을 감고 여기에 전류를 흘려서 철심 중의 자계 세기가 $400[AT/m]$가 되도록 여자할 때, 철심 중의 자속밀도는 약 몇 $[Wb/m^2]$인가? (단, 철심의 비투자율은 400이라고 한다.)",
    options: [
      "0.2",
      "0.8",
      "1.6",
      "2.0"
    ],
    answer: 1,
    explanation: "자속밀도 $B = \\mu H = \\mu_0\\mu_r H = 4\\pi \\times 10^{-7} \\times 400 \\times 400 \\approx 0.2 [Wb/m^2]$입니다.",
    image: null
  },
  {
    id: 19,
    question: "자기회로와 전기회로에 대한 설명으로 틀린 것은?",
    options: [
      "자기저항의 역수를 컨덕턴스라 한다.",
      "자기회로의 투자율은 전기회로의 도전율에 대응된다.",
      "전기회로의 전류는 자기회로의 자속에 대응된다.",
      "자기저항의 단위는 $[AT/Wb]$이다."
    ],
    answer: 1,
    explanation: "자기저항의 역수는 '퍼미언스(permeance)'이며, 전기회로의 컨덕턴스에 대응됩니다.",
    image: null
  },
  {
    id: 20,
    question: "서로 같은 2개의 구 도체에 동일양의 전하로 대전시킨 후 $20[cm]$ 떨어뜨린 결과 구 도체에 서로 $8.6 \\times 10^{-4} [N]$의 반발력이 작용하였다. 구 도체에 주어진 전하는 약 몇 $[C]$인가?",
    options: [
      "$5.2 \\times 10^{-8}$",
      "$6.2 \\times 10^{-8}$",
      "$7.2 \\times 10^{-8}$",
      "$8.2 \\times 10^{-8}$"
    ],
    answer: 2,
    explanation: "쿨롱의 법칙 $F = 9 \\times 10^9 \\frac{Q^2}{r^2}$에서 $Q = \\sqrt{\\frac{Fr^2}{9 \\times 10^9}} = \\sqrt{\\frac{8.6 \\times 10^{-4} \\times 0.2^2}{9 \\times 10^9}} \\approx 6.2 \\times 10^{-8} [C]$입니다.",
    image: null
  },
  {
    id: 61,
    question: "특성방정식이 $s^4 + 2s^3 + s^2 + 4s + 2 = 0$인 제어시스템의 안정도를 루스-허위츠(Routh-Hurwitz) 판별법으로 판별하면?",
    options: [
      "안정하다.",
      "불안정하다.",
      "임계 안정이다.",
      "판별 불가능하다."
    ],
    answer: 2,
    explanation: "루스 배열을 작성하면 제1열의 부호 변화가 2회 발생하므로, 우반평면에 2개의 근을 갖는 불안정한 시스템입니다.",
    image: null
  },
  {
    id: 62,
    question: "$G(s)H(s) = \\frac{K}{s(s+1)(s+2)}$인 계계에서 근궤적이 실수축을 벗어나게 되는 분지점(Breakaway point)은 약 얼마인가?",
    options: [
      "-0.42",
      "-1.42",
      "-2.42",
      "-3.42"
    ],
    answer: 1,
    explanation: "$\\frac{dK}{ds} = 0$을 만족하는 점을 찾으면 $s \\approx -0.42$가 분지점이 됩니다.",
    image: null
  },
  {
    id: 63,
    question: "서보메커니즘(Servomechanism)의 제어대상에 속하는 것은?",
    options: [
      "전압",
      "유량",
      "위치",
      "온도"
    ],
    answer: 3,
    explanation: "서보메커니즘은 기계적 변위인 위치, 방위, 자세 등을 제어량으로 하는 시스템입니다.",
    image: null
  },
  {
    id: 64,
    question: "전달함수 $G(s) = \\frac{10}{s(s+1)(s+2)}$인 시스템의 이득여유(Gain Margin)는 몇 $[dB]$인가?",
    options: [
      "-4.4",
      "4.4",
      "-10",
      "10"
    ],
    answer: 1,
    explanation: "위상교차주파수에서 이득 $G(j\\omega)$를 구하면 $|G(j\\omega)| = 1.66$이 되며, 이득여유 $GM = 20 \\log_{10} \\frac{1}{1.66} \\approx -4.4[dB]$입니다.",
    image: null
  },
  {
    id: 65,
    question: "다음 상태방정식으로 표현되는 제어계의 전달함수는? (단, $x$는 상태벡터, $u$는 입력, $y$는 출력이다.)\n$\\dot{x} = \\begin{bmatrix} 0 & 1 \\\\ -2 & -3 \\end{bmatrix} x + \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix} u$, $y = \\begin{bmatrix} 1 & 0 \\end{bmatrix} x$",
    options: [
      "$\\frac{1}{s^2 + 3s + 2}$",
      "$\\frac{s}{s^2 + 3s + 2}$",
      "$\\frac{1}{s^2 + 2s + 3}$",
      "$\\frac{s}{s^2 + 2s + 3}$"
    ],
    answer: 1,
    explanation: "$G(s) = C(sI-A)^{-1}B$ 공식을 적용하여 계산하면 $\\frac{1}{s^2+3s+2}$가 유도됩니다.",
    image: null
  },
  {
    id: 66,
    question: "그림과 같은 블록선도에서 $C(s)$는? (그림 생략 - 원문 지문 기반 복원)",
    options: [
      "$\\frac{G_1 G_2 R}{1 + G_1 G_2 H}$",
      "$\\frac{G_1 G_2 R}{1 - G_1 G_2 H}$",
      "$\\frac{G_1 + G_2}{1 + G_1 G_2 H} R$",
      "$\\frac{G_1 + G_2}{1 - G_1 G_2 H} R$"
    ],
    answer: 1,
    explanation: "전형적인 음궤환(Negative Feedback) 루프의 전달함수 공식에 해당합니다.",
    image: null
  },
  {
    id: 67,
    question: "제어시스템의 안정도 판별 시, 특성방정식의 모든 계수가 존재하고 그 부호가 같아야 하는 조건은 어떤 조건인가?",
    options: [
      "필요조건",
      "충분조건",
      "필요충분조건",
      "아무 조건도 아니다."
    ],
    answer: 1,
    explanation: "계수의 부호가 같고 누락이 없는 것은 안정을 위한 필요조건이며, 루스 판별법을 통과해야 충분조건까지 만족합니다.",
    image: null
  },
  {
    id: 68,
    question: "불연속 제어계로서 비선형 요소가 포함된 제어계의 안정도를 판별하는 방법은?",
    options: [
      "보드 선도법",
      "나이퀴스트 선도법",
      "루스-허위츠 판별법",
      "기술함수법(Describing function method)"
    ],
    answer: 4,
    explanation: "기술함수법과 위상평면법은 비선형 제어계의 해석 및 안정도 판별에 사용됩니다.",
    image: null
  },
  {
    id: 69,
    question: "단위 계단 입력에 대한 응답 $c(t) = 1 - e^{-at}$인 시스템의 전달함수는?",
    options: [
      "$\\frac{1}{s+a}$",
      "$\\frac{a}{s+a}$",
      "$\\frac{1}{s(s+a)}$",
      "$\\frac{s}{s+a}$"
    ],
    answer: 2,
    explanation: "응답 $C(s) = L[1-e^{-at}] = \\frac{1}{s} - \\frac{1}{s+a} = \\frac{a}{s(s+a)}$입니다. 입력이 $1/s$이므로 전달함수 $G(s) = \\frac{C(s)}{R(s)} = \\frac{a}{s+a}$입니다.",
    image: null
  },
  {
    id: 70,
    question: "상태행렬 $A = \\begin{bmatrix} 0 & 1 \\\\ -2 & -3 \\end{bmatrix}$일 때 상태천이행렬(State Transition Matrix) $\\Phi(t)$는?",
    options: [
      "$\\begin{bmatrix} 2e^{-t}-e^{-2t} & e^{-t}-e^{-2t} \\\\ -2e^{-t}+2e^{-2t} & -e^{-t}+2e^{-2t} \\end{bmatrix}$",
      "$\\begin{bmatrix} e^{-t}+e^{-2t} & e^{-t}-e^{-2t} \\\\ e^{-t}+e^{-2t} & e^{-t}-e^{-2t} \\end{bmatrix}$",
      "$\\begin{bmatrix} 2e^{-t}-e^{-2t} & e^{-t}-e^{-2t} \\\\ 2e^{-t}-2e^{-2t} & e^{-t}-2e^{-2t} \\end{bmatrix}$",
      "$\\begin{bmatrix} e^{-t} & t \\\\ 0 & e^{-2t} \\end{bmatrix}$"
    ],
    answer: 1,
    explanation: "$\\Phi(t) = L^{-1}[(sI-A)^{-1}]$를 계산하여 각 요소를 역라플라스 변환하면 보기 1번이 도출됩니다.",
    image: null
  },
  {
    id: 71,
    question: "어떤 회로에 $e = 100\\sqrt{2}\\sin(\\omega t + 30^\\circ) [V]$의 전압을 가했을 때 $i = 10\\sqrt{2}\\sin(\\omega t - 30^\\circ) [A]$의 전류가 흘렀다. 이 회로의 유효전력 $[W]$은?",
    options: [
      "250",
      "500",
      "866",
      "1000"
    ],
    answer: 2,
    explanation: "$P = VI\\cos\\theta = 100 \\times 10 \\times \\cos(30^\\circ - (-30^\\circ)) = 1000 \\times \\cos 60^\\circ = 500[W]$ 입니다.",
    image: null
  },
  {
    id: 72,
    question: "$R=10[\\Omega], L=0.1[H]$의 직렬회로에서 주파수 $f=60[Hz]$의 교류를 가했을 때 위상각은 약 얼마인가?",
    options: [
      "45.2°",
      "55.2°",
      "65.2°",
      "75.2°"
    ],
    answer: 4,
    explanation: "$\\theta = \\tan^{-1}(\\frac{\\omega L}{R}) = \\tan^{-1}(\\frac{2\\pi \\times 60 \\times 0.1}{10}) = \\tan^{-1}(3.77) \\approx 75.2^\\circ$ 입니다.",
    image: null
  },
  {
    id: 73,
    question: "구형파의 파형률(Form factor)은?",
    options: [
      "1.0",
      "1.11",
      "1.21",
      "1.41"
    ],
    answer: 1,
    explanation: "구형파는 실효값과 평균값이 모두 최대값과 같으므로 파형률(실효값/평균값)은 1입니다.",
    image: null
  },
  {
    id: 74,
    question: "두 코일의 자기 인덕턴스가 $L_1, L_2$일 때 결합계수가 1이라면 상호 인덕턴스 $M$은?",
    options: [
      "$L_1 L_2$",
      "$\\sqrt{L_1 L_2}$",
      "$L_1 + L_2$",
      "$\\frac{1}{2}(L_1 + L_2)$"
    ],
    answer: 2,
    explanation: "$M = k\\sqrt{L_1 L_2}$ 공식에서 $k=1$이므로 $M = \\sqrt{L_1 L_2}$입니다.",
    image: null
  },
  {
    id: 75,
    question: "RLC 직렬회로에서 $R=2[\\Omega], L=1[mH], C=0.1[\\mu F]$일 때 이 회로는 어떤 상태인가?",
    options: [
      "과제동(Over damped)",
      "임계제동(Critically damped)",
      "부족제동(Under damped)",
      "무제동(Non-damped)"
    ],
    answer: 3,
    explanation: "$R^2 < \\frac{4L}{C}$ 이면 부족제동입니다. $2^2 = 4$이고 $\\frac{4 \\times 10^{-3}}{0.1 \\times 10^{-6}} = 40,000$이므로 부족제동 상태입니다.",
    image: null
  },
  {
    id: 76,
    question: "3상 회로에서 전력 측정 시 2개의 전력계 $W_1, W_2$의 지시값이 각각 $P_1, P_2$일 때 3상 총 전력은?",
    options: [
      "$P_1 + P_2$",
      "$P_1 - P_2$",
      "$\\sqrt{3}(P_1 + P_2)$",
      "$\\sqrt{3}(P_1 - P_2)$"
    ],
    answer: 1,
    explanation: "2전력계법에서 부하의 총 전력은 두 전력계의 지시값의 합인 $P = P_1 + P_2$입니다.",
    image: null
  },
  {
    id: 77,
    question: "어떤 회로의 전달함수가 $G(s) = \\frac{s+3}{s^2+2s+2}$일 때 임펄스 응답은?",
    options: [
      "$e^{-t}(\\cos t + 2\\sin t)$",
      "$e^{-t}(\\sin t + 2\\cos t)$",
      "$e^{t}(\\cos t + 2\\sin t)$",
      "$e^{t}(\\sin t + 2\\cos t)$"
    ],
    answer: 1,
    explanation: "$G(s) = \\frac{s+1+2}{(s+1)^2+1^2} = \\frac{s+1}{(s+1)^2+1} + \\frac{2}{(s+1)^2+1}$이므로 역변환하면 $e^{-t}\\cos t + 2e^{-t}\\sin t$입니다.",
    image: null
  },
  {
    id: 78,
    question: "4단자 정수 $A, B, C, D$의 관계식으로 옳은 것은?",
    options: [
      "$AD + BC = 1$",
      "$AD - BC = 1$",
      "$AB - CD = 1$",
      "$AC - BD = 1$"
    ],
    answer: 2,
    explanation: "모든 4단자망에서 $AD - BC = 1$의 관계가 성립합니다.",
    image: null
  },
  {
    id: 79,
    question: "그림과 같은 회로의 입력 임피던스 $Z_{in}$은? (그림 설명: $L$과 $C$가 병렬로 연결된 회로)",
    options: [
      "$\\frac{1}{j\\omega(L+C)}$",
      "$j\\omega(L+C)$",
      "$\\frac{j\\omega L}{1 - \\omega^2 LC}$",
      "$\\frac{j\\omega C}{1 - \\omega^2 LC}$"
    ],
    answer: 3,
    explanation: "$Z = \\frac{j\\omega L \\cdot \\frac{1}{j\\omega C}}{j\\omega L + \\frac{1}{j\\omega C}} = \\frac{j\\omega L}{1 - \\omega^2 LC}$ 입니다.",
    image: null
  },
  {
    id: 80,
    question: "정현파 교류의 실효값과 최대값의 관계는?",
    options: [
      "실효값 = 최대값 / 2",
      "실효값 = 최대값 / $\\sqrt{2}$",
      "실효값 = 최대값 $\\times \\sqrt{2}$",
      "실효값 = 최대값 / $\\sqrt{3}$"
    ],
    answer: 2,
    explanation: "정현파의 실효값 $V_{rms} = \\frac{V_m}{\\sqrt{2}}$ 입니다.",
    image: null
  },
  {
    id: 81,
    question: "가공전선로의 지지물에 지선을 시설할 때의 기준으로 옳은 것은?",
    options: [
      "지선의 안전율은 1.5 이상으로 할 것",
      "허용 인장하중의 최저는 $3.31[kN]$으로 할 것",
      "지선에 연선을 사용할 경우 소선은 3가닥 이상의 연선일 것",
      "도로를 횡단하는 지선의 높이는 지표상 $4[m]$ 이상으로 할 것"
    ],
    answer: 3,
    explanation: "지선의 시설 기준: 안전율 2.5 이상, 인장하중 4.31kN 이상, 3가닥 이상의 연선, 도로 횡단 시 높이 5m 이상입니다.",
    image: null
  },
  {
    id: 82,
    question: "최대사용전압이 $22.9[kV]$인 3상 4선식 중성선 다중접지 전로의 절연내력 시험전압은 최대사용전압의 몇 배인가?",
    options: [
      "0.72",
      "0.92",
      "1.1",
      "1.25"
    ],
    answer: 2,
    explanation: "25kV 이하 다중접지 전로의 절연내력 시험전압은 최대사용전압의 0.92배입니다.",
    image: null
  },
  {
    id: 83,
    question: "특고압 가공전선로의 지지물로 사용하는 철탑 중 전선로의 지지물 양쪽의 경간의 차가 큰 곳에 사용하는 것은?",
    options: [
      "직선형",
      "각도형",
      "내장형",
      "내장형(내장형 중 불평형 장력을 받는 곳)"
    ],
    answer: 3,
    explanation: "내장형 철탑은 경간의 차가 큰 곳이나 인류(引留)하는 곳에 사용됩니다.",
    image: null
  },
  {
    id: 84,
    question: "옥내 저압 배선에서 금속관 공사를 할 때 관의 두께에 대한 기준으로 틀린 것은?",
    options: [
      "콘크리트에 매설하는 관은 두께 $1.2[mm]$ 이상일 것",
      "매설하지 않는 관은 두께 $1.0[mm]$ 이상일 것",
      "이음매가 있는 관은 이음매를 매끄럽게 할 것",
      "금속관에는 제3종 접지공사를 할 것"
    ],
    answer: 4,
    explanation: "KEC 개정 전 기준상 금속관 접지는 400V 미만 제3종, 400V 이상 특별 제3종이었으나, 문제 원문상의 '틀린 기준'을 찾는 문맥에 따라 접지 관련 항목이 주로 답으로 처리됩니다.",
    image: null
  },
  {
    id: 85,
    question: "고압 가공전선이 철도를 횡단하는 경우 궤조면상의 높이는 몇 $[m]$ 이상이어야 하는가?",
    options: [
      "5",
      "5.5",
      "6",
      "6.5"
    ],
    answer: 4,
    explanation: "고압 가공전선로의 철도 횡단 높이는 6.5m 이상입니다.",
    image: null
  },
  {
    id: 86,
    question: "사용전압 $154[kV]$인 가공전선과 가공약전류전선이 교차하는 경우, 이들 사이의 이격거리는 몇 $[m]$ 이상이어야 하는가? (단, 전선이 양호한 경우이다.)",
    options: [
      "3.2",
      "3.6",
      "4.4",
      "4.8"
    ],
    answer: 4,
    explanation: "기준 $4.8m + (16-10) \\times 0.12$ 등의 계산식에 의해 도출되는 결과값 중 원문 정답은 4.8m를 기준으로 합니다.",
    image: null
  },
  {
    id: 87,
    question: "가공전선로의 지지물에 하중이 가하여지는 경우, 그 하중을 받는 지지물의 기초 안전율은 얼마 이상이어야 하는가? (단, 이상 시 상정하중은 무관)",
    options: [
      "1.5",
      "2.0",
      "2.5",
      "3.0"
    ],
    answer: 2,
    explanation: "가공전선로 지지물의 기초 안전율은 일반적으로 2.0 이상이어야 합니다.",
    image: null
  },
  {
    id: 88,
    question: "금속제 외함을 가진 저압의 기계기구로서 사람이 쉽게 접촉될 우려가 있는 곳에 시설하는 경우, 전기를 공급받는 전로에 지락이 생겼을 때 자동적으로 전로를 차단하는 장치를 설치해야 하는 사용전압 기준은?",
    options: [
      "30[V] 초과",
      "50[V] 초과",
      "100[V] 초과",
      "150[V] 초과"
    ],
    answer: 2,
    explanation: "사용전압 50V를 초과하는 저압 기계기구로서 사람이 쉽게 접촉할 우려가 있는 곳에는 누전차단기를 설치해야 합니다.",
    image: null
  },
  {
    id: 89,
    question: "옥내 배선의 사용전압이 $400[V]$ 미만인 경우 사용하는 전선으로 옳은 것은?",
    options: [
      "지름 $1.6[mm]$ 이상의 경동선",
      "지름 $2.0[mm]$ 이상의 경동선",
      "단면적 $2.5[mm^2]$ 이상의 연동선",
      "단면적 $4.0[mm^2]$ 이상의 연동선"
    ],
    answer: 3,
    explanation: "일반적인 옥내 배선에는 단면적 2.5mm² 이상의 연동선을 사용합니다.",
    image: null
  },
  {
    id: 90,
    question: "수소냉각식 발전기의 시설 기준으로 틀린 것은?",
    options: [
      "발전기 안의 수소 순도가 85% 이하로 저하한 경우 경보장치를 시설할 것",
      "수소를 공급하거나 방출할 수 있는 장치를 시설할 것",
      "발전기 안의 수소 온도를 계측하는 장치를 시설할 것",
      "발전기는 기밀 구조의 것이고 수소가 대기 중에서 폭발하지 않도록 할 것"
    ],
    answer: 1,
    explanation: "수소 순도가 85% 이하가 아니라 **90%** 이하로 저하한 경우에 경보장치를 시설해야 합니다.",
    image: null
  },
  {
    id: 91,
    question: "터널 내에 시설하는 사용전압 $220[V]$인 전구선이 가공전선과 접속되는 경우, 지표상 높이는 몇 $[m]$ 이상이어야 하는가?",
    options: [
      "2.5",
      "3.0",
      "4.0",
      "5.0"
    ],
    answer: 4,
    explanation: "터널 내 전선이 외부 가공전선과 접속 시 도로 상 높이는 5m 이상이어야 합니다.",
    image: null
  },
  {
    id: 92,
    question: "흥행장의 400[V] 미만 저압 옥내배선, 전구선 또는 이동전선의 시설 기준으로 틀린 것은?",
    options: [
      "무대용 전구선은 0.75[mm²] 이상의 캡타이어 케이블을 사용할 것",
      "플라이 덕트 내부의 전선은 과전류 차단기를 시설할 것",
      "이동전선은 지면으로부터 2.5[m] 이상의 높이에 시설할 것",
      "사용전압은 400[V] 미만일 것"
    ],
    answer: 3,
    explanation: "이동전선 시설 높이에 대한 2.5m 기준은 해당 법규의 예외 사항이나 특정 상황에 따라 다르게 적용되므로 오답으로 분류됩니다.",
    image: null
  },
  {
    id: 93,
    question: "지중 전선로를 직접 매설식에 의하여 시설하는 경우, 차량 기타 중량물의 압력을 받을 우려가 있는 장소에서의 매설 깊이는 몇 $[m]$ 이상인가?",
    options: [
      "0.6",
      "1.0",
      "1.2",
      "1.5"
    ],
    answer: 2,
    explanation: "직접 매설식에서 중량물의 압력이 있는 장소는 1.0m(개정 전 1.2m였으나 현재 1.0m로 PDF 원문 반영) 이상입니다.",
    image: null
  },
  {
    id: 94,
    question: "발전소, 변전소의 울타리, 담 등의 시설 시, 울타리 높이와 울타리로부터 충전부까지의 거리의 합은 35[kV] 이하에서 몇 $[m]$ 이상인가?",
    options: [
      "5",
      "6",
      "7",
      "8"
    ],
    answer: 1,
    explanation: "35kV 이하에서의 울타리 높이와 이격거리의 합은 5m 이상입니다.",
    image: null
  },
  {
    id: 95,
    question: "고압 가공전선로의 지지물로 철근 콘크리트주를 사용하는 경우, 경간은 몇 $[m]$ 이하인가?",
    options: [
      "100",
      "150",
      "250",
      "600"
    ],
    answer: 2,
    explanation: "고압 가공전선로에서 A종 철근콘크리트주의 표준 경간은 150m 이하입니다.",
    image: null
  },
  {
    id: 96,
    question: "교류 전차선로의 지지물에 시설하는 흡상변압기 등의 충전부분은 지표상 몇 $[m]$ 이상의 높이에 시설해야 하는가?",
    options: [
      "4.0",
      "4.5",
      "5.0",
      "6.0"
    ],
    answer: 3,
    explanation: "교류 전차선로의 흡상변압기 등 충전부 시설 높이는 지표상 5m 이상입니다.",
    image: null
  },
  {
    id: 97,
    question: "특별고압 가공전선로에서 발생하는 극저주파 전계는 지표상 $1[m]$ 높이에서 몇 $[kV/m]$ 이하가 되도록 시설해야 하는가?",
    options: [
      "2.5",
      "3.5",
      "4.5",
      "5.5"
    ],
    answer: 2,
    explanation: "지표상 1m 높이에서의 전계는 3.5kV/m 이하를 유지해야 합니다.",
    image: null
  },
  {
    id: 98,
    question: "전격살충기의 전격격자는 지표상 몇 $[m]$ 이상의 높이에 시설해야 하는가?",
    options: [
      "2.5",
      "3.5",
      "4.5",
      "5.5"
    ],
    answer: 2,
    explanation: "전격살충기는 지표상 3.5m 이상의 높이에 시설해야 합니다.",
    image: null
  },
  {
    id: 99,
    question: "옥내 저압 배선을 애자공사로 하는 경우, 전선과 조영재 사이의 이격거리는 사용전압이 $400[V]$ 미만인 경우 몇 $[cm]$ 이상인가?",
    options: [
      "2.5",
      "4.5",
      "6.0",
      "12"
    ],
    answer: 1,
    explanation: "400V 미만 애자공사 시 전선과 조영재 사이의 이격거리는 2.5cm 이상입니다.",
    image: null
  },
  {
    id: 100,
    question: "가공전선로의 지지물에 시설하는 통신선과 저압 가공전선 사이의 이격거리는 몇 $[cm]$ 이상인가?",
    options: [
      "30",
      "60",
      "100",
      "120"
    ],
    answer: 2,
    explanation: "저압 가공전선과 가공통신선 사이의 이격거리는 60cm 이상입니다.",
    image: null
  }
];

export default questions;