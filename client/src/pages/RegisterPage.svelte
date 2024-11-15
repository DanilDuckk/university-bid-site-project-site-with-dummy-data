<script>
    import RegisterButton from '../components/Register.svelte'
</script>

<body>
    <div class="form-container">
        <div class="form-box">
            <form action="#" method="POST">
                <RegisterButton/>
            </form>
        </div>
    </div>
</body>
<style>
    .form-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40vw;
    }

    .form-box {
        width: 50vw;
        display: flex;
        background-color: #ffffff;
        padding: 4vw;
        box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.1);
        border-radius: 0.5vw;
    }
</style>