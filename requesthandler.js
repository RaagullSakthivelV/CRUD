import { auth } from './middleware.js'; //authentication middleware
const userEmails = {
    'Raagull': 'raagull@steam-a.com',
    'Ragul': 'ragul@steam-a.com',
    'Sandeep': 'sandeep@steam-a.com',
    'Anjana': 'anjana@steam-a.com',
    'Navina': 'navina@steam-a.com',
    'Periyanayaki': 'periyanayaki@steam-a.com'
}

//using get
export function login(req, res, next) {
    try {
        return auth(String(req.body.name), String(req.body.password))
            ? res.status(200).json({
                "msg": "Authorized"
            })
            : res.status(401).json({
                "msg": "UnAuthorized"
            })
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}

//using get
export function emails(req, res, next) {
    try {
        return auth(String(req.body.name), String(req.body.password))
            ? res.status(200).json({
                "msg": "Authorized",
                "emails": userEmails
            })
            : res.status(401).json({
                "msg": "UnAuthorized"
            })
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}

//using get
export function email(req, res, next) {
    try {
        return auth(String(req.body.name), String(req.body.password))
            ? res.status(200).json({
                "msg": "Authorized",
                "email": userEmails[req.params.username]
            })
            : res.status(401).json({
                "msg": "UnAuthorized"
            })
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}

//using post
export function create(req, res, next) {
    try {
        if (auth(String(req.body.name), String(req.body.password)) == true) {
            userEmails[req.body.newUserName] = req.body.newUserEmail;
            res.status(200).json({
                "msg": "Authorized",
                "email": userEmails
            })
        }
        else {
            res.status(401).json({
                "msg": "UnAuthorized"
            })
        }
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}

//using put
export function update(req, res, next) {
    try {
        if (auth(String(req.body.name), String(req.body.password)) == true) {
            userEmails[req.body.name] = req.body.newEmail;
            res.status(200).json({
                "msg": "Authorized",
                "email": userEmails
            })
        }
        else {
            res.status(401).json({
                "msg": "UnAuthorized"
            })
        }
    }
    catch (error) {
        console.log('an error occured', error);
    }
}

//using delete
export function deletefun(req, res, next) {
    try {
        if (auth(String(req.body.name), String(req.body.password)) == true) {
            const nametodelete = req.body.name;
            delete (userEmails[nametodelete])
            next();
        }
        else {
            return res.status(401).json({
                "msg": "UnAuthorized",
            })
        }
        res.status(200).json({
            "msg": "Authorized",
            "email": userEmails
        })
    }
    catch (error) {
        console.log('an error occured');
    }
}

//using patch
export function partialupdate(req, res, next) {
    try {
        if (auth(String(req.body.name), String(req.body.password)) == true) {
            userEmails[req.body.name] = req.body.newEmail;
            next();
        }
        else {
            res.status(401).json({
                "msg": "UnAuthorized"
            })
        }
        res.status(200).json({
            "msg": "Authorized",
            "email": userEmails
        });
    }
    catch (err) {
        res.status(500).json({ error: err })
    }

}