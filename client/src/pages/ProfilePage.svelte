<script>
    import UserBids from "../components/UserBids.svelte";
    import {fetchUserInfo} from "../stores/userStore.js"
    import {onMount} from "svelte";
    const token = localStorage.getItem('token');

    let userInfo = {};
    onMount(async () => {
        userInfo = await fetchUserInfo(token);
        await initUserProfile();
    });

    console.log(userInfo);

    function updateProfile() {
        document.getElementById("username").textContent = userInfo.username || undefined;
        document.getElementById("user-email").textContent = userInfo.email || undefined;
        document.getElementById("user-role").textContent = userInfo.role || undefined;
    }
    async function initUserProfile() {
        try {
            updateProfile();
        } catch (err) {
            console.error(err.message);
        }
    }
</script>

<div class="profile">
    <h2>Welcome, <span id="username">User</span>!</h2>
    <p><strong>Email:</strong> <span id="user-email">email@gmail.com</span></p>
    <p><strong>Role:</strong> <span id="user-role">user</span></p>
</div>

<UserBids/>

<style>
    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1vw;
        width: 100%;
        background-color: #f9f9f9;
        box-shadow: 0 1vw 2vw rgba(0, 0, 0, 0.1);
    }

    h2 {
        margin: 0.5vw;
    }

    p {
        margin: 1vw ;
    }
</style>