<template>
  <form v-on:submit="login">
    <input
      type="hidden"
      name="token"
      value="906540284cfe573b967da5250dfd99aabb8d87f7"
    />
    <input
      type="hidden"
      name="action"
      value="011d2e9ee888fecdd678f2a9aee33ac9"
    />
    <fieldset class="form__fieldset">
      <legend class="form__title sr-only">Account Login</legend>
      <label class="form__label" for="username">Road to Xavier ID</label>
      <input
        type="text"
        class="form__input"
        id="username"
        name="user[username]"
      />
      <label class="form__label" for="userpass">Password</label>
      <input
        type="password"
        class="form__input"
        id="userpass"
        name="user[password]"
      />
      <label class="form__checkbox">
        <input
          type="checkbox"
          name="user[remember_me]"
          id="remember_me"
          value="Yes"
        />
        keep me signed in
      </label>
      <div class="action">
        <button type="submit" class="o-btn c-btn">Sign In</button>
      </div>
    </fieldset>
  </form>
  <div class="text--centered">
    <p>
      <a href="create">Create account</a> |
      <a href="forgot">Forgot password</a>
    </p>
    <p><a href="login-parent">Parent Access</a></p>
  </div>

  <p>
    Sign in to access your personalized account, view your next steps, and
    connect with future classmates.
  </p>
</template>

<script>
export default {
  name: 'Login',
  props: {},
  methods: {
    login(e) {
      e.preventDefault()
      console.log(e)
    }
  }
}
</script>
