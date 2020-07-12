<script>
    import User from './User.svelte'
    import {db} from './firestore'
    import {createEventDispatcher} from 'svelte'
    import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'



    const dispatch=createEventDispatcher();
    let users=[];
    let email;
    let name;


    const query=db.collection('users').onSnapshot(data=>{

      //  let isTrue=data.docs[0].exists;
        users=data.docs;
    });

    function addNew() {
    db.collection('users').add({
        'email':email,
        'name':name
    });
        notifier.success('User added!')


        email='';
        name='';
    }
    function itemUpdate(event) {
        const newId=event.detail.id;
        db.collection('users').doc(newId).update({
            'email':event.detail.users.email,
            'name':event.detail.users.name
        })
        notifier.info('User updated!')


    }
</script>
<NotificationDisplay />


<div class="user">
    <form on:submit|preventDefault={addNew}>
        <input type="email" bind:value={email}>
        <input type="text" bind:value={name}>
        <button type="submit">Add</button>
        <button on:click={()=>dispatch('logOut')}>Logout</button>

    </form>
</div>

<div id="user">
    {#each users as user (user.id)}
    <User
    id={user.id}
    users={user.data()}
    on:onUpdate={itemUpdate}/>
    {/each}
</div>
