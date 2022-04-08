---
sidebarDepth: 2
---
# Data Structure

`엘리스` 12주차 강의 내용 일부가 포함됩니다. 이 외 검색 등으로 알게된 내용도 추가될 예정입니다.

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

> 이진트리 만들기

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


```

너비 구하기

`레벨` 깊이가 같은 노드들의 집합

너비가 가장 큰 레벨과 그 레벨의 너비를 계산한다. 루트 노드부터 1로 시작한다. 같은 레벨이 노드는 같은 행에 위치하고 한 열에는 하나의 정점만 위치한다. 

![image](https://user-images.githubusercontent.com/71163016/162399959-3b2f1536-648b-4a0a-9878-82f636f9fc67.png)

한 정점의 왼쪽 서브 트리의 정점들은 모두 그 정점보다 왼쪽의 열에 위치하고 오른쪽 서브 트리의 정점들은 모두 그 정점보다 오른쪽 열에 위치해야한다.