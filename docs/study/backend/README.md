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
5. [NestJs Course for Beginners - Create a REST API](https://www.youtube.com/watch?v=GHTA143_b-s&t=11131s&ab_channel=freeCodeCamp.org&loop=0)
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
  providers: [AppService],      // 
})
export class AppModule {}
```

- app.controller.ts

```ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()      // get router
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Get('/hello') 
  sayHello(): string {
    return "hello everyone"
  }
}
```

Post를 쓰기 위해서는 Post를 import해주고 Post를 사용하면 된다. 해당 

```
{
  "statusCode": 404,
  "message": "Cannot GET /hello",
  "error": "Not Found"
}
```

- app.service.ts