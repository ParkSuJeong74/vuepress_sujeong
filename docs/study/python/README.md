---
next: true
sidebarDepth: 2
---
# Python Programming

`점프 투 파이썬` 종이책과 `엘리스`에서 제공하는 도레미 파이썬 등 기초 프로그래밍, 11주차 파이썬 강의 내용 일부가 포함됩니다. 이 외 검색 등으로 알게된 내용도 추가될 예정입니다.

## 파이썬이란?

### Python 개요
파이썬Python은 인터프리터 언어이다. 한 줄씩 소스 코드를 해석해서 바로 실행하여 결과를 확인할 수 있다.
구글에서 만들어진 50% 이상의 소프트웨어가 파이썬으로 만들어졌는데 예를 들어 Dropbox(파일 동기화 서비스), Django(웹 프레임워크)도 파이썬으로 만들어졌다.
하지만 속도가 느린 것이 단점!
따라서 다른 언어로 작성된 프로그램과 모듈들이 파이썬으로 재구성되고 있으며 간결한 문법으로 공동 작업과 유지보수가 편하다.
확장성과 이식성이 높고 생태계가 활발한게 특징이다.

:::tip
파이썬은 인터프리터 언어이다!
:::

파이썬은 마치 영어 문장 같은 문법을 가지고 있다.
```python
if 4 in [1,2,3,4]: print("4가 있습니다.") # 만약 4가 리스트 안에 있으면 출력
```
문법 자체가 사람의 사고 체계와 닮아있어 배우기가 쉬운 프로그래밍 언어이다.

오픈 소스Open Source인 파이썬은 무료이고 강력하지만 시스템 프로그래밍과 하드웨어 제어 같은 복잡하고 반복적인 연산에 어울리지 않는다. 하지만 C와 찰떡 궁합으로 전반적인 뼈대는 파이썬으로, 빠른 실행 속도가 필요한 부분은 C로 만들어서 파이썬 프로그램에 포함시킨다. 파이썬 라이브러리도 C로 만들어진 것이 많다. 최근에는 rust와 바인딩하기도 한다.

간결한 문법이 특징이다. 특히 들여쓰기로 단락을 구분하는데 이것은 가독성에 도움이 된다.
문법이 아니라도 파이썬은 간결하다. 펄Perl과 비교하면 100가지 방법으로 일을 처리하는 펄Perl과 달리 파이썬은 가장 좋은 1가지 방법을 선호한다.

:::tip
Life is too short, You need Python.
:::

파이썬으로 할 수 있는 일과 할 수 없는 일을 구분해보자.

|구분|종류|
|------|---|
|가능|시스템 유틸리티 제작, GUI, C/C++와 결합, 웹, 수치 연산, 데이터베이스, 데이터 분석, 사물인터넷|
|불가능|시스템과 밀접한 프로그래밍, 모바일(가능은 함)|
<details> 
<summary>자세히 보기</summary> 

> 시스템 유틸리트 제작

운영체제의 시스템 명령어를 이용할 수 있는 각종 도구을 갖추어 컴퓨터 이용에 도움이 되는 유틸리티 제작에 용이하다. 

> GUI

Tkinter를 이용하면 마우스나 키보드로 조작하는 윈도우 창을 띄울 수 있다.

> C/C++와 결합

C나 C++로 만든 프로그램을 파이썬에서 사용하고 반대도 가능하다. 파이썬은 일명 `접착glue` 언어라고도 불린다.

> 웹

웹 프로그램을 만드는데 용이하다.

> 수치 연산

Numeric Python 수치 연산 모듈로 빠른 수치 연산이 가능하다.

> 데이터베이스

데이터베이스에 접근하는 도구도 존재하지만 pickle 모듈을 활용하면 그대로 저장하기도 가능하다.

> 데이터 분석

Pandas의 등장으로 데이터 분석에 특화되어 있다.

> 사물인터넷

리눅스 기반의 컴퓨터인 라즈베리파이raspberry Pi를 제어하는데 사용한다.

