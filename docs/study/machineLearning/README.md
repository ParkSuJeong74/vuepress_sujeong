---
sidebar: auto
---
# MachineLearning

`엘리스`

1. 17주차

## 퍼셉트론Perceptron
### 딥러닝 개론
인공지능(Artificial Intelligence) > 머신러닝(Machine Learning) > 딥러닝(Deep Learning)

딥러닝이란?

머신러닝 방법론 중 하나로, 인공 신경망에 기반하여 컴퓨터에게 사람의 사고방식을 가르치는 방법이다. 생물학의 신경망(neuron)에서 영감을 얻은 학습 알고리즘으로 사람의 신경 시스템을 모방한다.

Neuron System : 사람의 신경 시스템, 가장 작은 정보처리 단위인 뉴런, input -> 전달 -> output

인공 신경망의 특징 : 모델 스스로 데이터의 특성을 학습하여 지도, 비지도 학습 적용, input(데이터) -> hidden layer -> output(회귀분석, 분류, 패턴 파악)


### 퍼셉트론

이전 : 사람이 데이터의 특성을 입력해주는 형식

명시적 프로그래밍Explicit Programming : if를 활용하여 특성, 하지만 자율 주행 자동차에서 한계가 드러남, 수많은 경우의 수와 사람이 예측할 수 없는 경우도 많기 때문이다.

퍼셉트론이 하나 : 데이터가 입력되면 비선형 함수를 통해 출력
![image](https://user-images.githubusercontent.com/71163016/167559884-a4275172-a002-4153-81ec-f3d88ad5c8e8.png)

가장 좋은 w를 학습을 통해 찾아야함 -> Activation function(활성화 함수)

![image](https://user-images.githubusercontent.com/71163016/167560677-a6b5f84e-d380-47c7-ac8e-121755ec4905.png)

```python
def perceptron(x, weights):
    # bias
    sum_ = weights[0]
    for i in range(len(x) - 1):
        pre_y += weights[i+1] * x[i]
    return 1 if pre_y >= 0 else 0
```

