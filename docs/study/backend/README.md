---
next: true
sidebarDepth: 2
---
# Backend

`엘리스`

1. 웹 백엔드 스터디
2. 5주차
3. 6주차
4. 백엔드 스터디
5. [NestJS Tutorial](https://www.youtube.com/watch?v=Xhj2TgWLDAo&list=PL_cUvD4qzbkw-phjGK2qq0nQiG6gw1cKK&ab_channel=AnsontheDeveloper&loop=0)
6. 노마더 코더 Nest.js로 API 만들기
7. [INFLEARN 따라하며 배우는 NestJS](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%8A%94-%EB%84%A4%EC%8A%A4%ED%8A%B8-%EC%A0%9C%EC%9D%B4%EC%97%90%EC%8A%A4)

## 웹 백엔드 스터디
## 5주차
## 6주차
## 백엔드 스터디

### Node.js

node.js 등장 배경

복잡한 JS 실행을 위해 V8 → 어느 환경에서나 JS 실행 가능

![image](https://user-images.githubusercontent.com/71163016/169000154-6b8707ae-6c5d-4883-9f8d-5ff3b3cbcd1e.png)

![image](https://user-images.githubusercontent.com/71163016/169000238-7dded44b-78be-4c9a-ad8e-9cef813a3197.png)


`Browser의 JS`는 브라우저에서만 실행되고 웹 내부에 제한된 동작이 있으며 front-end 개발자의 언어이다.

`node.js`는 크로스 플랫폼 실행, 제한없는 동작, 다양한 어플리케이션 개발이 가능


## 노마더 코더 Nest.js로 API 만들기

[해당 깃허브 바로가기](https://github.com/ParkSuJeong74/hi-nest)

### 개요
Node.js 위에 Express.js위에 Nest.js 프레임워크

구조와 룰(아키텍처, 구조)이 정해져있다(node.js는 딱히)

vscode, node, insomnia

```shell
$ npm i -g @nestjs/cli
$ nest                     # 다른 커맨드들의 리스트 조회
$ nest new project-name    # ./을 사용하면 현재 폴더를 nest로 만들어줌
$ npm run start:dev
```

### 파일 구조

CLI 명령어

```shell
$ nest g co         # generate controller
$ nest g s          # generate service
$ nest g mo         # generate module
```

- main.ts

기본함수

```ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); 
  await app.listen(3000); // 3000 포트
}
bootstrap();
```

- app.module.ts

데코레이터(@) : 클래스에 함수 기능을 추가할 수 있다. 클래스 위의 함수이고 클래스를 위해 움직인다. 반드시 함수나 클래스와 붙어있어야 하고 빈칸이 있으면 안된다.

app.module은 기본이 되는 모듈이고, 인증을 담당하는 어플리케이션은 users.module.ts 등등 으로 사용할 수 있다.

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // url를 가져오고 함수 실행(router)
  providers: [AppService],  
})
export class AppModule {}
```

- app.controller.ts

url를 매핑, 리퀘스트 받기, query 넘김, body 등을 넘김

```ts
import { Controller, Get } from '@nestjs/common';  // Post
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

    @Get()
    getAll(): Movie[]{
        return this.moviesServices.getAll()
    }

    @Get('search')  // id보다 위에 있어야함
    search(@Query('year') searchingYear: string){   // search?year=2000
        return `searching ${searchingYear}`
    }

    @Get(':id')
    getOne(@Param("id") movieId:string): Movie{
        return this.moviesServices.getOne(movieId)
    }

    @Post()
    create(@Body() movieData){
        return this.moviesServices.create(movieData)
    }

    @Delete(':id')
    remove(@Param("id") movieId:string){
        return this.moviesServices.deleteOne(movieId)
    }

    @Patch(':id')
    patch(@Param('id') movieId: string, @Body() updateData){
        return this.moviesServices.update(movieId, updateData)
    }
}
```

Post를 쓰기 위해서는 Post를 import해주고 Post를 사용하면 된다. 가령 Post로 바꾼다음 /hello 주소로 접속한다면 해당 오류를 볼 수 있다.

```ts
{
  "statusCode": 404,
  "message": "Cannot GET /hello",
  "error": "Not Found"
}
```

Put은 모든 리소스를 업데이트한다. Patch는 리소스의 일부분만 업데이트 해준다.

- app.service.ts

controller와 비즈니스 로직을 구분하고자함. 실제로 함수를 가지는 부분이 서비스!

로직을 관리하는 역할

```ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private movies: Movie[] = []
  getAll(): Movie[] {
        return this.movies
    }

    getOne(id:string): Movie{
        const movie=this.movies.find(movie => movie.id === +id) // +id == parseInt(id)
        if(!movie){
            throw new NotFoundException(`Not Found Movie with ID : ${id}`) // 예외처리, httpExceptino에서 확장된 nest 기능
        }
        return movie
    }

    deleteOne(id:string) {
        this.getOne(id)
        this.movies=this.movies.filter(movie => movie.id !== +id)
    }

    create(movieData){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }

    update(id:string, updateData){
        const movie = this.getOne(id)
        this.deleteOne(id)
        this.movies.push({...movie, ...updateData}) // 가짜 DB를 쓰기 때문에 사용하는 로직
    }
}
```

- app.controller.spec.ts

테스트 파일

*Single-responsibility principle : module, class, function이 하나의 기능은 반드시 책임져야한다.

NotFoundException() : 예외처리

### Pipe

코드가 지나가는 구간, 유효성 검사를 위한 파이프를 생성할 수 있다.

express에서는 미들웨어에 속함

```ts
// main.ts
async function bootstrap() {
  const app = await NestFactory.create(AppModule); 
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 어떤 decorator도 없는 property의 object는 거름
      forbidNonWhitelisted: true,// 이상한걸 보내면 request를 막음
      transform: true, // 원하는 타입으로 변환(id의 디폴트는 string이지만 이제 controller부터 number로 가져올 수 있음)
    })
  )
  await app.listen(3000);
}
```

### DTO(Data transfer Object) : 데이터 전송 객체

전달해야하는 데이터, 전달 받아야하는 데이터 명시

코드를 더 간결하게 만들 수 있도록 하는 역할, 쿼리의 유효성 검사 역할

```ts
export class CreateMovieDTO{
    @IsString() // 유효성 검사
    readonly title: string
    @IsNumber()
    readonly year: number
    @IsString({each: true})  // each : 하나씩 검사
    readonly genres: string[]
}
```

update의 경우 필수가 아니어도 작동하도록 설정

```ts
import { IsNumber, IsString } from "class-validator"

