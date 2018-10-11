<template>
  <div class="container">
    <div class="image">
      <LoginImage />
    </div>
    <div class="login-form">
      <form action="">
        <label class="label" for="username">Username</label>
        <input class="input" type="text" name="username" id="username">
        
        <label class="label" for="password">Password</label>
        <input class="input" type="password" name="password" id="password">
        
        <button class="button" type="submit">Login</button>
      </form>
      <a class="link" href="#">Forgot password?</a>
    </div>
  </div>
</template>

<script>
import LoginImage from './icons/LoginImage';

export default {
  components: {
    LoginImage
  }
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}

.image {
  width: 100vw;
  height: 210px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  margin-top: 56px;
}

.label {
  display: block;
  text-align: left;
}

.button {
  display: block;
  margin: 0 auto;
  height: 36px;
  width: 122px;
  border-radius: 36px;
  border-style: none;
  background-color: var(--main-color);
  color: var(--selected-bg-color);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 24px;
}

.input {
  height: 44px;
  width: 200px;
  text-align: left;
  padding: 0 8px;
  margin: 8px 0 24px 0;
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
}

.link {
  font-size: 0.8rem;
}
</style>

