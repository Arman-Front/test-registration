<template>
    <div class="container">
        <form action="./public/registration.php" @submit.prevent="onSubmit">
            <div class="registration">
                <h1>{{ reg }}</h1>

                <hr>

                <div class="reg_form">
                    <label for="email">E-mail</label>
                    <input type="email"
                           id="email"
                           placeholder="youremail@gmail.com"
                           @blur="$v.email.$touch()"
                           :class="{'invalid': $v.email.$error}"
                           v-model="email"
                    >
                    <div class="invalid_comment" :class="{'show': !$v.email.email}">Неверно заполнен E-mail.</div>
                </div>  <!-- e-mail -->

                <div class="reg_form">
                    <label for="password">Пароль</label>
                    <input type="password"
                           id="password"
                           placeholder="******"
                           @blur="$v.password.$touch()"
                           :class="{'invalid': $v.password.$error}"
                           v-model="password"
                    >
                    <div class="invalid_comment" :class="{'show': !$v.password.minLength}">
                        Минимальная длинна пароля {{ $v.password.$params.minLength.min }} символов, вы заполнили всего {{ password.length }}.
                    </div>
                </div>  <!-- password -->

                <div class="reg_form">
                    <label for="pass_repeat">Повторите пароль</label>
                    <input type="password"
                           id="pass_repeat"
                           placeholder="******"
                           @input="$v.passRepeat.$touch()"
                           :class="{'invalid': $v.passRepeat.$error}"
                           v-model="passRepeat"
                    >
                    <div class="invalid_comment" :class="{'show': !$v.passRepeat.sameAs}">
                        Пароли не совпадают.
                    </div>
                </div>  <!-- password-repeat -->

                <hr>

                <p>Регистрируясь, вы принимаете наши <a href="#">условия</a>.</p>

                <button type="submit"
                        class="register_button"
                        :disabled="$v.$invalid"
                >
                    Зарегистрироваться</button>
            </div>
        </form>

        <div class="auth">
            <p class="auth_text">Уже зарегестрированы? <a href="/" class="auth_link">Войти</a>.</p>
        </div>
    </div>
</template>

<script>
    import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

    export default {
        name: "Registration",
        data () {
            return {
                email: '',
                password: '',
                passRepeat: '',
                reg: 'Зарегистрироваться'
            }
        },
        methods: {
            onSubmit () {
                // eslint-disable-next-line no-console
                console.log('Email', this.email)
                // eslint-disable-next-line no-console
                console.log('Password', this.password)
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                minLength: minLength(6)
            },
            passRepeat: {
                sameAs: sameAs('password')
            }
        }
    }
</script>

<style lang="scss">
    @import "././src/assets/scss/style";
</style>