------
> 시스템과 밀접한 프로그래밍

아주 많은 반복 연산, 아주 빠른 속도를 요구하는 작업은 어울리지 않는다.

> 모바일

Kivy라는 패키지로 만들 수는 있지만 효율성이 떨어진다.

</details>



:::tip
`가능` : 시스템 유틸리티 제작, GUI, C/C++와 결합, 웹, 수치 연산, 데이터베이스, 데이터 분석, 사물인터넷

`불가능` : 시스템과 밀접한 프로그래밍, 모바일(비효율적)
:::

### 기초 문법 종류

`사칙연산` : +,-,*,/

`변수`
```python
a=1 # 할당 연산자(=)로 값 저장, 자료형 명시가 필요없다.
b=2
print(a*b) # 2
```
`조건문`
```python
i=2
if i < 3:
    print("3보다 작다.") # 3보다 작다.
```
`반복문`
```python
for a in [1,2,3]:
    print(a) # 1 2 3

i=0
while i < 3:
    i=i+1
    print(i) # 1 2 3
```
`함수`
```python
def sum(a, b):
    return a+b

print(sum(1, 2)) # 3
```

## 자료형

|구분|종류|활용|
|------|---|----|
|숫자형Number|정수형, 실수형, 8진수와 16진수, 복소수|연산|
|문자열String|표현법|이스케이프 코드, 연산, 인덱싱과 슬라이싱, 포매팅, 함수|
|리스트List|표현법|인덱싱과 슬라이싱, 연산, 수정과 변경, 삭제, 함수|
|튜플Tuple|표현법|인덱싱과 슬라이싱, 연산|
|딕셔너리Dictionary|표현법|수정과 변경, 삭제, 함수|
|집합Set|표현법|연산, 함수|
|변수|표현법|활용|

### 숫자형Number

`정수형Ingeger` : 양의 정수, 음의 정수, 0
```python
a=1
b=-3
c=0
```

`실수형Floating-point` : 소수점이 포함된 숫자
```python
a=1.2
b=-3.45
c=4.24E10 # 컴퓨터식 지수 표현방식
d=4.24e-10
```

`8진수Octal, 16진수Hexadecimal`
```python
a=0o177 # 8진수
c=0x8ff # 16진수
```

`복소수Complex number`
```python
a=1+2j # i 대신 j 사용
a.real # 1.0 실수 부분 리턴
a.imag # 2.0 허수 부분 리턴
a.conjugate() # 1-2j 켤레 복소수 리턴
abs(a) # 2.2306067 절댓값 반환
```

사칙연산 : +,-,*,/, //
```python
7 / 4 # 1.75
7 // 4 # 1 나머지 버림
```

제곱 : **
```python
3 ** 2 # 9
```

나머지 연산 : %
```python
7 % 4 # 3
```

:::tip
숫자형Number : 정수형, 실수형, 8진수와 16진수, 복소수

연산 : 사칙연산, 제곱, 나머지 연산
:::

### 문자열String
```python
"Hello World!"
"Python's favorite food is perl" # Python's favorite food is perl
'Python is fun'
"\"Python's favorite food is perl\"" # "Python's favorite food is perl"

# Life is too short
# You need python
multiline = "Life is too short\nYou need python"
multiline = """
Life is too short
You need python
"""
multiline = '''
Life is too short
You need python
'''
```

`이스케이프 코드`

|코드|설명|
|------|---|
|\n|개행|
|\t|탭|
|\\|\|
|\'|'|
|\"|'|
|\r|캐리지 리턴, 개행 후 커서 바로 앞으로|
|\f|폼 피드, 개행 후 커서 다음줄로|
|\a|벨 소리|
|\b|백 스페이스|
|\000|null|


연결하기`Concatencation`
```python
head = "Python"
tail = " is fun!"
head+tail # Python is fun!
```
`곱하기`
```python
a="Python"
a*2 # PythonPython
print("="*20) # ====================
```

