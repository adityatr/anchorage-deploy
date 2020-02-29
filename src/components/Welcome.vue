<template>
<div>
    <h1> WEclome</h1>
    <span v-if="user">{{user.email}}</span>
</div>
</template>

<script>
import userQuery from '@/queries/user.gql'

export default {
    apollo:{
        user:{
            query: userQuery,
            variables(){
                return { id: Number.parseInt(this.$store.state.userId)}
            }
        }
    }
}
</script>