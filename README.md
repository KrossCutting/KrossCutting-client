# KrossCutting

<p align="center">
<img width="500" alt="play game" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/e5d7bd39-2e1b-44b7-8767-4f03b4541a95"/>
</p>

KrossCutting은 누구나 쉽게 KPOP 아이돌 교차편집 영상을 만들 수 있는 웹/앱 서비스 입니다. 무대영상과 직캠영상을 모두 지원하며, 영상만 넣으면 자동으로 교차 편집된 영상을 다운로드 받을 수 있습니다.

<p align="center">
  <a href="https://web.krosscutting.com">Deployed website</a>
  <span> | </span>
  <a href="https://github.com/KrossCutting/KrossCutting-client">Web Repository</a>
  <span> | </span>
  <a href="https://github.com/KrossCutting/KrossCutting-app">App Repository</a>
  <span> | </span>
  <a href="https://github.com/KrossCutting/KrossCutting-server">Server Repository</a>
</p>

</br>

# 🔍 Preview

### 가로 영상

<details>
<summary>가로 영상 보기</summary>
<div markdown="1">

[가로 영상](https://github.com/KrossCutting/KrossCutting-client/assets/131152690/6b727197-6c7b-4652-b904-3fcc68183817)

</div>
</details>

### 세로 영상

<details>
<summary>세로 영상 보기</summary>
<div markdown="1">

[세로 영상](https://github.com/KrossCutting/KrossCutting-client/assets/131152690/f1a9242a-c524-4442-8fb7-4a350610981c)

</div>
</details>

</br>
</br>

# 🛠️ Tech Stack

### Client (web)

<p>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/tailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
  <img src="https://img.shields.io/badge/zustand-8A385D?style=for-the-badge">
  <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
</p>

</br>

### Client (app)

<p>
  <img src="https://img.shields.io/badge/dart-0175C2?style=for-the-badge&logo=dart&logoColor=white">
  <img src="https://img.shields.io/badge/flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white">
</p>

</br>

### Server

<p>
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
  <img src="https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/sharp-99CC00?style=for-the-badge&logo=sharp&logoColor=white">
  <img src="https://img.shields.io/badge/multer-000000?style=for-the-badge">
  <img src="https://img.shields.io/badge/ffmpeg-007808?style=for-the-badge&logo=ffmpeg&logoColor=white">
  <img src="https://img.shields.io/badge/tensorflow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white">
</p>

</br>

# Contents

- [🔥 Motivation](#-motivation)
- [🕹️ Features](#%EF%B8%8F-features)
  - [영상 업로드](#영상-업로드-web--app)
  - [시작점 및 편집점 선택](#시작점-및-편집점-선택)
  - [교차편집 영상 다운로드](#교차편집-영상-다운로드)
- [🤔 Challenges](#-challenges)
  - [1. 영상의 시작점을 ms 단위까지 맞출 수 있을까?](#1-영상의-시작점을-ms-단위까지-맞출-수-있을까)
    - [1-1. 프레임의 이해: 영상의 시작점을 왜 ms 단위까지 맞춰줘야할까?](#1-1-프레임의-이해-영상의-시작점을-왜-ms-단위까지-맞춰줘야할까)
    - [1-2. 오디오 정밀분석: 어떻게 ms 단위의 차이를 조정할 수 있을까?](#1-2-오디오-정밀분석-어떻게-ms-단위의-차이를-조정할-수-있을까)
  - [2. 영상의 교차편집은 언제 어떻게 일어날까?](#2-영상의-교차편집은-언제-어떻게-일어날까)
    - [2-1. 편집 지점의 기준 선정](#2-1-편집-지점의-기준-선정)
    - [2-2. 편집 지점의 추출 - 색상의 이해](#2-2-편집-지점의-추출---색상의-이해)
    - [2-3. 편집 지점의 추출 - 얼굴 분석과 임계점 설정](#2-3-편집-지점의-추출---얼굴-분석과-임계점-설정)
    - [2-4. 편집의 지속시간 계산](#2-4-편집의-지속시간-계산)
  - [3. 보다 자연스러운 편집을 위한 리사이징은 어떻게 진행해야할까?](#3-보다-자연스러운-편집을-위한-리사이징은-어떻게-진행해야할까)
    - [3-1. 얼굴 좌표 받아오기](#3-1-얼굴-좌표-받아오기)
    - [3-2. 리사이징 효과](#3-2-리사이징-효과)
    - [3-3. 프레임 간 디졸브 효과](#3-3-프레임-간-디졸브-효과)
  - [4. App은 Web과 뭐가 다를까?](#4-app은-web과-뭐가-다를까)
    - [4-1. Flutter vs ReactNative](#4-1-flutter-vs-reactnative)
    - [4-2. App 환경과 Web 환경의 차이 1 - 사용자 보호방식](#4-2-app-환경과-web-환경의-차이-1---사용자-보호방식)
    - [4-3. App 환경과 Web 환경의 차이 2 - UI 조작 방식](#4-3-app-환경과-web-환경의-차이-2---ui-조작-방식)
- [📆 Schedule](#-schedule)
- [🤼‍♂️ Memoir](#%EF%B8%8F-memoir)
  - [**한민지**](#한민지)
  - [**채민석**](#채민석)
  - [**이수진**](#이수진)

</br>

# 🔥 Motivation

한국 아이돌이 국내뿐만 아니라 글로벌적인 위상이 높아짐에 따라 그들을 대상으로 하는 다양한 2차 창작물이 생산되기 시작했습니다. 그 중에서도 특히 여러 무대를 하나의 영상으로 합치는 교차편집(Stage Mix)은 팬들 사이에서 많은 인기를 끌고 있습니다. 하지만 교차편집 영상을 만드는 데에는 전문 영상 편집 프로그램 사용이 필요할 뿐만 아니라, 모든 영상별로 편집점을 찾고 컷마다 각종 편집이 필요하기 때문에, 일반적으로 모든 팬들이 쉽게 시도할 수 없는 경우가 많습니다.

그래서 저희는, **누구나 쉽고 간편하게 본인이 좋아하는 아이돌의 교차편집 영상을 만들수 있게 하고자** 이 프로젝트를 시작하게 됐습니다. 꼭 무대영상이 아니더라도, 본인이 좋아하는 아이돌의 직캠영상 혹은 숏폼영상을 간편하게 편집해서 소장할 수 있습니다.

</br>

# 🕹️ Features

## 영상 업로드 (web & app)

- 웹의 경우 Upload Video 버튼을 눌러 가로영상을 업로드 할 수 있습니다.
- 모바일의 경우 원하는 비율의 영상을 버튼을 클릭하면 사용자의 갤러리로 이동합니다.

  - 모바일 시연은 [🔗링크를 클릭](https://youtube.com/shorts/FR3CgS0Oe8U?si=Lkuq29IBC3MAC_NM)하여 확인하실 수 있습니다. (클릭시 유튜브 shorts영상으로 이동합니다.)

  <table align=center>
  <tr>
    <td>
  	  <img width="300" alt="explain saturation" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/8b29b188-ed04-461c-b889-2e64739c3cd8">
    </td>
    <td>
  	  <img height="300" alt="explain brightness" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/751d3066-76e6-47dd-8b2c-02e52e4baee3">
    </td>
  </tr>
  <tr>
    <td>
      <p align=center>웹</p>
    </td>
    <td>
      <p align=center>모바일</p>
    </td>
  </tr>
  </table>

## 시작점 및 편집점 선택

- 사용자는 영상의 시작점을 선택하여 “**편집이 시작될 곳**”을 선택합니다.

  - 시작점은 사용자가 편집이 시작되기를 원하는 지점으로, 필수 선택입니다.
  - 시작점은 어느 곳이든 가능하나 **모든 영상의 시작점은 동일해야합니다.**

- 사용자는 원할 경우 편집점을 선택하여 “**결과물에 반드시 포함될 장면**”을 선택할 수 있습니다.
  - 편집점은 사용자가 결과물에 반드시 포함되기를 원하는 장면의 지점으로, 옵션입니다.
  - 편집점을 선택할시에 해당 지점의 장면으로부터 2초의 장면은 반드시 결과물에 포함됩니다.
  - 편집점이 자동선택점과 겹칠시에는 편집점이 우선되며, 다른 자동선택점들과 연결되어 장면의 전환이 빠를 수 있습니다.

## 교차편집 영상 다운로드

- 웹의 경우 편집이 완료되면 화면에 다운로드 버튼이 나타납니다.
  다운로드 버튼 클릭시 영상이 다운로드 됩니다.
- 앱의 경우 편집이 완료되면 홈화면으로 이동하며, 다운로드 버튼이 활성화됩니다. (색상 분홍색 변경)
  해당 버튼 클릭시 갤러리에 자동으로 영상이 저장됩니다.

</br>

# **🤔 Challenges**

## 1. 영상의 시작점을 ms 단위까지 맞출 수 있을까?

무대 영상을 교차 편집하는 데 있어 가장 걱정했던 부분 중 하나는 “영상의 시작점을 어느정도까지 맞출 수 있을까” 였습니다.

왜냐하면 유저가 제공하는 영상들이 모두 같은 시점에 시작한다고 보장할 수 없기 때문이었습니다. **유저가 제공한** A 영상에서는 음악 시작전 1초가 포함되어 있을 수 있고 B 영상에서는 음악이 바로 시작될 수도 있습니다.

**저희 서비스는 영상의 편집을** 프레임 단위로 분석하고, 이 프레임은 시간을 기준(초단위)으로 추출되기 때문에 시작 시간이 일치하지 않는다면 1번 영상에서 A 동작을 하고 있을 때 2번 영상에서 A 동작이 아닌 B 동작을 하고 있을 것입니다.

krosscutting이 제공하는 영상이 자엽스럽게 이어지지 않거나 중복해서 나오는 등 편집이 제대로 이어지지 않는다면 서비스에 대한 실용성이 떨어지기 때문에 영상 시작점을 맞추는 것은 매우 중요했습니다.

</br>

### 1-1. 프레임의 이해: 영상의 시작점을 왜 ms 단위까지 맞춰줘야할까?

오디오 정밀 분석 방법에 앞서 사람이 어떻게 시각적으로 움직임을 인식하는 지 간단히 설명하고 넘어가고자 합니다.
프레임에 대해 이미 아시는 분들은 1-2로 넘어가도 무방합니다.

혹시 영화는 24fps로 촬영된다는 말을 들어보신적이 있으신가요?

> FPS는 frame per second를 의미합니다.

영화는 1초에 24장의 사진을 촬영하고 이를 연속적으로 보여줌으로써 마치 영상 속 인물이 움직이는 것처럼 보이게 합니다. 실제로는 사진에 불과한데 말이죠.

그럼 도대체 어떻게 사진으로 움직임을 보여줄 수 있었던 걸까요?

인간의 뇌는 연속적으로 나열된 같은 물체를 지속적인 움직임으로 해석하는 경향이 있습니다. 그리고 인간의 눈은 물체를 인식한 후에 잠시동안 인식한 물체를 담고 있습니다. 그래서 매우 짧은 시간동안 여러 장의 사진의 정보가 인간의 뇌와 눈에 전달될 때 사진이 아닌 영상으로 인식하게 됩니다.

<p align="center">
<img width="300" alt="explain frame" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/e677cd2f-21ff-4fc8-93c7-8e06636e7f57">
</p>

Krosscutting은 영상을 편집 기준을 **30FPS**로 지정했습니다. 즉, 각 프레임 간의 시간 차가 33.3 milliSecond 라는 것으로 이 시간 차가 크면 클수록 프레임 한 장에 대한 기회비용이 커지게 됩니다.

좀 더 자세히 말하자면 1번 프레임과 2번 프레임의 시간 차가 적을때보다 클 때 대비가 두드러지게 나타난다는 것입니다.

보통 유튜브 영상의 FPS가 60인 것을 감안하면 30FPS는 기회비용이 적지 않은 프레임 속도입니다. 그렇기 때문에 영상 시작점을 정확하게 잡는 것이 중요할 수 밖에 없습니다.

그럼 이제 영상 시작점 어떻게 맞출 수 있었는지 설명드리겠습니다.

</br>

### 1-2. 오디오 정밀분석: 어떻게 ms 단위의 차이를 조정할 수 있을까?

결론부터 말씀드리자면 Krosscutting은 푸리에 변환과 동적 시간 와핑을 통해서 100ms 단위까지 영상 시작 시간을 일치화함으로써 세 개의 영상을 자연스럽게 교차편집할 수 있었습니다. 그렇다면 어떻게 오디오를 분석해서 시작 시간을 맞출 수 있었는지 설명드리겠습니다.

컴퓨터가 숫자를 비교할때 이진 숫자로된 해당 데이터를 비교하는 것처럼 오디오를 비교할때도 소리의 이진 데이터를 비교합니다. 그러나, 숫자가 환경에 따라 바뀌지 않는 절대적이 요소인 것에 비해 오디오는 연주 환경, 녹음 환경, 오디오 포멧 등 데이터에 영향을 주는 변수가 너무 많습니다. 사람은 오디오를 듣고 다른 환경에서 연주된 같은 곡이라고 판단할 수 있을 수 있을지 몰라도, 컴퓨터는 그렇지 않습니다. 이진 데이터가 자체가 변하기 때문입니다.

KrossCutting에서 분석하려고 하는 소리는 환경이 제어된 상태에서 녹음된 것이 아니라, 현장에서 녹음된 소리이기 때문에 많은 노이즈가 섞여있습니다. (ex. 함성소리등) 이를 위해 소리를 분리하는 공식인 푸리에 변환이 필요합니다.

푸리에 변환은 여러가지 실이 얽혀있는 실뭉치를 하나 하나 분리하여 정리하는 것으로 비유할 수 있습니다. 앞서 말씀 드린 것처럼 사람이 듣는 일반적인 소리는 일정한 주파수를 가지고 있지 않고 여러 주파수의 소리가 합쳐져 하나의 복합적인 주파수를 가지고 있습니다. 그림으로 보면 다음과 같습니다.

<p align="center">
<img width="300" alt="frequency" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/a417fc97-d7f7-423f-9ec1-213fcfb08b40">
</p>

그리고 푸리에 변환을 마치면 오디오의 주파수는 다음 그림과 같이 분리될 수 있습니다.

<p align="center">
<img width="300" alt="Fourier transform" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/b5215335-c649-4a13-a755-9bc0fd2f87af">
</p>

이제, 복잡한 주파수 대신에 단일의 깨끗한 주파수를 확보했습니다. 이로 인해 목표는 두 오디오 신호가 동일하게 들리기 위해 필요한 시간 조정의 정도(즉 얼마나 시간이 차이는지)를 파악하는 것으로 단순화되었습니다. 다행히도, 오디오 파장에는 시간이라는 절대적인 기준이 존재합니다. 만약 x축을 시간으로, y축을 주파수로 설정한다면, 같은 시간축(x축) 위에서 발생하는 주파수(y축)의 차이를 계산함으로써 두 신호 간의 시간 차이를 정확히 측정할 수 있습니다.

Krosscutting은 이 부분을 자바스크립트가 아닌 파이썬으로 구현했습니다. **그** 이유는 다음과 같습니다.

동적 시간 와핑(DTW)과 푸리에 변환을 구현하는 과정에서, 파이썬을 선택한 주된 이유는 자바스크립트에서 사용할 수 있는 라이브러리와 관련 정보의 부족 그리고 제한된 시간때문이었습니다.

자바스크립트는 주로 웹 개발에 초점을 맞추고 있으며, 특히 오디오 처리나 고급 수학적 알고리즘을 구현하기 위한 라이브러리나 자료가 파이썬에 비해 상대적으로 제한적입니다. 반면, 파이썬은 과학 계산과 데이터 분석 분야에서 광범위하게 사용되며, 푸리에 변환과 같은 복잡한 수학적 연산을 수행할 수 있는 NumPy와 같은 강력한 라이브러리를 제공합니다. 또한, DTW를 구현할 때 필요한 알고리즘과 관련된 자료와 커뮤니티 지원도 파이썬에서 더욱 풍부하게 찾아볼 수 있습니다.

마지막으로 5주라는 제한된 시간내에 핵심 기능을 모두 구현해야했기에 자바스크립트가 아닌 파이썬으로 구현하는 것을 택했습니다.

</br>

## 2. 영상의 교차편집은 언제 어떻게 일어날까?

오디오 정밀분석 이후 추출된 프레임에 대해서 **편집 구간**을 추출했어야 했습니다.

편집구간은 **편집 지점**과 해당 편집 지점으로부터 편집된 영상의 **지속 시간**의 프로세스를 거쳐서 나온, “**영상의 전환이 일어날 구간**”을 의미합니다.

### 2-1. 편집 지점의 기준 선정

<p align="center">
<img width="600" alt="video conversion" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/0550f448-06ab-4d6a-8998-40611dfde1fe">
</p>

우선 편집지점 부터 차근차근 살펴보겠습니다. 첨부된 gif에서 **영상 전환이 시작되는 시점**이 바로 “**편집 지점**”입니다. 편집구간을 선정하기 위해 첫번째로는 프레임들을 분석하여 편집 시작점. 즉, 영상이 전환될 순간을 추출해야 했습니다.

이러한 영상의 추출은 **휴리스틱 검증**을 기반하여 이루어졌습니다.

> 휴리스틱 검증이란 불충분한 시간이나 정보로 인하여 합리적인 판단을 할 수 없거나,
> 체계적이면서 합리적인 판단이 굳이 필요하지 않은 상황에서 사람들이 빠르게 사용할 수 있게 보다 용이하게 구성된 간편추론 입니다. (출처: [wikipedia](https://ko.wikipedia.org/wiki/%ED%9C%B4%EB%A6%AC%EC%8A%A4%ED%8B%B1_%EC%9D%B4%EB%A1%A0))
>
> 같은 아이돌의 같은 노래에 대한 무대영상의 경우, 동일한 구간은 동일한 멤버가 노래를 부를 것이고 당연히 카메라에 찍히는 사람은 해당 구간의 노래를 부르는 멤버일 것입니다.

따라서 한 아이돌의 동일한 노래에 대한 각각 다른 무대영상들에서 동일한 시점에 한명의 얼굴이 있다면, 그건 같은 사람일 것이라는 추론이었습니다.

이러한 추론을 기반으로 편집 지점을 추출하는 기준은 **화면의 중앙부분에서 한 명의 얼굴이 존재하고, 해당 얼굴이 1초 이상 영상에 지속될 경우, 즉 소위 말하는 원샷 지점**을 기준으로 삼았습니다.

</br>

### 2-2. 편집 지점의 추출 - 색상의 이해

기준을 선정하고 나서 원샷 지점을 판단하기 위해 프레임 분석을 수행했습니다. 이때 Sharp의 Composite 메서드의 difference 모드를 활용하여 움직임을 분석하는 방법으로 로직을 구현했습니다.

Sharp는 Node.js에서 사용 가능한 이미지 프로세싱 라이브러리입니다. Sharp외에도 Jimp, gm등의 라이브러리가 있지만 여러개의 영상에 대해 1fps 단위의 프레임들을 모두 분석해야하기 때문에 (3분영상 3개일 경우 540장), C언어로 만들어져 빠르고 고성능인 Sharp 라이브러리가 제일 적합하다고 판단했습니다.

Composite메서드는 두 이미지의 합성하는 메서드입니다. 이때 blend옵션으로 difference를 주게 될 경우, 두 이미지 사이에서 달라진 부분을 강조하여 하나의 이미지에 반환합니다. 이때 움직임이 많은 부분은 밝은 색으로, 움직임이 없는 즉, 차이가 없는 부분은 검정색으로 표시되어 반환됩니다.

하지만 여기서 문제가 발생했습니다. 앞서 프레임에 대해 설명하며 프레임간의 색상, 밝기에서 큰 차이가 있다면 움직임으로 인식된다고 설명했습니다. 그리고 이를 활용해 두 프레임간의 차이를 하나의 이미지로 추출해 움직임을 판단하고자 Sharp 라이브러리의 Composite 메서드를 사용했습니다.

하지만 문제는, 아이돌 무대는 특성상 화려한 조명, 화려한 의상, 화려한 무대 배경으로 이루어진 경우가 많습니다. difference는 이미지(여기서는 프레임)간의 차이를 픽셀의 색상에 집중하여 비교합니다.

따라서 이미 화려하고 강렬한 색상들이 모여있기 때문에 이미지의 차이를 강조하는 부분에서 제대로된 강조가 적용되지 않았습니다. (조금만 배경이 이동되거나 조명이 생길 경우에도 차이점으로 인식하거나 변화가 있음에도 불구하고 화려한 색상으로 인해 변화로 인식하지 않음)

<p align="center">
<img width="500" alt="audio difference" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/cba92b89-0229-4833-a8e2-8bf986c64dc7">
</p>

무대 세트의 경우 변화가 없음에도 색상이 선명하게 나타나고 있습니다.

이를 위해 색상에 대해 좀 더 찾아보게 되었고, 그 결과 명도와 채도를 활용하여 이미지의 색상을 처리함으로써 정확성을 높일 수 있었습니다. 색의 주요 속성 세가지는 1.색상(Hue), 2.채도(Saturation), 그리고 3.명도(Value 또는 Brightness)입니다. 그 중 이슈해결에 사용한 채도와 명도에 대해 간단하게 설명 드리겠습니다.

**채도 (Saturation)**:

- 채도는 색의 강렬함을 나타냅니다. 채도가 높으면 색이 더 선명하고, 채도가 낮으면 색이 더 탁하게 느껴집니다.
- 낮은 채도의 색은 회색에 가까워지고, 높은 채도의 색은 더 순수하고 강렬한 색을 가집니다.

**명도 (Value/Brightness)**:

- 명도는 색의 밝기를 나타냅니다. 높은 명도는 밝은 색, 낮은 명도는 어두운 색을 의미합니다.
- 명도가 높으면 흰색에 가까워지고, 명도가 낮으면 검은색에 가까워집니다.

<p align="center">
  <img width="506" alt="color" src="https://github.com/KrossCutting/KrossCutting-client/assets/133668286/4ad2e5a4-c5e1-4902-9283-b2757a712efd">
</p>

아이돌 무대영상의 강렬하고 화려한 색상들이 문제였기 때문에, 강렬하고 진한 색상을 최대한 없애기 위해 우선 채도를 최대한 낮췄습니다. 이후 채도가 낮아진 이미지에 명도를 높임으로써 옅어진 색상에 색의 밝기만이 높아져 화려하고 강렬한 색상을 아래와 같이 변경할 수 있었습니다.

<table align=center>
<tr>
  <td>
	  <img width="300" alt="explain saturation" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/de7ca04d-9e29-4199-8a6e-ad749cbae4b2">
  </td>
  <td>
	  <img width="300" alt="explain brightness" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/13182357-65db-480c-b957-7f479a4401b4">
  </td>
</tr>
<tr>
  <td>
    <p align=center>원본 이미지</p>
  </td>
  <td>
    <p align=center>색상처리가 완료된 이미지</p>
  </td>
</tr>
</table>

이미지 색상이 처리된 구간에 대해 다시 중앙을 추출하고, 움직임의 효과적인 분석을 위해 흑백처리한 결과는 아래와 같습니다. 기존에 모든 구간이 검정색 처리되던 것과 달리 얼굴 부분의 움직임이 적은 부분만 검정색으로 변환된 것을 알 수 있습니다.

<p align="center">
  <img width="573" alt="face" src="https://github.com/KrossCutting/KrossCutting-client/assets/133668286/046285e0-a593-4593-9d63-82ca542675bf">
</p>

</br>

### 2-3. 편집 지점의 추출 - 얼굴 분석과 임계점 설정

이후 움직임 영역이 추출된 이미지를 버퍼로 변환하여 배열에 담은 후, 전체 영역에서 검정색 영역이 차지하는 비율을 도출하여 편집 지점을 추출하였습니다. 그 결과 원샷 지점의 경우 다른 이미지에 비해 높은 비율을 가지는 것을 확인할 수 있었습니다.

하지만, 원샷 지점이 아님에도 불구하고 높은 비율을 가지는 이미지들이 있었습니다. 이는, 아래와 같이 변화가 적은 곳에도 움직임 탐색 결과 값에 유의미한 값이 도출되었기 때문입니다.

- 같은 앵글에서 같은 군무
- 원샷 구간이지만 얼굴의 앵글이 측면인 경우

물론 로직 자체는 움직임이 적은 부분을 파악하는 것이므로 로직은 의도에 맞게 성공적으로 실행된다고 볼 수 있습니다. 하지만, 저희 프로젝트에서 중점적으로 다루는 “변화가 없는 구간”은 “원샷(single-shot)지점”으로, 사람의 얼굴을 우선적으로 도출해야 했습니다.

이를 해결하기 위해 저희는 텐서플로우의 blazeface 얼굴분석 모델을 유효성 검사에 추가하였습니다. 텐서플로우 blazeface 모델을 활용하였을 때, 측면얼굴 인식 정확성이 떨어지고 무대를 얼굴로 인식하는 경우가 있었기 때문에 얼굴 유효성검사를 텐서플로우로 진행하기보다는 유효성 검사의 일부로 텐서플로우를 사용하였습니다.

텐서플로우 자체 로직에 대해 조절할 수 없고 유효하지 않은 값이 나오는 경우가 있었기 때문에, 텐서플로우의 예측 정확성에 대한 임계점을 95%로 높게 설정하였습니다. 하지만 텐서플로우의 높은 임계점과 움직임 비율의 임계점을 동시에 충족하는 경우(`&&`)만을 편집지점으로 설정할 경우 많은 프레임들이 누락되었습니다.

이를 해결하기 위해 움직임 비율 추출 시, 편집지점이 확실하다고 판단할 수 있는 “편집 임계점”을 영상별로 추출하여 두 가지 조건으로 유효성 검증을 처리하여 편집 지점을 도출하였습니다.

그 결과, 10개 미만이던 편집 지점 프레임이 평균 36개 정도로 추출되었고, 본래 추출하고자 했던 정면 원샷 구간 외에도 측면 얼굴 또는 상반신 등 보다 다양한 원샷 장면이 추출되어 정확성 향상 뿐만 아니라 편집의 다양성이 보장되었습니다.

<p align="center">
  <img width="600" alt="tensorflow diagram" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/9e44ada3-e238-4324-962d-4240760191c7">
</p>

</br>

### 2-4. 편집의 지속시간 계산

메인영상과 서브영상들의 편집 지점 즉, 영상이 전환될 시점들을 추출하고, 이후 작업들을 거쳐 최종적으로 선정된 편집 지점에 대해서 해당 시점으로부터 영상을 몇초간 변경해야할지를 결정해야 했습니다.

처음에는 모든 지점에 대해서 3초간 영상을 교체하였습니다. 하지만 모든 지점에 대해 공통으로 3초라는 시간을 적용했을 때, 다른 아이돌 멤버의 얼굴이 포함되어서 원샷 지점에 대한 교체라는 경계가 모호해지거나 다른 아이돌 멤버의 얼굴이 나오자마자 교체되는 등 어색한 편집이 되는 경우가 있었습니다.

따라서 3초라는 절대값이 아닌, 편집지점마다 얼굴이 없을 경우까지만 교체영상을 지속하도록 동적으로 시간초를 적용하였습니다.

<p align="center">
  <img width="600" alt="conversion condition" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/dbf80058-9235-4740-8f01-c54c5e856ae2">
</p>

</br>

## 3. 보다 자연스러운 편집을 위한 리사이징은 어떻게 진행해야할까?

KrossCutting 은 편집 지점을 결정하고 단순히 편집하는 것 뿐만 아니라
다른 아이돌 교차편집 영상들처럼 각 편집 지점들을 어색하지 않도록 부드럽게 이어주는 효과를 주고 싶었습니다.
그 과정에서 저희가 고려한 효과들은 아래와 같습니다.

- 리사이징*re-sizing* 효과 : 편집 지점의 아이돌 얼굴 위치와 크기에 맞게 편집 영상 이미지를 조정합니다.
- 디졸브*dissolve* 효과 : 프레임 변경 시 프레임 투명도를 조절하는 편집 효과로 선택적으로 부여합니다.

</br>

### 3-1. 얼굴 좌표 받아오기

우선 리사이징을 위해서, 편집 지점의 아이돌의 얼굴의 위치를 받아와야 합니다.
이를 위해 프레임 내에 얼굴을 인식하고 좌표를 가져올 수 있는 `tensorflow blazeface` 모델을 사용하였습니다.

<p align="center">
  <img width="600" alt="conversion condition" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/839ab433-12da-4a61-8bdd-fa72139781a6">
</p>

해당 모델에서, 얼굴의 좌표를 가져오면 아래와 같은 데이터를 확인할 수 있습니다.

- `topLeft` 얼굴영역의 좌측 상단 좌표
- `bottomRight` 얼굴영역의 우측 하단 좌표
- `landmarks` 6개의 얼굴의 특징점
  - 왼쪽 귀, 왼쪽 눈, 코, 입술, 오른쪽 눈, 오른쪽 귀 좌표에 대한 정보를 담고 있음
- `probability` 실제 얼굴일 확률

이때 `topLeft` 값과 `bottomRight` 좌표 값을 이어보면 감지하는 얼굴 영역을 사각형 형태의 컨테이너로 확인 가능합니다.
즉, 얼굴 영역 전체에 대한 좌표를 알 수 있습니다.
이제 받아 온 얼굴 좌표를 바탕으로 리사이징 효과를 적용해 보겠습니다.

</br>

### 3-2. 리사이징 효과

리사이징을 위한 로직은 어떻게 구성할 수 있을까요? 오랜 고민 끝에 도출한 프로세스는 아래와 같습니다.

우선 리사이징하기 전 비교 사진을 보시면, 아래와 같이 가로축과 세로축에 차이가 나는 것을 보실 수 있습니다.

<p align="center">
  <img width="600" alt="conversion condition" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/f35b7498-ef67-4bf2-878b-32bace273823">
</p>

</br>

리사이징 프로세스는 다음과 같습니다.

1. 영상 내 얼굴 영역 컨테이너 좌표의 가로/세로의 중심점 좌표를 구합니다.
2. 얼굴 중심 좌표의 가로축과 세로축의 차이를 기준으로 이미지를 편집합니다.
   이미지 편집 시, 배경이미지가 손실되므로 줌인(zoom-in)형태로 이미지를 편집합니다.
3. 편집 후 축소된 이미지와 기존 이미지 사이의 비율을 연산합니다.
4. 기존의 이미지 크기 만큼 가로/세로 비율을 늘려 복구합니다.

좌표를 통해 이미지를 편집하는 과정을 확인해보면 아래와 같습니다.

1. **두 이미지의** 좌표차만큼 `LeftTop` 좌표를 연산하고,
   이를 기준으로 변경된 `width`,`height` 값을 전달하여 축소된 이미지를 생성합니다.

<p align="center">
  <img width="600" alt="conversion condition" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/f63ead4d-eb99-4e29-b4e9-8b306cf2045e">
</p>

</br>

2. 축소된 이미지를 기존 이미지 크기만큼 비율을 확대하면 얼굴 좌표가 유사해지는 원리를 사용하여
   줌인(zoom-in)된 이미지를 구현합니다.

<p align="center">
  <img width="600" alt="conversion condition" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/8bbcda35-faf2-4270-be99-dae76ed664a1">
</p>

이렇게 리사이징이 적용된 이미지와 적용되지 않은 이미지를 비교한 결과는 아래와 같습니다.

<p align="center">
  <img width="600" alt="conversion condition" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/5c39ef1f-c017-45fe-a3b0-79b42953fc62">
</p>

</br>

### 3-3. 프레임 간 디졸브 효과

교차편집이 진행 될 1-2개의 프레임에 대해 투명도를 조절한 후 합성하면 영상이 전환되는 효과를 줄 수 있습니다.
이를 디졸브(dissolve)효과라고 합니다. 디졸브 효과는 **2-2.색상의 이해**를 바탕으로 간단히 구현할 수 있습니다.

<p align="center">
  <img width="600" alt="conversion condition" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/b8365fa4-9d74-422e-a570-a2aa00265c96">
</p>

이렇게 KrossCutting에서는 교차 편집 지점을 자동으로 정해주는 것 뿐만 아니라,
실제 교차 편집과 유사하게 리사이징 및 디졸브 기능을 추가함으로써 훨씬 자연스러운 교차 편집 기능을 제공할 수 있었습니다.

</br>

## 4. App은 Web과 뭐가 다를까?

KrossCutting 은 웹 뿐만 아니라 앱으로도 구현되었습니다.
유저가 파일을 업로드하는 방식을 지원하고 있으므로, 모바일 환경의 유저들이 보다 편리하게 사용할 수 있습니다.

</br>

### 4-1. Flutter vs ReactNative

KrossCutting 앱은 Flutter로 구현되어 있습니다.
앱을 구현하기 위한 선택지로는 Flutter 외에도 React Native가 있습니다.

KrossCutting 앱은 짧은 기간내에 빠르게 앱을 구축하고,
개발 환경에서의 핫-리로드(hot-reload) 기능의 이점을 누리기 위하여 Flutter를 선택하게 되었습니다.

<p align="center">
  <img width="600" alt="conversion condition" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/b420ba52-cae0-4b4d-8068-5f1ebf83d524">
</p>

- React Native
  - 자바스크립트 javascript 사용
  - 템플릿 언어로 구성된 컴포넌트Component로 UI 생성
  - 렌더링 단계에서 Javascript Bridge를 지야 렌더링이 가능
- Flutter
  - 다트 dart 사용
  - dart 코드로만 구성된 위젯Widget으로 UI 생성
  - 자체 렌더링 엔진을 사용
  - 최적화 하기 쉽고 통일성 갖춘 UI 위젯들이 미리 준비
  - 개발환경에서 JIT 컴파일 방식으로 hot-reload 기능 지원
  - 배포환경에서 AOT 컴파일 방식으로 고 성능 퍼포먼스 가능

</br>

### 4-2. App 환경과 Web 환경의 차이 1 - 사용자 보호방식

웹 환경에서는 CORS(Cross-Origin Resource Shring)와 동일 출처 정책을 통해 클라이언트를 보호하고 있으나
앱 환경에서는 그렇지 않으므로 반드시 사용자로부터의 권한 승인이 필요합니다.

KrossCutting 앱은 편집하기를 원하는 영상을 고른 후 서버에 전송하고,
교차 편집 완료된 영상을 사용자의 갤러리에 저장하는 과정을 거칩니다.

따라서, 갤러리 접근 및 파일 저장 권한이 필수적이었습니다.
이를 위해 Flutter 위젯 중에서 permission_handler 를 활용하여 제어를 시도하였습니다.

iOS에 권한설정을 해주기 위해서는 `Podfile`과 `Info.plist` 파일을 수정하여 접근을 허가해주어야 합니다.

- `Podfile`

  - Xcode 프로젝트의 종속성에 대한 명세
  - Ruby로 작성
  - `post_install` hook은 Xcode 프로젝트를 변경하거나 원하는 동작을 추가

    ```ruby
    post_install do |installer|
      installer.pods_project.targets.each do |target|
        flutter_additional_ios_build_settings(target)
        target.build_configurations.each do |config|
          config.build_settings['GCC_PREPROCESSOR_DEFINITIONS'] ||= [
            '$(inherited)','PERMISSION_PHOTOS=1',
          ]
        end
      end
    end
    ```

- `Info.plist`

  - 필요한 권한을 확인하고 반드시 `<key>` `<string>` 쌍으로 필요로 하는 권한을 입력하여야 합니다.
  - `<key>` 필요한 권한 명
  - `<string>` 해당 권한이 반드시 필요한 이유를 상세히 적어야 하며, 권한 요청 시 사용자에게 보여지는 글

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
    <plist version="1.0">
    <dict>
    	<key>NSPhotoLibraryAddUsageDescription</key>
      <string>This app needs access to the photo library to save videos.</string>
    	<key>NSPhotoLibraryUsageDescription</key>
    	<string>this app needs access to the photo library to create videos.</string>
    </dict>
    </plist>
    ```

위와 같은 권한설정을 통해 관련 위젯에서 사용자로부터 접근 허가를 받을 수 있도록 모달을 띄우고,
사용자의 권한 설정에 따라 갤러리를 열거나 제한할 수 있습니다.

</br>

### 4-3. App 환경과 Web 환경의 차이 2 - UI 조작 방식

앱은 웹과 다른 UI 조작 방식을 갖고 있으므로 이벤트 핸들러에 차이를 보입니다.

따라서 위젯의 사용목적에 따라, 그리고 문맥에 따라 필요한 메서드를 적절히 활용해야 한다는 점이 웹과 달랐습니다.

- Web
  - 마우스 클릭을 통해 UI 조작
  - 라우터 변경 시 단순히 페이지 새로고침
- App
  - 손가락과 제스처를 통해 UI 조작
  - 라우터 변경 시 변경 메서드에 따라 다른 라우터 스택과 화면 전환 효과

예를 들어, 코치마크 위젯에서 홈으로 돌아갈 때 선택할 수 있는 라우터 이동 메서드를 비교하면 다음과 같습니다.

- `push` 기존의 라우터들을 유지하고 또 다른 스크린 이동 경로를 스택에 추가
    <p align="center">
      <img height="300" alt="conversion condition" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/3ee06bf5-c825-46da-860c-b4f4e2d46e3c">
    </p>

  </br>

- `popUntil` 원하는 지점까지 이동하며 이전에 있던 라우터 기록을 삭제
    <p align="center">
      <img height="300" alt="conversion condition" src="https://github.com/KrossCutting/KrossCutting-client/assets/131152690/32f14b4f-5aa6-45f7-a943-ddf4317c0e10">
    </p>

따라서 단순히 사용법을 설명한 후 홈으로 돌아가는 코치마크 위젯의 경우,
라우터 기록을 지워주는 `popUntil`메서드를 사용함으로써 보다 사용자 친화적이고 설득력 높은 앱 UI를 구성할 수 있습니다.

</br>

# 📆 Schedule

- 1주차
  - 아이디어 선정
  - 기술 스택 결정
  - Git 작업 플로우 결정
  - ESLint, Prettier, Husky 설정
  - KANBAN 작성
  - 리액트 및 Node.js/Express 환경 세팅
- 2주차

  - 웹앱 전체 화면 구현
  - 오디오 정밀분석 로직 구현
  - 원샷구간(편집지점) 추출 알고리즘 구현
  - 편집지점 지속시간 추출 알고리즘 구현
  - 원샷지점(편집지점) 일치율 추출 로직 구현
  - 프레임 리사이징 알고리즘 구현
  - 프레임 영상 전환 로직 구현

- 3주차
  - Flutter 학습 및 KANBAN 작성
  - 홈화면/코치마크 위젯 구현
  - 시작점/편집점 위젯 구현
  - IOS 권한 설정 및 갤러리 위젯 구현
  - 세로영상 편집 전체 로직 구현

</br>

# 🤼‍♂️ Memoir

### **한민지**

좋아하는 아이돌의 영상을 자동으로 편집하는 기능이 있으면 좋겠다는 사심에서 시작한 프로젝트 주제였습니다. 싱글 스레드에서 raw data를 다루며 만난 다양한 에러와 챌린지들 외에도, 기능을 구현하는 과정에서 이 기능을 구현하기 위해 어떻게 로직을 구현할 것인지 처음부터 하나하나 생각하고 고민하여 구현해내는 과정에서 만난 챌린지까지. 정말 다양한 경험을 할 수 있었던 프로젝트 였습니다. 그 과정에서 개발 스킬 외에도, 무언가를 생각하고 고민하는 과정에 대한 중요성을 다시 한번 느낄 수 있었습니다. 뿐만 아니라 팀으로 프로젝트를 진행하며 팀원들 덕분에 힘든 과정이었음에도 기간 내에 잘 마무리 지을 수 있었다고 생각합니다. 개발 과정에서 어려웠을 때 뿐만 아니라 그 과정에서 정신적으로 힘들 때에도, 서로 믿고 의지하며 나아갈 수 있도록 도와준 TJ95 팀원들께 감사하다는 말씀 전합니다.

</br>

### **채민석**

프로젝트 기획부터 POC를 마칠때까지도 결과물 퀼리티에 대한 확신이 없었습니다. 그러나, 끊임없는 최적화와 팀원들의 노력덕분에 만족할만한 서비스를 제작할 수 있었습니다. 오디오와 이미지같은 로우 데이터를 자바스크립트로 다루는 것이 얼마나 불편한 것인지도 배울 수 있었습니다. 자바스크립트가 매우 다재다능하지만 깊이가 부족하다는 것도요. 작업적인 소통 스킬이 부족해서 팀원들에게 폐를 많이 끼쳤지만 항상 응원해준 민지님 그리고 수진님에게 감사합니다.

</br>

### **이수진**

아이돌 교차 편집 영상을 보며 같은 음원에 같은 안무라면 충분히 자동화가 가능할 것이라 기대하고 시작한 프로젝트였습니다. 하지만 싱글스레드 환경에서 대용량의 영상, 음원, 이미지 등을 다루게 되며 예상보다 많은 챌린지를 겪게 되었습니다. 비동기 작업에 대한 이해를 바탕으로 스트림과 버퍼를 직접 다루어 보고, 미디어 파일을 다루며 다양한 알고리즘을 적용해보는 경험까지 다양한 도전과제가 있었던, 그야말로 심심할 틈이 없었던 프로젝트였습니다. 또, 좋은 팀원 분들덕에 개발 뿐만 아니라 개발을 대하는 자세와 스스로의 한계를 이겨내는 경험을 하게 된 것 같습니다. 특히 짧은 기간내에 기능을 모두 구현하고, 일주일 내에 새로운 언어와 프레임 워크로 앱 개발을 진행한 경험은 팀원들 모두에게 아찔하고(?) 짜릿한 경험이지 않았나 생각하며 회고를 마칩니다. 제게 꾸준히 용기를 주고 믿어 준 TJ95, 감사합니다!