`Indexing`
```python
a="Python's favorite food is perl"
a[3] # h
a[-3] # e
```

`Slicing`
```python
a="Python's favorite food is perl"
a[:7] # Python
a[10:18] # favorite
a[-4:] # perl
a[:] # Python's favorite food is perl

b="20220331Python"
year=b[:4] # 2022
day=b[4:8] # 0331
study=b[8:] # Python
```
:::warning
문자열의 요소값은 바꿀 수 없다. 튜플과 문자열은 immutable한 자료형이기 때문이다.
```python
a="Pithon" 
a[:1] + "y" + a[2:] # Python으로 변경하는 방법
```
:::

`Formatting`
```python
"I eat %d apples" % 3 # I eat 3 apples
"I eat %s apples" % "five" # I eat five apples
"I eat %s apples" % 3 # I eat 3 apples

number=5
day=three
"I ate %d apples, so I'm sick for %s days" % (number, day) # I ate 5 apples, so I'm sick for three days
"Error is %d%%" % 98 # Error is 98%

"%10s" % "hi" # '        hi' 전체 10개에 오른쪽 정렬
"%-10sjane" % "hi" # 'hi    jane' 전체 10개에 왼쪽 정렬
"%0.4f" % 3.141592 # 3.1415
"%10.4f" % 3.141592 # '     3.1415'
```


`포맷 코드`
|코드|설명|
|------|---|
|%s|문자열String|
|%c|문자 1개Character|
|%d|정수Integer|
|%f|부동 소수|
|%o|8진수|
|%x|16진수|
|%%|Literal %|


`고급 포매팅`
```python
"I eat {0} apples".format(3) # I eat 3 apples
"I eat {0} apples".format("five") # I eat five apples
"I ate {0} apples, so I'm sick for {day} days".format(5, day="three") # I ate 5 apples, so I'm sick for three days
"I ate {number} apples, so I'm sick for {day} days".format(number=5, day="three") # I ate 5 apples, so I'm sick for three days

number=5
day=three
"I ate {0} apples, so I'm sick for {1} days".format(number, day) # I ate 5 apples, so I'm sick for three days

"{0:<10}".format("hi") # 'hi        '
"{0:>10}".format("hi") # '        hi'
"{0:^10}".format("hi") # '    hi    '
"{0:=^10}".format("hi") # '====hi===='
"{0:!<10}".format("hi") # 'hi!!!!!!!!'

"{0:0.4f}".format(3.141592) # 3.1415
"{0:10.4f}".format(3.141592) # '    3.1415'
"{{and}}".format() # {and}
```

`count`
```python
a="hobby"
a.count('b') # 2
```
`find
```python
a="Life is too short"
a.find('o') # 9
a.find('q') # -1
```
`index`
```python
a="Life is too short"
a.index('o') # 9
a.index('q') # 오류 발생 substring not found
```
`join`
```python
",".join('hobby') # h,o,b,b,y
```
`upper`
```python
a="hi"
a.upper() # HI
```
`lower`
```python
a="HI"
a.lower() # hi
```
`lstrip`
```python
a=" hi    "
a.lstrip() # 'hi    '
```
`rstrip`
```python
a=" hi    "
a.rstrip() # '  hi'
```
`strip`
```python
a=" hi    "
a.strip() # 'hi'
```
`replace`
```python
a="Life is too short"
a.replace("Life", "Your leg") # Your leg is too short
```
`split`
```python
a="Python's favorite food is perl"
a.split() # ["Python's", "favorite", "food", "is", "perl"] 공백을 기준으로 나눔
b="a:b:c:d" 
b.split(":") # ["a", "b", "c", "d"]
```

:::tip
문자열String : 표현법 "", '', """, '''

이스케이프 코드, 연산, 인덱싱과 슬라이싱, 포매팅, 함수
:::

### 리스트List

```python
a=list() # []
b=[1,2,["life",4]]
```

`Indexing`
```python
a=[1,2,3]
a[0] + a[-1] # 4

