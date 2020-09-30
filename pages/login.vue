<template>
	<div class="loginForm">
		<h1>Login auth: {{$store.state.authenticated}}</h1>
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
	async function pseudoLogin(username, password) {
		await new Promise(resolve => setTimeout(resolve, 1000)); // simulating request to DB
		await $store.commit('login');
		return username == 'Admin' && password == '12345';
	}

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
				const { username, password, $refs, $store, $router, valid } = this;
				$refs.loginForm.validate();
				if (!valid)
					return;
				this.loading = true;
				console.log('help meeee');
				if (await pseudoLogin(username, password))
				{
					this.loginFailed = false;
					$router.go(-1) // TODO may be this.$router
				}
				else
					this.loginFailed = true;
				console.log('2 help meeee');
				this.loading = false;
			}
		},
	}
</script>
