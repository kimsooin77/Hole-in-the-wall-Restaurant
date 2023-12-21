<img src="https://github.com/kimsooin77/Hole-in-the-wall/assets/82991292/df0cd28e-5f0e-4e65-ae63-c12447d581fd" width="700" height="150"/>

<br />
<br />
<br />

## 사이트 링크
https://hole-in-the-wall.vercel.app/

<br />

## 🧏🏻‍♀️ 프로젝트 설명
- Next.js에서 제공하는 `API Routes`(NextApiRequest, NextApiResponse) 사용해 서버리스 API를 설계하였습니다.
- `Prisma, Supabase`를 연결해 데이터베이스 스키마를 관리할 수 있도록 적용하였습니다.
- `React Quer`y를 통해 데이터를 fetching하고 fetching을 완료한 뒤 성공/실패 여부에 따른 로직을 처리하였습니다.
- Prisma Adapter를 사용해 Next-auth로 회원가입을 하면 유저 정보가 prisma로 저장되도록 하였습니다.
- `Recoil을 적용`해 Map, Marker, 검색필터의 상태 및 상태 관리 함수를 `전역으로 관리`할 수 있도록 하였습니다.
- CSS 프레임워크인 `TailwindCSS`를 사용해 스타일을 적용하였습니다.
- Github을 연동하여 `Vercel에 자동으로 배포`하도록 하였습니다.


<br />

## 📆 진행 기간
2023.11.03 - 2023.12.13

<br />

## 🛠️ 사용한 기술 스택
<img src="https://img.shields.io/badge/Next-000000?style=for-the-badge&logo=Next&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"> <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=Prisma&logoColor=white"> <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=Supabase&logoColor=white"> <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=for-the-badge&logo=ReactHookForm&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=Recoil&logoColor=white"> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white">

<br />

## 💥 발생했던 이슈
- [로그인 에러](https://velog.io/@ssooo_kk_77/prisma-next-auth-login-error)
- [배포 에러](https://velog.io/@ssooo_kk_77/deploy-error)
<br />

## 🔎 기능 설명
### ✔ 메인 페이지

<img src="https://github.com/kimsooin77/Hole-in-the-wall/assets/82991292/acb2ad90-bbc9-4a69-b016-71d90ddf6fec" width="700" height="600"/>

<br />
<br />

- 공공 데이터 OpenAP(https://data.seoul.go.kr/dataList/OA-2741/S/1/datasetView.do)를 이용하여 맛집 데이터를 가져와 사용하였습니다.
- `Kakao Map API`로 지도 위에 맛집별 카테고리에 따른 마커를 표시하였습니다.
- 맛집을 클릭하면 해당 가게의 상세 정보를 확인할 수 있는 모달을 추가하였습니다.
- 상세 정보 모달은 가게 이름 / 주소 / 전화번호 / 업종명 / 카테고리와 찜 기능이 포함되어 있습니다.
- 오른쪽 하단의 location 아이콘을 클릭하면 현재 사용자의 위치로 지도가 이동됩니다.
  - `geolocation API`를 이용

<br />
<br />

### ✔ 상세 페이지(/stores/1)

<img src="https://github.com/kimsooin77/Hole-in-the-wall/assets/82991292/65aafce6-b494-4cac-a16e-9e71faf7f2d1" width="500" height="500"/>
<img src="https://github.com/kimsooin77/Hole-in-the-wall/assets/82991292/a54ab69d-242b-4db3-a6c9-861b75cba837" width="500" height="500"/>   

<br />
<br />

- 상세보기를 클릭하면 위도와 경도, 식품 인증구분이 포함된 좀 더 자세한 정보를 확인하실 수 있습니다.
- 상세보기 페이지 내에서도 찜하기를 할 수 있습니다.
- 맛집 정보를 수정하거나 맛집을 삭제할 수 있도록 구현하였습니다.
- 지도 하단에는 댓글을 작성할 수 있는 폼이 있고 사용자가 작성한 댓글은 삭제가 가능합니다.

<br />

### ✔ 맛집 목록 페이지(/stores)
<img src="https://github.com/kimsooin77/Hole-in-the-wall/assets/82991292/d9b76097-2b0d-44df-8c6c-dcc73e8df288" width="700" height="600"/>

<br />
<br />

- `useIntersectionObserver`훅을 사용해 페이지 하단 ref에 도달했을 때 0.5초 뒤에 다음 데이터를 10개씩 가져올 수 있도록 구현하였습니다.
- react-query의`useInfiniteQuery`을 사용해 무한 스크롤을 구현하였습니다.
- 맛집의 id를 기준으로 오름차순으로 정렬하였습니다.
- `react-query`를 사용하여 검색과 25개 구(강남구,강서구 등)에 따른 필터링 기능을 구현하였습니다.

<br />

### ✔ 로그인 페이지(/users/login)
<img src="https://github.com/kimsooin77/Hole-in-the-wall/assets/82991292/07dc7029-3dd5-4ee0-81e1-1c1af2567745" width="600" height="400"/>

<br />
<br />

- `Next-auth`, `Prisma`를 연동하여 구글, 네이버, 카카오 소셜 로그인을 구현하였습니다.
- 마이 페이지와 찜한 가게 페이지, 맛집 등록/수정 페이지는 로그인을 한 이후에 접근이 가능하도록 분기 처리되어 있습니다.

<br />

### ✔ 마이 페이지(/users/mypage)
<img src="https://github.com/kimsooin77/Hole-in-the-wall/assets/82991292/321ccd08-6695-4bbb-b15b-9bf1b0156ed6" width="600" height="500"/>

- 로그인한 유저의 프로필 이미지와 이메일이 포함된 정보를 보여주는 페이지입니다.
- 하단에는 유저가 작성 리뷰를 모아서 확인할 수 있도록 구현하였습니다.

<br />

### ✔ 찜한 가게 페이지(/users/likes)

<img src="https://github.com/kimsooin77/Hole-in-the-wall/assets/82991292/c523b9de-5f92-43a3-9a90-65d0061a9591" width="600" height="500"/>

<br />
<br />

- 찜한 가게만 모아진 리스트를 확인할 수 있으며 페이지별로 10개의 데이터만 불러올 수 있도록 처리하였습니다.

<br />

### ✔ 맛집 등록 페이지(/stores/new)

<img src="https://github.com/kimsooin77/Hole-in-the-wall/assets/82991292/b350e7ef-a58c-475a-8a07-bc641c1a5a30" width="600" height="500"/>

-  `React-hook-form`을 이용하여 유저가 직접 맛집을 등록하고 싶은 경우에 폼을 작성하면 새로운 맛집으로 등록이 됩니다.
- `react-daum-postcode` 라이브러리를 활용하여 Daum 우편번호 서비스를 이용할 수 있게 연동하였습니다.

<br />

### ✔ 맛집 수정 페이지(/stores/1/edit)

<img src="https://github.com/kimsooin77/Hole-in-the-wall/assets/82991292/4856a85e-dc6c-4ae9-aa13-29d7b80294d3" width="600" height="500"/>

- 해당 맛집의 id를 추출하여 맛집 관련 정보를 유연하게 수정할 수 있도록 구현하였습니다.
