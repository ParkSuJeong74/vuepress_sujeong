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

## Node.js 기초

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
$ nest new project-name
$ npm run start:dev
```

### 파일 구조

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

```
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

CLI 명령어

```shell
$ nest g co         # generate controller
$ nest g s          # generate service
$ nest g mo         # generate module
```

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

테스팅 데이터베이스 : 

