export const playerClose = async (req, res) => {
    console.log('Player Close');
    console.log(req.body);
    res.status(200).send({ "ResultCode" : 0, "Message" : "OK" })
}

export const playerCreate = async (req, res) => {
    console.log('Player created');
    console.log(req.body);
    res.status(200).send({ "ResultCode" : 0, "Message" : "OK" })
}

export const playerEvent = async (req, res) => {
    console.log('Player Event');
    console.log(req.body);
    res.status(200).send({ "ResultCode" : 0, "Message" : "OK" })
}

export const playerJoin = async (req, res) => {
    console.log('Player Join');
    console.log(req.body);
    res.status(200).send({ "ResultCode" : 0, "Message" : "OK" })
}

export const playerLeave = async (req, res) => {
    console.log('Player Leave');
    console.log(req.body);
    res.status(200).send({ "ResultCode" : 0, "Message" : "OK" })
}

export const playerProperties = async (req, res) => {
    console.log('Player Properties');
    console.log(req.body);
    res.status(200).send({ "ResultCode" : 0, "Message" : "OK" })
}
