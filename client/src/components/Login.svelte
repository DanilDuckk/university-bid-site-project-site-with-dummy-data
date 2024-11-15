<script>
    import {loginUser} from '../stores/userStore.js'
    let username = '';
    let password = '';

    const handleLoginClick = async () => {
        event.preventDefault();
        if(username === '' || password === ''){
            alert('Some data missing')
            return;
        }
        const loginData = {
            username,
            password
        };
        let proof = confirm("Do you like eating ducks?")
        if(proof){
            window.location.href = '/hater';
            return;
        }

        await loginUser(loginData)
    };
</script>

<body>
    <input type="text" placeholder="Username" bind:value={username} required />
    <input type="password" placeholder="Password" bind:value={password} required />
    <button type="submit" on:click={handleLoginClick}>Login</button>
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

    input:focus {
        outline: none;
        border-color: #007BFF;
    }
    button {
        width: 80%;
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