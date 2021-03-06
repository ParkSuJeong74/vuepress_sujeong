---
next: true
sidebarDepth: 2
---

# 칼럼 정리

여러 칼럼, 유튜브 등 다양한 사이트에서 얻은 지식들을 정리하는 창고입니다.

## 데이터 엔지니어
[유튜브 링크](https://www.youtube.com/watch?v=1Viu7Ce632s&ab_channel=%EC%B9%B4%EC%9D%BC%EC%8A%A4%EC%BF%A8)


서비스나 제품에서 데이터가 발생하면 데이터를 저장합니다. 지금부터 그 데이터를 다루는 엔지니어의 이야기를 다뤄보겠습니다.

로그를 설계하여 데이터를 효과적으로 수집하면 이 단계에서 두가지 파트로 나뉩니다.
하나는 데이터의 유통을 관리하는 데이터 파이프라인 생성, 다른 하나는 모델 개발입니다.

ML/DL Engineer, 즉 머신러닝 엔지니어는 여기서 모델을 개발합니다. 개발한 모델을 제품에 적용(API)하고 모델의 성능을 개선(Precision, RMSE)한 후 다시 모델을 개발합니다.
Data Scientist는 논문을 연구하고 집필하여 모델 개발의 핵심 알고리즘을 설계합니다.

### 데이터 엔지니어링

`Data Engineer`는 데이터 파이프라인, 즉 데이터 인프라를 구축합니다. 이후 Data Analyst는 데이터 엔지니어가 구축한 인프라를 바탕으로 저장된 DB나 클라우드의 데이터를 분석하고 추출하여 대시보드를 생성하고 지표를 모니터링합니다.

Data Engineer는 데이터를 저장하고 가공하고 처리하는 직군으로 데이터를 물, 데이터 파이프라인을 배관이라고 한다면 배관공에 해당하는 직군입니다.

앱이나 웹 서비스는 원래 DB에 데이터를 저장했습니다. 그런데 DB는 서비스를 위한 데이터를 주로 저장하고 장애가 나선 안되었습니다. 따라서 Data Warehouse에 데이터를 옮기고 저장하는 움직임이 일어났습니다.

데이터 웨어하우스는 데이터 분석에 특화된 DB로 GCP의 BigQuery, AWS의 Redshift, Snowflake입니다. 데이터 엔지니어는 DB의 `데이터를 Warehouse에 옮기는 일`을 맡고 있습니다.

1. ETL 파이프라인
E는 Extract, T는 Transform, L은 Load입니다.
데이터를 추출하고 변환하고 불러오는 파이프라인입니다.


:::tip
E : 서비스의 DB나 웹, 앱의 로그 데이터 추출

T : 데이터 변환

L : 변환한 데이터 사용할 수 있도록 설정
:::

2. 데이터 처리 방식
배치Batch와 실시간Realtime, Streaming 방식이 있습니다.

:::tip
Batch : 특정 시간에 1번씩 실행

Realtime : 요청시 바로, 실시간 데이터 처리
:::

목적에 따라 데이터를 활용할 건지에 따라 방식이 바뀝니다.

데이터 엔지니어의 업무에는 데이터 분석을 쉽게 할 수 있는 환경, 즉 `인프라를 구축`하는 업무가 있습니다.

데이터 웨어하우스에 데이터를 옮기면 수많은 Table의 수많은 SQL문을 작성하게 되는데, 사람마다 Join 수가 늘어나거나 사용 조건이 누락되는 경우, SQL문 실행 시간이 오래 걸릴 수 있습니다.

그래서 Data Mart를 구축합니다. SQL Join 결과를 Batch로 Table에 저장하는 것입니다. 특정 목적과 도메인에 맞는 마트를 구축합니다. 또한 데이터 분석시 데이터 시각화 도구가 필요한 경우, Tableau, Redash, Superset, Matabase등 BI 도구와 결합하는 환경을 마련하고 필요시 사용 방법을 공유해야합니다.

`Data Product`를 개발하는 것도 업무 중에 하나입니다. Data 관련 제품이나 서비스를 통칭하는데 사내 구성원들을 위한 Data Product 개발이 필수적입니다.

AB Test Platform, 데이터 기반 서비스, Google Analytics, 데이터 로그 시스템, 머신러닝이나 딥러닝 서비스 등이 해당됩니다.

데이터 엔지니어링 관련 라이브러리에는 Apache Spark, Apache Kafka(대용량 데이터처리, 실시간)과 Apache Airflow(workflow management) 등이 있습니다.
언어와 플랫폼은 선택의 문제이고, 도구이기 때문에 상황과 목적에 따라 선택하는 역량이 필요합니다. 예를 들면, 상황에 따라 kafka보다 AWS Kinesis가 좋을 때도 있습니다.

`로드맵`

Data Engineer Roadmap
https://github.com/datastacktv/data-engineer-roadmap

Awesome Data Engineering
https://github.com/igorbarinov/awesome-data-engineering

빅데이터를 지탱하는 기술(책)
https://github.com/andkret/Cookbook

기술 블로그 모음
https://github.com/kilimchoi/engineering-blogs

Uber 기술 블로그
https://eng.uber.com/real-time-exactly-once-ad-event-processing/

-> 데이터 파이프라인 구축 프로젝트 진행하기(어떤 문제를 해결하기 위해 어떤 방식으로 아키텍처를 설계했고 이런 목표 때문에 이런 프레임워크를 선택했다는 식으로 학습)