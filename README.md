# VUE Event handling:

<ul>
    <li>
        button v-on:click="add()">
    </li>
    <li>
        input v-on:input="setName" // onChange, keyup, keydown"
    </li>
    <li>
        input v-on:input="setName($event, 'Ali')" // first argument event"
    </li>
        form v-on:submit.prevent="submitForm" // do not need to call event.preventDefault due to prevent event modifier
</ul>
