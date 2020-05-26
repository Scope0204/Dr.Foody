import os
import sys
import io
import flask
from flask import Flask, redirect, url_for, request, render_template, Response, jsonify, redirect
from werkzeug.utils import secure_filename


# TensorFlow and tf.keras
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.applications.imagenet_utils import preprocess_input, decode_predictions
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np
from PIL import Image


app = flask.Flask(__name__)

model_path = './food_final.h5'
model = load_model(model_path)
model.summary()
image_path = './shin.jpg'
print('model loaded. start Serving')


def prepare_image(img, target):
    img = img.resize(target)
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x, mode="caffe")
  
    return x



@app.route('/', methods=['GET'])
def index():
    return 'hello'


@app.route("/predict", methods=['POST'])

def predict():
    data = {"success": False}

    # ensure an image was properly uploaded to our endpoint
    if flask.request.method == "POST":
        if flask.request.files.get("image"):
            # read the image in PIL format
            image = flask.request.files["image"].read()
            image = Image.open(io.BytesIO(image))

            # preprocess the image and prepare it for classification
            image = prepare_image(image, target=(64, 64))
            
            # classify the input image and then initialize the list
            # of predictions to return to the client
            preds = model.predict(image)
            preds = np.argmax(preds, axis=1)
            print(preds)
            # np.set_printoptions(formatter={'float': lambda x: "{0:0.3f}".format(preds)})
            for i in preds:
                pre_ans = i.argmax()
                print(pre_ans)
                pre_ans_str = ''
                if pre_ans == 0: 
                    pre_ans_str = "fire"

                elif pre_ans == 1:
                    pre_ans_str = "potato"

                elif pre_ans == 2: 
                    pre_ans_str = "shin"

                else: pre_ans_str = "모름"

            return pre_ans_str
            # label = np.argmax(preds)
            # print("label", label)
            # labelName = names[label]
            # print("Label name:", labelName)
            # return labelName

            # loop over the results and add them to the list of
            # returned predictions
            
            

            # indicate that the request was a success
            data["success"] = True

    # return the data dictionary as a JSON response
    # return jsonify(preds).data 

if __name__ == "__main__":
    print(("* Loading Keras model and Flask starting server..."
        "please wait until server has fully started"))

    app.run()
