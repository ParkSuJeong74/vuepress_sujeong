---
next: true
sidebarDepth: 2
---
# DataAnalysis 이론

`엘리스`

1. 데이터 분석과 인공지능 스터디
2. 데이터 분석과 인공지능
3. 13주차
    - 13-01 
    - 13-02 :white_check_mark:
    - 13-03 
    - 13-04
    - 13-05

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

iloc는 파이썬 스타일 정수 인덱스의 인덱싱이자 슬라이싱이다. 결과는 loc와 동일하다.

```python
country.iloc[0]
country.iloc[1:3, :2]
```

ix라는 혼합형태가 있었지만 지금은 지원이 중단되었다.

DataFrame에 새로운 데이터를 추가하는 방법도 있다.

```python
df=pd.DataFrame(columns=['이름','나이','주소'])
df.loc[0] = ['박수정','26','서울']
df.loc[0, '주소'] = '경산'

df['전화번호'] = np.nan # 비우기
df.loc[0, '전화번호'] ='010-****-0063' # 추가
len(df) # 1 
```

컬럼을 선택할 수 있다. 이때 컬럼이 하나이면 Series, 리스트라면 DataFrame 형태로 나타난다.

누락된 데이터를 체크하는 것도 중요하다.

```python
df.isnull() # nan이나 none이면 True
df.notnull() # nan이나 none이 아니면 True

df.dropna() # 비어있는 경우 그 행 전체 지우기
df['전화번호'] = df['전화번호'].fillina('전화번호 없음') # 비어있는 경우 대체
```

### 연산

연산시 비어있는 값(NaN)을 대체해줄 수 있다.

```python
A = pd.DataFrame(np.random.randint(0, 10, (2, 2)), columns=['A', 'B'])      
B = pd.DataFrame(np.random.randint(0, 10, (3, 3)), columns=['B', 'A', 'C'])

A.add(B, fill_value=0) # 0으로 대체
# sub, mul, div 도 가능
```

집계함수도 모두 활용 가능하다.

```python
df=pd.DataFrame(data)
df['A'].sum() # 값이 반환됨
df.sum() # 각 값이 합계로 된 df가 반환됨
df.mean() # 각 값이 평균으로 된 df가 반환됨
```

### 정렬

```python
df.sort_values('col1') # 컬럼 값에 따라 오름차순으로 정렬
df.sort_values('col1', ascending=False) # 내림차순
df.sort_values(['col1', 'col2']) # col1 기준 -> 같은 경우 col2 기준

# col2를 기준으로 오름차순으로, col1를 기준으로 내림차순으로 정렬
sorted_df3=df.sort_values(['col2', 'col1'], ascending=[True, False])
```

### 조건으로 검색

masking 연산이 가능하다.

```python
import numpy as np
import pandas as pd
df = pd.DataFrame(np.random.rand(5, 2), columns=["A", "B"])

# 조건에 맞는 df의 row를 추출
df[(df['A']<0.5) & (df['B']>0.3)] 
df.query("A<0.5 and B>0.3") # 같은 결과
```

