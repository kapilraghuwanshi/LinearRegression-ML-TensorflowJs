import * as tf from '@tensorflow/tfjs';
import 'bootstrap/dist/css/bootstrap.css';
// run by parcel index.html

// Define a machine learning model for linear regression
//---------------------------Creating & Configuring the model--------------------------------------------//
//A sequential model is any model where the outputs of one layer are the inputs to the next layer,
// i.e. the model topology is a simple ‘stack’ of layers, with no branching or skipping.
const model = tf.sequential();
//Having created that model we’re ready to add a first layer by calling model.add.
//In a dense layer, every node in the layer is connected to every node in the preceding layer. 
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Specify loss and optimizer for model
//Here we’re using the meanSquaredError loss function. In general a loss function is used to map values of one or more variables 
//onto a real number that represents some “costs” associated with the value.
//Sgd stands for Stochastic Gradient Descent and it an optimizer function which is suitable for linear regression tasks like in our case.
model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

//---------------------------Training the model--------------------------------------------//
//To train the model with value pairs from the function Y=2X-1 we’re defining two tensors with shape 6,1
// Prepare training data (consider them in x-y axis like (-1, -3) (0,-1))
const xs = tf.tensor2d([-1, 0, 1, 2, 3, 4], [6, 1]);
const ys = tf.tensor2d([-3, -1, 1, 3, 5, 7], [6, 1]);

// Train the model
// The number 500 which is assigned here is specifying how many times TensorFlow.js is going through your training set.
//The result of the fit method is a promise so that we’re able to register a callback function
// which is activated when the training is concluded.
model.fit(xs, ys, { epochs: 500 }).then(() => {
        // Use model to predict values an example
        //model.predict(tf.tensor2d([5], [1, 1])).print();
        // Use model to predict values
        document.getElementById('predictButton').disabled = false;
        document.getElementById('predictButton').innerText = "Predict";
    });
//---------------------------Prediction--------------------------------------------//
//This method is expecting to receive the input value as a parameter in the form of a tensor
//In this specific case we’re creating a tensor with just one value (5) inside and pass it over to predict

// Register click event handler for predict button
document.getElementById('predictButton').addEventListener('click', (el, ev) => {
    // taking val from user and passing in predict method
    let val = document.getElementById('inputValue').value;
    let inputNo = parseFloat(val);
    document.getElementById('output').innerText = model.predict(tf.tensor2d([inputNo], [1, 1]));
});