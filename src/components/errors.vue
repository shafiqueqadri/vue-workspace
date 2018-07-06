<template>
    <ul>
        <li class="text-danger" v-for="(item, index) in errors" :key="index">{{item}}</li>
    </ul>
</template>
<script>
export default {
  props: ['errors']
}
</script>
