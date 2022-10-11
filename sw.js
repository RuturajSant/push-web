self.addEventListener("push", () => {
    self.registration.sendNotification("test notification", {
        body: "test body",
        icon: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
    })
})