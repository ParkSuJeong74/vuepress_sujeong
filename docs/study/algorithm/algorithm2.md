---
sidebarDepth: 2
---
# Data Structure

`엘리스`

1. 11주차
    - 11-05 :white_check_mark:

2. 12주차
    - 12-02
    - 12-04 
    - 12-05 


## 자료 구조

자료를 저장하는 구조이다. 저장한 자료에 접근하는 방법이 다양하다.

자료구조의 형태에 따라 장단점이 존재하며, 효율성을 위해 구현하고자 하는 프로그램의 성능을 고려하여 알맞은 자료구조를 선택해야한다.

`자료형` 어떤 자료가 식별될 수 있는 방법과 여러가지 연산, 즉 동작이 제공된다. 특정 분류에 따라 올바르게 표현하기 위한 정의과 구현이 자료형이다.

자료형에 따라 값의 해석 방법이 달라지고 연산방법도 달라진다.

`추상적 자료형` 어떤 자료와 그 자료에 대한 연산들의 수학적인 정의, 구현 방법이 명시되어 있지 않다. 어떻게 접근할 수 있는지 알 수 없는 것이다. 개념적으로 정의한 것이라고 할 수 있다.

`자료구조` 추상적 자료형에 연산 방식이 구체적이고 명확하게 구현된 것이 자료구조이다.

객체지향 프로그래밍에서 추상적 자료형은 인터페이스이고 자료구조는 클래스라고 할 수 있다. 

`인터페이스`는 추상 메서드만으로 이루어진 설계용 클래스이다. 구현 부분이 비어있어, 상속받는 클래스에서 이를 구현한다. 즉 구현은 하지 않고 명세만 하는 것이다.

```python
class MyInterface(mataclass=ABCMeta): # 추상클래스로 만들기 위한 메타클래스를 정의
    @abstractmethod # 추상 메서드임을 나타내는 데코레이션
    def func():
        pass
```

클래스가 상속을 받아 사용하는데, `필드`가 자료에 해당하고 `메서드`가 자료에 적용할 수 있는 연산이라고 할 수 있다.

```python
import queue
q=queue.Queue() # Queue 메서드가 자료 저장과 연산 방법을 갖추고 있다.
```

### 판단

얼마나 빠르게 문제를 해결할 수 있는지 판단해야한다. 보통 수행하는 명령의 수가 적을수록 시간이 덜 걸린다.

`시간복잡도` 알고리즘이 문제를 해결하는데 걸리는 시간을 정량화하여 나타냄. 최악의 경우에 대한 소요시간을 나타낸다.

`Big-O Notation` 최악 조건의 시간복잡도 기호, O()



## 배열Array과 연결리스트

### 리스트List

추상적 자료형이다. 순서가 존재하며, 일렬로 나열된 값들이 들어있다.

연산은 조회(임의의 위치의 자료 찾기), 삽입(임의의 위치에 추가), 삭제(임의의 위치 자료 제거)가 있다.

추상적 자료형인 리스트를 구현한 예시가 배열이다. python에서는 배열을 리스트라고 하는데, 이 리스트와는 다르다.

### 배열Array

배열에 저장되는 값들은 인덱스를 가진다. 즉 조회는 아주 쉽다.

추가시에는 새로운 자료가 추가되면서 다른 자료들의 순서가 변경되어야한다. 즉 기존의 자료들이 밀려나게 되는 것이다. 제거시에도 마찬가지이다.

