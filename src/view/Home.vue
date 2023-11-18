<template>
    <div class="">
        <div class="absolute h-screen w-screen flex flex-col justify-center items-center bg-blue-50 py-10">
            <div>
                <div class="flex gap-x-4 items-center mb-4">
                    <p class="text-3xl font-semibold">Notif</p>
                    <p class="text-2xl bg-red-500 text-white px-3 py-1 rounded-md">{{ totalNotif }}</p>
                </div>          
                <div class="relative bg-white p-12 rounded-md shadow-lg"> 
                    <button class="bg-orange-400 text-white px-5 py-3 rounded-full absolute right-3 bottom-4" @click="setIsModalOpen">+</button>
                    <div class="content">
                        <ul class="h-[380px] overflow-scroll scrollable">
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
        <div v-if="isModalOpen" class="absolute flex items-center justify-center w-screen h-screen bg-slate-500 bg-opacity-70">
            <!-- <div :class="isModalOpen ? 'block' : 'hidden'" class="absolute flex items-center translate-x-1/2 h-screen w-6/12 bg-gray-500 bg-opacity-30"> -->
                <div id="modal" class="w-[500px] bg-white rounded-md mx-8 px-4 py-10 flex flex-col gap-2">
                    <div class="flex justify-between items-start">
                        <span class="mb-2 font-semibold">Add Notification</span>
                        <button  @click="isModalOpen = false">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="text-red-500 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <input v-model="notification.nama" type="text" id="name" class="w-full h-10 p-2 rounded-md border-2 border-gray-200" placeholder="Name">
                    <select v-model="notification.action" name="action" id="action" class="w-full h-10 p-2 rounded-md border-2 bg-white border-gray-200">
                        <option value="" selected>Choose action</option>
                        <option value="join">Join</option>
                        <option value="follow">Follow</option>
                        <option value="message">Message</option>
                    </select>
                    <textarea v-if="notification.action === 'message'" v-model="notification.message" name="message" id="message" placeholder="Write your message" class="w-full h-36 p-2 rounded-md border-2 border-gray-200"></textarea>
                    <button @click="addNotification" id="add-btn" class="w-16 py-1 text-white bg-orange-400 rounded-md mt-2 hover:bg-orange-500">Add</button>
                </div>
        </div>
    </div>
  </template>

<script lang="ts">
    import { ref, computed } from 'vue';
    import { notif, data, bodyNotif } from './data';
    
    export default {
        setup(){
            /* inisiasi data */
            const myData = ref<data>(notif);

            const notificationBody = {
                nama: '',
                action: 'join',
                message: '',
                hasRead: true
            }
            const notification = ref<bodyNotif>(notificationBody);
            const addNotification = () => {
                notif.push(notification.value);
                isModalOpen.value = false;
            }

            let isModalOpen = ref<boolean>(false);
            const setIsModalOpen = () => {
                if(isModalOpen.value == false) {
                    isModalOpen.value = true
                }
            }

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
                totalNotif,
                isModalOpen,
                notification,
                setIsModalOpen,
                addNotification
            }
        }
        
    }
</script>

