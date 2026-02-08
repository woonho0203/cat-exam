// data/index.ts
import fire from "./fire";
import industrial from "./industrial";

// ✅ 수정: 각각의 데이터를 '...'을 사용해 펼쳐서 합쳐야 합니다.
const allData: any = {
  ...fire,       // 소방 데이터들의 껍질을 벗겨서 최상위에 배치
  ...industrial  // 산업안전 데이터들의 껍질을 벗겨서 최상위에 배치
};

export default allData;