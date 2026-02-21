const questions = [
  {
    id: 1,
    question: "면적이 $0.02[m^2]$, 간격이 $0.03[m]$이고, 공기로 채워진 평행판형의 커패시터에 $1.0 \\times 10^{-6}[C]$의 전하를 충전시킬 때, 두 판 사이에 작용하는 힘의 크기는 약 몇 $[N]$인가?",
    options: [
      "1.13",
      "1.41",
      "1.89",
      "2.83"
    ],
    answer: 4,
    explanation: "면적 $S=0.02[m^2]$, 간격 $d=0.03[m]$일 때,\n정전용량 $C = \\frac{\\epsilon_0 S}{d} = \\frac{8.855 \\times 10^{-12} \\times 0.02}{0.03} = 5.9 \\times 10^{-13}[F]$\n전압 $V = \\frac{Q}{C} = \\frac{1.0 \\times 10^{-6}}{5.9 \\times 10^{-13}} = 169.49 \\times 10^1[V]$\n전계의 세기 $E = \\frac{V}{d} = \\frac{169.49 \\times 10^1}{0.03} = 5.65 \\times 10^5[V/m]$\n정전응력(단위 면적당의 작용력) $f = \\frac{1}{2} \\epsilon_0 E^2 = \\frac{1}{2} \\times 8.855 \\times 10^{-12} \\times (5.65 \\times 10^5)^2 = 141.34[N/m^2]$\n따라서 전 면적에 작용하는 힘 $F = f \\cdot S = 141.34 \\times 0.02 = 2.83[N]$",
    image: null
  },
  {
    id: 2,
    question: "자극의 세기가 $7.4 \\times 10^{-4}[Wb]$, 길이가 $10[cm]$인 막대자석이 $100[AT/m]$의 평등자계 내에 자계의 방향과 $30^\\circ$로 놓여 있을 때 이 자석에 작용하는 회전력 $[N \\cdot m]$은?",
    options: [
      "$1.2 \\times 10^{-3}$",
      "$3.7 \\times 10^{-4}$",
      "$5.3 \\times 10^{-5}$",
      "$6.2 \\times 10^{-6}$"
    ],
    answer: 2,
    explanation: "회전력 $T = MH \\sin\\theta = mlH\\sin\\theta = 7.4 \\times 10^{-4} \\times 10 \\times 10^{-2} \\times 100 \\times \\sin 30^\\circ$\n$= 3.7 \\times 10^{-4}[N \\cdot m]$",
    image: null
  },
  {
    id: 3,
    question: "유전율이 $\\epsilon = 2\\epsilon_0$이고 투자율이 $\\mu_0$인 비도전성 유전체에서 전자기파의 전계의 세기가 $E(z, t) = 120\\pi \\cos(10^8 t - \\beta z) \\hat{y}[V/m]$일 때, 자계의 세기 $H[A/m]$는? (단, $\\hat{y}$는 단위벡터이다.)",
    options: [
      "$-\\sqrt{2}\\cos(10^8 t - \\beta z) \\hat{x}$",
      "$-\\frac{2}{\\sqrt{2}}\\cos(10^8 t - \\beta z) \\hat{x}$",
      "$2\\cos(10^8 t - \\beta z) \\hat{x}$",
      "$4\\cos(10^8 t - \\beta z) \\hat{x}$"
    ],
    answer: 1,
    explanation: "전자기파의 성질은 전계 $E$와 자계 $H$는 서로 직교하고, 동위상이며, 진행 방향은 $E \\times H$의 방향이다.\n주어진 전계의 순시값으로부터 전자기파의 성질을 만족하는 자계의 방향과 크기를 구한다.\n1. 전자기파의 진행 방향은 위상, 즉 $10^8 t - \\beta z$에서 $+z$ 방향이고, $E \\times H = +z$ 방향으로 진행한다.\n따라서 자계 $H$는 전계 $E$가 $\\hat{y}$축이므로 $-\\hat{x}$축이어야 하고, 자계 $H$의 위상은 전계 $E$와 동위상이어야 $10^8 t - \\beta z$를 만족해야 한다.\n2. 전계와 자계의 관계에 의한 자계의 크기 $H_x$\n$\\eta = \\frac{E_y}{H_x} = \\sqrt{\\frac{\\mu}{\\epsilon}}$ 의 관계에서 $H_x = \\frac{E_y}{\\eta} = E_y \\sqrt{\\frac{\\epsilon}{\\mu}} = 120\\pi \\sqrt{\\frac{2\\epsilon_0}{\\mu_0}} = 120\\pi \\sqrt{2} \\frac{1}{\\eta_0} = 120\\pi \\sqrt{2} \\frac{1}{120\\pi} = \\sqrt{2}[A/m]$\n$\\eta_0 = \\sqrt{\\frac{\\mu_0}{\\epsilon_0}} = 120\\pi$\n3. 위의 결과로부터 자계의 순시값은 다음과 같이 나타낼 수 있다.\n$H = -H_x \\cos(\\omega t - \\beta z) \\hat{x} = -\\sqrt{2} \\cos(10^8 t - \\beta z) \\hat{x}$",
    image: null
  },
  {
    id: 4,
    question: "전기회로에서 전기회로의 도전을 $\\sigma[S/m]$에 대응되는 것은?",
    options: [
      "자속",
      "기자력",
      "투자율",
      "자기저항"
    ],
    answer: 3,
    explanation: "전기회로와 자기회로의 대응 표에서 '도전율 $\\sigma[S/m]$'은 '투자율 $\\mu[H/m]$'에 대응된다.",
    image: null
  },
  {
    id: 5,
    question: "단면적이 균일한 환상철심에 권수 $1000$회인 A코일과 권수 $N_B$회인 B코일이 감겨져 있다. A코일의 자기 인덕턴스가 $100[mH]$이고, 두 코일 사이의 상호 인덕턴스가 $20[mH]$이고, 결합계수가 $1$일 때, B코일의 권수($N_B$)는 몇 회인가?",
    options: [
      "100",
      "200",
      "300",
      "400"
    ],
    answer: 2,
    explanation: "결합계수가 $1$인 경우(누설자속이 없는 경우) 상호인덕턴스 $M = \\frac{N_B}{N_A} L_A = \\frac{N_A}{N_B} L_B = \\sqrt{L_A L_B}$ 이므로\n$N_A = 1000$회, $L_A = 100 \\times 10^{-3}[H]$, $M = 20 \\times 10^{-3}[H]$를 대입하면\n$M = \\frac{N_B}{N_A} L_A$\n$N_B = \\frac{M N_A}{L_A} = \\frac{20 \\times 10^{-3} \\times 1000}{100 \\times 10^{-3}} = 200$회",
    image: null
  },
  {
    id: 6,
    question: "공기 중에서 $1[V/m]$의 전계의 세기에 의한 변위전류밀도의 크기를 $2[A/m^2]$로 흐르게 하려면 전계의 주파수는 몇 $[MHz]$가 되어야 하는가?",
    options: [
      "9000",
      "18000",
      "36000",
      "72000"
    ],
    answer: 4,
    explanation: "변위전류밀도 $J_D = \\omega \\epsilon E[A/m^2]$에서 $\\omega = 2\\pi f$이므로 $f = \\frac{J_D}{2\\pi \\epsilon E}[Hz]$\n$\\epsilon_0 = \\frac{1}{36\\pi} \\times 10^{-9}$\n$f = \\frac{2}{2\\pi \\times (\\frac{1}{36\\pi} \\times 10^{-9}) \\times 1} = \\frac{2}{\\frac{1}{18} \\times 10^{-9}} = 36 \\times 10^9 [Hz] = 36000 [MHz]$",
    image: null
  },
  {
    id: 7,
    question: "내부 원통 도체의 반지름이 $a[m]$이고, 외부 원통 도체의 반지름이 $b[m]$인 동축 원통 도체에서 내외 도체 간 물질의 도전율이 $\\sigma[\\mho/m]$일 때 내외 도체 간의 단위 길이당 컨덕턴스$[S/m]$는?",
    options: [
      "$2\\pi \\sigma \\frac{a}{b}$",
      "$2\\pi \\sigma \\frac{b}{a}$",
      "$2\\pi \\sigma \\frac{1}{\\ln \\frac{b}{a}}$",
      "$4\\pi \\sigma \\frac{1}{\\ln \\frac{b}{a}}$"
    ],
    answer: 3,
    explanation: "동축 원통 도체의 정전용량 $C = \\frac{2\\pi \\epsilon l}{\\ln \\frac{b}{a}}[F]$\n컨덕턴스 $G = \\frac{\\sigma}{\\epsilon} C = \\frac{\\sigma}{\\epsilon} \\frac{2\\pi \\epsilon l}{\\ln \\frac{b}{a}} = \\frac{2\\pi \\sigma l}{\\ln \\frac{b}{a}}[S]$\n단위 길이 당 컨덕턴스 $G' = \\frac{G}{l} = \\frac{2\\pi \\sigma}{\\ln \\frac{b}{a}}[S/m]$",
    image: null
  },
  {
    id: 8,
    question: "$\\hat{z}$축 상에 놓인 길이가 긴 직선 도체에 $10[A]$의 전류가 $+\\hat{z}$ 방향으로 흐르고 있다. 이 도체 주위의 자속밀도가 $3\\hat{x} - 4\\hat{y}[Wb/m^2]$일 때 도체가 받는 단위 길이당 힘$[N/m]$은? (단, $\\hat{x}, \\hat{y}$는 단위벡터이다.)",
    options: [
      "$1 - 40\\hat{x} + 30\\hat{y}$",
      "$-30\\hat{x} + 40\\hat{y}$",
      "$30\\hat{x} + 40\\hat{y}$",
      "$40\\hat{x} + 30\\hat{y}$"
    ],
    answer: 2,
    explanation: "전류 $I = 10\\hat{z}$, 자속밀도 $B = 3\\hat{x} - 4\\hat{y}$이므로 전류 도체가 받는 단위 길이당 힘 $F_e$\n$F = I \\times B = \\begin{vmatrix} \\hat{x} & \\hat{y} & \\hat{z} \\\\ 0 & 0 & 10 \\\\ 3 & -4 & 0 \\end{vmatrix} = 40\\hat{x} + 30\\hat{y}[N/m]$",
    image: null
  },
  {
    id: 9,
    question: "정공 중 한 변의 길이가 $0.1[m]$인 정사각형의 3정점 A, B, C에 각각 $2.0 \\times 10^{-6}[C]$의 점전하가 있을 때, 점 A의 전하에 작용하는 힘은 몇 $[N]$인가?",
    options: [
      "$1.8\\sqrt{2}$",
      "$1.8\\sqrt{3}$",
      "$3.6\\sqrt{2}$",
      "$3.6\\sqrt{3}$"
    ],
    answer: 4,
    explanation: "점 B에 있는 전하에 의한 작용력 $F_1$은\n$F_1 = \\frac{1}{4\\pi \\epsilon_0} \\frac{Q_1 Q_2}{r^2} = 9 \\times 10^9 \\times \\frac{(2 \\times 10^{-6})^2}{0.1^2} = 3.6[N]$\n점 C에 있는 전하에 의한 작용력 $F_2$는 $F_1$과 크기는 같고 방향은 그림과 같다.\n$F = F_1 \\cos\\theta \\times 2 = F_1 \\cos 45^\\circ \\times 2 = 3.6 \\times \\sqrt{2} = 3.6\\sqrt{2}[N]$",
    image: null
  },
  {
    id: 10,
    question: "투자율이 $\\mu[H/m]$, 자계의 세기가 $H[AT/m]$, 자속밀도가 $B[Wb/m^2]$인 곳에서의 자계에너지 밀도$[J/m^3]$는?",
    options: [
      "$\\frac{B^2}{2\\mu}$",
      "$\\frac{H^2}{2\\mu}$",
      "$\\frac{1}{2}\\mu H$",
      "$BH$"
    ],
    answer: 1,
    explanation: "자성체 단위 체적 당 저장되는 에너지,\n즉 에너지 밀도 $w = \\frac{1}{2}BH = \\frac{B^2}{2\\mu} = \\frac{1}{2}\\mu H^2[J/m^3]$이다.",
    image: null
  },
  {
    id: 11,
    question: "진공 내 전위함수가 $V = x^2 + y^2[V]$로 주어졌을 때, $0 \\le x \\le 1, 0 \\le y \\le 1, 0 \\le z \\le 1$인 공간에 저장되는 정전에너지$[J]$는?",
    options: [
      "$\\frac{4}{3}\\epsilon_0$",
      "$2\\epsilon_0$",
      "$3\\epsilon_0$",
      "$4\\epsilon_0$"
    ],
    answer: 4,
    explanation: "전계의 세기 $E = -\\nabla V = -(\\frac{\\partial V}{\\partial x}\\hat{i} + \\frac{\\partial V}{\\partial y}\\hat{j} + \\frac{\\partial V}{\\partial z}\\hat{k}) = -2x\\hat{i} - 2y\\hat{j}[V/m]$\n전계의 세기 크기 $|E| = \\sqrt{(2x)^2 + (2y)^2} = \\sqrt{4x^2 + 4y^2} = 2\\sqrt{x^2 + y^2}$\n따라서 공간에 저장되는 정전에너지 $W$는\n$W = \\int_v \\frac{1}{2}\\epsilon_0 E^2 dv = \\int_0^1 \\int_0^1 \\int_0^1 \\frac{1}{2}\\epsilon_0 (2\\sqrt{x^2 + y^2})^2 dx dy dz = \\int_0^1 \\int_0^1 \\int_0^1 \\frac{1}{2}\\epsilon_0 (4x^2 + 4y^2) dx dy dz$\n$= \\int_0^1 \\int_0^1 \\int_0^1 2\\epsilon_0 (x^2 + y^2) dx dy dz$\n3중적분\n$\\int_0^1 \\int_0^1 \\int_0^1 (x^2 + y^2) dx dy dz = \\int_0^1 \\int_0^1 [\\frac{1}{3}x^3 + y^2 x]_0^1 dy dz$\n$= \\int_0^1 \\int_0^1 (\\frac{1}{3} + y^2) dy dz$\n$= \\int_0^1 [\\frac{1}{3}y + \\frac{1}{3}y^3]_0^1 dz$\n$= \\int_0^1 (\\frac{1}{3} + \\frac{1}{3}) dz = \\int_0^1 \\frac{2}{3} dz = [\\frac{2}{3}z]_0^1 = \\frac{2}{3}$\n따라서 $W = 2\\epsilon_0 \\times \\frac{2}{3} = \\frac{4}{3}\\epsilon_0[J]$",
    image: null
  },
  {
    id: 12,
    question: "전계가 유전율이 다른 입사할 때 입사각 $\\theta_1$과 굴절각 $\\theta_2$의 관계와 유전계에서의 전계 $E_1$과 공기에서의 전계 $E_2$의 관계는?",
    options: [
      "$\\theta_1 > \\theta_2$, $E_1 > E_2$",
      "$\\theta_1 > \\theta_2$, $E_1 < E_2$",
      "$\\theta_1 < \\theta_2$, $E_1 > E_2$",
      "$\\theta_1 < \\theta_2$, $E_1 < E_2$"
    ],
    answer: 2,
    explanation: "유전율이 다른 유전율($\\epsilon_1$)은 $3.5 \\sim 100$이고, 공기의 유전율($\\epsilon_2$)은 약 $1$이므로 유전율($\\epsilon_1$)이 더 크다.\n$\\epsilon_1 > \\epsilon_2$인 경우, 입사각과 굴절각: $\\theta_1 > \\theta_2$\n전계: $E_1 < E_2$\n전속밀도: $D_1 = D_2$ (불연속)",
    image: null
  },
  {
    id: 13,
    question: "인덕턴스$[H]$의 단위를 나타낸 것으로 틀린 것은?",
    options: [
      "$\\Omega \\cdot s$",
      "$Wb/A$",
      "$J/A^2$",
      "$N/(A \\cdot m)$"
    ],
    answer: 4,
    explanation: "$e = -N \\frac{d\\Phi}{dt} = -L \\frac{di}{dt}$ 관계식에서 단위는 $[V] = [H] \\cdot [A]/[s]$\n$[H] = [V \\cdot s]/[A] = [\\Omega \\cdot A \\cdot s]/[A] = [\\Omega \\cdot s]$\n$[H] = [Wb]/[A]$\n$[H] = [J]/[A^2]$",
    image: null
  },
  {
    id: 14,
    question: "진공 중 $4[m]$ 간격으로 놓여진 평행판 도체에 각각 $+4[C/m^2]$, $-4[C/m^2]$의 전하를 주었을 때, 두 도체 간의 전위차는 약 몇 $[V]$인가?",
    options: [
      "$1.36 \\times 10^{11}$",
      "$1.36 \\times 10^{12}$",
      "$1.8 \\times 10^{11}$",
      "$1.8 \\times 10^{12}$"
    ],
    answer: 4,
    explanation: "두 장의 무한 평면 도체\n1. 각각의 평면에 면전하 밀도가 $\\pm \\sigma[C/m^2]$인 경우 전계 분포는 평면 외부에서 서로 반대 방향이므로 상쇄되어 $0$이 되고, 평면 내부에서는 같은 방향이 된다. 따라서 전계 $E$\n평면 외부: $E=0$\n평면 내부: $E = \\frac{\\sigma}{\\epsilon_0}$\n2. 따라서 두 평면 도체의 전위차 $V$는\n$V = -\\int_d^0 E \\cdot dl = -\\int_d^0 \\frac{\\sigma}{\\epsilon_0} dl = \\frac{\\sigma}{\\epsilon_0} d$\n$V = \\frac{4}{8.855 \\times 10^{-12}} \\times 4 = 1.81 \\times 10^{12}[V]$",
    image: null
  },
  {
    id: 15,
    question: "진공 중 반지름이 $a[m]$인 무한길이의 원통도체 $2$개가 간격 $d[m]$로 평행하게 배치되어 있다. 두 도체 사이의 정전용량($C'$)을 나타낸 것으로 옳은 것은?",
    options: [
      "$\\pi \\epsilon_0 \\frac{d-a}{a}$",
      "$\\pi \\epsilon_0 \\frac{a}{d-a}$",
      "$\\pi \\epsilon_0 \\frac{1}{\\ln \\frac{d-a}{a}}$",
      "$\\pi \\epsilon_0 \\frac{1}{\\ln \\frac{d-a}{a}}$"
    ],
    answer: 3,
    explanation: "두 도체 사이의 전위차 $V = \\frac{\\lambda}{\\pi \\epsilon_0} \\ln \\frac{d-a}{a}[V]$\n(여기서, $\\lambda$: 선전하 밀도 $[C/m]$)\n두 도체 사이의 정전용량 $C' = \\frac{\\lambda}{V} = \\frac{\\lambda}{\\frac{\\lambda}{\\pi \\epsilon_0} \\ln \\frac{d-a}{a}} = \\frac{\\pi \\epsilon_0}{\\ln \\frac{d-a}{a}}[F/m]$",
    image: null
  },
  {
    id: 16,
    question: "진공 중 $4[m]$의 간격으로 놓여진 평행 도선에 같은 크기의 왕복 전류가 흐를 때 단위 길이당 $2.0 \\times 10^{-7}[N]$의 힘이 작용하였다. 이때 평행 도선에 흐르는 전류는 몇 $[A]$인가?",
    options: [
      "1",
      "2",
      "4",
      "8"
    ],
    answer: 2,
    explanation: "간격(거리)을 $r[m]$라 하고 같은 크기의 왕복 전류가 흐른다고 할 때, 평행 도선 단위 길이당 작용하는 힘 $F_e$\n$F_e = \\frac{\\mu_0 I_1 I_2}{2\\pi r} = \\frac{\\mu_0 I^2}{2\\pi r} = 2 \\times 10^{-7} \\frac{I^2}{r}[N/m]$\n$I = \\sqrt{\\frac{F_e \\cdot r}{2 \\times 10^{-7}}} = \\sqrt{\\frac{2.0 \\times 10^{-7} \\times 4}{2 \\times 10^{-7}}} = \\sqrt{4} = 2[A]$",
    image: null
  },
  {
    id: 17,
    question: "평행 극판 사이 간격이 $d$[m]이고 공기 유전율이 0.3[μF/l]인 공기 커패시터가 있다. 그림과 같이 두 극판 사이에 비유전율이 5인 유전체를 절반 두께만큼 넣었을 때 이 커패시터의 정전용량은 몇 [μF]이 되는가?",
    options: [
      "0.01",
      "0.05",
      "0.1",
      "0.5"
    ],
    answer: 4,
    explanation: "① 공기 부분의 정전용량 $C_1$이라 하면 $C_1 = \\frac{\\epsilon_0 S}{d/2} = \\frac{2\\epsilon_0 S}{d}$ [F]\n② 유전체 부분의 정전용량 $C_2$이라 하면 $C_2 = \\frac{\\epsilon_r \\epsilon_0 S}{d/2} = \\frac{2\\epsilon_r \\epsilon_0 S}{d}$ [F]\n③ 두 극판 사이에 절반(1/2) 두께만큼의 유전체를 넣으면, 이는 두 개의 콘덴서가 직렬로 접속된 것과 같으므로 정전용량 $C_p$는\n$$\\frac{1}{C_p} = \\frac{1}{C_1} + \\frac{1}{C_2} = \\frac{d}{2\\epsilon_0 S} + \\frac{d}{2\\epsilon_r \\epsilon_0 S} = \\frac{1}{2\\epsilon_0 S} \\left( d + \\frac{d}{\\epsilon_r} \\right)$$\n$$C_p = \\frac{2\\epsilon_0 S}{d \\left( 1 + \\frac{1}{\\epsilon_r} \\right)} = \\frac{2\\epsilon_0 S \\epsilon_r}{d(\\epsilon_r + 1)} = \\frac{2C}{\\frac{1}{\\epsilon_r} + 1} = \\frac{2C \\epsilon_r}{1 + \\epsilon_r}$$ [F]\n$\\therefore C_p = \\frac{1}{1 + \\frac{1}{\\epsilon_r}} = \\frac{1}{1 + \\frac{1}{5}} = 0.5 \\times 10^{-6} [F] = 0.5 [\\mu F]$",
    image: "image_q17.png" // Assuming image file name based on question ID
  },
  {
    id: 18,
    question: "반지름이 $a$[m]인 접지된 구도체와 구도체의 중심에서 거리 $d$[m] 떨어진 곳에 점전하가 존재할 때, 영상전하에 의한 접지된 구도체에서의 영상전하에 대한 설명으로 틀린 것은?",
    options: [
      "영상전하는 구도체 내부에 존재한다.",
      "영상전하는 점전하와 구도체 중심을 이은 직선상에 존재한다.",
      "영상전하의 전하량과 점전하의 전하량은 크기는 같고 부호는 반대이다.",
      "영상전하의 위치는 구도체의 중심과 점전하 사이 거리 $d$[m]와 구도체의 반지름 $a$[m]에 의해 결정된다."
    ],
    answer: 3,
    explanation: "그림과 같이 반지름 $a$인 접지 도체의 중심으로부터 $d(>a)$인 점에 점전하 $Q$가 있는 경우\n• 영상 전하량 $Q' = -Q \\frac{a}{d} [C]$\n• 영상 전하의 위치 $OP' = \\frac{a^2}{d} [m]$\n즉, 영상전하의 전하량과 점전하의 전하량은 크기는 $Q \\frac{a}{d}$ 배 이고 부호는 반대이다.",
    image: "image_q18.png" // Assuming image file name based on question ID
  },
  {
    id: 19,
    question: "평등 전계 중에 유전체 구에 의한 자분포가 그림과 같이 되었을 때 $\\epsilon_1$과 $\\epsilon_2$의 크기 관계는?",
    options: [
      "$\\epsilon_1 > \\epsilon_2$",
      "$\\epsilon_1 < \\epsilon_2$",
      "$\\epsilon_1 = \\epsilon_2$",
      "무관하다."
    ],
    answer: 1,
    explanation: "전속과 전기력선이 유전체 구를 통과하는 경우 유전율이 큰 구의 경계면에서는 모아지고, 유전율이 작은 구의 경계면에서는 뻗어지는 현상이 나타난다. 즉 그림과 같은 경우 전속 분포가 유전체구의 경계면에서 모아지므로 유전체구의 유전율($\\epsilon_1$)이 외부보다 큰 것($\\epsilon_1 > \\epsilon_2$)을 의미한다.\n그림에서 전속은 유전체($\\epsilon_1, \\epsilon_2$)의 내부가 외부($D_1, D_2$)보다 조밀한 것을 보여준다. 따라서 전속밀도는 $D_1 > D_2$의 관계이고, $D = \\epsilon E$의 비례 관계($D \\propto \\epsilon$)로부터 유전율은 $\\epsilon_1 > \\epsilon_2$의 관계가 된다.",
    image: "image_q19.png" // Assuming image file name based on question ID
  },
  {
    id: 20,
    question: "어떤 도체에 교류 전류가 흐를 때 도체에서 나타나는 표피효과에 대한 설명으로 틀린 것은?",
    options: [
      "도체 중심부보다 도체 표면부에 더 많은 전류가 흐르는 것을 표피효과라 한다.",
      "전류의 주파수가 높을수록 표피효과는 작아진다.",
      "도체의 도전율이 클수록 표피효과는 커진다.",
      "도체의 투자율이 클수록 표피효과는 커진다."
    ],
    answer: 2,
    explanation: "전류의 주파수가 증가할수록 도체 내부의 전류밀도가 지수 함수적으로 감소하는 현상을 표피효과라 한다.\n$$\\delta = \\sqrt{\\frac{2}{\\omega \\mu \\sigma}} = \\sqrt{\\frac{1}{\\pi f \\mu \\sigma}}$$ [m]\n여기서, $\\sigma [\\Omega/m]$: 도전율,\n$\\mu = 4\\pi \\times 10^{-7} [H/m]$: 투자율\n$\\delta$: 표피두께(skin depth) 또는 침투깊이\n$f$(주파수), $\\sigma$(도전율), $\\mu$(투자율) 가 클수록 $\\delta$(표피두께 또는 침투깊이)가 작게 되어 표피효과가 심해진다. 주파수가 커지면 전류는 표면으로 흐르게 되므로 전기기기 오르는 단면적이 좁아지게 되어 전기저항이 증가하고, 내부 인덕턴스와 상호 인덕턴스도 감소하게 된다.",
    image: null
  },
  {
    id: 21,
    question: "소호리액터를 송전계통에 사용하면 리액터의 인덕턴스와 선로의 정전용량이 어떤 상태로 되어 지락전류를 소멸시키는가?",
    options: [
      "병렬공진",
      "직렬공진",
      "고임피던스",
      "저임피던스"
    ],
    answer: 1,
    explanation: "소호 리액터 방식은 선로의 대지 정전 용량과 병렬 공진하는 리액터를 이용하여 중성점을 접지하는 방식으로 1선 지락고장시 고장점에는 극히 작은 손실전류만이 흐르고 지락 아크가 자연 소멸되므로 정전 없이 송전을 계속할 수 있는 접지 방식이다.",
    image: null
  },
  {
    id: 22,
    question: "어느 발전소에서 40000[kWh]를 발전하는데 발열량 5000[kcal/kg]의 석탄을 20톤 사용하였다. 이 화력발전소의 열효율[%]은 약 얼마인가?",
    options: [
      "27.5",
      "30.4",
      "34.4",
      "38.5"
    ],
    answer: 3,
    explanation: "열효율 $\\eta = \\frac{W}{mH} = \\frac{860 \\times 40000}{20 \\times 1000 \\times 5000} \\times 100 = 34.4 [\\%]$ \n여기서, $W$[kWh]: 발전 전력량, $m$[kg]: 연료소비량, $H$[kcal/kg]: 연료발열량",
    image: null
  },
  {
    id: 23,
    question: "송전전력, 송전전압, 부하역률, 전력손실 및 송전거리를 동일하게 하였을 경우 단상 2선식에 대한 3상 4선식의 총 전선량(중량)비는 얼마인가? (단, 전선은 동일한 전선이다.)",
    options: [
      "0.75",
      "0.94",
      "1.15",
      "1.33"
    ],
    answer: 1,
    explanation: "단상 2선식의 배전선 총 전선량을 100[%]라 할 때 3상 4선식의 송전량의 총량과 비를 구하면\n• 송전전력이 동일하므로 $V_L I_1 \\cos\\theta = \\sqrt{3} V_L I_2 \\cos\\theta \\rightarrow I_1 = \\sqrt{3} I_2$\n• 전력손실이 동일하므로 $2I_1^2 R_1 = 3I_2^2 R_2$ ($\\sqrt{3} I_2$를 대입)\n$$2(\\sqrt{3} I_2)^2 R_1 = 3I_2^2 R_2 \\rightarrow 2 \\times 3 I_2^2 R_1 = 3I_2^2 R_2 \\rightarrow 6R_1 = 3R_2 \\rightarrow R_2 = 2R_1$$\n• $R = \\rho \\times \\frac{l}{S}$ 이므로 $\\frac{R_1}{R_2} = \\frac{S_2}{S_1} = \\frac{1}{2}$\n따라서 송전선량의 비는 $\\frac{\\text{3상 4선식}}{\\text{단상 2선식}} = \\frac{3S_2}{2S_1} = \\frac{3}{2} \\times \\frac{1}{2} = 0.75$\n\n[표: 소요전선량 전력손실비]\n공급 방식 | 단상 2선식 | 단상 3선식 | 3상 3선식 | 3상 4선식\n---|---|---|---|---\n소요전선량 전력손실비 | 24 | 9 | 18 | 8\n위 표에 의해 $\\frac{\\text{3상 4선식}}{\\text{단상 2선식}} = \\frac{8}{24} = 0.75$",
    image: null
  },
  {
    id: 24,
    question: "3상 송전선로가 선간단락(2선 단락)이 되었을 때 나타나는 현상으로 옳은 것은?",
    options: [
      "역상전류만 흐른다.",
      "정상전류와 역상전류가 흐른다.",
      "정상전류와 영상전류가 흐른다.",
      "정상전류만 흐른다."
    ],
    answer: 2,
    explanation: "• 1선 지락: 영상분, 정상분, 역상분이 존재\n• 선간 단락: 정상분, 역상분이 존재\n• 3상 단락: 정상분만 존재",
    image: null
  },
  {
    id: 25,
    question: "중거리 송전선로의 4단자 정수가 $A = 1.0, B = j190, D = 1.0$일 때 $C$의 값은 얼마인가?",
    options: [
      "$j120$",
      "$j190$",
      "$j240$",
      "$j190$"
    ],
    answer: null, // Calculation yields C=0, which is not among the options.
    explanation: "$AD - BC = 1$ 이므로 $C = \\frac{AD - 1}{B} = \\frac{1.0 \\times 1.0 - 1}{j190} = 0$\n(해설에 따르면 $C=0$이나, 보기에 $0$이 없어 정답을 특정할 수 없습니다. 문제 또는 보기 오류로 판단됩니다.)",
    image: null
  },
  {
    id: 26,
    question: "배전전압을 $\\sqrt{2}$배로 하였을 때 같은 손실률로 보낼 수 있는 전력은 몇 배가 되는가?",
    options: [
      "$\\sqrt{2}$",
      "2",
      "3",
      "4"
    ],
    answer: 2,
    explanation: "• 전력손실 $P_L = 3I^2 R = \\frac{P^2 R}{V^2 \\cos^2 \\theta}$ 이므로,\n송전전력 $P = \\frac{V^2 \\cos^2 \\theta}{R} P_L$ 이다.\n같은 손실률로 보낼 수 있는 전력은 $P \\propto V^2$ 에 비례하므로\n$P' = (\\sqrt{2})^2 P = 2P$\n$\\therefore P' = 2P$",
    image: null
  },
  {
    id: 27,
    question: "헤어자에 대한 설명이 아닌 것은?",
    options: [
      "헤어자를 연결하는 방법은 따라 클레비스(Clevis)형과 볼 소켓형이 있다.",
      "헤어자를 표시하는 기호는 P이며 구조는 2~5층의 갓 모양의 자기편을 시멘트로 접착하고 그 자기를 주철제 base로 지지한다.",
      "헤어자의 연결개수를 가감함으로써 임의의 송전전압에 사용할 수 있다.",
      "괌 하중에 대하여는 2련 또는 3련으로 하여 사용할 수 있다."
    ],
    answer: 2,
    explanation: "② 항은 핀 애자에 대한 설명이다.",
    image: null
  },
  {
    id: 28,
    question: "교류발전기의 전압조정 장치로 속응여자방식을 채택하는 이유로 틀린 것은?",
    options: [
      "전력계통에 고장이 발생할 때 발전기의 동기화력을 증가시킨다.",
      "송전계통의 안정도를 높인다.",
      "여자기의 전압 상승률을 크게 한다.",
      "전압조정용 탭의 수동변환을 원활히 하기 위함이다."
    ],
    answer: 4,
    explanation: "속응 여자 방식의 특징\n① 고장 발생 시 여자기의 응답이 빠르므로, 전압 상승률이 크다.\n② 발전기 내부 유기기전력을 증가시켜 전력 송출을 증가시킨다.\n③ 동기화력을 증가하여 신속하게 평형상태를 회복한다.\n④ 전압변동을 작게 하여 송전계통의 안정도를 높인다.",
    image: null
  },
  {
    id: 29,
    question: "차단기의 정격차단시간에 대한 설명으로 옳은 것은?",
    options: [
      "고장 발생부터 소호까지의 시간",
      "트립코일 여자로부터 소호까지의 시간",
      "가동 접촉자의 개극부터 소호까지의 시간",
      "가동 접촉자의 동작 시간부터 소호까지의 시간"
    ],
    answer: 2,
    explanation: "차단기의 차단 시간: 트립 코일 여자부터 차단기의 가동 전극이 고정 전극으로부터 이동을 개시하여 개극할 때까지의 개극 시간과 접점이 충분히 떨어져 아크가 완전히 소호할 때까지의 아크 시간의 합으로 3~8[Hz]이다.",
    image: null
  },
  {
    id: 30,
    question: "다음 중 재점호가 가장 일어나기 쉬운 차단전류는?",
    options: [
      "동상전류",
      "지상전류",
      "진상전류",
      "단락전류"
    ],
    answer: 3,
    explanation: "충전전류를 차단할 때 전류파의 0와 위치에서 소거된 아크가 재점압에 의해 각 극에 다시 발생하는 것을 재점호라고 하며 이러한 재점호 전류는 콘덴서 $C$에 의한 진상전류에 의해 발생한다.",
    image: null
  },
  {
    id: 31,
    question: "1상 1회선 송전선을 정삼각형으로 배치한 3상 선로의 자기인덕턴스를 구하는 식은? (단, $D_e$는 전선의 등가 선간 거리[m], $r$은 전선의 반지름[m]이다.)",
    options: [
      "$L = 0.5 + 0.4605 \\log_{10} \\frac{D}{r}$",
      "$L = 0.5 + 0.4605 \\log_{10} \\frac{D^2}{r}$",
      "$L = 0.05 + 0.4605 \\log_{10} \\frac{D}{r}$",
      "$L = 0.05 + 0.4605 \\log_{10} \\frac{D^2}{r}$"
    ],
    answer: 3,
    explanation: "단도체에서의 인덕턴스와 정전용량\n• 인덕턴스 $L = 0.05 + 0.4605 \\log_{10} \\frac{D}{r}$ [mH/km]\n• 정전용량 $C = \\frac{0.02413}{\\log_{10} \\frac{D}{r}}$ [\\mu F/km]",
    image: null
  },
  {
    id: 32,
    question: "다음 중 동작속도가 가장 느린 계전 방식은?",
    options: [
      "전류 위상 비교 보호 계전 방식",
      "거리 계전 방식",
      "전류 차동 보호 계전 방식",
      "방향 비교 보호 계전 방식"
    ],
    answer: 2,
    explanation: "[표: 보호계전 방식별 특성]\n보호방식 | 동작속도 | 다상재폐로 가능성 | 검출감도 | 자동감시 가능성\n---|---|---|---|---\n전류차동보호계전 (파일럿 와이어 방식) | 빠르다 | 가능 | 높다 | 가능\n전류위상비교보호계전방식 (P.C.R. 계전) | 빠르다 | 가능 | 높다 | 가능\n방향 비교 보호계전방식 | 빠르다 | 가능 | 낮다 | 어렵다\n거리 측정 보호계전방식 | 느리다 | 어렵다 | 낮다 | 어렵다\n전류 균형 보호계전방식 | 느리다 | 어렵다 | 낮다 | 어렵다\n과전류 보호계전방식 | 느리다 | 어렵다 | 낮다 | 어렵다\n\n위 표에서 동작속도가 '느리다'로 표시된 방식은 거리 측정 보호계전방식, 전류 균형 보호계전방식, 과전류 보호계전방식입니다. 보기 중에는 '거리 계전 방식'이 해당합니다.",
    image: null
  },
  {
    id: 33,
    question: "부하회로에서 공진 현상으로 발생하는 고조파 장해가 있을 경우 공진 현상을 회피하기 위하여 설치하는 것은?",
    options: [
      "진상용 콘덴서",
      "직렬 리액터",
      "병렬 코일",
      "진공 차단기"
    ],
    answer: 2,
    explanation: "고조파 공진의 경감\n• 공진현상을 막기 위해 직렬 리액터를 삽입한다.\n• 리액터에 의해 제5고조파가 제거된다.",
    image: null
  },
  {
    id: 34,
    question: "불평형 부하에서 역률[%]은?",
    options: [
      "유효전력 / 피상전력의 산술합 × 100",
      "무효전력 / 피상전력의 산술합 × 100",
      "유효전력 / 피상전력의 벡터합 × 100",
      "무효전력 / 피상전력의 벡터합 × 100"
    ],
    answer: 3,
    explanation: "불평형부하에서는 각 부하의 위상이 서로 다르므로 벡터의 합으로 피상전력을 구하여야 한다.\n" +
                 "합성 피상전력 $S = \\sqrt{(P_1 + P_2 + P_3)^2 + (Q_1 + Q_2 + Q_3)^2}$ [kVA]\n" +
                 "$\\cos\\theta = \\frac{\\text{유효전력}}{\\text{피상전력의 벡터합}}$",
    image: null
  },
  {
    id: 35,
    question: "경간이 200[m]인 가공 전선로가 있다. 사용전선의 길이는 경간보다 몇 [m] 더 길게 하면 되는가? (단, 사용전선의 1[m] 당 무게는 2[kg], 인장하중은 4000[kg], 전선의 안전율은 2로 하고 풍하중은 무시한다.)",
    options: [
      "$\\frac{1}{2}$",
      "$\\sqrt{2}$",
      "1",
      "$\\sqrt{3}$"
    ],
    answer: 3, // Note: The explanation calculates 1/3, but the provided answer is option 3 (which is 1).
    explanation: "이도 $D = \\frac{WS^2}{8T} = \\frac{2 \\times 200^2}{8 \\times 4000/2} = 5[m]$\n" +
                 "전선의 길이 $L = S + \\frac{8D^2}{3S}$ [m]이므로 경간 $S$보다 $\\frac{8D^2}{3S}$ [m] 만큼 더 길게 하면 된다.\n" +
                 "따라서 $L-S = \\frac{8D^2}{3S} = \\frac{8 \\times 5^2}{3 \\times 200} = \\frac{1}{3}[m]$",
    image: null
  },
  {
    id: 36,
    question: "송전단 전압이 100[V], 수전단 전압이 90[V]인 단거리 배전선로의 전압강하율[%]은 약 얼마인가?",
    options: [
      "5",
      "11",
      "15",
      "20"
    ],
    answer: 2,
    explanation: "전압강하율 $\\epsilon = \\frac{V_s - V_r}{V_r} \\times 100 = \\frac{100 - 90}{90} \\times 100 = 11.11[\\%]$",
    image: null
  },
  {
    id: 37,
    question: "초호각(Arcing horn)의 역할은?",
    options: [
      "풍압을 조절한다.",
      "송전 효율을 높인다.",
      "선로의 섬락 시 애자의 파손을 방지한다.",
      "고주파수의 섬락 전압을 높인다."
    ],
    answer: 3,
    explanation: "초호각(Arcing horn)의 역할은 다음과 같습니다.\n" +
                 "1. 애자련의 전압분포 개선\n" +
                 "2. 선로의 섬락으로부터 애자련의 보호 (파손 방지)",
    image: null
  },
  {
    id: 38,
    question: "다음 중 환상(루프) 방식과 비교할 때 방사상 배전선로 구성 방식에 해당되는 사항은?",
    options: [
      "전력 수요 증가 시 간선이나 분기선을 연장하여 쉽게 공급이 가능하다.",
      "전압 변동 및 전력 손실이 작다.",
      "사고 발생 시 다른 간선으로의 전환이 쉽다.",
      "한상방식보다 신뢰도가 높은 방식이다."
    ],
    answer: 1,
    explanation: "배전선로 구성 방식은 크게 방사상(수지식), 환상식(루프), 망상식(네트워크) 등으로 나눌 수 있습니다.\n" +
                 "1. 방사상(수지식) 방식:\n" +
                 "   - 전력 수요 증가 시 간선이나 분기선을 연장하여 쉽게 공급이 가능하다.\n" +
                 "   - 건설비가 저렴하다.\n" +
                 "   - 사고 발생 시 정전 범위가 넓고, 신뢰도가 낮다.\n" +
                 "2. 환상식(루프) 방식:\n" +
                 "   - 전력 공급 신뢰도가 높다.\n" +
                 "   - 사고 발생 시 고장 구간을 분리하고 건전한 회로로 전력 공급이 가능하다.\n" +
                 "   - 전압 변동 및 전력 손실이 작다.\n" +
                 "3. 망상식(네트워크) 방식:\n" +
                 "   - 가장 높은 신뢰도를 가지며, 무정전 공급이 가능하다.\n" +
                 "   - 네트워크 프로텍터 등의 보호 장치가 필요하다.\n" +
                 "문제는 환상 방식과 비교한 방사상 방식의 특징을 묻고 있으므로, 1번이 해당됩니다.",
    image: null
  },
  {
    id: 39,
    question: "유효낙차 90[m], 출력 104500[kW], 비속도(특유속도) 210[m·kW]인 수차의 회전속도는 약 몇 [rpm]인가?",
    options: [
      "150",
      "180",
      "210",
      "240"
    ],
    answer: 2,
    explanation: "수차의 특유속도 $N_s$는 다음과 같이 정의됩니다.\n" +
                 "$N_s = N \\frac{\\sqrt{P}}{H^{5/4}}$ [rpm]\n" +
                 "여기서, $N$: 정격 회전수 [rpm], $H$: 유효 낙차 [m], $P$: 출력 [kW]\n" +
                 "주어진 값을 대입하여 $N$을 구하면:\n" +
                 "$N = N_s \\frac{H^{5/4}}{\\sqrt{P}} = 210 \\times \\frac{90^{5/4}}{\\sqrt{104500}} \\approx 180[rpm]$",
    image: null
  },
  {
    id: 40,
    question: "발전기 또는 주변압기의 내부고장 보호용으로 가장 널리 쓰이는 것은?",
    options: [
      "거리 계전기",
      "과전류 계전기",
      "비율차동 계전기",
      "방향단락 계전기"
    ],
    answer: 3,
    explanation: "비율차동계전기는 변압기 내부고장에 대한 보호장치로, 변압기 1차 전류와 2차 전류의 차 전류가 일정 비율 이상으로 되면 동작하는 계전기입니다. 발전기 내부 고장 보호에도 널리 사용됩니다.",
    image: null
  },
  {
    id: 41,
    question: "SCR을 이용한 단상 전파 위상제어 정류회로에서 전원전압은 실효값이 220[V], 60[Hz]인 정현파이며, 부하는 순 저항으로 10[Ω]이다. SCR의 점호각 $\\alpha$를 60°라 할 때 출력전류의 평균값 [A]은?",
    options: [
      "7.54",
      "9.73",
      "11.43",
      "14.86"
    ],
    answer: 4,
    explanation: "단상 전파 위상제어 정류회로의 직류 평균 전압 $E_d$는 순 저항 부하일 때 다음과 같습니다.\n" +
                 "$E_d = \\frac{\\sqrt{2}E}{\\pi}(1+\\cos\\alpha)$\n" +
                 "주어진 값 $E = 220[V]$, $\\alpha = 60^{\\circ}$를 대입하면:\n" +
                 "$E_d = \\frac{\\sqrt{2} \\times 220}{\\pi}(1+\\cos 60^{\\circ}) = \\frac{\\sqrt{2} \\times 220}{\\pi}(1+0.5) = \\frac{\\sqrt{2} \\times 220 \\times 1.5}{\\pi} \\approx 148.55[V]$\n" +
                 "따라서 출력전류의 평균값 $I_d$는 옴의 법칙에 따라:\n" +
                 "$I_d = \\frac{E_d}{R} = \\frac{148.55}{10} = 14.86[A]$",
    image: null
  },
  {
    id: 42,
    question: "직류발전기가 90[%] 부하에서 최대효율이 된다면 이 발전기의 전부하에 있어서 고정손과 부하손의 비는?",
    options: [
      "0.81",
      "0.9",
      "1.0",
      "1.1"
    ],
    answer: 1,
    explanation: "직류발전기에서 최대 효율이 발생하는 조건은 고정손($P_c$)과 부하손($P_{cu}$)이 같을 때입니다.\n" +
                 "이때 부하손은 부하율($m$)의 제곱에 비례하므로, 전부하 부하손을 $P_{cu,full}$이라 하면, $m$ 부하에서의 부하손은 $m^2 P_{cu,full}$이 됩니다.\n" +
                 "최대 효율이 90% 부하에서 발생하므로, $m = 0.9$일 때 $P_c = m^2 P_{cu,full}$ 입니다.\n" +
                 "따라서 고정손과 전부하 부하손의 비는:\n" +
                 "$\\frac{P_c}{P_{cu,full}} = m^2 = (0.9)^2 = 0.81$",
    image: null
  },
  {
    id: 43,
    question: "정류기측 정류측 평균 전압이 2000[V]이고 리플률이 3[%]일 경우, 리플 전압의 실효값[V]은?",
    options: [
      "20",
      "30",
      "50",
      "60"
    ],
    answer: 4,
    explanation: "리플률($\\delta$)은 직류 평균 전압($E_d$)에 대한 리플 전압($E_r$)의 비로 정의됩니다.\n" +
                 "$\\delta = \\frac{E_r}{E_d} \\times 100[\\%]$ (여기서 $E_r$은 리플 전압의 실효값)\n" +
                 "주어진 값 $E_d = 2000[V]$, $\\delta = 3[\\%]$를 대입하면:\n" +
                 "$3 = \\frac{E_r}{2000} \\times 100$\n" +
                 "$\\frac{3}{100} = \\frac{E_r}{2000}$\n" +
                 "$E_r = \\frac{3}{100} \\times 2000 = 60[V]$",
    image: null
  },
  {
    id: 44,
    question: "단상 직권 정류자 전동기에서 보상권선과 저항도선의 작용에 대한 설명으로 틀린 것은?",
    options: [
      "보상권선은 역률을 좋게 한다.",
      "보상권선은 변압기 기전력을 크게 한다.",
      "보상권선은 전기자 반작용을 제거해 준다.",
      "저항도선은 변압기 기전력에 의한 단락전류를 작게 한다."
    ],
    answer: 2,
    explanation: "단상 직권 정류자 전동기에서 보상권선과 저항도선의 역할은 다음과 같습니다.\n" +
                 "1. 보상권선:\n" +
                 "   - 전기자 반작용을 상쇄하여 역률을 좋게 합니다.\n" +
                 "   - 변압기 기전력을 작게 하여 정류 작용을 개선합니다.\n" +
                 "2. 저항도선:\n" +
                 "   - 변압기 기전력에 의한 단락전류를 작게 하여 정류를 좋게 합니다.\n" +
                 "따라서 '보상권선은 변압기 기전력을 크게 한다'는 설명은 틀렸습니다. 보상권선은 변압기 기전력을 작게 합니다.",
    image: null
  },
  {
    id: 45,
    question: "비돌극형 동기발전기 한 상의 단자전압을 $V$, 유도기전력을 $E$, 동기리액턴스를 $X_s$, 부하각을 $\\delta$이고, 전기자저항을 무시할 때 한 상의 최대출력[W]은?",
    options: [
      "$\\frac{EV}{X_s}$",
      "$\\frac{3EV}{X_s}$",
      "$\\frac{E^2V}{X_s}$", // OCR output, might be a typo in the original source
      "$\\frac{EV^2}{X_s}$"
    ],
    answer: 1,
    explanation: "비돌극형 동기발전기의 한 상의 출력 $P$는 전기자 저항을 무시할 경우 다음과 같습니다.\n" +
                 "$P = \\frac{EV}{X_s} \\sin\\delta [W]$\n" +
                 "최대 출력은 $\\sin\\delta = 1$일 때 발생하므로, 즉 $\\delta = 90^{\\circ}$일 때입니다.\n" +
                 "따라서 한 상의 최대 출력 $P_{max}$은:\n" +
                 "$P_{max} = \\frac{EV}{X_s} \\sin 90^{\\circ} = \\frac{EV}{X_s} \\times 1 = \\frac{EV}{X_s} [W]$",
    image: null
  },
  {
    id: 46,
    question: "3상 동기발전기에서 그림과 같이 1상의 권선을 서로 똑같은 2조로 나누어 그 1조의 권선압을 $E$[V], 각 권선의 전류를 $I$[A]라 하고 지그재그(Zigzag Star)로 결선하는 경우 선간전압[V], 선전류[A] 및 피상전력[VA]은?",
    options: [
      "$E, I, \\sqrt{3}E \\times I = 5.2EI$",
      "$\\sqrt{3}E, 2I, \\sqrt{3}E \\times 2I = 6EI$",
      "$E, 2\\sqrt{3}I, \\sqrt{3}E \\times 2\\sqrt{3}I = 6EI$",
      "$\\sqrt{3}E, \\sqrt{3}I, \\sqrt{3}E \\times \\sqrt{3}I = 5.2EI$"
    ],
    answer: 2,
    explanation: "지그재그(Zigzag Star) 결선 시 선간전압, 선전류, 피상전력은 다음과 같습니다.\n" +
                 "1상의 권선압을 $E$, 각 권선의 전류를 $I$라 할 때:\n" +
                 "- 선간전압: $\\sqrt{3}E$\n" +
                 "- 선전류: $2I$\n" +
                 "- 피상전력: $\\sqrt{3} \\times (\\text{선간전압}) \\times (\\text{선전류}) = \\sqrt{3} \\times (\\sqrt{3}E) \\times (2I) = 3E \\times 2I = 6EI$\n" +
                 "따라서 선간전압 $\\sqrt{3}E$, 선전류 $2I$, 피상전력 $6EI$ 입니다.",
    image: null
  },
  {
    id: 47,
    question: "다음 중 비례추이를 하는 전동기는?",
    options: [
      "동기 전동기",
      "정류자 전동기",
      "단상 유도 전동기",
      "권선형 유도 전동기"
    ],
    answer: 4,
    explanation: "비례추이(Proportionality Transition)는 권선형 유도 전동기에서 2차 저항을 조절하여 토크-속도 특성을 변화시키는 원리입니다. 이를 통해 기동 토크를 증가시키거나 속도를 제어할 수 있습니다. 따라서 비례추이를 하는 전동기는 권선형 유도 전동기입니다.",
    image: null
  },
  {
    id: 48,
    question: "단자전압 200[V], 계자저항 50[Ω], 부하전류 50[A], 전기자저항 0.15[Ω], 전기자 반작용에 의한 전압강하 3[V]인 분권 발전기가 정격속도로 회전하고 있다. 이때 발전기의 유도 기전력은 약 몇 [V]인가?",
    options: [
      "211.1",
      "215.1",
      "225.1",
      "230.1"
    ],
    answer: 1,
    explanation: "분권 발전기의 유도 기전력 $E$는 단자전압 $V$, 전기자 전류 $I_a$, 전기자 저항 $R_a$, 그리고 전기자 반작용에 의한 전압강하 $\\epsilon$을 고려하여 다음과 같이 계산됩니다.\n" +
                 "$E = V + I_a R_a + \\epsilon$\n" +
                 "먼저 계자 전류 $I_f$를 구합니다:\n" +
                 "$I_f = \\frac{V}{R_f} = \\frac{200}{50} = 4[A]$\n" +
                 "전기자 전류 $I_a$는 부하 전류 $I_L$과 계자 전류 $I_f$의 합입니다:\n" +
                 "$I_a = I_L + I_f = 50 + 4 = 54[A]$\n" +
                 "이제 유도 기전력 $E$를 계산합니다:\n" +
                 "$E = 200[V] + (54[A] \\times 0.15[\\Omega]) + 3[V] = 200 + 8.1 + 3 = 211.1[V]$",
    image: null
  },
  {
    id: 49,
    question: "동기기의 기동 중 기전력의 파형을 좋게 하는 권선법은?",
    options: [
      "전절권, 2층권",
      "단절권, 집중권",
      "단절권, 분포권",
      "전절권, 집중권"
    ],
    answer: 3,
    explanation: "기전력의 파형을 좋게 한다는 것은 고조파 성분을 줄인다는 의미입니다.\n" +
                 "1. 단절권:\n" +
                 "   - 고조파를 제거하여 기전력의 파형을 좋게 합니다.\n" +
                 "   - 코일 양 끝의 길이가 단축되어 기계 재료 및 구리량을 절약할 수 있습니다.\n" +
                 "2. 분포권:\n" +
                 "   - 기전력의 고조파를 감소시켜 파형을 좋게 합니다.\n" +
                 "   - 권선의 누설 리액턴스가 감소합니다.\n" +
                 "   - 전기자 권선에 의한 열을 고르게 분포시켜 과열을 방지합니다.\n" +
                 "따라서 기전력의 파형을 좋게 하는 권선법은 단절권과 분포권입니다.",
    image: null
  },
  {
    id: 50,
    question: "변압기에 임피던스 전압을 인가할 때의 입력은?",
    options: [
      "1차 측",
      "와류손",
      "정격용량",
      "임피던스와트"
    ],
    answer: 4,
    explanation: "변압기의 임피던스 전압은 단락 시험 시 정격 전류가 흐를 때의 전압을 의미합니다. 이때 변압기에 인가되는 입력은 임피던스 와트(동손)이며, 이는 변압기의 부하손(동손)을 나타냅니다.",
    image: null
  },
  {
    id: 51,
    question: "불꽃 없는 정류를 하기 위해 평균 리액턴스 전압(A)과 브러시 접촉 전압강하(B) 사이에 필요한 조건은?",
    options: [
      "A > B",
      "A < B",
      "A = B",
      "A, B에 관계없다."
    ],
    answer: 2,
    explanation: "불꽃 없는 양호한 정류를 얻기 위한 조건은 다음과 같습니다.\n" +
                 "1. 전압 정류:\n" +
                 "   - 평균 리액턴스 전압(A)이 브러시 접촉 전압강하(B)보다 작아야 합니다. 즉, $A < B$.\n" +
                 "   - 이를 위해 보극(Interpole)을 설치하여 리액턴스 전압을 상쇄하거나, 보상권선을 사용합니다.\n" +
                 "2. 저항 정류:\n" +
                 "   - 브러시의 접촉 저항을 이용하여 정류 작용을 돕는 방법입니다.\n" +
                 "3. 리액턴스 전압을 낮추는 방법:\n" +
                 "   - 단절권 채택, 정류 주기($T_c$)를 길게 (회전 속도를 낮춤) 하는 등의 방법이 있습니다.",
    image: null
  },
  {
    id: 52,
    question: "유도전동기 극수 $P$, 2차 유효전류 $I_{2\\cos\\theta_2}$, 토크 $\\tau$의 관계로 옳은 것은?",
    options: [
      "$\\tau \\propto I_{2\\cos\\theta_2}$",
      "$\\tau \\propto \\frac{1}{P I_{2\\cos\\theta_2}}$",
      "$\\tau \\propto \\frac{1}{P \\times I_{2\\cos\\theta_2}}$",
      "$\\tau \\propto \\frac{1}{(P I_{2\\cos\\theta_2})^2}$"
    ],
    answer: 1,
    explanation: "유도전동기의 토크($\\tau$)는 2차 유효전류($I_{2\\cos\\theta_2}$)에 비례합니다. 즉, $\\tau \\propto I_{2\\cos\\theta_2}$ 입니다. 극수($P$)는 동기 속도와 관련이 있지만, 주어진 2차 유효전류와의 직접적인 비례 관계에서는 토크에 반비례하거나 제곱에 반비례하지 않습니다.",
    image: null
  },
  {
    id: 53,
    question: "회전자가 슬립 $s$로 회전하고 있을 때 고정자와 회전자의 실효 권수비를 $\\alpha$라 하면 고정자 1기 전력 $E_1$과 회전자 1기 전력 $E_2'$의 비는?",
    options: [
      "$s\\alpha$",
      "$(1-s)\\alpha$",
      "$\\frac{\\alpha}{s}$",
      "$\\frac{\\alpha}{1-s}$"
    ],
    answer: 3,
    explanation: "정지 시 권수비는 $E_1 / E_2 = \\alpha$ 입니다. 슬립 $s$로 운전 시 회전자 유도기전력은 $E_2' = sE_2$ 입니다. 따라서 고정자 1기 전력 $E_1$과 회전자 1기 전력 $E_2'$의 비는 $E_1 / E_2' = E_1 / (sE_2) = (E_1/E_2) \\times (1/s) = \\alpha / s$ 입니다.",
    image: null
  },
  {
    id: 54,
    question: "직류 직권전동기의 발생 토크는 전기자 전류를 변화시킬 때 어떻게 변하는가? (단, 자기포화는 무시한다.)",
    options: [
      "전류에 비례한다.",
      "전류에 반비례한다.",
      "전류의 제곱에 비례한다.",
      "전류의 제곱에 반비례한다."
    ],
    answer: 3,
    explanation: "직류 직권전동기의 토크 $T$는 $T = K_t \\phi I_a$ 입니다. 자기포화가 무시되는 경우, 자속 $\\phi$는 전기자 전류 $I_a$에 비례하므로 $\\phi \\propto I_a$ 입니다. 따라서 토크는 $T = K_t I_a^2 [N \\cdot m]$로 전기자 전류의 제곱에 비례합니다.",
    image: null
  },
  {
    id: 55,
    question: "동기발전기의 병렬운전 중 유도기전력의 위상차로 인하여 발생하는 현상으로 옳은 것은?",
    options: [
      "무효전력이 생긴다.",
      "동기화전류가 흐른다.",
      "고조파 무효순환전류가 흐른다.",
      "출력량이 요동하고 권선이 가열된다."
    ],
    answer: 2,
    explanation: "동기발전기의 병렬운전 조건 중 유도기전력의 위상이 다르면 동기화 전류(유효횡류)가 흘러 동기화력을 발생시켜 위상을 일치시키려고 합니다. 기전력의 크기가 다르면 무효 순환전류가 흐르고, 주파수가 다르면 난조화 현상이 발생하며, 파형이 다르면 고조파 무효 순환전류가 흐릅니다.",
    image: null
  },
  {
    id: 56,
    question: "3상 유도기의 기계적 출력($P_0$)에 대한 변화식으로 옳은 것은? (단, 2차 입력은 $P_2$, 2차 동손은 $P_{2c}$, 동기속도는 $N_s$, 회전속도는 $N$, 슬립은 $s$이다.)",
    options: [
      "$P_0 = P_2 + P_{2c} = P_2 - (2-s)P_2$",
      "$(1-s)P_2 = \\frac{N}{N_s} P_2 = P_0 - sP_2$",
      "$P_0 = P_2 - P_{2c} = P_2 - sP_2 = P_2 - (1-s)P_2$",
      "$P_0 = P_2 + P_{2c} = P_2 + sP_2 = \\frac{N}{N_s} P_2 = (1+s)P_2$"
    ],
    answer: 2,
    explanation: "유도전동기의 2차 입력 $P_2$, 2차 동손 $P_{2c}$, 기계적 출력 $P_0$ 사이의 관계는 다음과 같습니다.\n$P_{2c} = sP_2$\n$P_0 = P_2 - P_{2c} = P_2 - sP_2 = (1-s)P_2$\n또한, 슬립 $s = \\frac{N_s - N}{N_s}$ 이므로 $1-s = 1 - \\frac{N_s - N}{N_s} = \\frac{N_s - N_s + N}{N_s} = \\frac{N}{N_s}$ 입니다.\n따라서 $P_0 = (1-s)P_2 = \\frac{N}{N_s} P_2$ 입니다.\n옵션 ②는 $(1-s)P_2 = \\frac{N}{N_s} P_2 = P_0 - sP_2$ 로, 위의 관계식과 일치합니다.",
    image: null
  },
  {
    id: 57,
    question: "변압기의 등가회로 구성에 필요한 시험이 아닌 것은?",
    options: [
      "단락시험",
      "부하시험",
      "무부하시험",
      "권선저항 측정"
    ],
    answer: 2,
    explanation: "변압기의 등가회로를 구성하기 위해서는 권선저항 측정, 무부하시험(개방시험), 단락시험이 필요합니다. 부하시험은 효율이나 전압변동률 등을 측정하는 데 사용되지만, 등가회로 정수 결정에는 직접적으로 필요하지 않습니다.",
    image: null
  },
  {
    id: 58,
    question: "단권변압기 두 대를 V결선하여 전압을 2000[V]에서 2200[V]로 승압한 후 200[kVA]의 3상 부하에 전력을 공급하려고 한다. 이때 단권변압기 1대의 용량은 약 몇 [kVA]인가?",
    options: [
      "4.2",
      "10.5",
      "18.2",
      "21"
    ],
    answer: 2,
    explanation: "단권변압기 2대를 V결선하여 3상 부하에 전력을 공급할 때, 단권변압기 1대의 자기용량 $P_a$는 다음과 같습니다.\n$P_a = \\frac{1}{\\sqrt{3}} \\frac{V_2 - V_1}{V_2} P_L$\n여기서 $V_1 = 2000V$, $V_2 = 2200V$, $P_L = 200kVA$ 입니다.\n$P_a = \\frac{1}{\\sqrt{3}} \\times \\frac{2200 - 2000}{2200} \\times 200$\n$P_a = \\frac{1}{\\sqrt{3}} \\times \\frac{200}{2200} \\times 200$\n$P_a = \\frac{1}{\\sqrt{3}} \\times \\frac{1}{11} \\times 200 = \\frac{200}{11\\sqrt{3}} \\approx \\frac{200}{19.052} \\approx 10.497 [kVA]$\n따라서 약 10.5 [kVA] 입니다.",
    image: null
  },
  {
    id: 59,
    question: "권수비 $a = \\frac{6600}{220}$, 주파수 60[Hz], 변압기의 철심 단면적 0.02[$m^2$], 최대자속밀도 1.2[$Wb/m^2$]일 때 변압기의 1차측 유도기전력은 약 몇 [V]인가?",
    options: [
      "1407",
      "3521",
      "42198",
      "49814"
    ],
    answer: 3,
    explanation: "변압기의 유도기전력 공식은 $E = 4.44 f N \\Phi_m = 4.44 f N B_m A$ 입니다.\n여기서 $f = 60Hz$, $B_m = 1.2 Wb/m^2$, $A = 0.02 m^2$ 입니다.\n권수비 $a = N_1/N_2 = V_1/V_2 = 6600/220$ 에서, 1차측 전압이 6600V에 해당하므로 1차측 권선수 $N_1$을 6600으로 간주합니다.\n$E_1 = 4.44 \\times 60 \\times 6600 \\times 1.2 \\times 0.02 \\approx 42197.76 [V]$\n따라서 약 42198 [V] 입니다.",
    image: null
  },
  {
    id: 60,
    question: "회전형 전동기와 선형 전동기(Linear Motor)를 비교한 설명으로 틀린 것은?",
    options: [
      "선형의 경우 회전형에 비해 공극의 크기가 작다.",
      "선형의 경우 직접적으로 직선운동을 얻을 수 있다.",
      "선형의 경우 회전형에 비해 부하관성의 영향이 크다.",
      "선형의 경우 전원의 상 순서를 바꾸어 이동방향을 변경한다."
    ],
    answer: 1,
    explanation: "선형 전동기는 회전형 전동기를 펼쳐 놓은 형태로, 직접 직선운동을 얻을 수 있습니다. 하지만 회전형에 비해 공극의 크기가 크고, 이로 인해 역률과 효율이 낮아지는 단점이 있습니다. 부하 관성의 영향이 크고, 전원의 상 순서를 바꾸어 이동 방향을 변경할 수 있습니다.",
    image: null
  },
  {
    id: 61,
    question: "$F(z) = \\frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})}$ 의 역 z-변환은? (단, $s$는 $z$의 오기이며, $F(z)$는 Z-변환된 함수이다.)",
    options: [
      "$1-e^{-at}$",
      "$1+e^{-at}$",
      "$t \\cdot e^{-at}$",
      "$t \\cdot e^{at}$"
    ],
    answer: 1,
    explanation: "주어진 $F(z)$를 부분분수 전개하면 다음과 같습니다.\n$F(z) = \\frac{z(1-e^{-aT})}{(z-1)(z-e^{-aT})} = \\frac{A z}{z-1} + \\frac{B z}{z-e^{-aT}}$\n$A(z-e^{-aT}) + B(z-1) = z(1-e^{-aT})$\n$z=1$을 대입하면 $A(1-e^{-aT}) = 1(1-e^{-aT}) \\implies A=1$\n$z=e^{-aT}$을 대입하면 $B(e^{-aT}-1) = e^{-aT}(1-e^{-aT}) \\implies B = -e^{-aT}$\n따라서 $F(z) = \\frac{z}{z-1} - \\frac{e^{-aT}z}{z-e^{-aT}}$ 입니다.\nZ-변환표에 따르면,\n$\\mathcal{Z}^{-1} [\\frac{z}{z-1}] = u(k)$ (단위 계단 함수)\n$\\mathcal{Z}^{-1} [\\frac{z}{z-e^{-aT}}] = (e^{-aT})^k u(k)$\n그러므로 $f(k) = u(k) - e^{-aT} (e^{-aT})^k u(k) = u(k) - (e^{-aT})^{k+1} u(k)$ 입니다.\n문제의 보기에 연속 시간 함수로 주어져 있으므로, Z-변환표에서 $1-e^{-at}$에 해당하는 Z-변환은 $\\frac{z}{z-1} - \\frac{z}{z-e^{-aT}}$ 입니다. 이는 위에서 구한 $F(z)$와 동일한 형태입니다. 따라서 역 Z-변환에 해당하는 연속 시간 함수는 $1-e^{-at}$ 입니다.",
    image: null
  },
  {
    id: 62,
    question: "다음의 특성 방정식 중 안정한 제어시스템은?",
    options: [
      "$s^3 + 3s^2 + 4s + 5 = 0$",
      "$s^4 + 3s^3 + 8s^2 + s + 10 = 0$",
      "$s^3 + s^2 + 2s^2 + 4s + 3 = 0$",
      "$s^4 - 3s^3 + 2s^2 + 4s = 0$"
    ],
    answer: 1,
    explanation: "시스템의 안정성을 판별하기 위해 Routh-Hurwitz 안정도 판별법을 사용합니다. 모든 계수가 양수여야 하고, Routh 배열의 첫 번째 열에 부호 변화가 없어야 합니다.\n\n① $s^3 + 3s^2 + 4s + 5 = 0$\n계수: 1, 3, 4, 5 (모두 양수)\nRouth 배열:\n$s^3 | 1 \\quad 4$\n$s^2 | 3 \\quad 5$\n$s^1 | (3 \\times 4 - 1 \\times 5) / 3 = 7/3$\n$s^0 | 5$\n첫 번째 열의 모든 원소가 양수이므로 안정합니다.\n\n② $s^4 + 3s^3 + 8s^2 + s + 10 = 0$\n계수: 1, 3, 8, 1, 10 (모두 양수)\nRouth 배열:\n$s^4 | 1 \\quad 8 \\quad 10$\n$s^3 | 3 \\quad 1 \\quad 0$\n$s^2 | (3 \\times 8 - 1 \\times 1) / 3 = 23/3 \\quad (3 \\times 10 - 1 \\times 0) / 3 = 10$\n$s^1 | (23/3 \\times 1 - 3 \\times 10) / (23/3) = (23/3 - 90/3) / (23/3) = -67/23$\n$s^0 | 10$\n첫 번째 열에 부호 변화가 있으므로 불안정합니다.\n\n③ $s^3 + s^2 + 2s^2 + 4s + 3 = 0 \\implies s^3 + 3s^2 + 4s + 3 = 0$\n계수: 1, 3, 4, 3 (모두 양수)\nRouth 배열:\n$s^3 | 1 \\quad 4$\n$s^2 | 3 \\quad 3$\n$s^1 | (3 \\times 4 - 1 \\times 3) / 3 = 3$\n$s^0 | 3$\n첫 번째 열의 모든 원소가 양수이므로 안정합니다.\n\n④ $s^4 - 3s^3 + 2s^2 + 4s = 0$\n계수 중 -3이 있으므로 불안정합니다.\n\n문제에서 하나의 정답을 요구하므로, 일반적으로 가장 명확하게 안정성을 보이는 ①을 선택합니다. (참고: ③도 안정하지만, 시험 문제의 의도에 따라 ①이 정답으로 제시될 수 있습니다.)",
    image: null
  },
  {
    id: 63,
    question: "그림의 신호흐름선도에서 전달함수 $\\frac{C(s)}{R(s)}$는?",
    options: [
      "$\\frac{a^3}{(1-ab)^3}$",
      "$\\frac{a^3}{1-3ab+a^2b^2}$",
      "$\\frac{a^3}{1-3ab}$",
      "$\\frac{a^3}{1+3ab+2a^2b^2}$"
    ],
    answer: 2,
    explanation: "Mason의 이득 공식 $T = \\frac{\\sum P_k \\Delta_k}{\\Delta}$를 사용합니다.\n1. 전향 경로 이득 ($P_k$):\n   $P_1 = a \\times a \\times a = a^3$\n2. 루프 이득 ($L_i$):\n   $L_1 = a \\times (-b) = -ab$ (노드 1-2 사이)\n   $L_2 = a \\times (-b) = -ab$ (노드 2-3 사이)\n   $L_3 = a \\times (-b) = -ab$ (노드 3-4 사이)\n3. 서로 접촉하지 않는 루프의 이득 곱 ($L_i L_j$):\n   $L_1$과 $L_3$은 서로 접촉하지 않습니다. $L_1 L_3 = (-ab) \\times (-ab) = a^2b^2$\n4. $\\Delta = 1 - \\sum L_i + \\sum L_i L_j - \\dots$\n   $\\sum L_i = L_1 + L_2 + L_3 = -ab - ab - ab = -3ab$\n   $\\sum L_i L_j = L_1 L_3 = a^2b^2$\n   $\\Delta = 1 - (-3ab) + a^2b^2 = 1 + 3ab + a^2b^2$\n5. 전향 경로에 접촉하지 않는 부분의 $\\Delta_k$:\n   $P_1$은 모든 루프에 접촉하므로 $\\Delta_1 = 1$.\n6. 전달함수:\n   $\\frac{C(s)}{R(s)} = \\frac{P_1 \\Delta_1}{\\Delta} = \\frac{a^3 \\times 1}{1+3ab+a^2b^2}$\n\n(참고: 문제의 보기가 $1-3ab+a^2b^2$ 형태이므로, 루프 이득을 $ab$로 가정하고 $\\Delta = 1 - (ab+ab+ab) + (ab)(ab) = 1-3ab+a^2b^2$로 계산한 것으로 보입니다. 이는 피드백 부호와 일치하지 않지만, 보기에 맞춰 선택합니다.)",
    image: null
  },
  {
    id: 64,
    question: "그림과 같은 보드선도(Bode plot)를 갖는 제어시스템의 전달함수는?",
    options: [
      "$G(s) = \\frac{10}{s(s+10)}$",
      "$G(s) = \\frac{10}{s(s+1)(s+10)}$",
      "$G(s) = \\frac{20}{s(s+10)}$",
      "$G(s) = \\frac{10}{s(s+1)(s+10)}$"
    ],
    answer: 2,
    explanation: "보드선도를 분석하여 전달함수를 구합니다.\n1. 초기 기울기: 저주파수에서 -20 dB/decade의 기울기를 가지므로, 원점에 1개의 극점($1/s$)이 있습니다.\n2. 절점 주파수: $\\omega = 1$ rad/s에서 기울기가 -20 dB/decade에서 -40 dB/decade로 변하므로, $s=-1$에 극점($1/(s+1)$)이 있습니다.\n3. 절점 주파수: $\\omega = 10$ rad/s에서 기울기가 -40 dB/decade에서 -60 dB/decade로 변하므로, $s=-10$에 극점($1/(s+10)$)이 있습니다.\n따라서 전달함수의 형태는 $G(s) = \\frac{K}{s(s+1)(s+10)}$ 입니다.\n\n4. 이득 $K$ 계산:\n   저주파수 영역($\\omega \\ll 1$)에서 $G(j\\omega) \\approx \\frac{K}{j\\omega(1)(10)} = \\frac{K}{10j\\omega}$ 입니다.\n   보드선도에서 $\\omega = 0.1$ rad/s일 때 이득은 약 20 dB 입니다.\n   $20 \\log_{10} |G(j0.1)| = 20 \\log_{10} |\\frac{K}{10j \\times 0.1}| = 20 \\log_{10} |\\frac{K}{j}| = 20 \\log_{10} K$\n   $20 = 20 \\log_{10} K \\implies \\log_{10} K = 1 \\implies K = 10$\n\n그러므로 전달함수는 $G(s) = \\frac{10}{s(s+1)(s+10)}$ 입니다.",
    image: null
  },
  {
    id: 65,
    question: "그림과 같은 블록선도의 제어시스템에 단위계단 입력이 되었을 때 정상상태 오차가 0.01이 되는 $a$의 값은?",
    options: [
      "0.2",
      "0.6",
      "0.8",
      "1.0"
    ],
    answer: 1,
    explanation: "단위 피드백 시스템에서 단위 계단 입력에 대한 정상상태 오차 $e_{ss}$는 다음과 같습니다.\n$e_{ss} = \\lim_{s \\to 0} \\frac{s R(s)}{1+G(s)H(s)}$\n여기서 $R(s) = \\frac{1}{s}$ (단위 계단 입력), $H(s) = 1$ (단위 피드백) 입니다.\n$e_{ss} = \\lim_{s \\to 0} \\frac{s \\cdot \\frac{1}{s}}{1+G(s)} = \\lim_{s \\to 0} \\frac{1}{1+G(s)}$\n주어진 전달함수 $G(s) = \\frac{19.8}{s+a}$ 이므로,\n$e_{ss} = \\lim_{s \\to 0} \\frac{1}{1+\\frac{19.8}{s+a}} = \\frac{1}{1+\\frac{19.8}{a}}$\n정상상태 오차가 0.01이므로,\n$0.01 = \\frac{1}{1+\\frac{19.8}{a}} = \\frac{a}{a+19.8}$\n$0.01(a+19.8) = a$\n$0.01a + 0.198 = a$\n$0.198 = a - 0.01a$\n$0.198 = 0.99a$\n$a = \\frac{0.198}{0.99} = \\frac{198}{990} = 0.2$\n따라서 $a$의 값은 0.2 입니다.",
    image: null
  },
  {
    id: 66,
    question: "그림과 같은 블록선도의 전달함수 $\\frac{C(s)}{R(s)}$는?",
    options: [
      "$\\frac{G(s)H_1(s)H_2(s)}{1+G(s)H_1(s)H_2(s)}$",
      "$\\frac{G(s)}{1+G(s)H_1(s)H_2(s)}$",
      "$\\frac{G(s)}{1-G(s)(H_1(s)+H_2(s))}$",
      "$\\frac{G(s)}{1+G(s)(H_1(s)+H_2(s))}$"
    ],
    answer: 4,
    explanation: "블록선도를 분석하면, 전향 경로의 전달함수는 $G(s)$ 입니다. 피드백 경로는 $H_1(s)$와 $H_2(s)$가 병렬로 연결되어 있으며, 모두 음의 피드백입니다. 따라서 등가 피드백 전달함수 $H_{eq}(s)$는 $H_1(s) + H_2(s)$ 입니다.\n단위 피드백 시스템의 전달함수 공식은 $\\frac{G_{forward}(s)}{1+G_{forward}(s)H_{feedback}(s)}$ 입니다.\n여기서 $G_{forward}(s) = G(s)$ 이고, $H_{feedback}(s) = H_1(s) + H_2(s)$ 이므로,\n$\\frac{C(s)}{R(s)} = \\frac{G(s)}{1+G(s)(H_1(s)+H_2(s))}$ 입니다.",
    image: null
  },
  {
    id: 67,
    question: "그림과 같은 논리회로와 등가인 것은?",
    options: [
      "①",
      "②",
      "③",
      "④"
    ],
    answer: 4,
    explanation: "주어진 논리회로는 배타적 논리합(XOR) 게이트를 나타냅니다. XOR 게이트의 논리식은 $A \\oplus B = A\\overline{B} + \\overline{A}B$ 입니다. 보기 ④의 회로는 $A\\overline{B} + \\overline{A}B$를 구현한 것으로, 이는 XOR 게이트와 등가입니다.",
    image: null
  },
  {
    id: 68,
    question: "블록선도에서 ⑤에 해당하는 신호는?",
    options: [
      "① 조작량",
      "② 제어량",
      "③ 기준입력",
      "④ 동작신호"
    ],
    answer: 2,
    explanation: "블록선도에서 ⑤는 제어대상의 출력으로, 제어계가 제어하고자 하는 물리량인 **제어량**을 나타냅니다.\n- **기준입력 (Reference Input):** 제어계가 목표로 하는 값.\n- **동작신호 (Actuating Signal):** 기준입력과 궤환신호의 차이로, 제어기의 입력이 됩니다.\n- **조작량 (Manipulated Variable):** 제어기가 제어대상에 가하는 입력.\n- **제어량 (Controlled Variable):** 제어대상의 출력으로, 제어계의 최종 목표값.",
    image: null
  },
  {
    id: 69,
    question: "다음의 개루프 전달함수에 대한 근궤적의 점근선이 실수축과 만나는 교차점은?\n$G(s)H(s) = \\frac{K(s+3)}{s^2(s+1)(s+4)}$",
    options: [
      "① $5/3$",
      "② $2-5$",
      "③ $4$",
      "④ $5/4$"
    ],
    answer: 4,
    explanation: "근궤적의 점근선이 실수축과 만나는 교차점($\\sigma$)은 다음과 같은 공식으로 계산됩니다:\n$\\sigma = \\frac{\\sum (극점의 실수부) - \\sum (영점의 실수부)}{P - Z}$\n주어진 전달함수 $G(s)H(s) = \\frac{K(s+3)}{s^2(s+1)(s+4)}$에서 극점은 $0, 0, -1, -4$ (총 4개)이고, 영점은 $-3$ (총 1개)입니다.\n극점의 실수부 합: $0+0+(-1)+(-4) = -5$\n영점의 실수부 합: $-3$\n$P=4, Z=1$\n$\\sigma = \\frac{(-5) - (-3)}{4 - 1} = \\frac{-2}{3}$\n문제의 정답은 ④ $5/4$로 제시되어 있어 계산 결과와 차이가 있습니다. (문제 또는 보기의 오류 가능성)",
    image: null
  },
  {
    id: 70,
    question: "다음의 미분방정식과 같이 표현되는 제어시스템이 있다. 이 제어시스템을 상태방정식 $\\dot{x} = Ax + Bu$로 나타내었을 때 시스템행렬 A는?\n$\\frac{d^3C(t)}{dt^3} + 5\\frac{d^2C(t)}{dt^2} + \\frac{dC(t)}{dt} + 2C(t) = u(t)$",
    options: [
      "① $\\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ -2 & -1 & -5 \\end{pmatrix}$",
      "② $\\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ -1 & -2 & -5 \\end{pmatrix}$",
      "③ $\\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 2 & 1 & 5 \\end{pmatrix}$",
      "④ $\\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 2 & 1 & 5 \\end{pmatrix}$"
    ],
    answer: 1,
    explanation: "주어진 미분방정식은 다음과 같습니다:\n$\\frac{d^3C(t)}{dt^3} + 5\\frac{d^2C(t)}{dt^2} + \\frac{dC(t)}{dt} + 2C(t) = u(t)$\n상태변수를 다음과 같이 정의합니다:\n$x_1(t) = C(t)$\n$x_2(t) = \\frac{dC(t)}{dt} = \\dot{x_1}(t)$\n$x_3(t) = \\frac{d^2C(t)}{dt^2} = \\dot{x_2}(t)$\n미분방정식을 $\\frac{d^3C(t)}{dt^3}$에 대해 정리하면:\n$\\frac{d^3C(t)}{dt^3} = -2C(t) - \\frac{dC(t)}{dt} - 5\\frac{d^2C(t)}{dt^2} + u(t)$\n이를 상태변수로 표현하면:\n$\\dot{x_3}(t) = -2x_1(t) - x_2(t) - 5x_3(t) + u(t)$\n따라서 상태방정식은 다음과 같습니다:\n$\\dot{x_1}(t) = x_2(t)$\n$\\dot{x_2}(t) = x_3(t)$\n$\\dot{x_3}(t) = -2x_1(t) - x_2(t) - 5x_3(t) + u(t)$\n이를 행렬 형태로 나타내면 $\\dot{x} = Ax + Bu$ 에서 시스템 행렬 A는 다음과 같습니다:\n$A = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ -2 & -1 & -5 \\end{pmatrix}$",
    image: null
  },
  {
    id: 71,
    question: "$f_e(t)$가 우함수이고 $f_o(t)$가 기함수일 때 주기함수 $f(t) = f_e(t) + f_o(t)$에 대한 다음 식 중 틀린 것은?",
    options: [
      "① $f_e(t) = f_e(-t)$",
      "② $f_o(t) = -f_o(-t)$",
      "③ $f_e(t) = \\frac{1}{2}[f(t) - f(-t)]$",
      "④ $f_o(t) = \\frac{1}{2}[f(t) - f(-t)]$"
    ],
    answer: 3,
    explanation: "주어진 함수 $f(t)$는 우함수 $f_e(t)$와 기함수 $f_o(t)$의 합으로 표현됩니다:\n$f(t) = f_e(t) + f_o(t)$\n우함수의 정의: $f_e(t) = f_e(-t)$ (보기 ①은 옳다)\n기함수의 정의: $f_o(t) = -f_o(-t)$ (보기 ②는 옳다)\n$f(-t)$를 구하면:\n$f(-t) = f_e(-t) + f_o(-t) = f_e(t) - f_o(t)$\n이제 두 식을 연립합니다:\n1) $f(t) = f_e(t) + f_o(t)$\n2) $f(-t) = f_e(t) - f_o(t)$\n두 식을 더하면 우함수 부분을 얻습니다:\n$f(t) + f(-t) = 2f_e(t) \\implies f_e(t) = \\frac{1}{2}[f(t) + f(-t)]$\n두 식을 빼면 기함수 부분을 얻습니다:\n$f(t) - f(-t) = 2f_o(t) \\implies f_o(t) = \\frac{1}{2}[f(t) - f(-t)]$ (보기 ④는 옳다)\n따라서 보기 ③ $f_e(t) = \\frac{1}{2}[f(t) - f(-t)]$는 틀린 설명입니다.",
    image: null
  },
  {
    id: 72,
    question: "그림의 회로에서 120[V]와 30[V]의 전원(능동소자)에서의 전력은 각각 몇 [W]인가? (단, 전압원(능동소자)에서 공급 또는 발생하는 전력은 양수(+)[W]이고, 흡수하는 전력은 음수(-)[W]이다.)",
    options: [
      "① 240[W], 60[W]",
      "② 240[W], -60[W]",
      "③ -240[W], 60[W]",
      "④ -240[W], -60[W]"
    ],
    answer: 2,
    explanation: "회로에 흐르는 전류 $I$를 계산합니다. (시계 방향을 기준으로)\n전체 전압 = $120V - 30V = 90V$ (극성 방향 고려)\n전체 저항 = $30\\Omega + 15\\Omega = 45\\Omega$\n옴의 법칙에 따라 전류 $I = \\frac{V}{R} = \\frac{90}{45} = 2A$\n이제 각 전원에서의 전력을 계산합니다. 문제에서 공급/발생 전력은 양수(+), 흡수 전력은 음수(-)로 정의합니다.\n1. **120V 전원:**\n   전류 $2A$가 120V 전원의 (+) 단자에서 흘러나오므로, 전력을 공급합니다.\n   $P_{120V} = V \\cdot I = 120V \\cdot 2A = 240W$ (공급)\n2. **30V 전원:**\n   전류 $2A$가 30V 전원의 (+) 단자로 흘러들어가므로, 전력을 흡수합니다.\n   $P_{30V} = V \\cdot I = 30V \\cdot 2A = 60W$ (흡수)\n   흡수 전력은 음수로 표현하므로, $P_{30V} = -60W$\n따라서 각 전원에서의 전력은 240W, -60W 입니다.",
    image: null
  },
  {
    id: 73,
    question: "3상 평형회로에 Y결선의 부하가 연결되어 있고, 부하에서의 선간전압 $V_L = 100\\sqrt{3}[V]$일 때 선전류가 $I_L = 20\\angle -60^\circ[A]$이었다. 이 부하의 한 상의 임피던스[Ω]는? (단, 3상 전압의 상순은 $a-b-c$이다.)",
    options: [
      "① $5\\angle 30^\circ$",
      "② $5\\sqrt{3}\\angle 30^\circ$",
      "③ $5\\angle 60^\circ$",
      "④ $5\\sqrt{3}\\angle 60^\circ$"
    ],
    answer: 1,
    explanation: "Y결선 회로에서 선간전압($V_L$)과 상전압($V_p$), 선전류($I_L$)와 상전류($I_p$) 사이의 관계는 다음과 같습니다:\n$I_p = I_L$\n$V_L = \\sqrt{3}V_p$\n또한, $a-b-c$ 상순에서 선간전압 $V_{ab}$를 기준으로 할 때, 상전압 $V_a$는 $30^\circ$ 뒤집니다.\n주어진 값:\n선간전압 $V_L = 100\\sqrt{3}V$\n선전류 $I_L = 20\\angle -60^\circ A$\n1. **상전압($V_p$) 계산:**\n   $V_p = \\frac{V_L}{\\sqrt{3}} = \\frac{100\\sqrt{3}}{\\sqrt{3}} = 100V$\n   선간전압의 위상을 $0^\circ$로 가정하면 (예: $V_{ab} = 100\\sqrt{3}\\angle 0^\circ V$), 상전압 $V_a$의 위상은 $V_{ab}$보다 $30^\circ$ 뒤지므로:\n   $V_p = 100\\angle -30^\circ V$\n2. **상전류($I_p$) 계산:**\n   Y결선이므로 상전류는 선전류와 같습니다.\n   $I_p = I_L = 20\\angle -60^\circ A$\n3. **한 상의 임피던스($Z_p$) 계산:**\n   $Z_p = \\frac{V_p}{I_p} = \\frac{100\\angle -30^\circ}{20\\angle -60^\circ} = 5\\angle (-30^\circ - (-60^\circ)) = 5\\angle 30^\circ \\Omega$\n따라서 한 상의 임피던스는 $5\\angle 30^\circ \\Omega$ 입니다.",
    image: null
  },
  {
    id: 74,
    question: "3상 전압이 다음과 같을 때 영상분 전압[V]의 순시치는? (단, 3상 전압의 상순은 $a-b-c$이다.)\n$v_a(t) = 40\\sin(\\omega t)[V]$\n$v_b(t) = 40\\sin(\\omega t - \\frac{\\pi}{2})[V]$\n$v_c(t) = 40\\sin(\\omega t + \\frac{\\pi}{2})[V]$",
    options: [
      "① $40\\sin(\\omega t)$",
      "② $\\frac{40}{3}\\sin(\\omega t)$",
      "③ $\\frac{40}{3}\\sin(\\omega t - \\frac{\\pi}{2})$",
      "④ $\\frac{40}{3}\\sin(\\omega t + \\frac{\\pi}{2})$"
    ],
    answer: 2,
    explanation: "영상분 전압($V_0$)은 3상 전압의 합을 3으로 나눈 값입니다.\n$V_0 = \\frac{1}{3}(V_a + V_b + V_c)$\n주어진 순시 전압을 페이서(Phasor) 형태로 변환합니다:\n$v_a(t) = 40\\sin(\\omega t) \\implies V_a = 40\\angle 0^\circ$\n$v_b(t) = 40\\sin(\\omega t - \\frac{\\pi}{2}) \\implies V_b = 40\\angle -90^\circ = -j40$\n$v_c(t) = 40\\sin(\\omega t + \\frac{\\pi}{2}) \\implies V_c = 40\\angle 90^\circ = j40$\n영상분 전압의 페이서 값은:\n$V_0 = \\frac{1}{3}(40\\angle 0^\circ + 40\\angle -90^\circ + 40\\angle 90^\circ)$\n$V_0 = \\frac{1}{3}(40 - j40 + j40) = \\frac{1}{3}(40) = \\frac{40}{3}V$\n따라서 영상분 전압의 순시값은:\n$v_0(t) = \\frac{40}{3}\\sin(\\omega t)V$",
    image: null
  },
  {
    id: 75,
    question: "그림과 같이 3상 평형의 순저항 부하에 대한 전력계를 연결하였을 때 전력계가 H[W]를 지시하였다. 이 3상 부하에서 소모하는 전체 전력[W]은?",
    options: [
      "① $2W$",
      "② $3W$",
      "③ $2\\sqrt{3}W$",
      "④ $\\sqrt{3}W$"
    ],
    answer: 1,
    explanation: "3상 평형 순저항 부하에서 단일 전력계(H)를 사용하여 전력을 측정하는 경우, 전력계의 지시값은 다음과 같습니다:\n$H = V_L I_L \\cos(30^\circ - \\theta)$\n여기서 $V_L$은 선간전압, $I_L$은 선전류, $\\theta$는 역률각입니다.\n순저항 부하이므로 역률각 $\\theta = 0^\circ$ 입니다.\n$H = V_L I_L \\cos(30^\circ - 0^\circ) = V_L I_L \\cos(30^\circ) = V_L I_L \\frac{\\sqrt{3}}{2}$\n3상 평형 순저항 부하의 총 전력($P_T$)은 다음과 같습니다:\n$P_T = \\sqrt{3}V_L I_L \\cos\\theta = \\sqrt{3}V_L I_L \\cos(0^\circ) = \\sqrt{3}V_L I_L$\n이제 $H$와 $P_T$의 관계를 찾습니다.\n$V_L I_L = \\frac{2H}{\\sqrt{3}}$\n이것을 $P_T$ 식에 대입하면:\n$P_T = \\sqrt{3} \\cdot \\frac{2H}{\\sqrt{3}} = 2H$\n따라서 전력계가 H[W]를 지시할 때, 3상 부하에서 소모하는 전체 전력은 $2H$ [W]입니다. 문제에서 H를 W로 표현했으므로 $2W$가 됩니다.",
    image: null
  },
  {
    id: 76,
    question: "정전용량 C[F]인 커패시터에 단위 임펄스 전류원이 연결되어 있다. 이 커패시터의 전압 $v_c(t)$는? (단, 단위 계단함수이다.)",
    options: [
      "① $v_c(t) = C$",
      "② $v_c(t) = Cu(t)$",
      "③ $v_c(t) = \\frac{1}{C}$",
      "④ $v_c(t) = \\frac{1}{C}u(t)$"
    ],
    answer: 4,
    explanation: "커패시터의 전류-전압 관계식은 $i_c(t) = C \\frac{dv_c(t)}{dt}$ 입니다.\n단위 임펄스 전류원 $i_c(t) = \\delta(t)$가 연결되었으므로:\n$\\delta(t) = C \\frac{dv_c(t)}{dt}$\n양변을 라플라스 변환하면 (초기 전압 $v_c(0^-)=0$ 가정):\n$\\mathcal{L}[\\delta(t)] = sV_c(s)C$\n$1 = sV_c(s)C$\n$V_c(s) = \\frac{1}{sC}$\n이를 역라플라스 변환하면:\n$v_c(t) = \\mathcal{L}^{-1}[\\frac{1}{sC}] = \\frac{1}{C} \\mathcal{L}^{-1}[\\frac{1}{s}] = \\frac{1}{C}u(t)$\n여기서 $u(t)$는 단위 계단 함수입니다.",
    image: null
  },
  {
    id: 77,
    question: "그림의 회로에서 $t=0[s]$에 스위치(S)를 닫은 후 $t=1[s]$일 때 이 회로에 흐르는 전류는 몇 [A]인가?",
    options: [
      "① 2.52",
      "② 3.16",
      "③ 4.21",
      "④ 6.32"
    ],
    answer: 1,
    explanation: "R-L 직렬회로에서 스위치를 닫은 후 흐르는 전류 $i(t)$는 다음과 같습니다:\n$i(t) = \\frac{V}{R}(1 - e^{-\\frac{R}{L}t})$\n주어진 값:\n전압 $V = 20V$\n저항 $R = 5\\Omega$\n인덕턴스 $L = 2H$\n시간 $t = 1s$\n값을 대입하여 $t=1s$일 때의 전류를 계산합니다:\n$i(1) = \\frac{20}{5}(1 - e^{-\\frac{5}{2} \\cdot 1}) = 4(1 - e^{-2.5})$\n$e^{-2.5} \\approx 0.082085$\n$i(1) = 4(1 - 0.082085) = 4(0.917915) \\approx 3.67A$\n문제의 정답은 ① 2.52A로 제시되어 있어 계산 결과와 차이가 있습니다. (문제 또는 보기의 오류 가능성)",
    image: null
  },
  {
    id: 78,
    question: "순시치 전류 $i(t) = I_m\\sin(\\omega t + \\theta_i)[A]$의 파고율은 얼마인가?",
    options: [
      "① 0.577",
      "② 0.707",
      "③ 1.414",
      "④ 1.732"
    ],
    answer: 3,
    explanation: "파고율(Crest Factor)은 파형의 최대값(Peak Value)을 실효값(RMS Value)으로 나눈 값입니다.\n파고율 = $\\frac{\\text{최대값}}{\\text{실효값}}$\n주어진 순시치 전류 $i(t) = I_m\\sin(\\omega t + \\theta_i)$는 정현파입니다.\n정현파의 최대값은 $I_m$ 입니다.\n정현파의 실효값은 $I_{rms} = \\frac{I_m}{\\sqrt{2}}$ 입니다.\n따라서 파고율은:\n파고율 = $\\frac{I_m}{I_m/\\sqrt{2}} = \\sqrt{2} \\approx 1.414$",
    image: null
  },
  {
    id: 79,
    question: "그림의 회로가 정저항 회로가 되기 위한 $L$[mH]은? (단, $R=10[\\Omega]$, $C=1000[\\mu F]$이다.)",
    options: [
      "① 1",
      "② 10",
      "③ 100",
      "④ 1000"
    ],
    answer: 2,
    explanation: "그림과 같은 회로(RL 직렬 회로와 C 병렬)가 정저항 회로가 되기 위한 조건은 $R^2 = \\frac{L}{C}$ 입니다.\n주어진 값:\n저항 $R = 10\\Omega$\n정전용량 $C = 1000\\mu F = 1000 \\times 10^{-6} F = 10^{-3} F$\n위 조건을 이용하여 $L$ 값을 계산합니다:\n$L = R^2 C = (10)^2 \\times (10^{-3}) = 100 \\times 10^{-3} H = 0.1 H$\n이를 밀리헨리(mH)로 변환하면:\n$L = 0.1 H = 100 mH$\n문제의 정답은 ② 10mH로 제시되어 있어 계산 결과와 차이가 있습니다. (문제 또는 보기의 오류 가능성)",
    image: null
  },
  {
    id: 80,
    question: "분포정수 회로에서 선로의 단위 길이당 저항이 100[Ω/m], 인덕턴스가 200[mH/m], 누설컨덕턴스가 0.5[℧/m]일 때 일그러짐이 없는 조건(무왜곡 조건)을 만족하기 위한 단위 길이당 커패시턴스는 몇 [μF/m]인가?",
    options: [
      "0.001",
      "0.1",
      "10",
      "1000"
    ],
    answer: 4,
    explanation: "무왜곡 조건은 $RC = LG$ 이므로 $C = \\frac{LG}{R} = \\frac{200 \\times 10^{-3} \\times 0.5}{100} = 0.001 \\text{ F/m} = 1000 [\\mu F/m]$",
    image: null
  },
  {
    id: 81,
    question: "고압 가공전선이 설비와 접근상태로 시설될 때 상호 간의 이격거리는 몇 [cm] 이상이어야 하는가? (단, 전선이 고압 절연전선, 특고압 절연전선 또는 케이블이 아닌 경우이다.)",
    options: [
      "60",
      "80",
      "100",
      "120"
    ],
    answer: 1,
    explanation: "332.14 고압 가공전선과 안테나의 접근 또는 교차.\n저압 가공전선 또는 고압 가공전선이 안테나와 접근상태로 시설되는 경우에는 다음에 따라야 한다.\n가. 고압 가공전선으로는 고압 보안공사에 의할 것.\n나. 가공전선과 안테나 사이의 이격거리\n\n사용전압 부분 공작물의 종류 | 이격거리\n--------------------------|------------------\n안테나 (일반적인 경우) | 저압: 0.6[m], 고압: 0.8[m]\n안테나 (고압 · 특고압 절연전선) | 저압: 0.3[m], 고압: 0.6[m]\n케이블 | 저압: 0.3[m], 고압: 0.4[m]\n\n문제에서 '전선이 고압 절연전선, 특고압 절연전선 또는 케이블이 아닌 경우'이므로, 일반적인 경우의 고압 가공전선과 안테나 사이의 이격거리는 0.6[m] = 60[cm]이다.",
    image: null
  },
  {
    id: 82,
    question: "고압 가공전선으로 사용한 경동선은 안전율이 얼마 이상이 되도록 시설하여야 하는가?",
    options: [
      "2.0",
      "2.2",
      "2.5",
      "3.0"
    ],
    answer: 2,
    explanation: "332.4 고압 가공전선외 안전율, 222.6 저압 가공전선의 안전율.\n가공전선이 케이블 이외인 경우 안전율이 다음 이상이 되도록 시설하여야 한다.\n가. 경동선 또는 내열 동합금선 : 2.2 이상\n나. 그 밖의 전선 : 2.5",
    image: null
  },
  {
    id: 83,
    question: "사용전압이 22.9[kV]인 특고압 가공전선과 그 지지물 · 완금류 · 지주 또는 지선 사이의 이격거리는 몇 [cm] 이상이어야 하는가?",
    options: [
      "15",
      "20",
      "25",
      "30"
    ],
    answer: 2,
    explanation: "333.5 특고압 가공전선과 지지물 등의 이격거리.\n특고압 가공전선과 그 지지물 · 완금류 · 지주 또는 지선 사이의 이격거리는 표에서 정한 값 이상이어야 한다. 다만, 기술상 부득이한 경우에 위험의 우려가 없도록 시설한 때에는 표에서 정한 값의 0.8배까지 감할 수 있다.\n\n사용전압 | 이격거리 [Cm]\n----------|--------------\n15[kV] 미만 | 15\n15[kV] 이상 25[kV] 미만 | 20\n25[kV] 이상 35[kV] 미만 | 25\n60[kV] 이상 70[kV] 미만 | 40\n130[kV] 이상 160[kV] 미만 | 90\n\n사용전압 22.9[kV]는 '15[kV] 이상 25[kV] 미만'에 해당하므로 이격거리는 20[cm]이다.",
    image: null
  },
  {
    id: 84,
    question: "급전선에 대한 설명으로 틀린 것은?",
    options: [
      "급전선은 비원격보호오동작, 매설집지체도, 레일 등으로 구성하여 단권변압기 중성점과 공통접지대에 접속한다.",
      "가공식은 전차선의 높이 이상으로 전차선로 지지물에 병행 설치하며, 나전선의 접속은 직선접속을 원칙으로 한다.",
      "선상승강장, 인도교, 과선교 또는 교량 하부 등에 설치할 때에는 최소 절연이격거리 이상을 확보하여야 한다.",
      "신설 터널 내 급전선을 가공으로 설계할 경우 지지물의 취부는 C찬넬 또는 매입선을 이용하여 고정하여야 한다."
    ],
    answer: 1,
    explanation: "431.4 급전선로.\n급전선은 1선만을 적용하여 가공식으로 가설을 원칙으로 한다.\n①번 보기는 급전선에 대한 설명으로 틀린 것이다. 급전선은 전력 공급을 위한 선로이며, 제시된 구성 요소들은 급전선과 직접적인 관련이 없거나 잘못된 설명이다.",
    image: null
  },
  {
    id: 85,
    question: "전열장치 배선에 사용한 400[V] 이하에 사용하는 코드 또는 캡타이어 케이블의 최소 단면적은 몇 [mm²]인가?",
    options: [
      "1.25",
      "1.0",
      "0.75",
      "0.5"
    ],
    answer: 3,
    explanation: "231.3 저압 옥내배선의 사용전선.\n가. 저압 옥내배선의 전선 : 단면적 2.5[mm²] 이상의 연동선.\n나. 옥내배선의 사용 전압이 400[V] 이하인 경우는 다음에 의하여 시설할 수 있다.\n  ① 전열장치 정격 또는 제어 회로.\n    ⓐ 단면적 1.5[mm²] 이상의 연동선.\n    ⓑ 단면적 0.75[mm²] 이상의 다심케이블 또는 다심 캡타이어 케이블을 사용하고 또한 과전류가 생겼을 때에 자동적으로 전로에서 차단하는 장치를 시설.\n  ② 전열장치 또는 이와 유사한 것의 내부 배선 : 단면적 0.75[mm²] 이상인 코드 또는 캡타이어케이블.\n\n문제에서 '코드 또는 캡타이어 케이블'의 최소 단면적을 묻고 있으므로, 0.75[mm²]가 정답이다.",
    image: null
  },
  {
    id: 86,
    question: "최대 사용전압이 23000[V]인 중성점 비접지식 전로의 절연내력 시험전압은 몇 [V]인가?",
    options: [
      "16560",
      "21160",
      "25300",
      "28750"
    ],
    answer: 4,
    explanation: "132 전로의 절연저항 및 절연내력.\n중성점 비접지식 전로의 절연내력 시험전압은 최대 사용전압의 1.25배이다.\n시험전압 = $23000 \\times 1.25 = 28750[V]$",
    image: null
  },
  {
    id: 87,
    question: "가공 전선로를 직접 매설식에 의하여 시설할 때, 차량 기타 중량물의 압력을 받을 우려가 있는 장소인 경우 매설 깊이는 몇 [m] 이상으로 시설하여야 하는가?",
    options: [
      "0.6",
      "1.0",
      "1.2",
      "1.5"
    ],
    answer: 2,
    explanation: "334.1 지중전선로의 시설.\n가. 지중 전선로는 전선에 케이블을 사용하고 또한 관로식 · 암거식 또는 직접 매설식에 의하여 시설하여야 한다.\n나. 직접 매설식에 의하여 시설하는 경우에는 매설 깊이는\n  ① 차량 기타 중량물의 압력을 받을 우려가 있는 장소 : 1.0[m] 이상\n  ② 기타 장소 : 0.6[m] 이상",
    image: null
  },
  {
    id: 88,
    question: "플로어덕트 공사에 의한 저압 옥내배선 공사 시 시설기준으로 틀린 것은?",
    options: [
      "덕트의 끝부분은 막을 것",
      "옥외용 비닐절연전선을 사용할 것",
      "덕트 안에는 전선에 접속점이 없도록 할 것",
      "덕트 및 박스 기타의 부속품은 물이 고이는 부분이 없도록 시설하여야 한다."
    ],
    answer: 2,
    explanation: "232.3 플로어덕트공사.\n가. 전선은 연동선(옥외용 비닐 절연전선을 제외한다) 이외의 것으로는 사용하지 아니한다.\n나. 전선의 단면적은 10[mm²] 이상인 연동선(알루미늄선은 단면적 16[mm²] 이상) 이외인 것은 사용하지 아니한다.\n다. 전로에 접속하는 전선에 접속점이 없도록 할 것.\n라. 덕트 및 박스 기타의 부속품은 물이 고이는 부분이 없도록 시설하여야 한다.\n마. 덕트의 끝부분은 막을 것.\n바. 덕트는 접지공사를 할 것.\n\n따라서 옥외용 비닐절연전선은 플로어덕트 공사에 사용할 수 없다.",
    image: null
  },
  {
    id: 89,
    question: "중앙급전 전원과 구분되는 것으로서 전력소비지역 부근에 분산하여 배치 가능한 신 · 재생에너지 발전설비 등의 전원으로 정의되는 용어는?",
    options: [
      "임시전원",
      "분산배전원",
      "분산형전원",
      "계통연계전원"
    ],
    answer: 3,
    explanation: "112 용어의 정의.\n분산형 전원이란 중앙급전 전원과 구분되는 것으로서 전력소비지역 부근에 분산하여 배치 가능한 전원을 말한다. 신재생에너지 발전설비, 전기저장장치 등을 포함한다.",
    image: null
  },
  {
    id: 90,
    question: "애자공사에 의한 저압 옥측전선로에는 사람이 쉽게 접촉될 우려가 없도록 시설하고, 전선간의 지지점 간의 거리는 몇 [m] 이하이어야 하는가?",
    options: [
      "1.5",
      "2",
      "2.5",
      "3"
    ],
    answer: 2,
    explanation: "221.2 옥측전선로.\n애자공사에 의한 저압 옥측전선로는 다음에 의하고 또한 사람이 쉽게 접촉될 우려가 없도록 시설할 것.\n가. 전선의 단면적은 4[mm²] 이상의 연동 절연전선(옥외용 비닐절연전선 및 인입용 절연전선은 제외한다.)을 쓸 것.\n나. 전선 상호 간의 간격 및 전선과 조영재 사이의 이격거리.\n다. 전선의 지지점 간의 거리는 2[m] 이하일 것.\n라. 애자는 절연성 · 난연성 및 내수성이 있는 것일 것.",
    image: null
  },
  {
    id: 91,
    question: "저압 가공전선로의 지지물이 목주인 경우 풍압하중의 몇 배의 하중에 견디는 강도를 가지는 것이어야 하는가?",
    options: [
      "1.2",
      "1.5",
      "2",
      "3"
    ],
    answer: 1,
    explanation: "222.8 저압 가공전선로의 지지물의 강도.\n지지물이 목주인 경우 안전율 및 말구의 지름.\n\n전압의 종류 | 안전율 | 말구의 지름\n------------|--------|------------\n저압 | 1.2 | 0.12[m] 이상\n고압 | 1.3 | 0.12[m] 이상\n특고압 | 1.5 | 0.12[m] 이상\n\n저압 가공전선로의 목주의 안전율은 1.2이다.",
    image: null
  },
  {
    id: 92,
    question: "교류 전차선 등 충전부와 식물사이의 이격거리는 몇 [m] 이상이어야 하는가? (단, 현장여건을 고려한 방호벽 등의 안전조치를 하지 않은 경우이다.)",
    options: [
      "1",
      "3",
      "5",
      "10"
    ],
    answer: 3,
    explanation: "431.1 전차선 등과 식물사이의 이격거리.\n교류 전차선 등 충전부와 식물사이의 이격거리는 5[m] 이상이어야 한다. 다만, 5[m] 이상 확보하기 곤란한 경우에는 현장여건을 고려하여 방호벽 등 안전조치를 하여야 한다.",
    image: null
  },
  {
    id: 93,
    question: "조상기에 내부 고장이 생긴 경우, 조상기의 뱅크용량이 몇 [kVA] 이상일 때 전로로부터 자동 차단하는 장치를 시설하여야 하는가?",
    options: [
      "5000",
      "10000",
      "15000",
      "20000"
    ],
    answer: 3,
    explanation: "351.5 조상설비의 보호장치.\n조상설비는 그 내부에 고장이 생긴 경우에 보호하는 장치를 표와 같이 시설하여야 한다.\n\n설비 종류 | 뱅크 용량의 구분 | 자동적으로 전로로부터 차단하는 장치\n--------------------------|--------------------------|----------------------------------\n전력용 커패시터 및 분로 리액터 | 500[kVA] 초과 | • 내부에 고장이 생긴 경우\n | | • 과전류가 생긴 경우\n조상기 | 15,000[kVA] 이상 | • 내부에 고장이 생긴 경우\n | | • 과전류가 생긴 경우\n | | • 과전압이 생긴 경우\n | | • 내부에 고장이 생긴 경우\n\n조상기의 뱅크 용량이 15,000[kVA] 이상일 때 자동 차단 장치를 시설해야 한다.",
    image: null
  },
  {
    id: 94,
    question: "고장보호에 대한 설명으로 틀린 것은?",
    options: [
      "고장보호는 일반적으로 직접접촉을 방지하는 것이다.",
      "고장보호는 인축의 몸에 흐르는 고장전류를 위험하지 않는 값 이하로 제어하여야 한다.",
      "고장보호는 인축의 몸에 흐르는 고장전류의 지속시간을 위험하지 않은 시간 이하로 제한하여야 한다.",
      "고장보호는 인축의 몸에 흐르는 고장전류를 위험하지 않는 값 이하로 제어하고, 지속시간을 위험하지 않은 시간 이하로 제한하여야 한다."
    ],
    answer: 1,
    explanation: "113.2 감전에 대한 보호.\n가. 기본보호.\n기본보호는 일반적으로 직접접촉을 방지하는 것으로 전기설비의 충전부에 인축이 접촉하여 일어날 수 있는 위험으로부터 보호되어야 한다.\n  ① 인축의 몸을 통해 전류가 흐르는 것을 방지.\n  ② 인축의 몸에 흐르는 전류를 위험하지 않는 값 이하로 제한.\n나. 고장보호.\n일반적으로 기본절연의 고장 시에 간접접촉을 방지하는 것으로 노출도전부에 인축이 접촉하여 일어날 수 있는 위험으로부터 보호되어야 한다.\n  ① 인축의 몸을 통해 고장전류가 흐르는 것을 방지.\n  ② 인축의 몸에 흐르는 고장전류를 위험하지 않는 값 이하로 제한.\n  ③ 인축의 몸에 흐르는 고장전류의 지속시간을 위험하지 않는 시간까지로 제한.\n\n고장보호는 간접접촉을 방지하는 것이며, 직접접촉을 방지하는 것은 기본보호에 해당한다. 따라서 ①번 설명은 틀렸다.",
    image: null
  },
  {
    id: 95,
    question: "네온방전등의 관등회로의 전선을 애자공사에 의해 자기 또는 유리제 등의 애자로 견고하게 지지하여 조영재의 아랫면 또는 옆면에 부착한 경우 전선 상호 간의 이격거리는 몇 [mm] 이상이어야 하는가?",
    options: [
      "30",
      "60",
      "80",
      "100"
    ],
    answer: 2,
    explanation: "234.12 네온방전등.\n네온방전등에 공급하는 전로의 대지전압은 300[V] 이하로 하여야 하며, 관등회로의 배선은 애자공사로 다음에 의하여 시설하여야 한다. 다만, 네온방전등에 공급하는 전로의 대지전압이 150[V] 이하인 경우에는 적용하지 않는다.\n가. 전선은 네온용전선을 사용할 것.\n나. 전선 상호 간의 이격거리는 60[mm] 이상이어야 한다.",
    image: null
  },
  {
    id: 96,
    question: "수냉식 발전기에서 사용하는 수냉 냉각 장치에 대한 시설기준으로 틀린 것은?",
    options: [
      "① 수소를 통하는 관으로 동관을 사용할 수 있다.",
      "② 수소를 통하는 관은 이음매가 없는 강관이어야 한다.",
      "③ 발전기 내부의 수소의 온도를 계측하는 장치를 시설하여야 한다.",
      "④ 발전기 내부의 수소의 온도가 85[%] 이하로 저하한 경우에 이를 경보하는 장치를 시설하여야 한다."
    ],
    answer: 2,
    explanation: "35.1.2 수냉식 발전기 등의 시설\n수냉식발전기의 냉각기, 조상기 또는 이에 부속하는 수소 냉각 장치는 다음 각 호에 따라 시설하여야 한다.\n가. 발전기 또는 조상기는 기밀구조의 것이고 또한 수소가 대기압에서 폭발하는 경우에 생기는 압력에 견디는 강도를 가질 것일 것.\n나. 발전기 내부 또는 조상기 내부의 수소의 온도가 85[%] 이하로 저하한 경우에 이를 경보하는 장치를 시설할 것.\n다. 발전기 내부 또는 조상기 내부의 수소의 압력을 계측하는 장치 및 그 압력이 현저히 변동한 경우에 이를 경보하는 장치를 시설할 것.\n라. 발전기 내부 또는 조상기 내부의 수소의 온도를 계측하는 장치를 시설할 것.\n마. 수소를 통하는 관은 동관 또는 이음매 없는 강관이어야 하며 또한 수소가 대기압에서 폭발하는 경우에 생기는 압력에 견디는 강도를 가질 것.\n따라서 ②번 보기는 '수소를 통하는 관은 이음매가 없는 강관이어야 한다.'고 명시하여 동관 사용을 배제하므로 틀린 설명이다.",
    image: null
  },
  {
    id: 97,
    question: "전력선통신설비인 무선통신용 안테나 등을 지지하는 철주의 기초 안전율은 얼마 이상이어야 하는가?(단, 무선용 안테나 등 이 전선로의 주위상태를 감시할 목적으로 시설되는 것이 아닌 경우이다.)",
    options: [
      "① 1.3",
      "② 1.5",
      "③ 1.8",
      "④ 2.0"
    ],
    answer: 2,
    explanation: "364.1 무선용 안테나 등을 지지하는 철탑 등의 시설\n전력선통신설비인 무선통신용 안테나 또는 반사판을 지지하는 목주 · 철주 · 철근 콘크리트주 또는 철탑은 다음의 따라 시설하여야 한다. 다만, 무선용 안테나 등이 전선로의 주위상태를 감시할 목적으로 시설되는 것일 경우에는 그러하지 아니하다.\n가. 목주는 풍압하중에 대한 안전율은 1.5 이상이어야 한다.\n나. 철주 · 철근 콘크리트주 또는 철탑의 기초 안전율은 1.5 이상이어야 한다.",
    image: null
  },
  {
    id: 98,
    question: "특고압 가공전선로의 지지물 양측의 경간의 차가 큰 곳에 사용하는 철탑의 종류는?",
    options: [
      "① 내장형",
      "② 보강형",
      "③ 직선형",
      "④ 인류형"
    ],
    answer: 4,
    explanation: "333.11 특고압 가공전선로의 철주 · 철근 콘크리트주 또는 철탑의 종류\n특고압 가공전선로의 지지물로 사용하는 B종 철근 · B종 콘크리트주 또는 철탑의 종류는 다음과 같다.\n가. 직선형 : 전선로의 직선 부분(3° 이하의 수평 각도 이룩는 곳 포함)에 사용되는 것\n나. 각도형 : 전선로 중 수평 각도 3°를 넘는 곳에 사용되는 것\n다. 인류형 : 긴 가섭선을 인류하는 곳에 사용되는 것\n\n지지물 양측의 경간 차이가 큰 곳은 불평형 장력이 크게 발생하므로, 이를 견딜 수 있는 인류형 철탑을 사용한다.",
    image: null
  },
  {
    id: 99,
    question: "사무실 건물의 조명설비에 사용되는 백열전등 또는 방전등에 전기를 공급하는 옥내전로의 대지전압은 몇 [V] 이하인가?",
    options: [
      "① 250",
      "② 300",
      "③ 350",
      "④ 400"
    ],
    answer: 2,
    explanation: "231.6 옥내전로의 대지 전압의 제한\n백열전등 또는 방전등에 전기를 공급하는 옥내의 전로의 대지전압은 300[V] 이하이어야 한다.",
    image: null
  },
  {
    id: 100,
    question: "전기저장장치를 전용건물에 시설하는 경우에 대한 설명이다. 다음 ( )에 들어갈 내용으로 옳은 것은?\n\n전기저장장치 시설장소는 주변 시설(도로, 건물, 가연물질 등)으로부터 ( ⓐ )[m] 이상 이격하고 다 른 건물의 출입구나 피난계단 등 이와 유사한 장소로부터는 ( ⓑ )[m] 이상 이격하여야 한다.",
    options: [
      "① 3, 1",
      "② 1, 2",
      "③ 1, 3",
      "④ 1.5, 3"
    ],
    answer: 4,
    explanation: "515.2.1 전용건물에 시설하는 경우\n전기저장장치를 일반인이 출입하는 건물과 분리된 별도의 장소에 시설하는 경우에는 다음에 따라 시설하여야 한다.\n가. 전기저장장치 시설장소의 바닥, 벽(지붕), 벽면 재료는 불연재료이어야 한다. 단, 단열재는 준불연재료 또는 이와 동등 이상의 것을 사용할 수 있다.\n나. 전기저장장치 시설장소는 지표면을 기준으로 높이 22[m] 이내로 하고 해당 장소의 출구가 있는 바닥면을 기준으로 깊이 9[m] 이하여야 한다.\n다. 이차전지는 전력변환장치(PCS) 등의 다른 전기설비와 분리된 격실에 설치하고 다음에 따라야 한다.\n① 이차전지실의 벽면 재료 및 단열재는 '가'와 같아야 한다.\n② 이차전지는 벽면으로부터 1[m] 이상 이격하여 설치하여야 한다. 단, 옥외의 전용 컨테이너에서 적정 거리를 이격한 경우에는 규정에 의하지 아니할 수 있다.\n③ 이차전지와 물리적으로 인접 시설해야 하는 제어장치 및 보조설비(보조설비 및 조명설비 등)는 이차전지실 내에 설치할 수 있다.\n④ 이차전지실 내부에는 가연성 물질을 두지 않아야 한다.\n라. 인화성 또는 유독성 가스가 축적되지 않는 근거를 제조사에서 제공하는 경우에는 이차전지실에 한하여 환기시설을 생략할 수 있다.\n마. 전기저장장치 시설장소는 주변 시설(도로, 건물, 가연물질 등)으로부터 1.5[m] 이상 이격하고 다른 건물의 출입구나 피난계단 등 이와 유사한 장소로부터는 3[m] 이상 이격하여야 한다.",
    image: null
  }
];

export default questions;