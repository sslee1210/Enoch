# 🤖 이노치코리아 웹 사이트 기획

## 🎯 프로젝트 개요

### (주)이노치코리아 웹 사이트 제작, 쇼핑몰 구축, 도메인 구입 후 netlify로 배포

---

## 🛠 사용 기술 및 도구

#### **TOOL:** `Github` `Notion` `Google spread sheet` `Figma` `Adobe Illustrator` `Adobe photoShop` `Netlify`

#### **WEB FRAMEWORK:** `React` `HTML5` `CSS3` `JavaScript`

#### **LIBRARY:** `React` `React DOM` `React Router DOM` `Axios` `i18next` `react-i18next` `Styled Components` `Swiper` `React Scroll` `gh-pages` `web-vitals` 

---

# 🚀 프로젝트 진행

## 1. : 디자인 목표

| 페이지       | 목표                                                                                           | 이미지                                                                                                                                                 |
| ------------ | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Home**     | 명시성 중요<br/>회사가 추구하는 방향성을 돋보이게<br/>스크롤, 복잡한 이벤트 사용 x             | <p align="center"><img src="https://github.com/user-attachments/assets/3b96e51b-8b85-4701-bc47-0d6966f35d80"  width="300" height="auto"/></p> |
| **Sub Page** | Box형 틀, 최대한 basic하게                                                                     | <p align="center"><img src="https://github.com/user-attachments/assets/0cfe20a7-a6ec-4ecd-b825-5d058114da11"  width="300" height="auto"/></p> |
| **Product**  | 사용자의 눈높이에 맞게<br/>목적 의식에 맞게 실용성과 편의성 챙기기 <br/>심플하고 깔끔하게 | <p align="center"><img src="https://github.com/user-attachments/assets/60ef5375-b755-4bf1-ba68-c086b4bb61ad"  width="300" height="auto"/></p> |

---

## 2. 팀원 및 역할 담당

### **이성수:** 전체 페이지 디자인, 페이지 구현, CSS 작업

### **정주이:** 페이지 구현, CSS 작업

### **김은영:** CSS 작업, 이미지 포토샵

---

## 3. 코딩 및 디자인 가이드 작성 : 개발 및 디자인 표준 설정

### 코딩 가이드

    1. 클래스 네임은 카멜 표기법으로 쉽게 알아볼 수 있는 이름으로 작성하고 네 단어 이상의 사용을 지양한다.
    2. const 선언방식을 사용한다.
    3. 이벤트 핸들러 함수를 사용한다.
    4. 설명이 필요한 부분은 주석을 통해 작성한다.
    5. 특별한 기능이 없는 곳에 사용하는 태그는 `<div>`로 통일한다.
    6. 로고 작업 시 , 기본적으로 img 태그를 사용하나, 필요에 따라 background image로 처리한다.
    7. 선언 시 이름은 html에서 사용한 선택자 명을 바탕으로 카멜 표기법으로 작성한다.
    8. 필요한 경우 코드 옆에 주석을 달아 현재 코드가 어떤 기능을 하고 있는지 설명한다.

### 디자인 소개

    1. 기본 배경색: #FBFBFF 텍스트 색상: 263238
    2. 컬러는 #컬러코드와 소문자를 이용하여 작성
    3.사이즈 값은 상황에 따라 rem, vw를 혼용하여 사용한다
    4. 선택자 작성 시 하위 선택자 작성 방식을 사용한다
    5. css 임포트는 파일 이름+styles로 지정한다
    6. 선택자 명은 페이지 내용을 바탕으로 의미 있고 알아보기 쉬운 이름을 사용한다.

---

## 5. 디렉토리 구조 분석 : 프로젝트 구조

   <p align="center"><img src="https://github.com/sslee1210/Enoch/assets/142865231/50a283d7-808a-47cd-80c4-959a96bec239"  width="200" height="auto"/></p> 
   
---

## 8. UI/UX 디자인: 사용자 인터페이스 및 디자인 적용

### - 이노치 코리아 메인 페이지

<img src="https://github.com/user-attachments/assets/3b96e51b-8b85-4701-bc47-0d6966f35d80"  width="350" height="auto"/></p>

### - 이노치 코리아 서브 페이지

<img src="https://github.com/user-attachments/assets/0cfe20a7-a6ec-4ecd-b825-5d058114da11"  width="350" height="auto"/></p>

### - 이노치 코리아 Product

<img src="https://github.com/user-attachments/assets/60ef5375-b755-4bf1-ba68-c086b4bb61ad"  width="350" height="auto"/></p>

---

# 🎈 프로젝트 회고

## 문제 및 해결

### 상황 1

-   #### 문제 발생: swiper 라이브러리를 사용하여 메인 페이지 슬라이드 배너를 만들어야 되는데 export 'Pagination' (imported as 'Pagination') was not found in 'swiper' 라는 오류가 자꾸 뜸
-   #### 원인 파악: swiper 버전 문제인듯 싶어서 스택 오버플로우를 찾아보거나 구글링 함

-   #### 문제 해결: swiper를 임포트 하는 부분이 살짝 달라졌다는걸 알아챔. swiper/modules로 직접 임포트 해야함

`문제가 난 코드 부분`

```
// Swiper의 React 버전과 필요한 CSS를 임포트합니다.
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // autoplay를 위한 CSS 임포트

import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

// Swiper 모듈에 Autoplay를 사용하도록 설정합니다.
SwiperCore.use([Autoplay, Navigation, Pagination]);
```

`해결한 코드`

```
// Swiper의 React 버전과 필요한 CSS를 임포트합니다.
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
```

### 상황 2