![image](https://user-images.githubusercontent.com/71163016/163672856-53ff4cb2-dfe1-4620-a918-a8e640c0ee07.png)


### 연결리스트Linked List

리스트로 구현한 자료구조이다.

여러개의 노드를 저장하는 방식으로 구현한다. 노드는 자료와 포인터를 가진다.

![image](https://user-images.githubusercontent.com/71163016/163672875-ca1f3822-5cb6-4a29-8657-b6590c48f16d.png)

자료는 저장되는 값이고, 포인터는 자신의 다음 순서의 노드를 가리킨다.

즉, 특정 위치의 자료를 찾는 것이 어렵다. 시작점으로부터 멀수록 연산 횟수가 많아지는 것이다.

반대로 추가와 삭제시 자리를 찾고 난 후 연결을 끊어주고 다른 노드로 포인터를 연결한다면 가능하다.

인덱스를 이용하여 절대적인 순서를 표현하는 배열과는 다르게, 상대적인 순서를 표현하는 것이다.

|구분|배열|연결 리스트|
|---|-----|---------|
|장점|특정 위치의 자료 탐색|자료 삽입, 삭제|
|단점|자료의 삽입, 삭제|특정 위치 자료 탐색|

### 해시테이블

각 데이터value를 고유한 key에 대응하도록 저장하는 개념이다. key-value stroe를 구현한다.

입력을 put, 조회를 get으로 정의한다.

배열에 value를 저장하고 인덱스를 key로 이용하는 것은 공간이 비효율적이고 자료가 존재하는지 구분할 수가 없다.

key와 value를 다른 배열로 구현하면 공간의 낭비가 없고 자료가 없는 경우를 구분할 수 있지만 연산이 느려진다.

해시는 임의의 데이터에 해시 함수를 사용하여 고정된 길이의 데이터로 변환하는 것을 의미한다. 변환 과정을 해싱Hashing, 변환된 값을 해시값Hash Value라고 한다.

해시 알고리즘의 대표적인 예시는 SHA-256이다.

파이썬 내장함수 hash()를 이요하여 임의의 값의 정수 해시값을 만들 수 있다. 보안적인 이유로 반환값이 실행마다 달라진다.

```python
hash('a')
```

해시를 이용해 구현된 key-value store를 해시테이블hash table, 또는 딕셔너리Dictionary라고 한다.

인덱스가 겹치게 되는 것을 해시 충돌이라고 한다. 최대한 중복되는 해시값이 없도록 해야한다. 하지만 해시 함수 반환값의 경우의 수는 유한하고 입력값은 무한하기때문에 `비둘기집의 원리`로 인해 충돌은 발생하게 되어있다.

비둘기집의 원리는 n개의 비둘기 집에 n+1마리의 비둘기를 한집에 한마리씩 넣는 것은 불가능하다는 원리이다.

해시 충돌이 났을 경우 같은 인덱스에 연결리스트로 이어진 key-value store가 만들어진다. 이것을 `개별 체이닝`이라고한다. 인덱스를 연결 리스트로 만들어서 동일한 인덱스 값들을 연결하는 방식이다.

`오픈 어드레싱` 방식도 있다. 충돌이 발생했을때 자료를 저장하기 위해 빈공간을 탐색하는 것이다. 해시값과 일치하는 인덱스에 저장된다는 보장이 없어진다.

오픈 어드레싱에서 빈공간을 찾는 방법은 선형 탐사 방식이다. 원래 인덱스의 다음 인덱스부터 탐색하여 가장 가까운 빈공간을 찾는 것이다.


### 자료구조 구현하기

1. 문제를 파악(자료 파악, 자료의 의미 파악)

2. 자료구조에 필요한 기능 파악

3. 문제를 효율적으로 해결하는 자료구조 설계(목적에 맞아야한다)

`최댓값 기계`

여러 정수를 담을 수 있는 컨테이너를 가져야함

컨테이너는 리스트, 튜플, 딕셔너리 등 하나 이상의 요소를 담을 수 있는 것으로 내부적으로 container 클래스를 상속받은 서브 클래스이다.

컨테이너에 정수를 추가, 제거, 최댓값을 반환하는 메서드가 있어야한다.


```python
class maxMachine :
    def __init__(self) :
        # 객체 생성시 자동 호출
        self.numbers=[]

    def addNumber(self, n) :
        self.numbers.append(n)

    def removeNumber(self, n) :
        self.numbers.remove(n)

    def getMax(self) :
        return max(self.numbers)

def sorting(myList) :
    # myList를 내림차순으로 정렬하여 반환하는 함수를 작성하세요. 
    myMachine = maxMachine()
    result = []
    for elem in myList:
        myMachine.addNumber(elem)
    for i in range(len(myList)):
        myMax=myMachine.getMax()
        result.append(myMax)
        myMachine.removeNumber(myMax)
    return result
```


`구슬 넣기 문제`

파이프를 갖는 클래스를 구현해야함, 덱이 가장 효과적이다.

최악의 경우, 왼쪽으로 구슬을 삽입했을때 모두 한칸씩 이동해야한다.

O(n^2)

<details> 
<summary>자세히 보기</summary> 

> 배열

```python
class ListPipe:
    def __init__(self) :
        self.myPipe = []

    def addLeft(self, n) :
        self.myPipe.insert(0, n)

    def addRight(self, n) :
        self.myPipe.append(n)

    def getBeads(self) :
        return self.myPipe


def processBeads(myInput) :
    '''
    myInput[i][0] : i번째에 넣는 구슬의 번호
    myInput[i][1] : i번째에 넣는 방향
    '''
    myPipe = ListPipe()
    for bead, direction in myInput:
        if direction == 0:
            myPipe.addLeft(bead)
        elif direction == 1:
            myPipe.addRight(bead)
    result = myPipe.getBeads()

    return result
```

> 연결리스트

삽입시 모두 한번의 연산이다.

O(n)

```python
class LinkedListElement : # 연결리스트가 가지는 정점
    def __init__(self, val, ptr) :
        self.value = val
        self.myNext = ptr

class LinkedListPipe:
    def __init__(self) :
        self.start = None # 초기화
        self.end = None

    def addLeft(self, n) :
        if self.start == None and self.end == None:
            elem = LinkedListElement(n, None)
            self.start = elem
            self.end = elem
        else:
            elem=LinkedListElement(n, self.start)
            self.start = elem

    def addRight(self, n) :
        if self.start == None and self.end == None:
            elem = LinkedListElement(n, None)
            self.start = elem
            self.end = elem
        else:
            elem=LinkedListElement(n, None)
            self.end.myNext = elem
            self.end = elem

    def getBeads(self) :
        result=[]
        current=self.start
        while current != None:
            result.append(current.value)
            current = current.myNext
        return result

def processBeads(myInput) :
    '''
    myInput[i][0] : i번째에 넣는 구슬의 번호
    myInput[i][1] : i번째에 넣는 방향
    '''
    myPipe = LinkedListPipe()
    for bead, direction in myInput:
        if direction == 0:
            myPipe.addLeft(bead)
        elif direction == 1:
            myPipe.addRight(bead)
    result = myPipe.getBeads()
    return result
```

</details> 

`주문 관리 시스템`

주문 생성, 제거, 조회 기능을 가진 주문 관리 시스템


<details> 
<summary>자세히 보기</summary> 

> 배열

배열이 연결리스트보다 빠르다. 요소들이 컴퓨터에서 물리적으로 가깝기 때문이다. 연결리스트는 각각 별도의 객체들을 임의로 연결하는 방식으로 구현되지만 배열의 경우 컴퓨터 내부에서 매우 가깝게 위치하는 것이다.

주소가 인접해있는 것이라 빠르게 순회가 가능한 것이다. 


```python
class orderManager :
    def __init__(self) :
        self.data = []

    def addOrder(self, orderId) :
        self.data.append(orderId)

    def removeOrder(self, orderId) :
        self.data.remove(orderId)

    def getOrder(self, orderId) :
        # 주문번호 orderId가 몇 번째로 처리될지를 반환합니다.
        # 만약 주문번호 orderId가 존재하지 않으면 -1을 반환합니다. 

        for i in range(len(self.data)):
            if self.data[i] == orderId:
                return (i+1)
        return -1
```

> 연결 리스트

특정 노드를 삭제하기 위해서는 특정 노드에 접근해야함. 시작 노드부터 하나씩 찾아가야함. 이전 노드와 다음노드도 알고 있어야함

딕셔너리를 두고 모든 노드들의 정보를 저장함

해시테이블이라는 자료구조로 동작하는 딕셔너리는 key에 대한 value를 O(1)의 시간복잡도로 접근할 수 있다.

또한 이중 연결 리스트를 활용하여 이전 노드를 알아낸다. 포인터가 두개인 것이다.


```python
class LinkedListElement :
    def __init__(self, data, myPrev, myNext) :
        self.data=data
        self.myPrev=myPrev
        self.myNext=myNext
        
class orderManager :
    def __init__(self) :
        self.start=None
        self.end=None
        self.elems={} # 주문번호 저장 딕셔너리

    def addOrder(self, orderId) :
        elem=LinkedListElement(orderId, None, None)
        self.elems[orderId] = elem
        if self.start==None and self.end==None:
            self.start=elem
            self.end=elem
        else:
            self.end.myNext=elem
            elem.myPrev=self.end
            self.end=elem

    def removeOrder(self, orderId) :
        if self.start==None and self.end==None:
            return
        current=self.elems[orderId]
        if self.start==current and self.end==current:
            self.start=None
            self.end=None
        elif self.start==current:
            self.start=current.myNext
            (current.myNext).myPrev=None
        elif self.end==current:
            self.end=current.myPrev
            (current.myPrev).myNext=None   
        else:
            current.myPrev.myNext=current.myNext
            current.myNext.myPrev=current.myPrev
    def getOrder(self, orderId) :
        cnt=1
        current=self.start
        while current != None:
            if current.data==orderId:
                return cnt
            current=current.myNext
            cnt=cnt+1
        return -1
```

</details> 


## 스택과 큐

선형 구조에 속하는 자료구조이다. 컴퓨터 내에서 중요한 역할을 하는 가장 기본적인 형태의 자료구조이다.

### 스택Stack

한쪽 끝에서만 자료를 넣고 뺄 수 있는 자료구조로, push, pop, top, empty의 연산이 가능하다.

`push`는 자료를 넣는 연산이고, `pop`은 빼는 연산, `top`은 스택의 가장 위의 자료를 반환, `empty`는 비어있는지 여부를 반환하는 연산이다.

스택은 Last In First Out이다. 나중에 들어간 자료가 먼저 출력된다. 리포LIFO라고도 부른다.

`콜 스택Call Stack` : 현재 실행중인 함수(서브 루틴)을 저장한다. 가장 위에 있는 작업이 현재 수행중인 작업이다. `의존관계가 있는 상태`를 저장하기 때문에 어떤 일보다 `먼저 처리`되어야하는 일이 있으면 스택에 저장하면 된다.

재귀함수에서 활용된다.

```python
class Stack:

    def __init__(self) :
        self.myStack=[]

    def push(self, n) :
        self.myStack.append(n)

    def pop(self) :
        if self.empty() == 1:
            return
        else:
            self.myStack.pop()

    def size(self) :
        return len(self.myStack)

    def empty(self) :
        if self.size() == 0:
            return 1
        else:
            return 0

    def top(self) :
        if self.empty() == 1:
            return -1
        else:
            return self.myStack[-1]
```

스택 문제

<details> 
<summary>자세히 보기</summary> 

`올바른 괄호 판단`

아직 완성되지 않은 여는 괄호가 있을때 나중에 등장한 여는 괄호는 항상 먼저 등장한 여는 괄호보다 일찍 완성된다.

닫는 괄호를 처리할때 닫을 수 있는 여는 괄호가 존재하지 않은 경우 올바르지 않다.

여는 괄호가 남김없이 모두 완성된 경우가 올바른 경우이다. 즉 스택이 비어있어야한다.

```python
def checkParen(p) :
    s=Stack()
    for c in p:
        if c == '(':
            s.push(c)
        else:
            if s.empty() == 1:
                return "NO"
            s.pop()
    if s.empty() == 1:
        return "YES"
    return "NO"
```

`계산 순서 정하기`

괄호를 계산하는 순서 구하기

예를 들어, p='(()())' 일 경우, [3, 1, 1, 2, 2, 3] 을 반환

```python
def find_order(p) :
    s=Stack()
    result = [0] * len(p)
    cnt=1
    
    for i in range(len(p)):
        if p[i] == '(':
            s.push(i)
        else:
            index = s.top()
            s.pop()

            result[index]=cnt
            result[i]=cnt
            cnt=cnt+1
    return result
```

`수열 만들기`

모든 정수를 한 번씩 스택에 입력하는데 무조건 작은 수는 큰 수보다 먼저 입력함

수열을 만들수 있는지 아닌지 확인


```python
def is_stack_sequence(nums) :
    return "Yes"
```



`메모장`

괄호를 계산하는 순서 구하기

```python
def checkParen(p) :
    q=Stack.stack()
    
    return "NO"
```

</details>

### 큐Queue

입구와 출구가 각각 한쪽 끝에 존재하는 자료구조이다.

`push`는 자료를 넣는 연산이고, `pop`은 빼는 연산, `front`는 가장 앞쪽의 자료 반환, `back`은 가장 뒤의 자료 반환, `empty`는 큐가 비어있는지 여부를 반환하는 연산이다.

큐는 First In First Out이다. head 이상 rear 미만의 인덱스를 가지는 큐일때, head는 첫번째 요소를 가리키고 rear는 마지막 요소를 가리킨다. 아무것도 없을때는 head와 rear가 같은 곳을 가리킨다.

push는 rear 위치에 자료를 추가하고 rear를 1 증가시키며, pop은 head 위치의 자료를 제거하고 head를 1 증가시킨다. rear가 배열의 크기를 초과하는 경우를 보완하기 위해 `원형 큐`가 있다.

원형 큐는 rear나 hear가 큐의 끝에 도달하면 큐의 맨앞으로 보내 문제를 해결한다.

연결리스트로 구현한 큐인 링크드 큐도 있다. 삽입과 삭제가 제한되지 않는 점과 크기의 제한이 존재하지 않는다는 점이 편리하다.

```python
import queue
q=queue.Queue()
```

`스케줄링Scheduling` : 운영체제가 프로세스를 관리하는 기법으로 동시에 실행되는 여러 프로세스에 CPU 등의 자원 배정을 적절히 함으로써 성능 개선을 할 수 있다.

동시에 여러 프로세스를 수행하는 시분할 시스템을 비롯해 OS의 스케줄링 알고리즘은 대체로 큐를 기반으로 한다.

`병렬적`으로 이루어지는 작업들 사이 `의존관계가 없다`면 큐에 저장한다.

```python
class Queue:
    def __init__(self) :
        self.myQueue = []

    def push(self, n) :
        self.myQueue.append(n)

    def pop(self) :
        if self.empty() == 1:
            return
        del self.myQueue[0]

    def size(self) :
        return len(self.myQueue)

    def empty(self) :
        if self.size() == 0:
            return 1
        else:
            return 0

    def front(self) :
        if self.empty() == 1:
            return -1
        return self.myQueue[0]

    def back(self) :
        if self.empty() == 1:
            return -1
        return self.myQueue[-1]
```


## 트리Tree

선형 구조와 비선형 구조로 나뉜다.

`선형 구조`는 스택, 큐 : 자료가 순서를 가지고 연속되어 있음

`비선형 구조`는 트리, 그래프 : 선형 구조가 아닌 자료구조

그래프의 특수한 형태 중 하나이다. 그래프는 정점Vertex와 간선Edge로 이루어진 자료구조이다.

`정점` : 자료, 상태 등 무언가를 담고 있음

`간선` : 점정 간의 관계 표현(노드라고도 함)

`경로` : 어떤 정점에서 간선을 통해 다른 정점으로 이동할 때, 거치는 모든 정점

`사이클` : 처음 시작한 정점으로 다시 돌아오는 경로

간선은 방향이 있을 수도 있고 없을 수도 있다. 방향이 있는 간선을 포함한 그래프는 유향 그래프라고 한다.

이 때, 특별한 특징을 가진 그래프를 트리라고 한다. 트리가 갖는 성질은 다음과 같다.

- 모든 간선이 방향성을 갖는다
- 어떤 정점을 가리키는 정점의 개수가 최대 1개
- 어떤 정점에서 다른 정점으로 이동할 수 있는 경로가 1개
- 사이클을 가지지 않는다

`루트 노트Root Node` : 어떤 정점도 가리키지 않는 정점

`깊이` : 루트 노드로부터의 거리

`부모 노드Parent Node`와 `자식 노드Child Node` : 정점 A가 정점 B를 가리킬 때 A는 부모 노드, B는 자식 노드

`리프 노드` : 자식 노드가 없는 노드

계층적인 구조가 특징이다. 운영체제에서 파일을 분류하기 위해 사용하는 디렉토리(폴더)가 트리의 대표 예시이다.

### 트리 종류

트리의 종류는 여러가지가 있다.

`이진 트리` : 자식 노드를 최대 2개까지만 갖는 트리

`포화 이진 트리` : 리프 노트를 제외한 모든 정점이 항상 자식 2개씩 가지면서, 모든 리프 노드의 깊이가 동일한 트리이다. 높이가 h이면 정점의 갯수는 항상 2^h -1 개 이다.

`완전 이진 트리` : 마지막 깊이를 제외하고 모든 정점이 완전히 채워져 있고 마지막 깊이의 정점들은 가능한 왼쪽에 있는 트리(포화 이진 트리는 일종의 완전 이진 트리이자, 마지막 깊이의 정점이 오른쪽부터 일부 제거된 트리라고도 할 수 있다) 높이가 h이면 정점의 갯수는 2^(h-1) 이상 2^h -1 이하이다.

`정 이진 트리` : 리프 노드를 제외한 모든 노드들이 두개의 자식 노드를 가지고 있는 이진 트리, 즉 모든 정점은 0개 또는 2개의 자식 노드를 가짐

이진 트리의 표현방법은 다음과 같다.

```python
class TreeNode:
    def __int__(self):
        self.left = None # 왼쪽 자식 노드
        self.right = None # 오른쪽 자식 노드
```

완전 이진 트리는 배열로 간단하게 구현 가능하다. 각 정점에 번호를 줬을때 어떤 정점의 번호가 n이면 왼쪽 자식은 2n, 오른쪽 자식은 2n+1이다.

즉 배열로 표현이 가능한 것이다. 0번째 인덱스는 무시하고 1부터 사용한다.

또한 트리는 그래프의 일종이기 때문에 인접 행렬, 인접 리스트, 간선 리스트를 사용할 수도 있다.

Tree 클래스는 다음과 같은 멤버 변수를 갖고 있다.

`self.index` : 자기 자신의 번호(int 자료형)

`self.left` : 왼쪽 서브트리의 루트 노드(Tree 자료형) 왼쪽 서브트리가 없다면 None

`self.right` : 오른쪽 서브트리의 루트 노드(Tree 자료형) 오른쪽 서브트리가 없다면 None

### 트리 순회

트리의 모든 노드를 방문하는 순서이다. 트리에 들어있는 자료에 접근하기 위해서는 순회가 필요한 것이다.

선형 구조는 순서를 가지지만 비선형구조인 트리는 정해진 순서가 없다. 트리의 모든 노드를 방문하는 순서의 종류는 DFS(깊이 우선 탐색), BFS(너비 우선 탐색)이 있다. 그래프의 순회 방식과 동일하다.

`DFS` : 정점을 언제 방문하는지에 따라 순서가 달라지고 세가지 방법으로 나뉜다. 전위 순회, 중위 순회, 후위 순회

전체 트리를 순회하기 위해 서브 트리를 순회하는 방식으로 재귀 호출을 사용하는 알고리즘으로, DFS를 이해하기 위해서는 트리의 재귀적 특성을 알아야한다. 재귀 호출은 스택의 특성을 이용하므로 스택을 이용한다고 할 수 있다.

서브 트리 : 루트 노드를 제외한 하위의 트리 구조



`전위 순회preorder`

루트 방문 -> 왼쪽 서브트리 순회 -> 오른쪽 서브트리 순회

![image](https://user-images.githubusercontent.com/71163016/161990938-30bae54e-7258-401b-b5d1-631ebebf1455.png)



```python
def preorder(tree) :
    # tree를 전위 순회 하여 리스트로 반환하는 함수를 작성하세요.
    result = []
    result.append(tree.index)
    
    if tree.left != None:
        result = result + preorder(tree.left)
    if tree.right != None:
        result = result + preorder(tree.right)
    return result
```


`중위 순회inorder`

왼쪽 서브트리 순회 -> 루트 방문 -> 오른쪽 서브트리 순회

![image](https://user-images.githubusercontent.com/71163016/161990698-72c057d8-3a7d-4b8a-8122-2ca9dd5ade88.png)

```python
def inorder(tree) :
    # tree를 중위 순회 하여 리스트로 반환하는 함수를 작성하세요.
    result = []

    if tree.left != None:
        result = result + inorder(tree.left)
    result.append(tree.index)
    if tree.right != None:
        result = result + inorder(tree.right)
    return result
```

`후위 순회postorder`

왼쪽 서브트리 순회 -> 오른쪽 서브트리 순회 -> 루트 방문

![image](https://user-images.githubusercontent.com/71163016/161990764-7e81af45-ed31-420c-b9af-6b00a9f749c9.png)

```python
def postorder(tree) :
    # tree를 후위순회 하여 리스트로 반환하는 함수를 작성하세요.
    result = []
    if tree.left != None:
        result = result + postorder(tree.left)
    
    if tree.right != None:
        result = result + postorder(tree.right)
    result.append(tree.index)
    return result
```

> 이진트리 만들기(수정해야함12-02-1 실습3)

```python
# 어떤 트리의 루트 노드를 가지고 있음
class Tree:
    def __init__(self, i, l, r) :
        self.index = i
        self.left = l
        self.right = r
    # 새로운 노드가 현재 노드의 자식으로 추가되어야함
    def addNode(self, i, l, r) :
        '''
        트리 내의 정점 i에 대하여 왼쪽자식을 l, 오른쪽 자식을 r로
        설정해주는 함수를 작성하세요.
        '''
        if self.index == None or self.index == i:
            self.index = i
            self.left = Tree(1, None, None) if l != None else None
            self.right = Tree(1, None, None) if r != None else None

            return True
        else :
            flag = False
            if self.left != None:
                flag = selef.left.addNone(i, l, r)
            
            if flag ==
```


`BFS`

큐 자료구조를 이용하여 구현한다. 현재 정점과 이웃한 정점일수록 먼저 방문한다. 즉 FIFO 자료구조인 큐를 이용한다.

큐에는 루트 노드부터 들어가고 이웃한 자식 노드가 들어간 후 pop한다.

![image](https://user-images.githubusercontent.com/71163016/161991209-bc96abc5-28d9-4496-ad0c-74242e783895.png)

```python
from queue import Queue

def BFS(tree) :
    # tree를 BFS 하여 리스트로 반환하는 함수를 작성하세요.
    q = Queue()
    q.put(tree)
    result = []
    
    while len(q.queue) > 0: # 큐에 뭐가 들어가 있으면 반복
        cur = q.get() # 큐에서 하나 가져옴
        if cur == None:
            continue # pass
        result.append(cur.index) # 방문

        # 큐에 넣어줌
        q.put(cur.left)
        q.put(cur.right)
    return result
```

### 이진트리 활용

정렬을 유지하면서 추가와 삭제시(업 다운 게임) 시간 복잡도

i. 배열 : `O(n)` 추가하거나 삭제할 때마다 옮겨야하는 경우 / 탐색 : `O(log(2)n)` 중간값과 비교 반복

ii. 이진 탐색 : `O(log(2)n)` 항상 정렬된 상태 유지, 어떤 정점의 왼쪽 서브 트리는 같거나 작은 정점만 있고 오른쪽 서브트리는 큰 정점으로만 이루어져 있다(탐색, 추가 쉬움), 삭제시 오른쪽 서브트리 중 가장 왼쪽에 있는 정점이 자리를 대신함 / 오름차순 : 중위 순회

`문제점 : 편향 이진 트리`

한쪽으로 편향된 이진 탐색 트리 -> 이진 탐색 트리의 장점을 살리기 힘듬 -> `자가 균형 이진 탐색 트리`(레드블랙 트리)를 사용함

![image](https://user-images.githubusercontent.com/71163016/162398286-83cccbdf-9695-4d18-b050-2ecbd0167838.png)


### 트리 실습

높이 구하기

![image](https://user-images.githubusercontent.com/71163016/162399052-7a04a63e-cd0d-43fd-9b52-bd13e115cb68.png)

이 경우 높이는 3이다. DFS로 순회하다보면 리프 노드에 도달하게 되는데, 이때 각 노드가 루트 노드로 부터 얼마나 떨어져 있는지 계산하여 가장 큰 값에 1을 더하면 높이를 계산할 수 있다.

```python
def getHeight(myTree) :
    if myTree == None:
        return 0
    else:
        return 1+max(getHeight(myTree.left), getHeight(myTree.right))
```

너비 구하기

`레벨` 깊이가 같은 노드들의 집합

너비가 가장 큰 레벨과 그 레벨의 너비를 계산한다. 루트 노드부터 1로 시작한다. 같은 레벨이 노드는 같은 행에 위치하고 한 열에는 하나의 정점만 위치한다.

한 정점의 왼쪽 서브 트리의 정점들은 모두 그 정점보다 왼쪽의 열에 위치하고 오른쪽 서브 트리의 정점들은 모두 그 정점보다 오른쪽 열에 위치해야한다.

![image](https://user-images.githubusercontent.com/71163016/162399959-3b2f1536-648b-4a0a-9878-82f636f9fc67.png)

가장 큰 너비는 레벨 2의 4이다. 깊이를 구하면서 행을 구할 수 있을까?

왼쪽 서브 트리의 정점들의 열이 모두 확정되었다면 그 정점의 열도 확정이 가능하다. 그리고 오른쪽 서브 트리의 정점들의 위치를 계산한다. 즉 중위 순회를 사용한다.


> (수정해야함12-02-1 실습5)
```python
# tree.py
class Tree:
    def __init__(self, i, l, r) :
        self.index = i
        self.left = l
        self.right = r
        self.depth = -1

    def setDepth(d):
        self.depth = d

    def addNode(self, i, l, r) :
        if self.index == None or self.index == i :
            self.index = i
            self.left = Tree(l, None, None) if l != None else None
            self.right = Tree(r, None, None) if r != None else None
            return True

        else :
            flag = False

            if self.left != None :
                flag = self.left.addNode(i, l, r)

            if flag == False and self.right != None :
                flag = self.right.addNode(i, l, r)

            return flag

# getWidth.py
def inorder(tree, depth):
    result=[]
    if tree.left != None:
        result += inorder(tree.left, depth+1)
    tree.setDepth(depth)
    result.append(tree)
    if tree.right != None:
        result += inorder(tree.right, depth+1)

def getWidth(myTree) :

    result = inorder(myTree, 1)
    n=len(result)

    # 정점의 갯수는 1000개 이하
    # 깊이의 최댓값은 1000
    left = [1001 for i in range(1001)]
    right = [-1 for i in range(1001)]
    maxDepth = 0

    for i in range(n):
        d=result[i].depth
        left[d] = min(left[d], i)
        right[d] = max(left[d], i)

        maxDepth = max(maxDepth, d)

    ansDepth = 0
    ans = 0

    for i in range(1, maxDepth+1):
        temp right
    return (0, 0)

```

## 우선순위 큐와 힙Heap

우선순위가 높은 원소가 먼저 출력되는 추상적 자료형

우선순위 큐를 단순하게 배열로 구현한다면 입력은 O(1), 출력은 O(n)의 시간 복잡도를 가진다. 우선순위가 가장 높은 원소를 찾는 과정과 제거하는 과정이 비효율적이다.

### 힙Heap

최솟값 또는 최댓값을 빠르게 찾기 위해 고안된 완전 이진 트리이다.

`최대 힙Max Heap` 부모 노드는 항상 자식 노드보다 큰 값을 가진다.

`최소 힙Min Heap` 부모 노드는 항상 자식 노드보다 작은 값을 가진다.

```python
import heapq # 최소 힙을 사용할 수 있다.
```
최소힙으로 최대힙을 사용하려면 값을 저장할 때 -1을 곱한 값을 저장하면 된다. -1d을 곱함으로써 최댓값과 최솟값이 반전되는 것이다. 이 방법은 힙이 저장하는 값이 수number일때만 유효하다.

힙은 완전 이진 트리의 특성을 유지해야한다. 항상 입력된 자료는 마지막 레벨의 가장 오른쪽 자리에 채워진다.

![image](https://user-images.githubusercontent.com/71163016/162444753-27b71962-16e6-4af2-b0fa-24da73a502df.png)

부모 노드가 자신보다 작을때까지 자리를 변경하는 것이다.

즉, 부모 노드와의 대소관계와 완전 이진 트리의 특성을 유지한채 자료를 입력하면 된다.

최악의 경우 새로운 최솟값이 입력되는 경우 루트 노드까지 거슬러 올라간다. 이때의 연산속도는 트리의 높이와 비례하여 시간복잡도는 O(log(2)n)이다.

출력을 할때는 무조건 루트 노드부터 한다.

> 최소 힙 구현 : no heapq(설명 다시 12-02-2 실습1)

```python
class PriorityQueue:
    def __init__(self) :
        self.data = [0]

    def push(self, value) :
        # value 삽입
        self.data.append(value)
        index=len(self.data) - 1
        
        # 루트 노드가 되면 종료
        while index != 1:
            if self.data[index//2] > self.data[index] : # 부모와 자식 자리 바꿈
                temp = self.data[index]
                self.data[index] = self.data[index//2]
                self.data[index//2] = temp
                index = index//2
            else:
                break

    def pop(self) :
        # 우선순위가 가장 높은 원소를 제거합니다.
        if len(self.data) == 1:
            return

        # 마지막 노드를 루트 노드 자리로
        self.data[1] = self.data[-1]
        self.data.pop()
        index = 1
        while True:
            priority = -1
            # 아무 자식도 없는 경우
            if len(self.data) -1 < index * 2:
                break
            # 왼쪽 자식만 있는 경우
            elif len(self.data) -1 < index * 2 +1:
                priority = index * 2
            else:
                if self.data[index*2] < self.data[index*2 + 1]:
                    priority = index*2
                else:
                    priority = index*2 +1
            if self.data[index] > self.data[priority]:
                temp=self.data[index]
                self.data[index] = self.data[priority]
                self.data[priority] = temp

                index = priority
            else:
                break

    def top(self) :
        #우선순위가 가장 높은 원소를 반환합니다. 만약 우선순위 큐가 비어있다면 -1을 반환합니다.
        if len(self.data) == 1:
            return -1
        else:
            return self.data[1]
```

> 최소 힙 구현 : heapq(설명 다시 12-02-2 실습1)

```python
import heapq

class PriorityQueue:
    def __init__(self) :
        self.data = []

    def push(self, value) :
        heapq.heappush(self.data, value)

    def pop(self) :
        if len(self.data) > 0:
            heapq.heappop(self.data)        

    def top(self) :
        if len(self.data) == 0:
            return -1
        else:
            return self.data[0]
```

> 최대 힙 구현 : heapq(설명 다시 12-02-2 실습2)

```python
import heapq

class PriorityQueue:
    def __init__(self) :
        self.data = []

    def push(self, value) :
        heapq.heappush(self.data, -value)

    def pop(self) :
        if len(self.data) > 0:
            heapq.heappop(self.data)        

    def top(self) :
        if len(self.data) == 0:
            return -1
        else:
            return -self.data[0]
```

> 절댓값 힙 구현 : heapq(설명 다시 12-02-2 실습3)

```python
import heapq

class PriorityQueue:
    def __init__(self) :
        self.data = []

    def push(self, value) :
        # 힙에 정수 x를 저장할 때 (x의 절댓값, x의 값) 형태의 튜플을 저장하는 방법으로 구현
        heapq.heappush(self.data, (abs(value), value))
    def pop(self) :
        if len(self.data) > 0:
            heapq.heappop(self.data)        

    def top(self) :
        if len(self.data) == 0:
            return -1
        else:
            return self.data[0][1]
```

> 힙정렬 구현 : heapq(설명 다시 12-02-2 실습4)

```python
import heapq
class PriorityQueue:
    def __init__(self) :
        self.data = []

    def push(self, value) :
        heapq.heappush(self.data, value)

    def pop(self) :
        if len(self.data) > 0:
            heapq.heappop(self.data)  
            
    def top(self) :
        if len(self.data) == 0:
            return -1
        else:
            return self.data[0]          

def heapSort(items) :
# items에 있는 원소를 heap sort하여 리스트로 반환하는 함수를 작성하세요.
    result = []

    pq = PriorityQueue()
    for item in items:
        pq.push(item)

    for i in range(len(items)):
        result.append(pq.top())
        pq.pop()

    return result
```

> 자료 구조 문제집, 우선순위 큐와 힙 실습 5,6


