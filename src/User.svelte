<script>
    import {db} from './firestore'
    import {createEventDispatcher} from 'svelte';
    import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications'


    export let id;
    export let users={};
    const dispatch=createEventDispatcher();

    function onSil(){
        db.collection('users').doc(id).delete();
        notifier.danger('User deleted!')

    }
    function itemUpdate() {
        dispatch('onUpdate',{
          users,id
        })
    }
</script>
<NotificationDisplay />

<div class="user">
    <input type="text" bind:value={users.email}>
    <input type="text" bind:value={users.name}>
    <button on:click={onSil}>Delete</button>
    <button on:click={itemUpdate}>Update</button>
</div>
