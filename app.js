const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      confirmedName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(latestValue, oldValue) {
      setTimeout(() => {
        if (latestValue > 50) {
          this.counter = 0;
        }
      }, 2000);

      console.log(this.counter);
    },
    // name(value) {
    //   // value is a latest value
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + "Ali";
    //   }
    // },
  },
  computed: {
    fullname() {
      console.log("Running?");
      if (this.name === "" || this.lastname === "") {
        return "";
      }
      return this.name + " " + this.lastname;
    },
  },
  methods: {
    outputFullName() {
      console.log("Running again");

      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Ali";
    },
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
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
      this.lastname = "";
    },
  },
});

app.mount("#events");
