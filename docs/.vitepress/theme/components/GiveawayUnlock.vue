<template>
  <div class="giveaway-unlock">
    <div v-if="!unlocked" class="unlock-form">
      <h2>🎁 Giveaway</h2>
      <p>Enter the name of the cat racing game, shown on our games list, to unlock your prize:</p>

      <div class="input-group">
        <input
          v-model="userInput"
          type="text"
          placeholder="Enter game name..."
          @keyup.enter="checkAnswer"
          class="game-input"
        />
        <button @click="checkAnswer" class="check-btn">Unlock</button>
      </div>

      <p v-if="showError" class="error-message">❌ Not quite right! Hint: It features a speedy cat...</p>
    </div>

    <div v-else class="unlocked-content">
      <h2>🎉 Congratulations!</h2>
      <p>You've successfully completed the treasure hunt!</p>

      <div class="code-box">
        <h3>Your Giveaway Code:</h3>
        <div class="code">PROCAT2025</div>
        <p class="instructions">Enter this code on the giveaway page in the code entry field</p>
      </div>

      <p class="thanks-message">Thanks for taking part in the giveaway, we hope you've enjoyed it! Thanks for supporting us by getting a Pro server.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userInput = ref('')
const unlocked = ref(false)
const showError = ref(false)

const checkAnswer = () => {
  const answer = userInput.value.toLowerCase().trim()
  const correctAnswers = ['need for cat', 'needforcat', 'need 4 cat']

  if (correctAnswers.includes(answer)) {
    unlocked.value = true
    showError.value = false
  } else {
    showError.value = true
    setTimeout(() => {
      showError.value = false
    }, 3000)
  }
}
</script>

<style scoped>
.giveaway-unlock {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
}

.unlock-form, .unlocked-content {
  text-align: center;
}

.unlock-form h2, .unlocked-content h2 {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.unlock-form p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.input-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.game-input {
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 2px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: border-color 0.3s;
}

.game-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.check-btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: var(--vp-c-brand-1);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.check-btn:hover {
  background: var(--vp-c-brand-2);
}

.error-message {
  color: var(--vp-c-danger-1);
  font-weight: 500;
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  75% { transform: translateX(10px); }
}

.code-box {
  background: var(--vp-c-bg-soft);
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
}

.code-box h3 {
  margin-bottom: 1rem;
  color: var(--vp-c-brand-1);
}

.code {
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Courier New', monospace;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  letter-spacing: 0.1em;
}

.instructions {
  margin-top: 1rem;
  font-size: 0.95rem;
}

.instructions a {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}

.thanks-message {
  margin-top: 1.5rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  text-align: center;
}
</style>
