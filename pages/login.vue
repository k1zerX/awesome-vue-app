<template>
	<div>
		<h1>Login</h1>
		<v-form
			rel="login"
			v-model="valid"
		>
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
				:loading="loading"
				:disabled="loading"
				@click="login"
			>Войти
			</v-btn>
		</v-form>
	</div>
</template>

<script>
	pseudoLogin(username, password) {
		if (username == 'Admin' && password == '12345')
	}
	export default {
		data: () => ({
			valid: true,
			username: '',
			password: '',
			showPassword: false,
			loading: false,
		}),
		methods: {
			login() {
				loading = true;
				
			}
		},
	}
</script>
