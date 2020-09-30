<template>
	<div class="loginForm">
		<h1>Вход</h1>
		<v-form
			ref="loginForm"
			v-model="valid"
		>
			<div v-if="loginFailed" class="warningBanner">
				Имя пользователя или пароль введены неверно!	
			</div>
			<v-text-field
				v-model="username"
				:rules="rules"
				label="Имя пользователя"
				required
			/>
			<v-text-field
				v-model="password"
				:rules="rules"
				:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
				:type="showPassword ? 'text' : 'password'"
				label="Пароль"
				@click:append="showPassword = !showPassword"
				required
			/>
			<v-btn
				block
				:loading="loading"
				:disabled="loading || !valid"
				@click="login"
			>Войти
			</v-btn>
		</v-form>
	</div>
</template>

<script>
	export default {
		data: () => ({
			valid: false,
			username: '',
			password: '',
			rules: [
				val => (val || '').length > 0 || 'Поле обязательно к заполнению',
			],
			showPassword: false,
			loading: false,
			loginFailed: false,
		}),
		methods: {
			async login() {
				this.loading = true;
				this.loginFailed = false;

				const { username, password, valid, $refs, $store, $cookies, $router, $route: { query } } = this;
				const prevPage = query.prevPage || '/';

				$refs.loginForm.validate();
				if (!valid)
					return;

				await new Promise(resolve => setTimeout(resolve, 1000)); // simulating request to DB
				if (username == 'Admin' && password == '12345')
				{
					await $store.commit('login', { $cookies });
					$router.push(prevPage);
				}
				else
					this.loginFailed = true;

				this.loading = false;
			}
		},
	}
</script>
