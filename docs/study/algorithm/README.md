---
next: true
sidebarDepth: 2
---
# Algorithm

`엘리스` 알고리즘 스터디 강의와 11주차 강의 내용 일부가 포함됩니다. 이 외 검색 등으로 알게된 내용도 추가될 예정입니다.

## 알고리즘

알고리즘은 문제 해결의 절차 혹은 방법을 뜻한다.

### 재귀 호출
재귀 호출은 함수 내부에서 자기 자신을 호출하는 방법이다. 함수에서만 사용되기 때문에 재귀 호출 함수, 또는 재귀 함수라고 불린다.
```python
def adder(n):
    if n == 1:
        return 1
    else:
        return n+adder(n-1) # 재귀 호출
```

재귀란 본래의 곳으로 다시 돌아온다는 뜻을 가지고 있으며, 한번 호출되면 본래 함수가 정의된 곳으로 다시 돌아오기 때문에 재귀 호출이라는 이름이 붙었다.

재귀 호출은 계속 반복한다기 보다는, 코드를 한 줄씩 실행한다는게 정확하다.

```python
def main():
    x=0
    x=adder(2)
    print(x) # 3
```

`스택Stack`

컴퓨터가 함수를 호출하면 스택에서 함수의 코드를 한 줄씩 실행시키고 반환값을 반환한다.
재귀 호출을 사용할 때는 탈출 조건을 잘 설정해서 Stack을 무한하게 사용하지 않도록 해줘야한다.

`Factorial`

Factorial(n)은 1부터 n까지의 곱을 뜻한다.
```python
def Factorial(n):
    # 탈출 조건 명시
    if n == 1:
        return 1
    return n*Factorial(n-1)
```

`이진수 변환`

주어진 십진수를 이진수로 바꾸는 작업이다. 더 나눌 수 없을 때까지 2로 나눠야한다. 그리고 마지막으로 남은 몫과 모든 나머지 값들을 아래서부터 위로 써주면 이진수로 표현할 수 있다.

> 19 = 16 * 1 + 8 * 0 + 4 * 0 + 2 * 1 + 1 * 1

```python
def convertBinary(n):
    if n==1:
        return "1"
    return convertBinary(n//2) + str(n%2)
```

`거듭제곱`

거듭제곱은 m을 n회 곱하는 식으로 작성한다.

```python
def getPower(m, n):
    if n==0:
        return 1
    return getPower(m, n-1) * m
```

`피보나치 수열`

피보나치 수열은 첫째 항, 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열이다.

> F(n) = F(n-1) + F(n-2) (n ≥ 2)

```python
def fibo(n):
    if n==2 or n==1:
        return 1
    else:
        return fibo(n-1) + fibo(n-2)
        
def main():
    n = int(input())
    print(fibo(n))
```

`문자열 포함관계 조사`

A 문자열 안에 있는 모든 character가 B 문자열에 모두 포함되어 있는지 확인해서 True, False를 반환한다.

> A = mef, B = myself  => True

```python
def is_A_in_B(A, B):
    if len(A) <= 0:
        return True
    
    if A[0] in B:
        return is_A_in_B(A[1:], B)
    
    else:
        return False


def main():
    A, B = input().split()
    
    print(is_A_in_B(A, B))
```


`배열의 합`

> 1 2 3 4 5   => 15

```python
def arraySum(arr):
    if len(arr)<=0:
        return 0
    else:
        return arraySum(arr[1:]) + arr[0]

def main():
    arr = [int(x) for x in input().split()]
    print(arraySum(arr))
```

`문자열 뒤집기`

입력으로 문자열이 주어질 때, 주어진 문자열을 거꾸로 출력하는 프로그램

```python
def stringReverse(string):
    if len(string) == 0:
        return ""
    elif len(string) == 1:
        return string[0]
    else:
        return string[-1:] + stringReverse(string[1:-1]) + string[:1]

def main():
    string = input()
    print(stringReverse(string))
```


### 완전 탐색

가능한 모든 경우를 살펴보는 과정을 완전 탐색이라고 한다. 브루트포스Brute-Force(무식하게 푼다) Search라고도 한다.

`연속 부분 최대 합 구하기`

```python
import sys
INITIAL_VALUE = sys.maxsize * -1

def bruteForce(arr):
    result = INITIAL_VALUE
    n = len(arr)
    
    for i in range(n):
        for j in range(i, n):
            if result < sum(arr[i:j+1]):
                result = sum(arr[i:j+1])
    return result
def main():
    arr = [int(x) for x in input().split()]
    print(bruteForce(arr))
```

`소수 개수 구하기`

소수는 1과 자기 자신으로만 나누어 떨어지는 수이다. 양수 n이 주어질 때, 1부터 n까지 몇 개의 소수가 있는지 구한다.

```python
# 매개변수 n이 소수인지 판단하는 함수
def isPrime(n):
    if(n!=2):
        for i in range(2, n):
            if(n%i == 0):
                return False
    return True

# 1부터 n까지의 수 중 소수의 개수를 반환하는 함수
def getPrimeCount(n):
    count = 0
    for i in range(2, n+1):
        if isPrime(i):
            count+=1
    return count

def main():
    n = int(input())
    print(getPrimeCount(n))
```

알고리즘이 좋을 수록 낮은 시간 복잡도가 낮아서 빠르게 계산하고 문제를 해결할 수 있다. 시간 복잡도는 코드가 동작하는데 걸리는 시간을 수학적으로 표현한 것이다.

`선형 시간 복잡도`는 상수 시간 복잡도라고도 한다. 매개변수의 크기와 무관하게 소요시간이 모두 같다. 어떤 실행이 단번에 완료된다면 상수시간 복잡도라고 한다.

```python
def time_complexity_constant():
    print("hello world")
```

기호로는 `O(1)`로 표현한다.

`로그 시간 복잡도`는 매개변수의 크기가 제곱이 될 때마다 소요시간이 늘어난다. log(n)에 비례한다고 할 수 있다.

```python
def time_complexity_log():
    while n != 0:
        print("hello world")
        n = n // 10 # 
```



### 분할 정복법
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

### 탐욕적 기법
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.