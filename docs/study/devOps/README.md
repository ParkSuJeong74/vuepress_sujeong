---
next: true
sidebarDepth: 2
---
# DevOps 이론

`엘리스` 백엔드 스터디 강의 내용 일부가 포함됩니다. 이 외 검색 등으로 알게된 내용도 추가될 예정입니다.

## Docker
MSA Container 기술
|로컬|서버|특징|
|----|----|----|
|java앱 .jar 파일|ubuntu 서버에서 java와 WAS|서버 확장이 어려움|
|spring boot앱 .jar+WAS|ubuntu 서버에서 java|서버 확장이 중간 수준|
|spring boot앱 .jar+WAS|docker container 형태로 배포|서버 확장 쉬움, 유연함|

`컨테이너Container`
OS(Linux) + App(상용 앱 : nginx, elasticsearch, node ..)

`이미지Image`
OS 설치 파일로 앱이 설치된 OS로 앱이 설치되고 실행하는 스크립트(Dockerfile)까지 포함한다.
Docker만 설치되어 있다면 앱을 실행하는게 가능하다.
```dockerfile
# python이 설치된 OS
FROM python
# 프로젝트 루트에서 app 컨테이너 대상 폴더로 카피
COPY . /app
WORKDIR /app
RUN pip3 install flask
CMD ["python3", "app.py"]
```

확장이 쉽고 내리기도 쉽다.
```shell
docker run <image_name> # 컨테이너 확장
docker kill <container_id> # 내리기
```

docker 배우기, 서버에 docker를 설치하고 image파일을 만들어줘야함 -> 서버 세팅과 애플리케이션 띄우기 반복 가능

### Docker 명령어
```shell
docker ps # 전체 프로세스 조회
docker run nginx # nginx 띄우기, 없으면 다운로드
docker run -p 8001:80 nginx # 띄우기, localhost:8001으로 연결, nginx는 기본 80 포트
docker run -d -p 80:80 nginx # demon 형태로 띄우기, 백그라운드 실행으로 조회하면 나옴
docker images # 이미지 목록 조회
docker run -d -p 8001:80 nginx # 두번째 컨테이너 실행, 포트를 다르게함
docker kill <container_id> # container 내리기
```


## AWS
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## 클라우드 컴퓨팅

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

### 
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.