b=[1,2,[3,4,5]]]
b[-1][1] # 4
```

`Slicing`
```python
a=[1,2,3,4,5]
a[:2] # [1,2]
```

`연산`
```python
[1,2,3] + [4,5] # [1,2,3,4,5]
[1,2] * 3 # [1,2,1,2,1,2]
a=[1,2,3,4]
str(a[2]) + "hi" # 3hi
```
`수정과 변경, 삭제`

```python
a=[1,2,3]
a[2]=4 # [1,2,4]
a[1:2]=['a','b','c'] # [1,'a','b','c', 4]
a[1:3]=[] # [1,'c',4]
del a[1] # [1,4]
```

`append`
```python
a=[1,2,3]
a.append([4,5]) # [1,2,3,[4,5]]
```

`sort`
```python
b=[1,4,3,2]
b.sort() # [1,2,3,4]
```

`reverse`
```python
b=[1,4,3,2]
b.reverse() # [4,3,2,1]
```

`index`
```python
b=[1,2,3]
b.index(3) # 2
```

`insert`
```python
b=[1,4,3,2]
b.insert(0,5) # [5,1,4,3,2]
```

`remove`
```python
b=[1,4,3,2,3]
b.remove(3) # [1,4,2]
```

`pop`
```python
b=[1,4,3,2]
b.pop(1) # [1,3,2]
```

`count`
```python
b=[1,4,3,2,1]
b.count(1) # 2
```

`extend`
```python
b=[1,2,3]
b.extend([4,5]) # [1,2,3,4,5]
```

:::tip
리스트List : 표현법 []

인덱싱과 슬라이싱, 연산, 수정과 변경, 삭제, 함수
:::

### 튜플Tuple

리스트는 항목값의 변화가 가능하고 튜플은 항목값의 변화가 불가능하다. 요소값에 변화를 주려고하면 오류가 발생한다.

:::warning
튜플은 항목값의 수정과 삭제가 불가능!
:::

`Indexing`
```python
b=(1,2,'a','b')
b[0] # 1
```

`Slicing`
```python
b=(1,2,'a','b')
b[1:] # (2,'a','b')
```

```python
('a','b') + (1,2) # ('a','b',1,2)
(1,2) * 2 # (1,2,1,2)
```

:::tip
튜플Tuple : 표현법 ()

인덱싱과 슬라이싱, 연산
:::

### 딕셔너리Dictionary

```python
dic={'name' : 'sujeong', 'birth' : '0704'} # key : value
dic[3] = [1,2,3] # {'name' : 'sujeong', 3:[1,2,3], 'birth' : '0704'}
del a[3] # {'name' : 'sujeong', 'birth' : '0704'}
dic['name'] # 'sujeong'
dic.get('phone') # 오류 발생
```

key는 변할 수 없는 값을 사용해야한다. 중복도 피하는 것이 좋다. 중복되는 key를 사용하면 하나를 제외한 쌍이 무시되기 때문이다.

:::warning
튜플은 key로 사용할 수 있지만 리스트는 불가능 하다.
:::

`함수`

`keys`
```python
dic={'name' : 'sujeong', 'birth' : '0704'} # key : value
dic.keys() # dict_keys(['name', 'birth']) 객체
list(dic.keys()) # ['name', 'birth']
```

`values`
```python
dic={'name' : 'sujeong', 'birth' : '0704'} # key : value
dic.values() # dict_values(['sujeong', '0704']) 객체
```

`items` : key와 value의 쌍
```python
dic={'name' : 'sujeong', 'birth' : '0704'} # key : value
dic.items() # dict_items([('name', 'sujeong'), ('birth', '0704')])
```

`clear`
```python
dic={'name' : 'sujeong', 'birth' : '0704'} # key : value
dic.clear() # {}
```

`get`
```python
dic={'name' : 'sujeong', 'birth' : '0704'} # key : value
dic.get('name') # 'sujeong'
dic.get('phone') # None
dic.get('phone', '없는 번호입니다.') # 없는 번호입니다. : default값!
```

`in`
```python
dic={'name' : 'sujeong', 'birth' : '0704'} # key : value
'name' in dic # True
'phone' in dic # False
```

:::tip
딕셔너리Dictionary : 표현법 {key:value}

수정과 변경, 삭제, 함수
:::

### 집합Set

중복을 허용하지 않고 순서가 없는 특징을 가진 자료형이다.

```python
s=set([1,2,3]) # {1,2,3}
set("Hello") # {"H", "e", "l", "o"}

