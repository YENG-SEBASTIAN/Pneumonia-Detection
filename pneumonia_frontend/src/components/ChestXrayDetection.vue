<template>
<div class="min-h-screen flex items-center justify-center bg-gray-600">
    <div class="bg-white bg-opacity-80 p-6 md:p-8 lg:p-12 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg" 
        :style="{ backgroundImage: 'url(' + backgroundImage + ')', backgroundSize: 'cover', backgroundPosition: 'center' }">
    <h1 class="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4">Chest X-Ray Pneumonia Detection</h1>
    <p class="text-gray-800 text-center mb-6">
        Detecting pneumonia early is critical in saving lives. Pneumonia can be life-threatening, and early detection 
        through chest X-rays allows healthcare providers to diagnose and treat the condition effectively. 
        Using AI for chest X-ray analysis enables faster and more accurate predictions, making diagnosis accessible for everyone.
    </p>
    
    <form @submit.prevent="submitForm" class="space-y-6">
        <input 
        type="file" 
        @change="onFileChange" 
        class="block w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button 
        type="submit" 
        class="w-full py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition duration-300 ease-in-out">
        Submit
        </button>
    </form>
    <p v-if="result" class="mt-8 text-center text-xl text-green-600">Prediction: {{ result }}</p>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import backgroundImage from '@/assets/xray.png'; // Adjust the path as necessary

export default {
data() {
    return {
    file: null,
    result: null,
    backgroundImage, // Store the imported image path
    };
},
methods: {
    onFileChange(e) {
    this.file = e.target.files[0];
    },
    async submitForm() {
    const formData = new FormData();
    formData.append('file', this.file);

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/predict/', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        });
        this.result = response.data.result;
    } catch (error) {
        console.error('There was an error!', error);
    }
    },
},
};
</script>

<style scoped>
/* Ensuring the background is visible with some opacity */
.bg-gray-500 {
background-color: rgba(100, 100, 100, 0.5);
}

@media (max-width: 768px) {
.p-6 {
    padding: 1.5rem;
}

h1 {
    font-size: 1.75rem; /* Smaller font size for mobile */
}
}
</style>