export class UpdateMovieDTO{
    @IsString()
    readonly title?: string // 필수는 아님

    @IsNumber()
    readonly year?: number

    @IsOptional()
    @IsString({each: true})  // each : 하나씩 검사
    readonly genres?: string[]
}
```

nest.js에서는 다르게도 가능하다.

Partial types(부분 타입)을 사용하려면 @nestjs/mapped-types를 설치해야한다(swagger도 가능함)

```ts
import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDTO } from "./create-movie.dto";

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
```

### Module

dependency injection : class만 type으로 import
 -> provider를 import하고 controller에 inject(주입)
    @Injectable

### Express

Nest는 express 위에서 작동하기 때문에 req, res를 사용할 수 있다.

```ts
getAll(@Req() req, @Res() res): Movie[]
```

하지만 좋은 방식은 아니다. fastify로 전환할 수 있기 때문이다.(2배 정도 빠르다.) => Nest.js 방식만 사용하는게 좋다.

### 테스트

Jest : Js를 쉽게 테스팅하는 npm 패키지

movies.controller.spec.ts 파일로 movies.controller.ts 파일을 테스트할 수 있다.

npm run test:cov : 얼마나 테스팅 되었는지를 알려줌

npm run test:watch : 모든 테스팅 파일을 찾아서 무슨일이 일어나는지 관찰 -> a를 누르면 전체 테스트

테스팅 종류

- 유닛 테스팅(서비스에서 분리된 유닛을 테스트, function 하나를 테스트)

- end-to-end(e2e) 테스팅(모든 시스템 테스트, 특정 페이지가 나와야하는 경우 -> 사용자 관점에서 특정 링크를 클릭시 액센 테스트)


**spec 파일**
 
유닛 테스트를 위한 파일

describe : 테스트 묘사

beforeEach : 테스트를 하기 전에 실행하는 것

afterAll, beforeAll, afterEach 같은 Hook

```ts
it('should be defined', () => { // individual test개별 테스트 줄임말
    expect(service).toBeDefined();
});

