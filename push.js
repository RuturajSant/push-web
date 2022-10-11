var push = require('web-push');
let vapid = {
    publicKey: 'BEcWVo6kImZj_ou0HMa6zzpUe6jlJdpCfIOM15Uf06tfyBA-0YXfVm-0Vyf3RfbfvPiLGNIuTSZ5Zf5sYzsNe1U',
    privateKey: '7i560sx3dNjUp5vx4DImhrokx0SoNA5BKNqOk6H1PsE'
}

push.setVapidDetails('mailto:sant.ruturaj2001@gmail.com', vapid.publicKey, vapid.privateKey)
push.sendNotification(sub, "test message")