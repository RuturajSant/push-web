var push = require('web-push');
let vapid = {
    publicKey: 'BEcWVo6kImZj_ou0HMa6zzpUe6jlJdpCfIOM15Uf06tfyBA-0YXfVm-0Vyf3RfbfvPiLGNIuTSZ5Zf5sYzsNe1U',
    privateKey: '7i560sx3dNjUp5vx4DImhrokx0SoNA5BKNqOk6H1PsE'
}

push.setVapidDetails('mailto:sant.ruturaj2001@gmail.com', vapid.publicKey, vapid.privateKey)
let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/eAWyx1fe4Do:APA91bEe8aMY8BOL_p0uWxjBkJm03Or77EScWQbLOo8DlkBs6h7pstPYPlQHMzM2flqzK6GxLS-ucvb1_CVfZJD66BXabcVy-DMpYlMGIvr7RsuTrqE-Fg1JWJeZ6gaac6JyMv2C5unU", "expirationTime": null, "keys": { "p256dh": "BINjwiHaCV9Miya-HTU0_qYNCLNRhCwtcXypfCKSjlVVcjUAe6qwXOuGtprWjSLxh0IuO6_y8tkwY_qTwaP66l4", "auth": "kIPD7Ye3uCfmETQ4IbuPqQ" } }
push.sendNotification(sub, "test message")