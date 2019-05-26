# FirstML_TensorflowJS_Example
This is the basic most example of TensorflowJS to predict simple mathematical formula results using Linear Regression.

TensorFlow.js is a JavaScript library which makes it possible to add machine learning capabilities to any web application. With TensorFlow.js you can develop machine learning scenarios from scratch.

Tensorflow building block - 1)Tensors 2)Operations 3)Models/Layers.

1) Tensors
Tensors are the central unit of data in TensorFlow. A tensor contains a set of numeric values and can be of any shape: one or more dimensional. When you’re creating a new Tensor you need to define the shape as well. 
const t1 = tf.tensor([1,2,3,4,2,4,6,8]), [2,4]);
[[1,2,3,4],
[2,4,6,8]]
In TensorFlow.js all tensors are immutable. That means that a tensor once created, cannot be changed afterwards. If you perform an operation which is changing values of a tensor, always a new tensor with the resulting value is created and returned.

2) Operations
By using TensorFlow operations you can manipulate data of a tensor. Because of the immutability of tensor operations are always returning a new tensor with the resulting values.
const t3 = tf.tensor2d([1,2], [3, 4]);
const t3_squared = t3.square();
[[1, 4 ],
[9, 16]]

3) Models And Layers
Models and Layers are the two most important building blocks when it comes to deep learning. Each model is build up of one or more layers. TensorFlow is supporting different types of layers. For different machine learning tasks you need to use and combine different types of layers. For the moment it’s sufficient to understand that layers are used to build up neural networks (models) which can be trained with data and then used to predict further values based on the trained information.
