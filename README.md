# 🤖 이노치코리아 웹 사이트 기획
## 🎯 프로젝트 개요

### (주)이노치코리아 웹 사이트 제작, 쇼핑몰 구축

---

## 🛠 사용 기술 및 도구
#### **TOOL:** `Github` `Google spread sheet` `Figma` `Adobe Illustrator` `Adobe photoShop`
  
#### **WEB FRAMEWORK:** `HTML5` `CSS3` `JavaScript`

#### **LIBRARY:** ``
---

# 🚀 프로젝트 진행
 ## 1. : 디자인 목표

  | 페이지        | 목표                                           | 이미지                                                      |
  |------------------------|--------------------------------------------|---------------------------------------------------------------|
  | **Home**   | 명시성 중요<br/>회사가 추구하는 방향성을 돋보이게<br/>스크롤, 복잡한 이벤트 사용 x | <p align="center"><img src="https://github.com/sslee1210/Enoch/assets/142865231/af5f32a1-5b5e-41b6-9e71-6fc27f4e77e6"  width="300" height="auto"/></p> |
  | **Sub Page**    | Box형 틀, 최대한 basic하게 | <p align="center"><img src="https://github.com/sslee1210/Enoch/assets/142865231/a9fcb6ef-8b15-49f2-a3ed-612e8fcae360"  width="300" height="auto"/></p>|
  | **Product**    | 사용자의 눈높이에 맞게<br/>구매 목적 의식에 맞게 실용성과 편의성 챙기기 <br/>심플하고 깔끔하게 | <p align="center"><img src="https://github.com/sslee1210/Enoch/assets/142865231/b1ea9c87-f003-4032-88c9-d59f212fee1c"  width="300" height="auto"/></p> |
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
    
## 7. 페이지 기능 구현: 앱 내 각 페이지의 기능을 구현
### 

---

## 8. UI/UX 디자인: 사용자 인터페이스 및 디자인 적용
    
### 이노치 코리아 메인 페이지
### 이노치 코리아 서브 페이지
### 이노치 코리아 Product
### 이노치 코리아 쇼핑몰
---
    

# 🎈 프로젝트 회고


## 문제 및 해결

### 상황 1
  - #### 문제 발생: swiper 라이브러리를 사용하여 메인 페이지 슬라이드 배너를 만들어야 되는데 export 'Pagination' (imported as 'Pagination') was not found in 'swiper' 라는 오류가 자꾸 뜸
    
  - #### 원인 파악: swiper 버전 문제인듯 싶어서 스택 오버플로우를 찾아보거나 구글링 함
  
  - #### 문제 해결: swiper를 임포트 하는 부분이 살짝 달라졌다는걸 알아챔. swiper/modules로 직접 임포트 야함


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
  - #### 문제 발생:
     ``
      
  - #### 원인 파악:
     ``
      
  - #### 문제 해결:
     ``
    
**2. ``**
```

```

**2-1. ``**
```

```

**2-2. ``**
```

```


### 상황 3
  - #### 문제 발생:
     ``
      
  - #### 원인 파악:
     ``
      
  - #### 문제 해결:
   - ``
   - ``
   - ``


**3. ``**
```
  
```


**3-1. 식료품 수정 모달창**
```

```

# 프로젝트 완료 리뷰
- ### 아쉬웠던 점:
  #### 1. ``
  #### 2. ``
   
    
- ### 잘한 점:
  #### 1. ``
  #### 2. ``
   
    
- ### 배운 점:
  #### 1. ``
  #### 2. ``
# 작업일지 바로가기
### [**🔗 작업일지**](https://neighborly-goal-bcc.notion.site/c66bbd1cac0c49a9bc6394b6aca945a7?v=400add0062334f1099509a05901452af&pvs=4)

# 프로젝트 바로가기
## [🔗 이노치코리아 ]