# list, tuple로 변환
list(s) # [1,2,3]
tuple(s) # (1,2,3)
```

`연산`

```python
s1=set([1,2,3,4,5])
s2=set([4,5,6,7,8])

# 교집합
s1 & s2 # {4,5}
s1.intersection(s2) # {4,5}

# 합집합
s1 | s2 # {1,2,3,4,5,6,7,8}
s1.union(s2) # {1,2,3,4,5,6,7,8}

# 차집합
s1 - s2 # {1,2,3}
s1.difference(s2) # {1,2,3}
```

`함수`

`add`
```python
s=set([1,2,3]) # {1,2,3}
s.add(4) # {1,2,3,4}
```

`update`
```python
s=set([1,2,3]) # {1,2,3}
s1.update([4,5]) # {1,2,3,4,5}
```

`remove`
```python
s=set([1,2,3]) # {1,2,3}
s1.remove(2) # {1,3}
```

:::tip
집합Set : 표현법

연산, 함수
:::


`참과 거짓`
|자료형|참|거짓|
|------|---|--|
|문자열|"Python"|""|
|리스트|[1,2,3]|[]|
|튜플|(1,2,3)|()|
|딕셔너리|{"name" : "sujeong"}|{}|
|숫자|5|0|
|그 외|.|None|

```python
a=[1,2,3,4]
while a:
    a.pop() # 4 -> 3 -> 2 -> 1
```

:::tip
참과 거짓
:::


### 변수

변수를 만들 때는 =(assignment) 기호를 사용한다. 파이썬의 변수는 객체를 가리키는 것이고 `객체는 파이썬에서 사용되는 모든 것`이다.
객체는 자동으로 메모리에 생성되고 변수는 객체가 저장된 메모리의 위치를 가리킨다. 변수는 객체가 저장된 메모리의 위치를 가리키는 레퍼런스Reference라고도 한다.

```python
a=3
b=3
a is b # True
```
같은 객체의 메모리 주소를 가리킨다. 두 개의 변수가 같은 객체를 가리킨다면 `Reference Count`가 2라고 할 수 있다.

```python
import sys
sys.getrefcount(3) # 30
```
파이썬 내부적으로 3이라는 정수형 객체를 30개 참조하고 있다.

`활용`
```python
(a,b) = "python", "life"
c=d="food"
a,b=b,a # a="life", b="python"
```

메모리에서 삭제하려면 레퍼런스 카운트가 0이 되어야한다. 이것을 가비지 콜렉션Garbage Collection이라고도 한다.
```python
a=b=3
del(a)
del(b) # 3 삭제
```

`얕은 복사Deep copy`

```python
a=[1,2,3]
b=a
a[1]=4 # a=[1,4,3], b=[1,4,3]
```

`깊은 복사Shallow Copy`
```python
a=[1,2,3]
b=a[:] # 리스트 전체 복사하여 대입
a[1]=4 # a=[1,4,3], b=[1,2,3]

from copy import copy
b=copy(a)
b is a # False
```


:::tip
변수 : 표현법 =

활용
:::

## 제어문
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
:::danger
danger 박스!
:::


:::warning
워닝 박스!
:::
## 입출력
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
```python{2,3}
hello
여길 강조
여기도
```

## 클래스, 모듈, 패키지, 예외 처리, 함수
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## 정규표현식과 XML
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.