import { reactive } from "vue";

export const store = reactive({
  milestones: [
    {
      color: "#A34FDE",
      description: "Enable feature management in your Vue app",
      icon: "mdi-flag-outline",
      key: "initialize",
      title: "Powered by LaunchDarkly",
      hint: "Add your SDK key to the .env file and initialize the client",
      isComplete: false,
    },
    {
      color: "#405BFF",
      description: "Use a boolean flag, a toggle, to unlock a new feature",
      icon: "mdi-toggle-switch",
      key: "qr-code",
      title: "Your First Flag",
      hint: "Turn on the QR Code flag in LaunchDarkly",
      isComplete: false,
    },
    {
      color: "#FF386B",
      description:
        "Feature flags are more than toggles, they can be strings, numbers, or objects",
      icon: "mdi-all-inclusive",
      key: "beyond-the-boolean",
      title: "Beyond the Boolean",
      hint: "Turn on and set a new foreground and background color for the QR Code",
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
  completeMission() {
    this.missionComplete = true;
  },
  resetMission() {
    this.missionComplete = false;
  },
  completeItem(key) {
    this.milestones = this.milestones.map((eachItem) => {
      if (eachItem.key === key) {
        console.log(`completing item: ${eachItem.key}`);
        return { ...eachItem, isComplete: true };
      }
      return eachItem;
    });
  },
  uncompleteItem(key) {
    this.milestones = this.milestones.map((eachItem) => {
      if (eachItem.key === key) {
        console.log(`uncompleting item: ${eachItem.key}`);
        return { ...eachItem, isComplete: false };
      }
      return eachItem;
    });
  },
});
