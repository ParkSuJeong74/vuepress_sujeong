---
next: true
sidebarDepth: 2
---
# dataAnalysis

`엘리스`

1. 데이터 분석과 인공지능 스터디
2. 데이터 분석과 인공지능
3. 13주차

## Numpy

Numerical Python. Python에서 대규모 다차원 배열을 다룰 수 있게 도와주는 라이브러리다. 대부분의 데이터(음성, 사진 등)는 `숫자 배열`이다. python list보다 빠른 연산과 효율적인 메모리 관리가 가능하다.

### array

```python
list(range(10)) # python list

import numpy as np
np.array([1,2,3,4,5]) # numpy array([1,2,3,4,5])
np.array([1.2 ,2,3,4,5]) # array([1.2 ,2. ,3. ,4. ,5. ])
np.array([1,2,3,4], dtype='float') # array([1. ,2. ,3. ,4. ,5. ])
np.array([[1, 2],
          [3, 4]])
```

python list와는 다르게 단일 타입으로만 구성된다.

```python
arr = np.array([1,2,3,4], dtype=float)

type(arr) # array
arr.dtype # dtype('float64')
arr.astype(int) # array(1,2,3,4)
```

`배열 데이터타입`
|dtype|설명|표현|
|------|---|--|
|int|정수|i, int_, int32, int64, i8|
|float|실수|f, float_, float32, float64, f8|
|str|문자열|str, U, U32|
|bool|부울|?, bool_|

`다양한 배열`
```python
np.zeros(5, dtype=int) # [0,0,0,0,0]
np.ones((2, 3), dtype=float) # [1,1,1],[1,1,1]
np.arange(0, 10, 2) # [0,2,4,6,8]
np.linspace(0, 1, 5) # [0, 0.25, 0.5, 0.75, 1]

np.random.random((2,2)) # 인자로 튜플(shape 지정) 2*2 행렬
np.random.normal(0,1,(2,2)) # 평균, 표준편차, shape(2*2)
np.random.randint(0,10,(2,2)) # 0~10 사이, shape(2*2)
```

문제
```python
import numpy as np
#0부터 5사이 랜덤한 값이 담긴 3x5 array를 만들어 봅시다!
array=np.random.randint(0,5,(3,5))
```

:::tip
numpy로 배열 만들기
:::

배열의 속성은 다양하다.

```python
x=np.random.randint(0, size=(2, 4)) # array([[2,3,9,0], [4,2,1,7]])

x.ndim # 2(2차원 행렬)
x.shape # (2, 4)
x.size # 8
x.dtype # dtype('int64')

# indexing : 인덱스로 값을 찾아냄
x[0] = 7
# Slicing : 인덱스 값으로 배열의 부분을 가져옴
x[:4] # 0,1,2,3
x[:4:2] # 0,2
matrix[0:2,1:4]) # 2치원일 경우, 인덱스 0부터 인덱스 1까지, 열은 인덱스 1부터 인덱스 3까지
```

### reshape

```python
x=np.arange(8)
x.shape # (8, ) 1차원 배열
x2=x.reshape((2, 4)) # 2차원 배열로 변경 (2, 4)

# concatenate : 이어붙이기
x=np.array([0,1,2])
y=np.array([3,4,5])
np.concatenate([x, y]) # [0,1,2,4,5]

matrix=np.arange(4).reshape(2,2) # [[0,1],[2,3]]
np.concatenate([matrix, matrix], axis=0) # 수직으로 붙이기
np.concatenate([matrix, matrix], axis=1) # 가로로 붙이기

# split : 나누기
upper, lower = np.split(matrix, [1], axis=0) # 1번째 인덱스 아래 가로로 자름
```

### 기본 연산

```python
x=np.arange(4) # 0,1,2,3
x+5 # 5,6,7,8
x-5 # -5,-4,-3,-2
x*5 # 0,5,10,15
x/5 # 0,0.2,0.4,0.6
# 다차원 행렬에서도 사용 가능하다!
```

### 브로드캐스팅Broadcasting

shape이 다른 array끼리 연산한다. 예를 들면, 3*3행렬인 matrix와 5의 연산이다.

```python
matrix + 5 # [5,5,5,],[5,5,5],[5,5,5]를 더하는 것과 같다!
matrix + np.array([1,2,3]) # [1,2,3],[1,2,3],[1,2,3]를 더하는 것과 같다!

np.arange(3).reshape((3,1)) + np.arange(3)
```

![image](https://user-images.githubusercontent.com/71163016/163196489-5ee571fb-9b3a-4b2b-b5a0-49048b881124.png)

### 집계 함수

```python
x=np.arange(8).reshape(2,4)
np.sum(x) # 28, 합계
np.min(x) # 0
np.max(x) # 9
np.mean(x) # 3.5
np.std(x) # 표준 편차

np.sum(matrix, axis=0) # 세로 방향 합
np.sum(matrix, axis=1) # 가로 방향 합

```
### 마스킹 연산
True, False array를 통해서 특정 값들을 뽑아내는 방법이다.

```python
x=np.arange(5)
x<3 # # [True,True,True,False,False]
x>5 # [False,False,False,False,False]
x[x<3] # 3 미만인 값만 출력
```


> 양치기 소년의 거짓말 횟수
```python
import numpy as np

daily_liar_data = [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0]

# 양치기 소년이 거짓말을 몇 번 했는지 구하여 출력해주세요.
liar_array=np.array(daily_liar_data)
print(np.size(liar_array[liar_array<1]))
```

## Pandas
구조화된 데이터를 효과적으로 처리하고 저장할 수 있는 파이썬 라이브러리이다. Array 계산에 특화된 numpy를 기반으로 만들어졌다.

### Series
numpy array가 보강된 형태로 Data와 Index를 가지고 있다.

```python
import pandas as pd
data=pd.Series([1,2,3,4])
data2=pd.Series([1,2,3,4], index=['a','b','c','d'])
data2['a'] # 1
```

딕셔너리로 만들 수 있다.

```python
population_dict={
    'korea':5180,
    'china':141500,
    'usa':32676,
}
population==pd.Series(population_dict) # key는 index, value는 data, dtype은 int64
population.values # numpy array
```

### DataFrame
여러개의 Series를 모아서 행과 열을 이룬 데이터이다.
```python
gdp=pd.Series(gdp_dict)
country=pd.DataFrame({
    'population':population,
    'gdp':gdp
})

country.index # ['korea','china','usa']
country.columns # ['gdp', 'population']
type(country['gdp']) # pandas.core.series.Series

gdp_per = country['gdp'] / country['population']
country['gdp_per'] = gdp_per # 추가 가능
```

저장과 불러오기도 가능하다.

```python
country.to_csv('./country.csv') # comma sparated values
country.to_excel('country.xlse')

country=pd.read_csv('./country.csv')
country=pd.read_excel('country.xlse')
```

### Indexing과 Slicing

```python
country.loc['usa'] # usa 데이터만 출력, Name이 usa
country.loc['japan':'korea', :'population']
```

loc는 명시적인 인덱스를 참조하는 인덱싱이자 슬라이싱이다.


![image](https://user-images.githubusercontent.com/71163016/163306818-280b838f-251f-465e-9f4a-d5f4f352afeb.png)

> 과학적 표기법 : 1.40925e+09는 *(10^9)를 뜻함