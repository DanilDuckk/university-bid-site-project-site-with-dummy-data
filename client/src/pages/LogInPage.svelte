<script>
    import LoginButton from '../components/Login.svelte'
</script>

<body>
    <div class="login-box">
        <form action="#" method="POST">
            <LoginButton/>
            <a id="registerLink" href="register">Don't have an account yet?</a>
        </form>
    </div>
</body>

<style>
    #registerLink {
        display: flex;
        font-size: 1.2vw;
        margin-top: 1vw;
        justify-content: center;
    }

    body {
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80vh;
        background-color: #f5f5f5;
    }

    .login-box {
        background-color: #fff;
        padding: 4vw;
        box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.1);
        border-radius: 0.5vw;
        width: 30vw;
        text-align: center;
    }
</style>