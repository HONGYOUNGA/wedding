/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "권준영",
    nameEn: "Groom",
    father: "권용택",
    mother: "장후부",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "홍영아",
    nameEn: "Bride",
    father: "홍병철",
    mother: "배순희",    
    fatherDeceased: false,
    motherDeceased: false

  },

  wedding: {
    date: "2027-01-17",
    time: "13:00",
    venue: "울산 더M컨벤션",
    hall: "펠리시타홀 9층",
    address: "울산광역시 울주군 삼남읍 도호길 31",
    tel: "052-291-5500",
    mapLinks: {
      kakao: "https://place.map.kakao.com/579868035",
      naver: "https://naver.me/FSw7b3j3"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "권준영", bank: "카카오뱅크", number: "3333-11-2575724" },
      { role: "아버지", name: "권용택", bank: "농협은행", number: "717101-52-202211" },
      { role: "어머니", name: "장후부", bank: "농협은행", number: "351-0011-9243-23" }
    ],
    bride: [
      { role: "신부", name: "홍영아", bank: "카카오뱅크", number: "3333-22-9479427" },
      { role: "아버지", name: "홍병철", bank: "국민은행", number: "768701-01-136171" },
      { role: "어머니", name: "배순희", bank: "부산은행", number: "126-12-039837-0" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2027년 1월 17일, 소중한 분들을 초대합니다."
  }
};
