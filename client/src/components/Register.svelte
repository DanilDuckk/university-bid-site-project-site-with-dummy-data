<script>
    import { registerUser } from "../stores/userStore.js";

    let username = '';
    let email = '';
    let password = '';
    let repeatPassword = '';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    async function handleButtonClick() {
        event.preventDefault();
        if(username==='' || email==='' || password==='' || repeatPassword===''){
            return;
        }
        if (password !== repeatPassword) {
            alert("Passwords do not match.");
            return;
        }
        if(!emailPattern.test(email)){
            alert("Please enter a valid email address.");
            return
        }

        const registrationData = {
            username,
            email,
            password
        };

        await registerUser(registrationData);
    }
</script>

<body>
<input type="text" placeholder="Name" bind:value={username} required />
<input type="email" placeholder="E-mail address" bind:value={email} required />
<input type="password" placeholder="Password" bind:value={password} required />
<input type="password" placeholder="Repeat Password" bind:value={repeatPassword} required />
<button type="submit" on:click={handleButtonClick}>Submit</button>
</body>

<style>
    input {
        width: 100%;
        padding: 1.2vw;
        margin-bottom: 2vw;
        font-size: 1.5vw;
        border: 0.2vw solid #ccc;
        border-radius: 0.5vw;
    }

    button {
        width: 100%;
        padding: 1.5vw;
        font-size: 1.5vw;
        background-color: #007BFF;
        color: #fff;
        border: none;
        border-radius: 0.5vw;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>