![image](https://user-images.githubusercontent.com/71163016/163326138-5839ffb2-fa1a-4fc2-8114-704a59d5d4c5.png)


만약 문자열이라면 다른 조건 검색도 가능하다.

```python
df['Animal'].str.contains("cat") # 포함하면 True, 포함하지 않으면 False
df.Animal.str.match("cat") # 일치하는지 검사
```

### 함수로 데이터 처리

`apply`
```python
def square(x):
    return x**2

df['Square'] = df['Num'].apply(square)

# 함수 없이 처리 가능
df['Square'] = df.Num.apply(lambda x:x**2)
```
![image](https://user-images.githubusercontent.com/71163016/163328712-abcf8b00-5240-47e8-8919-5b5e943ac078.png)

전화가 가능한 번호로 바꾸기 위해서 apply를 활용할 수 있다.

```python
def get_preprocess_phone(phone):
    mapping_dict={
        "공":"0",
        "일":"1",
        "이":"2",
        "삼":"3",
        "사":"4",
        "오":"5",
        "육":"6",
        "칠":"7",
        "팔":"8",
        "구":"9",
        "-":"",
        ".":"",
    }
    for key, value in mapping_dict.items():
        phone=phone.replace(key, value)
    return phone

df['preprocess_phone']=df['phone'].apply(get_preprocess_phone)
```

![image](https://user-images.githubusercontent.com/71163016/163329647-d7d0352b-3a28-43d4-8f0d-548dcde70375.png)

`replace`

apply 기능에서 데이터 값만 대체하고 싶을 때 사용한다. 함수가 필요없다.

```python
df["Sex"]=df.Sex.replace({'Male':0, "Famale":1})

df.Sex.replace({'Male':0, "Famale":1}, inplace=True) # 그대로 변환할때
```

### 그룹화

조건부로 집계를 하고 싶을 때 사용한다.

```python
df.groupby['key'].sum() # key를 기준으로 그룹화 후 합계
df.groupby(['key', 'data1']).sum()
```
![image](https://user-images.githubusercontent.com/71163016/163331371-b9dae575-1423-4b7e-9162-8a4479094c8b.png)


`aggregate`

그룹화하여 집계를 한번에 계산하는 방법이다.
```python
df.groupby('key').aggregate(['min', np.median, max])
df.groupby('key').aggregate({'data1': min, 'data2': np.sum})
```
![image](https://user-images.githubusercontent.com/71163016/163333324-ca46a00c-5aef-491a-95b6-2f3a2a46f33d.png)

`filter`

그룹 속성을 기준으로 데이터를 필터링 하는 방법이다.
```python
def filter_by_mean(x):
    return x['data2'].mean()>3
df.groupby('key').mean() # 평균값
df.groupby('key').filter(filter_by_mean) # True만 가져옴
```

![image](https://user-images.githubusercontent.com/71163016/163333999-6f8e6668-700d-489d-8719-c87bd4850428.png)


`apply`

그룹에 묶인 데이터에 함수를 적용한다.

```python
df.groupby('key').apply(lambda x:x.max() - x.min())
```
![image](https://user-images.githubusercontent.com/71163016/163334482-d938294b-667e-4b93-a892-11f13ac34f50.png)



`get_group`

그룹으로 묶인 데이터를 key 값으로 가져올 수 있다.

```python
df.head()
df.groupby('시도').get_group('충남')
len(df.groupby('시도').get_group('충남'))
```
![image](https://user-images.githubusercontent.com/71163016/163335022-68ce2c18-8896-4096-a26a-021fd23b9614.png)

### MultiIndex & pivot_table

인덱스를 계층적으로 만들 수 있다.

```python
# 행
df=pd.DataFrame(
    np.random.randn(4,2),
    index=[['A','A','B','B'], [1,2,1,2]],
    columns=['data1','data2']
)
```
![image](https://user-images.githubusercontent.com/71163016/163341289-33b3c5e2-8323-47ec-b36e-54ec6fb3ecdf.png)

```python
# 열
df=pd.DataFrame(
    np.random.randn(4,4),
    columns=[['A','A','B','B'], [1,2,1,2]]
)

df["A"]["1"] # indexing
```
![image](https://user-images.githubusercontent.com/71163016/163341305-a2c732dd-bdb7-4d97-9f9d-365ef19234b0.png)

`pivot_table`

데이터에서 필요한 자료만 뽑아서 새롭게 요약하고 분석할 수 있는 기능이다. 엑셀에서의 피봇 테이블과 같다.

`index`는 행 인덱스로 들어갈 key이고, `column`은 열 인덱스로 라벨링이 될 값이다. `value`는 분석할 데이터가 들어간다.

```python
df.pivot_table(
    index='sex', columns='class', values='survived',
    aggfunc=np.mean # value를 어떤 식으로 채울 것인지
)
```

![image](https://user-images.githubusercontent.com/71163016/163351644-f729f70f-dcae-4350-97cc-73deb58f10f6.png)


## Matplotlib

파이썬에서 데이터를 그래프나 차트로 시각화할 수 있는 라이브러리이다.

```python
import matplotlib.pyplot as plt
x=[1,2,3,4,5]
y=[1,2,3,4,5]
plt.plot(x,y)
plt.title("First Plot")
plt.xlabel("x")
plt.ylabel("y")

# fig, ax 수동 생성 : 결과는 같음
fig,ax = plt.subplots()
ax.plot(x,y)
ax.set_title("First Plot")
ax.set_xlabel("x")
ax.set_ylabel("y")
fig.set_dpi(300) # 크기
fig.savefig("fist_plot.png") # 저장해줌
```

![image](https://user-images.githubusercontent.com/71163016/163352355-512a0832-b8c7-4ef5-a845-e13ddd992ff7.png)

line plot이다.

### matplotlib의 구조

![image](https://user-images.githubusercontent.com/71163016/163352706-81f7d8ea-bdbd-4b06-b813-0c564dfd4884.png)

`figure` : 가장 넓은 부분(그래프를 모두 포함하는 도화지)

`title` : 제목

`x, y label` : 라벨

`axes` : 하나의 그래프

`Major tick` : 큰 눈금

`Minor tick` : 작은 눈금

`lagend` : 범례

여러개의 그래프를 그릴 수 있다.

```python
x=np.linspace(0, np.pi*4, 100) # 0~4pi 까지 100개의 구간
fig, axes=plt.subplots(2,1) # 2개의 그래프
axes[0].plot(x, np.sin(x))
axes[1].plot(x, np.cos(x))
```

![image](https://user-images.githubusercontent.com/71163016/163354141-bf472430-ce60-486f-adbb-c11e51792e03.png)


### line plot

```python
fig, ax=plt.subplots()
x=np.arange(15)
y=x**2
ax.plot(
    x,y,
    linestyle=":",
    marker="*",
    color="#524FA1"
)
```

![image](https://user-images.githubusercontent.com/71163016/163354861-df0f0bdc-536e-428b-b897-866bc54dba09.png)


```python
# Line Style
fig, ax=plt.subplots()
ax.plot(x,x,linestyle='-') # solid
ax.plot(x,x+2,linestyle='--') # dashed
ax.plot(x,x+4,linestyle='-.') # dashdot
ax.plot(x,x+6,linestyle=':') # dotted
```
![image](https://user-images.githubusercontent.com/71163016/163379840-74048ad7-247f-4e4e-bbea-5448f23599b4.png)

```python
# Color
ax.plot(x,x,color='r') # rgbcmyk
ax.plot(x,x+2,color='green')
ax.plot(x,x+4,color='0.8') # 회색조
ax.plot(x,x+6,color='#524FA1')
```
![image](https://user-images.githubusercontent.com/71163016/163379865-ca1da16d-d283-4db9-a00e-fa97bda7a188.png)

```python
# Marker
fig, ax=plt.subplots()
ax.plot(x,x,linestyle='.') # 점
ax.plot(x,x+2,linestyle='o') # 동그라미
ax.plot(x,x+4,linestyle='v') # 세모
ax.plot(x,x+6,linestyle='s') # 네모
ax.plot(x,x+8,linestyle='*') # 별
```
![image](https://user-images.githubusercontent.com/71163016/163379893-878a21b2-2dbf-4b4b-9011-e1a2f7fb9488.png)


```python
# 축 경계 조정
x=np.linspace(0, 10, 1000)
fig, ax=plt.subplots()
ax.plot(x,np.sin(x)) # sin 그래프
ax.set_xlim(-2, 12) # 시작, 끝 값
ax.set_ylim(-1.5, 1.5)
```
![image](https://user-images.githubusercontent.com/71163016/163379939-8fe25571-f844-46ae-9005-20e9dc983afe.png)


```python
# 범례
fig, ax=plt.subplots()
ax.plot(x,x, label='y=x') 
ax.plot(x,x**2, label='y=x*2') 
ax.set_xlabel('x') # 시작, 끝 값
ax.set_ylabel('y')
ax.lagend(
    loc='upper right', # lower, center / left
    shadow=True, # 범례 긤자
    fancybox=True, # 둥글게
    borderpad=2 # 여백 크기
)
```
![image](https://user-images.githubusercontent.com/71163016/163379954-20f53808-05d9-4acc-917f-55a4eb63a12a.png)


### Scatter

```python
fig, ax=plt.subplots()
x=np.arange(10)
ax.plot(
    x, x**2, 'o', # o 속성은 o형태로 이어지지 않는 그래프가 그려짐
    markersize=15, # 원 크기
    markerfacecolor='white', # 안쪽 색깔
    markeredgecolor='blue' # 바깥쪽 색깔
)
```

![image](https://user-images.githubusercontent.com/71163016/163372402-8de68714-76ec-4941-9249-a6f64f82a6c6.png)


```python
fig, ax=plt.subplots()
x=np.random.randn(50)
y=np.random.randn(50)
colors=np.random.randint(0,100,50)
sizes=500*np.pi+np.random.rand(50)**2
ax.scatter(
    x, y, c=colors, s=sizes, alpha=0.3 # 점의 중앙 위치, 색깔, 크기, 겹쳐서 보이게하는 속성
)
```

![image](https://user-images.githubusercontent.com/71163016/163373636-953623b8-7a6c-4808-815b-a5047e7e9429.png)

### Bar & Histogram

Bar plot
```python
x=np.arange(10)
fig, ax=plt.subplots(figsize=(12,4)) # 가로12, 세로4
ax.bar(x, x*2)
```

![image](https://user-images.githubusercontent.com/71163016/163371509-bdc53bf7-f2ad-4f87-a6cd-47db11bf3970.png)



```python
data=[x,y,z]
fig, ax=plt.subplots()
x_ax=np.arange(3) # 그래프 3개
for i in x_ax:
    ax.bar(x_ax, data[i],
    bottom=np.sum(data[:i], axis=0) # 시작 지정
ax.set_xticks(x_ax)
ax.set_xticklabels(['A', 'B', 'C'])
```

![image](https://user-images.githubusercontent.com/71163016/163371568-f73345d7-116d-4fac-bc19-bbf136c94c3b.png)

Histogram
```python
fig, ax=plt.subplots()
data=np.random.randn(1000)
ax.hist(data, bins=50) # 50개로 나눔
```

![image](https://user-images.githubusercontent.com/71163016/163371931-25c21f35-55a5-4914-a9d3-6271b37a4a6b.png)


### Pandas plot

pandas를 활용하여 그래프를 그리는 방법이 있다.

```python
df=pd.read_csv('./president_height.csv')
fig.ax=plt.subplots()
ax.plot(df['order'], df['height'], label='height')
ax.set_xlabel('order')
ax.set_ylabel('height')
```

![image](https://user-images.githubusercontent.com/71163016/163378332-8d700404-ef00-4fda-9e64-75dfc606a9f5.png)

`포켓몬 분석`

```python
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("./data/pokemon.csv")

fire = df[
    (df['Type 1']=='Fire') | ((df['Type 2'])=="Fire")
]

water = df[
    (df['Type 1']=='Water') | ((df['Type 2'])=="Water")
]

fig, ax = plt.subplots()
ax.scatter(fire['Attack'], fire['Defense'],
    color='R', label='Fire', marker="*", s=50)
ax.scatter(water['Attack'], water['Defense'],
    color='B', label="Water", s=25)
ax.set_xlabel("Attack")
ax.set_ylabel("Defense")
ax.legend(loc="upper right")

fig.savefig("plot.png")
```
![image](https://user-images.githubusercontent.com/71163016/163379019-c6317a57-64f9-40a6-ad42-d26d1e0d1f3f.png)