it("should be 4", () => {
    expect(2+2).toEqual(4) // 2+2가 4와 같기를 기대함
}) // √ should be 4 (4 ms) 결과 찍힘
```

**test 폴더**

e2e 테스트

입력 받았을 때 출력을 주는지 전체 테스트

```ts
it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
```

## 따라하며 배우는 NestJS

[해당 깃허브 바로가기](https://github.com/ParkSuJeong74/nestjs_postgresql)

### NEST.JS 란?

효율적이고 확장 가능한 NODE.JS 서버 측 애플리케이션을 구축하기위한 프레임워크.

express HTTP 서버 프레임워크 + Fastify

[Nest.js 철학]

고도의 테스트와 확장 가능성, 느슨한 결합, 유지 관리가 쉬운 애플리케이션을 만들 수 있도록 즉시 사용가능한 애플리케이션 아키텍처를 제공. Angular에서 영감을 받음

### 기본 구조

- .eslintrc.js : 코드 규칙 라이브러리. ts를 사용하는 가이드라인 제시, 문법에 오류가 나면 알려줌

- prettierrc : 코드 형식. 작은따옴표나 큰따옴표, indent값을 2로 할지 4로 할지 등등. 에러를 찾는 것이 아닌 코드 포맷터 역할

- nest-cli.json : nest에서의 특정한 설정(src 안이 root이다 등등)

- package.json : 라이브러리, 설정

- src 폴더 : 대부분의 비즈니스 로직이 들어감

### 애플리케이션 구조

BoardModule : 게시글에 관련된 모듈(BoardController, BoardEntity, BoardService, BoardRepository, ValidationPipe)

AuthModule : 게시글을 만드는 사람에 대한 인증 모듈(AuthController, UserEntity, AuthService, UserRepositroy, JWT, Passport)

### Module(@Module)

@Module 데코레이터로 주석이 달린 클래스. 메타데이터 제공

하나 이상의 모듈(root 모듈)이 있어야함

밀접하게 관련된 기능 집합. 하나의 모듈 폴더에 같은 기능이 들어감

기본적으로 싱글톤으로 여러 모듈간에 쉽게 공급자의 동일한 인스턴스를 공유할 수 있음

```shell
$ nest g mo boards
```

### Controller(@Controller)

들어오는 요청을 처리하고 클라이언트에 응답 반환

Handler : @Get, @Post, @Delete 와 같은 컨트롤러 클래스 내의 메서드

```shell
$ nest g co boards    # controller와 테스트 파일, module에 controller 추가
```

### Providers&Service(@Injectable)

Providers : 대부분 기본 Nest 클래스는 서비스, 리포지토리, 팩토리, 헬퍼 등 프로바이더로 취급

종속성에 주입할 수 있다는 것

객체는 서로 다양한 관계를 만들 수 있고 객체의 인스턴스를 연결하는 기능은 대부분 Nest 런타임 시스템에 위임

즉 Controller에서 Service를 종속적으로 사용한다는 뜻이다.

Service : @Injectable 데코레이터로 감싸져서 모듈에 제공됨 -> 전체에서 사용될 수 있음

서비스는 컨트롤러에서 데이터의 유효성을 체크하거나 DB에 아이템을 생성하는 등의 작업을 하는 부분 처리

Dependency Injection : Service에서 정의한 메소드를 controller에서 쓰는 것

controller의 constructor에서 Private type의 파라미터로 프로퍼티를 넣어서 this.(type).메소드 형식으로 사용

Provider 등록 : module에서 추가

```shell
$ nest g s boards    # service와 테스트 파일, module에 service 추가
```

접근제한자 private를 사용하여 controller에서 service를 등록

```ts
@Controller('boards')
export class BoardsController {
    constructor(private readonly boardService: BoardsService){}
}
```

### 서비스 제작

클라이언트에서 요청을 보내면 먼저 컨트롤러에 라우팅해서 해당 핸들러로 이동 -> 서비스로 들어가 로직을 처리해주고 컨트롤러에서 클라이언트로 결과값 보내줌

게시물을 만든다면, 게시물의 모델을 만들어서 board.model.ts

classes : 변수의 타입 체크와 인스턴스 생성

interface : 변수의 타입만 체크

공개 게시물과 비공개 게시물을 나누는 status를 주기 위해 도메인을 설정

두 상태만 나올 수 있도록 enumeration 사용

타입 설정

ID는 DB에서 알아서 유니크한 값을 줌 -> 지금은 uuid 사용

```shell
$ npm install uuid --save
```

```ts
import { v1 as uuid } from 'uuid'
const board: Board = {
    id: uuid(),
    title,
    description,
    status: BoardStatus.PUBLIC
}
```

express에서는 bodyParser 모듈을 이용해서 클라이언트에서 값을 받았지만, Nest에서는 @Body('title') title 로 가져옴

prettier, eslint는 **npx eslint . --fix**로 실행

### DTO(Data Transfer Object)

계층간 데이터 교환을 위한 객체로 DB에서 데이터를 얻어 service나 controller 등으로 보낼 때 사용하는 객체

데이터가 네트워크를 통해 전송되는 방법을 정의

interface나 class를 이용해서 정의하는데 class를 추천 -> 런타임에서 작동하기 때문에 pipe 같은 기능을 이용할 때 더 유용합니다.

쓰는 이유 : 데이터 유효성 체크에 효율적, 안정적인 코드, ts 타입으로 사용, 코드 수정에 용이

property를 여러곳에서 사용중인데 수정하려고 하면 많이 고쳐줘야하기 때문에, 유지보수를 위해 DTO 사용

특정한 게시글을 가져올때는 id type을 전달(@Params를 가져올때 전체를 가져오면 @Param() params: string[]으로 가져올 수 있음)


### Pipe(@Injectable)

data transformation, data validation을 위해서 사용됨

컨트롤러 경로 처리기에 의해 처리되는 인수에 의해 작동

메소드가 호출되기 직전에 파이프를 삽입하고 파이프는 메소드로 향하는 인수를 수신하고 이에 의해 작동함

- data transformation : 입력 데이터를 원하는 형식으로 변환(문자열 -> 정수)

- data validation : 입력데이터가 유효하지 않은 경우 에러를 발생

-> Binding Pipes : 파이프 사용법

- Handler-level pipes : **@UsePipes()** 데코레이터 사용. 이 파이프는 모든 파라미터에 적용됨. router하나에만 적용됨

- parameter-level pipes : parameter 레벨의 파이프. 특정한 파라미터에만 적용됨 (@Body('title', ParameterPipe) title)

- global-level pipes : 애플리케이션 레벨의 파이프. 클라이언트에서 들어오는 모든 요청에 적용됨. main.ts에 위치(app.useGlobalPipes(GlobalPipes))

Built-in Pipes : Nest에서 만들어둔 6가지의 파이프

- ValidationPipe : 유효성 체크

- ParseIntPipe : 숫자가 와야하는 핸들러일때 사용

- ParseBoolPipe

- ParseArrayPipe

- ParseUUIDPipe

- DefaultValuePipe

Pipe 생성 - 유효성 체크

```shell
npm install class-validator class-transformer --save
```

[유효성 검사할 때 참고](https://github.com/typestack/class-validator#manual-validation)

커스텀 파이프 : PipeTransform 인터페이스, transform 메소드

transform() 메소드는 처리가 된 인자의 값value, 인자에 대한 메타데이터를 포함한 객체를 파라미터로 가짐 -> return이 된 값은 route 핸들러로 전해지고, 예외Exception 발생시 클라이언트로 전달

metadata: ArgumentMetadata로 설정하면 matatype, type(body 등), data를 저장함

상태가 public과 private만 가능하게 유효성 검사할 수 있음


### PostgreSQL

[postgresql](https://www.postgresql.org/download/windows/) + [pgAdmin](https://www.pgadmin.org/download/) 설치

pdAdmin : 웹 브라우저 기반 데이터베이스 관리 GUI이다.

server에 DB 생성!

### typeORM

객체 관계형 매퍼 라이브러리(mySQL, Postgres, MariaDB, SQLite, MS SQL Server, Oracle, SAP Hana, WebSQL)

ORM : 객체와 관계형 데이터베이스 데이터를 자동으로 연결하는 작업

모델을 기반으로 테이블 체계를 자동 생성. 데이터베이스에서 개체를 쉽게 삽입하고 업데이트, 삭제할 수 있으며, 테이블 간의 매핑도 만듬. CLI 제공

```shell
$ npm install pg typeorm @nestjs/typeorm --save
```

- remove() : 무조건 존재하는 아이템을 지움(에러 발생) 

- delete() : 아이템이 존재하면 지우고 아니면 아무런 영향이 없음

remove를 사용하면 아이템의 유무를 확인하고 지우기, 즉 두번 데이터 베이스에 접근해야함!

### Entity

@Entity() : 클래스가 엔티티

@PrimaryGeneratedColumn() : 기본키

@Column() : 열

### Repository

entity 개체와 함께 작동하며 엔티티 찾기, 삽입, 삭제 처리

repository pattern : 데이터베이스에 관련된 일을 서비스가 하지 않고 repository에서 함(insert, find, delete)

@EntityRepository() : custom 저장소로 선언하는데 사용됨(버전 업그레이드 되면서 사용 안됨)

[공식문서 참고](https://docs.nestjs.com/recipes/sql-typeorm)

async - await : 데이터베이스 작업이 끝난 후 결과값 받음

### 유저 데이터 유효성 체크

Class-validator

try catch문을 사용해서 원하는 status 코드와 문구를 줄 수 있다.

### 암호화

bcryptjs 

```shell
$ npm install bcryptjs --save
```

import * as bcrypt from 'bcryptjs'로 사용한다.

비밀번호를 데이터베이스에 저장하는 두가지 방법

Encryption Key와 함께 양방향으로 암호화(알고리즘 + 암호화 키) : 어떤 암호를 이용해서 비밀번호를 암호화하고 그 암호를 이용해서 복호화(키가 노출되면 위험함)

SHA256 등으로 해시Hash해서 저장(단방향) : 복호화 불가능

-> 레인보우 테이블을 만들어서 암호화된 비밀번호를 비교해서 비밀번호 알아내야함(비슷한 암호를 사용해서 보안 취약) -> salt + 비밀번호를 암호화해서 저장함

### JWT

Json Web Token : 당사자 간에 정보를 json 개체로 안전하게 전송하기 위한 컴팩트하고 독립적인 방식을 정의하는 개방형 표준RFC7519. 이 정보는 디지털 서명이 되어 있어 확인하고 신뢰할 수 있음

권한을 체크하기 위해 사용함

- Header : 토큰에 대한 메타 데이터 포함(타입, 해싱 알고리즘, SHA256, RSA...)

- Payload : 유저 정보(issuer), 만료 기간(expiration time), 주제(subject)

- Verify Signature : 토큰이 보낸 사람에 의해 서명되었으며 어떤 식으로 변경되지 않았는지 확인하는 서명.

[jwt](https://jwt.io/)

유저가 로그인하면 토큰을 생성함(hashing 알고리즘으로 jwt) -> 토큰 보관

서버에서 요청에서 같이 온 header와 payload를 가져오고 서버안에 가지고 있는 secret를 이용해서 signature 부분을 다시 생성. 일치하면 통과



### Log

로그 종류

Log : 중요한 정보의 범용 로깅

Warning : 치명적이거나 파괴적이진 않는 처리되지 않은 문제

Error : 치명적이거나 파괴적인 처리되지 않은 문제

Debug : 오류 발생시 로직을 디버그하는데 도움이 되는 유용한 정보

Verbose : 응용 프로그램의 동작에 대한 통찰력을 제공하는 정보

로그 레벨

Development : Log, Error, Warning, Debug, Verbose

Staging : Log, Error, Warning

Production : Log, Error

Nest에는 built-in된 Logger 클래스가 있음!

### Configuration

runtime 도중에 바뀌는 것이 아니라 애플리케이션이 시작될 때 로드되어 정의해줘야함

Codebase : 노출이 되어도 상관없는 정보들

Environment Variables : 비밀번호나 API Key 같은 노출되면 안되는 정보들

```shell
$ npm install -g win-node-env
$ npm install config --save
```

root 디렉토리에 config 폴더 안에 json이나 yaml 형식의 파일 생성

- default.yaml :  기본 설정(개발 환경 설정이나 운영 환경 설정에도 적용됨)

- development.yaml : default에서 설정 + 개발 환경에서 필요한 정보

- production.yaml : default에서 설정 + 운영 환경에서 필요한 정보

jwt expiresIn : 3600으로 하면 한시간

db: synchronize : true로 하면 시작할때마다 entity 생성

