const express = require('express');
const app = express.Router();
const memberService = require('./memberService');
const baseError  = require('../exception/baseError');

app.post('/', async (req, res) => {
    try {
        const requestMember = req.body;
        await memberService.createMember(requestMember);
        return res.send("Success");
    } catch (err) {
        throw new baseError(400, err);
    }
});

app.get('/', async (_req, res) => {
    try {
        const members = await memberService.getMembers();
        return res.send(members);
    } catch (err) {
        throw new baseError(400, err);
    }
});

app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const member = await memberService.getMember(id);
        return res.send(member);
    } catch (err) {
        throw new baseError(400, err);
    }
});

app.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const requestMember = req.body;
        await memberService.modifyMember(id, requestMember);
        return res.send("Success");
    } catch (err) {
        throw new baseError(400, err);
    }
});

app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await memberService.deleteMember(id);
        return res.send("Success");
    } catch (err) {
        throw new baseError(400, err);
    }
});

module.exports = app;