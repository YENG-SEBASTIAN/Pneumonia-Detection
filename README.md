
---

# Chest X-Ray Pneumonia Detection (Django REST API & Vue.js)

This project is a web application that detects pneumonia from chest X-ray images using a machine learning model. The application is built with Django REST Framework for the backend and Vue.js for the frontend.

## Features
- Upload chest X-ray images via the Vue.js frontend.
- The backend (Django REST API) processes the image and predicts if the image shows signs of pneumonia using a pre-trained deep learning model.
- The prediction result (Pneumonia or Normal) is displayed on the frontend.

## Technologies Used
- **Backend**: 
  - Django
  - Django REST Framework
  - TensorFlow (for model loading and prediction) / PyTorch (optional)
- **Frontend**: 
  - Vue.js
  - Axios (for HTTP requests)
- **Other Dependencies**:
  - Pillow (for image processing)
  - Django CORS Headers (for cross-origin resource sharing)

## Setup Instructions

### Backend (Django)

#### 1. Clone the repository:
```bash
git clone https://github.com/YENG_SEBASTIAN/pneumonia-detection.git
cd pneumonia-detection
```

#### 2. Install dependencies:
Make sure you have Python installed, and then run:
```bash
pip install -r requirements.txt
```

#### 3. Migrate the database:
```bash
python manage.py migrate
```

#### 4. Load the pre-trained model:
Place the pre-trained model

#### 5. Run the Django server:
```bash
python manage.py runserver
```

The backend server should now be running at `http://127.0.0.1:8000/`.

### Frontend (Vue.js)

#### 1. Navigate to the frontend directory:
```bash
cd pneumonia-frontend
```

#### 2. Install frontend dependencies:
Make sure you have Node.js installed, and then run:
```bash
npm install
```

#### 3. Run the Vue.js development server:
```bash
npm run serve
```

The frontend should now be accessible at `http://localhost:8080/`.

### Making Predictions

1. Open the Vue.js frontend in your browser at `http://localhost:8080/`.
2. Upload a chest X-ray image using the provided file input.
3. Click the submit button to send the image to the Django REST API.
4. The model will process the image and return a result, either **Pneumonia** or **Normal**.

## Machine Learning Model
The model used in this project is a pre-trained Convolutional Neural Network (CNN) that was trained on a dataset of chest X-ray images ([Kaggle Chest X-Ray Images (Pneumonia)](https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia) dataset).

If you need to train your own model, you can follow these steps:
1. Load the dataset and preprocess the images.
2. Build a CNN model using TensorFlow or PyTorch.
3. Train the model and save the weights in an `h5` or `pt` file.
4. Replace the pre-trained model in the Django project with your trained model.

## File Structure

```
pneumonia-detection/
│
├── backend(pneumonia_detection)/           # Django backend
│   ├── api/                                # API app
│   │   ├── views.py                        # Contains the prediction logic
│   │   └── ...
│   ├── pneumonia_detection/                # Django project configuration
│   ├── requirements.txt                    # Backend dependencies
│   └── ...
├── frontend(pneumonia_frontend)/           # Vue.js frontend
│   ├── src/                      
│   │   ├── components/                     # Vue components
│   │   ├── App.vue                         # Main Vue file
│   │   └── ...
│   ├── package.json                        # Frontend dependencies
│   └── ...
└── README.md                               # Project documentation
```

## Future Enhancements
- **Improve Model Accuracy**: Use advanced models like ResNet or DenseNet for better pneumonia detection.
- **Authentication**: Add user authentication (e.g., JWT) for secure access to the API.
- **Error Handling**: Improve error handling on both frontend and backend for better user experience.
- **Deployment**: Deploy the Django backend on Heroku and Vue.js frontend on Netlify/Vercel for a fully functioning web app.

## License
This project is licensed under the MIT License. Feel free to contribute and enhance!

---
