<template>
  <div>
    <h1>Chest X-Ray Pneumonia Detection</h1>
    <form @submit.prevent="submitForm">
      <input type="file" @change="onFileChange" />
      <button type="submit">Submit</button>
    </form>
    <p v-if="result">Prediction: {{ result }}</p>
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
