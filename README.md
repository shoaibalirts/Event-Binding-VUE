# VUE Event handling:
<ul>
    <li>
        <button v-on:click="add()">Add</button>
    </li>
    <li>
        <input type="text" v-on:input="setName" /> // onChange, keyup, keydown
    </li>
    <li>
        <input type="text" v-on:input="setName($event, 'Ali')" /> // first argument event
    </li>
</ul>

