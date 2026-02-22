const questions = [
  {
    id: 1,
    question: "자속밀도가 $0.3[Wb/m^2]$인 평등자계 내에 $5[A]$의 전류가 흐르고 있는 길이 $2[m]$인 직선도체를 자계의 방향에 대하여 $60^\\circ$의 각도로 놓았을 때 이 도체가 받는 힘은 약 몇 $[N]$인가? [cite: 5]",
    options: [
      "1.3 [cite: 6]",
      "2.6 [cite: 8]",
      "34.7 [cite: 7]",
      "45.2 [cite: 8]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 2,
    question: "다음 중 정전계와 정자계의 대응관계가 성립되는 것은? [cite: 9]",
    options: [
      "$\\nabla \\cdot D = \\rho_v \\Rightarrow \\nabla \\cdot B = \\rho_m$ [cite: 9]",
      "$\\nabla^2 V = \\frac{\\rho_v}{\\epsilon_0} \\Rightarrow \\nabla^2 A = \\frac{i}{\\mu_0}$ [cite: 10]",
      "$W = \\frac{1}{2}CV^2 \\Rightarrow W = \\frac{1}{2}LI^2$ [cite: 11]",
      "$F = 9 \\times 10^9 \\frac{Q_1 Q_2}{R^2} a_R \\Rightarrow F = 6.33 \\times 10^4 \\frac{m_1 m_2}{R^2} a_R$ [cite: 12]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 3,
    question: "단면적 $S[m^2]$ 단위 길이당 권수가 $n_0[Turns/m]$ 인 무한히 긴 솔레노이드의 자기인덕턴스 $[H/m]$를 구하면? [cite: 13]",
    options: [
      "$\\mu S n_0$ [cite: 14]",
      "$\\mu S^2 n_0$ [cite: 14]",
      "$\\mu S n_0^2$ [cite: 15]",
      "$\\mu S^2 n_0^2$ [cite: 15]"
    ],
    answer: 3,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 4,
    question: "자기인덕턴스 $L[H]$인 코일에 전류 $I[A]$를 흘렸을 때 자계의 세기가 $H[AT/m]$ 였다. 이 코일을 진공 중에서 자화시키는데 필요한 에너지밀도 $E[J/m^3]$ 는? [cite: 16, 17]",
    options: [
      "$\\frac{1}{2}LI^2$ [cite: 18]",
      "$\\frac{1}{2}\\mu_0 H^2$ [cite: 18]",
      "$LI^2$ [cite: 19]",
      "$\\mu_0 H^2$ [cite: 20]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 5,
    question: "무한히 넓은 두 장의 도체판을 $d[m]$의 간격으로 평행하게 놓은 후, 두 판 사이에 $V[V]$의 전압을 가한 경우 도체판의 단위 면적당 작용하는 힘은 몇 $[N/m^2]$ 인가? [cite: 21]",
    options: [
      "$f = \\epsilon_0 \\frac{V^2}{d}$ [cite: 22]",
      "$f = \\frac{1}{2}\\epsilon_0 \\frac{V^2}{d}$ [cite: 24]",
      "$f = \\frac{1}{2}\\epsilon_0 \\left(\\frac{V}{d}\\right)^2$ [cite: 23]",
      "$f = \\frac{1}{2}\\frac{1}{\\epsilon_0} \\left(\\frac{V}{d}\\right)^2$ [cite: 24]"
    ],
    answer: 3,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 6,
    question: "패러데이의 법칙에 대한 설명으로 가장 알맞은 것은? [cite: 27]",
    options: [
      "전자유도에 의하여 회로에 발생되는 기전력은 자속 쇄교수의 시간에 대한 증가율에 반비례한다. [cite: 28]",
      "전자유도에 의하여 회로에 발생되는 기전력은 자속의 변화를 방해하는 방향으로 기전력이 유도된다. [cite: 29]",
      "정전유도에 의하여 회로에 발생하는 기자력은 자속의 변화방향으로 유도된다. [cite: 30]",
      "전자유도에 의하여 회로에 발생하는 기전력은 자속 쇄교수의 시간 변화율에 비례한다. [cite: 31]"
    ],
    answer: 4,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 7,
    question: "공극(air gap)이 $\\delta[m]$인 강자성체로 된 환상 영구자석에서 성립하는 식은? (단, $l[m]$는 영구자석의 길이이며 $l \\gg \\delta$ 이고, 자속 밀도와 자계의 세기를 각각 $B[Wb/m^2], H[AT/m]$ 이라 한다.) [cite: 32, 33]",
    options: [
      "$\\frac{B}{H} = -\\frac{l\\mu_0}{\\delta}$ [cite: 34]",
      "$\\frac{B}{H} = \\frac{\\delta\\mu_0}{l}$ [cite: 34]",
      "$\\frac{B}{H} = -\\frac{\\delta\\mu_0}{l}$ [cite: 37]",
      "$\\frac{B}{H} = \\frac{l\\mu_0}{\\delta}$ [cite: 37]"
    ],
    answer: 1,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 8,
    question: "전위함수가 $V = 3xy + 2z^2 + 4$ 일 때 전계의 세기는? [cite: 38]",
    options: [
      "$-3yi - 3xj - 4zk$ [cite: 39]",
      "$3yi + 3xj + 4zk$ [cite: 40]",
      "$-3yi + 3xj - 4zk$ [cite: 41]",
      "$3yi - 3xj + 4zk$ [cite: 42]"
    ],
    answer: 1,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 9,
    question: "전하 $q[C]$이 공기 중의 자계 $H[AT/m]$ 에 수직방향으로 $v[m/s]$ 속도로 돌입하였을 때 받는 힘은 몇 $[N]$인가? [cite: 43]",
    options: [
      "$\\frac{qH}{\\mu_0 v}$ [cite: 44]",
      "$\\frac{1}{\\mu_0} qvH$ [cite: 44]",
      "$qvH$ [cite: 44]",
      "$\\mu_0 qvH$ [cite: 45]"
    ],
    answer: 4,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 10,
    question: "0.2$[\\mu F]$인 평행판 공기 콘덴서가 있다. 전극 간에 그 간격의 절반 두께의 유리판을 넣었다면 콘덴서의 용량은 약 몇 $[\\mu F]$인가? (단, 유리의 비유전율은 10이다.) [cite: 46, 47]",
    options: [
      "0.26 [cite: 47]",
      "0.36 [cite: 48]",
      "0.46 [cite: 49]",
      "0.56 [cite: 50]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 11,
    question: "한 변의 길이가 $a[m]$인 정삼각형 회로에 $I[A]$가 흐르고 있을 때 그 정삼각형 중심의 자계의 세기는 몇 $[A/m]$인가? [cite: 53]",
    options: [
      "$\\frac{9I}{2\\pi a}$ [cite: 54]",
      "$\\frac{\\sqrt{3}I}{\\pi a}$ [cite: 54]",
      "$\\frac{2\\sqrt{2}I}{\\pi a}$ [cite: 56]",
      "$\\frac{\\sqrt{2}I}{2\\pi a}$ [cite: 56]"
    ],
    answer: 1,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 12,
    question: "전속밀도에 대한 설명으로 가장 옳은 것은? [cite: 57]",
    options: [
      "전속은 스칼라량이기 때문에 전속밀도도 스칼라량이다. [cite: 58]",
      "전속밀도는 전계의 세기의 방향과 반대 방향이다. [cite: 59]",
      "전속밀도는 유전체 내에 분극의 세기와 같다. [cite: 60]",
      "전속밀도는 유전체와 관계없이 크기는 일정하다. [cite: 61]"
    ],
    answer: 4,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 13,
    question: "평등자계와 직각방향으로 일정한 속도로 발사된 전자의 원운동에 관한 설명으로 옳은 것은? [cite: 62]",
    options: [
      "플레밍의 오른손법칙에 의한 로렌츠의 힘과 원심력의 평형 원운동이다. [cite: 63]",
      "원의 반지름은 전자의 발사속도와 전계의 세기에 곱에 반비례한다. [cite: 64]",
      "전자의 원운동 주기는 전자의 발사 속도와 무관하다. [cite: 65]",
      "전자의 원운동 주파수는 전자의 질량에 비례한다. [cite: 66]"
    ],
    answer: 3,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 14,
    question: "벡터 포텐샬 $A = 3x^2 y a_x + 2x a_y - z^3 a_z [Wb/m]$ 일 때 의 자계의 세기 $H[A/m]$는? (단, $\\mu$는 투자율이라 한다.) [cite: 67, 68]",
    options: [
      "$\\frac{1}{\\mu}(2-3x^2)a_y$ [cite: 70]",
      "$\\frac{1}{\\mu}(2-3x^2)a_z$ [cite: 71]",
      "$\\frac{1}{\\mu}(3-2x^2)a_y$ [cite: 72]",
      "$\\frac{1}{\\mu}(3-2x^2)a_z$ [cite: 73]"
    ],
    answer: 3,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 15,
    question: "단면적 $4[cm^2]$의 철심에 $6 \\times 10^{-4}[Wb]$ 의 자속을 통하게 하려면 $2,800[AT/m]$ 의 자계가 필요하다. 이 철심의 비투자율은 약 얼마인가? [cite: 74, 75, 76]",
    options: [
      "346 [cite: 99]",
      "375 [cite: 101]",
      "407 [cite: 100]",
      "426 [cite: 102]"
    ],
    answer: 4,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 16,
    question: "점전하에 의한 전위 함수가 $V = \\frac{1}{x^2+y^2}[V]$ 일 때 $\\text{grad } V$는? [cite: 103, 104, 106]",
    options: [
      "$-\\frac{ix+jy}{(x^2+y^2)^2}$ [cite: 107]",
      "$-\\frac{i2x+j2y}{(x^2+y^2)^2}$ [cite: 105]",
      "$-\\frac{i2x}{(x^2+y^2)^2}$ [cite: 108]",
      "$-\\frac{j2y}{(x^2+y^2)^2}$ [cite: 109]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 17,
    question: "정전계에서 도체에 정(+)의 전하를 주었을 때의 설명으로 틀린 것은? [cite: 77]",
    options: [
      "도체 표면의 곡률 반지름이 작은 곳에 전하가 많이 분포한다. [cite: 78]",
      "도체 외측의 표면에만 전하가 분포한다. [cite: 79]",
      "도체 표면에서 수직으로 전기력선이 출입한다. [cite: 80]",
      "도체 내에 있는 공동면에도 전하가 골고루 분포한다. [cite: 81]"
    ],
    answer: 4,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 18,
    question: "비오-사바르의 법칙으로 구할 수 있는 것은? [cite: 82]",
    options: [
      "전계의 세기 [cite: 83]",
      "자계의 세기 [cite: 84]",
      "전위 [cite: 85]",
      "자위 [cite: 86]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 19,
    question: "유전율이 다른 두 유전체의 경계면에 작용하는 힘은? (단, 유전체의 경계면과 전계 방향은 수직이다.) [cite: 87, 88]",
    options: [
      "유전율의 차이에 비례 [cite: 89]",
      "유전율의 차이에 반비례 [cite: 90]",
      "경계면의 전계 세기의 제곱에 비례 [cite: 91]",
      "경계면의 면전하밀도의 제곱에 비례 [cite: 92]"
    ],
    answer: 4,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 20,
    question: "두 종류의 금속으로 된 회로에 전류를 통하면 각 접속점에서 열의 흡수 또는 발생이 일어나는 현상은? [cite: 93, 94]",
    options: [
      "톰슨 효과 [cite: 95]",
      "제벡 효과 [cite: 96]",
      "볼타 효과 [cite: 97]",
      "펠티에 효과 [cite: 98]"
    ],
    answer: 4,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 21,
    question: "가공지선의 설치 목적이 아닌 것은? [cite: 111]",
    options: [
      "전압강하의 방지 [cite: 112]",
      "직격뢰에 대한 차폐 [cite: 113]",
      "유도뢰에 대한 정전차폐 [cite: 114]",
      "통신선에 대한 전자유도 장해 경감 [cite: 115]"
    ],
    answer: 1,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 22,
    question: "1대의 주상변압기에 역률(뒤짐) $\\cos \\theta_1$, 유효 전력 $P_1[kW]$의 부하와 역률(뒤짐) $\\cos \\theta_2$. 유효 전력 $P_2[kW]$ 의 부하가 병렬로 접속되어 있을 때 주상 변압기의 2차 측에서 본 부하의 종합역률은 어떻게 되는가? [cite: 118, 119]",
    options: [
      "$\\frac{P_1+P_2}{\\sqrt{(P_1+P_2)^2+(P_1 \\tan \\theta_1+P_2 \\tan \\theta_2)^2}}$ [cite: 120]",
      "$\\frac{P_1+P_2}{\\sqrt{(P_1+P_2)^2+(P_1 \\sin \\theta_1+P_2 \\sin \\theta_2)^2}}$ [cite: 121]",
      "$\\frac{P_1+P_2}{\\frac{P_1}{\\cos \\theta_1}+\\frac{P_2}{\\cos \\theta_2}}$ [cite: 122]",
      "$\\frac{P_1+P_2}{\\frac{P_1}{\\sin \\theta_1}+\\frac{P_2}{\\sin \\theta_2}}$ [cite: 124]"
    ],
    answer: 1,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 23,
    question: "전선의 표피효과에 관한 설명으로 옳은 것은? [cite: 125]",
    options: [
      "전선이 굵을수록, 주파수가 낮을수록 커진다. [cite: 125]",
      "전선이 굵을수록, 주파수가 높을수록 커진다. [cite: 126]",
      "전선이 가늘수록, 주파수가 낮을수록 커진다. [cite: 127]",
      "전선이 가늘수록, 주파수가 높을수록 커진다. [cite: 128]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 24,
    question: "각 수용가의 수용설비용량이 $50[kW], 100[kW], 80[kW], 60[kW], 150[kW]$이며, 각각의 수용률이 0.6, 0.6, 0.5, 0.5, 0.4이고 부등률이 1.3일 때 변압기 용량은 몇 $[kVA]$가 필요한가? (단, 평균부하역률은 $80[\\%]$라고 한다.) [cite: 129, 130, 155]",
    options: [
      "142 [cite: 156]",
      "165 [cite: 158]",
      "183 [cite: 157]",
      "212 [cite: 158]"
    ],
    answer: 4,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 25,
    question: "수력발전소에서 흡출관을 사용하는 목적은? [cite: 159]",
    options: [
      "압력을 줄인다. [cite: 160]",
      "유효낙차를 늘린다. [cite: 161]",
      "속도 변동률을 작게 한다. [cite: 162]",
      "물의 유선을 일정하게 한다. [cite: 163]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 26,
    question: "총 낙차 $80.9[m]$. 사용 수량 $30[m^3/s]$인 발전소가 있다. 수로의 길이가 $3,800[m]$, 수로의 구배가 $\\frac{1}{2,000}$ 수압 철관의 손실 낙차를 $1[m]$라고 하면 이 발전소의 출력은 약 몇 $[kW]$인가? (단, 수차 및 발전기의 종합 효율은 $83[\\%]$라 한다.) [cite: 164, 165, 166, 167]",
    options: [
      "15,000 [cite: 168]",
      "19,000 [cite: 170]",
      "24,000 [cite: 169]",
      "28,000 [cite: 171]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 27,
    question: "다음 중 부하전류의 차단에 사용되지 않는 것은? [cite: 131]",
    options: [
      "ABB [cite: 131]",
      "OCB [cite: 133]",
      "VCB [cite: 132]",
      "DS [cite: 133]"
    ],
    answer: 4,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 28,
    question: "다음 중 송전선의 코로나손과 가장 관계가 깊은 것은? [cite: 134]",
    options: [
      "상대공기밀도 [cite: 135]",
      "송전선의 정전용량 [cite: 137]",
      "송전거리 [cite: 136]",
      "송전선 전압변동률 [cite: 138]"
    ],
    answer: 1,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 29,
    question: "3상 전원에 접속된 $\\Delta$결선의 콘덴서를 $Y$결선으로 바꾸면 진상용량은 어떻게 되는가? [cite: 139, 140]",
    options: [
      "$\\sqrt{3}$ 배로 된다. [cite: 141]",
      "$\\frac{1}{3}$ 배로 된다. [cite: 143, 144]",
      "3배로 된다. [cite: 142]",
      "$\\frac{1}{\\sqrt{3}}$ 배로 된다. [cite: 146]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 30,
    question: "다음 중 고압배전계통의 구성 순서로 알맞은 것은? [cite: 147]",
    options: [
      "배전변전소 $\\rightarrow$ 간선 $\\rightarrow$ 분기선 $\\rightarrow$ 급전선 [cite: 148]",
      "배전변전소 $\\rightarrow$ 급전선 $\\rightarrow$ 간선 $\\rightarrow$ 분기선 [cite: 149]",
      "배전변전소 $\\rightarrow$ 간선 $\\rightarrow$ 급전선 $\\rightarrow$ 분기선 [cite: 150]",
      "배전변전소 $\\rightarrow$ 급전선 $\\rightarrow$ 분기선 $\\rightarrow$ 간선 [cite: 151]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 31,
    question: "가스절연개폐장치인 GIS(Gas Insulated Switch Gear)를 채용할 때, 다음 중 GIS 내에 설치하지 않는 장치는? [cite: 152]",
    options: [
      "전력용 변압기 [cite: 153]",
      "계기용 변성기 [cite: 154]",
      "차단기 [cite: 153]",
      "단로기 [cite: 154]"
    ],
    answer: 1,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 32,
    question: "송전계통의 한 부분이 그림과 같이 3상변압기로 1차측은 $\\Delta$, 2차측은 $Y$로 중성점이 접지되어 있을 경우, 1차측에 흐르는 영상전류는? [cite: 172]",
    options: [
      "1차측 선로에서 $\\infty$이다. [cite: 175]",
      "1차측 선로에서 반드시 0이다. [cite: 176]",
      "1차측 변압기 내부에서는 반드시 0이다. [cite: 177]",
      "1차측 변압기 내부와 1차측 선로에서 반드시 0이다. [cite: 178]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 33,
    question: "화력발전소에서 절탄기의 용도는? [cite: 179]",
    options: [
      "보일러에 공급되는 급수를 예열한다. [cite: 180]",
      "포화증기를 과열한다. [cite: 181]",
      "연소용 공기를 예열한다. [cite: 182]",
      "석탄을 건조한다. [cite: 183]"
    ],
    answer: 1,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 34,
    question: "장거리 송전선로에서 4단자 정수 $A, B, C, D$의 성질 중 성립되는 조건은? [cite: 186]",
    options: [
      "$A = D$ [cite: 187]",
      "$B = C$ [cite: 188]",
      "$A = C$ [cite: 189]",
      "$B = A$ [cite: 189]"
    ],
    answer: 1,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 35,
    question: "전력용 콘덴서에 의하여 얻을 수 있는 전류는? [cite: 190]",
    options: [
      "지상전류 [cite: 191]",
      "진상전류 [cite: 192]",
      "동상전류 [cite: 193]",
      "영상전류 [cite: 194]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 36,
    question: "3상 1회선 송전선을 정삼각형으로 배치한 3상선로의 작용인덕턴스를 구하는 식은? (단, $D$는 전선의 선간 거리$[m], r$은 전선의 반지름$[m]$이다.) [cite: 195]",
    options: [
      "$L = 0.5 + 0.4605 \\log_{10}\\frac{D}{r}$ [cite: 196]",
      "$L = 0.5 + 0.4605 \\log_{10}\\frac{D}{r^2}$ [cite: 197]",
      "$L = 0.05 + 0.4605 \\log_{10}\\frac{D}{r}$ [cite: 198]",
      "$L = 0.05 + 0.4605 \\log_{10}\\frac{D}{r^2}$ [cite: 199]"
    ],
    answer: 3,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 37,
    question: "전력계통의 전압을 조정하는 가장 보편적인 방법은? [cite: 200]",
    options: [
      "발전기의 유효전력 조정 [cite: 201]",
      "부하의 유효전력 조정 [cite: 202]",
      "계통의 주파수 조정 [cite: 203]",
      "계통의 무효전력 조정 [cite: 204]"
    ],
    answer: 4,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 38,
    question: "선로의 길이가 $20[km]$인 $154[kV]$ 3상 3선식, 2회선 송전선의 1선당 대지정전용량은 $0.0043[\\mu F/km]$ 이다. 여기에 시설할 소호리액터의 용량은 약 몇 $[kVA]$인가? [cite: 205, 206]",
    options: [
      "1,338 [cite: 207]",
      "1,543 [cite: 208]",
      "1,537 [cite: 209]",
      "1,771 [cite: 210]"
    ],
    answer: 3,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 39,
    question: "수조에 대한 설명 중 틀린 것은? [cite: 211]",
    options: [
      "수로 내의 수위의 이상 상승을 방지한다. [cite: 212]",
      "수로식 발전소의 수로 처음 부분과 수압관 아래 부분에 설치한다. [cite: 213]",
      "수로에서 유입하는 물속의 투사를 침전시켜서 배사문으로 배사하고 부유물을 제거한다. [cite: 214]",
      "상수조는 최대사용수량의 1~2분 정도의 조정용량을 가질 필요가 있다. [cite: 215]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 40,
    question: "다음 중 송전계통에서 안정도 증진과 관계없는 것은? [cite: 216]",
    options: [
      "리액턴스 감소 [cite: 217]",
      "재폐로방식의 채용 [cite: 218]",
      "속응여자방식의 채용 [cite: 219]",
      "차폐선의 채용 [cite: 220]"
    ],
    answer: 4,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 41,
    question: "$3,000[V], 60[Hz]$, 8극 $100[kW]$의 3상 유도전동기가 있다. 전부하에서 2차 동손이 $3[kW]$. 기계손이 $2[kW]$라면 전부하 회전수는 약 몇 $[rpm]$인가? [cite: 222]",
    options: [
      "498 [cite: 223]",
      "593 [cite: 225]",
      "874 [cite: 224]",
      "984 [cite: 226]"
    ],
    answer: 3,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 42,
    question: "단락비가 1.2인 발전기의 퍼센트 동기임피던스$[\\%]$는 약 얼마인가? [cite: 227, 228]",
    options: [
      "120 [cite: 229]",
      "83 [cite: 231]",
      "1.2 [cite: 230]",
      "0.83 [cite: 231]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 43,
    question: "그림은 단상 직권 정류자 전동기의 개념도이다. C를 무엇이라고 하는가? [cite: 232, 233]",
    options: [
      "제어권선 [cite: 234]",
      "보상권선 [cite: 235]",
      "보극권선 [cite: 236]",
      "단층권선 [cite: 237]"
    ],
    answer: 2,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 44,
    question: "어떤 단상 변압기의 2차 무부하 전압이 $240[V]$이고, 정격 부하시의 2차 단자 전압이 $230[V]$이다. 전압 변동률은 약 얼마인가? [cite: 241, 242, 243]",
    options: [
      "4.35[%] [cite: 244]",
      "5.15[%] [cite: 246]",
      "6.65[%] [cite: 245]",
      "7.35[%] [cite: 246]"
    ],
    answer: 1,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 45,
    question: "변압기 1차측 사용 탭이 $22900[V]$인 경우 2차측 전압이 $360[V]$였다면 2차측 전압을 $380[V]$로 하기 위해서는 1차측의 탭을 몇 $[V]$로 선택해야 하는가? [cite: 247, 248, 249]",
    options: [
      "21900 [cite: 250]",
      "20500 [cite: 252]",
      "24100 [cite: 251]",
      "22900 [cite: 253]"
    ],
    answer: 1,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 46,
    question: "유도전동기의 2차 효율은? (단. $s$는 슬립이다.) [cite: 254]",
    options: [
      "$\\frac{1}{s}$ [cite: 255]",
      "$s$ [cite: 257]",
      "$1-s$ [cite: 256]",
      "$s^2$ [cite: 258]"
    ],
    answer: 3,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 47,
    question: "그림은 일반적인 반파정류회로이다. 변압기 2차 전압의 실효값을 $E [V]$라 할 때, 직류전류 평균값$[A]$은? (단. 정류기의 전압강하는 무시한다.) [cite: 261]",
    options: [
      "$\\frac{E}{R}$ [cite: 262]",
      "$\\frac{E}{2R}$ [cite: 262]",
      "$\\frac{2\\sqrt{2}E}{\\pi R}$ [cite: 263]",
      "$\\frac{\\sqrt{2}E}{\\pi R}$ [cite: 263]"
    ],
    answer: 4,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 48,
    question: "동기리액턴스 $x_s=10[\\Omega]$ 전기자 저항 $r_a=0.1[\\Omega]$ 인 Y결선 3상 동기발전기가 있다. 1상의 단자전압은 $V=4,000[V]$이고 유기기전력 $E=6,400[V]$ 이다. 부하각 $\\delta=30^{\\circ}$ 라고 하면 발전기의 3상 출력$[kW]$은 약 얼마인가? [cite: 265, 266]",
    options: [
      "1,250 [cite: 266]",
      "2,830 [cite: 268]",
      "3,840 [cite: 267]",
      "4,650 [cite: 268]"
    ],
    answer: 3,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 49,
    question: "1차측 권수가 $1,500$인 변압기의 2차측에 $16[\\Omega]$ 의 저항을 접속하니 1차측에서는 $8[k\\Omega]$으로 환산되었다. 2차측 권수는? [cite: 269]",
    options: [
      "약 67 [cite: 270]",
      "약 87 [cite: 272]",
      "약 107 [cite: 271]",
      "약 207 [cite: 272]"
    ],
    answer: 1,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 50,
    question: "그림과 같은 단상브리지 정류회로(혼합브리지)에서 직류 평균전압$[V]$은? [cite: 273]",
    options: [
      "$\\frac{2\\sqrt{2}E}{\\pi}(\\frac{1+\\cos\\alpha}{2})$ [cite: 275]",
      "$\\frac{\\sqrt{2}E}{\\pi}(\\frac{1+\\cos\\alpha}{2})$ [cite: 275]",
      "$\\frac{2\\sqrt{2}E}{\\pi}(\\frac{1-\\cos\\alpha}{2})$ [cite: 275]",
      "$\\frac{\\sqrt{2}E}{\\pi}(\\frac{1-\\cos\\alpha}{2})$ [cite: 276]"
    ],
    answer: 1,
    explanation: "정답 출처 ",
    image: null
  },
  {
    id: 51,
    question: "직류발전기의 단자전압을 조정하려면 어느 것을 조정하여야 하는가?",
    options: [
      "기동저항",
      "계자저항",
      "방전저항",
      "전기자저항"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 52,
    question: "50[Hz]로 설계된 3상 유도전동기를 60[Hz]에 사용하는 경우 단자전압을 110[%]로 높일 때 최대토크는 어떠한가?",
    options: [
      "1.2배로 증가한다.",
      "0.8배로 감소한다.",
      "2배 증가한다.",
      "거의 변하지 않는다."
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 53,
    question: "전기철도에 가장 적합한 직류전동기는?",
    options: [
      "분권전동기",
      "직권전동기",
      "복권전동기",
      "자여자분권전동기"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 54,
    question: "이상적인 변압기의 무부하에서 위상관계로 옳은 것은?",
    options: [
      "자속과 여자전류는 동위상이다.",
      "자속은 인가전압 보다 $90^\\circ$ 앞선다.",
      "인가전압은 1차 유기기전력 보다 $90^\\circ$ 앞선다.",
      "1차 유기기전력과 2차 유기기전력의 위상은 반대이다."
    ],
    answer: 1,
    explanation: "",
    image: null
  },
  {
    id: 55,
    question: "전부하 회전수가 1732[rpm]인 직류 직권전동기에서 토크가 전부하 토크의 $\\frac{3}{4}$ 으로 기동할 때 회전수는 약 몇 [rpm]으로 회전하는가?",
    options: [
      "2000",
      "1865",
      "1732",
      "1675"
    ],
    answer: 1,
    explanation: "",
    image: null
  },
  {
    id: 56,
    question: "1차 전압 6,600[V], 2차 전압 220[V], 주파수 60[Hz], 1차 권수 1,000회의 변압기가 있다. 최대자속은 약 몇 [Wb]인가?",
    options: [
      "0.020",
      "0.025",
      "0.030",
      "0.032"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 57,
    question: "3상 농형 유도전동기의 기동방법으로 틀린 것은?",
    options: [
      "Y-$\\Delta$ 기동",
      "전전압 기동",
      "리액터 기동",
      "2차 저항에 의한 기동"
    ],
    answer: 4,
    explanation: "",
    image: null
  },
  {
    id: 58,
    question: "4극, 60[Hz]인 3상 유도전동기의 동기와트가 1[kW] 일 때 토크[Nm]는?",
    options: [
      "5.31[N.m]",
      "4.31[N.m]",
      "3.31[N.m]",
      "2.31[N.m]"
    ],
    answer: 1,
    explanation: "",
    image: null
  },
  {
    id: 59,
    question: "3상 동기 발전기에서 권선 피치와 자극 피치의 비를 $\\frac{13}{15}$ 단절권으로 하였을 때의 단절권 계수는?",
    options: [
      "$\\sin\\frac{13}{15}\\pi$",
      "$\\sin\\frac{13}{30}\\pi$",
      "$\\sin\\frac{15}{26}\\pi$",
      "$\\sin\\frac{15}{13}\\pi$"
    ],
    answer: 2,
    explanation: "",
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
    explanation: "",
    image: null
  },
  {
    id: 61,
    question: "4단자 정수 A, B, C, D로 출력측을 개방시켰을 때 입력측에서 본 구동점 임피던스 $Z_{11}=\\frac{V_1}{I_1}|_{I_2=0}$ 를 표시 한 것 중 옳은 것은?",
    options: [
      "$Z_{11}=\\frac{A}{C}$",
      "$Z_{11}=\\frac{A}{B}$",
      "$Z_{11}=\\frac{B}{D}$",
      "$Z_{11}=\\frac{B}{C}$"
    ],
    answer: 1,
    explanation: "",
    image: null
  },
  {
    id: 62,
    question: "한 상의 임피던스가 $6+j8[\\Omega]$인 $\\Delta$부하에 대칭 선간전압 200[V]를 인가할 때 3상 전력은 몇 [W]인가?",
    options: [
      "2,400",
      "3,600",
      "7,200",
      "10,800"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 63,
    question: "그림과 같은 R-C병렬회로에서 전원전압이 $e(t)=3e^{-5t}$인 경우 이 회로의 임피던스는?",
    options: [
      "$\\frac{j\\omega RC}{1+j\\omega RC}$",
      "$\\frac{R}{1-5RC}$",
      "$\\frac{R}{1+RCs}$",
      "$\\frac{1+j\\omega RC}{R}$"
    ],
    answer: 3,
    explanation: "",
    image: null
  },
  {
    id: 64,
    question: "회로에서 전압 $V_{ab}[V]$는?",
    options: [
      "2",
      "3",
      "6",
      "9"
    ],
    answer: 3,
    explanation: "",
    image: null
  },
  {
    id: 65,
    question: "위상정수가 $\\frac{\\pi}{8}[rad/m]$ 인 선로의 1[MHz]에 대한 전파속도는 몇 [m/s]인가?",
    options: [
      "$1.6\\times 10^7$",
      "$3.2\\times 10^7$",
      "$5.0\\times 10^7$",
      "$8.0\\times 10^7$"
    ],
    answer: 1,
    explanation: "",
    image: null
  },
  {
    id: 66,
    question: "RL직렬회로에서 $R=20[\\Omega], L=40[mH]$ 이다. 이 회로의 시정수[sec]는?",
    options: [
      "2",
      "$2\\times 10^{-3}$",
      "$\\frac{1}{2}$",
      "$\\frac{1}{2}\\times 10^{-3}$"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 67,
    question: "선간 전압이 V[V]인 3상 평형 전원에 대칭부하 R $[\\Omega]$이 그림과 같이 접속되어 있을 때, a, b 두상 간에 접속된 전력계의 지시 값이 W[W]라면 C상 전류의 크기 [A]는?",
    options: [
      "$\\frac{W}{3V_{ab}}$",
      "$\\frac{2W}{3V_{ab}}$",
      "$\\frac{2W}{\\sqrt{3}V_{ab}}$",
      "$\\frac{\\sqrt{3}W}{V_{ab}}$"
    ],
    answer: 3,
    explanation: "",
    image: null
  },
  {
    id: 68,
    question: "상의 순서가 a-b-c인 불평형 3상 전류가 $I_a=15+j2[A], I_b=-20-j14[A], I_c=-3+j10[A]$ 일 때 영상분 전류 $I_0$는 약 몇 [A]인가?",
    options: [
      "$2.67+j0.38$",
      "$2.02+j6.98$",
      "$15.5-j3.56$",
      "$-2.67-j0.67$"
    ],
    answer: 4,
    explanation: "",
    image: null
  },
  {
    id: 69,
    question: "두 코일 A, B의 저항과 리액턴스가 A코일은 3$[\\Omega]$, 5$[\\Omega]$이고, B코일은 5$[\\Omega]$, 1$[\\Omega]$일 때 두 코일을 직렬로 접속하여 100[V]의 전압을 인가시 회로에 흐르는 전류 I는 몇 [A]인가?",
    options: [
      "$10\\angle-37^\\circ$",
      "$10\\angle37^\\circ$",
      "$10\\angle-53^\\circ$",
      "$10\\angle53^\\circ$"
    ],
    answer: 1,
    explanation: "",
    image: null
  },
  {
    id: 70,
    question: "그림의 대칭 T회로의 일반 4단자 정수가 다음과 같다. $A=D=1.2$, $B=44[\\Omega]$, $C=0.01[\\mho]$일 때, 임피던스 Z $[\\Omega]$의 값은?",
    options: [
      "1.2",
      "12",
      "20",
      "44"
    ],
    answer: 3,
    explanation: "",
    image: null
  },
  {
    id: 71,
    question: "상태방정식 $X=AX+BU$ 에서 $A=\\begin{bmatrix}0&1\\\\ -2&-3\\end{bmatrix}, B=\\begin{bmatrix}0\\\\ 1\\end{bmatrix}$ 일 때 고유값은?",
    options: [
      "-1, -2",
      "1, 2",
      "-2, -3",
      "2, 3"
    ],
    answer: 1,
    explanation: "",
    image: null
  },
  {
    id: 72,
    question: "일정 입력에 대해 잔류편차가 있는 제어계는?",
    options: [
      "비례제어계",
      "적분제어계",
      "비례적분제어계",
      "비례적분미분제어계"
    ],
    answer: 1,
    explanation: "",
    image: null
  },
  {
    id: 73,
    question: "Routh 안정도 판별법에 의한 방법 중 불안정한 제어계의 특성방정식은?",
    options: [
      "$s^3+2s^2+3s+4=0$",
      "$s^3+s^2+5s+4=0$",
      "$s^3+4s^2+5s+2=0$",
      "$s^3+3s^2+2s+8=0$"
    ],
    answer: 4,
    explanation: "",
    image: null
  },
  {
    id: 74,
    question: "그림과 같은 블록선도에 대한 등가 종합 전달함수 $(C/R)$ 는?",
    options: [
      "$\\frac{G_1G_2G_3}{1+G_1G_2+G_1G_2G_3}$",
      "$\\frac{G_1G_2G_3}{1+G_2G_2+G_1G_2G_3}$",
      "$\\frac{G_1G_2G_4}{1+G_1G_2+G_1G_2G_4}$",
      "$\\frac{G_1G_2G_3}{1+G_2G_3+G_1G_2G_4}$"
    ],
    answer: 4,
    explanation: "",
    image: null
  },
  {
    id: 75,
    question: "제어계의 과도응답에서 감쇠비란?",
    options: [
      "제2오버슈트를 최대오버슈트로 나눈 값이다.",
      "최대오버슈트를 제2오버슈트로 나눈 값이다.",
      "제2오버슈트와 최대오버슈트를 곱한 값이다.",
      "제2오버슈트와 최대오버슈트를 더한 값이다."
    ],
    answer: 1,
    explanation: "",
    image: null
  },
  {
    id: 76,
    question: "2차계 전달함수 $G(s)=\\frac{\\omega_n^2}{s^2+2\\zeta\\omega_n s+\\omega_n^2}$ 인 제어계의 단위 임펄스응답은? (단, $\\zeta=1, \\omega_n=1$ 조건이다.)",
    options: [
      "$e^{-t}$",
      "$1-e^{-t}$",
      "$te^{-t}$",
      "$\\frac{1}{2}t^2$"
    ],
    answer: 3,
    explanation: "",
    image: null
  },
  {
    id: 77,
    question: "(a)와 (b)의 블록선도가 서로 등가일 때, 블록 A의 전달함수는?",
    options: [
      "$\\frac{1}{s+1}$",
      "$\\frac{-1}{s+1}$",
      "$\\frac{s-2}{s+1}$",
      "$\\frac{2-s}{s+1}$"
    ],
    answer: 4,
    explanation: "",
    image: null
  },
  {
    id: 78,
    question: "다음 시퀀스 회로는 어떤 회로의 동작을 하는가?",
    options: [
      "자기유지회로",
      "인터록회로",
      "순차제어회로",
      "단안정회로"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 79,
    question: "다음 이산치 제어계의 블록선도의 전달함수는?",
    options: [
      "$G(z)$",
      "$\\frac{G(z)}{1+G(z)}$",
      "$G(z)+1$",
      "$\\frac{G(z)}{1-G(z)}$"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 80,
    question: "자동제어계가 미분동작을 하는 경우 보상회로는 어떤 보상회로에 속하는가?",
    options: [
      "진·지상보상",
      "진상보상",
      "지상보상",
      "동상보상"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 81,
    question: "수소냉각식의 발전기, 조상기는 발전기 안 또는 조상기 안의 수소의 순도가 몇 [%] 이하로 저하한 경우에 이를 경보하는 장치를 시설하여야 하는가?",
    options: [
      "70",
      "75",
      "80",
      "85"
    ],
    answer: 4,
    explanation: "",
    image: null
  },
  {
    id: 82,
    question: "지중전선로를 직접매설식에 의하여 시설할 때, 차량 기타 중량물의 압력을 받을 우려가 있는 장소인 경우 매설 깊이는 몇 [m] 이상으로 시설하여야 하는가?",
    options: [
      "0.6",
      "1.0",
      "1.2",
      "1.5"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 83,
    question: "고압 가공전선이 안테나와 접근상태로 시설되는 경우에 가공전선과 안테나 사이의 수평 이격거리는 최소 몇 [cm] 이상이어야 하는가? (단, 가공전선으로는 케이블을 사용하지 않는다고 한다.)",
    options: [
      "60",
      "80",
      "100",
      "120"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 84,
    question: "백열전등 또는 방전등 및 이에 부속하는 전선은 사람이 접촉할 우려가 없는 경우 대지 전압은 최대 몇 [V] 인가?",
    options: [
      "100[V]",
      "150[V]",
      "300[V]",
      "400[V]"
    ],
    answer: 3,
    explanation: "",
    image: null
  },
  {
    id: 85,
    question: "다음 중 옥내에 시설하는 저압전선으로 나전선을 사용할 수 있는 배선공사는?",
    options: [
      "합성수지관 공사",
      "금속관 공사",
      "버스덕트 공사",
      "케이블 공사"
    ],
    answer: 3,
    explanation: "",
    image: null
  },
  {
    id: 86,
    question: "345[kV]의 전압을 변압하는 변전소가 있다. 이 변전소에 울타리를 시설하고자 하는 경우, 울타리의 높이와 울타리로부터 충전부분까지의 거리의 합계는 몇 [m] 이상으로 하여야 하는가?",
    options: [
      "7.42[m]",
      "8.28[m]",
      "10.15[m]",
      "12.31[m]"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 87,
    question: "지중 또는 수중에 시설되는 금속체의 부식방지를 위한 전기부식방지 회로의 사용전압은 직류 몇 [V] 이하로 하여야 하는가?",
    options: [
      "24[V]",
      "48[V]",
      "60[V]",
      "100[V]"
    ],
    answer: 3,
    explanation: "",
    image: null
  },
  {
    id: 88,
    question: "태양전지 발전소에 시설하는 태양전지 모듈, 전선 및 개폐기의 시설에 대한 설명으로 잘못된 것은?",
    options: [
      "태양전지 모듈에 접속하는 부하측 전로에는 개폐기를 시설할 것",
      "옥측에 시설하는 경우 금속관공사, 합성수지관공사, 애자공사로 배선할 것",
      "태양전지 모듈을 병렬로 접속하는 전로에 과전류차단기를 시설할 것",
      "전선은 공칭단면적 2.5[mm²] 이상의 연동선을 사용할 것"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 89,
    question: "고압 가공전선을 교통이 번잡한 도로를 횡단하여 시설하는 경우 지표상 높이를 몇 [m] 이상으로 하여야 하는가?",
    options: [
      "5.0",
      "5.5",
      "6.0",
      "6.5"
    ],
    answer: 3,
    explanation: "",
    image: null
  },
  {
    id: 90,
    question: "사용전압이 170[kV]을 초과하는 특고압 가공전선로를 시가지에 시설하는 경우 전선의 단면적은 몇 [mm²] 이상의 강심알루미늄 또는 이와 동등 이상의 인장강도 및 내 아크 성능을 가지는 연선을 사용하여야 하는가?",
    options: [
      "22",
      "55",
      "150",
      "240"
    ],
    answer: 4,
    explanation: "",
    image: null
  },
  {
    id: 91,
    question: "사용전압이 400[V] 이하인 경우의 저압보안공사에 전선으로 경동선을 사용할 경우 지름은 몇 [mm] 이상인가?",
    options: [
      "2.6",
      "3.5",
      "4.0",
      "5.0"
    ],
    answer: 3,
    explanation: "",
    image: null
  },
  {
    id: 92,
    question: "과전류에 대한 보호장치 중 단락 보호장치는 분기점에 설치하여야 한다. 다만, 분기점과 분기회로의 단락 보호장치의 설치점 사이에 다른 분기회로 또는 콘센트의 접속이 없고 단락, 화재 및 인체에 대한 위험성이 최소화 될 경우, 분기회로의 단락 보호장치는 분기회로의 분기점으로부터 몇 [m]까지 이동하여 설치할 수 있는가?",
    options: [
      "3[m]",
      "5[m]",
      "8[m]",
      "10[m]"
    ],
    answer: 1,
    explanation: "",
    image: null
  },
  {
    id: 93,
    question: "옥내에 시설하는 사용전압이 400[V] 초과 1,000[V] 이하인 전개된 장소로서 건조한 장소가 아닌 기타 장소의 관등회로 배선공사로서 적합한 것은?",
    options: [
      "애자공사",
      "금속몰드공사",
      "금속덕트공사",
      "합성수지몰드공사"
    ],
    answer: 1,
    explanation: "",
    image: null
  },
  {
    id: 94,
    question: "주택의 전기저장장치의 축전지에 접속하는 부하 측 옥내배선을 사람이 접촉할 우려가 없도록 케이블 배선에 의하여 시설하고 전선에 적당한 방호장치를 시설한 경우 주택의 옥내전로의 대지전압은 직류 몇 [V]까지 적용할 수 있는가? (단, 전로에 지락이 생겼을 때 자동적으로 전로를 차단하는 장치를 시설한 경우이다.)",
    options: [
      "150",
      "300",
      "400",
      "600"
    ],
    answer: 4,
    explanation: "",
    image: null
  },
  {
    id: 95,
    question: "특고압 전로의 다중접지 지중 배전계통에 사용하는 동심중성선 전력케이블에 대한 설명 중 틀린 것은?",
    options: [
      "도체는 연동선 또는 알루미늄선을 소선으로 구성한 원형 압출연선으로 할 것",
      "절연체는 동심원상으로 동시압출(3중 동시압출)한 내부 반도전층, 절연층 및 외부 반도전층으로 구성하여야 하며, 습식 방식으로 가교할 것",
      "중성선은 반도전성 부풀음 테이프 위에 형성하여야 하며, 꼬임방향은 Z 또는 S-Z꼬임으로 할 것",
      "최대사용전압은 25.8[kV] 이하일 것"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 96,
    question: "두 개 이상의 전선을 병렬로 사용하는 각 전선의 굵기는 동선일 때 몇 [mm²] 이상으로 하고, 전선은 같은 도체, 같은 재료, 같은 길이 및 같은 굵기의 것을 이용하여야 하는가?",
    options: [
      "35",
      "50",
      "70",
      "100"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 97,
    question: "단상 교류 25000[V]인 전기철도의 전차선로에서 건조물과 전차선, 급전선 및 집진장치의 충전부 비절연 부분간의 공기 절연 이격거리는 비오염 지역의 정적일 때 몇 [mm] 이상을 확보하여야 하는가?",
    options: [
      "270",
      "220",
      "320",
      "170"
    ],
    answer: 1,
    explanation: "",
    image: null
  },
  {
    id: 98,
    question: "저압 절연전선으로 전기용품 및 생활용품 안전관리법의 적용을 받는 것 이외에 KS에 적합한 것으로서 사용할 수 없는 것은?",
    options: [
      "450/750[V] 비닐절연전선",
      "450/750[V] 폴리 캡타이어 절연전선",
      "450/750[V] 저독성 난연 폴리올레핀절연전선",
      "450/750[V] 고무절연전선"
    ],
    answer: 2,
    explanation: "",
    image: null
  },
  {
    id: 99,
    question: "저압전로에 사용하는 주택용 배선용차단기의 경우 63[A]를 초과할 때 120분 내에 동작되는 전류의 배수로 알맞은 것은?",
    options: [
      "1.05",
      "1.3",
      "1.13",
      "1.45"
    ],
    answer: 4,
    explanation: "",
    image: null
  },
  {
    id: 100,
    question: "발열선을 도로, 주차장 또는 조영물의 조영재에 고정시켜 시설하는 경우 발열선에 전기를 공급하는 전로의 대지전압은 몇 [V] 이하이어야 하는가?",
    options: [
      "100",
      "150",
      "200",
      "300"
    ],
    answer: 4,
    explanation: "",
    image: null
  }
];

export default questions;