-   #### 문제 발생: 사이드 메뉴바를 클릭하거나 해당 페이지가 활성화 되어 있을 시 글자 색상과 굵기가 변경되게 구현하려 NavLink를 사용하던 중 오류가 남
-   #### 원인 파악: 수많은 구글링과 NavLink 공식 문서를 확인해 봄
-   #### 문제 해결: activeStyle 타입 오류인줄 알았지만 activeStyle이 없어져서 activeStyle -> isActive로 수정하면 해결됨

`문제가 난 코드 부분`

```
import React from 'react';
import { NavLink } from 'react-router-dom'; // Link 대신 NavLink를 import
import NavBarStyles from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={NavBarStyles.subnav}>
            <nav>
                <h1 className={NavBarStyles.logo}>
                    <NavLink to="/Enoch" activeClassName={NavBarStyles.active}>로고</NavLink>
                </h1>
                <ul className={NavBarStyles.menu}>
                    <li>
                        <NavLink to="/about" className={NavBarStyles.bigmenu} activeClassName={NavBarStyles.active}>
                            About
                        </NavLink>
                        <ol>
                            {/* 하위 메뉴에도 동일하게 적용 */}
                            <li>
                                <NavLink to="/about" activeClassName={NavBarStyles.active}>회사소개</NavLink>
                            </li>
                            <li>
                                <NavLink to="/history" activeClassName={NavBarStyles.active}>HISTORY</NavLink>
                            </li>
                            <li>
                                <NavLink to="/global" activeClassName={NavBarStyles.active}>해외법인</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" activeClassName={NavBarStyles.active}>CONTACT US</NavLink>
                            </li>
                        </ol>
                    </li>
                    {/* 다른 메뉴 항목에도 동일하게 적용 */}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
```

`해결한 코드`

```
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NavBarStyles from './NavBar.module.css';

const NavBar = () => {
    const activeStyle = {
        color: 'rgb(8, 71, 8)',
        fontWeight: 'bold',
    };

    const location = useLocation();

    // 상위 메뉴 항목이 활성화되어야 하는지 확인
    const isActiveAbout = ['/about', '/history', '/global', '/contact'].includes(location.pathname);
    const isActiveAs = ['/as', '/qna'].includes(location.pathname);
    const isActiveSupport = ['/support', '/guide'].includes(location.pathname);

    return (
        <div className={NavBarStyles.subnav}>
            <nav>
                <h1 className={NavBarStyles.logo}>
                    <NavLink to="/Enoch" style={({ isActive }) => (isActive ? activeStyle : {})}>
                        로고
                    </NavLink>
                </h1>
                <ul className={NavBarStyles.menu}>
                    <li className={NavBarStyles.mainMenuItem}>
                        <NavLink to="/about" style={isActiveAbout ? activeStyle : {}}>
                            About
                        </NavLink>
                        <ol>
                            {/* 하위 메뉴에도 동일하게 적용 */}
```

### 상황 3

-   #### 문제 발생: 스크롤이 생기지 않게 웹 페이지를 만들어야 되지만 반응형 웹을 스크롤이 없이 만들기가 쉽지 않고 브라우저 창을 키우거나 줄이면 요소가 넘쳐 스크롤이 생김
-   #### 원인 파악: 구글링을 통해 테스트 파일을 만들어 적용시켜보고 문제 없다는걸 보고 그대로 적용 시킴
-   #### 문제 해결: 모든 컴포넌트를 감싸는 전체 div에 height: 100%를 주고 바로 밑엔 height: 100vh를 줌. 그리고 그 밑 요소엔 width: 100%와 height: calc(100vh - 200px); 그리고 margin-bottom: 100px;을 주면 해결. (200px은 TopNav와 Footer의 높이를 합친것이고  margin-bottom: 100px;은 Footer 높이이다. 마진을 줘야 내용이 Footer와 겹치지 않는다.)
-   #### 문제 해결2: 대표님이 스크롤이 있어도 상관없다고 하심

`index.css`

```
body {
    height: 100%;
}
```

`App.js`

```
const TopNavLayout = ({ children }) => (
    <div style={{ height: '100vh' }}>
        <TopNav />
        {children}
        <Footer />
    </div>
);
```

` {children}에 적용되는 스타일`

```
div {
    width: 100%;
    height: calc(100vh - 200px);
    margin-bottom: 100px;
}
```

# 프로젝트 완료 리뷰

-   ### 아쉬웠던 점:
  -   첫 회사 생활을 사수가 없이 하느라 조금 힘겨웠고 내 밑으로 들어오는 사람들을 대하기도 미숙했다.(나보다 나이가 많거나..등등)
  - css 스타일링을 최신 트렌드에 맞게 디자인과 다양한 이벤트 효과를 넣고 싶었지만 대표님의 지시사항은 그러지 않아서 한편으로 아쉬웠다.

-   ### 잘한 점:
  -   팀원들에게 미숙하게 대했지만 잘 따라와주었고 모르는 문제나 어려운 일이 생겼을 때 질문을 받아줄 사수가 없었지만 어떻게든 인터넷에 검색을 하며 해결할 수 있었다. 끝까지 하면 못할 일은 없다는걸 깨달았다.
  -    기능적으론 해외에 출장도 많이 나가고 해외 업체와 미팅을 하는 경우도 많아 영문 지원 기능도 추가하였다(나름 센스 있었다고 생각한다 ^^..)


# 작업일지 바로가기

## [**🔗 작업일지**](https://neighborly-goal-bcc.notion.site/c66bbd1cac0c49a9bc6394b6aca945a7?v=400add0062334f1099509a05901452af&pvs=4)

# 프로젝트 바로가기

## [**🔗 이노치코리아 홈페이지**](https://www.enochkorea.com/) (도메인 연결 후 Netlify 배포 중)
