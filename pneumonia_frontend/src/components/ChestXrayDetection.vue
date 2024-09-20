    <template>
    <div class="min-h-screen bg-red-800 flex flex-col items-center justify-center bg-cover bg-center" 
        style="background-image: url('https://images.unsplash.com/photo-1596558451121-e2e27c48599c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');">
        <div class="bg-white bg-opacity-90 p-8 md:p-12 rounded-lg shadow-lg w-full max-w-lg">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">Chest X-Ray Pneumonia Detection</h1>
        <p class="text-gray-600 text-center mb-8">
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

    export default {
    data() {
        return {
        file: null,
        result: null,
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
    /* Ensuring that the form container is responsive and centered */
    .bg-cover {
    background-position: center;
    background-size: cover;
    }

    .min-h-screen {
    min-height: 100vh;
    }

    .bg-white {
    background-color: rgba(255, 255, 255, 0.9);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
    .p-8 {
        padding: 1rem;
    }
    }
    </style>
