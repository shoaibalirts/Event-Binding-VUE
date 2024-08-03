const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    add(num) {
      console.log("clicked");
      this.counter = this.counter + num;
    },
    remove(num) {
      console.log("clicked");
      this.counter = this.counter - num;
    },
    setName(event, lastname) {
      this.name = event.target.value + " " + lastname;
    },
    submitForm() {
      alert("Form by default submission behaviour is prevented.");
    },
  },
});

app.mount("#events");
