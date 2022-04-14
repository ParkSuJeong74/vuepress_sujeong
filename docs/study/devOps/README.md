---
next: true
sidebarDepth: 2
---
# DevOps 이론

`엘리스`

1. 웹 백엔드 스터디
2. 백엔드 스터디
3. k8s

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
docker container ls -a # 내려간 container까지 모두 확인 가능
docker container rm <container_id> # container 지우기
docker rmi <image> # image 지우기
```

:::warning
이미지를 지울 때 Error response from daemon : conflict: unable to remove repository reference ~. 라는 에러가 나면 해당 이미지를 사용하는 container가 모두 내려갔는지 확인이 필요하다.
:::

### Docker + Flask
flask를 사용하기 위해서는 python3가 필요(설치할때 add python 3.9 to PATH)

`Flask`
```python
# app.py
from flask import Flask, render_template
app=Flask(__name__)

def hello():
    return "hello world"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
```

```shell
python -m venv nenv # nenv 생성
venv\Scripts\activate.bat # venv 실행
pip freeze # 설치된 목록 보기
pip install flask
python app.py
```

flask를 실행시킬 수 있다.

`Dockerfile`

```dockerfile
# 어떤 리눅스를 사용할 것인지? python, node, java 등등(이미지 지정)
FROM python:3.8-alpine 
# 파일을 복사함 : .은 현재 디렉토리이고 /app는 컨테이너의 디렉토리
COPY . /app
# 컨테이너에서 명령어를 실행하는 디렉토리(시작점 지정)
WORKDIR /app
# 컨테이너를 구성할 파일을 만드는 명령어. flask 설치와 권한 변경(이미지 만들때 사용)
RUN pip3 install flask
RUN chmod +x /app/app.py
# 컨테이너 실행 후 실행할 명령어
CMD ["python3", "app.py"]
```

`Docker build`

```shell
# 만약 도커 파일 뒤에 확장자가 있으면 이름 변경
move <Dockerfile.확장자> Dockerfile

docker build -t <flask-이미지 이름>:<tag붙이기> . # 도커 이미지로 만듬, 같은 이름이 있으면 원래 이미지는 None
docker images # 이미지 만들어졌는지 확인
docker ps # 컨테이너는 아직 없음
docker run -d -p <띄우고 싶은 포트>:5000 <flask-이미지 이름> # flask app에서 지정한 포트 5000으로 실행
docker ps # 컨테이너 있음
```


## AWS

AWS는 아마존에서 만든 클라우드 컴퓨팅 서비스이다. 서버를 구매하지 않아도 웹에서 서버를 띄울 수 있다.

`EC2 Spec`

ubuntu 20.04 LTS

t2.micro pre(2022.04.05)

보안 그룹 : ssh(22), tcp(80(nginx), 5000(flask), 5001)

IPv4 주소 : 13.125.233.129


`puttygen`

conversions -> importKey 후 pem파일 -> save private key

`mobaxterm`

session -> ssh -> remote host : IPv4 주소 -> ssh setting : use private key -> ubuntu 로그인

`oh my bash`

```shell
sudo su -
bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmybash/oh-my-bash/master/tools/install.sh)"
```
## AWS + Docker

```shell
sudo su -
bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmybash/oh-my-bash/master/tools/install.sh)"
```


## 클라우드 컴퓨팅


## k8s
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.