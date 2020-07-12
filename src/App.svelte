<script>
    import Users from './Users.svelte'
    import Login from './Login.svelte'
    import {db} from './firestore'
    import { auth,provider } from './firestore.js';




    let isLogin=false;
    let email;
    let url;

    const submitForm = (event) => {

        auth.signInWithEmailAndPassword(event.detail.email, event.detail.password).then(function(result) {

            let firebaseUser = auth.currentUser;
            email=firebaseUser.email;

            if(firebaseUser) {

                let {email} = firebaseUser;
                isLogin=true;
            }

        }).catch(error => alert(error.message));

    };

    function loginGoogle(){
        auth.signInWithPopup(provider).then(function(result){
            let token = result.credential.accessToken;
            let firebaseuser=result.user;
            email=firebaseuser.email;
            url=firebaseuser.photoURL;
            if (firebaseuser){
                let {email} = firebaseuser;
                isLogin=true;
            }
        })
    };
function logOUT() {
    auth.signOut();
    isLogin=false;
}

</script>

{#if !isLogin}
<Login
on:onSubmit={submitForm}
on:logGog={loginGoogle}
/>
{/if}
{#if isLogin}
<h2>Wellcome! {email}</h2>
{#if url}
<img src="{url}" width="50px">
{/if}
<Users
        on:logOut={logOUT}
/>
{/if}
