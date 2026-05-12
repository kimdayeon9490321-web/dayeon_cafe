# 카페 랜딩페이지(원페이지) 템플릿

`cafe_landingpage/index.html` 하나로 **헤더 → 히어로 → 대표 메뉴 → 공간/서비스 → About → 위치/운영 → 문의 → 푸터**까지 구성된 카페 랜딩페이지입니다.

## 실행

- `cafe_landingpage/index.html` 파일을 더블클릭해서 브라우저로 열면 됩니다.

## 커스터마이징(가장 빠른 방법)

1) 컨셉 3가지(동네/디저트/작업) 내용 바꾸기  
- `cafe_landingpage/script.js`의 `PRESETS`에서 텍스트/메뉴/강점/CTA 링크를 수정하세요.

2) 로고/이름 바꾸기  
- `script.js`의 각 프리셋 `brandName` 값을 수정하면 페이지 전반에 반영됩니다.

3) 지도/인스타/전화 연결  
- `script.js`에서 `mapCta.href`, `instaHref`, `phone` 값을 실제 값으로 변경하세요.

4) 색감(브랜드 컬러) 바꾸기  
- `cafe_landingpage/styles.css`의 `html[data-preset="..."]` 섹션에서 `--brand`, `--brand-2` 값을 수정하세요.

