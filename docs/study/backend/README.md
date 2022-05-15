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

## 파이썬이란?

### Python 개요
파이썬Python은 인터프리터 언어이다. 한 줄씩 소스 코드를 해석해서 바로 실행하여 결과를 확인할 수 있다.
구글에서 만들어진 50% 이상의 소프트웨어가 파이썬으로 만들어졌는데 예를 들어 Dropbox(파일 동기화 서비스), Django(웹 프레임워크)도 파이썬으로 만들어졌다.
하지만 속도가 느린 것이 단점!
따라서 다른 언어로 작성된 프로그램과 모듈들이 파이썬으로 재구성되고 있으며 간결한 문법으로 공동 작업과 유지보수가 편하다.
확장성과 이식성이 높고 생태계가 활발한게 특징이다.

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

하지만 좋은 방식은 아니다. 대신 fastify로 전환할 수 있다.

