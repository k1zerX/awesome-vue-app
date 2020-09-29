<template>
	<div style="width: 200px; margin:auto; text-align:center;">
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
		await new Promise(resolve => setTimeout(resolve, 2000));
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
		}),
		methods: {
			async login() {
				this.loading = true;
				if (await pseudoLogin(this.username, this.password))
					console.log(this);
//					redirect('/profile'); // TODO
				else
					console.log('noooo');
				this.loading = false;
			}
		},
	}
</script>
