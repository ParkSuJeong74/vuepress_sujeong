---
sidebar: auto
---
# MachineLearning

`엘리스`

1. 17주차
2. 18주차

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


## 이미지 데이터

### 이미지 데이터의 정의

-> 컴퓨터로 저장한 데이터(jpg, png)(디지털 매체에는 최소 단위가 필요함)

CNN : 딥러닝 모델, 이미지 분류를 잘하기 위한 방향으로 발전됨

Pixel픽셀 : Pictures Elements의 약자, 색이나 밝기 정보를 가짐

컬러는 RGB 채널을 가짐. 각 채널은 8비트의 수로 이루어지고 총 24비트, 채널 값이 클수록 색의 세기가 강해짐

흑백 이미지 : 픽셀이 한가지 값만 가짐, 해당 위치의 밝은 정도, 마찬가지로 8비트의 값을 가지고 값이 클수록 흰색에 가까움

### 딥러닝을 활용한 이미지 처리

사물 인식Object Detection : 자율 주행, 안면과 지문 인식, 의료 -> 비정상 부위 탐지

이미지 캡셔닝Image Captioning : 이미지 분류 결과를 기반으로 이미지를 설명하는 문장을 생성할 수 있다.(+자연어 처리)

딥페이크DeepFake : 한 사람의 얼굴에 다른 사람을 합성

화질 개선 : super resolution(해상도 개선), nvidia dlss(deep learning super sampling, 고해상도 모니터가 부드러움(FPS, frames per second)을 그리는데 부족, 저해상도 -> 고해상도로 늘려줌)

알파고(AlphaGo) : 바둑판 이미지로 학습

### 딥러닝 이전의 이미지 처리 기법

현재 딥러닝 모델 학습을 위한 데이터 가공에도 사용됨

형태, 색상, 필터 변환


- 형태 변환

Crop(잘라내기)

Rotate(회전) : 시계 방향

Resize(사이즈 변환)

![image](https://user-images.githubusercontent.com/71163016/168978284-aa1030a4-8fa0-4878-9920-2614a76880e7.png)

Shearing(전단 변환) : 정사각형 -> 평행사변형

Rescale(비율 변환)

![image](https://user-images.githubusercontent.com/71163016/168978344-b20ce0d9-28b9-4faf-9848-8fedc9df2ccf.png)

- 색상 변환

Brightness(밝기 변화)

Contrast(대조 변화) : 차이가 커짐

Grayscale(흑백 변화) : RGB -> 밝기로 바꿈(R)

![image](https://user-images.githubusercontent.com/71163016/168978418-bde9adf8-b8cf-458f-89f1-a0345521645f.png)


- 필터 변환

Sharpening(샤프닝) : 선이 날카로워짐. 노이즈가 부각될 가능성 높음

Blur(블러) : 모자이크? 한 부분을 강조할때 나머지 부분

Edge Detection(경계선 감지) : 사물의 형태만

![image](https://user-images.githubusercontent.com/71163016/168978447-1f141d8c-1db5-4a2c-9e49-b1f4d02e9c04.png)

### PIL(Python Imaging Library)

[Pillow 바로가기](./PIL-image.ipynb)

