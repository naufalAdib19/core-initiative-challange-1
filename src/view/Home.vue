<template>
    <div class="h-screen flex flex-col justify-center items-center bg-blue-50">
        <div>
            <div class="flex gap-x-4 items-center mb-4">
                <p class="text-3xl font-semibold">Notif</p>
                <p class="text-2xl bg-red-500 text-white px-3 py-1 rounded-md">{{ totalNotif }}</p>
            </div>          
            <div class="bg-white p-12 rounded-md shadow-lg">
                <div class="content">
                    <ul>
                        <li v-for="data in myData" class="flex mb-6 gap-x-3 items-center justify-between px-5 py-3 rounded-sm" :class="data.hasRead ? 'bg-blue-50 ' : null">
                            <div class="flex gap-x-8">
                                <div class="w-[40px] h-[40px] rounded-full bg-blue-500"/>
                                <div class="max-w-[700px]">
                                    <p><b>{{ data.nama }}</b> {{ data.action }} </p>
                                    <p class="w-[500px]" v-if="data.message">{{ data.message }}</p>
                                    <p>{{ data.time }}</p>
                                </div>
                            </div>         
                            <div :class="data.hasRead ? 'w-[10px] h-[10px] bg-red-600 rounded-full': null" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
  </template>

<script lang="ts">
    import { ref, computed } from 'vue';
    import { notif, data } from './data';
    
    export default {
        setup(){
            /* Copy data source */
            const myData = ref<data>(notif);
            
            /* Kalkulasi total notif yang belum terbaca oleh user */
            let count = ref<number>(0);
            const totalNotif = computed(() => {
                myData.value.map((val) => {
                    if(val.hasRead) {
                        count.value++;
                    }
                })
                return count.value;
            })
            
            return {
                myData,
                totalNotif
            }
        }
        
    }
</script>

