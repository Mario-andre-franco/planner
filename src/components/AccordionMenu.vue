<template>
    <div class="">
        <div class="">
            <a href="#" class="p-4 block no-underline text-lilac-bush-700 border-b-2 border-t-2 border-white flex justify-between" @click.prevent="active = !active">
                <strong>{{title}}</strong>
                <span class="down-Arrow" v-show="!active">&#9660;</span>
                <span class="up-Arrow" v-show="active">&#9650;</span>
            </a>
        </div>
        <div class="flex flex-col items-center p-2" v-show="active">
            <slot/>
        </div>            
    </div>
</template>
<script>
export default {
    props: [
        'title'
    ],
    data() {
    return {
            active: false,
        }
    }
}
</script>