<template>
    <div class="container chat">
        <h2 class="text-primary text-center">Real Time Chat</h2>
        <h5 class="text-secondary text-center">Powered by Vue.js and Firebase</h5>
        <div class="card-body">
            <p class="text-secondary nomessages" v-if="messages.length == 0">[No Messages Yet!]</p>
        </div>
        <div class="messages">
            <div v-for="message in messages" :key="message.id"> 
                <span class="text-info">[{{message.name}}]:  </span>
                <span> {{message.message}}</span>
                <span class="text-secondary time">{{message.timestamp}}</span>
            </div>
            <div class="card-action">
                <createMessage :name="name"/>
            </div>
        </div>
    </div>
</template>
