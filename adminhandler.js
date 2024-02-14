import { auth } from './middleware.js';
let statistics = [
    { "id": 1, "name": "Dhoni", "team": "csk", "avg": "40", },
    { "id": 2, "name": "Jadeja", "team": "csk", "avg": "30", },
    { "id": 3, "name": "Ashwin", "team": "rr", "avg": "28", },
    { "id": 4, "name": "kohli", "team": "rcb", "avg": "50", },
    { "id": 5, "name": "rohit", "team": "mi", "avg": "35", },
    { "id": 6, "name": "rishabh", "team": "dc", "avg": "38", }
];

//display using get method
export function stats(req, res, next) {

    try {
        //authorization
        if (auth(String(req.body.name), String(req.body.password)) == true) {
            res.status(200).json({
                message: 'Authorized',
                table: statistics
            })
        }
        else {
            res.status(401).json({
                message: 'UnAuthorized'
            })
        }
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}

//finding data using get method
export function team(req, res, next) {
    try {
        let teams = [];
        const teamName = String(req.params.team);
        if (auth(String(req.body.name), String(req.body.password)) == true) {
            statistics.find(function (teamdetails) {
                if (teamdetails.team == teamName) {
                    teams.push(teamdetails)
                }
            })
            next();
        }
        else {
            res.status(401).json({
                message: 'UnAuthorized'
            })
        }
        res.status(200).json({
            message: 'Authorized',
            table: teams
        })
    }
    catch (err) {
        res.status(500).json({ error: err })
    }
}

