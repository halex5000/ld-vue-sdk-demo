import { reactive } from "vue";

export const store = reactive({
  milestones: [
    {
      color: "#A34FDE",
      description: "Feature management enabled",
      icon: "mdi-flag-outline",
      key: "initialize",
      title: "Powered by LaunchDarkly",
      hint: "Add your SDK key to the .env file",
      isComplete: false,
    },
    {
      color: "#405BFF",
      description: "Boolean flag use",
      icon: "mdi-toggle-switch",
      key: "qr-code",
      title: "QR Code Available",
      hint: "Turn on the QR Code Flag",
      isComplete: false,
    },
    {
      color: "#FF386B",
      description: "Multivariate string used to style QR Code",
      icon: "mdi-all-inclusive",
      key: "beyond-the-boolean",
      title: "Beyond the Boolean",
      hint: "Relese a new color scheme for the QR Code",
      isComplete: false,
    },
    {
      color: "#3DD6F5",
      description: "Target a specific user to show a new feature",
      icon: "mdi-bullseye-arrow",
      key: "targeting",
      title: "User Targeting",
      hint: "Target a user to show them a new feature!",
      isComplete: false,
    },
  ],
  setActiveUser(username) {
    this.username = username;
  },
  resetActiveUser() {
    this.username = null;
  },
  completeItem(key) {
    this.milestones = this.milestones.map((eachItem) => {
      if (eachItem.key === key) {
        console.log(`updating item: ${eachItem.key}`);
        return { ...eachItem, isComplete: true };
      }
      return eachItem;
    });
  },
});
