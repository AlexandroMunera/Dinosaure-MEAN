const API_BASE = "/api"
const db = require("../db");
const bodyParser = require('body-parser');

module.exports = function(app){

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.get(`${API_BASE}/dinos`, async (req, res)=>{
        const query = await db.getDinos();
        res.json(query);
    });

    app.get(`${API_BASE}/dino/:name`, async (req, res)=>{
        const query = await db.getDinosByName(req.params.name);
        res.json(query);
    });

    app.put(`${API_BASE}/dino/:id/`, async (req, res)=>{

        console.log('req.params', req.params);
        console.log('req.body', req.body);
        const query = await db.updateDinoByName(req.body);

        res.status(200).json({
            data: query,
            message: 'Dino updated'
        });
    });

    app.post(`${API_BASE}/dino/:name`, async (req, res)=>{
        
        console.log('req.params', req.params);
        console.log('Body', req.body);
        const query = await db.createDino(req.params.name);

        res.status(201).json({
            data: query,
            message: 'Dino created'
        });
    });

    app.delete(`${API_BASE}/dino/:id`, async (req, res)=>{

        console.log('req.params', req.params);
        const query = await db.deleteDino(req.params.id);

        res.status(200).json({
            data: query,
            message: 'Dino deleted'
        });
    });
};