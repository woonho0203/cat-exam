// 서비스 워커 설치
self.addEventListener('install', (e) => {
  console.log('CBT 서비스 워커 설치됨!');
});

// 네트워크 요청 가로채기 (나중에 오프라인 모드 구현 시 사용)
self.addEventListener('fetch', (e) => {
  // 기본적으로는 네트워크에서 직접 가져옴
});