<template>
	<div class="loginForm">
		<h1>Login</h1>
		<v-form
			ref="loginForm"
			v-model="valid"
			lazy-validation
		>
			<div v-if="loginFailed" class="warningBanner">
				Имя пользователя или пароль введены неверно!	
			</div>
			<v-text-field
				v-model="username"
				label="Имя пользователя"
				required
			/>
			<v-text-field
				v-model="password"
				:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
				:type="showPassword ? 'text' : 'password'"
				label="Пароль"
				@click:append="showPassword = !showPassword"
				required
			/>
			<v-btn
				block
				:loading="loading"
				:disabled="loading"
				@click="login"
			>Войти
			</v-btn>
		</v-form>
	</div>
</template>

<script>
	async function pseudoLogin(username, password) {
		await new Promise(resolve => setTimeout(resolve, 1000)); // симулируем запрос в БД
		if (username == 'Admin' && password == '12345')
			return true;
		else
			return false;
	}
	export default {
		data: () => ({
			valid: true,
			username: '',
			password: '',
			showPassword: false,
			loading: false,
			loginFailed: false,
		}),
		methods: {
			async login() {
				this.$refs.loginForm.validate();
				this.loading = true;
				if (await pseudoLogin(this.username, this.password))
				{
					console.log(this);
					this.loginFailed = false;
//					redirect('/profile'); // TODO
				}
				else
					this.loginFailed = true;
				this.loading = false;
			}
		},
	}
</script>
