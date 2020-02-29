<template>
  <form name="form" method="post"/>
</template>
<script>
export default {
    mounted(){
        this.$store.commit('clearUser')
        document.form.submit()
    }
}
</script>