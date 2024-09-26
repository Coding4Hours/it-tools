<script setup lang="ts">
import { ref } from 'vue';

const inputCode = ref('');
const minifiedCode = ref('');

function minifyJS(input: string): string {
    return input
        // Remove single-line comments
        .replace(/\/\/.*?\n/g, '')
        // Remove multi-line comments
        .replace(/\/\*[\s\S]*?\*\//g, '')
        // Remove unnecessary whitespace
        .replace(/\s+/g, ' ')
        .replace(/^\s+|\s+$/g, '') // Trim leading and trailing spaces
        .replace(/;?\s*}/g, '}') // Remove semicolons before closing braces
        .replace(/;\s*}/g, '}') // Remove semicolons before closing braces
        .replace(/\s*;\s*/g, ';') // Clean up semicolons
        .replace(/\s*{\s*/g, '{') // Clean up braces
        .replace(/\s*}\s*/g, '}') // Clean up braces
        .replace(/\s*\(\s*/g, '(') // Clean up parentheses
        .replace(/\s*\)\s*/g, ')') // Clean up parentheses
        .replace(/\s*=\s*/g, '=') // Clean up assignments
        .replace(/\s*>\s*/g, '>') // Clean up greater than
        .replace(/\s*<\s*/g, '<') // Clean up less than
        .replace(/\s*!\s*/g, '!') // Clean up not
        .replace(/\s*\+\s*/g, '+') // Clean up addition
        .replace(/\s*\-\s*/g, '-') // Clean up subtraction
        .replace(/\s*\*\s*/g, '*') // Clean up multiplication
        .replace(/\s*\/\s*/g, '/') // Clean up division
        .replace(/\s*%\s*/g, '%'); // Clean up modulus
}

function minify() {
    minifiedCode.value = minifyJS(inputCode.value);
}
</script>

<template>
  <c-card title="JavaScript Minifier">
    <textarea v-model="inputCode" rows="10" cols="50" placeholder="Enter your JavaScript code here..."></textarea>
    <c-button @click="minify">Minify Code</c-button>
    <h2>Minified Code:</h2>
    <pre>{{ minifiedCode }}</pre>
  </c-card>
</template>

<style scoped>
textarea {
  width: 100%;
  margin-bottom: 10px;
}
button {
  margin-bottom: 20px;
}
pre {
  background: #f4f4f4;
  padding: 10px;
  border: 1px solid #ccc;
  overflow: auto;
}
</style>
