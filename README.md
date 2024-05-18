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
  | **Home**   | 명시성 중요<br/>회사가 추구하는 방향성을 돋보이게<br/>스크롤, 복잡한 이벤트 사용 x | <p align="center"><img src="https://github.com/sslee1210/Enoch/assets/142865231/af5f32a1-5b5e-41b6-9e71-6fc27f4e77e6"  width="230" height="auto"/></p> |
  | **Sub Page**    | Box형 틀, 최대한 basic하게 | <p align="center"><img src=""  width="230" height="auto"/></p>|
  | **Product**    | 사용자의 눈높이에 맞게<br/>구매 목적 의식에 맞게 실용성과 편의성 챙기기 <br/>심플하고 깔끔하게 | |
  ---

 
## 2. 팀원 및 역할 담당
### **이성수:** 전체 페이지 디자인, 페이지 구현, CSS 작업
### **정주이:** 페이지 구현, CSS 작업
### **김은영:** CSS 작업, 이미지 포토샵

---
   
## 3. 코딩 및 디자인 가이드 작성 : 개발 및 디자인 표준 설정

### 코딩 가이드

    1. 
    2. 
    3. 
    4. 
    5. 

### 디자인 소개

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


`문제가 난 코드 부분`**

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


**1-1. `해결한 코드`**
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

# 프로젝트 바로가기
## [🔗 이노치코리아 ]
